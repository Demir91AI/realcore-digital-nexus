
-- Explicit deny-all SELECT for anon/authenticated (only service_role can read)
DROP POLICY IF EXISTS "No public reads on contact_requests" ON public.contact_requests;
CREATE POLICY "No public reads on contact_requests"
ON public.contact_requests
FOR SELECT
TO anon, authenticated
USING (false);

-- Replace permissive INSERT policy with a validating one
DROP POLICY IF EXISTS "Anyone can submit contact requests" ON public.contact_requests;
CREATE POLICY "Anyone can submit validated contact requests"
ON public.contact_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(message)) BETWEEN 1 AND 5000
  AND (phone IS NULL OR length(phone) <= 50)
  AND (company IS NULL OR length(company) <= 200)
);
