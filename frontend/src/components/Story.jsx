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
      {/* Parallax background image */}
      <div className="absolute inset-0">
        <img
          src={STORY_IMAGE}
          alt="Restaurant interior"
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #050505 0%, rgba(5,5,5,0.6) 50%, #050505 100%)",
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
            Bansi Vihar opened its doors in 1987 on a quiet stretch of Boring
            Road. What began as a humble family kitchen has, over four decades,
            become a Patna institution — feeding three generations of weddings,
            anniversaries, school reunions and Sunday afternoons.
          </p>
          <p className="font-body font-light text-bansi-muted text-base md:text-lg leading-relaxed mt-5 max-w-2xl">
            Our recipes have not changed. Our chutneys are still stone-ground at
            dawn. Our thalis are still served on warm copper. We are not in a
            hurry. We are in love with our craft.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { v: "1987", l: "Established" },
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
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
            <img
              src={STORY_IMAGE}
              alt="Bansi Vihar dining"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5">
              <div className="text-overline">Since 1987</div>
              <div className="font-heading text-xl text-white mt-2">
                "Composed with patience. Served with love."
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
