import { useState, useEffect, useCallback } from "react";

/* =====================
   TYPES
===================== */
/**
 * @typedef {Object} Star
 * @property {number} id
 * @property {number} size
 * @property {number} x
 * @property {number} y
 * @property {number} opacity
 * @property {number} animationDuration
 * @property {number} twinkleDelay
 */

/**
 * @typedef {Object} Meteor
 * @property {number} id
 * @property {number} size
 * @property {number} x
 * @property {number} y
 * @property {number} delay
 * @property {number} animationDuration
 * @property {number} angle
 */

/**
 * @typedef {Object} ShootingStar
 * @property {number} id
 * @property {number} x
 * @property {number} y
 * @property {number} length
 * @property {number} delay
 * @property {number} duration
 * @property {number} angle
 * @property {number} trailLength
 */

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  /* =====================
     STARS
  ===================== */
  const generateStars = useCallback(() => {
    const numberOfStars = isMobile ? 80 : 140;
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.4,
        animationDuration: Math.random() * 4 + 3,
        twinkleDelay: Math.random() * 5,
      });
    }

    setStars(newStars);
  }, [isMobile]);

  /* =====================
     METEORS
  ===================== */
  const generateMeteors = useCallback(() => {
    const numberOfMeteors = isMobile ? 2 : 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.5,
        x: Math.random() * 100 + 20,
        y: Math.random() * 30,
        delay: Math.random() * 20,
        animationDuration: Math.random() * 4 + 3,
        angle: 215,
      });
    }

    setMeteors(newMeteors);
  }, [isMobile]);

  /* =====================
     SHOOTING STARS (GIỮ NHƯ CŨ – GIẢM SỐ LƯỢNG)
  ===================== */
  const generateShootingStars = useCallback(() => {
    const numberOfShootingStars = isMobile ? 3 : 5;
    const newShootingStars = [];

    for (let i = 0; i < numberOfShootingStars; i++) {
      const angle = 215 + (Math.random() * 10 - 5);

      newShootingStars.push({
        id: i,
        x: Math.random() * 100 + 50,
        y: Math.random() * 40,
        length: Math.random() * 80 + 60,
        delay: Math.random() * 25,
        duration: Math.random() * 3 + 1.5,
        angle,
        trailLength: Math.random() * 30 + 20,
      });
    }

    setShootingStars(newShootingStars);
  }, [isMobile]);

  /* =====================
     INIT + RESIZE
  ===================== */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    generateStars();
    generateMeteors();
    generateShootingStars();

    const handleResize = () => {
      generateStars();
      generateMeteors();
      generateShootingStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [generateStars, generateMeteors, generateShootingStars]);

  /* =====================
     PAUSE ANIMATION WHEN SCROLL
  ===================== */
  useEffect(() => {
    let timer;

    const onScroll = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${
        isScrolling ? "pause-animation" : ""
      }`}
    >
      {/* Background stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className={`star ${
            star.id % 3 === 0 ? "animate-pulse-subtle" : ""
          }`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.twinkleDelay}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor"
          style={{
            width: `${meteor.size * 80}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animation: `meteor ${meteor.animationDuration}s linear ${meteor.delay}s infinite`,
            transform: `rotate(${meteor.angle}deg)`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.length}px`,
            height: "1px",
            animation: `meteor ${star.duration}s linear ${star.delay}s infinite`,
            transform: `rotate(${star.angle}deg)`,
            opacity: 0,
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: "4px",
              height: "4px",
              background: "white",
              boxShadow: "0 0 6px rgba(255,255,255,0.8)",
              left: "0",
              top: "-1.5px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: `${star.length - 10}px`,
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
              left: "4px",
              top: "0",
            }}
          />
          <div
            className="absolute"
            style={{
              width: `${star.trailLength}px`,
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
              left: `-${star.trailLength}px`,
              top: "0",
            }}
          />
        </div>
      ))}
    </div>
  );
};
