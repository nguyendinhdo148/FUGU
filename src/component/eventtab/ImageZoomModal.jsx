// src/components/eventtab/ImageZoomModal.jsx
import React, { useState } from "react";
import { X, Maximize2, ChevronLeft, ChevronRight, Loader2, AlertCircle } from "lucide-react";

export const ImageZoomModal = ({ 
  zoomedImage, 
  currentEvent, 
  closeZoom, 
  prevImage, 
  nextImage, 
  toggleFullscreen 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(false);
    setImageError(true);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={closeZoom}
    >
      <button 
        className="absolute top-8 right-8 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border border-white/10"
        onClick={(e) => {
          e.stopPropagation();
          closeZoom();
        }}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:scale-110 hover:bg-black/80"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:scale-110 hover:bg-black/80"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Fullscreen Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          const container = document.querySelector('.zoom-container');
          if (container) toggleFullscreen(container);
        }}
        className="absolute top-8 left-8 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 hover:bg-black/80"
      >
        <Maximize2 className="w-5 h-5" />
      </button>

      {/* Image Info */}
      <div className="absolute top-8 left-20 z-20 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{zoomedImage.title}</span>
          <span className="text-xs text-white/60">
            {zoomedImage.index + 1} / {currentEvent.media.images.length}
          </span>
        </div>
      </div>

      {/* Image Type Badge */}
      <div className="absolute top-8 left-48 z-20">
        {zoomedImage.type === 'food-menu' ? (
          <div className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs rounded-full border border-green-500/30">
            Food Menu
          </div>
        ) : zoomedImage.type === 'drink-menu' ? (
          <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs rounded-full border border-blue-500/30">
            Drink Menu
          </div>
        ) : (
          <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs rounded-full border border-purple-500/30">
            Event Photo
          </div>
        )}
      </div>

      {/* Image Container */}
      <div className="zoom-container relative w-full h-[80vh] max-w-6xl">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-white/50 animate-spin mx-auto mb-4" />
              <p className="text-white/70">Loading image...</p>
            </div>
          </div>
        )}

        {imageError ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8">
              <AlertCircle className="w-16 h-16 text-red-500/50 mx-auto mb-4" />
              <p className="text-2xl text-white font-medium mb-2">Image Not Found</p>
              <p className="text-white/70 mb-4">Could not load image from: {zoomedImage.src}</p>
              <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4 max-w-md mx-auto">
                <p className="text-red-300 text-sm">Please check if the image exists at:</p>
                <p className="text-red-200 text-xs mt-1 font-mono">{zoomedImage.src}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={zoomedImage.src}
              alt={zoomedImage.title}
              className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="eager"
            />
          </div>
        )}
      </div>

      {/* Image Description */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-xl border border-white/10 max-w-2xl text-center">
        <p className="text-sm">{zoomedImage.description}</p>
        <p className="text-xs text-white/50 mt-2">
          Click anywhere or press ESC to close • Use ← → keys to navigate
        </p>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 text-white/40 text-sm">
          <div className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">←</kbd>
            <span>Previous</span>
          </div>
          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd>
            <span>Next</span>
          </div>
          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">F</kbd>
            <span>Fullscreen</span>
          </div>
          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
            <span>Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};