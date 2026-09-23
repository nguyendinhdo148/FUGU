// src/components/menutab/TableInfo.jsx
import React from "react";
import { getTableColor, getTableTypeLabel } from "./tableData";

export const TableInfo = ({
  selectedTable,
  tableImages,
  handleImageClick,
  setSelectedTable,
}) => {
  // SEO: Tạo alt text mô tả chi tiết
  const imageAlt = `Maxim Sài Gòn - ${
    selectedTable.type === "private-room" ? "Private Room" : "Table"
  } ${selectedTable.name} - ${getTableTypeLabel(selectedTable.type)} - Sức chứa ${
    selectedTable.capacity
  }`;

  // SEO: Mô tả chi tiết cho search engine
  const seoDescription =
    selectedTable.description ||
    `Không gian ${getTableTypeLabel(selectedTable.type).toLowerCase()} tại Maxim Sài Gòn - Nhà hàng Á Âu & Bar tại Quận 1. Sức chứa ${selectedTable.capacity}.`;

  return (
    <article
      className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-lg mb-6 md:mb-8"
      itemScope
      itemType="https://schema.org/SeatingCapacity"
      aria-label={`Thông tin ${selectedTable.name} tại Maxim Sài Gòn`}
    >
      {/* SEO: Hidden semantic info */}
      <meta itemProp="name" content={`Table ${selectedTable.name} - Maxim Sài Gòn`} />
      <meta itemProp="description" content={seoDescription} />
      <meta itemProp="numberOfSeats" content={selectedTable.capacity} />

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* ==================== Image Section ==================== */}
        <div className="lg:w-2/5">
          <figure
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group border border-border/50"
            onClick={() => handleImageClick(selectedTable)}
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <div className="aspect-video bg-secondary/50 relative">
              <img
                src={tableImages[selectedTable.id] || "/tables/default.jpg"}
                alt={imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width="640"
                height="360"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/tables/default.jpg";
                }}
              />

              {/* SEO: hidden image metadata */}
              <meta itemProp="name" content={imageAlt} />
              <meta itemProp="caption" content={seoDescription} />

              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  Click to zoom
                </span>
              </div>

              <div className="absolute top-2 left-2">
                <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                  {getTableTypeLabel(selectedTable.type)}
                </span>
              </div>
            </div>
          </figure>
        </div>

        {/* ==================== Details Section ==================== */}
        <div className="lg:w-3/5 space-y-4">
          {/* Header */}
          <header className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center ${getTableColor(
                  selectedTable.type
                )} shadow-md flex-shrink-0`}
                aria-hidden="true"
              >
                <span className="text-base md:text-2xl text-white font-bold">
                  {selectedTable.name}
                </span>
              </div>
              <div>
                <h4
                  className="text-lg md:text-2xl font-bold text-foreground"
                  itemProp="name"
                >
                  {selectedTable.type === "private-room" ? "Private Room" : "Table"}{" "}
                  {selectedTable.name}
                </h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
                    {getTableTypeLabel(selectedTable.type)}
                  </span>
                  <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
                    {selectedTable.capacity}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedTable(null)}
              className="p-1 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
              aria-label="Đóng thông tin bàn"
              title="Đóng"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>

          {/* Description */}
          <div>
            <p
              className="text-sm md:text-base text-foreground leading-relaxed"
              itemProp="description"
            >
              {selectedTable.description ||
                "Comfortable seating area with excellent ambiance at Maxim Sài Gòn."}
            </p>
          </div>

          {/* Important Note */}
          <aside
            className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg"
            aria-label="Lưu ý quan trọng"
          >
            <p className="text-xs md:text-sm text-amber-700 dark:text-amber-300">
              <span className="font-medium">Note:</span>{" "}
              {selectedTable.note ||
                "Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."}
            </p>
          </aside>

          {/* Features */}
          <section aria-label="Tiện ích của bàn">
            <h5 className="text-sm font-semibold text-foreground mb-2">Features:</h5>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {selectedTable.type === "private-room" ? (
                <>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Private Space
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Sound System
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    VIP Service
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Exclusive
                  </li>
                </>
              ) : selectedTable.type === "vip" ? (
                <>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Premium
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Best View
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Priority
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Center Spot
                  </li>
                </>
              ) : (
                <>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Comfortable
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Good Lighting
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Good Acoustics
                  </li>
                  <li className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    Easy Access
                  </li>
                </>
              )}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
};