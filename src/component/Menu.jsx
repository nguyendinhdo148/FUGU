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
    name: "Set Menu Premium",
    price: "1.000.000 VNĐ",
    image: "/setmenu/1.jpg",
    color: "from-amber-900 to-amber-700",
    promoTag: "Special offers",
    
  },
  {
    id: 2,
    name: "Set Menu Deluxe",
    price: "2.000.000 VNĐ",
    image: "/setmenu/2.jpg",
    color: "from-rose-900 to-rose-700",
    promoTag: "Premium Experience",
    
  }
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
          <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-lg w-48 mx-auto mb-8 animate-pulse"></div>
          
          {/* Categories Skeleton */}
          <div className="flex overflow-x-auto gap-3 mb-8 pb-4">
            {[1,2,3,4,5,6,7,8,9].map((item) => (
              <div key={item} className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-full w-24 animate-pulse"></div>
            ))}
          </div>

          {/* Menu Items Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg w-3/4 mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded w-2/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl mb-4">🍽️</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover a diverse culinary world with dishes meticulously prepared from the freshest ingredients
          </p>
        </div>

        {/* Banner Carousel */}
        <Banner bannerImages={bannerImages} />

        {/* Happy Hour Special Promotion */}
        <HappyHour drinks={happyHourDrinks} />

        {/* Daily Menu Section - includes both food and drinks */}
        <MenuDaily 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeDrinkCategory={activeDrinkCategory}
          setActiveDrinkCategory={setActiveDrinkCategory}
        />

        {/* Set Menu Section */}
        <SetMenu setMenus={setMenuData} />

        {/* Buffet Packages Section */}
        <Buffet  /> 
      </div>
    </section>
  );
};