import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTABanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(197 100% 50% / 0.15), hsl(258 100% 59% / 0.15))" }} />
      <div className="absolute inset-0 particle-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Bereit für <span className="gradient-text">Ihr Projekt?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Lassen Sie uns gemeinsam Ihre digitale Lösung umsetzen. Kostenlose Erstberatung – unverbindlich.
          </p>
          <a href="#contact" className="btn-glow text-base !px-8 !py-3 text-lg">
            Jetzt Projekt anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
