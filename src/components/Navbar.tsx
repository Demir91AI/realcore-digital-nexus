import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";

const links = [
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Prozess", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-primary/20 shadow-[0_1px_30px_-10px_hsl(197_100%_50%/0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Subtle glowing line under navbar on scroll */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      )}

      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo.url}
            alt="RealCore Digital"
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            style={{ filter: "drop-shadow(0 0 12px hsl(197 100% 50% / 0.35))" }}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-base font-bold text-foreground tracking-tight">
              RealCore <span className="gradient-text">Digital</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
              Klar denken. Digital umsetzen.
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <span className="relative z-10 transition-[text-shadow] duration-300 group-hover:[text-shadow:0_0_12px_hsl(197_100%_50%/0.8)]">
                {link.label}
              </span>
              <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 scale-x-0 origin-center transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100 shadow-[0_0_8px_hsl(197_100%_50%/0.8)]" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:scale-[1.04] shadow-[0_0_20px_hsl(197_100%_50%/0.45),0_0_40px_hsl(258_100%_59%/0.25)] hover:shadow-[0_0_30px_hsl(197_100%_50%/0.7),0_0_60px_hsl(258_100%_59%/0.4)]"
          >
            Projekt anfragen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-background/80 backdrop-blur-xl border-t border-primary/20"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors border-b border-border/40 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_hsl(197_100%_50%/0.45)]"
              >
                Projekt anfragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
