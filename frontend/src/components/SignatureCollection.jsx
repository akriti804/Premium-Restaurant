import { motion } from "framer-motion";
import { SIGNATURE } from "@/constants/testIds";
import { SIGNATURE_ITEMS } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const SignatureRow = ({ item, index }) => {
  const reverse = index % 2 === 1;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
      variants={fadeUp}
      data-testid={SIGNATURE.item(item.slug)}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="lg:col-span-7 relative">
        <div
          className="absolute -inset-10 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-[1.4s] hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
          <div className="absolute top-5 left-5 glass-card rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-bansi-accent">
            0{index + 1}
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <div className="lg:col-span-5">
        <div className="text-overline">{item.overline}</div>
        <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-4 leading-[1.05]">
          {item.title}
        </h3>
        <div className="luxury-divider my-7 max-w-[180px]" />
        <p className="font-body font-light text-bansi-muted text-base md:text-lg leading-relaxed max-w-md">
          {item.description}
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block mt-8 text-sm font-body uppercase tracking-[0.28em] text-bansi-gold border-b border-bansi-gold/40 pb-1 hover:text-bansi-accent hover:border-bansi-accent transition-colors duration-300"
        >
          Reserve to Taste →
        </a>
      </div>
    </motion.div>
  );
};

export const SignatureCollection = () => {
  return (
    <section
      id="signature"
      data-testid={SIGNATURE.section}
      className="relative section-padding bg-bansi-bg"
    >
      <div className="container-lux">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          variants={fadeUp}
          className="max-w-3xl mb-24"
        >
          <div className="text-overline">The Signature Collection</div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-5 leading-[1.05]">
            Plates that defined
            <br />
            <span className="gold-text italic">a generation of Patna.</span>
          </h2>
          <p className="mt-6 text-lg font-body font-light text-bansi-muted max-w-xl">
            Six dishes — composed, plated and served the Bansi Vihar way.
          </p>
        </motion.div>

        <div className="space-y-32 lg:space-y-44">
          {SIGNATURE_ITEMS.map((item, i) => (
            <SignatureRow key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
