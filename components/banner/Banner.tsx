import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center relative">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8 z-10 pt-4 md:pt-0 px-4 md:pl-16 md:pr-0">
          <div className="relative">
            <h1 className="text-[32px] sm:text-[40px] md:text-[64px] font-bold font-integral leading-[1.1] md:leading-[1] text-black uppercase max-w-[577px]">
              Find Clothes That Matches Your Style
            </h1>
            {/* Right Vector (Desktop) */}
            <Image 
              src="/Banner/Vector.png" 
              alt="Star" 
              width={104} 
              height={104} 
              className="hidden md:block absolute -top-2 left-[1155px] w-[104px] h-[104px] animate-pulse"
            />
          </div>
          
          <div className="relative">
            <p className="text-black/60 font-satoshi text-sm md:text-[16px] md:leading-[22px] max-w-[545px]">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            {/* Left Vector (Desktop) */}
            <Image 
              src="/Banner/Vector.png" 
              alt="Star" 
              width={56} 
              height={56} 
              className="hidden md:block absolute -top-4 left-[580px] w-[56px] h-[56px] animate-pulse opacity-80"
            />
          </div>
          
          <button className="bg-black text-white rounded-full py-4 px-12 w-full md:w-max font-satoshi font-medium mt-2 hover:bg-black/80 transition-all duration-300 active:scale-95">
            Shop Now
          </button>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:flex md:items-center justify-items-center md:justify-start gap-y-6 gap-x-4 md:gap-8 mt-6 md:mt-8 pb-10 md:pb-0">
            <div className="flex flex-col">
              <span className="text-2xl md:text-[40px] font-bold text-black">200+</span>
              <span className="text-xs md:text-sm text-black/60 font-satoshi">International Brands</span>
            </div>
            <div className="w-[1px] h-10 md:h-12 bg-black/10 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-[40px] font-bold text-black">2,000+</span>
              <span className="text-xs md:text-sm text-black/60 font-satoshi">High-Quality Products</span>
            </div>
            <div className="w-[1px] h-10 md:h-12 bg-black/10 hidden md:block"></div>
            <div className="flex flex-col col-span-2 md:col-span-1 text-center md:text-left">
              <span className="text-2xl md:text-[40px] font-bold text-black">30,000+</span>
              <span className="text-xs md:text-sm text-black/60 font-satoshi">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full md:w-1/2 relative h-[448px] sm:h-[500px] md:h-[663px] mt-4 md:mt-0 md:pr-16">
          {/* Desktop Image */}
          <Image 
            src="/Banner/Banner.png" 
            alt="Banner Models" 
            fill
            className="hidden md:block object-cover object-right-top"
            priority
          />
          {/* Mobile Image */}
          <Image 
            src="/Banner/Banner-2.png" 
            alt="Banner Models" 
            fill
            className="md:hidden object-cover object-bottom"
            priority
          />
          
          {/* Mobile Star Vectors */}
          <Image 
            src="/Banner/Vector.png" 
            alt="Star" 
            width={44} 
            height={44} 
            className="md:hidden absolute top-4 right-4 w-11 animate-pulse"
          />
          <Image 
            src="/Banner/Vector.png" 
            alt="Star" 
            width={32} 
            height={32} 
            className="md:hidden absolute top-[40%] left-6 w-8 opacity-70 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}


