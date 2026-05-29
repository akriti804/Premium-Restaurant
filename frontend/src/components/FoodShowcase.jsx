import { motion } from "framer-motion";
import { SHOWCASE_ITEMS } from "@/data/showcase";

export const SHOWCASE_TESTID = "food-showcase";

export const FoodShowcase = () => {
  return (
    <section
      id="showcase"
      data-testid={SHOWCASE_TESTID}
      className="relative section-padding overflow-hidden"
      style={{ background: "#050505" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container-lux relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mb-20"
        >
          <div className="text-overline">The Food Showcase</div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-5 leading-[1.05]">
            Twenty plates,
            <br />
            <span className="gold-text italic">one luxurious table.</span>
          </h2>
          <p className="mt-6 text-lg font-body font-light text-bansi-muted max-w-2xl">
            From the first sip of filter coffee at dawn to the last bite of
            rasmalai at night — composed with patience, plated with intent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SHOWCASE_ITEMS.map((item, i) => (
            <motion.article
              key={item.slug}
              data-testid={`showcase-${item.slug}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.7,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-bansi-gold/10 group-hover:border-bansi-accent/40 transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                {/* Index */}
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-bansi-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-bansi-accent">
                    {item.overline}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-white mt-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-bansi-muted mt-2 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-20 transition-all duration-500">
                    {item.blurb}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
