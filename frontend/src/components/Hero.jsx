import { motion } from "framer-motion";
import { ArrowUpRight, UtensilsCrossed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HERO } from "@/constants/testIds";
import { HERO_IMAGE, BRAND } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = ({ ready }) => {
  const navigate = useNavigate();
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      data-testid={HERO.section}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-0"
    >
      {/* Backdrop layered gold ambient */}
      <div
        className="absolute -top-32 right-[-10%] h-[700px] w-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 60%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-lux relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span className="gold-line" />
            <span className="text-overline">{BRAND.estd} · Patna</span>
          </motion.div>

          <motion.h1
            data-testid={HERO.headline}
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            custom={1}
            variants={fadeUp}
            className="font-heading mt-6 text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] font-medium text-white tracking-tight"
          >
            Patna's most loved
            <br />
            <span className="gold-text italic">pure veg</span> restaurant.
          </motion.h1>

          <motion.p
            data-testid={HERO.sub}
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            custom={2}
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg md:text-xl font-body font-light text-bansi-muted leading-relaxed"
          >
            Authentic South Indian, Indo-Chinese, royal thalis, dessert shakes
            and a quietly grand family dining experience — composed with three
            decades of devotion.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid={HERO.exploreBtn}
              onClick={() => navigate("/menu")}
              className="btn-primary-gold"
            >
              Explore Menu
              <ArrowUpRight size={16} />
            </button>
            <button
              data-testid={HERO.reserveBtn}
              onClick={() => handleScrollTo("#contact")}
              className="btn-ghost-gold"
            >
              Reserve Table
              <UtensilsCrossed size={15} />
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            custom={4}
            variants={fadeUp}
            className="mt-14 flex gap-10"
          >
            <div>
              <div className="font-heading text-3xl md:text-4xl gold-text">
                9,680+
              </div>
              <div className="text-xs uppercase tracking-[0.28em] text-bansi-muted mt-2">
                Google Reviews
              </div>
            </div>
            <div className="h-12 w-px bg-bansi-gold/30" />
            <div>
              <div className="font-heading text-3xl md:text-4xl gold-text">
                4.1 ★
              </div>
              <div className="text-xs uppercase tracking-[0.28em] text-bansi-muted mt-2">
                Avg. Rating
              </div>
            </div>
            <div className="h-12 w-px bg-bansi-gold/30 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-heading text-3xl md:text-4xl gold-text">
                38
              </div>
              <div className="text-xs uppercase tracking-[0.28em] text-bansi-muted mt-2">
                Years of Heritage
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT - Floating food */}
        <div className="lg:col-span-5 relative h-[360px] sm:h-[480px] lg:h-[640px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={ready ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="absolute h-[520px] w-[520px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.32) 0%, transparent 60%)",
                filter: "blur(50px)",
              }}
            />
            <motion.img
              data-testid={HERO.image}
              src={HERO_IMAGE}
              alt="Bansi Vihar signature dish"
              className="relative z-10 w-[110%] max-w-none object-contain animate-float"
              style={{
                filter: "drop-shadow(0 25px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(212,175,55,0.25))",
              }}
            />
          </motion.div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="absolute bottom-4 left-2 glass-card rounded-2xl px-5 py-4 z-20 hidden sm:block"
          >
            <div className="text-overline">Today's Signature</div>
            <div className="font-heading text-xl text-white mt-1">
              Paper Masala Dosa
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-bansi-muted">
          Scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-bansi-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
