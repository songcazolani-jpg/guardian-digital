/** Static image paths served from /public/images (stable URLs on every deploy). */
export const images = {
  logo: "/images/ndw-logo.jpeg",
  heroHome: "/images/hero-home.jpg",
  heroAbout: "/images/hero-about.jpg",
  heroAffiliates: "/images/hero-affiliates.jpg",
  heroAssociations: "/images/hero-associations.jpg",
  heroBlog: "/images/hero-blog.jpg",
  heroContact: "/images/hero-contact.jpg",
  heroFaq: "/images/hero-faq.jpg",
  heroServices: "/images/hero-services.jpg",
  associations: {
    dmasa: "/images/associations/dmasa.jpg",
    bpesa: "/images/associations/bpesa.png",
    fsca: "/images/associations/fsca.png",
  },
  clients: {
    autoGeneral: "/images/clients/auto-general.jpg",
    budgetInsurance: "/images/clients/budget-insurance.png",
    dialDirect: "/images/clients/dial-direct.png",
    firstForWomen: "/images/clients/first-for-women.png",
    hippo: "/images/clients/hippo.png",
    miway: "/images/clients/miway.png",
    mtn: "/images/clients/mtn.png",
    sanlam: "/images/clients/sanlam.png",
    tracker: "/images/clients/tracker.png",
  },
} as const;
