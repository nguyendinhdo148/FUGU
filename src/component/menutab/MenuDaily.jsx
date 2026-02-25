// src/components/menutab/MenuDaily.jsx
import React, { useState, useEffect } from "react";

export const MenuDaily = () => {
  const [activeTab, setActiveTab] = useState("food");
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const menuItems = {
    food: {
      name: "Food Menu",
      description: "Full culinary experience - Japanese cuisine",
      googleDriveUrl: "https://drive.google.com/file/d/1ia8jMOfoI6dVjmfdVz-mJaf8DB-8Rkll/view",
      embedUrl: "https://drive.google.com/file/d/1ia8jMOfoI6dVjmfdVz-mJaf8DB-8Rkll/preview",
      features: [
        "Appetizers & Starters",
        "Sashimi Selection",
        "Sushi & Rolls",
        "Robata Grill",
        "Main Courses",
        "Desserts"
      ],
      icon: "🍽️",
      color: "from-orange-500 to-red-500"
    },
    drinks: {
      name: "Drinks Menu",
      description: "Complete beverage selection",
      googleDriveUrl: "https://drive.google.com/file/d/19WOnD3myETmFsW9pU3wjjVkvYc7iDtUf/preview",
      embedUrl: "https://drive.google.com/file/d/19WOnD3myETmFsW9pU3wjjVkvYc7iDtUf/preview",
      features: [
        "Signature Cocktails",
        "Premium Spirits",
        "Wine Collection",
        "Japanese Sake",
        "Beer & Soft Drinks",
        "Non-Alcoholic"
      ],
      icon: "🍸",
      color: "from-blue-500 to-purple-500"
    }
  };

  const handleTabChange = (tab) => {
    setIsLoading(true);
    setActiveTab(tab);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      // Enter fullscreen
      setIsFullscreen(true);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Exit fullscreen
      setIsFullscreen(false);
      // Enable body scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      // Scroll back to #menudaily section
      setTimeout(() => {
        const menuDailySection = document.getElementById('menudaily');
        if (menuDailySection) {
          menuDailySection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  const handleDownload = () => {
    const menu = menuItems[activeTab];
    if (menu.googleDriveUrl.includes("YOUR_DRINKS_MENU_ID")) {
      alert("Drinks menu will be available soon!");
      return;
    }
    window.open(menu.googleDriveUrl.replace('/preview', ''), '_blank');
  };

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isFullscreen) {
        handleFullscreenToggle();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isFullscreen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Reset body styles
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);

  return (
    <section id="menudaily" className="mb-10">
      {/* Header - More Compact */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4"></div>
          <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase">
            Menu Collection
          </span> 
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif tracking-tight">
          Browse Our Menus
        </h3>
        
      </div>

      {/* Compact Container for Everything */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Menu Tabs - Very Compact */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-1 shadow-md">
            <div className="flex">
              {Object.keys(menuItems).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex-1 py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 min-w-[180px] ${
                    activeTab === tab
                      ? `bg-gradient-to-r ${menuItems[tab].color} text-white shadow-lg transform scale-105`
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <span>{menuItems[tab].name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Combined Menu Info and Action Buttons - Ultra Compact */}
        <div className="bg-gradient-to-r from-orange-50/30 to-amber-50/30 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 mb-8 shadow-lg border border-orange-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">{menuItems[activeTab].icon}</span>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white font-serif">
                    {menuItems[activeTab].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {menuItems[activeTab].description}
                  </p>
                </div>
              </div>
              
              {/* Features - Single Line */}
              <div className="flex flex-wrap gap-2">
                {menuItems[activeTab].features.map((feature, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/50 dark:border-gray-600/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Combined Action Buttons - Compact */}
            <div className="flex gap-3 mt-4 lg:mt-0">
              
              <button
                onClick={handleFullscreenToggle}
                className="px-6 py-3 border-2 border-orange-500 text-orange-500 dark:text-orange-400 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              >
                {isFullscreen ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
                    </svg>
                    <span>Exit</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span>Fullscreen</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* PDF Preview Container - Full Width in Normal Mode */}
        <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'relative'}`}>
          {isFullscreen && (
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-black/95 to-gray-900/95 z-20 border-b border-gray-800">
              <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleFullscreenToggle}
                      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                      title="Exit Fullscreen"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    
                    <div>
                      <h2 className="text-2xl font-bold text-white font-serif">
                        {menuItems[activeTab].name}
                      </h2>
                      <p className="text-gray-400 text-sm">
                        Fullscreen Mode • Press ESC to exit
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleDownload}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PDF Viewer - Full Width in Normal Mode, Full Screen in Fullscreen */}
          <div className={`${isFullscreen ? 'pt-16 h-screen' : 'relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'}`}
            style={!isFullscreen ? { 
              height: '800px',
              width: '100%'
            } : {}}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-10">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Loading {menuItems[activeTab].name}...</p>
                </div>
              </div>
            )}

            {/* Google Drive PDF Viewer */}
            <iframe
              src={menuItems[activeTab].embedUrl}
              title={menuItems[activeTab].name}
              className={`w-full ${isFullscreen ? 'h-full' : 'h-full'} border-0`}
              onLoad={handleIframeLoad}
              allow="autoplay"
            />
          </div>

          {/* ESC Hint at Bottom (Minimal) */}
          {isFullscreen && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs font-mono mr-2">ESC</kbd>
                to exit fullscreen
              </div>
            </div>
          )}
        </div>

        {/* Quick Instructions - Only show when not in fullscreen */}
        {!isFullscreen && (
          <>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <span className="text-amber-500 text-lg">💡</span>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Click <span className="font-semibold">Fullscreen</span> for better viewing experience
                </div>
              </div>
            </div>

          </>
        )}
      </div>
    </section>
  );
};