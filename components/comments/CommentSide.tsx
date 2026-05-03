"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CommentCard from "./CommentCard";

export interface CommentData {
    id: number;
    name: string;
    text: string;
    rating: number;
    verified: boolean;
}

interface CommentSideProps {
    comments: CommentData[];
}

export default function CommentSide({ comments }: CommentSideProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full flex flex-col gap-[24px] md:gap-[40px] overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 px-4 md:px-0">
                <h2 className="text-[32px] md:text-[48px] font-bold font-integral text-black uppercase leading-[1.1]">
                    OUR HAPPY CUSTOMERS
                </h2>

                <div className="flex items-center gap-[16px]">
                    <button
                        onClick={scrollLeft}
                        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] flex items-center justify-center hover:opacity-70 transition-opacity"
                        aria-label="Previous reviews"
                    >
                        <ArrowLeft className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-black" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] flex items-center justify-center hover:opacity-70 transition-opacity"
                        aria-label="Next reviews"
                    >
                        <ArrowRight className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-black" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-[20px] overflow-x-auto snap-x snap-mandatory px-4 md:px-0 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {comments.map((comment) => (
                    <div key={comment.id} className="snap-center">
                        <CommentCard
                            name={comment.name}
                            text={comment.text}
                            rating={comment.rating}
                            verified={comment.verified}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
