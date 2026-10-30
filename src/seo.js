
export const STORY_SEO = {
  title: "Our Story | Maxim Saigon",
  description:
    "Discover the evolution of Maxim Saigon, from SEI Dining Lounge to FUGU Dining Lounge and its current identity at 13–15–17 Dong Khoi, Ho Chi Minh City, Vietnam.",
  url: "https://www.maximsaigon.vn/our-story",
  image: "https://www.maximsaigon.vn/maximSG/1.jpg",
};

export const createStoryStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${STORY_SEO.url}#aboutpage`,
  name: STORY_SEO.title,
  description: STORY_SEO.description,
  url: STORY_SEO.url,
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: STORY_SEO.image,
  },

  mainEntity: {
    "@type": "Restaurant",
    "@id": "https://www.maximsaigon.vn/#restaurant",
    name: "Maxim Saigon",
    url: "https://www.maximsaigon.vn/",
    description:
      "Maxim Saigon is a Restaurant & Lounge in Ho Chi Minh City, Vietnam, offering contemporary Asian-European fusion cuisine.",
    telephone: "+84855873979",
    priceRange: "$$$",
    servesCuisine: [
      "Asian",
      "European",
      "Fusion",
      "Contemporary",
    ],

    address: {
      "@type": "PostalAddress",
      streetAddress: "13-15-17 Dong Khoi",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh",
      postalCode: "700000",
      addressCountry: "VN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.773256,
      longitude: 106.706019,
    },

    hasMap:
      "https://maps.app.goo.gl/3Var6ERf4p23butF8",

    sameAs: [
      "https://www.instagram.com/maiximsaigon/",
      "https://www.facebook.com/profile.php?id=61594056338036",
      "https://wa.me/84855873979",
    ],
  },

  about: {
    "@type": "Thing",
    name: "The evolution of Maxim Saigon",
    description:
      "The brand journey from SEI Dining Lounge to FUGU Dining Lounge and Maxim Saigon.",
  },

  mainEntityOfPage: STORY_SEO.url,

  hasPart: {
    "@type": "ItemList",
    name: "The evolution of Maxim Saigon",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SEI Dining Lounge",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FUGU Dining Lounge",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Maxim Saigon",
      },
    ],
  },
});
