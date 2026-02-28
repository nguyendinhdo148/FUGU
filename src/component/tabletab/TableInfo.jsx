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
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-lg mb-6 md:mb-8">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Image Section */}
        <div className="lg:w-2/5">
          <div 
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group border border-border/50"
            onClick={() => handleImageClick(selectedTable)}
          >
            <div className="aspect-video bg-secondary/50 relative">
              <img 
                src={tableImages[selectedTable.id] || "/tables/default.jpg"}
                alt={`Table ${selectedTable.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/tables/default.jpg";
                }}
              />
              
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  Click to zoom
                </span>
              </div>
              
              <div className="absolute top-2 left-2">
                <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                  {getTableTypeLabel(selectedTable.type)}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Details Section */}
        <div className="lg:w-3/5 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center ${getTableColor(selectedTable.type)} shadow-md flex-shrink-0`}>
                <span className="text-base md:text-2xl text-white font-bold">
                  {selectedTable.name}
                </span>
              </div>
              <div>
                <h4 className="text-lg md:text-2xl font-bold text-foreground">
                  {selectedTable.type === 'private-room' ? 'Private Room' : 'Table'} {selectedTable.name}
                </h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
                    {getTableTypeLabel(selectedTable.type)}
                  </span>
                  <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
                    {selectedTable.capacity}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedTable(null)}
              className="p-1 text-muted-foreground hover:text-foreground hover:bg-secondary rounded"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              {selectedTable.description || 'Comfortable seating area with excellent ambiance.'}
            </p>
          </div>

          {/* Important Note */}
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-xs md:text-sm text-amber-700 dark:text-amber-300">
              <span className="font-medium">Note:</span> {selectedTable.note || "Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."}
            </p>
          </div>

          {/* Features - Simplified */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-2">Features:</h5>
            <div className="flex flex-wrap gap-2">
              {selectedTable.type === 'private-room' ? (
                <>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Private Space</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Sound System</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">VIP Service</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Exclusive</span>
                </>
              ) : selectedTable.type === 'vip' ? (
                <>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Premium</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Best View</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Priority</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Center Spot</span>
                </>
              ) : (
                <>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Comfortable</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Good Lighting</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Good Acoustics</span>
                  <span className="px-2 py-1 bg-secondary/50 rounded text-xs">Easy Access</span>
                </>
              )}
            </div>
          </div>

          {/* Reservation Contact */}
          <div className="pt-2">
            <p className="text-xs text-muted-foreground">
              For reservations: 📞 Contact our team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};