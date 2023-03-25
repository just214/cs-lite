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
    <p className="display-text text-white my-8 text-5xl md:text-6xl bg-cs-pink pb-2 pt-3 rounded-xl max-w-5xl mx-auto">
      <span key={currentIndex} className="animate-fade">
        {currentItem}
      </span>
    </p>
  );
}
