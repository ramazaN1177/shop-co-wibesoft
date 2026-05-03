"use client";

import { useEffect, useState } from "react";

interface Review {
  _id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const FullStar = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0.148438L12.93 6.08844L19.5 7.04844L14.75 11.6784L15.87 18.2184L10 15.1284L4.13 18.2184L5.25 11.6784L0.5 7.04844L7.07 6.08844L10 0.148438Z" fill="#FFC633"/>
  </svg>
);

const HalfStar = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0.148438L12.93 6.08844L19.5 7.04844L14.75 11.6784L15.87 18.2184L10 15.1284L4.13 18.2184L5.25 11.6784L0.5 7.04844L7.07 6.08844L10 0.148438Z" fill="#FFC633" fillOpacity="0.4"/>
    <path d="M10 0.148438V15.1284L4.13 18.2184L5.25 11.6784L0.5 7.04844L7.07 6.08844L10 0.148438Z" fill="#FFC633"/>
  </svg>
);

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FullStar key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<HalfStar key={i} />);
    }
  }
  return stars;
}

export default function DetailComment() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("https://fakestoreapiserver.reactbd.org/api/comments");
        const result = await response.json();
        
        // API yapısı: { data: [...] } şeklinde geliyor
        const mappedReviews = result.data.slice(0, 6).map((item: any) => {
          // E-posta adresinden kullanıcı adı oluştur (@ öncesi, ilk harf büyük + nokta)
          const emailName = item.email.split("@")[0];
          const displayName = emailName.charAt(0).toUpperCase() + emailName.slice(1) + ".";

          return {
            _id: item.id,
            user: displayName,
            comment: item.body.replace(/\n/g, " "),
            rating: 5,
            date: `August ${14 + (item.id % 10)}, 2023`, // Biraz çeşitlilik olsun diye id'ye göre gün verdik
          };
        });

        setReviews(mappedReviews);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full font-satoshi">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-[20px] md:text-[24px] font-bold text-black">All Reviews</h2>
          <span className="text-black/60 text-[14px] md:text-[16px]">({reviews.length})</span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Filter Button */}
          <button className="w-10 md:w-12 h-10 md:h-12 flex items-center justify-center bg-[#F0F0F0] rounded-full hover:bg-black/5 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 5H21M4 5H7M7 5C7 6.65685 8.34315 8 10 8C11.6569 8 13 6.65685 13 5M7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5M17 12H21M4 12H13M13 12C13 13.6569 14.3431 15 16 15C17.6569 15 19 13.6569 19 12M13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12M7 19H21M4 19H4M4 19C4 20.6569 5.34315 22 7 22C8.65685 22 10 20.6569 10 19M4 19C4 17.3431 5.34315 16 7 16C8.65685 16 10 17.3431 10 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Sort Dropdown */}
          <button className="hidden md:flex items-center gap-2 bg-[#F0F0F0] px-5 h-12 rounded-full text-[16px] font-medium text-black">
            Latest
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Write Review Button */}
          <button className="bg-black text-white px-5 md:px-8 h-10 md:h-12 rounded-full text-[14px] md:text-[16px] font-medium hover:bg-black/90 transition-colors">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {reviews.map((review) => (
          <div key={review._id} className="p-6 md:p-7 border border-black/10 rounded-[20px] flex flex-col gap-3 relative">
            {/* Options Button */}
            <button className="absolute top-6 right-6 text-black/40">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H5.01M12 12H12.01M19 12H19.01M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM12 12C12 12.5523 11.5523 13 11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11C11.5523 11 12 11.4477 12 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Stars */}
            <div className="flex items-center gap-[6px]">
              {renderStars(review.rating)}
            </div>

            {/* User Name */}
            <div className="flex items-center gap-1">
              <span className="font-bold text-[16px] md:text-[20px] text-black">{review.user}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#01AB31"/>
                <path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Comment */}
            <p className="text-black/60 text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]">
              "{review.comment}"
            </p>

            {/* Date */}
            <span className="mt-2 text-black/60 text-[14px] md:text-[16px] font-medium">
              Posted on {review.date}
            </span>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button className="mt-8 md:mt-12 mx-auto px-10 h-12 md:h-14 border border-black/10 rounded-full text-[14px] md:text-[16px] font-medium text-black hover:bg-black hover:text-white transition-all">
        Load More Reviews
      </button>
    </div>
  );
}
