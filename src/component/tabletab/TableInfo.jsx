// src/components/menutab/TableInfo.jsx
import React from "react";
import { getTableColor, getTableTypeLabel } from "./tableData";

export const TableInfo = ({ 
  selectedTable, 
  tableImages, 
  handleImageClick, 
  setSelectedTable 
}) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg mb-8 md:mb-12">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Image Section */}
        <div className="lg:w-2/5">
          <div 
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group border border-border/50"
            onClick={() => handleImageClick(selectedTable)}
          >
            <div className="aspect-video bg-secondary/50 relative">
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
                <div className="bg-black/60 backdrop-blur-md p-3 md:p-4 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/20">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20">
                <span className="px-2 py-1 md:px-3 md:py-1.5 bg-black/80 backdrop-blur-sm text-white text-[10px] md:text-sm rounded-full font-medium font-inter">
                  {getTableTypeLabel(selectedTable.type)}
                </span>
              </div>
            </div>
            
            <div className="p-3 md:p-4 bg-card border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-muted-foreground font-inter">
                  Click to zoom in
                </span>
                <span className="text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1 bg-primary/10 text-primary rounded-full font-medium font-inter">
                  Actual Photo
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Details Section */}
        <div className="lg:w-3/5">
          <div className="flex items-start justify-between mb-4 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className={`w-12 h-12 md:w-20 md:h-20 rounded-xl flex items-center justify-center ${getTableColor(selectedTable.type)} shadow-lg flex-shrink-0`}>
                <span className="text-lg md:text-3xl text-white font-bold font-inter">
                  {selectedTable.name}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-lg md:text-3xl font-bold text-foreground font-notoserif mb-1 md:mb-2 truncate">
                  {selectedTable.type === 'private-room' ? 'Private Room' : 'Table'} {selectedTable.name}
                </h4>
                <div className="flex flex-wrap items-center gap-1 md:gap-2">
                  <span className="px-2 py-1 md:px-3 md:py-1.5 bg-secondary text-secondary-foreground rounded-full text-[10px] md:text-sm font-medium font-inter whitespace-nowrap">
                    {getTableTypeLabel(selectedTable.type)}
                  </span>
                  <span className="px-2 py-1 md:px-3 md:py-1.5 bg-secondary text-secondary-foreground rounded-full text-[10px] md:text-sm font-medium font-inter whitespace-nowrap">
                    {selectedTable.capacity}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedTable(null)}
              className="p-1.5 md:p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Table Description */}
          <div className="mb-4 md:mb-6">
            <h5 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3 font-notoserif">Description</h5>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-inter">
              {selectedTable.description || 'Comfortable seating area with excellent ambiance.'}
            </p>
            
            {/* Decoration Note */}
            <div className="mt-3 md:mt-4 p-3 md:p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-amber-600 dark:text-amber-400 text-base md:text-xl flex-shrink-0">ℹ️</span>
                <div>
                  <p className="text-amber-700 dark:text-amber-300 font-medium mb-0.5 md:mb-1 font-notoserif text-sm md:text-base">Important Note</p>
                  <p className="text-amber-600 dark:text-amber-400 text-xs md:text-sm font-inter">
                    {selectedTable.note || "Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-4 md:mb-6">
            <h5 className="text-base md:text-xl font-semibold text-foreground mb-3 md:mb-4 font-notoserif">Features</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {selectedTable.type === 'private-room' ? (
                <>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-base md:text-lg">🏠</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Private Space</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-base md:text-lg">🎤</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Sound System</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-base md:text-lg">👑</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">VIP Service</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-base md:text-lg">🔒</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Exclusive</span>
                  </div>
                </>
              ) : selectedTable.type === 'vip' ? (
                <>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 dark:text-amber-400 text-base md:text-lg">⭐</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Premium</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 dark:text-amber-400 text-base md:text-lg">👁️</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Best View</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 dark:text-amber-400 text-base md:text-lg">💎</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Priority</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 dark:text-amber-400 text-base md:text-lg">🎯</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Center Spot</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 text-base md:text-lg">🪑</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Comfortable</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 text-base md:text-lg">💡</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Good Lighting</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 text-base md:text-lg">🔊</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Good Acoustics</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 text-base md:text-lg">🚶</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground font-inter truncate">Easy Access</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Reservation Note */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 md:p-4">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-primary text-base md:text-xl flex-shrink-0">📞</span>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground font-inter">
                  For reservations and information about decor packages, please contact our reservation team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};