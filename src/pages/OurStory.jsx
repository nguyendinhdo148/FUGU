import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/component/ThemeToggle";
import { StarBackground } from "@/component/StarBackground";
import { Navbar } from "@/component/Navbar";
import { Footer } from "@/component/Footter";
import { useFullscreen } from "@/component/hooks/useFullscreen";
import { createStoryStructuredData, STORY_SEO } from "@/seo";

const STORY_CHAPTERS = [
  {
    id: "sei",
    number: "I",
    era: "Chapter One",
    year: "The Beginning",
    name: "SEI Dining Lounge",
    tagline: "The First Chapter of the Journey",
    lead:
      "An earlier chapter in the evolution of the dining and lounge destination on Dong Khoi Street.",
    description:
      "SEI Dining Lounge represents an earlier chapter in the venue's more recent development. Its dining and lounge concept brought together Asian-fusion flavours, an elegant atmosphere, and entertainment. This chapter forms part of the broader story that later continued under the FUGU Dining Lounge name and today as Maxim Saigon. The timeline describes the evolution of the venue and its concepts; it should not be confused with the separate histories of other businesses that use the Maxim name.",
    highlights: [
      "Asian-fusion cuisine with clean, distinct flavours",
      "Live jazz performances enhancing the dining atmosphere",
      "Dong Khoi Street, District 1, Ho Chi Minh City",
    ],
    cover: "/Sei/1.jpg",
    strip: ["/Sei/2.jpg", "/Sei/3.jpg", "/Sei/4.jpg"],
  },
  {
    id: "fugu",
    number: "II",
    era: "Chapter Two",
    year: "A New Chapter",
    name: "FUGU Dining Lounge",
    tagline: "A New Expression of the Venue",
    lead:
      "A further chapter in the destination's evolution, with a distinct dining concept and atmosphere.",
    description:
      "The venue's story continued under the name FUGU Dining Lounge, marking a new expression of its dining and lounge identity. The FUGU chapter focused on contemporary Japanese-inspired dining and a social atmosphere suited to evenings out. It represents a stage in the development that leads to the current Maxim Saigon concept. SEI Dining Lounge, FUGU Dining Lounge, and Maxim Saigon are presented here as chapters in the venue's evolution, rather than as interchangeable names for unrelated brands.",
    highlights: [
      "Modern izakaya with contemporary Japanese flair",
      "Contemporary Japanese-inspired dining concept",
      "Sophisticated bar and live weekend performances",
    ],
    cover: "/fugu/1.jpg",
    strip: ["/fugu/2.jpg", "/fugu/3.jpg", "/fugu/4.jpg"],
  },
  {
    id: "maxim",
    number: "III",
    era: "Chapter Three",
    year: "The Current Chapter",
    name: "Maxim Saigon",
    tagline: "The Story Continues",
    lead:
      "The current chapter of an evolving dining and entertainment destination in central Ho Chi Minh City.",
    description:
      "Maxim Saigon is the current chapter in this venue's development, bringing together dining, lounge hospitality, and entertainment under its own identity. Located at 13–15–17 Dong Khoi Street in Ho Chi Minh City, Maxim Saigon continues the story associated with the earlier SEI Dining Lounge and FUGU Dining Lounge chapters. Maxim Saigon should be distinguished from other businesses using similar names, including Maxim's Club and Maxim's An Nam; this page describes the development journey presented here, not an assertion that all businesses with the Maxim name are the same company.",
    highlights: [
      "Current Maxim Saigon restaurant and lounge concept",
      "Curated wine cellar and signature cocktails",
      "Live entertainment and private dining experiences",
    ],
    cover: "/maximSG/1.jpg",
    strip: [],
  },
];

/* ── reveal hook ── */
const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
};

