import { useEffect, useRef, useState } from "react";
import jingleBellsUrl from "../audio/jingle-bells-orchestra.mp3";
import "../css/christmas-background.css";

export const ChristmasBackground = () => {
  const audioRef = useRef(null);
  const musicStatusRef = useRef(null);
  const [snowflakes] = useState(() =>
    Array.from({ length: 36 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * -18,
      duration: 12 + Math.random() * 14,
      size: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.55,
    })),
  );

  useEffect(() => {
    const audio = audioRef.current;
    const status = musicStatusRef.current;
    if (!audio) return undefined;

    const removeInteractionListeners = () => {
      document.removeEventListener("pointerdown", startPlayback);
      document.removeEventListener("keydown", startPlayback);
    };

    const startPlayback = () => {
      if (!audio.paused) return;
      audio.play().catch(() => {
        if (status) {
          status.textContent =
            "Trình duyệt chặn tự phát âm thanh. Nhạc sẽ thử phát lại sau thao tác đầu tiên.";
        }
      });
    };

    const handlePlay = () => {
      removeInteractionListeners();
      if (status) status.textContent = "";
    };

    audio.addEventListener("play", handlePlay);
    document.addEventListener("pointerdown", startPlayback);
    document.addEventListener("keydown", startPlayback);
    startPlayback();

    return () => {
      audio.removeEventListener("play", handlePlay);
      removeInteractionListeners();
    };
  }, []);

  return (
    <>
      <div className="christmas-background" aria-hidden="true">
        <div className="christmas-background__day" />
        <div className="christmas-background__night" />
        <span className="christmas-background__sleigh" />
        <div className="christmas-background__snow">
          {snowflakes.map((flake) => (
            <span
              className="christmas-background__snowflake"
              key={flake.id}
              style={{
                left: `${flake.left}%`,
                animationDelay: `${flake.delay}s`,
                animationDuration: `${flake.duration}s`,
                width: `${flake.size}px`,
                height: `${flake.size}px`,
                opacity: flake.opacity,
              }}
            />
          ))}
        </div>
      </div>

      <div className="sr-only">
        <audio
          ref={audioRef}
          src={jingleBellsUrl}
          autoPlay
          loop
          preload="auto"
        />
        <span ref={musicStatusRef} role="status" aria-live="polite" />
      </div>
    </>
  );
};
