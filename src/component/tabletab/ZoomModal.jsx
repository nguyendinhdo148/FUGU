// src/components/menutab/ZoomModal.jsx
import React from "react";

export const ZoomModal = ({ zoomedImage, tableImages, closeZoom }) => {
  return (
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
        <div className="text-white/50 text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 font-inter">
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/30 text-sm font-inter">
        Click anywhere or press ESC to close
      </div>

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