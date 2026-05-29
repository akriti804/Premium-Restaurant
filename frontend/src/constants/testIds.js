export const HOME = {
  emergentLink: "home-emergent-link",
};

export const NAV = {
  container: "navbar",
  logo: "nav-logo",
  link: (key) => `nav-link-${key}`,
  cta: "nav-reserve-cta",
  mobileToggle: "nav-mobile-toggle",
};

export const LOADER = {
  container: "loader",
  logo: "loader-logo",
};

export const HERO = {
  section: "hero-section",
  headline: "hero-headline",
  sub: "hero-subheading",
  exploreBtn: "hero-explore-menu",
  reserveBtn: "hero-reserve-table",
  image: "hero-floating-food",
};

export const SIGNATURE = {
  section: "signature-collection",
  item: (slug) => `signature-item-${slug}`,
};

export const STORY = {
  section: "restaurant-story",
};

export const GALLERY = {
  section: "gallery",
  item: (i) => `gallery-item-${i}`,
};

export const REVIEWS = {
  section: "reviews",
  count: "reviews-count",
  rating: "reviews-rating",
  card: (i) => `review-card-${i}`,
};

export const CONTACT = {
  section: "contact",
  call: "contact-call-btn",
  whatsapp: "contact-whatsapp-btn",
  directions: "contact-directions-btn",
  map: "contact-map",
};

export const FOOTER = {
  section: "footer",
  link: (key) => `footer-link-${key}`,
  social: (key) => `footer-social-${key}`,
};
