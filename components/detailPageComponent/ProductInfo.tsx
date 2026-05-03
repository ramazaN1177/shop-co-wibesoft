interface ProductInfoProps {
  title: string;
  rating: number;
  price: number;
  oldPrice?: string;
  discountedPrice?: number;
  description?: string;
}

const FullStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L15.09 7.26L22 8.27L17 13.14L18.18 20.02L12 16.77L5.82 20.02L7 13.14L2 8.27L8.91 7.26L12 1Z" fill="#FFC633"/>
  </svg>
);

const HalfStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L15.09 7.26L22 8.27L17 13.14L18.18 20.02L12 16.77L5.82 20.02L7 13.14L2 8.27L8.91 7.26L12 1Z" fill="#FFC633" fillOpacity="0.4"/>
    <path d="M12 1V16.77L5.82 20.02L7 13.14L2 8.27L8.91 7.26L12 1Z" fill="#FFC633"/>
  </svg>
);

const EmptyStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L15.09 7.26L22 8.27L17 13.14L18.18 20.02L12 16.77L5.82 20.02L7 13.14L2 8.27L8.91 7.26L12 1Z" fill="#FFC633" fillOpacity="0.4"/>
  </svg>
);

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FullStar key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<HalfStar key={i} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }
  return stars;
}

export default function ProductInfo({
  title,
  rating,
  price,
  oldPrice,
  discountedPrice,
  description,
}: ProductInfoProps) {
  const oldPriceNum = oldPrice ? parseFloat(oldPrice) : undefined;
  let discountPercentage: number | undefined;

  if (oldPriceNum && oldPriceNum > price) {
    discountPercentage = Math.round(((oldPriceNum - price) / oldPriceNum) * 100);
  }

  return (
    <div className="flex flex-col gap-3 font-satoshi">
      {/* Ürün Adı */}
      <h1 className="text-[24px] md:text-[40px] font-bold font-integral text-black leading-[1.1] uppercase">
        {title}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-[6px]">
          {renderStars(rating)}
        </div>
        <span className="text-black/60 text-[14px] md:text-[16px]">
          {rating}/<span className="text-black/40">5</span>
        </span>
      </div>

      {/* Fiyat */}
      <div className="flex items-center gap-3 mt-1">
        <span className="font-bold text-[24px] md:text-[32px] text-black leading-none">
          ${price}
        </span>
        {oldPriceNum && oldPriceNum > price && (
          <span className="font-bold text-[24px] md:text-[32px] text-black/30 line-through leading-none">
            ${oldPriceNum}
          </span>
        )}
        {discountPercentage && (
          <span className="bg-[#FF3333]/10 text-[#FF3333] px-[14px] py-[6px] rounded-[62px] text-[12px] md:text-[14px] font-medium">
            -{discountPercentage}%
          </span>
        )}
      </div>

      {/* Açıklama */}
      {description && description.trim() !== "" && (
        <>
          <div className="w-full h-[1px] bg-black/10 mt-3 mb-1" />
          <p className="text-black/60 text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]">
            {description}
          </p>
        </>
      )}
    </div>
  );
}
