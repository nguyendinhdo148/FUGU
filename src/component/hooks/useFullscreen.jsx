/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useCallback, useRef } from 'react';

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  // Sử dụng ref thay vì state để lưu scroll position
  const scrollPositionRef = useRef({ x: 0, y: 0 });

  // Kiểm tra browser support
  useEffect(() => {
    if (!document.documentElement.requestFullscreen) {
      setIsSupported(false);
      console.warn("Trình duyệt không hỗ trợ Fullscreen API");
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!isSupported) {
      alert("Trình duyệt của bạn không hỗ trợ chế độ toàn màn hình");
      return;
    }

    // LƯU VỊ TRÍ SCROLL HIỆN TẠI TRƯỚC KHI TOGGLE
    scrollPositionRef.current = {
      x: window.scrollX,
      y: window.scrollY
    };

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
          // KHÔI PHỤC SCROLL NGAY SAU KHI VÀO FULLSCREEN
          requestAnimationFrame(() => {
            window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
          });
        })
        .catch(err => {
          console.log("Lỗi khi vào fullscreen:", err);
          alert("Không thể vào chế độ toàn màn hình");
        });
    } else {
      document.exitFullscreen()
        .then(() => {
          setIsFullscreen(false);
          // KHÔI PHỤC SCROLL NGAY SAU KHI THOÁT FULLSCREEN
          requestAnimationFrame(() => {
            window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
          });
        })
        .catch(err => {
          console.log("Lỗi khi thoát fullscreen:", err);
        });
    }
  }, [isSupported]);

  // Theo dõi thay đổi fullscreen - LUÔN KHÔI PHỤC SCROLL
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
      
      // LUÔN KHÔI PHỤC SCROLL SAU KHI THAY ĐỔI TRẠNG THÁI
      requestAnimationFrame(() => {
        window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
      });
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return { 
    isFullscreen, 
    toggleFullscreen, 
    isSupported 
  };
};

// Hook đơn giản hơn
export const useSimpleFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollPositionRef = useRef({ x: 0, y: 0 });

  const toggleFullscreen = () => {
    // LUÔN LƯU VỊ TRÍ HIỆN TẠI TRƯỚC KHI TOGGLE
    scrollPositionRef.current = {
      x: window.scrollX,
      y: window.scrollY
    };

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
      // KHÔI PHỤC SCROLL NGAY
      requestAnimationFrame(() => {
        window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
      });
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
      // KHÔI PHỤC SCROLL NGAY
      requestAnimationFrame(() => {
        window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
      });
    }
  };

  useEffect(() => {
    const handleChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
      
      // KHÔI PHỤC SCROLL SAU MỖI LẦN THAY ĐỔI
      requestAnimationFrame(() => {
        window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
      });
    };
    
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, []);

  return { isFullscreen, toggleFullscreen };
};