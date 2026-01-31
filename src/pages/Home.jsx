import { ThemeToggle } from "@/component/ThemeToggle";
import { StarBackground } from "@/component/StarBackground";
import { Navbar } from "@/component/Navbar";
import { Introduce } from "@/component/Introduce";
import { Menu } from "@/component/Menu";
import { Table } from "@/component/DefaultTables";
import { useEffect } from "react";
import { EntertainmentShow } from "../component/EntertainmentShow";
import { Footer } from "@/component/Footter";
import { useFullscreen } from "@/component/hooks/useFullscreen";
import { Event } from "@/component/Event";

export const Home = () => {
  // Sử dụng hook
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      
      <Navbar toggleFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />

      <main className="flex flex-col w-full pt-32">

        <Introduce />
        <Menu />
        <Table/>
        <Event/>
        <EntertainmentShow />
      </main>

      <Footer/>
    </div>
  );
};