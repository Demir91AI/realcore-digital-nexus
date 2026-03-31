import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
        <ArrowLeft size={16} /> Zurück zur Startseite
      </Link>
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      <div className="glass-card p-8 space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>Diese Datenschutzerklärung wird in Kürze mit den vollständigen Angaben gemäß DSGVO aktualisiert.</p>
        <p>Bei Fragen zum Datenschutz kontaktieren Sie uns unter: info@realcore.digital</p>
      </div>
    </div>
  </div>
);

export default Datenschutz;
