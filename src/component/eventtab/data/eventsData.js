// src/components/eventtab/data/eventsData.js
import { Users, Clock, Cake, Award, Utensils, Heart, User } from "lucide-react";

export const eventCategories = [
  { id: "birthday", label: "Birthday Parties", icon: Cake, color: "from-pink-500 to-rose-500", count: 12 },
  { id: "smallparty", label: "Small Gatherings", icon: Heart, color: "from-purple-500 to-indigo-500", count: 25 },
  { id: "yearend", label: "Year End Parties", icon: Award, color: "from-blue-500 to-cyan-500", count: 8 },
  { id: "buffet", label: "Buffet Events", icon: Utensils, color: "from-amber-500 to-orange-500", count: 15 },
  { id: "corporate", label: "Corporate Events", icon: Users, color: "from-emerald-500 to-green-500", count: 10 },
];

export const eventsData = {
  birthday: {
    title: "Birthday Celebrations at FUGU",
    description: "Create unforgettable birthday memories in our sophisticated Japanese-inspired space. Perfect for celebrations of all sizes with personalized service.",
    stats: [
      { icon: Users, label: "Average Guests", value: "15-30" },
      { icon: Clock, label: "Duration", value: "3-4 Hours" },
      { icon: Cake, label: "Cakes Served", value: "50+" },
    ],
    decorPackages: [
      "💐 Basic Flower Package (2,500,000 VND): Fresh flowers for table decoration + Theme balloons",
      "💐 Premium Flower Package (5,500,000 VND): Premium flowers + Backdrop + Multi-color LED lights",
      "💐 Luxury Flower Package (9,800,000 VND): Imported flowers + Professional lighting system",
      "⚠️ Note: You can choose our flower packages or bring your own decor "
    ],
    media: {
      spaceVideo: {
        title: "Birthday Party Space Preview",
        url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
        thumbnail: "/logotab1.jpg",
        description: "See how we transform our space for birthday celebrations"
      },
      eventVideo: {
        title: "Birthday Celebration Highlights",
        url: "https://drive.google.com/file/d/1NCCX5FDE_G7LgsDh2K4jBcwxs6R76BkQ/preview",
        thumbnail: "/logotab1.jpg",
        description: "Highlights from recent birthday parties"
      },
      images: [
        { 
          src: "/logotab1.jpg", 
          title: "Birthday Setup", 
          description: "Beautiful table setup with custom decorations",
          type: "event"
        },
        { 
          src: "/event/1.jpg", 
          title: "Birthday Food Menu", 
          description: "Special birthday food menu packages",
          type: "food-menu"
        },
        { 
          src: "/Party/birthday-drink-menu.jpg", 
          title: "Birthday Drink Menu", 
          description: "Premium drink selections for birthday parties",
          type: "drink-menu"
        },
      ]
    }
  },
  smallparty: {
    title: "Small Gatherings & Special Moments",
    description: "Intimate celebrations for 2-4 people - perfect for romantic dinners, small birthday surprises, and even marriage proposals.",
    stats: [
      { icon: User, label: "Group Size", value: "2-4 People" },
      { icon: Clock, label: "Duration", value: "2-3 Hours" },
      { icon: Heart, label: "Special Moments", value: "100+" },
    ],
    decorPackages: [
      "🌹 Romantic Flower Package (1,200,000 VND): Fresh roses + Scented candles + Silk tablecloth",
      "🌹 Proposal Flower Package (3,500,000 VND): Premium flowers + Photo backdrop + Proposal carpet",
      "🌹 Luxury Flower Package (4,800,000 VND): Imported flowers + Professional lighting",
      "⚠️ Note: You can choose our flower packages or bring your own decor "
    ],
    media: {
      spaceVideo: {
        title: "Intimate Dining Space",
        url: "https://drive.google.com/file/d/VIDEO_ID_SMALL_SPACE/preview",
        thumbnail: "/logotab1.jpg", // Sửa lại đường dẫn
        description: "Private corners for intimate gatherings"
      },
      eventVideo: {
        title: "Special Moments",
        url: "https://drive.google.com/file/d/VIDEO_ID_SMALL_EVENT/preview",
        thumbnail: "/logotab1.jpg", // Sửa lại đường dẫn
        description: "Capturing special moments"
      },
      images: [
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Romantic Setup", 
          description: "Private table setup for couples",
          type: "event"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Intimate Dining Menu", 
          description: "Special menu for small gatherings",
          type: "food-menu"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Premium Drinks", 
          description: "Wine & champagne selections",
          type: "drink-menu"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Proposal Setup", 
          description: "Special arrangement for marriage proposals",
          type: "event"
        },
      ]
    }
  },
  yearend: {
    title: "Year End Corporate Parties",
    description: "Celebrate your company's achievements with our premium year-end party packages. Professional setup with entertainment options.",
    stats: [
      { icon: Users, label: "Capacity", value: "50-120" },
      { icon: Clock, label: "Duration", value: "4-6 Hours" },
      { icon: Award, label: "Events Hosted", value: "30+" },
    ],
    decorPackages: [
      "🏢 Corporate Basic Package (8,500,000 VND): Fresh flowers + Company backdrop",
      "🏢 Corporate Premium Package (15,000,000 VND): Premium flowers + 3D backdrop + Lighting system",
      "🏢 Corporate Luxury Package (25,000,000 VND): Imported flowers + Professional stage setup",
      "⚠️ Note: You can choose our flower packages or bring your own decor "
    ],
    media: {
      spaceVideo: {
        title: "Year-End Party Space",
        url: "https://drive.google.com/file/d/VIDEO_ID_YEAREND_SPACE/preview",
        thumbnail: "/logotab1.jpg", // Sửa lại đường dẫn
        description: "Corporate year-end party setup"
      },
      eventVideo: {
        title: "Year-End Celebration Highlights",
        url: "https://drive.google.com/file/d/VIDEO_ID_YEAREND_EVENT/preview",
        thumbnail: "/logotab1.jpg", // Sửa lại đường dẫn
        description: "Highlights from corporate celebrations"
      },
      images: [
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Corporate Setup", 
          description: "Professional event setup with company branding",
          type: "event"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Corporate Food Menu", 
          description: "Gourmet food selection for corporate events",
          type: "food-menu"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Corporate Drink Menu", 
          description: "Premium beverage packages for corporate clients",
          type: "drink-menu"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Award Ceremony", 
          description: "Employee recognition and awards ceremony",
          type: "event"
        },
      ]
    }
  },
  buffet: {
    title: "Premium Buffet Events",
    description: "Experience our gourmet buffet spreads with live cooking stations and international cuisine selections.",
    stats: [
      { icon: Users, label: "Buffet Style", value: "Live Stations" },
      { icon: Clock, label: "Serving Time", value: "2-3 Hours" },
      { icon: Utensils, label: "Dish Variety", value: "30+" },
    ],
    decorPackages: [
      "🍽️ Buffet Basic Package (5,000,000 VND): Fresh flowers for buffet area + Food signage",
      "🍽️ Buffet Premium Package (10,500,000 VND): Premium flowers + Buffet backdrop + LED lighting",
      "🍽️ Buffet Luxury Package (18,000,000 VND): Imported flowers + Custom decoration concept",
      "⚠️ Note: You can choose our flower packages or bring your own decor "
    ],
    media: {
      spaceVideo: {
        title: "Buffet Setup Preview",
        url: "https://drive.google.com/file/d/VIDEO_ID_BUFFET_SPACE/preview",
        thumbnail: "/logotab1.jpg", // Sửa lại đường dẫn
        description: "Buffet station setup and presentation"
      },
      eventVideo: {
        title: "Buffet Event Experience",
        url: "https://drive.google.com/file/d/VIDEO_ID_BUFFET_EVENT/preview",
        thumbnail: "/logotab1.jpg", // Sửa lại đường dẫn
        description: "Guests enjoying buffet experience"
      },
      images: [
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Buffet Spread", 
          description: "Complete buffet setup with various stations",
          type: "event"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Buffet Food Menu", 
          description: "Complete buffet food selection and pricing",
          type: "food-menu"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Buffet Drink Menu", 
          description: "Beverage packages for buffet events",
          type: "drink-menu"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Live Station", 
          description: "Chef preparing food at live cooking station",
          type: "event"
        },
      ]
    }
  },
  corporate: {
    title: "Corporate Events & Meetings",
    description: "Professional event solutions for meetings, conferences, and corporate gatherings with premium amenities.",
    stats: [
      { icon: Users, label: "Meeting Capacity", value: "20-100" },
      { icon: Clock, label: "Flexible Duration", value: "2-8 Hours" },
      { icon: Award, label: "Business Clients", value: "100+" },
    ],
    decorPackages: [
      "💼 Meeting Basic Package (3,500,000 VND): Fresh flowers for tables + Company signage",
      "💼 Conference Premium Package (8,000,000 VND): Premium flowers + Professional company backdrop",
      "💼 Corporate Luxury Package (15,000,000 VND): Imported flowers + 3D stage setup",
      "⚠️ Note: You can choose our flower packages or bring your own decor "
    ],
    media: {
      spaceVideo: {
        title: "Corporate Meeting Space",
        url: "https://drive.google.com/file/d/VIDEO_ID_CORPORATE_SPACE/preview",
        thumbnail: "/logotab1.jpg", // Sửa lại đường dẫn
        description: "Corporate meeting and conference setup"
      },
      eventVideo: {
        title: "Corporate Event Highlights",
        url: "https://drive.google.com/file/d/VIDEO_ID_CORPORATE_EVENT/preview",
        thumbnail: "/logotab1.jpg", // Sửa lại đường dẫn
        description: "Corporate events and meetings"
      },
      images: [
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Conference Setup", 
          description: "Professional conference room setup",
          type: "event"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Corporate Food Menu", 
          description: "Business lunch and meeting packages",
          type: "food-menu"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Corporate Drink Menu", 
          description: "Beverage options for business meetings",
          type: "drink-menu"
        },
        { 
          src: "/logotab1.jpg", // Sửa lại đường dẫn
          title: "Presentation Setup", 
          description: "AV setup for presentations and meetings",
          type: "event"
        },
      ]
    }
  }
};