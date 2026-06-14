import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import websitesImg from "@/assets/service-websites.jpg.asset.json";
import hostingImg from "@/assets/service-hosting.jpg.asset.json";
import emailImg from "@/assets/service-email.jpg.asset.json";
import seoImg from "@/assets/service-seo.jpg.asset.json";
import formsImg from "@/assets/service-forms.jpg.asset.json";
import supportImg from "@/assets/service-support.jpg.asset.json";

const services = [
  { image: websitesImg.url, title: "Websites" },
  { image: hostingImg.url, title: "Hosting" },
  { image: emailImg.url, title: "E-Mail & Google Business" },
  { image: seoImg.url, title: "SEO & Sichtbarkeit" },
  { image: formsImg.url, title: "Kontaktformulare" },
  { image: supportImg.url, title: "Wartung & Support" },
];

const doubled = [...services, ...services];

const FlowBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      {/* Top fade edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-6"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
          Unsere Leistungen
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">
          Alles aus einer <span className="gradient-text">Hand</span>
        </h2>
      </motion.div>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {doubled.map((service, i) => (
            <div
              key={`${service.title}-${i}`}
              className="relative group flex-shrink-0 w-72 h-44 rounded-xl overflow-hidden border border-glass-border bg-glass/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:scale-[1.03]"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width={768}
                height={512}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-foreground font-semibold text-sm tracking-wide">
                  {service.title}
                </p>
              </div>
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_0_1px_hsl(197_100%_50%/_0.3)]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default FlowBanner;
