// src/components/EntertainmentShow.jsx
import React, { useState } from "react";
import { Play, Music, Mic2, Piano, Guitar, Volume2 } from "lucide-react";

export const EntertainmentShow = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Dữ liệu các tiết mục
  const performances = [
    {
      id: 1,
      title: "Piano Solo - Romantic Classics",
      artist: "Piano Artist Nguyen Tuan Anh",
      thumbnail: "/logotab1.jpg",
      url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
      description: "Gentle and romantic piano melodies",
      category: "piano",
      icon: Piano,
      duration: "4:30",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      title: "Violin Solo - Spring Melodies",
      artist: "Violinist Tran Minh Chau",
      thumbnail: "/logotab1.jpg",
      url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
      description: "Sweet and pure violin performances",
      category: "violin",
      icon: Music,
      duration: "3:45",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Saxophone - Romantic Ballads",
      artist: "Saxophonist Le Hoang",
      thumbnail: "/logotab1.jpg",
      url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
      description: "Warm saxophone melodies of timeless love songs",
      category: "saxophone",
      icon: Mic2,
      duration: "5:15",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 4,
      title: "DJ Hoang Nam - EDM Night",
      artist: "DJ Hoang Nam",
      thumbnail: "/logotab1.jpg",
      url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
      description: "Energetic atmosphere with the latest EDM hits",
      category: "dj",
      icon: Volume2,
      duration: "6:20",
      color: "from-red-500 to-rose-500"
    },
    {
      id: 5,
      title: "Acoustic Band - Love Songs",
      artist: "FUGU Acoustic Band",
      thumbnail: "/logotab1.jpg",
      url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
      description: "Cozy acoustic music space with heartfelt performances",
      category: "band",
      icon: Guitar,
      duration: "8:10",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Piano & Violin Duet - Rainy Evening",
      artist: "Piano & Violin Duo",
      thumbnail: "/logotab1.jpg",
      url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
      description: "Perfect harmony between piano and violin",
      category: "duet",
      icon: Music,
      duration: "5:45",
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
    <section id="entertainment" className="py-20 bg-background">
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience exceptional live performances at FUGU Restaurant
          </p>
        </div>

        {/* Grid Performances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performances.map((item) => {
            const Icon = item.icon;
            const hasImageError = imageErrors[item.id];
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                      <Icon className="w-16 h-16 text-white/50" />
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </div>
                      <div className="absolute -inset-4 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`px-3 py-1 bg-gradient-to-r ${item.color} rounded-full`}>
                      <span className="text-white text-xs font-medium uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded">
                      <span className="text-white text-xs">{item.duration}</span>
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {item.artist}
                    </p>
                  </div>
                </div>
                
                {/* Description (hidden on hover, shown below) */}
                <div className="p-4 border-t border-border">
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative w-full max-w-5xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedVideo.artist}
                  </p>
                </div>
                <button
                  onClick={closeVideo}
                  className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Video Player */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  src={selectedVideo.url}
                  title={selectedVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description */}
              <div className="p-4 border-t border-border">
                <p className="text-muted-foreground">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};