import { useEffect, useRef } from "react";
import jingleBellsUrl from "../audio/jingle-bells-orchestra.mp3";
import "../css/christmas-background.css";

export const ChristmasBackground = () => {
  const audioRef = useRef(null);
  const musicStatusRef = useRef(null);

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
