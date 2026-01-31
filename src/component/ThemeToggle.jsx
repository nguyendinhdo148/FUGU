import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Kiểm tra theme đã lưu khi component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";

    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark");
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
        <Moon className="h-5 w-5 text-blue-900 dark:text-blue-300" />
      )}
    </button>
  );
};
