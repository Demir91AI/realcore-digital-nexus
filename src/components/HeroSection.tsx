import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Web Development",
  "Software Engineering",
  "KI-Lösungen",
  "Online-Marketing",
  "Digitale Plattformen",
];

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = services[currentService];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < target.length) {
            setDisplayText(target.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentService((prev) => (prev + 1) % services.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentService]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 particle-grid" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full orb" style={{ background: "radial-gradient(circle, hsl(197 100% 50% / 0.15), transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full orb orb-delay-1" style={{ background: "radial-gradient(circle, hsl(258 100% 59% / 0.12), transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full orb orb-delay-2" style={{ background: "radial-gradient(circle, hsl(197 100% 50% / 0.08), transparent 70%)" }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6">
            RealCore Digital
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="glow-text-primary">Klar denken.</span>
            <br />
            <span className="gradient-text">Digital umsetzen.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Wir entwickeln digitale Lösungen, die Ihr Unternehmen voranbringen.
          </p>

          <div className="h-8 mb-10 flex items-center justify-center">
            <span className="font-mono text-primary text-lg">
              {displayText}
              <span className="border-r-2 animate-typing-cursor ml-0.5">&nbsp;</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-glow text-base">
              Projekt starten
            </a>
            <a href="#services" className="btn-ghost-glow text-base">
              Mehr erfahren
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, hsl(222 47% 5%), transparent)" }} />
    </section>
  );
};

export default HeroSection;
