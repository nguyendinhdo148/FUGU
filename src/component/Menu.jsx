import React, { useState, useEffect } from "react";
import { Banner } from "./menutab/Banner";
import { HappyHour } from "./menutab/HappyHour";
import { SetMenu } from "./menutab/SetMenu";
import { Buffet } from "./menutab/Buffet";
import { MenuDaily } from "./menutab/MenuDaily";

export const Menu = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDrinkCategory, setActiveDrinkCategory] = useState("all");

  const bannerImages = [
    "/bubble/1.jpg",
    "/bubble/2.jpg",
    "/bubble/3.jpg",
  ];

  const happyHourDrinks = [
    {
      id: 1,
      name: "Lychi Fizz",
      description: "Refreshing lychee soda with mint and lime",
      happyHourPrice: "89,000 VND",
      originalPrice: "200,000 VND",
      discount: "55% OFF",
      image: "/happy_hour/2.jpg",
      features: ["Fresh lychee", "Mint leaves", "Lime twist", "Sparkling soda"],
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      name: "Mango Japanese",
      description: "Japanese-style mango mocktail with a tropical twist",
      happyHourPrice: "95,000 VND",
      originalPrice: "200,000 VND",
      discount: "53% OFF",
      image: "/happy_hour/2.jpg",
      features: ["Fresh mango", "Japanese spices", "Ice cubes"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 3,
      name: "Edible Sour",
      description: "Unique sour cocktail with edible flower garnish",
      happyHourPrice: "110,000 VND",
      originalPrice: "250,000 VND",
      discount: "56% OFF",
      image: "/happy_hour/3.jpg",
      features: ["Edible flowers", "Citrus mix", "Herbal infusion", "Special glass"],
      color: "from-purple-400 to-violet-500"
    },
    {
      id: 4,
      name: "Youth",
      description: "Vibrant fruit mix with fresh berries and herbs",
      happyHourPrice: "85,000 VND",
      originalPrice: "250,000 VND",
      discount: "66% OFF",
      image: "/happy_hour/4.jpg",
      features: ["Mixed berries", "Fresh herbs", "Berry syrup"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 5,
      name: "Midori Mist",
      description: "Melon liqueur based cocktail with citrus twist",
      happyHourPrice: "99,000 VND",
      originalPrice: "250,000 VND",
      discount: "60% OFF",
      image: "/happy_hour/5.jpg",
      features: ["Melon liqueur", "Citrus mix", "Mint garnish", "Chilled glass"],
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 6,
      name: "Fugu Sangria",
      description: "Premium sangria with exotic fruit infusion",
      happyHourPrice: "125,000 VND",
      originalPrice: "250,000 VND",
      discount: "50% OFF",
      image: "/happy_hour/6.jpg",
      features: ["Red wine base", "Exotic fruits", "Brandy infusion", "Cinnamon stick"],
      color: "from-red-400 to-pink-500"
    },
  ];

  const setMenuData = [
    {
      id: 1,
      price: "1.000.000 VNĐ",
      image: "/setmenu/1.jpg",
      color: "from-amber-900 to-amber-700",
    },
    {
      id: 2,
      price: "1.500.000 VNĐ",
      image: "/setmenu/2.jpg",
      color: "from-rose-900 to-rose-700",
    },
    {
      id: 3,
      price: "1.500.000 VNĐ",
      image: "/setmenu/2..jpg",
      color: "from-amber-900 to-amber-700",
    },
    {
      id: 4,
      price: "1.900.000 VNĐ",
      image: "/setmenu/3.jpg",
      color: "from-rose-900 to-rose-700",
    },
    {
      id: 5,
      price: "1.900.000 VNĐ",
      image: "/setmenu/3..jpg",
      color: "from-amber-900 to-amber-700",
    },
    {
      id: 6,
      price: "2.000.000 VNĐ",
      image: "/setmenu/4.jpg",
      color: "from-rose-900 to-rose-700",
    },
    
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Skeleton loader for mobile
  if (isLoading && isMobile) {
    return (
      <section id="menu" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Skeleton */}
          <div className="h-12 bg-gradient-to-r from-secondary to-secondary/50 rounded-lg w-48 mx-auto mb-8 animate-pulse"></div>
          
          {/* Categories Skeleton */}
          <div className="flex overflow-x-auto gap-3 mb-8 pb-4">
            {[1,2,3,4,5,6,7,8,9].map((item) => (
              <div key={item} className="h-10 bg-gradient-to-r from-secondary to-secondary/50 rounded-full w-24 animate-pulse"></div>
            ))}
          </div>

          {/* Menu Items Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-r from-secondary to-secondary/50 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gradient-to-r from-secondary to-secondary/50 rounded-lg w-3/4 mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-secondary to-secondary/50 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-secondary to-secondary/50 rounded w-2/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Dồn gọn lại */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-3"></div>
            <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase">
              Our New Menu
            </span> 
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif tracking-tight">
            New Menu
          </h3>
        </div>

        {/* Các sections dồn sát nhau */}
        <div className="space-y-12 md:space-y-16">
          {/* Banner Carousel */}
          <Banner bannerImages={bannerImages} />

          {/* Happy Hour Special Promotion */}
          <HappyHour drinks={happyHourDrinks} />

          {/* Daily Menu Section */}
          <MenuDaily 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeDrinkCategory={activeDrinkCategory}
            setActiveDrinkCategory={setActiveDrinkCategory}
          />

          {/* Set Menu Section */}
          <SetMenu setMenus={setMenuData} />

          {/* Buffet Packages Section */}
          <Buffet /> 
        </div>
      </div>
    </section>
  );
};