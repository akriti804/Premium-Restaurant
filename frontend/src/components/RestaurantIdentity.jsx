import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO, RESTAURANT_FRONT_IMAGE, BRAND } from "@/data/site";

export const RESTAURANT_IDENTITY_TESTID = "restaurant-identity";

export const RestaurantIdentity = () => {
  return (
    <section
      id="visit"
      data-testid={RESTAURANT_IDENTITY_TESTID}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <div className="container-lux">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-overline">The Bansi Vihar</div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-5 leading-[1.05]">
            Find our doors,
            <br />
            <span className="gold-text italic">on Boring Road.</span>
          </h2>
          <p className="mt-6 text-lg font-body font-light text-bansi-muted max-w-xl">
            The neon glow of our signboard has welcomed Patna for years. Step
            in — we'd love to have you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-bansi-gold/25 shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
        >
          <img
            src={RESTAURANT_FRONT_IMAGE}
            alt="Bansi Vihar — Pure Veg Restaurant storefront, Boring Road, Patna"
            className="w-full h-full object-cover"
            data-testid="restaurant-identity-image"
          />

          {/* Cinematic dark gradient to harmonize bright photo with luxury theme */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.35) 35%, rgba(5,5,5,0.45) 65%, rgba(5,5,5,0.9) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.1) 30%, rgba(5,5,5,0.85) 100%)",
            }}
          />
          {/* Inset gold vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 180px rgba(0,0,0,0.85)" }}
          />

          {/* Floating identity card */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-2xl">
              <div className="text-overline">Pure Veg · South Indian · Chinese</div>
              <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white mt-3 leading-[1.02]">
                {BRAND.name}
                <span className="block gold-text italic text-2xl md:text-3xl mt-2 font-medium">
                  Patna's most loved
                </span>
              </h3>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-body text-bansi-muted">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-bansi-gold" />
                  {CONTACT_INFO.shortAddress}
                </span>
                <span className="h-3 w-px bg-bansi-gold/40 hidden sm:block" />
                <span className="hidden sm:inline">Open Mon — Sun · 10:30 AM to 11:30 PM</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  data-testid="identity-call-btn"
                  href={`tel:${CONTACT_INFO.phoneTel}`}
                  className="btn-primary-gold"
                >
                  <Phone size={14} />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  data-testid="identity-whatsapp-btn"
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hello ${BRAND.name}, I would like to reserve a table.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost-gold"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantIdentity;
