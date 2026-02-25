// src/components/eventtab/EventCategories.jsx
import React from "react";
import { eventCategories } from "./data/eventsData";

export const EventCategories = ({ activeEvent, setActiveEvent }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {eventCategories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => setActiveEvent(category.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 min-w-[200px] ${
              activeEvent === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-xl transform scale-105`
                : "bg-card border border-border text-foreground hover:bg-secondary"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{category.label}</span>
            <span className={`ml-auto px-2 py-1 text-xs rounded-full ${
              activeEvent === category.id ? 'bg-white/20' : 'bg-secondary'
            }`}>
              {category.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};