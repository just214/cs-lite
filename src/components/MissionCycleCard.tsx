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
    <p className="grid place-items-center display-text text-cs-pink mb-8 text-4xl md:text-6xl p-3 rounded-xl max-w-5xl mx-auto h-24 md:h-auto border-2 border-cs-pink">
      <span key={currentIndex} className="animate-fade">
        {currentItem}
      </span>
    </p>
  );
}
