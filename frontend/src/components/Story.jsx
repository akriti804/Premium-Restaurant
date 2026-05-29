import { motion } from "framer-motion";
import { STORY } from "@/constants/testIds";
import { STORY_IMAGE } from "@/data/site";

export const Story = () => {
  return (
    <section
      id="story"
      data-testid={STORY.section}
      className="relative section-padding overflow-hidden"
      style={{ background: "#0B0B0B" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container-lux relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="text-overline">Our Story</div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mt-5 leading-[1.02]">
            A tradition loved
            <br />
            by <span className="gold-text italic">generations.</span>
          </h2>

          <div className="luxury-divider my-10 max-w-[180px]" />

          <p className="font-body font-light text-bansi-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            Bansi Vihar began as a humble family kitchen on Boring Road, and
            has grown into one of Patna's most loved restaurants — feeding
            generations of weddings, anniversaries, school reunions and quiet
            Sunday afternoons.
          </p>
          <p className="font-body font-light text-bansi-muted text-base md:text-lg leading-relaxed mt-5 max-w-2xl">
            Our recipes have not changed. Our chutneys are still stone-ground
            at dawn. Our thalis are still served on warm copper. We are not in
            a hurry. We are in love with our craft.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { v: "100%", l: "Pure Vegetarian" },
              { v: "3", l: "Generations" },
              { v: "120+", l: "Recipes" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card rounded-2xl p-5"
              >
                <div className="font-heading text-3xl gold-text">{s.v}</div>
                <div className="text-[10px] mt-2 uppercase tracking-[0.3em] text-bansi-muted">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div
            data-testid="story-image"
            className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-bansi-gold/25 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            <img
              src={STORY_IMAGE}
              alt="Bansi Vihar storefront — Boring Road, Patna"
              className="w-full h-full object-cover"
            />
            {/* Cinematic dark overlay to harmonize bright daytime photo with luxury theme */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.15) 40%, rgba(5,5,5,0.85) 100%)",
              }}
            />
            {/* Subtle gold vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 120px rgba(0,0,0,0.7)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5">
              <div className="text-overline">The Bansi Vihar Storefront</div>
              <div className="font-heading text-xl text-white mt-2">
                "Composed with patience. Served with love."
              </div>
              <div className="text-xs font-body text-bansi-muted mt-2">
                Boring Road · Patna
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
