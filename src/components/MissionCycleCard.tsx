"use client";

import { useEffect, useState } from "react";

const values = [
  "Food is a right!",
  "Helping you rescue food waste",
  "Helping you fight injustice",
  "Helping you end hunger",
  "Helping you spread compassion",
  "Helping you support your community",
];

export function MissionCycleCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((idx) => (idx + 1 >= values.length ? 0 : idx + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = values[currentIndex];
  return (
    <p className="text-cs-pink grid place-items-center display-text mb-8 text-4xl md:text-6xl rounded-xl p-3 max-w-6xl mx-auto h-24 md:h-auto border-4 border-color">
      <span key={currentIndex} className="animate-fade -mt-1 md:mt-2">
        {currentItem}
      </span>
    </p>
  );
}
