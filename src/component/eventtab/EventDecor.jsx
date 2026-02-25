// src/components/eventtab/EventDecor.jsx
import React from "react";
import { Package, AlertCircle } from "lucide-react";

export const EventDecor = ({ decorPackages = [] }) => {
  if (!decorPackages || decorPackages.length === 0) {
    return null;
  }

  const noteItem = decorPackages.find(item => item.includes("⚠️"));
  const packageItems = decorPackages.filter(item => !item.includes("⚠️"));

  const parsePackageItem = (item) => {
    const parts = item.split(": ");
    const headerPart = parts[0];
    const description = parts[1] || "";
    
    const emojiMatch = headerPart.match(/^[^\w\s]+/);
    const emoji = emojiMatch ? emojiMatch[0] : "💐";
    const nameAndPrice = emojiMatch ? headerPart.slice(emojiMatch[0].length) : headerPart;
    
    const priceMatch = nameAndPrice.match(/\(([^)]+)\)/);
    const price = priceMatch ? priceMatch[1] : "";
    const name = priceMatch ? nameAndPrice.replace(priceMatch[0], "").trim() : nameAndPrice;

    return { emoji, name, price, description };
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
          <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Decor Packages
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Choose your decoration option
          </p>
        </div>
      </div>

      {/* Packages */}
      <div className="space-y-4 mb-6">
        {packageItems.map((packageItem, idx) => {
          const { emoji, name, price, description } = parsePackageItem(packageItem);
          
          return (
            <div 
              key={idx} 
              className="border border-gray-100 dark:border-gray-800 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{emoji}</span>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {name}
                  </h4>
                </div>
                {price && (
                  <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-md">
                    {price}
                  </span>
                )}
              </div>
              {description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Note */}
      {noteItem && (
        <div className="border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-700 dark:text-amber-300">
              {noteItem.replace("⚠️ ", "")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};