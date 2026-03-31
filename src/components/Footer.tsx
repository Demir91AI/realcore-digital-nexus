import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#" className="text-lg font-bold">
            <span className="gradient-text">RealCore</span>{" "}
            <span className="text-foreground">Digital</span>
          </a>
          <p className="text-xs text-muted-foreground mt-1">Klar denken. Digital umsetzen.</p>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Datenschutz
          </Link>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Kontakt
          </a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2026 RealCore Digital. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
