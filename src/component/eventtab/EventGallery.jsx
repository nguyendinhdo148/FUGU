// src/components/eventtab/EventGallery.jsx
import React, { useState } from "react";
import { Maximize2, Camera, Utensils, Wine, Image as ImageIcon } from "lucide-react";

export const EventGallery = ({ images, handleImageClick }) => {
  const [imageErrors, setImageErrors] = useState({});

  const getTypeColor = (type) => {
    switch(type) {
      case 'food-menu': return 'from-green-500 to-emerald-500';
      case 'drink-menu': return 'from-blue-500 to-cyan-500';
      default: return 'from-purple-500 to-indigo-500';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'food-menu': return Utensils;
      case 'drink-menu': return Wine;
      default: return Camera;
    }
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">Event Gallery</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Camera className="w-4 h-4" />
          <span>{images.length} photos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => {
          const Icon = getTypeIcon(image.type);
          const hasError = imageErrors[index];
          
          return (
            <div 
              key={index} 
              className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleImageClick(image, index)}
            >
              {/* Image Type Badge */}
              <div className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(image.type)} text-white text-xs font-medium flex items-center gap-1`}>
                <Icon className="w-3 h-3" />
                <span>
                  {image.type === 'food-menu' ? 'Food Menu' : 
                   image.type === 'drink-menu' ? 'Drink Menu' : 'Event'}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                {hasError ? (
                  // Fallback khi ảnh lỗi
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <ImageIcon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-foreground font-medium text-sm">{image.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{image.description}</p>
                      <p className="text-xs text-red-500 mt-2">Image not found</p>
                    </div>
                  </div>
                ) : (
                  // Hiển thị ảnh thực tế
                  <>
                    <img 
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError(index)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Zoom Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h4 className="font-semibold text-foreground mb-1">{image.title}</h4>
                <p className="text-sm text-muted-foreground">{image.description}</p>
                {hasError && (
                  <p className="text-xs text-red-500 mt-2">
                    Could not load image: {image.src}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};