import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Sparkles, BarChart3, Workflow, Shield, Cpu } from "lucide-react";

const features = [
  { icon: Sparkles, text: "Intelligente Automatisierung von Geschäftsprozessen" },
  { icon: BarChart3, text: "Datengetriebene Analysen und Prognosen" },
  { icon: Workflow, text: "Machine Learning Modelle für Ihre Use Cases" },
  { icon: Shield, text: "KI-gestützte Qualitätssicherung" },
  { icon: Cpu, text: "Natural Language Processing & Chatbots" },
];

const AISolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(222 47% 5%), hsl(258 40% 8%), hsl(222 47% 5%))" }} />
      <div className="absolute inset-0 particle-grid opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full orb" style={{ background: "radial-gradient(circle, hsl(258 100% 59% / 0.12), transparent 60%)" }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
              <Brain size={14} /> KI-POWERED
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">KI, die Ihre Prozesse</span>
              <br />transformiert.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nutzen Sie die Kraft künstlicher Intelligenz, um Ihre Geschäftsprozesse zu
              optimieren, Kosten zu senken und neue Wachstumschancen zu erschließen.
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-md bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <f.icon size={16} />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square relative">
              {/* Neural net visualization */}
              <svg className="w-full h-full" viewBox="0 0 400 400">
                {/* Nodes */}
                {[
                  [200, 80], [100, 160], [300, 160], [60, 260], [160, 260], [240, 260], [340, 260], [130, 340], [270, 340],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="6" fill="hsl(197 100% 50% / 0.8)" className="animate-glow-pulse" style={{ animationDelay: `${i * 0.3}s` }}>
                      <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                    </circle>
                    <circle cx={cx} cy={cy} r="16" fill="none" stroke="hsl(197 100% 50% / 0.15)" strokeWidth="1" />
                  </g>
                ))}
                {/* Connections */}
                {[
                  [200, 80, 100, 160], [200, 80, 300, 160],
                  [100, 160, 60, 260], [100, 160, 160, 260],
                  [300, 160, 240, 260], [300, 160, 340, 260],
                  [160, 260, 130, 340], [240, 260, 270, 340],
                  [60, 260, 130, 340], [340, 260, 270, 340],
                ].map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(258 100% 59% / 0.2)" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                  </line>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
