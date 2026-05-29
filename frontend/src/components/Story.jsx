import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { STORY } from "@/constants/testIds";
import { STORY_IMAGE } from "@/data/site";

export const Story = () => {
  const hasImage = Boolean(STORY_IMAGE);

  return (
    <section
      id="story"
      data-testid={STORY.section}
      className="relative section-padding overflow-hidden"
      style={{ background: "#0B0B0B" }}
    >
      {/* Soft ambient gold backdrop (replaces parallax image) */}
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
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-bansi-gold/15">
            {hasImage ? (
              <>
                <img
                  src={STORY_IMAGE}
                  alt="Bansi Vihar dining"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5">
                  <div className="text-overline">A Patna Institution</div>
                  <div className="font-heading text-xl text-white mt-2">
                    "Composed with patience. Served with love."
                  </div>
                </div>
              </>
            ) : (
              // Elegant empty-state placeholder until owner uploads image
              <div
                data-testid="story-image-placeholder"
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.08), transparent 60%), #0B0B0B",
                }}
              >
                <div className="h-16 w-16 rounded-full border border-bansi-gold/30 flex items-center justify-center text-bansi-gold">
                  <ImageIcon size={22} />
                </div>
                <div className="font-heading text-2xl text-white mt-6">
                  Awaiting Owner's Photograph
                </div>
                <p className="font-body text-sm text-bansi-muted mt-3 max-w-xs">
                  A signature image of Bansi Vihar will appear here.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
