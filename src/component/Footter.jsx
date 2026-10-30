
import React from "react";
import {
  Phone,
  Instagram,
  Facebook,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 bg-card border-t border-border py-8"
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      {/* SEO */}
      <meta itemProp="name" content="Maxim Saigon" />
      <meta itemProp="alternateName" content="MaximSaiGon" />
      <meta itemProp="servesCuisine" content="Asian, European, Fusion" />
      <meta itemProp="priceRange" content="$$$" />
      <meta itemProp="telephone" content="+84855873979" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          {/* Logo & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground">
              <span itemProp="name">Maxim Saigon</span>{" "}
              <span className="text-primary">
                Restaurant & Lounge
              </span>
            </h3>

            <div className="flex justify-center md:justify-start gap-2 mt-2">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/maximsaignon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                aria-label="Maxim Saigon on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/maximsaignon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                aria-label="Maxim Saigon on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/84855873979"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                aria-label="Contact Maxim Saigon on WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.19-3.46-8.42ZM12.04 21.8a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.72.97.99-3.63-.24-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.45 9.9-9.94 9.9Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="tel:+84855873979"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Call Maxim Saigon hotline 085 587 3979"
              itemProp="telephone"
            >
              <Phone className="w-4 h-4" />
              085 587 3979
            </a>
          </div>

          {/* Booking CTA */}
          <a
            href="https://zalo.me/84855873979"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition"
            aria-label="Book a table at Maxim Saigon via Zalo"
          >
            <Calendar className="w-4 h-4" />
            Book Now
            <ArrowRight className="w-3 h-3" />
          </a>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground space-y-2">

          <p>
            13-15-17 Đồng Khởi, Phường Sài Gòn, TP. HCM.
          </p>

          <p className="leading-relaxed">
            Open: T2 - T6: 11:00 - 24:00
            <br />
            T7 - CN: 15:30 - 24:00
          </p>

          <p>
            © {currentYear}{" "}
            <span itemProp="name">Maxim Saigon</span>.
          </p>

        </div>
      </div>
    </footer>
  );
};
