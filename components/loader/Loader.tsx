"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Wait for the window to load completely
    const handleLoad = () => {
      // Add a slight delay for aesthetic purposes
      setTimeout(() => {
        setIsVisible(false);
        // Remove from DOM after fade animation
        setTimeout(() => setShouldRender(false), 500);
      }, 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Logo Container */}
        <div className="relative overflow-hidden animate-pulse">
          <Image
            src="/Footer/SHOP.CO.png"
            alt="SHOP.CO Loader"
            width={240}
            height={40}
            className={`w-auto h-8 md:h-12 transition-transform duration-1000 ease-out ${
              isVisible ? "scale-100" : "scale-110"
            }`}
            priority
          />
        </div>

        {/* Subtle Loading Line */}
        <div className="w-48 h-[2px] bg-black/5 rounded-full overflow-hidden">
          <div className="w-full h-full bg-black origin-left animate-loader-progress"></div>
        </div>
      </div>
    </div>
  );
}
