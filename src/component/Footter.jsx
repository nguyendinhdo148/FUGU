// src/components/Footer.jsx
import React from "react";
import { MapPin, Phone, Mail, Clock, Heart, Instagram, Facebook, Calendar, ArrowRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-card border-t border-border py-8"
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      {/* SEO: Hidden semantic info */}
      <meta itemProp="name" content="Maxim Saigon" />
      <meta itemProp="alternateName" content="MaximSaiGon" />
      <meta itemProp="servesCuisine" content="Asian, European, Fusion" />
      <meta itemProp="priceRange" content="$$$" />
      <meta itemProp="telephone" content="+84855873979" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          {/* ==================== Logo & Social ==================== */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground">
              <span itemProp="name">Maxim Saigon</span>{" "}
              <span className="text-primary">Asian-European Cuisine & Bar</span>
            </h3>
            <div className="flex justify-center md:justify-start gap-2 mt-2">
              <a
                href="https://www.instagram.com/maximsaignon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                aria-label="Maxim Saigon on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/maximsaignon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                aria-label="Maxim Saigon on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ==================== Contact Quick Info ==================== */}
          <div
            className="flex flex-wrap justify-center gap-4 text-sm"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <a
              href="tel:+84855873979"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Call Maxim Saigon hotline 085 587 3979"
              itemProp="telephone"
            >
              <Phone className="w-4 h-4" /> 085 587 3979
            </a>
            <a
              href="mailto:info@maximsaignon.vn"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Maxim Saigon"
              itemProp="email"
            >
              <Mail className="w-4 h-4" /> info@maximsaignon.vn
            </a>
          </div>

          {/* ==================== CTA ==================== */}
          <a
            href="https://zalo.me/84855873979"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition"
            aria-label="Book a table at Maxim Saigon via Zalo"
          >
            <Calendar className="w-4 h-4" /> Book Now <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* ==================== Bottom Bar ==================== */}
        <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground">
          <p>
            © {currentYear}{" "}
            <span itemProp="name">Maxim Saigon</span>. 13-15-17 Đồng Khởi, Quận 1. Open daily 5PM - 12AM
          </p>
        </div>
      </div>
    </footer>
  );
};