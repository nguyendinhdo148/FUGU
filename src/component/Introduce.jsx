import React, { useEffect, useState } from "react";
import { ChefHat, MapPin, Phone, Clock, ArrowRight, Star, Instagram, Facebook, Mail, Utensils, Wine, ChevronLeft, ChevronRight, Navigation, CreditCard, Users, Music, Sparkles, Check, Calendar, Heart, Award } from "lucide-react";

export const Introduce = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Banner images
  const bannerImages = [
    "/banner/1.jpg",
    "/banner/2.jpg",
    "/banner/3.jpg",
    "/banner/4.jpg",
    "/banner/5.jpg",
    "/banner/6.jpg"
  ];

  const features = [
    { icon: Music, text: "Live music last week" },
    { icon: Users, text: "150 seats" },
    { icon: Sparkles, text: "Modern Japanese architecture" },
    { icon: Wine, text: "Over 100 premium liquor selections" },
    { icon: ChefHat, text: "Japanese chefs with 5+ years experience" },
    { icon: CreditCard, text: "Multiple payment methods" },
  ];

  const stats = [
    { value: "4.9", label: "Rating", icon: Star },
    { value: "5+", label: "Years experience", icon: Award },
    { value: "150", label: "Seats", icon: Users },
    { value: "100+", label: "Premium liquor selections", icon: Wine },
  ];

  useEffect(() => {
    const img = new Image();
    img.src = bannerImages[0];
    img.onload = () => setIsImageLoaded(true);

    bannerImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    let slideInterval;
    if (isPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      }, 5000);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearInterval(slideInterval);
      window.removeEventListener('resize', checkMobile);
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

  // Skeleton loader
  if (!isImageLoaded) {
    return (
      <section className="w-full h-[60vh] flex items-center justify-center">
        <div className="w-full h-full bg-gray-100 dark:bg-gray-900 animate-pulse"></div>
      </section>
    );
  }

  return (
    <section id="introduce" className="w-full relative overflow-hidden">
      {/* Banner Container - Moderate height */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        ))}

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 md:pb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              Fugu Modern
              <span className="block text-primary font-extrabold">Izakaya & Bar</span>
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
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/70'
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

      {/* Content Section - Full Width with padding */}
      <div className="w-full bg-gradient-to-b from-black/5 to-background dark:from-black/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-10">
          {/* Stats Cards - Floating above banner */}
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
            {/* Left Column - Features & Info */}
            <div className="space-y-8">
              {/* Welcome Section */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Welcome to Fugu
                    </h2>
                    <p className="text-muted-foreground">Where Japanese culinary excellence converges</p>
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  FUGU Modern Izakaya & Bar offers an experience of contemporary Japanese cuisine 
                  in a sophisticatedly designed space. With our team of experienced Japanese chefs 
                  and vibrant atmosphere, we are committed to creating memorable moments for every guest.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Japanese Cuisine</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm">Nightly Live Music</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-sm">Premium Sake</span>
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm">VIP Spaces</span>
                </div>
              </div>

              {/* Features Grid */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  <Sparkles className="w-6 h-6 text-primary inline-block mr-2" />
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-3 hover:bg-secondary/50 rounded-lg transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Contact & Actions */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-500" />
                  Contact & Location
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-muted-foreground">
                          13-15-17 Đồng Khởi, Phường Sài Gòn, Quận 1
                          <br />
                          Thành phố Hồ Chí Minh, Việt Nam
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href="tel:+84855873979" 
                        className="group flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-left">
                          <p className="text-foreground font-medium">Hotline</p>
                          <p className="text-muted-foreground text-sm">085 587 3979</p>
                        </div>
                      </a>
                      
                      <a 
                        href="mailto:info@fuguizakaya.vn" 
                        className="group flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="text-left">
                          <p className="text-foreground font-medium">Email</p>
                          <p className="text-muted-foreground text-sm break-all leading-tight">
  seidininglounge@gmail.com
</p>
                        </div>
                      </a>
                    </div>
                    
                    <a
                      href="https://www.google.com/maps?q=13+Đồng+Khởi+Quận+1+TPHCM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full p-3 bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
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
                      {['Monday - Sunday'].map((day, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                          <span className="text-foreground/70">{day}</span>
                          <span className="text-foreground font-bold">5:00 PM – 12:00 AM</span>
                        </div>
                      ))}
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
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Table Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a 
                    href="#menu" 
                    className="flex-1 px-6 py-3 md:py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold text-base md:text-lg text-center hover:-translate-y-0.5"
                  >
                    View Menu
                  </a>
                </div>

                {/* Social Links */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500" />
                    Connect with us
                  </h4>
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: Instagram, href: "https://www.instagram.com/fugu.dininglounge?fbclid=IwY2xjawPpHjFleHRuA2FlbQIxMABicmlkETFETVgzWTB4RHJ4RFljTlEyc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHkIFWNKj41BmDZwoVYAX1HazcQuGvw7XXykePfZjEliXJpi4uqsy_iz_yZb3_aem_CThmH5nGNEsrBg5-3RJ2Zg", color: "bg-pink-500" },
                      { icon: Facebook, href: "https://www.facebook.com/fugumodernizakayabar", color: "bg-blue-600" },
                      { icon: Phone, href: "tel:+84855873979", color: "bg-green-500" },
                      {
  icon: Mail,
  
   href: "mailto:nguyendinhdo2k4@gmail.com",
  color: "bg-purple-500"
}

                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110 shadow-md`}
                          aria-label="Social link"
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