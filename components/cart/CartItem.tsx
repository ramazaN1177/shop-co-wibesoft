"use client";

import Image from "next/image";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    size: string;
    color: string;
    price: number;
    image: string;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex gap-4 py-6 first:pt-0 last:pb-0">
      {/* Product Image */}
      <div className="relative w-[100px] h-[100px] md:w-[124px] md:h-[124px] bg-[#F0EEED] rounded-[9px] overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-[16px] md:text-[20px] font-bold text-black">
              {item.title}
            </h3>
            <p className="text-[12px] md:text-[14px] text-black">
              <span className="text-black/60 font-normal">Size: </span>
              {item.size}
            </p>
            <p className="text-[12px] md:text-[14px] text-black">
              <span className="text-black/60 font-normal">Color: </span>
              {item.color}
            </p>
          </div>
          {/* Delete Icon */}
          <button className="text-[#FF3333] hover:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8892 7.2L18.0142 19.45C17.9576 20.2431 17.5885 20.9754 16.9806 21.5003C16.3727 22.0252 15.5674 22.3075 14.7258 22.2917H9.27419C8.4326 22.3075 7.62734 22.0252 7.01944 21.5003C6.41154 20.9754 6.04237 20.2431 5.98583 19.45L5.11083 7.2M10.1108 11.2V17.2M13.8892 11.2V17.2M14.5 3.2L13.8442 1.88833C13.659 1.518 13.3664 1.2111 13.0044 1.00767C12.6425 0.804245 12.2285 0.71401 11.8158 0.748333H12.1842C11.7715 0.71401 11.3575 0.804245 10.9956 1.00767C10.6336 1.2111 10.341 1.518 10.1558 1.88833L9.5 3.2M3.5 5.2H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-end">
          <span className="text-[20px] md:text-[24px] font-bold text-black">
            ${item.price}
          </span>
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 bg-[#F0F0F0] px-4 py-2 rounded-full h-[36px] md:h-[44px]">
            <button className="text-[20px] md:text-[24px] text-black hover:text-black/60 transition-colors">
              -
            </button>
            <span className="text-[14px] md:text-[16px] font-medium min-w-[12px] text-center">
              {item.quantity}
            </span>
            <button className="text-[20px] md:text-[24px] text-black hover:text-black/60 transition-colors">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
