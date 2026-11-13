
import React from "react";

export const Map = () => {
  // CID chính xác của hồ sơ Maxim Saigon
  const placeCID = "2370173791394124858";

  // Nhúng trực tiếp hồ sơ doanh nghiệp Google Maps
  const mapUrl = `https://maps.google.com/maps?cid=${placeCID}&output=embed`;

  return (
    <section
      id="map"
      className="w-full py-12 md:py-16 relative z-10"
      itemScope
      itemType="https://schema.org/Place"
      aria-label="Maxim Saigon Location Map"
    >
      {/* SEO */}
      <meta itemProp="name" content="Maxim Saigon" />
      <meta
        itemProp="description"
        content="Maxim Saigon at 13-15-17 Dong Khoi, District 1, Ho Chi Minh City."
      />
      <meta itemProp="telephone" content="+84855873979" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-2">

              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4" />

              <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase">
                Our Location
              </span>

              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-serif tracking-tight"
                itemProp="name"
              >
                Find Us Here
              </h2>

              <div
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  <span itemProp="streetAddress">
                    13-15-17 Dong Khoi
                  </span>
                  , <span itemProp="addressLocality">Saigon Ward</span>,
                  <span itemProp="addressRegion">
                    {" "}District 1, Ho Chi Minh City
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* GOOGLE MAP - MAXIM SAIGON BUSINESS PROFILE */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border shadow-xl">

          <iframe
            title="Maxim Saigon - Google Maps"
            src={mapUrl}
            className="w-full h-[350px] md:h-[450px] border-0 block"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>
    </section>
  );
};
