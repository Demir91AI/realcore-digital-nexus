import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  botcheck?: string;
}

const trim = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = (await req.json()) as ContactPayload;

    // Honeypot
    if (trim(body.botcheck)) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const name = trim(body.name);
    const email = trim(body.email);
    const phone = trim(body.phone);
    const company = trim(body.company);
    const message = trim(body.message);

    const errors: string[] = [];
    if (name.length < 1 || name.length > 200) errors.push('name');
    if (email.length < 3 || email.length > 320 || !emailRegex.test(email)) errors.push('email');
    if (message.length < 1 || message.length > 5000) errors.push('message');
    if (phone && phone.length > 50) errors.push('phone');
    if (company && company.length > 200) errors.push('company');

    if (errors.length > 0) {
      return new Response(JSON.stringify({ error: 'Validation failed', fields: errors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Persist to database (service role bypasses RLS)
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const serviceRole = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, serviceRole);

    const { error: dbError } = await supabase.from('contact_requests').insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
    });

    if (dbError) {
      console.error('DB insert error:', dbError.message);
    }

    // Forward to Web3Forms using server-side key
    const accessKey = Deno.env.get('WEB3FORMS_ACCESS_KEY');
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY is not configured');
      return new Response(JSON.stringify({ error: 'Server not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const w3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: 'Neue Projektanfrage – RealCore Digital',
        from_name: name,
        email,
        phone: phone || '—',
        company: company || '—',
        message,
      }),
    });

    const w3Data = await w3Response.json().catch(() => ({}));

    if (!w3Response.ok || !w3Data?.success) {
      console.error('Web3Forms error:', w3Response.status, w3Data);
      return new Response(JSON.stringify({ error: 'Delivery failed' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('submit-contact error:', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
