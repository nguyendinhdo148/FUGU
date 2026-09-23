// src/components/menutab/Table.jsx
import React, { useState, useEffect } from "react";
import { TableMap } from "./tabletab/TableMap";
import { TableInfo } from "./tabletab/TableInfo";
import { ZoomModal } from "./tabletab/ZoomModal";
import { VIPLounge } from "./tabletab/VIPLounge";
import { tableData, tableImages } from "./tabletab/tableData";

export const Table = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [hoveredTable, setHoveredTable] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [activeFloor, setActiveFloor] = useState("ground"); // "ground" | "vip"

  const handleTableClick = (table) => {
    if (table.type === "restroom") return;
    setSelectedTable(selectedTable?.id === table.id ? null : table);
  };

  const handleImageClick = (table) => {
    setZoomedImage(table);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  // Handle ESC key press to close zoom
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") closeZoom();
    };

    if (zoomedImage) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [zoomedImage]);

  return (
    <section
      id="table"
      className="mb-10 md:mb-1 px-4 md:px-6 font-sans"
      itemScope
      itemType="https://schema.org/Place"
      aria-label="Maxim Saigon Table Map - Sơ đồ bàn nhà hàng Á Âu tại Sài Gòn"
    >
      {/* SEO: Hidden semantic info */}
      <meta
        itemProp="name"
        content="Maxim Saigon Table Map - Sơ đồ bàn nhà hàng Á Âu"
      />
      <meta
        itemProp="description"
        content="Sơ đồ bàn Maxim Saigon - Nhà hàng Á Âu & Bar tại 13-15-17 Đồng Khởi, Quận 1, Sài Gòn. Tầng trệt và VIP Lounge tầng 2. Đặt bàn: 085 587 3979"
      />

      {/* ==================== Header ==================== */}
      <header className="text-center mb-10 md:mb-16">
        <div className="inline-block mb-4 md:mb-6">
          <div
            className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-3 md:mb-4"
            aria-hidden="true"
          ></div>
          <span className="text-primary font-medium tracking-wider text-xs md:text-sm uppercase font-inter">
            Restaurant Floor Plan
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 font-notoserif"
          itemProp="name"
        >
          Maxim Saigon Table Map
        </h2>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* ==================== Floor Selection Tabs ==================== */}
        <div className="flex justify-center mb-8">
          <div
            className="bg-card border border-border rounded-xl p-1 shadow-md"
            role="tablist"
            aria-label="Chọn tầng"
          >
            <div className="flex">
              <button
                onClick={() => {
                  setActiveFloor("ground");
                  setSelectedTable(null);
                }}
                role="tab"
                aria-selected={activeFloor === "ground"}
                aria-controls="panel-ground"
                className={`px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 min-w-[160px] ${
                  activeFloor === "ground"
                    ? "bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg transform scale-105"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <span className="font-inter">Ground Floor</span>
              </button>
              <button
                onClick={() => {
                  setActiveFloor("vip");
                  setSelectedTable(null);
                }}
                role="tab"
                aria-selected={activeFloor === "vip"}
                aria-controls="panel-vip"
                className={`px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 min-w-[160px] ${
                  activeFloor === "vip"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg transform scale-105"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <span className="text-xl md:text-2xl" aria-hidden="true">
                  👑
                </span>
                <span className="font-inter">VIP Lounge (2F)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ==================== Instruction Message ==================== */}
        {activeFloor === "ground" && !selectedTable && (
          <div className="mb-6 text-center animate-fadeIn" role="status">
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-primary/10 border border-primary/20 rounded-xl">
              <span className="text-primary text-lg" aria-hidden="true">
                💡
              </span>
              <p className="text-primary font-medium font-inter">
                Click on a table on the mini map to view table details.
              </p>
              <div
                className="ml-2 w-3 h-3 rounded-full bg-primary animate-pulse"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        )}

        {/* ==================== Ground Floor Map ==================== */}
        {activeFloor === "ground" && (
          <div
            id="panel-ground"
            role="tabpanel"
            aria-label="Ground Floor Map"
          >
            <TableMap
              tableData={tableData}
              selectedTable={selectedTable}
              hoveredTable={hoveredTable}
              handleTableClick={handleTableClick}
              setHoveredTable={setHoveredTable}
            />

            {selectedTable && (
              <TableInfo
                selectedTable={selectedTable}
                tableImages={tableImages}
                handleImageClick={handleImageClick}
                setSelectedTable={setSelectedTable}
              />
            )}

            {zoomedImage && (
              <ZoomModal
                zoomedImage={zoomedImage}
                tableImages={tableImages}
                closeZoom={closeZoom}
              />
            )}
          </div>
        )}

        {/* ==================== VIP Lounge (2nd Floor) ==================== */}
        {activeFloor === "vip" && (
          <div id="panel-vip" role="tabpanel" aria-label="VIP Lounge Floor">
            <VIPLounge />
          </div>
        )}
      </div>
    </section>
  );
};