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
      document.body.style.overflow = 'unset';
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
    <div className="mb-28">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto mb-6"></div>
          <span className="text-emerald-600 font-semibold tracking-widest text-sm uppercase">
            Exclusive Events
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif tracking-tight">
          Buffet Packages
        </h3>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Premium buffet services available exclusively for private events and group bookings
        </p>
      </div>

      {/* Important Notice - Updated Professional Design */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative group">
          {/* Background gradient glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 dark:from-amber-950/40 dark:via-amber-900/20 dark:to-amber-950/40 rounded-2xl overflow-hidden border border-amber-200/80 dark:border-amber-800/40 shadow-xl">
            {/* Decorative top bar */}
            <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
            
            <div className="p-8">
              <div className="flex items-start gap-6">
                {/* Icon section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl text-white">📋</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-xs text-white font-bold">!</span>
                    </div>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-2xl font-bold text-amber-900 dark:text-amber-300 font-serif">
                      Service Terms & Conditions
                    </h4>
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full border border-amber-500/20">
                      IMPORTANT
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-amber-800 dark:text-amber-400 font-medium">
                          <span className="font-bold">Event-Based Service:</span> Buffet packages are exclusively available for <span className="underline">private events, corporate functions, and group catering</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-amber-800 dark:text-amber-400 font-medium">
                          <span className="font-bold">No Individual Orders:</span> Menu items are not available for individual purchase during regular service hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-500/5 to-transparent dark:from-amber-500/10 dark:to-transparent p-4 rounded-lg border-l-4 border-amber-500">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-amber-700 dark:text-amber-400/80 font-semibold mb-1">Minimum Requirement</div>
                          <div className="text-lg font-bold text-amber-900 dark:text-amber-300">20+ persons</div>
                        </div>
                        <div>
                          <div className="text-sm text-amber-700 dark:text-amber-400/80 font-semibold mb-1">Advance Notice</div>
                          <div className="text-lg font-bold text-amber-900 dark:text-amber-300">3+ days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom decorative element */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mx-8"></div>
            <div className="py-4 px-8 text-center">
              <p className="text-sm text-amber-600 dark:text-amber-400/70 font-medium">
                For inquiries and detailed proposals, please contact our events team
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Buffet Packages */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {packagesToShow.map((buffet) => (
          <div
            key={buffet.id}
            className={`relative bg-gradient-to-br ${buffet.color} rounded-3xl overflow-hidden text-white shadow-2xl hover:shadow-3xl transition-all duration-500 group`}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 translate-x-10 translate-y-10 bg-white/5 rounded-full blur-xl"></div>
            
            {/* Card Content */}
            <div className="relative p-9 z-10">
              {/* Header Section - Fixed alignment */}
              <div className="flex flex-col mb-8 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight font-serif">
                    {buffet.name}
                  </h4>
                  {buffet.promoTag && (
                    <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap shadow-lg border border-white/20">
                      {buffet.promoTag}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-semibold">
                    {buffet.price}
                  </span>
                  <span className="text-white/60 text-sm font-light">per person</span>
                </div>
              </div>
              
              {/* Image Section - Extended Height */}
              <div 
                className="h-[420px] rounded-2xl overflow-hidden shadow-2xl group/image cursor-pointer relative"
                onClick={() => handleImageClick(buffet)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10"></div>
                
                {/* Main Image */}
                <img 
                  src={buffet.image} 
                  alt={buffet.name}
                  className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-[1200ms] ease-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500"></div>
                
                {/* Zoom Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500">
                  <div className="bg-black/40 backdrop-blur-md p-4 rounded-full transform -translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal - Minimal & Elegant */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeZoom}
        >
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3.5 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border border-white/10"
            onClick={(e) => {
              e.stopPropagation();
              closeZoom();
            }}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Minimal Info Overlay - Auto-hide */}
          <div className="absolute bottom-8 left-0 right-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="max-w-4xl mx-auto px-8">
              <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">{zoomedImage.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl text-white/60">
                        {zoomedImage.type === "food" ? "Premium buffet package" : "Unlimited drinks package"}
                      </span>
                      <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                      <span className="text-xl font-semibold text-amber-300">{zoomedImage.price}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/40 font-mono tracking-wider">ESC to close</div>
                    <div className="text-xs text-white/30 mt-1">• Click anywhere to close •</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ESC Hint */}
          <div className="absolute top-8 left-8 z-20">
            <div className="text-white/30 text-sm font-mono tracking-wider bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              Press ESC to close
            </div>
          </div>

          {/* Main Image Container */}
          <div className="relative w-full max-w-7xl h-[85vh]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Background Blur */}
                <div 
                  className="absolute inset-0 blur-3xl opacity-30"
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
                  className="relative z-10 w-full h-full object-contain p-4"
                  style={{
                    animation: 'fadeInZoom 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Subtle Navigation Hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="text-white/20 text-xs font-light tracking-widest uppercase">
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