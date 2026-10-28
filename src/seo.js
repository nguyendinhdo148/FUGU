export const STORY_SEO = {
  title: "Our Story | SEI to FUGU to Maxim Saigon",
  description:
    "Discover the evolution from SEI Dining Lounge to FUGU Dining Lounge and Maxim Saigon at 13–15–17 Dong Khoi, Ho Chi Minh City. Explore the venue's story and learn how its current identity differs from other Maxim-named businesses.",
  url: "https://www.maximsaigon.vn/our-story",
  image: "https://www.maximsaigon.vn/banner/1.jpg",
};

export const createStoryStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${STORY_SEO.url}#aboutpage`,
  name: STORY_SEO.title,
  description: STORY_SEO.description,
  url: STORY_SEO.url,
  primaryImageOfPage: STORY_SEO.image,
  about: {
    "@type": "Restaurant",
    name: "Maxim Saigon",
    url: "https://www.maximsaigon.vn/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13–15–17 Dong Khoi Street",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
  },
  mainEntity: {
    "@type": "ItemList",
    name: "The evolution of Maxim Saigon",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "SEI Dining Lounge" },
      { "@type": "ListItem", position: 2, name: "FUGU Dining Lounge" },
      { "@type": "ListItem", position: 3, name: "Maxim Saigon" },
    ],
  },
});
