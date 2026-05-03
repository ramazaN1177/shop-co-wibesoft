"use client";

import { useState } from "react";

interface ColorSelectorProps {
  colors: string[];
}

const PRODUCT_COLORS: Record<string, string[]> = {
  jacket: ["#4F4631", "#314F4A", "#31344F"],
  "t-shirt": ["#31344F", "#314F4A", "#4F4631"],
  jeans: ["#31344F", "#4F4631", "#314F4A"],
  hoodie: ["#4F4631", "#31344F", "#314F4A"],
  default: ["#4F4631", "#314F4A", "#31344F"],
};

export function getColorsForType(type: string): string[] {
  return PRODUCT_COLORS[type] || PRODUCT_COLORS.default;
}

export default function ColorSelector({ colors }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="flex flex-col gap-4 font-satoshi">
      <div className="w-full h-[1px] bg-black/10" />

      <span className="text-black/60 text-[14px] md:text-[16px]">Select Colors</span>

      <div className="flex items-center gap-4">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedColor(index)}
            className="relative w-[37px] h-[37px] rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ backgroundColor: color }}
            aria-label={`Color ${index + 1}`}
          >
            {selectedColor === index && (
              <svg
                className="absolute inset-0 m-auto"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3334 4L6.00008 11.3333L2.66675 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
