import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Was kostet eine Website?", a: "Die Kosten hängen vom Umfang ab. Wir erstellen individuelle Angebote – kontaktieren Sie uns für eine kostenlose Erstberatung." },
  { q: "Wie lange dauert ein Projekt?", a: "Eine einfache Website ist oft in 2–4 Wochen fertig. Größere Projekte planen wir gemeinsam mit Ihnen." },
  { q: "Ich habe keine technischen Kenntnisse – ist das ein Problem?", a: "Nein. Wir erklären alles verständlich und begleiten Sie durch den gesamten Prozess." },
  { q: "Kümmert ihr euch auch um Hosting und Pflege?", a: "Ja. Wir bieten auch Betreuung, Updates und technischen Support nach dem Launch an." },
  { q: "In welchen Branchen arbeitet ihr?", a: "Wir arbeiten mit kleinen und mittelständischen Unternehmen aus verschiedenen Branchen zusammen." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold">Häufige <span className="gradient-text">Fragen</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
