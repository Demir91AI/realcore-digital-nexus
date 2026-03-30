import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Globe, Code2, Megaphone, Layout, Brain } from "lucide-react";

const services = [
  { icon: Server, title: "IT-Dienstleistungen", desc: "Zuverlässige IT-Infrastruktur und Support für Ihr Unternehmen.", highlight: false },
  { icon: Globe, title: "Webentwicklung", desc: "Moderne, performante Websites und Web-Applikationen.", highlight: false },
  { icon: Code2, title: "Softwareentwicklung", desc: "Maßgeschneiderte Softwarelösungen für komplexe Anforderungen.", highlight: false },
  { icon: Megaphone, title: "Online-Marketing", desc: "Strategisches Digital-Marketing für messbare Ergebnisse.", highlight: false },
  { icon: Layout, title: "Digitale Plattformen", desc: "Skalierbare Plattformen für Ihre digitalen Geschäftsmodelle.", highlight: false },
  { icon: Brain, title: "KI-gestützte Lösungen", desc: "Intelligente Automatisierung und datengetriebene Entscheidungen.", highlight: true },
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
          <h2 className="text-3xl md:text-5xl font-bold">Unsere <span className="gradient-text">Services</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-8 group hover:-translate-y-2 transition-all duration-300 ${
                s.highlight ? "glow-secondary border-accent/30" : "hover:border-primary/30"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                s.highlight
                  ? "bg-accent/20 text-accent"
                  : "bg-primary/10 text-primary group-hover:bg-primary/20"
              } transition-colors duration-300`}>
                <s.icon size={24} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                {s.highlight && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 animate-glow-pulse">
                    AI
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
