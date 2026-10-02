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
        {/* Timeline Section */}
<div className="mb-10 flex justify-center">
  <div className="inline-flex items-center gap-6 md:gap-10 bg-white border border-gray-200 rounded-full px-6 md:px-10 py-4 shadow-sm">
    {/* Start */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
        <span className="text-sm md:text-base font-bold text-amber-700">5:00</span>
      </div>
      <div className="text-left">
        <div className="text-[10px] uppercase tracking-widest text-gray-500">Start</div>
        <div className="text-sm md:text-base font-semibold text-gray-900">5:00 PM</div>
      </div>
    </div>

    {/* Divider */}
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <span className="text-[10px] text-gray-500 whitespace-nowrap">2.5 hrs</span>
      <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>

    {/* End */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
        <span className="text-sm md:text-base font-bold text-rose-700">7:30</span>
      </div>
      <div className="text-left">
        <div className="text-[10px] uppercase tracking-widest text-gray-500">End</div>
        <div className="text-sm md:text-base font-semibold text-gray-900">7:30 PM</div>
      </div>
    </div>
  </div>
</div>

{/* Label dưới */}
<p className="text-center text-xs text-muted-foreground mb-10 tracking-wide">
  Daily · Every Day
</p>
      </div>
      
      {/* Happy Hour Drink Grid - Sửa style giống EventShow */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {happyHourDrinksUpdated.map((drink) => (
          <div
            key={drink.id}
            className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative"
          >
            {/* Background Gradient Effect - Giống EventShow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${drink.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                {drink.discount}
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                🕔 HAPPY HOUR
              </span>
            </div>

            {/* Price Badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow-xl transform rotate-3">
                <div className="text-lg font-bold">99K</div>
                <div className="text-xs">ONLY</div>
              </div>
            </div>
            
            {/* Drink Image - Giữ nguyên hiệu ứng zoom */}
            <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => handleImageClick(drink)}>
              {/* Gradient Overlay - Giống EventShow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* "Click to zoom" badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                Click to zoom
              </div>

              {/* Duration Badge - Giống EventShow (thêm duration nếu có) */}
              {drink.duration && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded">
                    <span className="text-white text-xs">{drink.duration}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Drink Content - Giống EventShow */}
            <div className="p-6 border-t border-border">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {drink.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {drink.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/70 mb-3 flex items-center gap-2">
                    <span className="text-yellow-500">✨</span>
                    <span>Special Features</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {drink.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs rounded-full border border-border group-hover:border-primary/30 transition-colors"
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

      {/* Zoom Modal - Giữ nguyên */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={zoomedImage.image}
              alt={zoomedImage.name}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full">
              <div className="text-xl font-bold">{zoomedImage.name}</div>
              <div className="text-sm opacity-90">Click anywhere to close</div>
            </div>
            <button 
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300"
              onClick={closeZoom}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};