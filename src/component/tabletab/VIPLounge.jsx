// src/components/menutab/VIPLounge.jsx
import React, { useState, useEffect } from "react";

export const VIPLounge = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [autoSlide, setAutoSlide] = useState(true);
  
  const vipLoungeImages = [
    "/table_viplounge/1.jpg",
    "/table_viplounge/2.jpg", 
    "/table_viplounge/3.jpg",
    "/table_viplounge/4.jpg",
    "/table_viplounge/5.jpg"
  ];
  
  const vipLoungeDetails = {
    name: "FUGU VIP Private Lounge",
    capacity: "20-30 persons",
    description: "Exclusive private space for VIP events and special occasions. Sophisticated ambiance with premium amenities.",
    features: [
      "Exclusive Private Space",
      "Premium Sound System",
      "4K Screen (Smart TV 100inch)",
      "Dedicated VIP Service",
      "Sophisticated Ambiance",
      "Climate Control"
    ],
    amenities: [
      "VIP Welcome Service",
      "Premium Sound System",
      "Smart TV & Streaming",
      "High-Speed WiFi",
      "Private Setting",
      "Exclusive Service"
    ],
    note: "Ideal for VIP gatherings, corporate meetings, and special celebrations. Contact for availability."
  };

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % vipLoungeImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoSlide, vipLoungeImages.length]);

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % vipLoungeImages.length);
    setAutoSlide(false);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + vipLoungeImages.length) % vipLoungeImages.length);
    setAutoSlide(false);
  };

  const handleImageClick = (index) => {
    setZoomedImage({ 
      id: `VIP_LOUNGE_${index + 1}`, 
      name: vipLoungeDetails.name,
      image: vipLoungeImages[index] 
    });
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
    <div className="space-y-6 md:space-y-8">
      {/* VIP Lounge Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <span className="text-2xl md:text-3xl">👑</span>
          <h3 className="text-xl md:text-3xl font-bold text-foreground font-notoserif">
            FUGU VIP Private Lounge
          </h3>
          <span className="px-2 py-1 md:px-3 md:py-1 bg-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px] md:text-sm font-semibold rounded-full font-inter border border-purple-500/30">
            2nd Floor
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {/* Image Gallery with Slideshow */}
        <div className="space-y-3 md:space-y-4">
          {/* Main Image with Slide Controls */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-border group">
            {/* Slide Image */}
            <div 
              className="w-full h-[250px] md:h-[320px] relative cursor-zoom-in"
              onClick={() => handleImageClick(selectedImage)}
            >
              <img 
                src={vipLoungeImages[selectedImage]} 
                alt={`VIP Lounge ${selectedImage + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              
              {/* Zoom Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-black/60 backdrop-blur-md p-2 md:p-3 rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-white/20">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Slide Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm md:text-lg font-bold text-white font-notoserif">{vipLoungeDetails.name}</h4>
                  <p className="text-white/80 text-[10px] md:text-sm font-inter">View {selectedImage + 1} of {vipLoungeImages.length}</p>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="flex items-center gap-0.5 md:gap-1">
                    {vipLoungeImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedImage(index);
                          setAutoSlide(false);
                        }}
                        className={`h-1 md:h-2 rounded-full transition-all duration-300 ${selectedImage === index ? 'bg-white w-2 md:w-4' : 'bg-white/40 w-1 md:w-2 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Auto Slide Indicator */}
            <div className="absolute top-2 right-2 md:top-3 md:right-3">
              <button
                onClick={() => setAutoSlide(!autoSlide)}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center text-xs hover:bg-black/60 transition-colors"
                title={autoSlide ? "Pause slideshow" : "Play slideshow"}
              >
                {autoSlide ? '⏸️' : '▶️'}
              </button>
            </div>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-5 gap-1 md:gap-2">
            {vipLoungeImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(index);
                  setAutoSlide(false);
                }}
                className={`relative rounded-lg overflow-hidden transition-all duration-200 group/thumb ${
                  selectedImage === index 
                    ? 'ring-2 ring-purple-500 ring-offset-1 transform scale-[1.02]' 
                    : 'opacity-80 hover:opacity-100 hover:scale-[1.02]'
                }`}
              >
                <img 
                  src={image} 
                  alt={`View ${index + 1}`}
                  className="w-full h-12 md:h-16 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/10 transition-colors"></div>
              </button>
            ))}
          </div>
          
          {/* Zoom Hint */}
          <div className="text-center pt-1 md:pt-2">
            <p className="text-[10px] md:text-sm text-muted-foreground font-inter">
              Click image to zoom • Hover for navigation
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-3 md:space-y-4">
          {/* Description */}
          <div className="bg-card rounded-xl p-4 md:p-5 border border-border shadow-sm">
            <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 dark:text-purple-400 text-base md:text-lg">👑</span>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground font-notoserif">{vipLoungeDetails.name}</h4>
                <p className="text-muted-foreground text-xs md:text-sm font-inter line-clamp-2">{vipLoungeDetails.description}</p>
              </div>
            </div>
            <div className="mt-2 md:mt-3 p-2 md:p-3 bg-secondary rounded-lg">
              <div className="flex items-center justify-around gap-2 md:gap-6">
                <div className="text-center">
                  <div className="text-base md:text-xl font-bold text-foreground font-inter">20-30</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-inter">Persons</div>
                </div>
                <div className="text-center">
                  <div className="text-base md:text-xl font-bold text-foreground font-inter">2F</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-inter">Floor</div>
                </div>
                <div className="text-center">
                  <div className="text-base md:text-xl font-bold text-foreground font-inter">Private</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-inter">Access</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-card rounded-xl p-4 md:p-5 border border-border shadow-sm">
            <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3 font-notoserif">Features</h4>
            <div className="grid grid-cols-2 gap-1 md:gap-2">
              {vipLoungeDetails.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1 md:gap-2 p-1.5 md:p-2 bg-secondary rounded-lg">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-400 text-[10px] md:text-xs">✓</span>
                  </div>
                  <span className="text-[10px] md:text-sm text-foreground font-inter truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <div className="flex items-start gap-1 md:gap-2">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-600 dark:text-amber-400 text-[8px] md:text-xs">⚠️</span>
                  </div>
                </div>
                <div>
                  <p className="text-amber-800 dark:text-amber-400 text-[8px] md:text-xs font-inter">
                    <span className="font-semibold">Decoration Notice:</span> Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package.
                  </p>
                </div>
              </div>
            </div>
          

          

          {/* Contact Button */}
          <button className="w-full py-2 md:py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1 md:gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs md:text-base font-inter">Contact for VIP Lounge</span>
          </button>
        </div>
      </div>

      {/* Zoom Modal - Responsive */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4 cursor-zoom-out"
          onClick={closeZoom}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-2 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border border-white/10"
            onClick={(e) => {
              e.stopPropagation();
              closeZoom();
            }}
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 hidden md:block">
            <div className="text-white/50 text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 font-inter">
              Press ESC to close
            </div>
          </div>

          <div className="relative w-full max-w-6xl h-[60vh] md:h-[80vh]">
            <img
              src={zoomedImage.image}
              alt={zoomedImage.name}
              className="w-full h-full object-contain"
              style={{
                animation: 'fadeInZoom 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
              }}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black/60 backdrop-blur-sm text-white/80 px-2 py-1 md:px-4 md:py-2 rounded-full border border-white/20 flex items-center gap-1 md:gap-2">
              <span className="text-amber-400 text-xs md:text-sm">⚠️</span>
              <span className="text-[8px] md:text-sm font-inter">Floral decor requires separate package</span>
            </div>
          </div>

          <div className="absolute bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-white/30 text-[8px] md:text-sm font-inter md:block">
            Click anywhere or press ESC to close
          </div>

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
      )}
    </div>
  );
};