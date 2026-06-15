import { useState, useEffect, useRef } from "react";
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
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // Close on Escape, basic focus trap, and restore focus to toggle on close
  useEffect(() => {
    if (!mobileOpen) return;

    // Move focus to first link after opening
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 50);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", handleKey);
      toggleRef.current?.focus();
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled || mobileOpen
          ? "bg-background/80 backdrop-blur-2xl border-b border-primary/15 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
          : "bg-background/30 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {/* Elegant gradient glow line under navbar on scroll */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled || mobileOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <BrandMark size={42} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-base font-bold text-foreground tracking-tight">
              RealCore <span className="gradient-text">Digital</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase">
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
          ref={toggleRef}
          className="md:hidden relative z-[60] text-foreground p-2 rounded-lg hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            key={mobileOpen ? "x" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.span>
        </button>
      </div>

      {/* Mobile menu — fullscreen blur overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Menü schließen"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 top-[var(--nav-h,72px)] z-40 bg-background/60 backdrop-blur-2xl"
            />
            {/* Panel */}
            <motion.div
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Hauptnavigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden absolute left-0 right-0 top-full z-50 bg-background/85 backdrop-blur-2xl border-t border-primary/20 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)]"
            >
              <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                    className="py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 rounded-md px-1 transition-colors border-b border-border/40 last:border-0"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + links.length * 0.05 }}
                  className="mt-4 inline-flex items-center justify-center rounded-lg px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_hsl(197_100%_50%/0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                >
                  Projekt anfragen
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
