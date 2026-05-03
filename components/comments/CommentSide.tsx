"use client";

import { useRef, useState, useEffect, useCallback } from "react";
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paddingLeft, setPaddingLeft] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [maxIndex, setMaxIndex] = useState(0);

    useEffect(() => {
        const updateCardsToShow = () => {
            const val = window.innerWidth < 768 ? 1 : 3;
            setCardsToShow(val);
            setMaxIndex(Math.max(0, comments.length - val));
        };
        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => window.removeEventListener("resize", updateCardsToShow);
    }, [comments.length]);

    // Calculate the left padding so the first card aligns with content area
    const calcPadding = useCallback(() => {
        const contentMaxWidth = 1312;
        const vw = window.innerWidth;
        // Content area is centered, so padding from viewport edge = (vw - contentWidth) / 2
        const contentWidth = Math.min(contentMaxWidth, vw - (vw >= 768 ? 128 : 32));
        const pad = Math.max(0, (vw - contentWidth) / 2);
        setPaddingLeft(pad);
        return pad;
    }, []);

    const scrollToIndex = useCallback((index: number) => {
        if (!scrollRef.current) return;
        const firstCard = scrollRef.current.querySelector(".comment-card-slide");
        if (!firstCard) return;
        
        const cardWidth = firstCard.clientWidth;
        const gap = 20;
        
        scrollRef.current.scrollTo({
            left: index * (cardWidth + gap),
            behavior: "smooth",
        });
    }, []);

    const handlePrev = () => {
        const newIndex = Math.max(0, currentIndex - 1);
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = Math.min(maxIndex, currentIndex + 1);
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    // Set initial padding and scroll position
    useEffect(() => {
        calcPadding();

        const handleResize = () => {
            calcPadding();
            // Re-scroll to current index on resize
            if (scrollRef.current) {
                const cardWidth = 400;
                const gap = 20;
                scrollRef.current.scrollTo({
                    left: currentIndex * (cardWidth + gap),
                    behavior: "instant",
                });
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [calcPadding, currentIndex]);

    return (
        <div className="comment-carousel-wrapper">
            {/* Header - aligned with content */}
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-16 flex items-center justify-between mb-8 md:mb-10">
                <h2 className="text-[32px] md:text-[48px] font-bold font-integral text-black uppercase leading-[1.1]">
                    OUR HAPPY CUSTOMERS
                </h2>

                <div className="flex items-center gap-[16px]">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] flex items-center justify-center hover:opacity-70 transition-opacity disabled:opacity-30"
                        aria-label="Previous reviews"
                    >
                        <ArrowLeft className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-black" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] flex items-center justify-center hover:opacity-70 transition-opacity disabled:opacity-30"
                        aria-label="Next reviews"
                    >
                        <ArrowRight className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-black" />
                    </button>
                </div>
            </div>

            {/* Full-width carousel with edge blur */}
            <div className="comment-carousel-outer">
                {/* Left blur gradient */}
                <div className="comment-blur-left" />
                {/* Right blur gradient */}
                <div className="comment-blur-right" />

                <div
                    ref={scrollRef}
                    className="comment-carousel-track"
                    style={{
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingLeft}px`,
                    }}
                >
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="comment-card-slide"
                        >
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
        </div>
    );
}
