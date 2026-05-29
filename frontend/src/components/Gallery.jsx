import { motion } from "framer-motion";
import { GALLERY } from "@/constants/testIds";
import { GALLERY_IMAGES } from "@/data/site";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid={GALLERY.section}
      className="relative section-padding bg-bansi-bg"
    >
      <div className="container-lux">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mb-20"
        >
          <div className="text-overline">The Gallery</div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-5 leading-[1.05]">
            Moments,
            <span className="gold-text italic"> plated.</span>
          </h2>
          <p className="mt-6 text-lg font-body font-light text-bansi-muted">
            A quiet, considered look inside the Bansi Vihar kitchen and dining
            room.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              data-testid={GALLERY.item(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.15 }}
              className={`break-inside-avoid overflow-hidden rounded-3xl group relative ${
                img.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                <div className="text-overline">Bansi Vihar</div>
                <div className="font-heading text-lg text-white mt-1">
                  {img.alt}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