/* ── chapter ── */
const Chapter = ({ chapter, index }) => {
  const { ref, visible } = useReveal();
  const flipped = index % 2 === 1;

  return (
    <article id={chapter.id} ref={ref} className="scroll-mt-28">
      {/* ─── Meta row: chapter number + era + year ─── */}
      <div
        className={`grid grid-cols-12 gap-4 items-baseline pb-5 border-b border-stone-300/60 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="col-span-2 md:col-span-1">
          <span className="font-serif text-3xl md:text-4xl text-stone-800 italic leading-none">
            {chapter.number}
          </span>
        </div>
        <div className="col-span-6 md:col-span-5">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-stone-500">
            {chapter.era}
          </p>
        </div>
        <div className="col-span-4 md:col-span-6 text-right">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-stone-500">
            {chapter.year}
          </p>
        </div>
      </div>

      {/* ─── Title block: 2 columns on desktop ─── */}
      <div
        className={`grid md:grid-cols-12 gap-6 md:gap-12 pt-10 md:pt-14 pb-10 md:pb-14 transition-all duration-1000 delay-100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="md:col-span-7 font-serif font-light text-stone-900 text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight">
          {chapter.name}
        </h2>
        <div className="md:col-span-5 md:pt-3">
          <p className="font-serif italic text-xl md:text-2xl text-stone-600 leading-snug">
            {chapter.tagline}
          </p>
          <p className="mt-6 text-[15px] md:text-base leading-[1.85] text-stone-600 font-light">
            {chapter.lead}
          </p>
        </div>
      </div>

      {/* ─── Cover image: Thu nhỏ lại, đặt vào giữa ─── */}
      <div
        className={`flex justify-center transition-all duration-[1400ms] delay-150 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Giới hạn max-w-4xl để ảnh không bị kéo full chiều ngang trang web */}
        <div className="w-full max-w-4xl aspect-[16/9] md:aspect-[16/10] bg-stone-200 overflow-hidden rounded-sm shadow-sm">
          <img
            src={chapter.cover}
            alt={chapter.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ─── Body: description + highlights, asymmetric ─── */}
      <div
        className={`grid md:grid-cols-12 gap-6 md:gap-12 pt-12 md:pt-16 pb-4 transition-all duration-1000 delay-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* description */}
        <div
          className={`md:col-span-7 ${
            flipped ? "md:order-2 md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"
          }`}
        >
          <p className="text-base md:text-[17px] leading-[1.95] text-stone-700 font-light">
            {chapter.description}
          </p>
        </div>

        {/* highlights */}
        <div className={`md:col-span-5 ${flipped ? "md:order-1" : ""}`}>
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-6">
            Highlights
          </p>
          <ul className="space-y-0">
            {chapter.highlights.map((h, i) => (
              <li
                key={h}
                className="flex items-start gap-5 py-4 border-t border-stone-300/60 last:border-b"
              >
                <span className="shrink-0 font-serif italic text-stone-400 text-sm mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-[15px] leading-relaxed text-stone-700">
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── Strip: 3 images row (Thu nhỏ lại, vuông vức) ─── */}
      {chapter.strip.length > 0 && (
        <div
          className={`flex justify-center pt-6 pb-16 md:pb-24 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-3xl">
            {chapter.strip.map((src, i) => (
              <div
                key={src}
                className="aspect-square bg-stone-200 overflow-hidden rounded-sm group"
              >
                <img
                  src={src}
                  alt={`${chapter.name} — view ${i + 2}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* spacer for maxim (no strip) */}
      {chapter.strip.length === 0 && <div className="pb-16 md:pb-24" />}
    </article>
  );
};

/* ── page ── */
export const OurStory = () => {
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  useEffect(() => {
    const setMeta = (selector, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${selector}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, selector);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };
    document.title = STORY_SEO.title;
    setMeta("description", STORY_SEO.description);
    setMeta("og:title", STORY_SEO.title, true);
    setMeta("og:description", STORY_SEO.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", STORY_SEO.url, true);
    setMeta("og:image", STORY_SEO.image, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", STORY_SEO.title);
    setMeta("twitter:description", STORY_SEO.description);
    setMeta("twitter:image", STORY_SEO.image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", STORY_SEO.url);

    let schemaScript = document.querySelector('script[data-our-story-schema="true"]');
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.setAttribute("data-our-story-schema", "true");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(createStoryStructuredData());
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar toggleFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />

      <main
        className="relative z-10 w-full pt-24 md:pt-28"
        itemScope
        itemType="https://schema.org/WebPage"
        aria-label="Our Story - Maxim Saigon"
      >
        <meta itemProp="name" content="Our Story - Maxim Saigon" />
        <meta itemProp="description" content={STORY_SEO.description} />

        {/* Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
          .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        `}</style>

        {/* ════════ PAGE CONTENT — warm cream canvas ════════ */}
        <div className="bg-[#f5f2ec] text-stone-900">
          {/* ──── HERO ──── */}
          <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end pb-10 border-b border-stone-300/60">
                <div className="md:col-span-8">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-stone-500 mb-6">
                    The Evolution of Maxim Saigon
                  </p>
                  <h1 className="font-serif font-light text-stone-900 text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] tracking-tight">
                    Our Story
                  </h1>
                </div>
                <div className="md:col-span-4 md:pb-3">
                  <p className="font-serif italic text-lg md:text-xl text-stone-600 leading-relaxed">
                    From SEI Dining Lounge to FUGU Dining Lounge and Maxim Saigon:
                    the evolution of a dining and lounge destination on Dong Khoi Street.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ──── CHAPTERS ──── */}
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {STORY_CHAPTERS.map((chapter, i) => (
              <div key={chapter.id}>
                <Chapter chapter={chapter} index={i} />
                {i < STORY_CHAPTERS.length - 1 && (
                  <div className="h-px bg-stone-300/60" />
                )}
              </div>
            ))}
          </div>

          {/* ──── SEO CONTEXT ──── */}
          <section className="border-t border-stone-300/60">
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
                The Story Behind Maxim Saigon
              </h2>
              <div className="space-y-5 text-sm md:text-base leading-[1.9] text-stone-600 font-light">
                <p>
                  Maxim Saigon’s Our Story page documents the venue’s evolution
                  through three chapters: SEI Dining Lounge, FUGU Dining Lounge,
                  and Maxim Saigon. These names describe the development journey
                  presented on this page, with Maxim Saigon representing the current
                  restaurant and lounge identity at 13–15–17 Dong Khoi Street,
                  Ho Chi Minh City.
                </p>
                <p>
                  This history should not be confused with Maxim’s Club or Maxim’s
                  An Nam. Similar names or an association with the same street
                  address do not, by themselves, establish that separate businesses
                  are the same legal entity or brand. This page focuses specifically
                  on the SEI–FUGU–Maxim Saigon venue journey.
                </p>
              </div>
            </div>
          </section>

          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
