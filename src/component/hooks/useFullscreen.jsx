/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useCallback } from 'react';

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

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

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(err => {
          console.log("Lỗi khi vào fullscreen:", err);
          alert("Không thể vào chế độ toàn màn hình");
        });
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(err => {
          console.log("Lỗi khi thoát fullscreen:", err);
        });
    }
  }, [isSupported]);

  // Thêm phím tắt F11
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F11') {
        e.preventDefault();
        toggleFullscreen();
      }
      
      // ESC đã tự động xử lý bởi browser
      if (e.key === 'Escape' && document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    // Theo dõi thay đổi fullscreen
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [toggleFullscreen]);

  return { 
    isFullscreen, 
    toggleFullscreen, 
    isSupported 
  };
};

// Hook đơn giản hơn
export const useSimpleFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, []);

  return { isFullscreen, toggleFullscreen };
};