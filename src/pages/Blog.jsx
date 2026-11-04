
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Clock,
} from "lucide-react";

import { ThemeToggle } from "@/component/ThemeToggle";
import { StarBackground } from "@/component/StarBackground";
import { Navbar } from "@/component/Navbar";
import { Footer } from "@/component/Footter";
import { useFullscreen } from "@/component/hooks/useFullscreen";

const BLOG_SEO = {
  title: "Luxury Event Venue in Ho Chi Minh City | Maxim Saigon",
  description:
    "Discover an elegant dining and event destination in Ho Chi Minh City. Explore Maxim Saigon for corporate gatherings, private celebrations and memorable dining experiences.",
  url: "https://www.maximsaigon.vn/blog",
  image: "https://www.maximsaigon.vn/blog/1.jpg",
};

const images = Array.from({ length: 10 }, (_, index) => ({
  src: `/blog/${index + 1}.jpg`,
  alt: `Maxim Saigon dining and event experience ${index + 1}`,
}));

const BlogImage = ({
  index,
  caption,
  className = "",
  imageClass = "",
}) => (
  <figure className={`group min-w-0 ${className}`}>
    <div className="overflow-hidden">
      <img
        src={images[index].src}
        alt={images[index].alt}
        loading={index === 0 ? "eager" : "lazy"}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageClass}`}
      />
    </div>

    {caption && (
      <figcaption className="mt-3 text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default function Blog() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  useEffect(() => {
    const setMeta = (selector, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";

      let element = document.querySelector(
        `meta[${attr}="${selector}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, selector);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    document.title = BLOG_SEO.title;

    setMeta("description", BLOG_SEO.description);
    setMeta("og:title", BLOG_SEO.title, true);
    setMeta("og:description", BLOG_SEO.description, true);
    setMeta("og:type", "article", true);
    setMeta("og:url", BLOG_SEO.url, true);
    setMeta("og:image", BLOG_SEO.image, true);
    setMeta("twitter:title", BLOG_SEO.title);
    setMeta("twitter:description", BLOG_SEO.description);
    setMeta("twitter:image", BLOG_SEO.image);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", BLOG_SEO.url);

    return () => {
      document.title =
        "Maxim Saigon | Restaurant & Lounge in Ho Chi Minh City";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Existing website background */}
      <ThemeToggle />
      <StarBackground />

      {/* Existing Navbar */}
      <Navbar
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Main content */}
      <main
        className="relative z-10 flex flex-col w-full pt-24 md:pt-28"
        itemScope
        itemType="https://schema.org/WebPage"
      >

        {/* PAGE INTRO */}
        <section>
          <div className="max-w-7xl mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-12">

            <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#a57c50] mb-7">
              <span className="w-8 h-px bg-[#a57c50]" />
              Maxim Journal
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-end">

              <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] font-normal">
                Space & <br />
                <span className="italic text-[#a57c50]">
                  Celebrations.
                </span>
              </h1>

              <p className="text-muted-foreground leading-8 text-sm md:text-base max-w-lg md:ml-auto">
                Discover inspiring spaces, exceptional dining
                experiences and memorable celebrations at
                Maxim Saigon.
              </p>

            </div>
          </div>

          {/* HERO */}
          <div className="max-w-7xl mx-auto px-5 md:px-10 pb-14">

            <div className="relative overflow-hidden h-[400px] md:h-[620px]">

              <img
                src={images[0].src}
                alt="Elegant event venue at Maxim Saigon"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-14 text-white">

                <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase">
                  Featured Story · Space & Events
                </span>

                <h2 className="font-serif text-3xl md:text-6xl max-w-3xl mt-5 leading-tight">
                  Discover an Elegant Event Venue in Ho Chi Minh City
                </h2>

                <p className="text-white/80 text-sm mt-5 max-w-xl leading-7">
                  Explore an inviting destination for private
                  gatherings, corporate events and memorable occasions.
                </p>

                <a
                  href="#article"
                  className="inline-flex items-center gap-3 mt-7 text-xs tracking-[0.2em] uppercase border-b border-white/60 pb-2 hover:gap-5 transition-all"
                >
                  Explore the Story
                  <ArrowRight size={15} />
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article
          id="article"
          itemScope
          itemType="https://schema.org/Article"
        >

          <meta itemProp="headline" content={BLOG_SEO.title} />
          <meta itemProp="description" content={BLOG_SEO.description} />
          <meta itemProp="image" content={BLOG_SEO.image} />
          <meta itemProp="author" content="Maxim Saigon" />

          <div className="max-w-7xl mx-auto px-5 md:px-10">

            {/* ARTICLE META */}
            <div className="flex flex-wrap gap-6 md:gap-10 py-8 border-b border-border text-[10px] tracking-[0.15em] uppercase text-muted-foreground">

              <span className="flex items-center gap-2">
                <CalendarDays size={14} />
                Maxim Journal
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Ho Chi Minh City
              </span>

              <span className="flex items-center gap-2">
                <Clock size={14} />
                5 Min Read
              </span>

            </div>

            {/* INTRODUCTION */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">

              <div className="md:col-span-4">

                <span className="text-[10px] tracking-[0.25em] uppercase text-[#a57c50]">
                  The Experience
                </span>

                <h2 className="font-serif text-3xl md:text-4xl mt-5 leading-snug">
                  A beautiful space creates unforgettable moments.
                </h2>

              </div>

              <div className="md:col-span-7 md:col-start-6">

                <p className="text-muted-foreground leading-8 text-sm md:text-base">
                  A memorable celebration is about more than
                  exceptional food. The atmosphere, thoughtful
                  details and overall experience all contribute
                  to making every occasion special.
                </p>

                <p className="text-muted-foreground leading-8 text-sm md:text-base mt-5">
                  Located in the heart of Ho Chi Minh City,
                  Maxim Saigon brings together restaurant dining
                  and Lounge experiences in an elegant setting.
                </p>

              </div>
            </div>

            {/* GALLERY 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

              <BlogImage
                index={1}
                className="md:col-span-7"
                imageClass="aspect-[4/3]"
                caption="01 — The Restaurant"
              />

              <BlogImage
                index={2}
                className="md:col-span-5 md:mt-24"
                imageClass="aspect-[4/5]"
                caption="02 — Dining Experience"
              />

              <BlogImage
                index={3}
                className="md:col-span-5"
                imageClass="aspect-[4/5]"
                caption="03 — Interior Details"
              />

              <BlogImage
                index={4}
                className="md:col-span-7"
                imageClass="aspect-[4/3]"
                caption="04 — Memorable Moments"
              />

            </div>

            {/* SECTION 2 */}
            <section className="max-w-3xl mx-auto text-center py-20 md:py-28">

              <span className="text-[10px] tracking-[0.25em] uppercase text-[#a57c50]">
                Private & Corporate Events
              </span>

              <h2 className="font-serif text-3xl md:text-5xl leading-tight mt-6">
                An Elegant Setting for Corporate Gatherings and Business Meetings
              </h2>

              <p className="text-muted-foreground text-sm leading-8 mt-7">
                From intimate gatherings to professional business
                occasions, the right atmosphere creates a more
                welcoming environment for meaningful conversations
                and connections.
              </p>

            </section>

            {/* IMAGE 6 */}
            <BlogImage
              index={5}
              className="w-full"
              imageClass="aspect-[16/8]"
              caption="05 — A Place to Connect"
            />

            {/* GALLERY 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6">

              <BlogImage
                index={6}
                imageClass="aspect-[4/5]"
                caption="06 — Dining Experience"
              />

              <BlogImage
                index={7}
                imageClass="aspect-[4/5]"
                caption="07 — Food & Details"
              />

              <BlogImage
                index={8}
                imageClass="aspect-[4/5]"
                caption="08 — Elegant Moments"
              />

            </div>

            {/* SECTION 3 */}
            <section className="grid md:grid-cols-2 gap-10 md:gap-20 py-20 md:py-28 items-center">

              <div>

                <span className="text-[10px] tracking-[0.25em] uppercase text-[#a57c50]">
                  More Than Dining
                </span>

                <h2 className="font-serif text-3xl md:text-5xl mt-5 leading-tight">
                  Exceptional Dining Meets an Elegant Atmosphere.
                </h2>

              </div>

              <div>

                <p className="text-muted-foreground leading-8 text-sm md:text-base">
                  Great food is an essential part of every
                  memorable gathering. At Maxim Saigon, dining
                  and atmosphere come together to create an
                  experience worth remembering.
                </p>

              </div>

            </section>

            {/* FINAL GALLERY */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">

              <BlogImage
                index={8}
                imageClass="aspect-[4/3]"
                caption="09 — Maxim Saigon"
              />

              <BlogImage
                index={9}
                imageClass="aspect-[4/3]"
                caption="10 — An Evening at Maxim"
              />

            </div>

            {/* CTA */}
            <section className="bg-[#25231f] text-white mt-24">

              <div className="max-w-5xl mx-auto px-5 py-20 md:py-28 text-center">

                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a47e]">
                  Discover Maxim Saigon
                </span>

                <h2 className="font-serif text-4xl md:text-6xl mt-7 leading-tight">
                  Your Next Memorable
                  <br />
                  <span className="italic text-[#c5a47e]">
                    Gathering Begins Here.
                  </span>
                </h2>

                <p className="text-white/60 text-sm leading-7 mt-7 max-w-xl mx-auto">
                  Discover the dining atmosphere and experiences
                  waiting for you at Maxim Saigon.
                </p>

                <Link
                  to="/"
                  className="inline-flex items-center gap-4 border border-white/40 px-8 py-4 mt-9 text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
                >
                  Explore Maxim
                  <ArrowUpRight size={15} />
                </Link>

              </div>
            </section>

          </div>
        </article>
      </main>

      {/* Existing Footer */}
      <Footer />

    </div>
  );
}
