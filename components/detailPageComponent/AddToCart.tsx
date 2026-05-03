"use client";

interface AddToCartProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAdd: () => void;
}

export default function AddToCart({ quantity, onIncrement, onDecrement, onAdd }: AddToCartProps) {
  return (
    <div className="flex flex-col gap-4 font-satoshi mt-2">
      <div className="w-full h-[1px] bg-black/10" />

      <div className="flex items-center gap-5">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between w-[110px] md:w-[170px] h-[44px] md:h-[52px] bg-[#F0F0F0] rounded-full px-4 md:px-6">
          <button
            onClick={onDecrement}
            className="text-[20px] md:text-[24px] text-black hover:opacity-70 transition-opacity leading-none"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            &minus;
          </button>
          <span className="text-[14px] md:text-[16px] font-medium text-black">
            {quantity}
          </span>
          <button
            onClick={onIncrement}
            className="text-[20px] md:text-[24px] text-black hover:opacity-70 transition-opacity leading-none"
            aria-label="Increase quantity"
          >
            &#43;
          </button>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={onAdd}
          className="flex-1 h-[44px] md:h-[52px] bg-black text-white rounded-full text-[14px] md:text-[16px] font-medium hover:bg-black/90 transition-colors active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
