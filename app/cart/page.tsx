"use client";

import Image from "next/image";
import PathComponent from "@/components/PathComponent";
import CartItem from "@/components/cart/CartItem";

const MOCK_ITEMS = [
  {
    id: 1,
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
    quantity: 1,
  },
  {
    id: 3,
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    quantity: 1,
  },
];

export default function CartScreen() {
  const subtotal = 565;
  const discount = 113;
  const deliveryFee = 15;
  const total = 467;

  return (
    <div className="flex flex-col w-full pb-20 font-satoshi">
      {/* Breadcrumb */}
      <PathComponent items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-16 mt-6 md:mt-8">
        <h1 className="text-[32px] md:text-[40px] font-bold font-integral text-black mb-6 md:mb-8 uppercase">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Side - Cart Items */}
          <div className="flex-1 flex flex-col border border-black/10 rounded-[20px] p-4 md:p-6 divide-y divide-black/10">
            {MOCK_ITEMS.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Right Side - Order Summary */}
          <div className="w-full lg:w-[505px] border border-black/10 rounded-[20px] p-5 md:p-6 flex flex-col gap-6 h-fit">
            <h2 className="text-[20px] md:text-[24px] font-bold text-black">
              Order Summary
            </h2>

            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <span className="text-[16px] md:text-[20px] text-black/60 font-normal">Subtotal</span>
                <span className="text-[16px] md:text-[20px] font-bold text-black">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[16px] md:text-[20px] text-black/60 font-normal">Discount (-20%)</span>
                <span className="text-[16px] md:text-[20px] font-bold text-[#FF3333]">-${discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[16px] md:text-[20px] text-black/60 font-normal">Delivery Fee</span>
                <span className="text-[16px] md:text-[20px] font-bold text-black">${deliveryFee}</span>
              </div>
            </div>

            <div className="pt-5 border-t border-black/10 flex justify-between items-center">
              <span className="text-[16px] md:text-[20px] text-black font-normal">Total</span>
              <span className="text-[20px] md:text-[24px] font-bold text-black">${total}</span>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-1">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7H15M9 11H15M9 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-[#F0F0F0] rounded-full pl-12 pr-4 h-12 text-[14px] md:text-[16px] outline-none"
                />
              </div>
              <button className="bg-black text-white px-6 md:px-8 h-12 rounded-full text-[14px] md:text-[16px] font-medium hover:bg-black/90 transition-all">
                Apply
              </button>
            </div>

            <button className="w-full bg-black text-white h-[60px] rounded-full text-[16px] font-medium flex items-center justify-center gap-3 hover:bg-black/90 transition-all">
              Go to Checkout
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
