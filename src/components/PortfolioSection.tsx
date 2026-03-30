import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Plattform", category: "Webentwicklung", desc: "Moderne, skalierbare Shopping-Plattform mit KI-gestützter Produktempfehlung." },
  { title: "SaaS Dashboard", category: "Softwareentwicklung", desc: "Echtzeit-Analytics Dashboard für ein führendes FinTech-Unternehmen." },
  { title: "KI Chatbot System", category: "KI-Lösung", desc: "Intelligenter Kundenservice-Bot mit Natural Language Processing." },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold">Ausgewählte <span className="gradient-text">Projekte</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card group overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-primary/30"
            >
              <div className="h-48 relative" style={{ background: `linear-gradient(135deg, hsl(${197 + i * 20} 100% 50% / 0.1), hsl(258 100% 59% / 0.05))` }}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "hsl(222 47% 5% / 0.8)" }}>
                  <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-mono text-primary/80 px-2 py-1 rounded bg-background/40 backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
