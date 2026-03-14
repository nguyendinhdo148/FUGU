/* eslint-disable react-hooks/immutability */
import React, { useState, useEffect } from "react";
import { Coffee, X } from "lucide-react";

export const Buffet = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [loading, setLoading] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  // Dữ liệu cho 6 freeflow menu
  const freeflowMenus = [
    {
      id: 1,
      price: "150.000 -> 200.000 VND",
      image: "/freeflow/1.jpg",
    },
    {
      id: 2,
      price: "250.000 -> 300.000 VND",
      image: "/freeflow/2.jpg",
    },
    {
      id: 3,
      price: "350.000 -> 420.000 VND",
      image: "/freeflow/3.jpg",
    },
    {
      id: 4,
      price: "500.000 -> 650.000 VND",
      image: "/freeflow/5.jpg",
    },
    {
      id: 5,
      price: "800.000 -> 990.000 VND",
      image: "/freeflow/4.jpg",
    },
    {
      id: 6,
      price: "1.150.000 -> 1.350.000 VND",
      image: "/freeflow/6.jpg",
    }
  ];

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
    setLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageLoad = (id) => {
    setLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageClick = (menu) => {
    setSelectedImage(menu);
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
    <section id="freeflow" className="py-0 relative overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mb-6"></div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest text-sm uppercase font-inter">
              Unlimited Indulgence
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif tracking-tight font-notoserif">
  FreeFlow Menus
</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Thỏa sức thưởng thức với các set menu tự chọn không giới hạn
          </p>
        </div>

        {/* 6 FreeFlow Menu - 2 cột trên mobile, 3 cột trên desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {freeflowMenus.map((menu) => {
            const hasImageError = imageErrors[menu.id];
            const isLoading = loading[menu.id] !== false;
            
            return (
              <div
                key={menu.id}
                className="group bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Image Container - Tỷ lệ 4:5 để ảnh cao hơn */}
                <div 
                  className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-900 cursor-pointer"
                  onClick={() => handleImageClick(menu)}
                >
                  {/* Loading Spinner */}
                  {isLoading && !hasImageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-10">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {!hasImageError && menu.image ? (
                    <img
                      src={menu.image}
                      alt={menu.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onLoad={() => handleImageLoad(menu.id)}
                      onError={() => handleImageError(menu.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                      <Coffee className="w-12 h-12 lg:w-16 lg:h-16 text-white/50" />
                    </div>
                  )}
                  
                  {/* Badge/Promo Tag */}
                  {menu.promoTag && (
                    <div className="absolute top-2 left-2 lg:top-4 lg:left-4">
                      <span className="bg-blue-500 text-white px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-[10px] lg:text-sm font-semibold shadow-lg">
                        {menu.promoTag}
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

                {/* Content - Thu gọn */}
                <div className="p-2 lg:p-3">
                  {/* Name */}
                  <h3 className="text-xs lg:text-base font-bold text-gray-900 dark:text-white mb-1 font-notoserif line-clamp-1">
                    {menu.name}
                  </h3>

                  {/* Description - Ẩn trên mobile, hiện trên desktop */}
                  <p className="hidden lg:block text-gray-600 dark:text-gray-400 text-xs mb-2 line-clamp-2">
                    {menu.description}
                  </p>

                  {/* Price - Thu nhỏ */}
                  <div className="flex items-baseline gap-1 mb-1 lg:mb-2">
                    <span className="text-xs lg:text-sm font-bold text-blue-600 dark:text-blue-400">{menu.price}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-[8px] lg:text-[10px]">/pax</span>
                  </div>

                  {/* Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href="https://zalo.me/0855873979"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-[9px] lg:text-xs font-semibold transition-colors duration-300 shadow-md hover:shadow-lg inline-block"
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
            <span className="text-blue-500 text-base lg:text-lg">💡</span>
            <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
              Nhấn vào hình ảnh để xem toàn màn hình
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 lg:mt-12">
          <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">
            * Giá chưa bao gồm VAT 8%. FreeFlow áp dụng cho tối thiểu 2 người.
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
                  e.target.src = 'https://via.placeholder.com/800x600?text=FreeFlow+Image';
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