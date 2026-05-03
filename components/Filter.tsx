"use client";

import { useState } from "react";

const CATEGORIES = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
const DRESS_STYLES = ["Casual", "Formal", "Party", "Gym"];
const COLORS = [
  "#00C129", "#F50606", "#F5DD06", "#F57906", "#06CAF5",
  "#063AF5", "#7D06F5", "#F506A4", "#FFFFFF", "#000000"
];
const SIZES = [
  "XX-Small", "X-Small", "Small", "Medium",
  "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"
];

export default function Filter() {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColor, setSelectedColor] = useState("#063AF5");
  const [selectedSize, setSelectedSize] = useState("Large");

  // Accordion states
  const [openSections, setOpenSections] = useState({
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full bg-white border border-black/10 rounded-[20px] p-5 md:p-6 flex flex-col gap-6 font-satoshi">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-black/10">
        <h2 className="text-[20px] font-bold text-black">Filters</h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5H21M4 5H7M7 5C7 6.65685 8.34315 8 10 8C11.6569 8 13 6.65685 13 5M7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5M17 12H21M4 12H13M13 12C13 13.6569 14.3431 15 16 15C17.6569 15 19 13.6569 19 12M13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12M7 19H21M4 19H4M4 19C4 20.6569 5.34315 22 7 22C8.65685 22 10 20.6569 10 19M4 19C4 17.3431 5.34315 16 7 16C8.65685 16 10 17.3431 10 19" stroke="black" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Categories (Always Open or separate logic) */}
      <div className="flex flex-col gap-4 pb-6 border-b border-black/10">
        {CATEGORIES.map((cat) => (
          <div key={cat} className="flex items-center justify-between group cursor-pointer">
            <span className="text-black/60 group-hover:text-black transition-colors">{cat}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black/60">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="flex flex-col gap-5 pb-6 border-b border-black/10">
        <button 
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full"
        >
          <h3 className="text-[20px] font-bold text-black">Price</h3>
          <svg 
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${openSections.price ? "rotate-0" : "rotate-180"}`}
          >
            <path d="M4 10L8 6L12 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {openSections.price && (
          <div className="px-2 animate-fadeIn">
            <div className="relative w-full h-1 bg-[#F0F0F0] rounded-full mt-4">
              <div 
                className="absolute h-full bg-black rounded-full" 
                style={{ 
                  left: `${((priceRange[0]) / 500) * 100}%`, 
                  right: `${100 - ((priceRange[1]) / 500) * 100}%` 
                }} 
              />
              <input
                type="range" min="0" max="500" value={priceRange[0]}
                onChange={(e) => {
                  const val = Math.min(Number(e.target.value), priceRange[1] - 10);
                  setPriceRange([val, priceRange[1]]);
                }}
                className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="range" min="0" max="500" value={priceRange[1]}
                onChange={(e) => {
                  const val = Math.max(Number(e.target.value), priceRange[0] + 10);
                  setPriceRange([priceRange[0], val]);
                }}
                className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-[14px] font-medium text-black">${priceRange[0]}</span>
              <span className="text-[14px] font-medium text-black">${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="flex flex-col gap-5 pb-6 border-b border-black/10">
        <button 
          onClick={() => toggleSection("colors")}
          className="flex items-center justify-between w-full"
        >
          <h3 className="text-[20px] font-bold text-black">Colors</h3>
          <svg 
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${openSections.colors ? "rotate-0" : "rotate-180"}`}
          >
            <path d="M4 10L8 6L12 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {openSections.colors && (
          <div className="grid grid-cols-5 gap-3 animate-fadeIn">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  color === "#FFFFFF" ? "border-black/10" : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke={color === "#FFFFFF" ? "black" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="flex flex-col gap-5 pb-6 border-b border-black/10">
        <button 
          onClick={() => toggleSection("size")}
          className="flex items-center justify-between w-full"
        >
          <h3 className="text-[20px] font-bold text-black">Size</h3>
          <svg 
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${openSections.size ? "rotate-0" : "rotate-180"}`}
          >
            <path d="M4 10L8 6L12 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {openSections.size && (
          <div className="flex flex-wrap gap-2 animate-fadeIn">
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-5 py-2.5 rounded-full text-[14px] transition-all duration-300 ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-[#F0F0F0] text-black/60 hover:bg-black/5"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dress Style */}
      <div className="flex flex-col gap-5 pb-6">
        <button 
          onClick={() => toggleSection("dressStyle")}
          className="flex items-center justify-between w-full"
        >
          <h3 className="text-[20px] font-bold text-black">Dress Style</h3>
          <svg 
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${openSections.dressStyle ? "rotate-0" : "rotate-180"}`}
          >
            <path d="M4 10L8 6L12 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {openSections.dressStyle && (
          <div className="flex flex-col gap-4 animate-fadeIn">
            {DRESS_STYLES.map((style) => (
              <div key={style} className="flex items-center justify-between group cursor-pointer">
                <span className="text-black/60 group-hover:text-black transition-colors">{style}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black/60">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Apply Button */}
      <button className="w-full bg-black text-white py-4 rounded-full text-[16px] font-medium hover:bg-black/90 transition-all mt-2">
        Apply Filter
      </button>
    </div>
  );
}
