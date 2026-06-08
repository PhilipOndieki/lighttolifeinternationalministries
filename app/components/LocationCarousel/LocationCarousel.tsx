"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const locations = [
  { id: 1, name: "Canada", region: "North America", icon: "🍁" },
  { id: 2, name: "United States", region: "North America", icon: "🦅" },
  { id: 3, name: "Rwanda", region: "Central Africa", icon: "🌍" },
  { id: 4, name: "Kenya", region: "East Africa", icon: "🦁" },
  { id: 5, name: "Uganda", region: "East Africa", icon: "🌿" },
  { id: 6, name: "Tanzania", region: "East Africa", icon: "🏔️" },
  { id: 7, name: "South Africa", region: "Southern Africa", icon: "⭐" },
  { id: 8, name: "Zambia", region: "Southern Africa", icon: "✨" },
];

export default function LocationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + locations.length) % locations.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % locations.length);
    setIsAutoPlay(false);
  };

  const visibleLocations = [
    locations[currentIndex],
    locations[(currentIndex + 1) % locations.length],
    locations[(currentIndex + 2) % locations.length],
  ];

  return (
    <div className="w-full bg-gradient-to-r from-slate-900 to-slate-800 h-16 px-4 border-b border-gold/30 shadow-md relative z-40 flex items-center">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex items-center justify-center gap-2 md:gap-4 h-full">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 p-1 rounded-full bg-gold/80 hover:bg-gold transition-colors duration-200 text-slate-900"
            aria-label="Previous location"
          >
            <ChevronLeft size={14} />
          </button>

          {/* Location Display - 3 locations inline */}
          <div className="flex items-center justify-center gap-1 md:gap-3 flex-1 min-w-0">
            {visibleLocations.map((location, index) => (
              <div key={location.id} className="flex items-center gap-1 md:gap-2">
                <div className="text-lg md:text-xl">{location.icon}</div>
                <div className="flex flex-col gap-0 min-w-0">
                  <h3 className="text-xs md:text-sm font-semibold text-gold leading-none truncate">
                    {location.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-none truncate">
                    {location.region}
                  </p>
                </div>
                {index < 2 && <span className="text-slate-500 mx-0.5 md:mx-1">|</span>}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="flex-shrink-0 p-1 rounded-full bg-gold/80 hover:bg-gold transition-colors duration-200 text-slate-900"
            aria-label="Next location"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
