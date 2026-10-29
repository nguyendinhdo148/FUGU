import React from "react";
import { MapPin } from "lucide-react";

export const Map = () => {
  // Sử dụng tên địa điểm chính xác để Google Maps tự ghim
  const placeName = "Nhà hàng Maxim Saigon";

  return (
    <section 
      id="map" 
      className="w-full py-12 md:py-16 bg-background relative z-10"
      itemScope 
      itemType="https://schema.org/Place"
      aria-label="Maxim Saigon Location Map"
    >
      {/* ==================== SEO: Hidden Semantic Info ==================== */}
      <meta itemProp="name" content="Maxim Saigon Location" />
      <meta itemProp="description" content="Bản đồ vị trí nhà hàng Maxim Saigon tại 13-15-17 Đồng Khởi, Quận 1, TP.HCM." />
      <meta itemProp="telephone" content="+84855873979" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* ==================== HEADER (Đồng bộ font chữ với Happy Hour / Table Map) ==================== */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-2">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4"></div>
              <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase">
                Our Location
              </span>
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-serif tracking-tight"
                itemProp="name"
              >
                Find Us Here
              </h2>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  <span itemProp="streetAddress">13-15-17 Dong Khoi</span>, 
                  <span itemProp="addressLocality"> Saigon Ward, District 1</span>, 
                  <span itemProp="addressRegion"> Ho Chi Minh City</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== MAP CONTAINER ==================== */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border shadow-xl">
          <iframe
            title="Maxim Saigon Location"
            // Nhúng bản đồ bằng tên địa điểm, không cần toạ độ
            src={`https://maps.google.com/maps?q=${encodeURIComponent(placeName)}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-[300px] md:h-[450px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};