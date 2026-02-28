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
  const [activeFloor, setActiveFloor] = useState("ground"); // "ground" hoặc "vip"

  const handleTableClick = (table) => {
    if (table.type === 'restroom') return;
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
  <section
    id="table"
    className="mb-10 md:mb-1 px-4 md:px-6 font-sans"
  >

      {/* Header */}
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-block mb-4 md:mb-6">
          <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-3 md:mb-4"></div>
          <span className="text-primary font-medium tracking-wider text-xs md:text-sm uppercase font-inter">
            Restaurant Floor Plan
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 font-notoserif">
          Table Map 
        </h3>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Floor Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-card border border-border rounded-xl p-1 shadow-md">
            <div className="flex">
              <button
                onClick={() => {
                  setActiveFloor("ground");
                  setSelectedTable(null); // Reset selected table khi đổi floor
                }}
                className={`px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 min-w-[160px] ${
                  activeFloor === "ground"
                    ? "bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg transform scale-105"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <span className="text-xl md:text-2xl">🏢</span>
                <span className="font-inter">Ground Floor</span>
              </button>
              <button
                onClick={() => {
                  setActiveFloor("vip");
                  setSelectedTable(null); // Reset selected table khi đổi floor
                }}
                className={`px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 min-w-[160px] ${
                  activeFloor === "vip"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg transform scale-105"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <span className="text-xl md:text-2xl">👑</span>
                <span className="font-inter">VIP Lounge (2F)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mb-6 md:mb-8 flex flex-wrap gap-3 md:gap-4 justify-center">
          <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg shadow-sm">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-600 to-indigo-700"></div>
            <span className="text-xs md:text-sm font-medium text-foreground font-inter">Private Rooms</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg shadow-sm">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-amber-500 to-orange-600"></div>
            <span className="text-xs md:text-sm font-medium text-foreground font-inter">VIP Tables</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg shadow-sm">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-primary to-cyan-600"></div>
            <span className="text-xs md:text-sm font-medium text-foreground font-inter">Regular Tables</span>
          </div>
        </div>

        {/* Instruction Message - Chỉ hiển thị khi chưa chọn bàn nào trên ground floor */}
        {activeFloor === "ground" && !selectedTable && (
          <div className="mb-6 text-center animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-primary/10 border border-primary/20 rounded-xl">
              <span className="text-primary text-lg">💡</span>
              <p className="text-primary font-medium font-inter">
                Click on a table on the mini map to view table details.
              </p>
              <div className="ml-2 w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Ground Floor Map */}
        {activeFloor === "ground" && (
          <>
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
          </>
        )}

        {/* VIP Lounge (2nd Floor) */}
        {activeFloor === "vip" && <VIPLounge />}
      </div>
    
      </section>
  );
};