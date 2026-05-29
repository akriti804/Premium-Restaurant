import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import CountUp from "react-countup";
import { REVIEWS } from "@/constants/testIds";
import { REVIEWS_LIST } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Reviews = () => {
  return (
    <section
      id="reviews"
      data-testid={REVIEWS.section}
      className="relative section-padding overflow-hidden"
      style={{ background: "#0B0B0B" }}
    >
      <div className="absolute inset-0 ambient-gold" />

      <div className="container-lux relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-overline">Loved By Patna</div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-5 leading-[1.05]">
            <span className="gold-text italic">Nine thousand</span> stories.
            <br />
            One restaurant.
          </h2>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={{
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              testid: REVIEWS.count,
              end: 9680,
              suffix: "+",
              label: "Google Reviews",
            },
            {
              testid: REVIEWS.rating,
              end: 4.1,
              decimals: 1,
              suffix: " ★",
              label: "Average Rating",
            },
            {
              testid: "reviews-tenure",
              end: 38,
              suffix: " yrs",
              label: "Years of Service",
            },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              custom={i}
              data-testid={s.testid}
              className="glass-card rounded-3xl p-10 text-center"
            >
              <div className="font-heading text-5xl md:text-6xl gold-text">
                <CountUp
                  end={s.end}
                  duration={2.6}
                  decimals={s.decimals || 0}
                  suffix={s.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-xs uppercase tracking-[0.32em] text-bansi-muted mt-4">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Review cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS_LIST.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              data-testid={REVIEWS.card(i)}
              className="glass-card rounded-3xl p-8 hover:border-bansi-accent/40 transition-all duration-500 group"
            >
              <Quote
                size={28}
                className="text-bansi-gold/40 group-hover:text-bansi-accent transition-colors"
              />
              <p className="font-heading text-xl text-white mt-5 leading-snug italic">
                "{r.quote}"
              </p>
              <div className="luxury-divider my-6" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-body text-sm text-white">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-bansi-muted mt-1">
                    {r.location}
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={13}
                      className={
                        idx < r.rating
                          ? "fill-bansi-accent text-bansi-accent"
                          : "text-bansi-gold/20"
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
