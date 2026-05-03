import React from "react";

interface CommentCardProps {
  name: string;
  text: string;
  rating: number;
  verified: boolean;
}

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 0.5L12.2 5.98L18.24 6.86L13.87 11.12L14.9 17.13L9.5 14.29L4.1 17.13L5.13 11.12L0.76 6.86L6.8 5.98L9.5 0.5Z" fill="#FFC633"/>
  </svg>
);

const VerifiedCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#01AB31"/>
    <path d="M16.3316 8.35107L10.3951 14.887L7.85461 12.3465L6.66602 13.5351L10.5139 17.383L17.639 9.65851L16.3316 8.35107Z" fill="white"/>
  </svg>
);

export default function CommentCard({ name, text, rating, verified }: CommentCardProps) {
  return (
    <div className="flex flex-col justify-between gap-[14px] p-[24px] md:p-[28px] rounded-[20px] border border-black/10 min-w-[350px] md:min-w-[400px] h-full shrink-0">
      <div className="flex flex-col gap-[14px]">
        {/* Stars */}
        <div className="flex items-center gap-[6.5px]">
          {[...Array(5)].map((_, index) => (
            <div key={index} className={index >= rating ? "opacity-40" : ""}>
              <StarIcon />
            </div>
          ))}
        </div>
        
        {/* Name and Checkmark */}
        <div className="flex items-center gap-[4px]">
          <h3 className="font-bold text-[20px] leading-[22px] text-black">
            {name}
          </h3>
          {verified && <VerifiedCheck />}
        </div>
        
        {/* Text */}
        <p className="text-black/60 text-[16px] leading-[22px]">
          "{text}"
        </p>
      </div>
    </div>
  );
}
