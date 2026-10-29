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
  url: "https://maximsaignon.vn",
  priceRange: "$$$",
  cuisine: ["Asian", "European", "Fusion", "Contemporary"],
  latitude: "10.773256",
  longitude: "106.706019",
  googleMapsUrl: "https://maps.app.goo.gl/3Var6ERf4p23butF8",
  socials: {
    instagram: "https://www.instagram.com/maiximsaigon/",
    facebook: "https://www.facebook.com/profile.php?id=61594056338036",
    whatsapp: "https://wa.me/84855873979",
  },
};

export const Introduce = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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

    return () => {
      if (slideInterval) clearInterval(slideInterval);
      clearTimeout(fallback);
    };
  }, [bannerImages, isPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  // ==================== SKELETON ====================
  if (!isImageLoaded) {
    return (
      <section className="w-full h-[50vh] flex items-center justify-center" aria-label="Loading Maxim Saigon">
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
      <meta itemProp="name" content={SEO_CONFIG.brandName} />
      <meta itemProp="telephone" content={SEO_CONFIG.phone} />
      <meta itemProp="servesCuisine" content="Asian, European, Fusion" />
      <meta itemProp="priceRange" content={SEO_CONFIG.priceRange} />

      {/* ==================== BANNER ==================== */}
      <div className="relative w-full h-[42vh] md:h-[52vh]">
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

        {/* Overlay Content — font serif cao cấp */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-8 md:pb-10">
          <div className="text-center px-4">
            <h1
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-2 tracking-wide drop-shadow-lg"
              itemProp="name"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              {SEO_CONFIG.brandName}
              <span
                className="block text-primary font-medium tracking-[0.3em] md:tracking-[0.45em] uppercase text-[10px] md:text-xs lg:text-sm mt-3"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
              >
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
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-5" : "bg-white/50 hover:bg-white/70 w-1.5"
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
            {currentSlide + 1} / {bannerImages.length}
          </div>
        </div>
      </div>

      {/* ==================== CONTENT SECTION ==================== */}
      <div className="w-full bg-gradient-to-b from-black/5 to-background dark:from-black/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 -mt-6 md:-mt-8 relative z-10">
          {/* Stats Cards — nhỏ gọn */}
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

          {/* Main Content — 2 cột gọn */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 pb-8">
            {/* Left: Welcome */}
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
                <strong>{SEO_CONFIG.brandName}</strong> - Restaurant & Lounge offers a contemporary
                fusion dining experience in a sophisticatedly designed space. With internationally
                experienced chefs and vibrant atmosphere, we create memorable moments in the heart of Saigon.
              </p>
            </article>

            {/* Right: Contact + Booking gộp gọn */}
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

              {/* Địa chỉ + giờ gọn */}
              <div className="space-y-2 text-sm mb-4">
                <p className="text-muted-foreground leading-snug" itemProp="streetAddress">
                  {SEO_CONFIG.address.street}, {SEO_CONFIG.address.locality},{" "}
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

              {/* Nút Hotline */}
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

              {/* Book a Table full width */}
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

              {/* Social nhỏ gọn dưới cùng */}
              <div className="flex justify-center gap-2 mt-3 pt-3 border-t border-border">
                {[
                  { icon: Instagram, href: SEO_CONFIG.socials.instagram, color: "bg-pink-500", label: `${SEO_CONFIG.brandName} Instagram` },
                  { icon: Facebook, href: SEO_CONFIG.socials.facebook, color: "bg-blue-600", label: `${SEO_CONFIG.brandName} Facebook` },
                  { icon: MessageCircle, href: SEO_CONFIG.socials.whatsapp, color: "bg-green-500", label: `${SEO_CONFIG.brandName} WhatsApp` },
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