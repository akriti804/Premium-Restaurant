import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MENU_CATEGORIES } from "@/data/menu";
import { BRAND, CONTACT_INFO } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Menu() {
  const [active, setActive] = useState(MENU_CATEGORIES[0].slug);

  const handleAnchor = (slug) => {
    setActive(slug);
    const el = document.getElementById(`cat-${slug}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-bansi-bg" data-testid="menu-page">
      <Navbar ready={true} />

      {/* Hero band */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 ambient-gold" />
        <div className="container-lux relative z-10">
          <Link
            to="/"
            data-testid="menu-back-home"
            className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.32em] text-bansi-muted hover:text-bansi-accent transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 max-w-4xl"
          >
            <div className="text-overline">The Menu</div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-5 leading-[1.02]">
              Six ways to <span className="gold-text italic">love Patna.</span>
            </h1>
            <p className="mt-6 font-body font-light text-bansi-muted text-lg max-w-2xl">
              Composed with patience, served with love. Prices in INR (₹). All
              dishes are pure vegetarian. Jain preparations available on request.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-[72px] z-30 backdrop-blur-xl bg-[#050505]/85 border-y border-bansi-gold/15">
        <div className="container-lux">
          <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
            {MENU_CATEGORIES.map((c) => (
              <button
                key={c.slug}
                data-testid={`menu-tab-${c.slug}`}
                onClick={() => handleAnchor(c.slug)}
                className={`shrink-0 px-5 py-2 rounded-full text-[11px] font-body uppercase tracking-[0.28em] transition-all duration-300 border ${
                  active === c.slug
                    ? "bg-bansi-gold text-bansi-bg border-bansi-gold"
                    : "border-bansi-gold/30 text-bansi-muted hover:border-bansi-accent hover:text-bansi-accent"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <main className="container-lux pt-20 pb-32 space-y-28">
        {MENU_CATEGORIES.map((cat) => (
          <motion.section
            key={cat.slug}
            id={`cat-${cat.slug}`}
            data-testid={`menu-category-${cat.slug}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            variants={fadeUp}
            className="scroll-mt-32"
          >
            <div className="max-w-3xl mb-14">
              <div className="text-overline">{cat.overline}</div>
              <h2 className="font-heading text-4xl md:text-5xl text-white mt-4">
                {cat.name}
              </h2>
              <div className="luxury-divider my-6 max-w-[160px]" />
              <p className="font-body font-light text-bansi-muted text-base md:text-lg">
                {cat.blurb}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {cat.items.map((item, i) => (
                <div
                  key={item.name}
                  data-testid={`menu-item-${cat.slug}-${i}`}
                  className="group relative py-5 border-b border-bansi-gold/10 hover:border-bansi-gold/40 transition-colors duration-500"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <div className="flex items-center gap-2 min-w-0">
                      <h3 className="font-heading text-xl md:text-2xl text-white truncate">
                        {item.name}
                      </h3>
                      {item.signature && (
                        <Sparkles
                          size={13}
                          className="text-bansi-accent shrink-0"
                          aria-label="Signature"
                        />
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 shrink-0">
                      <span className="font-heading text-xl text-bansi-gold">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-body font-light text-bansi-muted text-sm md:text-base max-w-prose">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-10 md:p-14 text-center"
        >
          <div className="text-overline">Reserve Your Table</div>
          <h3 className="font-heading text-3xl md:text-4xl text-white mt-4">
            A table will be ready for you.
          </h3>
          <p className="font-body font-light text-bansi-muted mt-4 max-w-xl mx-auto">
            Weekend evenings fill quickly. A quick WhatsApp is the kindest way
            to reserve.
          </p>
          <a
            data-testid="menu-cta-whatsapp"
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
              `Hello ${BRAND.name}, I would like to reserve a table.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary-gold mt-8 inline-flex"
          >
            <MessageCircle size={15} />
            WhatsApp to Reserve
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
