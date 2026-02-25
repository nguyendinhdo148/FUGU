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
                <span className="px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-sm rounded-full font-medium font-inter">
                  {getTableTypeLabel(selectedTable.type)}
                </span>
              </div>
            </div>
            
            <div className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                  Click to zoom in
                </span>
                <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium font-inter">
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
                <span className="text-2xl md:text-3xl text-white font-bold font-inter">
                  {selectedTable.name}
                </span>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-notoserif mb-2">
                  {selectedTable.type === 'private-room' ? 'Private Room' : 'Table'} {selectedTable.name}
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">
                    {getTableTypeLabel(selectedTable.type)}
                  </span>
                  <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">
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
            <h5 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 font-notoserif">Description</h5>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4 font-inter">
              {selectedTable.description || 'Comfortable seating area with excellent ambiance.'}
            </p>
            
            {/* Decoration Note */}
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 text-xl">ℹ️</span>
                <div>
                  <p className="text-amber-800 dark:text-amber-300 font-medium mb-1 font-notoserif">Important Note</p>
                  <p className="text-amber-700 dark:text-amber-400 text-sm font-inter">
                    {selectedTable.note || "Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-6">
            <h5 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 font-notoserif">Features</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {selectedTable.type === 'private-room' ? (
                <>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">🏠</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Private Space</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">🎤</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Sound System</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">👑</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">VIP Service</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">🔒</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Exclusive</span>
                  </div>
                </>
              ) : selectedTable.type === 'vip' ? (
                <>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <span className="text-amber-600 dark:text-amber-400 text-lg">⭐</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Premium</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <span className="text-amber-600 dark:text-amber-400 text-lg">👁️</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Best View</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <span className="text-amber-600 dark:text-amber-400 text-lg">💎</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Priority</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <span className="text-amber-600 dark:text-amber-400 text-lg">🎯</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Center Spot</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-lg">🪑</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Comfortable</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-lg">💡</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Good Lighting</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-lg">🔊</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Good Acoustics</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-lg">🚶</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">Easy Access</span>
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
                <p className="text-sm text-gray-700 dark:text-gray-300 font-inter">
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