import React, { useState, useEffect } from "react";

export const SetMenu = ({ setMenus }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (setMenu) => {
    setZoomedImage(setMenu);
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

  return (
    <div className="mb-10 font-sans">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-6"></div>
          <span className="text-amber-600 font-semibold tracking-widest text-sm uppercase font-inter">
            Culinary Excellence
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif tracking-tight font-notoserif">
          Signature Set Menus
        </h3>
      </div>
      
      {/* Set Menu Cards - Luôn 2 cột trên mọi kích thước */}
      <div className="grid grid-cols-2 gap-3 md:gap-10 max-w-6xl mx-auto px-2 md:px-4">
        {setMenus.map((setMenu) => (
          <div
            key={setMenu.id}
            className={`relative bg-gradient-to-br ${setMenu.color} rounded-xl md:rounded-3xl overflow-hidden text-white shadow-lg md:shadow-2xl hover:shadow-3xl transition-all duration-500 group`}
          >
            {/* Decorative Elements - Ẩn bớt trên mobile */}
            <div className="absolute top-0 left-0 w-16 h-16 md:w-32 md:h-32 -translate-x-8 -translate-y-8 md:-translate-x-16 md:-translate-y-16 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40 translate-x-5 translate-y-5 md:translate-x-10 md:translate-y-10 bg-white/5 rounded-full blur-xl"></div>
            
            {/* Card Content - Tăng padding trên mobile */}
            <div className="relative p-4 md:p-9 z-10">
              {/* Header Section - Điều chỉnh layout cho mobile */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6 md:-ml-6">
                <div className="mb-2 md:mb-0">
                  <h4 className="text-sm md:text-xl lg:text-2xl font-semibold mb-1 md:mb-1 tracking-tight font-notoserif line-clamp-1">
                    {setMenu.name}
                  </h4>
                  <div className="flex items-baseline gap-1 md:gap-2 font-inter">
                    <span className="text-sm md:text-xl lg:text-2xl font-semibold">
                      {setMenu.price}
                    </span>
                    <span className="text-white/40 text-[10px] md:text-xs font-light">
                      /pax
                    </span>
                  </div>
                </div>

                {setMenu.promoTag && (
                  <span className="md:-mr-6 bg-white/15 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[9px] md:text-[11px] font-medium whitespace-nowrap shadow-lg border border-white/20 font-inter self-start">
                    {setMenu.promoTag}
                  </span>
                )}
              </div>

              {/* Image Section - Tăng chiều cao trên mobile */}
              <div
                className="h-48 md:h-[420px] rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl group/image cursor-pointer relative"
                onClick={() => handleImageClick(setMenu)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10"></div>

                <img
                  src={setMenu.image}
                  alt={setMenu.name}
                  className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-[1200ms] ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500"></div>

                {/* Zoom Indicator - Nhỏ hơn trên mobile */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500">
                  <div className="bg-black/40 backdrop-blur-md p-2 md:p-4 rounded-full transform -translate-y-2 md:-translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
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

      {/* Zoom Modal - Giữ nguyên */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center p-4 cursor-zoom-out font-sans"
          onClick={closeZoom}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 md:p-3.5 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border border-white/10"
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
              <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-base md:text-2xl font-bold text-white mb-1 md:mb-2 font-notoserif">{zoomedImage.name}</h3>
                    <div className="flex items-center gap-1 md:gap-2 font-inter">
                      <span className="text-sm md:text-xl text-white/60">Premium set menu</span>
                      <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full"></div>
                      <span className="text-sm md:text-xl font-semibold text-amber-300">{zoomedImage.price}</span>
                    </div>
                  </div>
                  <div className="text-right font-inter hidden md:block">
                    <div className="text-xs text-white/40 font-mono tracking-wider">ESC to close</div>
                    <div className="text-xs text-white/30 mt-1">• Click anywhere to close •</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ESC Hint - Ẩn trên mobile */}
          <div className="absolute top-4 left-4 z-20 hidden md:block">
            <div className="text-white/30 text-sm font-mono tracking-wider bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 font-inter">
              Press ESC to close
            </div>
          </div>

          {/* Main Image Container */}
          <div className="relative w-full max-w-7xl h-[70vh] md:h-[85vh]">
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
            <div className="text-white/20 text-xs font-light tracking-widest uppercase font-inter">
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