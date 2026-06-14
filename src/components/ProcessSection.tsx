import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Compass, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Erstgespräch & Analyse", desc: "Wir verstehen Ihr Unternehmen, Ihre Ziele und was Sie von Ihrer Website erwarten." },
  { icon: Compass, title: "Konzept & Angebot", desc: "Sie erhalten ein klares Konzept und ein transparentes Angebot – ohne versteckte Kosten." },
  { icon: Code, title: "Umsetzung", desc: "Wir entwickeln Ihre Website professionell und effizient – mit regelmäßigen Updates für Sie." },
  { icon: Rocket, title: "Launch & Support", desc: "Wir veröffentlichen Ihre Website und bleiben als verlässlicher Partner an Ihrer Seite." },
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Vom ersten Gespräch bis zur fertigen Website – klar und strukturiert.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
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
