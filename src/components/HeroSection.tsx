import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "Webentwicklung",
  "Domain & Hosting",
  "Google Business",
  "SEO & Sichtbarkeit",
  "Digitale Beratung",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
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
          {/* Live indicator badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold text-primary/90">
              Digitalagentur für den Mittelstand
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Wir entwickeln Websites und digitale Lösungen,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, hsl(197 100% 60%), hsl(228 95% 65%), hsl(258 100% 70%))",
              }}
            >
              die Ihr Unternehmen voranbringen.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Von der modernen Website bis zur vollständigen digitalen Präsenz – wir helfen kleinen und mittelständischen Unternehmen, professionell online aufzutreten.
          </p>

          <div className="h-8 mb-10 font-mono text-base md:text-lg">
            <span className="text-muted-foreground">&gt; </span>
            <span className="gradient-text">{text}</span>
            <span className="text-primary animate-pulse">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-glow text-base">
              Projekt anfragen
            </a>
            <a href="#services" className="btn-ghost-glow text-base">
              Mehr erfahren
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, hsl(222 47% 5%), transparent)" }} />
    </section>
  );
};

export default HeroSection;
