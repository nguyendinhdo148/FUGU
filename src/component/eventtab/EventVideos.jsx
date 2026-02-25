// src/components/eventtab/EventVideos.jsx
import React, { useState } from "react";
import { MapPin, Camera, Play, Image as ImageIcon } from "lucide-react";

export const EventVideos = ({ media, handleVideoClick }) => {
  const [imageErrors, setImageErrors] = useState({
    space: false,
    event: false
  });

  const handleImageError = (type) => {
    setImageErrors(prev => ({ ...prev, [type]: true }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* Space Preview Video */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group/video">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">Space Preview</h4>
              <p className="text-sm text-muted-foreground">{media.spaceVideo.description}</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="relative h-64 cursor-pointer overflow-hidden"
            onClick={() => handleVideoClick(media.spaceVideo)}
          >
            {/* Video Thumbnail - Hiển thị ảnh từ media.spaceVideo.thumbnail */}
            <div className="absolute inset-0 transition-transform duration-500 group-hover/video:scale-105">
              {media.spaceVideo.thumbnail && !imageErrors.space ? (
                <div className="relative w-full h-full">
                  <img 
                    src={media.spaceVideo.thumbnail}
                    alt={`${media.spaceVideo.title} thumbnail`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError('space')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-blue-900/10 group-hover/video:bg-blue-900/20 transition-colors"></div>
                </div>
              ) : (
                // Fallback khi không có thumbnail hoặc lỗi
                <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-indigo-900/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                      <ImageIcon className="w-8 h-8 text-blue-500" />
                    </div>
                    <p className="text-foreground font-medium text-lg">{media.spaceVideo.title}</p>
                    <p className="text-sm text-muted-foreground mt-2">Video preview</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover/video:scale-110 group-hover/video:bg-white/30 transition-all duration-300">
                  <Play className="w-10 h-10 text-white" fill="white" />
                </div>
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-md opacity-0 group-hover/video:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{media.spaceVideo.title}</p>
                  <p className="text-white/70 text-xs mt-1">Click to watch video</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white/60 text-xs">HD</span>
                </div>
              </div>
            </div>
            
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Video Stats */}
          <div className="absolute top-4 left-4 z-10">
            <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-white text-xs font-medium">Space Tour</span>
            </div>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded">
              <span className="text-white text-xs">2:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Highlights Video */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group/video">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center">
              <Camera className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">Event Highlights</h4>
              <p className="text-sm text-muted-foreground">{media.eventVideo.description}</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="relative h-64 cursor-pointer overflow-hidden"
            onClick={() => handleVideoClick(media.eventVideo)}
          >
            {/* Video Thumbnail - Hiển thị ảnh từ media.eventVideo.thumbnail */}
            <div className="absolute inset-0 transition-transform duration-500 group-hover/video:scale-105">
              {media.eventVideo.thumbnail && !imageErrors.event ? (
                <div className="relative w-full h-full">
                  <img 
                    src={media.eventVideo.thumbnail}
                    alt={`${media.eventVideo.title} thumbnail`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError('event')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-purple-900/10 group-hover/video:bg-purple-900/20 transition-colors"></div>
                </div>
              ) : (
                // Fallback khi không có thumbnail hoặc lỗi
                <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-pink-800/10 to-rose-900/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                      <ImageIcon className="w-8 h-8 text-purple-500" />
                    </div>
                    <p className="text-foreground font-medium text-lg">{media.eventVideo.title}</p>
                    <p className="text-sm text-muted-foreground mt-2">Video preview</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover/video:scale-110 group-hover/video:bg-white/30 transition-all duration-300">
                  <Play className="w-10 h-10 text-white" fill="white" />
                </div>
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-md opacity-0 group-hover/video:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{media.eventVideo.title}</p>
                  <p className="text-white/70 text-xs mt-1">Click to watch video</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white/60 text-xs">HD</span>
                </div>
              </div>
            </div>
            
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Video Stats */}
          <div className="absolute top-4 left-4 z-10">
            <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-white text-xs font-medium">Highlights</span>
            </div>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded">
              <span className="text-white text-xs">3:15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};