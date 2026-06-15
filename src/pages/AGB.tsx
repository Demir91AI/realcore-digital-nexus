import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold gradient-text glow-text-primary mt-8 first:mt-0 mb-3">{children}</h2>
);

const AGB = () => (
  <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
    <Helmet>
      <title>AGB | RealCore Digital</title>
    </Helmet>
    <div className="particle-grid opacity-40" />
    <div className="container mx-auto px-6 py-24 max-w-3xl relative">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
        <ArrowLeft size={16} /> Zurück zur Startseite
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <div className="glass-card p-8 md:p-10 space-y-2 text-muted-foreground text-sm leading-relaxed">
        <SectionHeading>§ 1 Geltungsbereich</SectionHeading>
        <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen RealCore Digital, Demir Sinanovic, Münchener Straße 78, 83395 Freilassing (nachfolgend „Auftragnehmer") und seinen Kunden (nachfolgend „Auftraggeber") über die Erbringung von Dienstleistungen im Bereich Webentwicklung, digitale Lösungen, Online-Marketing und verwandter IT-Dienstleistungen.</p>
        <p>Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>

        <SectionHeading>§ 2 Vertragsschluss</SectionHeading>
        <p>Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder Beginn der Leistungserbringung zustande.</p>

        <SectionHeading>§ 3 Leistungsumfang</SectionHeading>
        <p>Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung oder dem individuellen Angebot. Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung und können zu einer Anpassung des Preises und der Lieferzeit führen.</p>

        <SectionHeading>§ 4 Mitwirkungspflichten des Auftraggebers</SectionHeading>
        <p>Der Auftraggeber ist verpflichtet, alle für die Leistungserbringung notwendigen Informationen, Materialien und Zugangsdaten rechtzeitig zur Verfügung zu stellen. Verzögerungen, die durch fehlende oder unvollständige Mitwirkung entstehen, gehen nicht zulasten des Auftragnehmers.</p>

        <SectionHeading>§ 5 Vergütung und Zahlungsbedingungen</SectionHeading>
        <p>Die Vergütung richtet sich nach dem individuellen Angebot. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen. Der Auftragnehmer ist Kleinunternehmer im Sinne des § 19 UStG. Die ausgewiesenen Preise enthalten keine Umsatzsteuer.</p>
        <p>Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe zu berechnen.</p>

        <SectionHeading>§ 6 Urheberrecht und Nutzungsrechte</SectionHeading>
        <p>Der Auftragnehmer behält alle Urheberrechte an den erstellten Werken bis zur vollständigen Bezahlung. Nach vollständiger Bezahlung erhält der Auftraggeber ein einfaches, nicht übertragbares Nutzungsrecht an den erstellten Werken für den vereinbarten Zweck.</p>
        <p>Verwendete Open-Source-Komponenten oder Drittanbieter-Ressourcen unterliegen den jeweiligen Lizenzbedingungen dieser Anbieter.</p>

        <SectionHeading>§ 7 Gewährleistung</SectionHeading>
        <p>Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen den vereinbarten Anforderungen entsprechen. Mängel sind unverzüglich schriftlich anzuzeigen. Der Auftragnehmer ist berechtigt, Mängel nach eigener Wahl zu beseitigen oder Ersatzleistungen zu erbringen.</p>

        <SectionHeading>§ 8 Haftungsbeschränkung</SectionHeading>
        <p>Der Auftragnehmer haftet nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist – außer bei der Verletzung wesentlicher Vertragspflichten, Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit – ausgeschlossen.</p>
        <p>Die Haftung für mittelbare Schäden, insbesondere entgangenen Gewinn, ist ausgeschlossen, soweit gesetzlich zulässig.</p>

        <SectionHeading>§ 9 Vertraulichkeit</SectionHeading>
        <p>Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen geheim zu halten und nicht an Dritte weiterzugeben. Diese Verpflichtung gilt auch nach Beendigung des Vertragsverhältnisses.</p>

        <SectionHeading>§ 10 Schlussbestimmungen</SectionHeading>
        <p>Es gilt das Recht der Bundesrepublik Deutschland. Erfüllungsort und Gerichtsstand ist, soweit gesetzlich zulässig, Freilassing.</p>
        <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>

        <p className="pt-6">Stand: Juni 2026</p>
      </div>
    </div>
  </div>
);

export default AGB;
