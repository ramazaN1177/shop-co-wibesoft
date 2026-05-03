export default function Newsletter() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] px-4 md:px-16">
      <div className="bg-black rounded-[20px] py-9 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
        <h2 className="text-white font-integral text-[32px] md:text-[40px] leading-[1.2] max-w-[551px] font-bold uppercase">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="w-full lg:w-[349px] flex flex-col gap-3">
          <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full h-[48px] rounded-full bg-white pl-12 pr-4 text-sm outline-none text-black placeholder:text-black/40 font-satoshi"
            />
          </div>
          <button className="w-full h-[48px] rounded-full bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors font-satoshi">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
