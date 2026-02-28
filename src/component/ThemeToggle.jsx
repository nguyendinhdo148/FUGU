/* eslint-disable react-hooks/set-state-in-effect */
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Kiểm tra theme từ localStorage
    const storedTheme = localStorage.getItem("theme");
    
    // Nếu không có stored theme, mặc định là dark
    if (!storedTheme) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
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
  );
};