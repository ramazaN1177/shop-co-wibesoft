"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div className="w-full relative z-50">
      {/* Top Black Banner */}
      {isBannerVisible && (
        <div className="bg-black w-full py-2 flex items-center justify-center relative px-4">
          <p className="text-white text-xs sm:text-sm font-satoshi text-center">
            Sign up and get 20% off to your first order.{" "}
            <Link href="#" className="font-medium underline underline-offset-4 hover:text-gray-300 transition-colors">
              Sign Up Now
            </Link>
          </p>
          <button
            onClick={() => setIsBannerVisible(false)}
            className="absolute right-4 md:right-16 text-white hover:text-gray-300 transition-colors hidden sm:block"
          >
            <Image
              src="/TopBar/cross.png"
              alt="Close"
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="w-full bg-white border-b border-black/10 py-5 px-4 md:px-16">
        <div className="max-w-[1240px] mx-auto w-full flex items-center justify-between gap-4 lg:gap-10">

          {/* Left Side: Mobile Menu + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu (Mobile Only) */}
            <button
              className="lg:hidden block"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <Image src="/TopBar/cross.png" alt="Close Menu" width={24} height={24} className="w-6 h-6" />
              ) : (
                <Image src="/TopBar/hamburger.png" alt="Menu" width={24} height={24} className="w-6 h-6" />
              )}
            </button>

            <Link href="/">
              <Image
                src="/Footer/SHOP.CO.png"
                alt="SHOP.CO Logo"
                width={160}
                height={22}
                className="w-auto h-[22px] lg:h-[25px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="#" className="flex items-center gap-1 text-black font-satoshi hover:opacity-80">
              Shop
              <Image src="/TopBar/arrow.png" alt="Arrow" width={16} height={16} className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-black font-satoshi hover:opacity-80">On Sale</Link>
            <Link href="#" className="text-black font-satoshi hover:opacity-80">New Arrivals</Link>
            <Link href="#" className="text-black font-satoshi hover:opacity-80">Brands</Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-[577px] h-[48px] bg-[#F0F0F0] rounded-full px-4 items-center gap-3">
            <Image
              src="/TopBar/searchLogo.png"
              alt="Search"
              width={24}
              height={24}
              className="w-6 h-6 opacity-40"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-transparent outline-none text-black font-satoshi placeholder:text-black/40"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Icon (Mobile Only) */}
            <button className="lg:hidden block">
              <Image
                src="/TopBar/searchLogo.png"
                alt="Search"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>

            <Link href="/cart">
              {/* Cart Icon */}
              <Image src="/TopBar/cartLogo.png" alt="Cart" width={24} height={24} className="w-6 h-6" />
            </Link>

            <Link href="/profile">
              {/* User Icon */}
              <Image src="/TopBar/profile.png" alt="Profile" width={24} height={24} className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-black/10 flex flex-col px-4 pb-4 shadow-lg">
          <Link href="#" className="py-4 border-b border-black/5 text-black font-medium font-satoshi flex items-center justify-between">
            Shop
            <Image src="/TopBar/arrow.png" alt="Arrow" width={16} height={16} className="w-4 h-4 -rotate-90" />
          </Link>
          <Link href="#" className="py-4 border-b border-black/5 text-black font-medium font-satoshi">On Sale</Link>
          <Link href="#" className="py-4 border-b border-black/5 text-black font-medium font-satoshi">New Arrivals</Link>
          <Link href="#" className="py-4 text-black font-medium font-satoshi">Brands</Link>
        </div>
      )}
    </div>
  );
}
