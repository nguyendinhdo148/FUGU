/* eslint-disable react-hooks/immutability */
import React, { useState, useEffect } from "react";
import { Coffee, X } from "lucide-react";

export const SetMenu = ({ setMenus }) => {
  const [imageErrors, setImageErrors] = useState({});
  const [loading, setLoading] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  // Đảm bảo có đủ 6 menu (nếu thiếu thì tạo thêm)
  const displayMenus = [...setMenus];
  while (displayMenus.length < 6) {
    displayMenus.push({
      id: `placeholder-${displayMenus.length}`,
      name: "Set Menu",
      price: "Liên hệ",
      image: "/setmenu/placeholder.jpg",
      promoTag: "Coming Soon"
    });
  }
  // Chỉ lấy 6 menu đầu tiên
  const menuSets = displayMenus.slice(0, 6);

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
    setLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageLoad = (id) => {
    setLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageClick = (set) => {
    setSelectedImage(set);
    document.body.style.overflow = "hidden";

    // Ẩn navbar nếu có
    const navbar = document.querySelector("nav");
    if (navbar) navbar.style.display = "none";
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";

    // Hiện lại navbar
    const navbar = document.querySelector("nav");
    if (navbar) navbar.style.display = "";
  };

  // Xử lý phím ESC để đóng modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedImage]);

  // Cleanup khi unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section id="set-menu" className="py-0 relative overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-100 dark:bg-amber-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-100 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-6"></div>
            <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-widest text-sm uppercase font-inter">
              Culinary Excellence
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif tracking-tight font-notoserif">
  Signature Set Menus
</h3>
        </div>

        {/* 6 Set Menu - 2 cột trên mobile, 3 cột trên desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {menuSets.map((set) => {
            const hasImageError = imageErrors[set.id];
            const isLoading = loading[set.id] !== false;
            
            return (
              <div
                key={set.id}
                className="group bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Image Container - TĂNG CHIỀU CAO */}
                <div 
                  className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-900 cursor-pointer"
                  onClick={() => handleImageClick(set)}
                >
                  {/* Loading Spinner */}
                  {isLoading && !hasImageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-10">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 border-3 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {!hasImageError && set.image ? (
                    <img
                      src={set.image}
                      alt={set.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onLoad={() => handleImageLoad(set.id)}
                      onError={() => handleImageError(set.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-500 to-pink-500 flex items-center justify-center">
                      <Coffee className="w-12 h-12 lg:w-16 lg:h-16 text-white/50" />
                    </div>
                  )}
                  
                  {/* Badge/Promo Tag */}
                  {set.promoTag && (
                    <div className="absolute top-2 left-2 lg:top-4 lg:left-4">
                      <span className="bg-amber-500 text-white px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-[10px] lg:text-sm font-semibold shadow-lg">
                        {set.promoTag}
                      </span>
                    </div>
                  )}

                  {/* Overlay với hiệu ứng zoom */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg">
                        <span className="text-xs lg:text-sm font-semibold flex items-center gap-1 lg:gap-2">
                          🔍 <span className="hidden lg:inline">Nhấn để phóng to</span>
                          <span className="lg:hidden">Phóng to</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content - GIẢM KÍCH THƯỚC PHẦN GIÁ */}
                <div className="p-2 lg:p-3">
                  {/* Name */}
                  <h3 className="text-xs lg:text-base font-bold text-gray-900 dark:text-white mb-1 font-notoserif line-clamp-1">
                    {set.name}
                  </h3>

                  {/* Price - THU NHỎ LẠI */}
                  <div className="flex items-baseline gap-1 mb-1 lg:mb-2">
                    <span className="text-xs lg:text-sm font-bold text-amber-600 dark:text-amber-400">{set.price}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-[8px] lg:text-[10px]">/pax</span>
                  </div>

                  {/* Button - GIỮ NGUYÊN HOẶC THU NHỎ NHẸ */}
                  <div className="flex items-center justify-between">
                    <a
                      href="https://zalo.me/0855873979"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500 hover:bg-amber-600 text-white px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-[9px] lg:text-xs font-semibold transition-colors duration-300 shadow-md hover:shadow-lg inline-block"
                    >
                      Đặt ngay
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Instructions */}
        <div className="text-center mt-6 lg:mt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm">
            <span className="text-amber-500 text-base lg:text-lg">💡</span>
            <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
              Nhấn vào hình ảnh set menu để xem toàn màn hình
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 lg:mt-12">
          <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">
            * Giá chưa bao gồm VAT 8%. 
          </p>
        </div>
      </div>

      {/* Fullscreen Modal - Zoom ảnh */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-2 md:p-8"
          onClick={handleCloseModal}
        >
          {/* Nút đóng */}
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 z-[10000] group"
            aria-label="Đóng"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Container ảnh */}
          <div 
            className="relative w-full h-full max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600?text=Menu+Image';
                }}
              />
            </div>
          </div>

          {/* ESC Hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
            <div className="text-white/30 text-sm font-mono tracking-wider bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              Press ESC to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
};