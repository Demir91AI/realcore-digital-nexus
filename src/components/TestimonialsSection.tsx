import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "RealCore Digital hat unsere Vision in eine beeindruckende Plattform verwandelt. Professionell, schnell und innovativ.", author: "Thomas M.", role: "CEO, TechVentures GmbH" },
  { quote: "Die KI-Lösung hat unsere Prozesse revolutioniert. Die Zusammenarbeit war erstklassig von Anfang bis Ende.", author: "Sarah K.", role: "CTO, DataFlow AG" },
  { quote: "Herausragendes Team mit tiefem technischen Verständnis. Unser neues Dashboard übertrifft alle Erwartungen.", author: "Michael R.", role: "Head of Digital, FinPro" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Referenzen</p>
          <h2 className="text-3xl md:text-5xl font-bold">Was unsere <span className="gradient-text">Kunden sagen</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.quote}</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
