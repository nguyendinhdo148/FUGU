// src/components/menutab/TableMap.jsx
import React from "react";
import { getTableColor } from "./tableData";

export const TableMap = ({ 
  tableData, 
  selectedTable, 
  hoveredTable, 
  handleTableClick, 
  setHoveredTable 
}) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8 md:mb-12">
      <div className="relative w-full overflow-auto">
        <div className="relative mx-auto w-full max-w-[1200px] aspect-[16/9]">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <img 
              src="/minimap/1.jpg" 
              alt="Restaurant Floor Plan"
              className="w-full h-full object-cover"
            />
            {/* Overlay để làm mờ phần thừa nếu có */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
          </div>
          
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
                <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs md:text-sm font-semibold text-gray-800 dark:text-white bg-white/90 dark:bg-gray-900/90 px-3 py-1.5 rounded-lg shadow-sm font-inter">
                  {table.name}
                </div>
              </div>
            ))}
            
            {/* Clickable Tables - Điều chỉnh kích thước nút theo màn hình */}
            {tableData.filter(table => table.type !== 'restroom').map((table) => (
              <button
                key={table.id}
                onClick={() => handleTableClick(table)}
                onMouseEnter={() => setHoveredTable(table.id)}
                onMouseLeave={() => setHoveredTable(null)}
                style={table.position}
                className={`absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full md:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:z-10 ${getTableColor(table.type)} border-2 shadow-lg md:shadow-xl ${
                  selectedTable?.id === table.id 
                    ? 'ring-2 md:ring-3 ring-white ring-opacity-80 scale-125 z-20 shadow-2xl' 
                    : hoveredTable === table.id 
                      ? 'ring-1 md:ring-2 ring-white ring-opacity-60 shadow-xl' 
                      : ''
                }`}
              >
                <span className="text-white font-bold text-xs md:text-sm font-inter">
                  {table.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};