/* eslint-disable react-hooks/set-state-in-effect */
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      {/* 👈 Light mode: nền beige + vài logo nhỏ ẩn hiện */}
      {!isDarkMode && (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Nền beige nhạt */}
    <div className="absolute inset-0 bg-[#faf8f3]" />

    {/* Logo 1 — góc dưới phải */}
    <img
      src="/logotab1nf.jpg"
      alt=""
      draggable={false}
      className="absolute bottom-[14%] right-[12%] w-[60px] md:w-[80px] h-auto object-contain select-none logo-float"
      style={{ animationDelay: "0s" }}
    />

    {/* Logo 2 — góc trên trái */}
    <img
      src="/logotab1nf.jpg"
      alt=""
      draggable={false}
      className="absolute top-[20%] left-[10%] w-[50px] md:w-[70px] h-auto object-contain select-none logo-float"
      style={{ animationDelay: "3s" }}
    />

    {/* Logo 3 — giữa phải */}
    <img
      src="/logotab1nf.jpg"
      alt=""
      draggable={false}
      className="absolute top-[58%] right-[20%] w-[40px] md:w-[55px] h-auto object-contain select-none logo-float"
      style={{ animationDelay: "6s" }}
    />
  </div>
)}

      {/* Nút toggle */}
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed top-15 left-1/2 -translate-x-1/2 z-200",
          "flex h-10 w-10 items-center justify-center",
          "rounded-full border shadow-md",
          "bg-background text-foreground",
          "transition-all duration-300",
          "hover:scale-105"
        )}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700" />
        )}
      </button>
    </>
  );
};