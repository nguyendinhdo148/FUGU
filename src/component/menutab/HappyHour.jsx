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
    originalPrice: drink.originalPrice, // Giữ nguyên giá gốc để so sánh
    discount: calculateDiscount(drink.originalPrice) // Tính lại discount
  }));

  // Hàm tính discount dựa trên giá gốc
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
  <div className="mb-10">
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-red-500/20 blur-3xl -z-10"></div>
      
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-xl">
  <div className="relative z-10 flex items-center justify-between max-w-2xl mx-auto">
    {/* Start Time */}
    <div className="flex flex-col items-center space-y-2 flex-1">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
        <span className="text-2xl font-bold text-white">5:00</span>
      </div>
      <div className="text-center">
        <div className="text-white font-bold text-lg">START</div>
        <div className="text-white/80 text-sm">5:00 PM</div>
      </div>
    </div>

    {/* Arrow Divider */}
    <div className="flex flex-col items-center space-y-2 px-8">
      <div className="text-4xl text-white animate-pulse">→</div>
      <div className="text-white/70 text-sm">2.5 Hours</div>
    </div>

    {/* End Time */}
    <div className="flex flex-col items-center space-y-2 flex-1">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
        <span className="text-2xl font-bold text-white">7:30</span>
      </div>
      <div className="text-center">
        <div className="text-white font-bold text-lg">END</div>
        <div className="text-white/80 text-sm">7:30 PM</div>
      </div>
    </div>
  </div>
</div>
      
      {/* Time labels */}
      <div className="flex justify-between mt-4 px-4 max-w-2xl mx-auto">
        <div className="text-gray-600 dark:text-gray-400 text-sm">Daily</div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">Every Day</div>
      </div>
    </div>
  </div>

  
</div>
      
      
      
      {/* Happy Hour Drink Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {happyHourDrinksUpdated.map((drink) => (
          <div
            key={drink.id}
            className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-orange-500 transition-all duration-500 hover:shadow-2xl relative"
          >
            {/* Background Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${drink.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-20">
              <div className="flex flex-col gap-2">
                <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  {drink.discount}
                </span>
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🕔 HAPPY HOUR
                </span>
              </div>
            </div>

            {/* Uniform Price Badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow-xl transform rotate-3">
                <div className="text-lg font-bold">99K</div>
                <div className="text-xs">ONLY</div>
              </div>
            </div>
            
            {/* Drink Image with Zoom Effect */}
            <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => handleImageClick(drink)}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                Click to zoom
              </div>
            </div>

            {/* Drink Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  {drink.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {drink.description}
                </p>
                
                {/* Price Section
                <div className="mb-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {drink.happyHourPrice}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Happy Hour Special
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg text-gray-500 dark:text-gray-400 line-through">
                        {drink.originalPrice}
                      </div>
                      <div className="text-xs text-red-500 dark:text-red-400 font-medium">
                        You save {drink.discount}
                      </div>
                    </div>
                  </div>
                </div> */}
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                    <span className="text-yellow-500">✨</span>
                    <span>Special Features</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {drink.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-yellow-200 dark:group-hover:border-orange-700 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
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