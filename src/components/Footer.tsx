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
            <BrandMark size={36} />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-foreground tracking-tight">
                RealCore <span className="gradient-text">Digital</span>
              </span>
              <span className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase">
                Klar denken. Digital umsetzen.
              </span>
            </div>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Professionelle digitale Lösungen für kleine und mittelständische Unternehmen.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/company/realcore-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
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
              <Link to="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                AGB
              </Link>
            </li>
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
        <p className="text-xs text-muted-foreground">© 2026 RealCore Digital. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
