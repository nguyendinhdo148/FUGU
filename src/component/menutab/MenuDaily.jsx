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
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-4"></div>
          <span className="text-primary font-semibold tracking-widest text-xs uppercase">
            Menu Collection
          </span> 
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif tracking-tight">
          Browse Our Menus
        </h3>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Menu Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-card border border-border rounded-xl p-1 shadow-md">
            <div className="flex">
              {Object.keys(menuItems).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex-1 py-2 md:py-3 px-4 md:px-8 rounded-lg font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 min-w-[120px] md:min-w-[180px] ${
                    activeTab === tab
                      ? `bg-gradient-to-r ${menuItems[tab].color} text-white shadow-lg transform scale-105`
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{menuItems[tab].name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Combined Menu Info and Action Buttons */}
        <div className="bg-card border border-border rounded-xl p-4 md:p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                <span className="text-2xl md:text-3xl">{menuItems[activeTab].icon}</span>
                <div>
                  <h4 className="text-lg md:text-2xl font-bold text-foreground font-serif">
                    {menuItems[activeTab].name}
                  </h4>
                  <p className="text-xs md:text-base text-muted-foreground mt-0.5 md:mt-1">
                    {menuItems[activeTab].description}
                  </p>
                </div>
              </div>
              
              {/* Features */}
              <div className="flex flex-wrap gap-1 md:gap-2">
                {menuItems[activeTab].features.map((feature, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 md:px-3 md:py-2 bg-secondary text-secondary-foreground rounded-lg text-[10px] md:text-sm font-medium border border-border"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2 mt-3 lg:mt-0">
              <button
                onClick={handleFullscreenToggle}
                className="px-4 py-2 md:px-6 md:py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 min-w-[100px] md:min-w-[140px]"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              >
                {isFullscreen ? (
                  <>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
                    </svg>
                    <span className="text-xs md:text-base">Exit</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span className="text-xs md:text-base">Fullscreen</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* PDF Preview Container */}
        <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'relative'}`}>
          {isFullscreen && (
            <div className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-20 border-b border-white/10">
              <div className="container mx-auto px-4 md:px-6 py-2 md:py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-4">
                    <button
                      onClick={handleFullscreenToggle}
                      className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      title="Exit Fullscreen"
                    >
                      <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    
                    <div>
                      <h2 className="text-sm md:text-2xl font-bold text-white font-serif">
                        {menuItems[activeTab].name}
                      </h2>
                      <p className="text-white/60 text-[10px] md:text-sm hidden md:block">
                        Fullscreen Mode • Press ESC to exit
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-4">
                    <button
                      onClick={handleDownload}
                      className="px-3 py-1.5 md:px-6 md:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center gap-1 md:gap-2 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-3 h-3 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span className="text-[10px] md:text-base">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PDF Viewer */}
          <div className={`${isFullscreen ? 'pt-12 md:pt-16 h-screen' : 'relative rounded-xl overflow-hidden shadow-2xl border border-border bg-card'}`}
            style={!isFullscreen ? { 
              height: '500px',
              width: '100%'
            } : {}}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-muted-foreground text-sm md:text-base font-medium">Loading {menuItems[activeTab].name}...</p>
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

          {/* ESC Hint */}
          {isFullscreen && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm border border-white/20">
                <kbd className="px-1.5 py-0.5 md:px-2 md:py-1 bg-white/20 rounded text-[8px] md:text-xs font-mono mr-1 md:mr-2">ESC</kbd>
                to exit fullscreen
              </div>
            </div>
          )}
        </div>

        {/* Quick Instructions */}
        {!isFullscreen && (
          <div className="mt-6 md:mt-8 text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-secondary border border-border rounded-full shadow-sm">
              <span className="text-primary text-base md:text-lg">💡</span>
              <div className="text-xs md:text-sm text-foreground/70">
                Click <span className="font-semibold text-primary">Fullscreen</span> for better viewing experience
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};