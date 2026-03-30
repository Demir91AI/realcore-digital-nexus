import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Compass, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Analyse", desc: "Wir analysieren Ihre Anforderungen, Zielgruppe und den Markt." },
  { icon: Compass, title: "Strategie", desc: "Wir entwickeln eine maßgeschneiderte digitale Strategie." },
  { icon: Code, title: "Entwicklung", desc: "Agile Entwicklung mit modernsten Technologien." },
  { icon: Rocket, title: "Launch", desc: "Go-live mit kontinuierlicher Optimierung und Support." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">So arbeiten wir</p>
          <h2 className="text-3xl md:text-5xl font-bold">Unser <span className="gradient-text">Prozess</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center mx-auto mb-5 text-primary relative z-10 glow-primary">
                <s.icon size={24} />
              </div>
              <span className="text-xs font-mono text-primary/60 mb-2 block">0{i + 1}</span>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
