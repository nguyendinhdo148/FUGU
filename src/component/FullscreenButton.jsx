import { Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const FullscreenButton = ({ 
  toggleFullscreen, 
  isFullscreen, 
  className = "",
  showLabel = true,
  size = "md"
}) => {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20
  };

  return (
    <button
      onClick={toggleFullscreen}
      className={cn(
        "flex items-center gap-2 rounded-lg transition-all duration-300",
        "bg-white/10 backdrop-blur-sm hover:bg-white/20",
        "hover:scale-105 active:scale-95",
        sizes[size],
        className
      )}
      title={isFullscreen ? "Thoát Fullscreen (ESC)" : "Toàn màn hình (F11)"}
      aria-label={isFullscreen ? "Thoát chế độ toàn màn hình" : "Vào chế độ toàn màn hình"}
    >
      {isFullscreen ? (
        <Minimize2 size={iconSizes[size]} />
      ) : (
        <Maximize2 size={iconSizes[size]} />
      )}
      
      {showLabel && (
        <span className="hidden sm:inline">
          {isFullscreen ? "Thoát FS" : "Toàn màn hình"}
        </span>
      )}
    </button>
  );
};