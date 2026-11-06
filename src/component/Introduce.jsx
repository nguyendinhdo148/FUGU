
import React, { useEffect, useMemo, useState } from "react";
import {
  MapPin, Phone, Clock, ArrowRight, Star, Instagram, Facebook,
  Wine, ChevronLeft, ChevronRight, Users, Calendar, Award, MessageCircle
} from "lucide-react";

// ==================== SEO CONFIG ====================
const SEO_CONFIG = {
  brandName: "Maxim Saigon",
  tagline: "Restaurant & Lounge",
  description:
    "Maxim Saigon - Premium Restaurant & Lounge in District 1, Saigon. Refined fusion cuisine, nightly live music, 100+ premium wines & cocktails. Book now: 085 587 3979",
  address: {
    street: "13-15-17 Dong Khoi, Saigon Ward",
    locality: "Ho Chi Minh City",
    region: "Ho Chi Minh",
    postalCode: "700000",
    country: "VN",
  },
  phone: "+84855873979",
  phoneDisplay: "085 587 3979",
  email: "info@maximsaignon.vn",
  url: "https://www.maximsaigon.vn/",
  priceRange: "$$$",
  cuisine: ["Asian", "European", "Fusion", "Contemporary"],
  latitude: "10.773256",
  longitude: "106.706019",
  googleMapsUrl: "https://maps.app.goo.gl/3Var6ERf4p23butF8",
  socials: {
    instagram: "https://www.instagram.com/maximsaigon/",
    facebook: "https://www.facebook.com/profile.php?id=61596058165185",
    whatsapp: "https://wa.me/84855873979",
  },
};

