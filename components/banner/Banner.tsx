import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 -mt-8 bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden mb-8 md:mb-16 px-4 md:px-16">
      <div className="max-w-[1240px] mx-auto w-full flex flex-col md:flex-row items-center relative">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 z-10 pt-4 md:pt-0">
          <div className="relative">
            <h1 className="text-[36px] md:text-[64px] font-bold font-integral leading-[1] text-black uppercase max-w-[577px]">
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
          
          <button className="bg-black text-white rounded-full py-4 px-12 w-full md:w-max font-satoshi font-medium mt-2 hover:bg-black/80 transition-colors">
            Shop Now
          </button>

          {/* Stats Section */}
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-4 md:gap-8 mt-4 md:mt-8 pb-10 md:pb-0">
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
            <div className="flex flex-col w-full md:w-auto text-center md:text-left mt-4 md:mt-0">
              <span className="text-2xl md:text-[40px] font-bold text-black">30,000+</span>
              <span className="text-xs md:text-sm text-black/60 font-satoshi">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[663px] mt-4 md:mt-0">
          <Image 
            src="/Banner/Banner.png" 
            alt="Banner Models" 
            fill
            className="object-cover object-top md:object-right-top"
            priority
          />
          
          
          {/* Mobile Star Vectors */}
          <Image 
            src="/Banner/Vector.png" 
            alt="Star" 
            width={40} 
            height={40} 
            className="md:hidden absolute top-10 right-4 w-10 animate-pulse"
          />
          <Image 
            src="/Banner/Vector.png" 
            alt="Star" 
            width={32} 
            height={32} 
            className="md:hidden absolute top-1/2 left-4 w-8 opacity-70 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}
