import { Link } from "react-router-dom";
import BrandMark from "@/components/BrandMark";

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
          <a href="#" className="inline-flex items-center gap-3">
            <img
              src={logo.url}
              alt="RealCore Digital Logo"
              className="h-9 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 10px hsl(197 100% 50% / 0.3))" }}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-foreground tracking-tight">
                RealCore <span className="gradient-text">Digital</span>
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                Klar denken. Digital umsetzen.
              </span>
            </div>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
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
