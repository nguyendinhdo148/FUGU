// src/components/menutab/Table.jsx
import React, { useState, useEffect } from "react";

export const Table = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [hoveredTable, setHoveredTable] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Danh sách hình ảnh cho các bàn
  const tableImages = {
    // Private Rooms (VIP Rooms)
    "VIP2": "/table_vip2/1.jpg",
    "VIP1": "/table_vip1/1.jpg",
    "VIP3.1": "/tables/vip3-1.jpg",
    "VIP3.2": "/tables/vip3-2.jpg",
    "VIP3.3": "/tables/vip3-3.jpg",
    
    // Regular Tables - A Series
    "A1": "/table_a/1.jpg",
    "A2": "/table_a/2.jpg",
    "A3": "/table_a/3.jpg",
    "A4": "/table_a/4.jpg",
    "A5": "/table_a/4.jpg",
    "A6": "/table_a/4.jpg",
    
    // Regular Tables - B Series
    "B1": "/table_b/3.jpg",
    "B2": "/table_b/3.jpg",
    "B3": "/table_b/3.jpg",
    "B4": "/table_b/1.jpg",
    "B5": "/table_b/1.jpg",
    "B6": "/table_b/1.jpg",
    "B7": "/table_b/2.jpg",
    "B8": "/table_b/2.jpg",
    "B9": "/table_b/2.jpg",
    "B10": "/table_b/2.jpg",
    
    // Regular Tables - C Series
    "C1": "/table_c/1.jpg",
    "C2": "/table_c/2.jpg",
    "C3": "/table_c/3.jpg",
    "C4": "/table_c/4.jpg",
    "C5": "/table_c/5.jpg",
    
    // Special Areas
    "WC_LADY": "/tables/lady-restroom.jpg",
    "WC_GENTLEMAN": "/tables/gentleman-restroom.jpg",
  };

  // Vị trí bàn theo % (đã căn chỉnh cho đồng đều)
  const tableData = [
    // ===== PRIVATE ROOMS (VIP Rooms) =====
    { 
      id: "VIP2", 
      name: "VIP 2", 
      type: "private-room", 
      capacity: "18-20 persons", 
      position: { top: "7%", left: "20.5%" },
      description: "Luxury private room with exclusive amenities, perfect for large gatherings and special celebrations.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "VIP1", 
      name: "VIP 1", 
      type: "private-room", 
      capacity: "6-10 persons", 
      position: { top: "7%", right: "22.3%" },
      description: "Elegant private room offering privacy and premium dining experience with panoramic views.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    
    // ===== VIP TABLES =====
    { 
      id: "VIP3.1", 
      name: "VIP 3.1", 
      type: "vip", 
      capacity: "4-6 persons", 
      position: { bottom: "12%", left: "34.5%" },
      description: "Premium VIP seating near the entertainment area with excellent service.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "VIP3.2", 
      name: "VIP 3.2", 
      type: "vip", 
      capacity: "4-6 persons", 
      position: { bottom: "12%", left: "46%" },
      description: "Comfortable VIP seating in a semi-private setting.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "VIP3.3", 
      name: "VIP 3.3", 
      type: "vip", 
      capacity: "4-6 persons", 
      position: { bottom: "12.9%", left: "57%" },
      description: "VIP table with optimal view of the main stage area.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },

    // ===== B SERIES (xung quanh line decor) =====
    { 
      id: "B7", 
      name: "B7", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "18%", left: "39.8%" },
      description: "Cozy seating for intimate moments.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B6", 
      name: "B6", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "18%", left: "45.5%" },
      description: "Perfect for couples seeking intimate dining experience.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B5", 
      name: "B5", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "18%", left: "51%" },
      description: "Intimate two-person table with comfortable seating.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B4", 
      name: "B4", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "26%", right: "32%" },
      description: "Quiet corner seating away from the main area.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B3", 
      name: "B3", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "36%", right: "32%" },
      description: "Standard two-person table with excellent service.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B2", 
      name: "B2", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "46%", right: "32%" },
      description: "Comfortable duo seating perfect for conversations.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B1", 
      name: "B1", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "56%", right: "32%" },
      description: "Intimate dining spot with good ambiance.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B8", 
      name: "B8", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "23%", left: "27%" },
      description: "Cozy corner table with privacy.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B9", 
      name: "B9", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "36%", left: "27%" },
      description: "Private two-seater perfect for quiet dinners.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "B10", 
      name: "B10", 
      type: "regular", 
      capacity: "0-2 persons", 
      position: { top: "50%", left: "27%" },
      description: "Intimate seating area with comfortable chairs.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },

    // ===== A SERIES (bên phải) =====
    { 
      id: "A4", 
      name: "A4", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "22.5%", right: "22.4%" },
      description: "Family-sized table perfect for group gatherings.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "A3", 
      name: "A3", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "35.5%", right: "9.5%" },
      description: "Group dining table with comfortable spacing.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "A5", 
      name: "A5", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "40%", right: "22.4%" },
      description: "Medium group table with excellent accessibility.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "A2", 
      name: "A2", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "53%", right: "9.5%" },
      description: "Spacious 6-person table for family dinners.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "A6", 
      name: "A6", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "57%", right: "22.4%" },
      description: "Comfortable group seating with good lighting.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "A1", 
      name: "A1", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "70%", right: "9.5%" },
      description: "Large family table near the entrance area.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },

    // ===== C SERIES (bên trái) =====
    { 
      id: "C4", 
      name: "C4", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "29%", left: "7.4%" },
      description: "Quiet group table away from main traffic.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "C3", 
      name: "C3", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "23.5%", left: "20.3%" },
      description: "Medium-sized table with comfortable seating.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "C2", 
      name: "C2", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "43%", left: "20.3%" },
      description: "Group dining area with good ambiance.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "C5", 
      name: "C5", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "51.8%", left: "7.4%" },
      description: "Family table near entrance for easy access.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },
    { 
      id: "C1", 
      name: "C1", 
      type: "regular", 
      capacity: "4-6 persons", 
      position: { top: "63.8%", left: "20.3%" },
      description: "Large table for groups and celebrations.",
      note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
    },

    // ===== Special Areas =====
    { 
      id: "WC_LADY", 
      name: "Lady Restroom", 
      type: "restroom", 
      position: { top: "6%", left: "8%" }, 
      icon: "🚺" 
    },
    { 
      id: "WC_GENTLEMAN", 
      name: "Gentleman Restroom", 
      type: "restroom", 
      position: { top: "6%", right: "10.5%" }, 
      icon: "🚹" 
    },
  ];

  const getTableColor = (type) => {
    switch(type) {
      case 'private-room': 
        return 'bg-gradient-to-br from-purple-600 to-indigo-700 border-purple-700 hover:from-purple-700 hover:to-indigo-800';
      case 'vip': 
        return 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-600 hover:from-amber-600 hover:to-orange-700';
      case 'regular': 
        return 'bg-gradient-to-br from-blue-500 to-cyan-600 border-blue-600 hover:from-blue-600 hover:to-cyan-700';
      case 'restroom': 
        return 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-600';
      default: 
        return 'bg-gradient-to-br from-gray-500 to-gray-700 border-gray-600';
    }
  };

  const getTableTypeLabel = (type) => {
    switch(type) {
      case 'private-room': return 'Private Room';
      case 'vip': return 'VIP Table';
      case 'regular': return 'Regular Table';
      case 'restroom': return 'Restroom';
      default: return 'Table';
    }
  };

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
      document.body.style.overflow = 'unset';
    };
  }, [zoomedImage]);

  return (
    <div className="mb-10 md:mb-20 px-4 md:px-6">
      {/* Header */}
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-block mb-4 md:mb-6">
          <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-3 md:mb-4"></div>
          <span className="text-blue-600 font-medium tracking-wider text-xs md:text-sm uppercase">
            Restaurant Floor Plan
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 font-serif">
          Table Map & Seating Arrangement
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Interactive floor plan showing our table layout. Click on any table to view details and photos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Legend */}
        <div className="mb-6 md:mb-8 flex flex-wrap gap-3 md:gap-4 justify-center">
          <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-600 to-indigo-700"></div>
            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">Private Rooms</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-amber-500 to-orange-600"></div>
            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">VIP Tables</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-cyan-600"></div>
            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">Regular Tables</span>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8 md:mb-12">
          <div className="relative w-full overflow-auto">
            <div className="relative mx-auto w-full max-w-6xl aspect-[16/9] min-h-[450px] md:min-h-[500px]">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-xl"
                style={{ backgroundImage: 'url(/minimap/1.jpg)' }}
              />
              
              {/* Tables Overlay */}
              <div className="absolute inset-0">
                {/* Restrooms (non-clickable) */}
                {tableData.filter(table => table.type === 'restroom').map((table) => (
                  <div
                    key={table.id}
                    style={table.position}
                    className="absolute text-3xl md:text-4xl opacity-90 pointer-events-none drop-shadow-lg"
                  >
                    {table.icon}
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs md:text-sm font-semibold text-gray-800 dark:text-white bg-white/90 dark:bg-gray-900/90 px-3 py-1.5 rounded-lg shadow-sm">
                      {table.name}
                    </div>
                  </div>
                ))}
                
                {/* Clickable Tables */}
                {tableData.filter(table => table.type !== 'restroom').map((table) => (
                  <button
                    key={table.id}
                    onClick={() => handleTableClick(table)}
                    onMouseEnter={() => setHoveredTable(table.id)}
                    onMouseLeave={() => setHoveredTable(null)}
                    style={table.position}
                    className={`absolute w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full md:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:z-10 ${getTableColor(table.type)} border-2 shadow-lg md:shadow-xl ${
                      selectedTable?.id === table.id 
                        ? 'ring-3 md:ring-4 ring-white ring-opacity-80 scale-125 z-20 shadow-2xl' 
                        : hoveredTable === table.id 
                          ? 'ring-2 ring-white ring-opacity-60 shadow-xl' 
                          : ''
                    }`}
                  >
                    <span className="text-white font-bold text-sm md:text-base">
                      {table.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Table Information */}
        {selectedTable && (
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 mb-8 md:mb-12">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* Image Section */}
              <div className="lg:w-2/5">
                <div 
                  className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => handleImageClick(selectedTable)}
                >
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    
                    <img 
                      src={tableImages[selectedTable.id] || "/tables/default.jpg"}
                      alt={`Table ${selectedTable.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/tables/default.jpg";
                      }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-black/50 backdrop-blur-md p-4 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                        {getTableTypeLabel(selectedTable.type)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Click to zoom in
                      </span>
                      <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                        Actual Photo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Details Section */}
              <div className="lg:w-3/5">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center ${getTableColor(selectedTable.type)} shadow-lg`}>
                      <span className="text-2xl md:text-3xl text-white font-bold">
                        {selectedTable.name}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-serif mb-2">
                        {selectedTable.type === 'private-room' ? 'Private Room' : 'Table'} {selectedTable.name}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                          {getTableTypeLabel(selectedTable.type)}
                        </span>
                        <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                          Capacity: {selectedTable.capacity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTable(null)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Table Description */}
                <div className="mb-4">
                  <h5 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">Description</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                    {selectedTable.description || 'Comfortable seating area with excellent ambiance.'}
                  </p>
                  
                  {/* Decoration Note */}
                  <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-600 dark:text-amber-400 text-xl">ℹ️</span>
                      <div>
                        <p className="text-amber-800 dark:text-amber-300 font-medium mb-1">Important Note</p>
                        <p className="text-amber-700 dark:text-amber-400 text-sm">
                          {selectedTable.note || "Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h5 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4">Features</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedTable.type === 'private-room' ? (
                      <>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                            <span className="text-purple-600 dark:text-purple-400 text-lg">🏠</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Private Space</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                            <span className="text-purple-600 dark:text-purple-400 text-lg">🎤</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sound System</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                            <span className="text-purple-600 dark:text-purple-400 text-lg">👑</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">VIP Service</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                            <span className="text-purple-600 dark:text-purple-400 text-lg">🔒</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Exclusive</span>
                        </div>
                      </>
                    ) : selectedTable.type === 'vip' ? (
                      <>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <span className="text-amber-600 dark:text-amber-400 text-lg">⭐</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Premium</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <span className="text-amber-600 dark:text-amber-400 text-lg">👁️</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Best View</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <span className="text-amber-600 dark:text-amber-400 text-lg">💎</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <span className="text-amber-600 dark:text-amber-400 text-lg">🎯</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Center Spot</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 text-lg">🪑</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Comfortable</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 text-lg">💡</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Good Lighting</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 text-lg">🔊</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Good Acoustics</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 text-lg">🚶</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Easy Access</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Reservation Note */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">📞</span>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        For reservations and information about decor packages, please contact our reservation team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Zoom Modal */}
        {zoomedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={closeZoom}
          >
            <button 
              className="absolute top-8 right-8 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                closeZoom();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="absolute top-8 left-8 z-20">
              <div className="text-white/50 text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                Press ESC to close
              </div>
            </div>

            <div className="relative w-full max-w-6xl h-[80vh]">
              <img
                src={tableImages[zoomedImage.id] || "/tables/default.jpg"}
                alt={`Table ${zoomedImage.name}`}
                className="w-full h-full object-contain"
                style={{
                  animation: 'fadeInZoom 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                }}
              />
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/30 text-sm">
              Click anywhere or press ESC to close
            </div>
          </div>
        )}

        {/* Summary Cards */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Private Rooms Card */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-purple-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white font-bold">P</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-xl">Private Rooms</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Exclusive private dining</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tableData.filter(t => t.type === 'private-room').map(table => (
                <div key={table.id} className="px-4 py-2.5 bg-white/70 dark:bg-gray-700/50 rounded-lg">
                  <div className="font-medium text-gray-800 dark:text-white">{table.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{table.capacity}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-purple-100 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Private rooms offer complete privacy with premium amenities. Advance booking required.
              </p>
            </div>
          </div>
          
          {/* VIP Tables Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-amber-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white font-bold">V</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-xl">VIP Tables</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Premium seating areas</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tableData.filter(t => t.type === 'vip').map(table => (
                <div key={table.id} className="px-4 py-2.5 bg-white/70 dark:bg-gray-700/50 rounded-lg">
                  <div className="font-medium text-gray-800 dark:text-white">{table.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{table.capacity}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-amber-100 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                VIP tables offer premium service and excellent views of the entertainment area.
              </p>
            </div>
          </div>
          
          {/* Regular Tables Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-blue-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white font-bold">R</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-xl">Regular Tables</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Standard seating options</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">A Series</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {tableData.filter(t => t.name.startsWith('A')).length} tables (4-6 persons)
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">B Series</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {tableData.filter(t => t.name.startsWith('B')).length} tables (0-2 persons)
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">C Series</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {tableData.filter(t => t.name.startsWith('C')).length} tables (4-6 persons)
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Total</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {tableData.filter(t => t.type === 'regular').length} tables total
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-100 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All regular tables come with standard service. Decor packages available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>

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