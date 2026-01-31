import React, { useState, useEffect } from "react";
import { Menu, X, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Introduce", href: "#introduce" },
  { name: "Menu", href: "#menu" },
  { name: "Table", href: "#table" },
  { name: "Event", href: "#event" },
  { name: "EntertainmentShow", href: "#entertainment-show" },
];

export const Navbar = ({ toggleFullscreen, isFullscreen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-transparent",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      {/* Container chính */}
      <div className="w-full px-4 relative">


        <div className="flex items-center justify-between">
          {/* Logo bên trái */}
          <a href="#" className="relative z-50 flex items-center gap-2">
            <img
              src="logotab1.jpg"
              alt="Logo FUGU"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span
              className={cn(
                "px-3 py-1 rounded-lg text-xl font-bold text-glow transition-all",
                isScrolled
                  ? "bg-white/10 backdrop-blur-sm"
                  : "bg-black/10 backdrop-blur-sm"
              )}
            >
              Fugu Modern Izakaya & Bar
            </span>
          </a>

          {/* Desktop Menu + Fullscreen Button */}
          <div className="hidden md:flex items-center space-x-4 absolute right-5 top-1/2 -translate-y-1/2">

            {/* Desktop Menu Items - Căn giữa */}
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-all duration-300",
                    "text-foreground/80 hover:text-primary hover:scale-105",
                    isScrolled
                      ? "bg-white/10 backdrop-blur-sm"
                      : "bg-black/10 backdrop-blur-sm"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-foreground/20 mx-2"></div>

            {/* Fullscreen Button - Góc phải */}
            <button
              onClick={toggleFullscreen}
              className={cn(
                "px-4 py-2 rounded-lg transition-all duration-300",
                "flex items-center gap-2 hover:scale-105",
                "bg-gradient-to-r from-primary/20 to-primary/10",
                "hover:from-primary/30 hover:to-primary/20",
                "backdrop-blur-md border border-white/10",
                "shadow-lg hover:shadow-primary/20"
              )}
              title={isFullscreen ? "Thoát Fullscreen (ESC)" : "Toàn màn hình"}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 size={18} className="text-primary" />
                  <span className="text-primary font-medium">
                    Thoát FS
                  </span>
                </>
              ) : (
                <>
                  <Maximize2 size={18} className="text-primary" />
                  <span className="text-primary font-medium">
                    Full Screen
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20"
              title={isFullscreen ? "Thoát Fullscreen" : "Toàn màn hình"}
            >
              {isFullscreen ? (
                <Minimize2 size={20} className="text-primary" />
              ) : (
                <Maximize2 size={20} className="text-primary" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center md:hidden">
            {/* Header với nút đóng */}
            <div className="absolute top-6 right-6">
              <button
                className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Đóng menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col space-y-4 w-full max-w-xs px-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="w-full text-center px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md text-lg font-semibold text-foreground/90 hover:text-primary transition-all hover:scale-105 shadow-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Fullscreen Button lớn */}
            <button
              onClick={() => {
                toggleFullscreen();
                setIsMenuOpen(false);
              }}
              className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-primary/30 to-primary/20 backdrop-blur-md text-xl font-semibold text-primary flex items-center gap-3 hover:scale-105 transition-all shadow-lg"
            >
              {isFullscreen ? (
                <Minimize2 size={24} />
              ) : (
                <Maximize2 size={24} />
              )}
              {isFullscreen ? "Thoát Toàn Màn Hình" : "Bật Toàn Màn Hình"}
            </button>
          </div>
        </>
      )}
    </nav>
  );
};