"use client";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  // Kullanıcının istediği standart bedenler
  const displaySizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <div className="flex flex-col gap-4 font-satoshi">
      <div className="w-full h-[1px] bg-black/10" />

      <span className="text-black/60 text-[14px] md:text-[16px]">Choose Size</span>

      <div className="flex flex-wrap gap-3">
        {displaySizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`px-6 py-3 rounded-full text-[14px] md:text-[16px] transition-all duration-200 border ${
              selectedSize === size
                ? "bg-black text-white border-black"
                : "bg-[#F0F0F0] text-black/60 border-transparent hover:border-black/20"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
