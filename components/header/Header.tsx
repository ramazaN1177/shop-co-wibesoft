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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
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
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="#" className="text-black font-satoshi hover:opacity-80">On Sale</Link>
            <Link href="#" className="text-black font-satoshi hover:opacity-80">New Arrivals</Link>
            <Link href="#" className="text-black font-satoshi hover:opacity-80">Brands</Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-[577px] h-[48px] bg-[#F0F0F0] rounded-full px-4 items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="black" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 22L20 20" stroke="black" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 22L20 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <Link href="/cart">
              {/* Cart Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link href="/profile">
              {/* User Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-black/10 flex flex-col px-4 pb-4 shadow-lg">
          <Link href="#" className="py-4 border-b border-black/5 text-black font-medium font-satoshi flex items-center justify-between">
            Shop
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="#" className="py-4 border-b border-black/5 text-black font-medium font-satoshi">On Sale</Link>
          <Link href="#" className="py-4 border-b border-black/5 text-black font-medium font-satoshi">New Arrivals</Link>
          <Link href="#" className="py-4 text-black font-medium font-satoshi">Brands</Link>
        </div>
      )}
    </div>
  );
}
