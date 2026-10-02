// src/components/menutab/MenuDaily.jsx
import React, { useState, useEffect } from "react";

export const MenuDaily = () => {
  const [activeTab, setActiveTab] = useState("food");
  const [isLoading, setIsLoading] = useState(false);

  const menuItems = {
    food: {
      name: "Food Menu",
      embedUrl:
        "https://drive.google.com/file/d/1E1_K4RaNCdu9QGxk4Jf8igxY7hm_GHSM/preview",
    },
    drinks: {
      name: "Drink Menu",
      embedUrl:
        "https://drive.google.com/file/d/1KKTKok8rwxqCn-Sb5RoxlAzXmMdbN5ui/preview",
    },
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsLoading(true);
    setActiveTab(tab);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Cleanup body styles khi unmount (đề phòng trường hợp trước đó có chỉnh)
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <section id="menudaily" className="mb-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block mb-3">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-3" />
          <span className="text-primary font-semibold tracking-widest text-xs uppercase">
            Menu Collection
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground font-serif tracking-tight">
          Browse Our Menus
        </h3>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Menu Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            {Object.keys(menuItems).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gray-900 text-white shadow"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {menuItems[tab].name}
              </button>
            ))}
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border bg-card h-[1000px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground text-sm md:text-base font-medium">
                  Loading {menuItems[activeTab].name}...
                </p>
              </div>
            </div>
          )}

          <iframe
            src={menuItems[activeTab].embedUrl}
            title={menuItems[activeTab].name}
            className="w-full h-full border-0"
            onLoad={handleIframeLoad}
            allow="autoplay"
          />
        </div>
      </div>
    </section>
  );
};  