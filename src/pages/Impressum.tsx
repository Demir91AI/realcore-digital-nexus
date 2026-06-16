import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold gradient-text glow-text-primary mt-8 first:mt-0 mb-3">{children}</h2>
);

const Impressum = () => (
  <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
    <Helmet>
      <title>Impressum | RealCore Digital</title>
      <meta name="description" content="Impressum von RealCore Digital – Anbieterkennzeichnung, Kontaktdaten und rechtliche Hinweise gemäß § 5 TMG für unsere Digitalagentur aus Freilassing." />
      <link rel="canonical" href="https://realcore-digital.de/impressum" />
      <meta property="og:title" content="Impressum | RealCore Digital" />
      <meta property="og:description" content="Impressum von RealCore Digital – Anbieterkennzeichnung, Kontaktdaten und rechtliche Hinweise gemäß § 5 TMG." />
      <meta property="og:url" content="https://realcore-digital.de/impressum" />
    </Helmet>
    <div className="particle-grid opacity-40" />
    <div className="container mx-auto px-6 py-24 max-w-3xl relative">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
        <ArrowLeft size={16} /> Zurück zur Startseite
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Impressum</h1>

      <div className="glass-card p-8 md:p-10 space-y-2 text-muted-foreground text-sm leading-relaxed">
        <SectionHeading>Angaben gemäß § 5 TMG</SectionHeading>
        <p className="text-foreground">Demir Sinanovic<br />RealCore Digital<br />Münchener Straße 78<br />83395 Freilassing</p>

        <SectionHeading>Kontakt</SectionHeading>
        <p>Telefon: +49 176 23182985<br />E-Mail: kontakt@realcore-digital.de<br />Geschäftszeiten: Mo–Fr, 09:00–18:00 Uhr</p>

        <SectionHeading>Umsatzsteuerregelung</SectionHeading>
        <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>

        <SectionHeading>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</SectionHeading>
        <p>Demir Sinanovic<br />Münchener Straße 78<br />83395 Freilassing</p>

        <SectionHeading>Haftung für Inhalte</SectionHeading>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

        <SectionHeading>Haftung für Links</SectionHeading>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
        <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

        <SectionHeading>Urheberrecht</SectionHeading>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>

        <SectionHeading>Streitschlichtung</SectionHeading>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
        </p>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </div>
  </div>
);

export default Impressum;
