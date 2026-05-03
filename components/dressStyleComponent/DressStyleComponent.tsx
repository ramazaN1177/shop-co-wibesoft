import Image from "next/image";
import Link from "next/link";

export default function DressStyleComponent() {
    return (
        <div className="w-full mt-2 md:mt-4 mb-20">
            <div className="w-full bg-[#F0F0F0] rounded-[40px] px-6 md:px-16 py-10 md:py-[70px] flex flex-col items-center">
                <h2 className="text-[32px] md:text-[48px] font-bold font-integral text-black text-center leading-[1.2] mb-8 md:mb-[64px] uppercase">
                    BROWSE BY DRESS STYLE
                </h2>

                <div className="w-full flex flex-col gap-4 md:gap-5">
                    {/* Top Row */}
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-5 h-auto md:h-[289px]">
                        {/* Casual - 40% width */}
                        <Link href="/casual" className="relative w-full md:w-[40%] h-[190px] md:h-full bg-white rounded-[20px] overflow-hidden group">
                            <Image
                                src="/DresssStyle/casual.png"
                                alt="Casual Style"
                                fill
                                className="object-cover object-right-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>

                        {/* Formal - 60% width */}
                        <Link href="/formal" className="relative w-full md:w-[60%] h-[190px] md:h-full bg-white rounded-[20px] overflow-hidden group">
                            <Image
                                src="/DresssStyle/formal.png"
                                alt="Formal Style"
                                fill
                                className="object-cover object-right-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>
                    </div>

                    {/* Bottom Row */}
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-5 h-auto md:h-[289px]">
                        {/* Party - 60% width */}
                        <Link href="/party" className="relative w-full md:w-[60%] h-[190px] md:h-full bg-white rounded-[20px] overflow-hidden group">
                            <Image
                                src="/DresssStyle/party.png"
                                alt="Party Style"
                                fill
                                className="object-cover object-right-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>

                        {/* Gym - 40% width */}
                        <Link href="/gym" className="relative w-full md:w-[40%] h-[190px] md:h-full bg-white rounded-[20px] overflow-hidden group">
                            <Image
                                src="/DresssStyle/gym.png"
                                alt="Gym Style"
                                fill
                                className="object-cover object-right-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
