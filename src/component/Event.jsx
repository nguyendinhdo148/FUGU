// src/components/EventShow.jsx
import React, { useState, useEffect } from "react";
import { Cake, Heart, Award, Users, Play, X } from "lucide-react";

export const Event = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Lock scroll khi modal mở
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  // Dữ liệu các video sự kiện
  const eventVideos = [
    {
      id: 1,
      title: "Birthday Party 100pax+",
      thumbnail: "/tiec/sn100+.jpg",
      url: "https://drive.google.com/file/d/1lC3wg0Vph-hdJlN6PDW71MriUuEGdutI/preview",
      description:
        "Beautiful birthday setup with personalized decorations and cake ceremony at Maxim Saigon",
      category: "birthday",
      icon: Cake,
      duration: "01:37",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "Romantic Proposal - Love Story",
      thumbnail: "/tiec/love.jpg",
      url: "https://drive.google.com/file/d/1rycZjKCszNPv21bImFq-Xam6SoU1O3Go/preview",
      description:
        "Magical proposal moments with flower arrangements and intimate setup at Maxim Saigon",
      category: "proposal",
      icon: Heart,
      duration: "02:20",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      title: "Year End Party - Corporate Celebration",
      thumbnail: "/tiec/yep.jpg",
      url: "https://drive.google.com/file/d/1Xvt6Y5W4StLrHk5ntga5kX0yEzaC8JTm/preview",
      description:
        "Year-end corporate parties with live music and professional setup at Maxim Saigon",
      category: "yearend",
      icon: Award,
      duration: "0:56",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      title: "Meeting Party",
      thumbnail: "/tiec/bb.jpg",
      url: "https://drive.google.com/file/d/1oYx_3lAK_TCwZa3lUq6unK5WVOrVCVw1/preview",
      description:
        "Professional corporate events, meetings, and team building activities at Maxim Saigon",
      category: "corporate",
      icon: Users,
      duration: "0:31",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      title: "Birthday 2pax+",
      thumbnail: "/tiec/sn2+.jpg",
      url: "https://drive.google.com/file/d/1MqYf1_zyqdDwKHo4rpvYIB8l7LZgf3fl/preview",
      description:
        "Cozy gatherings for 2-4 people with special arrangements at Maxim Saigon",
      category: "smallparty",
      icon: Heart,
      duration: "0:27",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 6,
      title: "Buffet Event - Premium Dining",
      thumbnail: "/tiec/bff.png",
      url: "https://drive.google.com/file/d/1zItMWbSgjv3Wk0CjFK2aVFtFa4mfY9Mk/preview",
      description:
        "Luxurious buffet setup with live cooking stations at Maxim Saigon",
      category: "buffet",
      icon: Users,
      duration: "00:28",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section
      id="event"
      className="py-20 bg-background"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label="Maxim Saigon Event Gallery"
    >
      {/* SEO: Hidden semantic info */}
      <meta
        itemProp="name"
        content="Maxim Saigon Event Gallery - Birthday, Proposal, Corporate Events"
      />
      <meta
        itemProp="description"
        content="Event Gallery tại Maxim Saigon - Nhà hàng Á Âu & Bar tại Quận 1, Sài Gòn. Tổ chức sinh nhật, cầu hôn, year-end party, corporate event, buffet. Hotline: 085 587 3979"
      />
      <meta itemProp="numberOfItems" content={eventVideos.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== Header ==================== */}
        <header className="text-center mb-12">
          <div className="inline-block mb-4">
            <div
              className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-3 md:mb-4"
              aria-hidden="true"
            ></div>
            <span className="text-primary font-medium tracking-wider text-xs md:text-sm uppercase font-inter">
              Special Events
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            itemProp="name"
          >
            Maxim Saigon Event Gallery
          </h2>
        </header>

        {/* ==================== Grid Event Videos ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {eventVideos.map((item, index) => {
            const Icon = item.icon;
            const hasImageError = imageErrors[item.id];

            return (
              <article
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group cursor-pointer bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/VideoObject"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedVideo(item);
                  }
                }}
                aria-label={`Xem video sự kiện: ${item.title}`}
              >
                {/* SEO: hidden video metadata */}
                <meta itemProp="name" content={`${item.title} - Maxim Saigon`} />
                <meta itemProp="description" content={item.description} />
                <meta itemProp="duration" content={item.duration} />
                <meta itemProp="thumbnailUrl" content={item.thumbnail} />
                <meta itemProp="uploadDate" content="2026-01-01" />
                <meta itemProp="contentUrl" content={item.url} />

                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                  {!hasImageError && item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={`Maxim Saigon - ${item.title} - ${item.category} event`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      width="640"
                      height="360"
                      onError={() => handleImageError(item.id)}
                      itemProp="image"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${item.color} bg-opacity-20 flex items-center justify-center`}
                    >
                      <Icon
                        className="w-12 h-12 md:w-16 md:h-16 text-white/50"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    aria-hidden="true"
                  ></div>

                  {/* Play Button Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                        <Play
                          className="w-5 h-5 md:w-8 md:h-8 text-white"
                          fill="white"
                        />
                      </div>
                      <div className="absolute -inset-2 md:-inset-4 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10">
                    <div
                      className={`px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r ${item.color} rounded-full`}
                    >
                      <span className="text-white text-[8px] md:text-xs font-medium uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
                    <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-black/70 backdrop-blur-sm rounded">
                      <span className="text-white text-[8px] md:text-xs">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                    <h3
                      className="text-white font-semibold text-xs md:text-lg mb-0.5 md:mb-1 line-clamp-2"
                      itemProp="headline"
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-[8px] md:text-sm line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ==================== Video Player Modal ==================== */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-black"
            onClick={closeVideo}
            role="dialog"
            aria-modal="true"
            aria-label={`Video player: ${selectedVideo.title}`}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close video"
            >
              <X
                className="w-4 h-4 md:w-6 md:h-6 text-white"
                aria-hidden="true"
              />
            </button>

            {/* Video Container */}
            <div className="w-full h-full flex items-center justify-center">
              <iframe
                src={selectedVideo.url}
                title={`${selectedVideo.title} - Maxim Saigon Event`}
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