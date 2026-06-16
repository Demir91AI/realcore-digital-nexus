import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlowBanner from "@/components/FlowBanner";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import AISolutionsSection from "@/components/AISolutionsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";

const faqs = [
  { q: "Was kostet eine Website?", a: "Die Kosten hängen vom Umfang und den gewünschten Funktionen ab. Wir erstellen Ihnen ein individuelles, transparentes Angebot – kontaktieren Sie uns für eine kostenlose Erstberatung." },
  { q: "Wie lange dauert die Erstellung einer Website?", a: "Eine professionelle Website ist in der Regel innerhalb von 2–4 Wochen fertiggestellt. Den genauen Zeitplan besprechen wir gemeinsam." },
  { q: "Ich habe keine technischen Kenntnisse – ist das ein Problem?", a: "Überhaupt nicht. Wir erklären alles verständlich und begleiten Sie Schritt für Schritt durch den gesamten Prozess – ohne Fachjargon." },
  { q: "Kümmert ihr euch auch um Domain und Hosting?", a: "Ja. Wir übernehmen die Registrierung Ihrer Wunschdomain, richten das Hosting ein und kümmern uns um alle technischen Details." },
  { q: "Bekomme ich auch eine geschäftliche E-Mail-Adresse?", a: "Ja. Wir richten für Sie professionelle Geschäfts-E-Mail-Adressen ein, z. B. info@ihrefirma.de – für einen seriösen Auftritt." },
  { q: "Was ist Google Business und brauche ich das?", a: "Google Business ermöglicht es, dass Ihr Unternehmen bei Google Maps und der lokalen Suche erscheint. Für lokale Unternehmen ist das sehr wichtig – und wir richten es für Sie ein." },
  { q: "Bietet ihr auch Wartung und Support nach dem Launch an?", a: "Ja. Wir bieten laufende Wartung, technischen Support und regelmäßige Updates – damit Ihre Website immer aktuell und sicher bleibt." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>RealCore Digital – Klar denken. Digital umsetzen.</title>
      <link rel="canonical" href="https://realcore-digital.de/" />
      <meta property="og:url" content="https://realcore-digital.de/" />
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <Navbar />
    <HeroSection />
    <FlowBanner />
    <ServicesSection />
    <AboutSection />
    <ProcessSection />
    <AISolutionsSection />
    <FAQSection />
    <CTABanner />
    <ContactSection />
    <Footer />
    <BackToTop />
    <CookieBanner />
  </div>
);

export default Index;
