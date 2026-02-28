import React, { useState, useEffect } from "react";

export const Buffet = ({ buffetPackages = [] }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (buffet) => {
    setZoomedImage(buffet);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  // Handle ESC key press to close zoom
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') closeZoom();
    };
    
    if (zoomedImage) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [zoomedImage]);

  // Default packages if none provided
  const defaultPackages = [
    {
      id: 1,
      name: "Buffet Package",
      type: "food",
      price: "1,050,000 VND",
      description: "Premium food selection with 50+ dishes",
      image: "/buffet/food.jpg",
      color: "from-blue-600 to-cyan-600",
      promoTag: "FOOD MENU"
    },
    {
      id: 2,
      name: "Freeflow Drinks", 
      type: "drink",
      price: "250,000 VND",
      description: "Unlimited beverages including wine, beer, and cocktails",
      image: "/buffet/drinks.jpg",
      color: "from-purple-600 to-indigo-600",
      promoTag: "DRINK MENU"
    }
  ];

  // Use provided packages or default
  const packagesToShow = buffetPackages.length > 0 ? buffetPackages : defaultPackages;

  return (
    <div className="mb-4 font-sans bg-background">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6"></div>
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-inter">
            Exclusive Events
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-notoserif tracking-tight">
          Buffet Packages
        </h3>
      </div>

      {/* Compact Service Terms */}
      <div className="max-w-2xl mx-auto mb-12 px-4">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-lg text-primary">📋</span>
            </div>
            <h4 className="text-lg font-semibold text-foreground font-inter">
              Service Terms
            </h4>
          </div>
          
          <div className="space-y-3 pl-2">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground font-medium font-inter leading-snug">
                Buffet packages are exclusively for private events & group catering (20+ people).
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground font-medium font-inter leading-snug">
                Not available for individual orders. Advance booking required (3+ days)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Buffet Packages - Luôn 2 cột trên mọi kích thước */}
      <div className="grid grid-cols-2 gap-3 md:gap-10 max-w-6xl mx-auto px-2 md:px-4">
        {packagesToShow.map((buffet) => (
          <div
            key={buffet.id}
            className="relative bg-card border border-border rounded-xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
          >
            {/* Gradient Background based on type */}
            <div className={`absolute inset-0 bg-gradient-to-br ${buffet.color} opacity-90`}></div>
            
            {/* Decorative Elements - Ẩn bớt trên mobile */}
            <div className="absolute top-0 left-0 w-16 h-16 md:w-32 md:h-32 -translate-x-8 -translate-y-8 md:-translate-x-16 md:-translate-y-16 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40 translate-x-5 translate-y-5 md:translate-x-10 md:translate-y-10 bg-white/10 rounded-full blur-xl"></div>
            
            {/* Card Content - Giảm padding trên mobile */}
            <div className="relative p-4 md:p-9 z-10">
              {/* Header Section - Điều chỉnh cho mobile */}
              <div className="flex flex-col mb-4 md:mb-8 space-y-2 md:space-y-4">
                <div className="flex items-start justify-between gap-1">
                  <h4 className="text-sm md:text-2xl lg:text-3xl font-bold tracking-tight font-notoserif text-white line-clamp-1">
                    {buffet.name}
                  </h4>
                  {buffet.promoTag && (
                    <span className="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-xs font-medium whitespace-nowrap shadow-lg border border-white/30 font-inter text-white flex-shrink-0">
                      {buffet.promoTag}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 md:gap-2 font-inter">
                  <span className="text-sm md:text-2xl lg:text-3xl font-semibold text-white">
                    {buffet.price}
                  </span>
                  <span className="text-white/70 text-[8px] md:text-sm font-light">/pax</span>
                </div>
              </div>
              
              {/* Image Section - Giảm chiều cao trên mobile */}
              <div 
                className="h-32 md:h-[420px] rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl group/image cursor-pointer relative"
                onClick={() => handleImageClick(buffet)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                
                {/* Main Image */}
                <img 
                  src={buffet.image} 
                  alt={buffet.name}
                  className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-[1200ms] ease-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500"></div>
                
                {/* Zoom Indicator - Nhỏ hơn trên mobile */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500">
                  <div className="bg-black/60 backdrop-blur-md p-2 md:p-4 rounded-full transform -translate-y-2 md:-translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500 border border-white/30">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal - Điều chỉnh cho mobile */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-2 md:p-4 cursor-zoom-out font-sans backdrop-blur-sm"
          onClick={closeZoom}
        >
          {/* Close Button - Nhỏ hơn trên mobile */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-2 md:p-3.5 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border border-white/20"
            onClick={(e) => {
              e.stopPropagation();
              closeZoom();
            }}
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Info Overlay - Điều chỉnh cho mobile */}
          <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
              <div className="bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/10">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-base md:text-2xl font-bold text-white mb-1 md:mb-2 font-notoserif">{zoomedImage.name}</h3>
                    <div className="flex items-center gap-1 md:gap-2 font-inter">
                      <span className="text-sm md:text-xl text-white/70">
                        {zoomedImage.type === "food" ? "Buffet" : "Drinks"}
                      </span>
                      <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full"></div>
                      <span className="text-sm md:text-xl font-semibold text-amber-300">{zoomedImage.price}</span>
                    </div>
                  </div>
                  <div className="text-right font-inter hidden md:block">
                    <div className="text-xs text-white/50 font-mono tracking-wider">ESC to close</div>
                    <div className="text-xs text-white/40 mt-1">• Click anywhere to close •</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ESC Hint - Ẩn trên mobile */}
          <div className="absolute top-4 left-4 z-20 hidden md:block">
            <div className="text-white/50 text-sm font-mono tracking-wider bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 font-inter">
              Press ESC to close
            </div>
          </div>

          {/* Main Image Container - Giảm chiều cao trên mobile */}
          <div className="relative w-full max-w-7xl h-[60vh] md:h-[85vh]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Background Blur */}
                <div 
                  className="absolute inset-0 blur-xl md:blur-3xl opacity-30"
                  style={{
                    backgroundImage: `url(${zoomedImage.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {/* Main Image */}
                <img
                  src={zoomedImage.image}
                  alt={zoomedImage.name}
                  className="relative z-10 w-full h-full object-contain p-2 md:p-4"
                  style={{
                    animation: 'fadeInZoom 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Hint - Ẩn trên mobile */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
            <div className="text-white/30 text-xs font-light tracking-widest uppercase font-inter">
              — View Mode —
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes fadeInZoom {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};