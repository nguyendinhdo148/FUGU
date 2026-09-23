import React, { useState, useEffect } from "react";
import { Menu, X, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ==================== NAV ITEMS (English) ====================
const navItems = [
  { name: "Introduce", href: "#introduce" },
  { name: "Menu", href: "#menu" },
  { name: "Table Map", href: "#table" },
  { name: "Event", href: "#event" },
  { name: "Entertainment", href: "#entertainment-show" },
];

export const Navbar = ({ toggleFullscreen, isFullscreen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (isMenuOpen && isMobileView) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMenuOpen, isMobileView]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkViewport = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkViewport);
    checkViewport();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleFullscreenClick = () => {
    const currentScroll = {
      x: window.scrollX,
      y: window.scrollY,
    };

    toggleFullscreen();

    requestAnimationFrame(() => {
      window.scrollTo(currentScroll.x, currentScroll.y);
    });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-transparent",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="w-full px-4 relative">
        <div className="flex items-center justify-between">
          {/* ==================== LOGO + BRAND ==================== */}
          <a href="#" className="relative z-50 flex items-center gap-2">
            <img
              src="/logotab1.jpg"
              alt="Maxim Saigon logo"
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
              Maxim Saigon
            </span>
          </a>

          {!isMobileView && (
            <div className="flex items-center space-x-4 absolute right-5 top-1/2 -translate-y-1/2">
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

              <div className="h-6 w-px bg-foreground/20 mx-2"></div>

              <button
                onClick={handleFullscreenClick}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  "flex items-center gap-2 hover:scale-105",
                  "bg-gradient-to-r from-primary/20 to-primary/10",
                  "hover:from-primary/30 hover:to-primary/20",
                  "backdrop-blur-md border border-white/10",
                  "shadow-lg hover:shadow-primary/20"
                )}
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 size={18} className="text-primary" />
                    <span className="text-primary font-medium">Exit FS</span>
                  </>
                ) : (
                  <>
                    <Maximize2 size={18} className="text-primary" />
                    <span className="text-primary font-medium">Full Screen</span>
                  </>
                )}
              </button>
            </div>
          )}

          {isMobileView && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleFullscreenClick}
                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-105"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? (
                  <Minimize2 size={20} className="text-primary" />
                ) : (
                  <Maximize2 size={20} className="text-primary" />
                )}
              </button>

              <button
                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-105"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && isMobileView && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
            <div className="absolute top-6 right-6">
              <button
                className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

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

            <button
              onClick={(e) => {
                e.preventDefault();
                const currentScroll = {
                  x: window.scrollX,
                  y: window.scrollY,
                };
                handleFullscreenClick(e);
                setIsMenuOpen(false);
                setTimeout(() => {
                  window.scrollTo(currentScroll.x, currentScroll.y);
                }, 50);
              }}
              className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-primary/30 to-primary/20 backdrop-blur-md text-xl font-semibold text-primary flex items-center gap-3 hover:scale-105 transition-all shadow-lg"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 size={24} />
                  <span>Exit Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize2 size={24} />
                  <span>Enter Fullscreen</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </nav>
  );
};