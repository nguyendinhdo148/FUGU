// src/components/eventtab/EventHeader.jsx
import React from "react";

export const EventHeader = () => {
  return (
    <div className="text-center mb-10">
      <div className="inline-block mb-4">
       <div className="inline-block mb-4 md:mb-6">
          <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-3 md:mb-4"></div>
          <span className="text-primary font-medium tracking-wider text-xs md:text-sm uppercase font-inter">
            Restaurant Event
          </span>
        </div>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
        Events Gallery
      </h2>
    </div>
  );
};