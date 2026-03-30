import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Nachricht gesendet! (Demo)");
    setForm({ name: "", email: "", message: "" });
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
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">E-Mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Nachricht</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                required
              />
            </div>
            <button type="submit" className="btn-glow w-full flex items-center justify-center gap-2">
              <Send size={16} /> Senden
            </button>
          </motion.form>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a href="mailto:info@realcore.digital" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
