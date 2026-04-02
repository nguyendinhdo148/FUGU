// src/components/EntertainmentShow.jsx
import React, { useState, useEffect } from "react";
import { Play, Music, Mic2, Piano, Guitar, Volume2, X } from "lucide-react";

export const EntertainmentShow = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Lock scroll khi modal mở
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  // Dữ liệu các tiết mục
  const performances = [
    {
      // {
    //   id: 1,
    //   title: "Piano Solo - Romantic Classics",
    //   artist: "Piano Artist Nguyen Tuan Anh",
    //   thumbnail: "/logotab1.jpg",
    //   url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
    //   description: "Gentle and romantic piano melodies",
    //   category: "piano",
    //   icon: Piano,
    //   duration: "4:30",
    //   color: "from-blue-500 to-indigo-500"
    // },
      id: 2,
      title: "Violin Solo",
      thumbnail: "/show/violin.png",
      url: "https://drive.google.com/file/d/1P1U55z0MxYVZxJEcClHX09NboAkuj53a/preview",
      description: "Sweet and pure violin performances",
      category: "violin",
      icon: Music,
      duration: "1:39",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Saxophone & electric drum",
      thumbnail: "/show/sexophone.png",
      url: "https://drive.google.com/file/d/1oyzYfC4T3jiKRX2LdH0fss5DgqgLJfAZ/preview",
      description: "Warm saxophone melodies of timeless love songs",
      category: "duet",
      icon: Mic2,
      duration: "0:25",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 4,
      title: "DJ - EDM Night",
      thumbnail: "/show/dj.png",
      url: "https://drive.google.com/file/d/1vDqXujO4KYiiqzJMTHFQJt42d6n-SCTL/preview",
      description: "Energetic atmosphere with the latest EDM hits",
      category: "dj",
      icon: Volume2,
      duration: "1:05",
      color: "from-red-500 to-rose-500"
    },
    {
      id: 5,
      title: "Acoustic Band - Love Songs",
      thumbnail: "/show/band.png",
      url: "https://drive.google.com/file/d/1a26b1OV6X0NcUnwRSiWRPe0CqJiwQDb-/preview",
      description: "Cozy acoustic music space with heartfelt performances",
      category: "band",
      icon: Guitar,
      duration: "0:17",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Saxophone solo",
      thumbnail: "/show/sexophonesolo.png",
      url: "https://drive.google.com/file/d/1GXGFZWcaMTfO-U7di40r1_pjxOu9KeI2/preview",
      description: "Perfect harmony between piano and violin",
      category: "saxophone",
      icon: Music,
      duration: "0:30",
      color: "from-cyan-500 to-teal-500"
    }
  ];

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="entertainment-show" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-3 md:mb-4"></div>
            <span className="text-primary font-medium tracking-wider text-xs md:text-sm uppercase font-inter">
              Live Entertainment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entertainment Shows
          </h2>
        </div>

        {/* Grid Performances - 2 cột mobile, 3 cột desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {performances.map((item) => {
            const Icon = item.icon;
            const hasImageError = imageErrors[item.id];
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group cursor-pointer bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                  {!hasImageError && item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${item.color} bg-opacity-20 flex items-center justify-center`}>
                      <Icon className="w-12 h-12 md:w-16 md:h-16 text-white/50" />
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Play Button Overlay - Nhỏ hơn trên mobile */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                        <Play className="w-5 h-5 md:w-8 md:h-8 text-white" fill="white" />
                      </div>
                      <div className="absolute -inset-2 md:-inset-4 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Category Badge - Nhỏ hơn trên mobile */}
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10">
                    <div className={`px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r ${item.color} rounded-full`}>
                      <span className="text-white text-[8px] md:text-xs font-medium uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Duration Badge - Nhỏ hơn trên mobile */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
                    <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-black/70 backdrop-blur-sm rounded">
                      <span className="text-white text-[8px] md:text-xs">{item.duration}</span>
                    </div>
                  </div>
                  
                  {/* Title Overlay - Nhỏ hơn trên mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                    <h3 className="text-white font-semibold text-xs md:text-lg mb-0.5 md:mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-[8px] md:text-sm line-clamp-1">
                      {item.artist}
                    </p>
                  </div>
                </div>
                
                {/* Description - Nhỏ hơn trên mobile */}
                <div className="p-2 md:p-4 border-t border-border">
                  <p className="text-muted-foreground text-[8px] md:text-sm line-clamp-2 md:line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Player Modal - Responsive */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 bg-black"
            onClick={closeVideo}
          >
            {/* Nút Close - Responsive */}
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close video"
            >
              <X className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </button>

            {/* Video Container - Full màn hình */}
            <div className="w-full h-full flex items-center justify-center">
              <iframe
                src={selectedVideo.url}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};