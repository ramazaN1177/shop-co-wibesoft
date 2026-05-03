import Image from "next/image";
import Link from "next/link";

export default function DressStyleComponent() {
    const styles = [
        { name: "Casual", href: "/casual", src: "/DresssStyle/casual.png", width: "md:w-[40%]" },
        { name: "Formal", href: "/formal", src: "/DresssStyle/formal.png", width: "md:w-[60%]" },
        { name: "Party", href: "/party", src: "/DresssStyle/party.png", width: "md:w-[60%]" },
        { name: "Gym", href: "/gym", src: "/DresssStyle/gym.png", width: "md:w-[40%]" },
    ];

    return (
        <section className="w-full mt-8 md:mt-12 mb-20 px-4 md:px-0">
            <div className="w-full bg-[#F0F0F0] rounded-[20px] md:rounded-[40px] px-6 md:px-16 py-10 md:py-[70px]">
                <h2 className="text-[32px] md:text-[48px] font-bold font-integral text-black text-center leading-[1.1] mb-8 md:mb-[64px] uppercase">
                    BROWSE BY DRESS STYLE
                </h2>

                <div className="grid grid-cols-1 md:flex md:flex-wrap gap-4 md:gap-5">
                    {styles.map((style, index) => (
                        <Link
                            key={index}
                            href={style.href}
                            className={`relative w-full ${style.width} h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group transition-all duration-300 hover:shadow-lg`}
                        >
                            <Image
                                src={style.src}
                                alt={`${style.name} Style`}
                                fill
                                className="object-cover object-left-top md:object-right-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

