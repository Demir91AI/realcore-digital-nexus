import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-3xl">
            <div className="glass-card p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
              <div className="flex gap-3 shrink-0">
                <button onClick={handleDecline} className="btn-ghost-glow text-sm !px-4 !py-2">
                  Nur notwendige
                </button>
                <button onClick={handleAccept} className="btn-glow text-sm !px-4 !py-2">
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
