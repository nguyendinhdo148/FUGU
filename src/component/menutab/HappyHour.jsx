import React, { useState } from "react";

export const HappyHour = ({ drinks }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (drink) => {
    setZoomedImage(drink);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  const happyHourDrinksUpdated = drinks.map(drink => ({
    ...drink,
    happyHourPrice: "99,000 VND",
    originalPrice: drink.originalPrice,
    discount: calculateDiscount(drink.originalPrice)
  }));

  function calculateDiscount(originalPrice) {
    const original = parseInt(originalPrice.replace(/[^0-9]/g, ''));
    const discount = ((original - 99000) / original * 100).toFixed(0);
    return `${discount}% OFF`;
  }

  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        {/* Main Title Section */}
        <div className="mb-10">
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-2">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4"></div>
              <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase">
                Happy Hour
              </span> 
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif tracking-tight">
                All Cocktails Just 99K
              </h3>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-10 px-4">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-red-500/20 blur-3xl -z-10"></div>
            
            <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-4 md:p-6 shadow-xl">
              <div className="relative z-10 flex items-center justify-between max-w-2xl mx-auto">
                {/* Start Time */}
                <div className="flex flex-col items-center space-y-1 md:space-y-2 flex-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <span className="text-lg md:text-2xl font-bold text-white">5:00</span>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-xs md:text-lg">START</div>
                    <div className="text-white/80 text-[10px] md:text-sm">5:00 PM</div>
                  </div>
                </div>

                {/* Arrow Divider */}
                <div className="flex flex-col items-center space-y-1 md:space-y-2 px-2 md:px-8">
                  <div className="text-2xl md:text-4xl text-white animate-pulse">→</div>
                  <div className="text-white/70 text-[10px] md:text-sm whitespace-nowrap">2.5 Hours</div>
                </div>

                {/* End Time */}
                <div className="flex flex-col items-center space-y-1 md:space-y-2 flex-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <span className="text-lg md:text-2xl font-bold text-white">7:30</span>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-xs md:text-lg">END</div>
                    <div className="text-white/80 text-[10px] md:text-sm">7:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Time labels */}
            <div className="flex justify-between mt-4 px-4 max-w-2xl mx-auto">
              <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Daily</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Every Day</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Happy Hour Drink Grid - 2 cột mobile, 3 cột desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 px-2 md:px-4">
        {happyHourDrinksUpdated.map((drink) => (
          <div
            key={drink.id}
            className="group bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative"
          >
            {/* Background Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${drink.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            
            {/* Top Badges */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 flex flex-col gap-1 md:gap-2">
              <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-sm font-bold shadow-lg animate-pulse">
                {drink.discount}
              </span>
              <span className="bg-yellow-500 text-black px-1.5 py-0.5 md:px-3 md:py-1 rounded-full text-[6px] md:text-xs font-bold shadow-lg whitespace-nowrap">
                🕔 HAPPY HOUR
              </span>
            </div>

            {/* Price Badge */}
            <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl shadow-xl transform rotate-3">
                <div className="text-xs md:text-lg font-bold">99K</div>
                <div className="text-[6px] md:text-xs">ONLY</div>
              </div>
            </div>
            
            {/* Drink Image */}
            <div className="relative h-28 md:h-56 overflow-hidden cursor-pointer" onClick={() => handleImageClick(drink)}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* "Click to zoom" badge */}
              <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 md:px-3 md:py-1 rounded-full text-[6px] md:text-xs text-white">
                🔍 Zoom
              </div>

              {/* Duration Badge */}
              {drink.duration && (
                <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20">
                  <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-black/70 backdrop-blur-sm rounded">
                    <span className="text-white text-[6px] md:text-xs">{drink.duration}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Drink Content */}
            <div className="p-2 md:p-6 border-t border-border">
              <div className="mb-2 md:mb-4">
                <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-3 group-hover:text-primary transition-colors line-clamp-1">
                  {drink.name}
                </h3>
                <p className="text-muted-foreground text-[8px] md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-2 md:line-clamp-3">
                  {drink.description}
                </p>
                
                {/* Features */}
                <div className="mb-2 md:mb-6">
                  <h4 className="text-[8px] md:text-sm font-semibold text-foreground/70 mb-1 md:mb-3 flex items-center gap-1 md:gap-2">
                    <span className="text-yellow-500 text-[8px] md:text-sm">✨</span>
                    <span className="hidden md:inline">Special Features</span>
                    <span className="md:hidden">Features</span>
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {drink.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 md:px-3 md:py-1.5 bg-secondary text-secondary-foreground text-[6px] md:text-xs rounded-full border border-border group-hover:border-primary/30 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
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
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 md:p-4"
          onClick={closeZoom}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={zoomedImage.image}
              alt={zoomedImage.name}
              className="w-full h-full object-contain rounded-xl md:rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 md:px-6 md:py-3 rounded-full">
              <div className="text-xs md:text-xl font-bold">{zoomedImage.name}</div>
              <div className="text-[8px] md:text-sm opacity-90 whitespace-nowrap">Click anywhere to close</div>
            </div>
            <button 
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-1.5 md:p-3 rounded-full transition-all duration-300"
              onClick={closeZoom}
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};