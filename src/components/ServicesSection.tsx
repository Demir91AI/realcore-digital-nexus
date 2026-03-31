import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Settings, TrendingUp, Layers } from "lucide-react";

const services = [
  { icon: Monitor, title: "Moderne Websites, die Kunden bringen", desc: "Wir erstellen schnelle, mobiloptimierte Websites und Landing Pages, die Ihr Unternehmen professionell präsentieren und neue Kunden gewinnen." },
  { icon: Settings, title: "Digitale Prozesse statt manuelle Arbeit", desc: "Wir automatisieren wiederkehrende Aufgaben und erstellen Systeme, die Ihnen Zeit sparen und Abläufe effizienter machen." },
  { icon: TrendingUp, title: "Mehr Sichtbarkeit. Mehr Kunden.", desc: "Wir unterstützen Sie bei Social Media, Werbung und Lead-Generierung, damit Ihr Unternehmen online wächst." },
  { icon: Layers, title: "Maßgeschneiderte digitale Lösungen", desc: "Wir entwickeln Web-Apps und interne Tools, die genau auf Ihre Anforderungen zugeschnitten sind." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Was wir bieten</p>
          <h2 className="text-3xl md:text-5xl font-bold">Unsere <span className="gradient-text">Leistungen</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
