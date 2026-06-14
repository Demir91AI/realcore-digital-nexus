import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, CheckCircle2, Lock } from "lucide-react";

const values = [
  { icon: Target, label: "Individuelle Lösungen", desc: "Maßgeschneidert für jedes Unternehmen." },
  { icon: CheckCircle2, label: "Vom ersten Gespräch bis zum Launch", desc: "Wir begleiten Sie durch den gesamten Prozess." },
  { icon: Lock, label: "Zuverlässig & modern", desc: "Ohne Komplikationen, ohne versteckte Kosten." },
];

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
                <div className="text-center space-y-6 px-6">
                  {values.map((v, i) => (
                    <motion.div
                      key={v.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <v.icon size={20} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-foreground text-sm">{v.label}</h4>
                        <p className="text-xs text-muted-foreground">{v.desc}</p>
                      </div>
                    </motion.div>
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
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                RealCore Digital ist eine moderne Digitalagentur, die Unternehmen bei der Umsetzung professioneller digitaler Lösungen unterstützt.
              </p>
              <p>
                Unser Ziel ist es, kleinen und mittelständischen Unternehmen zu helfen, ein starkes und professionelles Online-Auftreten aufzubauen – von der ersten Idee bis zur fertigen Website.
              </p>
              <p>
                Wir begleiten unsere Kunden durch den gesamten Prozess: von der Domain-Registrierung über Hosting und geschäftliche E-Mail-Adressen bis hin zu Google Business Profilen und technischem Support.
              </p>
              <p>
                Wir glauben, dass jedes Unternehmen – unabhängig von seiner Größe – eine professionelle Präsentation verdient, die Vertrauen weckt und einen starken ersten Eindruck hinterlässt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
