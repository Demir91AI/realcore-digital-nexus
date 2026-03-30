import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Lightbulb, Target, Zap } from "lucide-react";

const values = [
  { icon: Lightbulb, label: "Innovation", desc: "Immer einen Schritt voraus mit neuesten Technologien." },
  { icon: Target, label: "Präzision", desc: "Detailgenau und qualitätsbewusst in jedem Projekt." },
  { icon: Zap, label: "Wirkung", desc: "Messbare Ergebnisse, die Ihr Business transformieren." },
];

const counters = [
  { end: 50, suffix: "+", label: "Projekte" },
  { end: 10, suffix: "+", label: "Jahre Erfahrung" },
  { end: 100, suffix: "%", label: "Kundenzufriedenheit" },
];

const AnimatedCounter = ({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / end;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <span>{count}{suffix}</span>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(197 100% 50% / 0.1), hsl(258 100% 59% / 0.1))" }} />
              <div className="absolute inset-4 glass-card rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  {counters.map((c) => (
                    <div key={c.label}>
                      <div className="text-4xl md:text-5xl font-bold gradient-text">
                        <AnimatedCounter end={c.end} suffix={c.suffix} inView={inView} />
                      </div>
                      <div className="text-sm text-muted-foreground">{c.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full orb orb-delay-1" style={{ background: "radial-gradient(circle, hsl(197 100% 50% / 0.2), transparent 70%)" }} />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full orb orb-delay-2" style={{ background: "radial-gradient(circle, hsl(258 100% 59% / 0.15), transparent 70%)" }} />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Über uns</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Wir sind <span className="gradient-text">RealCore Digital</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Als digitale Agentur verbinden wir strategisches Denken mit technischer Exzellenz.
              Unser Team aus Experten entwickelt innovative Lösungen, die Unternehmen in die
              digitale Zukunft führen — von der ersten Idee bis zum erfolgreichen Launch.
            </p>

            <div className="space-y-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{v.label}</h4>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
