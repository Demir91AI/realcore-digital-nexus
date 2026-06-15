import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Globe, ShoppingCart, PenTool, Newspaper, Code } from "lucide-react";

const services = [
  { icon: Monitor, title: "Firmenwebsite", desc: "Maßgeschneiderte Unternehmenswebsites, die Ihre Marke professionell präsentieren, Vertrauen aufbauen und Ihre Leistungen klar kommunizieren." },
  { icon: Globe, title: "Landing Page", desc: "Zielgerichtete Einzelseiten für Kampagnen, Produkte oder Dienstleistungen – optimiert für Conversion und maximale Wirkung." },
  { icon: ShoppingCart, title: "Onlineshop", desc: "Voll funktionsfähige E-Commerce-Lösungen, mit denen Sie Ihre Produkte online verkaufen und Ihr Geschäft digital ausweiten können." },
  { icon: PenTool, title: "Portfolio-Website", desc: "Eindrucksvolle Präsentationswebsites für Kreative, Freelancer und Agenturen – Ihre Arbeit im besten Licht." },
  { icon: Newspaper, title: "Blog & Content-Seite", desc: "Content-Management-Systeme für regelmäßige Veröffentlichungen – perfekt für Expertise-Marketing, SEO und Kundenbindung." },
  { icon: Code, title: "Individuelle Webanwendung", desc: "Spezialisierte digitale Tools und maßgeschneiderte Anwendungen, die exakt auf die Prozesse Ihres Unternehmens zugeschnitten sind." },
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Alles, was Ihr Unternehmen für einen professionellen Online-Auftritt braucht.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
