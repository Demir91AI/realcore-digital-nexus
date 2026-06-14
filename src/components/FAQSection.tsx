import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Was kostet eine Website?", a: "Die Kosten hängen vom Umfang und den gewünschten Funktionen ab. Wir erstellen Ihnen ein individuelles, transparentes Angebot – kontaktieren Sie uns für eine kostenlose Erstberatung." },
  { q: "Wie lange dauert die Erstellung einer Website?", a: "Eine professionelle Website ist in der Regel innerhalb von 2–4 Wochen fertiggestellt. Den genauen Zeitplan besprechen wir gemeinsam." },
  { q: "Ich habe keine technischen Kenntnisse – ist das ein Problem?", a: "Überhaupt nicht. Wir erklären alles verständlich und begleiten Sie Schritt für Schritt durch den gesamten Prozess – ohne Fachjargon." },
  { q: "Kümmert ihr euch auch um Domain und Hosting?", a: "Ja. Wir übernehmen die Registrierung Ihrer Wunschdomain, richten das Hosting ein und kümmern uns um alle technischen Details." },
  { q: "Bekomme ich auch eine geschäftliche E-Mail-Adresse?", a: "Ja. Wir richten für Sie professionelle Geschäfts-E-Mail-Adressen ein, z. B. info@ihrefirma.de – für einen seriösen Auftritt." },
  { q: "Was ist Google Business und brauche ich das?", a: "Google Business ermöglicht es, dass Ihr Unternehmen bei Google Maps und der lokalen Suche erscheint. Für lokale Unternehmen ist das sehr wichtig – und wir richten es für Sie ein." },
  { q: "Bietet ihr auch Wartung und Support nach dem Launch an?", a: "Ja. Wir bieten laufende Wartung, technischen Support und regelmäßige Updates – damit Ihre Website immer aktuell und sicher bleibt." },
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
