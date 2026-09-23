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

const HOME_SEO = {
  title: "Maxim Saigon | Asian-European Cuisine & Bar in Ho Chi Minh City",
  description:
    "Maxim Saigon is a premium Asian-European restaurant and bar in District 1, Ho Chi Minh City, serving refined cuisine, live music, cocktails, and private dining experiences.",
  url: "https://www.maximsaigon.vn/",
  image: "https://www.maximsaigon.vn/banner/1.jpg",
};

export const Home = () => {
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  useEffect(() => {
    const setMeta = (selector, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${selector}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, selector);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    document.title = HOME_SEO.title;
    setMeta("description", HOME_SEO.description);
    setMeta("og:title", HOME_SEO.title, true);
    setMeta("og:description", HOME_SEO.description, true);
    setMeta("og:url", HOME_SEO.url, true);
    setMeta("og:image", HOME_SEO.image, true);
    setMeta("twitter:title", HOME_SEO.title);
    setMeta("twitter:description", HOME_SEO.description);
    setMeta("twitter:image", HOME_SEO.image);

    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />

      <Navbar toggleFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />

      {/* ✅ main nổi lên trên StarBackground + SEO semantic */}
      <main
        className="relative z-10 flex flex-col w-full pt-24 md:pt-28"
        itemScope
        itemType="https://schema.org/WebPage"
        aria-label="Maxim Saigon - Asian-European Cuisine & Bar tại Sài Gòn"
      >
        {/* SEO: Hidden semantic info cho main content */}
        <meta itemProp="name" content="Maxim Saigon - Asian-European Cuisine & Bar" />
        <meta
          itemProp="description"
          content="Maxim Saigon - Nhà hàng Á Âu & Bar cao cấp tại Quận 1, Sài Gòn. Thực đơn Á Âu fusion, live music mỗi đêm, hơn 100 loại rượu vang & cocktail. Đặt bàn: 085 587 3979"
        />
        <meta itemProp="inLanguage" content="en" />

        <Introduce />
        <Menu />
        <Table />
        <Event />
        <EntertainmentShow />
      </main>

      <Footer />
    </div>
  );
};