import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_requests").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company: form.company.trim() || null,
        message: form.message.trim(),
      });

      if (error) {
        console.error("Supabase error:", error);
        toast.error("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      toast.success("Ihre Anfrage wurde erfolgreich übermittelt!");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-grid opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full orb" style={{ background: "radial-gradient(circle, hsl(197 100% 50% / 0.08), transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Kontakt</p>
          <h2 className="text-3xl md:text-5xl font-bold">Lassen Sie uns <span className="gradient-text">sprechen</span></h2>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"
              >
                <CheckCircle size={18} />
                <span>Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.</span>
              </motion.div>
            )}

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Ihr Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">E-Mail-Adresse *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Telefonnummer (optional)</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Ihr Unternehmen / Ihre Branche (optional)</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Ihre Nachricht / Ihr Projekt *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              className="btn-glow w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Wird gesendet…
                </>
              ) : (
                <>
                  <Send size={16} /> Jetzt anfragen
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Ihre Daten werden verschlüsselt übertragen und verarbeitet.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;