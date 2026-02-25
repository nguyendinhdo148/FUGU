/* eslint-disable react-hooks/set-state-in-effect */
// src/components/eventtab/VideoZoomModal.jsx - Cập nhật phần video player
import React, { useState, useRef, useEffect } from "react";
import { X, Maximize2 } from "lucide-react";

export const VideoZoomModal = ({ 
  zoomedVideo, 
  closeZoom, 
  toggleFullscreen 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    // Tự động chuyển sang trạng thái playing khi modal mở
    setIsPlaying(true);
    
    // ESC key để đóng modal
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        closeZoom();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [closeZoom]);

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

      {/* Fullscreen Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          const videoContainer = document.querySelector('.video-container');
          if (videoContainer) toggleFullscreen(videoContainer);
        }}
        className="absolute top-8 left-8 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
      >
        <Maximize2 className="w-5 h-5" />
      </button>

      {/* Video Info */}
      <div className="absolute top-8 left-20 z-20 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/10">
        <span className="text-sm font-medium">{zoomedVideo.title}</span>
      </div>

      {/* Video Container - Responsive */}
      <div className="video-container relative w-full max-w-6xl" ref={videoContainerRef}>
        <div className="relative pt-[56.25%] w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center rounded-xl overflow-hidden">
            {/* Video iframe - Luôn hiển thị */}
            <div className="w-full h-full">
              <iframe
                src={zoomedVideo.url}
                className="w-full h-full border-0"
                title={zoomedVideo.title}
                allow="autoplay; fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => {
                  console.log("Video loaded");
                  setIsPlaying(true);
                }}
                onError={(e) => {
                  console.error("Video error:", e);
                  setIsPlaying(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-xl border border-white/10 max-w-2xl text-center">
        <p className="text-sm">{zoomedVideo.description}</p>
        <p className="text-xs text-white/50 mt-2">
          {isPlaying ? "Video is playing" : "Loading video..."} • Press ESC to close
        </p>
      </div>

      {/* Mobile Fullscreen Note */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-amber-900/50 backdrop-blur-sm text-amber-200 px-4 py-2 rounded-full text-sm border border-amber-700/30">
          📱 Videos play fullscreen on mobile
        </div>
      </div>
    </div>
  );
};