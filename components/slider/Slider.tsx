import Image from "next/image";

export default function Slider() {
  const logos = [
    { src: "/BrandLogos/versace.png", alt: "Versace", width: 166, height: 33 },
    { src: "/BrandLogos/zara.png", alt: "Zara", width: 91, height: 38 },
    { src: "/BrandLogos/gucci.png", alt: "Gucci", width: 156, height: 36 },
    { src: "/BrandLogos/prada.png", alt: "Prada", width: 194, height: 32 },
    { src: "/BrandLogos/calvin.png", alt: "Calvin Klein", width: 206, height: 33 },
  ];

  return (
    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-black h-[122px] flex items-center overflow-hidden mb-8 md:mb-16">
      <div className="flex w-max animate-marquee">
        {/* Original Set */}
        <div className="flex items-center justify-around w-screen min-w-max px-8 md:px-16 gap-10 md:gap-24">
          {logos.map((logo, index) => (
            <Image
              key={`logo-1-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-6 md:h-8 w-auto object-contain"
            />
          ))}
        </div>
        {/* Duplicated Set for Infinite Loop */}
        <div className="flex items-center justify-around w-screen min-w-max px-8 md:px-16 gap-10 md:gap-24">
          {logos.map((logo, index) => (
            <Image
              key={`logo-2-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-6 md:h-8 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
