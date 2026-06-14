import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/realcore-logo.png.asset.json";

const links = [
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Prozess", href: "#process" },
  
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-navbar" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo.url} alt="RealCore Digital Logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-glow text-sm !px-5 !py-2">
            Kontakt
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-navbar px-6 pb-6"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-glow text-sm !px-5 !py-2 inline-block mt-2">
            Kontakt
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
