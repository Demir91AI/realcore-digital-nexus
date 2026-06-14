import { Link } from "react-router-dom";
import logo from "@/assets/realcore-logo.png.asset.json";

const navLinks = [
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Prozess", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <a href="#" className="inline-block">
            <img src={logo.url} alt="RealCore Digital Logo" className="h-12 w-auto" />
          </a>
          <p className="text-sm text-muted-foreground mt-3">Klar denken. Digital umsetzen.</p>
          <p className="text-xs text-muted-foreground mt-3 max-w-xs">
            Professionelle digitale Lösungen für kleine und mittelständische Unternehmen.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Rechtliches</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2025 RealCore Digital. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
