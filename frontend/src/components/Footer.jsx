import { Instagram, Facebook, Twitter, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FOOTER } from "@/constants/testIds";
import { BRAND, CONTACT_INFO, NAV_LINKS } from "@/data/site";

export const Footer = () => {
  return (
    <footer
      data-testid={FOOTER.section}
      className="relative pt-24 pb-10 bg-bansi-bg border-t border-bansi-gold/15"
    >
      <div className="container-lux">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-heading text-3xl gold-text inline-block">
              {BRAND.name}
            </Link>
            <p className="mt-4 font-body text-bansi-muted leading-relaxed max-w-md">
              Patna's most loved pure vegetarian restaurant. South Indian,
              Indo-Chinese, royal thalis and desserts — served with the warmth
              of a family kitchen.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { key: "instagram", Icon: Instagram, href: "#" },
                { key: "facebook", Icon: Facebook, href: "#" },
                { key: "twitter", Icon: Twitter, href: "#" },
              ].map(({ key, Icon, href }) => (
                <a
                  key={key}
                  data-testid={FOOTER.social(key)}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-bansi-gold/30 flex items-center justify-center text-bansi-gold hover:bg-bansi-gold hover:text-bansi-bg transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-overline">Explore</div>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) =>
                l.route ? (
                  <li key={l.key}>
                    <Link
                      data-testid={FOOTER.link(l.key)}
                      to={l.href}
                      className="font-body text-bansi-muted hover:text-bansi-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ) : (
                  <li key={l.key}>
                    <a
                      data-testid={FOOTER.link(l.key)}
                      href={`/${l.href}`}
                      onClick={(e) => {
                        if (window.location.pathname === "/") {
                          e.preventDefault();
                          document
                            .querySelector(l.href)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="font-body text-bansi-muted hover:text-bansi-accent transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-overline">Reach Us</div>
            <ul className="mt-5 space-y-4 font-body text-bansi-muted">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-bansi-gold mt-1" />
                <a
                  data-testid={FOOTER.link("phone")}
                  href={`tel:${CONTACT_INFO.phoneTel}`}
                  className="hover:text-bansi-accent"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="text-bansi-muted leading-relaxed">
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="luxury-divider mt-16 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] uppercase tracking-[0.32em] text-bansi-muted">
            © {new Date().getFullYear()} {BRAND.name}. Pure Vegetarian Restaurant.
          </div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-bansi-muted">
            Composed with love in Patna · Bihar · India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
