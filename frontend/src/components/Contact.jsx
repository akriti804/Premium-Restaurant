import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { CONTACT } from "@/constants/testIds";
import { CONTACT_INFO, BRAND } from "@/data/site";

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid={CONTACT.section}
      className="relative section-padding bg-bansi-bg"
    >
      <div className="container-lux">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-overline">Visit & Reserve</div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-5 leading-[1.05]">
            Find us on
            <br />
            <span className="gold-text italic">Boring Road, Patna.</span>
          </h2>
          <p className="mt-6 text-lg font-body font-light text-bansi-muted">
            Tables fill quickly on weekends — a quick call or WhatsApp is the
            kindest way to reserve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 glass-card rounded-3xl p-8 md:p-10 space-y-7"
          >
            <div>
              <div className="flex items-center gap-3 text-bansi-gold">
                <MapPin size={18} />
                <span className="text-overline">Address</span>
              </div>
              <p className="mt-3 font-body text-white text-base md:text-lg leading-relaxed">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="luxury-divider" />

            <div>
              <div className="flex items-center gap-3 text-bansi-gold">
                <Clock size={18} />
                <span className="text-overline">Hours</span>
              </div>
              <div className="mt-3 space-y-2">
                {CONTACT_INFO.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between font-body text-bansi-muted"
                  >
                    <span>{h.day}</span>
                    <span className="text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="luxury-divider" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                data-testid={CONTACT.call}
                href={`tel:${CONTACT_INFO.phoneTel}`}
                className="btn-primary-gold w-full"
              >
                <Phone size={15} />
                Call
              </a>
              <a
                data-testid={CONTACT.whatsapp}
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hello ${BRAND.name}, I would like to reserve a table.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-gold w-full"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
            <a
              data-testid={CONTACT.directions}
              href={CONTACT_INFO.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-[0.28em] text-bansi-gold hover:text-bansi-accent transition-colors"
            >
              <Navigation size={14} />
              Get Directions
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9 }}
            data-testid={CONTACT.map}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-bansi-gold/15 min-h-[420px]"
          >
            <iframe
              title="Bansi Vihar location"
              src={CONTACT_INFO.mapEmbed}
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "420px",
                filter: "invert(0.92) hue-rotate(180deg) saturate(0.6) brightness(0.85)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-bansi-gold/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
