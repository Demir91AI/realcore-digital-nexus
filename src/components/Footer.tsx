const links = [
  { label: "Services", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Prozess", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="text-lg font-bold">
            <span className="gradient-text">RealCore</span>{" "}
            <span className="text-foreground">Digital</span>
          </a>
          <p className="text-xs text-muted-foreground mt-1">Klar denken. Digital umsetzen.</p>
        </div>

        <div className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2025 RealCore Digital. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
