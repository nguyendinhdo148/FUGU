import React, { useEffect, useState } from "react";
import { ChefHat, MapPin, Phone, Clock, ArrowRight, Star, Instagram, Facebook, Mail, Utensils, Wine, ChevronLeft, ChevronRight, Navigation, CreditCard, Users, Music, Sparkles, Check, Calendar, Heart, Award } from "lucide-react";

// ==================== SEO CONFIG ====================
const SEO_CONFIG = {
  brandName: "MaximSaiGon",
  tagline: "Asian-European Cuisine & Bar",
  description:
    "MaximSaiGon - Premium Asian-European Cuisine & Bar in District 1, Saigon. Refined fusion cuisine, nightly live music, 100+ premium wines & cocktails. Book now: 085 587 3979",
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
  url: "https://maximsaignon.vn",
  priceRange: "$$$",
  cuisine: ["Asian", "European", "Fusion", "Contemporary"],
  latitude: "10.7769",
  longitude: "106.7009",
  socials: {
    instagram: "https://www.instagram.com/maximsaignon",
    facebook: "https://www.facebook.com/maximsaignon",
  },
};

export const Introduce = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // ==================== BANNER IMAGES ====================
  // ✅ Giữ nguyên path /banner/ như file gốc
  const bannerImages = [
    "/banner/1.jpg",
    "/banner/2.jpg",
    "/banner/3.jpg",
    "/banner/4.jpg",
    "/banner/5.jpg",
    "/banner/6.jpg",
  ];

  const features = [
    { icon: Music, text: "Nightly live music" },
    { icon: Users, text: "150 seats" },
    { icon: Sparkles, text: "Modern Asian-European architecture" },
    { icon: Wine, text: "Over 100 premium wines & cocktails" },
    { icon: ChefHat, text: "International chefs with 5+ years experience" },
    { icon: CreditCard, text: "Multiple payment methods" },
  ];

  const stats = [
    { value: "4.9", label: "Rating", icon: Star },
    { value: "5+", label: "Years experience", icon: Award },
    { value: "150", label: "Seats", icon: Users },
    { value: "100+", label: "Premium selections", icon: Wine },
  ];

  // ==================== SEO: JSON-LD + Meta ====================
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: SEO_CONFIG.brandName,
      alternateName: "Maxim Sai Gon",
      description: SEO_CONFIG.description,
      url: SEO_CONFIG.url,
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
      priceRange: SEO_CONFIG.priceRange,
      servesCuisine: SEO_CONFIG.cuisine,
      image: `${SEO_CONFIG.url}/banner/1.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEO_CONFIG.address.street,
        addressLocality: SEO_CONFIG.address.locality,
        addressRegion: SEO_CONFIG.address.region,
        postalCode: SEO_CONFIG.address.postalCode,
        addressCountry: SEO_CONFIG.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SEO_CONFIG.latitude,
        longitude: SEO_CONFIG.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "17:00",
          closes: "24:00",
        },
      ],
      // ⚠️ KHÔNG khai aggregateRating khi chưa có review thật
      sameAs: [SEO_CONFIG.socials.instagram, SEO_CONFIG.socials.facebook],
      acceptsReservations: true,
      hasMenu: `${SEO_CONFIG.url}#menu`,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Live Music", value: true },
        { "@type": "LocationFeatureSpecification", name: "Full Bar", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wine Cellar", value: true },
        { "@type": "LocationFeatureSpecification", name: "VIP Rooms", value: true },
        { "@type": "LocationFeatureSpecification", name: "Credit Cards Accepted", value: true },
      ],
    };

    const scriptId = "maximsaignon-structured-data";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    document.title = `${SEO_CONFIG.brandName} | ${SEO_CONFIG.tagline} - Saigon Asian-European Restaurant`;

    const setMeta = (name, content, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", SEO_CONFIG.description);
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("geo.region", "VN-SG");
    setMeta("geo.placename", "Ho Chi Minh City");
    setMeta("geo.position", `${SEO_CONFIG.latitude};${SEO_CONFIG.longitude}`);
    setMeta("ICBM", `${SEO_CONFIG.latitude}, ${SEO_CONFIG.longitude}`);

    setMeta("og:title", `${SEO_CONFIG.brandName} | ${SEO_CONFIG.tagline}`, true);
    setMeta("og:description", SEO_CONFIG.description, true);
    setMeta("og:type", "restaurant", true);
    setMeta("og:url", SEO_CONFIG.url, true);
    setMeta("og:image", `${SEO_CONFIG.url}/banner/1.jpg`, true);
    setMeta("og:locale", "en_US", true);
    setMeta("og:site_name", SEO_CONFIG.brandName, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", `${SEO_CONFIG.brandName} | ${SEO_CONFIG.tagline}`);
    setMeta("twitter:description", SEO_CONFIG.description);
    setMeta("twitter:image", `${SEO_CONFIG.url}/banner/1.jpg`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = SEO_CONFIG.url;
  }, []);

  // ==================== PRELOAD + SLIDESHOW ====================
  useEffect(() => {
    const img = new Image();
    img.src = bannerImages[0];
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => {
      console.warn("❌ Banner failed to load:", bannerImages[0]);
      setIsImageLoaded(true);
    };

    const fallback = setTimeout(() => setIsImageLoaded(true), 1500);

    bannerImages.forEach((src) => {
      const i = new Image();
      i.src = src;
    });

    let slideInterval;
    if (isPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      }, 5000);
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      if (slideInterval) clearInterval(slideInterval);
      clearTimeout(fallback);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  // ==================== SKELETON ====================
  if (!isImageLoaded) {
    return (
      <section className="w-full h-[60vh] flex items-center justify-center" aria-label="Loading MaximSaiGon">
        <div className="w-full h-full bg-gray-100 dark:bg-gray-900 animate-pulse"></div>
      </section>
    );
  }

  return (
    <section
      id="introduce"
      className="w-full relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      {/* SEO: Hidden semantic info */}
      <meta itemProp="name" content={SEO_CONFIG.brandName} />
      <meta itemProp="telephone" content={SEO_CONFIG.phone} />
      <meta itemProp="servesCuisine" content="Asian, European, Fusion" />
      <meta itemProp="priceRange" content={SEO_CONFIG.priceRange} />

      {/* ==================== BANNER ==================== */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={image}
              alt={`${SEO_CONFIG.brandName} - Premium Asian-European restaurant in District 1, Saigon - Image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              width="1920"
              height="1080"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        ))}

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 md:pb-16">
          <div className="text-center px-4">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
              itemProp="name"
            >
              {SEO_CONFIG.brandName}
              <span className="block text-primary font-extrabold">{SEO_CONFIG.tagline}</span>
            </h1>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2 mx-4">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 z-30">
          <div className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {bannerImages.length}
          </div>
        </div>
      </div>

      {/* ==================== CONTENT SECTION ==================== */}
      <div className="w-full bg-gradient-to-b from-black/5 to-background dark:from-black/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-10">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content - 2 column layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <article className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Welcome to {SEO_CONFIG.brandName}
                    </h2>
                    <p className="text-muted-foreground">Where Asian-European culinary excellence converges</p>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  <strong>{SEO_CONFIG.brandName}</strong> - Asian-European Cuisine & Bar offers a contemporary
                  fusion dining experience in a sophisticatedly designed space. With our team of internationally
                  experienced chefs and vibrant atmosphere, we are committed to creating memorable moments
                  for every guest in the heart of Saigon.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Asian-European Cuisine</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm">Nightly Live Music</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-sm">Premium Wine</span>
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm">VIP Spaces</span>
                </div>
              </article>

              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  <Sparkles className="w-6 h-6 text-primary inline-block mr-2" />
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <div
        key={index}
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-foreground font-medium text-sm md:text-base leading-snug">
          {feature.text}
        </span>
      </div>
    );
  })}
</div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div
                className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-500" />
                  Contact & Location
                </h3>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-muted-foreground" itemProp="streetAddress">
                          {SEO_CONFIG.address.street}
                          <br />
                          <span itemProp="addressLocality">{SEO_CONFIG.address.locality}</span>,{" "}
                          <span itemProp="addressCountry">Vietnam</span>
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`tel:${SEO_CONFIG.phone}`}
                        className="group flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all"
                        aria-label={`Call ${SEO_CONFIG.brandName} hotline ${SEO_CONFIG.phoneDisplay}`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-left">
                          <p className="text-foreground font-medium">Hotline</p>
                          <p className="text-muted-foreground text-sm">{SEO_CONFIG.phoneDisplay}</p>
                        </div>
                      </a>
                    </div>

                    <a
                      href="https://www.google.com/maps?q=13+Đồng+Khởi+Quận+1+TPHCM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full p-3 bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                      aria-label="View MaximSaiGon location on Google Maps"
                    >
                      <Navigation className="w-5 h-5" />
                      View on Google Maps
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-green-500" />
                      Opening Hours
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-foreground/70">Monday - Sunday</span>
                        <span className="text-foreground font-bold">5:00 PM – 12:00 AM</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-green-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Open now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Social */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://zalo.me/84855873979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 px-6 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    aria-label="Book a table at MaximSaiGon via Zalo"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Table Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#menu"
                    className="flex-1 px-6 py-3 md:py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold text-base md:text-lg text-center hover:-translate-y-0.5"
                    aria-label="View MaximSaiGon menu"
                  >
                    View Menu
                  </a>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500" />
                    Connect with us
                  </h4>
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: Instagram, href: SEO_CONFIG.socials.instagram, color: "bg-pink-500", label: "MaximSaiGon Instagram" },
                      { icon: Facebook, href: SEO_CONFIG.socials.facebook, color: "bg-blue-600", label: "MaximSaiGon Facebook" },
                      { icon: Phone, href: `tel:${SEO_CONFIG.phone}`, color: "bg-green-500", label: "Call MaximSaiGon" },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110 shadow-md`}
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};