export const Introduce = () => {
  const [loadedImages, setLoadedImages] = useState([false, false, false, false, false, false]);
  const [failedImages, setFailedImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // ==================== BANNER IMAGES ====================
  const bannerImages = useMemo(
    () => [
      "/banner/1.jpg",
      "/banner/2.jpg",
      "/banner/3.jpg",
      "/banner/4.jpg",
      "/banner/5.jpg",
      "/banner/6.jpg",
    ],
    []
  );

  const stats = [
    { value: "4.9", label: "Rating", icon: Star },
    { value: "5+", label: "Years", icon: Award },
    { value: "150", label: "Seats", icon: Users },
    { value: "100+", label: "Selections", icon: Wine },
  ];

  // ==================== PRELOAD + SLIDESHOW ====================
  // Render the hero immediately. The first image is requested with high priority;
  // remaining images are preloaded in the background after it becomes available.
  useEffect(() => {
    let cancelled = false;
    const imageCache = [];

    const loadImage = (src, index, priority = false) =>
      new Promise((resolve) => {
        const image = new Image();
        imageCache[index] = image;

        if (priority) {
          image.fetchPriority = "high";
        }

        image.onload = () => {
          if (!cancelled) {
            setLoadedImages((previous) => {
              const next = [...previous];
              next[index] = true;
              return next;
            });
          }
          resolve(true);
        };

        image.onerror = () => {
          if (!cancelled) {
            setFailedImages((previous) =>
              previous.includes(index) ? previous : [...previous, index]
            );
          }
          resolve(false);
        };

        image.src = src;

        // Covers images already present in the browser cache.
        if (image.complete && image.naturalWidth > 0) {
          if (!cancelled) {
            setLoadedImages((previous) => {
              const next = [...previous];
              next[index] = true;
              return next;
            });
          }
          resolve(true);
        }
      });

    const preloadImages = async () => {
      const firstLoaded = await loadImage(bannerImages[0], 0, true);

      if (cancelled) return;

      // Load the remaining slides one by one in the background.
      // This avoids sending all banner requests at the same time.
      let fallbackIndex = -1;

      for (let index = 1; index < bannerImages.length; index += 1) {
        if (cancelled) return;

        const loaded = await loadImage(bannerImages[index], index);

        if (loaded && fallbackIndex === -1) {
          fallbackIndex = index;
        }
      }

      // If the first banner is unavailable, use the first successful fallback.
      if (!firstLoaded && fallbackIndex !== -1 && !cancelled) {
        setCurrentSlide(fallbackIndex);
      }
    };

    preloadImages();

    return () => {
      cancelled = true;
      imageCache.forEach((image) => {
        if (image) {
          image.onload = null;
          image.onerror = null;
        }
      });
    };
  }, [bannerImages]);

  // Start a fresh interval only after the current slide is ready.
  useEffect(() => {
    if (!isPlaying || !loadedImages[currentSlide]) return;

    const timer = setTimeout(() => {
      let next = (currentSlide + 1) % bannerImages.length;
      let attempts = 0;

      while (
        attempts < bannerImages.length &&
        (!loadedImages[next] || failedImages.includes(next))
      ) {
        next = (next + 1) % bannerImages.length;
        attempts += 1;
      }

      if (attempts < bannerImages.length) {
        setCurrentSlide(next);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, isPlaying, loadedImages, failedImages, bannerImages.length]);

  const findAvailableSlide = (direction) => {
    for (let step = 1; step <= bannerImages.length; step += 1) {
      const index =
        (currentSlide + direction * step + bannerImages.length * 2) %
        bannerImages.length;

      if (loadedImages[index] && !failedImages.includes(index)) {
        return index;
      }
    }
    return currentSlide;
  };

  const nextSlide = () => setCurrentSlide(findAvailableSlide(1));
  const prevSlide = () => setCurrentSlide(findAvailableSlide(-1));

  const goToSlide = (index) => {
    if (!loadedImages[index] || failedImages.includes(index)) return;
    setCurrentSlide(index);
    setIsPlaying(false);
    window.clearTimeout(window.__maximSlideResume);
    // eslint-disable-next-line react-hooks/immutability
    window.__maximSlideResume = window.setTimeout(() => setIsPlaying(true), 5000);
  };

  return (
    <section
      id="introduce"
      className="w-full relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      <meta itemProp="name" content={SEO_CONFIG.brandName} />
      <meta itemProp="telephone" content={SEO_CONFIG.phone} />
      <meta itemProp="servesCuisine" content="Asian, European, Fusion" />
      <meta itemProp="priceRange" content={SEO_CONFIG.priceRange} />

      {/* ==================== BANNER ==================== */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-30%) rotate(18deg); opacity: 0; }
          25% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(330%) rotate(18deg); opacity: 0; }
        }
      `}</style>
      <div className="relative w-full h-[42vh] md:h-[52vh] bg-neutral-950">
        {/* Cinematic loading animation: decorative placeholder, not an extra image request */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-[5] overflow-hidden bg-[#111318] transition-opacity duration-1000 ${
            loadedImages[0] ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(190,160,115,0.22)_0%,rgba(40,39,43,0.35)_38%,rgba(8,10,14,0.98)_100%)]" />

          <div className="absolute -left-20 top-[-25%] h-[65%] w-[55%] rounded-full bg-amber-200/10 blur-[90px] animate-pulse" />
          <div className="absolute -right-20 bottom-[-30%] h-[70%] w-[55%] rounded-full bg-violet-300/10 blur-[100px] animate-pulse [animation-delay:700ms]" />

          {/* Soft moving light streak */}
          <div className="absolute inset-y-0 -left-1/2 w-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent animate-[shimmer_2.8s_ease-in-out_infinite]" />

          {/* Subtle centered loading emblem */}
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/5 shadow-[0_0_35px_rgba(226,196,145,0.16)]">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-0 rounded-full border-t border-r border-amber-100/80 animate-spin" />
              <div className="absolute inset-2 rounded-full border border-white/10 animate-pulse" />
              <img
                src="/logotab2.jpg"
                alt="Maxim Saigon"
                className="relative z-10 h-9 w-9 rounded-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent" />
        </div>

        {bannerImages.map((image, index) => loadedImages[index] && !failedImages.includes(index) && (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={image}
              alt={`${SEO_CONFIG.brandName} - Premium Asian-European restaurant in District 1, Saigon - Image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchPriority={index === 0 ? "high" : "low"}
              width="1920"
              height="1080"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        ))}

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 md:pb-14">
          <div className="text-center px-4">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-serif tracking-tight drop-shadow-lg"
              itemProp="name"
            >
              {SEO_CONFIG.brandName}

              <span className="block text-white font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-lg md:text-2xl lg:text-3xl mt-3 font-serif drop-shadow-md">
                {SEO_CONFIG.tagline}
              </span>
            </h1>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <button
              onClick={prevSlide}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div className="flex gap-1.5 mx-2">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={!loadedImages[index] || failedImages.includes(index)}
                  className={`h-1.5 rounded-full transition-all disabled:opacity-25 disabled:cursor-not-allowed ${
                    index === currentSlide
                      ? "bg-white w-5"
                      : "bg-white/50 hover:bg-white/70 w-1.5"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="absolute top-3 right-3 z-30">
          <div className="bg-black/40 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-xs">
            {loadedImages[currentSlide] ? currentSlide + 1 : 1} / {bannerImages.length}
          </div>
        </div>
      </div>

      {/* ==================== CONTENT SECTION ==================== */}

      {/* Old gradient background - commented out
          Previous class:
          bg-gradient-to-b from-black/5 to-background dark:from-black/20
      */}

      <div className="w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 -mt-6 md:-mt-8 relative z-10">

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-5 md:mb-7">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-2 md:p-3 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary mb-1" />

                    <div className="text-base md:text-xl font-bold text-foreground leading-none">
                      {stat.value}
                    </div>

                    <div className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-none">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 pb-8">

            <article className="bg-card rounded-xl p-5 md:p-6 border border-border shadow-sm flex flex-col justify-center">
              <div className="mb-3">
                <h2 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  Welcome to {SEO_CONFIG.brandName}
                </h2>

                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  Modern Asian-European fusion.
                </p>
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed text-justify">
                <strong>{SEO_CONFIG.brandName}</strong> - Restaurant & Lounge
                offers a contemporary fusion dining experience in a
                sophisticatedly designed space. With internationally
                experienced chefs and vibrant atmosphere, we create memorable
                moments in the heart of Saigon.
              </p>
            </article>

            <div
              className="bg-card rounded-xl p-4 md:p-6 border border-border shadow-sm flex flex-col"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <h3 className="text-base md:text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                Contact & Booking
              </h3>

              <div className="space-y-2 text-sm mb-4">
                <p
                  className="text-muted-foreground leading-snug"
                  itemProp="streetAddress"
                >
                  {SEO_CONFIG.address.street},{" "}
                  {SEO_CONFIG.address.locality},{" "}
                  <span itemProp="addressCountry">Vietnam</span>
                </p>

                <div className="flex items-start gap-1.5 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />

                  <div className="text-xs md:text-sm leading-relaxed">
                    <span className="block">Mon – Fri: 11:00 – 24:00</span>
                    <span className="block">Sat – Sun: 15:30 – 24:00</span>
                  </div>

                  <span className="flex items-center gap-1 text-green-500 text-xs ml-2 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Open
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <a
                  href={`tel:${SEO_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 px-3 py-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-all text-xs font-medium w-full"
                  aria-label={`Call ${SEO_CONFIG.brandName} hotline ${SEO_CONFIG.phoneDisplay}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Hotline: {SEO_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="mt-auto">
                <a
                  href="https://zalo.me/84855873979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 font-bold text-sm shadow-md hover:shadow-lg"
                  aria-label={`Book a table at ${SEO_CONFIG.brandName} via Zalo`}
                >
                  <Calendar className="w-4 h-4" />
                  Book a Table Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="flex justify-center gap-2 mt-3 pt-3 border-t border-border">
                {[
                  {
                    icon: Instagram,
                    href: SEO_CONFIG.socials.instagram,
                    color: "bg-pink-500",
                    label: `${SEO_CONFIG.brandName} Instagram`,
                  },
                  {
                    icon: Facebook,
                    href: SEO_CONFIG.socials.facebook,
                    color: "bg-blue-600",
                    label: `${SEO_CONFIG.brandName} Facebook`,
                  },
                  {
                    icon: MessageCircle,
                    href: SEO_CONFIG.socials.whatsapp,
                    color: "bg-green-500",
                    label: `${SEO_CONFIG.brandName} WhatsApp`,
                  },
                ].map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 ${social.color} text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-105 shadow-sm`}
                      aria-label={social.label}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
