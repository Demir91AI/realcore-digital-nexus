import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold gradient-text glow-text-primary mt-8 first:mt-0 mb-3">{children}</h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground mt-4 mb-2">{children}</h3>
);

const Datenschutz = () => (
  <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
    <Helmet>
      <title>Datenschutz | RealCore Digital</title>
      <meta name="description" content="Datenschutzerklärung von RealCore Digital nach DSGVO: Informationen zu Datenverarbeitung, Hosting, Kontaktformular, Cookies und Ihren Rechten als Nutzer." />
      <link rel="canonical" href="https://realcore-digital.de/datenschutz" />
      <meta property="og:title" content="Datenschutz | RealCore Digital" />
      <meta property="og:description" content="Datenschutzerklärung von RealCore Digital nach DSGVO – Datenverarbeitung, Cookies und Nutzerrechte transparent erklärt." />
      <meta property="og:url" content="https://realcore-digital.de/datenschutz" />
    </Helmet>
    <div className="particle-grid opacity-40" />
    <div className="container mx-auto px-6 py-24 max-w-3xl relative">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
        <ArrowLeft size={16} /> Zurück zur Startseite
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Datenschutzerklärung</h1>

      <div className="glass-card p-8 md:p-10 space-y-2 text-muted-foreground text-sm leading-relaxed">
        <SectionHeading>1. Datenschutz auf einen Blick</SectionHeading>
        <SubHeading>Allgemeine Hinweise</SubHeading>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

        <SectionHeading>2. Verantwortlicher</SectionHeading>
        <p className="text-foreground">Demir Sinanovic<br />RealCore Digital<br />Münchener Straße 78<br />83395 Freilassing</p>
        <p>Telefon: +49 176 23182985<br />E-Mail: kontakt@realcore-digital.de</p>

        <SectionHeading>3. Hosting</SectionHeading>
        <p>Diese Website wird bei Vercel Inc. gehostet. Die Server befinden sich in Frankfurt am Main, Deutschland (EU). Vercel verarbeitet Daten gemäß Art. 28 DSGVO auf Basis eines Auftragsverarbeitungsvertrags.</p>
        <p>Beim Besuch unserer Website werden automatisch folgende technische Daten vom Server erfasst und temporär gespeichert:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP-Adresse (anonymisiert)</li>
          <li>Datum und Uhrzeit des Abrufs</li>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p>Diese Daten werden ausschließlich zur technischen Bereitstellung der Website benötigt und nach kurzer Zeit automatisch gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und funktionsfähigen Webauftritt).</p>

        <SectionHeading>4. Kontaktformular</SectionHeading>
        <p>Wenn Sie uns über das Kontaktformular auf dieser Website eine Anfrage senden, werden Ihre Angaben (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage bei uns gespeichert und verarbeitet.</p>
        <p>Diese Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Kundenanfragen).</p>
        <p>Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

        <SectionHeading>5. Drittanbieter – Web3Forms</SectionHeading>
        <p>Für die Verarbeitung von Kontaktanfragen über das Formular auf dieser Website nutzen wir den Dienst Web3Forms (Anbieter: Bharat Karmakar, web3forms.com). Wenn Sie das Kontaktformular absenden, werden Ihre eingegebenen Daten (Name, E-Mail-Adresse, ggf. Telefonnummer, Nachricht) an die Server von Web3Forms übertragen und von dort an unsere E-Mail-Adresse weitergeleitet.</p>
        <p>Web3Forms speichert die übermittelten Daten nicht dauerhaft auf eigenen Servern. Die Weiterleitung erfolgt verschlüsselt via HTTPS.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Weitere Informationen zum Datenschutz bei Web3Forms finden Sie unter:{" "}
          <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://web3forms.com/privacy</a>
        </p>

        <SectionHeading>6. Cookies</SectionHeading>
        <p>Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind (z. B. zur Speicherung Ihrer Cookie-Einwilligung). Diese Cookies werden ohne Ihre Einwilligung gesetzt, da sie technisch notwendig sind (Art. 6 Abs. 1 lit. f DSGVO).</p>
        <p>Es werden keine Tracking-Cookies, Analyse-Cookies oder Marketing-Cookies eingesetzt.</p>

        <SectionHeading>7. Keine Analyse- oder Tracking-Tools</SectionHeading>
        <p>Auf dieser Website werden keine Analyse- oder Tracking-Dienste eingesetzt (kein Google Analytics, kein Meta Pixel, keine vergleichbaren Dienste). Es findet keine Auswertung Ihres Nutzungsverhaltens statt.</p>

        <SectionHeading>8. Ihre Rechte</SectionHeading>
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-foreground">Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
          <li><strong className="text-foreground">Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
          <li><strong className="text-foreground">Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
          <li><strong className="text-foreground">Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
          <li><strong className="text-foreground">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
          <li><strong className="text-foreground">Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
        </ul>
        <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: kontakt@realcore-digital.de</p>

        <SectionHeading>9. Beschwerderecht bei der Aufsichtsbehörde</SectionHeading>
        <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</p>
        <p className="text-foreground">Zuständige Aufsichtsbehörde für Bayern:<br />Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />Promenade 18, 91522 Ansbach<br />
          <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.lda.bayern.de</a>
        </p>

        <SectionHeading>10. Aktualität dieser Datenschutzerklärung</SectionHeading>
        <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: Juni 2026.</p>
      </div>
    </div>
  </div>
);

export default Datenschutz;
