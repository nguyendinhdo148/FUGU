// src/components/eventtab/EventStats.jsx
import React from "react";

export const EventStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};