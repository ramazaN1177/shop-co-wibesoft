import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    discountPercentage?: number;
    image: string;
    rating: number;
  };
}

const FullStar = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 0.5L12.2 5.98L18.24 6.86L13.87 11.12L14.9 17.13L9.5 14.29L4.1 17.13L5.13 11.12L0.76 6.86L6.8 5.98L9.5 0.5Z" fill="#FFC633"/>
  </svg>
);

const HalfStar = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 0.5L12.2 5.98L18.24 6.86L13.87 11.12L14.9 17.13L9.5 14.29L4.1 17.13L5.13 11.12L0.76 6.86L6.8 5.98L9.5 0.5Z" fill="#FFC633" fillOpacity="0.4"/>
    <path d="M9.5 0.5V14.29L4.1 17.13L5.13 11.12L0.76 6.86L6.8 5.98L9.5 0.5Z" fill="#FFC633"/>
  </svg>
);

const EmptyStar = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 0.5L12.2 5.98L18.24 6.86L13.87 11.12L14.9 17.13L9.5 14.29L4.1 17.13L5.13 11.12L0.76 6.86L6.8 5.98L9.5 0.5Z" fill="#FFC633" fillOpacity="0.4"/>
  </svg>
);

export default function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
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
    return <div className="flex items-center gap-[4px]">{stars}</div>;
  };

  return (
    <Link href={`/product/${product.id}`} className="flex flex-col gap-[16px] cursor-pointer group">
      {/* Resim Kutusu */}
      <div className="w-full aspect-[295/298] relative bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center">
        {/* Ürün resimleri transparan arka planlı olmalıdır */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-[20px] mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      {/* Ürün Bilgileri */}
      <div className="flex flex-col gap-[8px]">
        <h3 className="font-bold text-[20px] leading-tight text-black truncate">
          {product.name}
        </h3>
        
        {/* Değerlendirme */}
        <div className="flex items-center gap-[10px]">
          {renderStars(product.rating)}
          <span className="text-black/60 text-[14px] leading-[19px]">{product.rating}/5</span>
        </div>
        
        {/* Fiyat ve İndirim */}
        <div className="flex items-center gap-[10px]">
          <span className="font-bold text-[24px] leading-[32px] text-black">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="font-bold text-[24px] leading-[32px] text-black/40 line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.discountPercentage && (
            <span className="bg-[#FF3333]/10 text-[#FF3333] px-[14px] py-[6px] rounded-[62px] text-[12px] font-medium leading-[16px]">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
