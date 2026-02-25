// src/components/menutab/tableData.js
export const tableImages = {
  // Private Rooms (VIP Rooms)
  "VIP2": "/table_vip2/1.jpg",
  "VIP1": "/table_vip1/1.jpg",
  "VIP3.1": "/table_vip3/3.jpg",
  "VIP3.2": "/table_vip3/2.jpg",
  "VIP3.3": "/table_vip3/1.jpg",
  
  // Regular Tables - A Series
  "A1": "/table_a/1.jpg",
  "A2": "/table_a/2.jpg",
  "A3": "/table_a/3.jpg",
  "A4": "/table_a/4.jpg",
  "A5": "/table_a/4.jpg",
  "A6": "/table_a/4.jpg",
  
  // Regular Tables - B Series
  "B1": "/table_b/3.jpg",
  "B2": "/table_b/3.jpg",
  "B3": "/table_b/3.jpg",
  "B4": "/table_b/1.jpg",
  "B5": "/table_b/1.jpg",
  "B6": "/table_b/1.jpg",
  "B7": "/table_b/2.jpg",
  "B8": "/table_b/2.jpg",
  "B9": "/table_b/2.jpg",
  "B10": "/table_b/2.jpg",
  
  // Regular Tables - C Series
  "C1": "/table_c/1.jpg",
  "C2": "/table_c/2.jpg",
  "C3": "/table_c/3.jpg",
  "C4": "/table_c/4.jpg",
  "C5": "/table_c/5.jpg",
  
  // Special Areas
  "WC_LADY": "/tables/lady-restroom.jpg",
  "WC_GENTLEMAN": "/tables/gentleman-restroom.jpg",
};

export const tableData = [
  // ===== PRIVATE ROOMS (VIP Rooms) =====
  { 
    id: "VIP2", 
    name: "VIP 2", 
    type: "private-room", 
    capacity: "18-20 persons", 
    position: { top: "7%", left: "21.3%" },
    description: "Luxury private room with exclusive amenities, perfect for large gatherings and special celebrations.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "VIP1", 
    name: "VIP 1", 
    type: "private-room", 
    capacity: "6-10 persons", 
    position: { top: "7%", right: "23.3%" },
    description: "Elegant private room offering privacy and premium dining experience with panoramic views.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  
  // ===== VIP TABLES =====
  { 
    id: "VIP3.1", 
    name: "VIP 3.1", 
    type: "vip", 
    capacity: "4-6 persons", 
    position: { bottom: "13.4%", left: "35%" },
    description: "Premium VIP seating near the entertainment area with excellent service.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "VIP3.2", 
    name: "VIP 3.2", 
    type: "vip", 
    capacity: "4-6 persons", 
    position: { bottom: "13.4%", left: "46.5%" },
    description: "Comfortable VIP seating in a semi-private setting.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "VIP3.3", 
    name: "VIP 3.3", 
    type: "vip", 
    capacity: "4-6 persons", 
    position: { bottom: "14.1%", left: "57.3%" },
    description: "VIP table with optimal view of the main stage area.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },

  // ===== B SERIES (xung quanh line decor) =====
  { 
    id: "B7", 
    name: "B7", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "18%", left: "39.8%" },
    description: "Cozy seating for intimate moments.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B6", 
    name: "B6", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "18%", left: "45.5%" },
    description: "Perfect for couples seeking intimate dining experience.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B5", 
    name: "B5", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "18%", left: "51%" },
    description: "Intimate two-person table with comfortable seating.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B4", 
    name: "B4", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "26%", right: "41%" },
    description: "Quiet corner seating away from the main area.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B3", 
    name: "B3", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "36%", right: "41%" },
    description: "Standard two-person table with excellent service.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B2", 
    name: "B2", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "46%", right: "41%" },
    description: "Comfortable duo seating perfect for conversations.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B1", 
    name: "B1", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "56%", right: "41%" },
    description: "Intimate dining spot with good ambiance.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B8", 
    name: "B8", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "27%", left: "36.5%" },
    description: "Cozy corner table with privacy.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B9", 
    name: "B9", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "39%", left: "36.5%" },
    description: "Private two-seater perfect for quiet dinners.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "B10", 
    name: "B10", 
    type: "regular", 
    capacity: "0-2 persons", 
    position: { top: "50%", left: "36.5%" },
    description: "Intimate seating area with comfortable chairs.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },

  // ===== A SERIES (bên phải) =====
  { 
    id: "A4", 
    name: "A4", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "22.4%", right: "23%" },
    description: "Family-sized table perfect for group gatherings.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "A3", 
    name: "A3", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "35.5%", right: "10%" },
    description: "Group dining table with comfortable spacing.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "A5", 
    name: "A5", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "39.7%", right: "23%" },
    description: "Medium group table with excellent accessibility.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "A2", 
    name: "A2", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "53%", right: "10%" },
    description: "Spacious 6-person table for family dinners.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "A6", 
    name: "A6", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "57%", right: "23%" },
    description: "Comfortable group seating with good lighting.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "A1", 
    name: "A1", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "70.5%", right: "10%" },
    description: "Large family table near the entrance area.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },

  // ===== C SERIES (bên trái) =====
  { 
    id: "C4", 
    name: "C4", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "29%", left: "8%" },
    description: "Quiet group table away from main traffic.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "C3", 
    name: "C3", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "23.5%", left: "21%" },
    description: "Medium-sized table with comfortable seating.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "C2", 
    name: "C2", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "42.9%", left: "21%" },
    description: "Group dining area with good ambiance.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "C5", 
    name: "C5", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "51.7%", left: "8%" },
    description: "Family table near entrance for easy access.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },
  { 
    id: "C1", 
    name: "C1", 
    type: "regular", 
    capacity: "4-6 persons", 
    position: { top: "63.7%", left: "21%" },
    description: "Large table for groups and celebrations.",
    note: "Note: Floral decorations shown are for demonstration only. Actual decorations require purchasing a decor package."
  },

  // ===== Special Areas =====
  { 
    id: "WC_LADY", 
    name: "wc", 
    type: "restroom", 
    position: { top: "6%", left: "8%" }, 
    icon: "🚺" 
  },
  { 
    id: "WC_GENTLEMAN", 
    name: "wc", 
    type: "restroom", 
    position: { top: "6%", right: "10.5%" }, 
    icon: "🚹" 
  },
];

export const getTableColor = (type) => {
  switch(type) {
    case 'private-room': 
      return 'bg-gradient-to-br from-purple-600 to-indigo-700 border-purple-700 hover:from-purple-700 hover:to-indigo-800';
    case 'vip': 
      return 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-600 hover:from-amber-600 hover:to-orange-700';
    case 'regular': 
      return 'bg-gradient-to-br from-blue-500 to-cyan-600 border-blue-600 hover:from-blue-600 hover:to-cyan-700';
    case 'restroom': 
      return 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-600';
    default: 
      return 'bg-gradient-to-br from-gray-500 to-gray-700 border-gray-600';
  }
};

export const getTableTypeLabel = (type) => {
  switch(type) {
    case 'private-room': return 'Private Room';
    case 'vip': return 'VIP Table';
    case 'regular': return 'Regular Table';
    case 'restroom': return 'Restroom';
    default: return 'Table';
  }
};