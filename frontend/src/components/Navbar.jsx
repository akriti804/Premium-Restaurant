import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/constants/testIds";
import { NAV_LINKS, BRAND } from "@/data/site";

export const Navbar = ({ ready }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      data-testid={NAV.container}
      initial={{ y: -60, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050505]/80 border-b border-bansi-gold/15"
          : "bg-transparent"
      }`}
    >
      <div className="container-lux flex items-center justify-between py-5">
        <a
          data-testid={NAV.logo}
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-heading text-2xl md:text-3xl gold-text"
        >
          {BRAND.name}
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <button
              key={l.key}
              data-testid={NAV.link(l.key)}
              onClick={() => handleAnchor(l.href)}
              className="text-xs font-body uppercase tracking-[0.28em] text-bansi-muted hover:text-bansi-accent transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>

        <a
          data-testid={NAV.cta}
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleAnchor("#contact");
          }}
          className="hidden md:inline-flex btn-primary-gold"
        >
          Reserve
        </a>

        <button
          data-testid={NAV.mobileToggle}
          className="md:hidden text-bansi-gold p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-[#050505]/95 border-b border-bansi-gold/15"
          >
            <div className="container-lux py-6 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.key}
                  data-testid={`${NAV.link(l.key)}-mobile`}
                  onClick={() => handleAnchor(l.href)}
                  className="text-left text-sm font-body uppercase tracking-[0.3em] text-bansi-muted hover:text-bansi-accent"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchor("#contact");
                }}
                className="btn-primary-gold w-full mt-2"
              >
                Reserve Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
