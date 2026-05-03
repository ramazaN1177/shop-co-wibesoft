"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  _id: number;
  title: string;
  price: number;
  oldPrice?: string;
  description: string;
  category: string;
  type: string;
  image: string;
  rating: number;
  size: string[];
  brand: string;
  stock: number;
  discountedPrice?: number;
}

interface DetailPageComponentProps {
  product: Product;
}

export default function DetailPageComponent({ product }: DetailPageComponentProps) {
  // API'den tek görsel geliyor, farklı açılar simüle etmek için aynı görseli kullanıyoruz
  const images = [product.image, product.image, product.image];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
      {/* Sol Taraf - Ürün Görselleri */}
      <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-[14px] w-full lg:w-[58%]">
        {/* Thumbnail Görseller */}
        <div className="flex lg:flex-col gap-3 lg:gap-[14px] overflow-x-auto lg:overflow-x-visible no-scrollbar">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative flex-shrink-0 w-[112px] h-[106px] lg:w-[152px] lg:h-[168px] rounded-[20px] overflow-hidden bg-[#F0EEED] transition-all duration-300 ${
                selectedImage === index
                  ? "ring-2 ring-black"
                  : "ring-1 ring-black/5 hover:ring-black/20"
              }`}
            >
              <Image
                src={img}
                alt={`${product.title} - Görsel ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 112px, 152px"
              />
            </button>
          ))}
        </div>

        {/* Ana Büyük Görsel */}
        <div className="relative w-full aspect-[444/530] lg:flex-1 rounded-[20px] overflow-hidden bg-[#F0EEED]">
          <Image
            src={images[selectedImage]}
            alt={product.title}
            fill
            className="object-cover transition-all duration-500 ease-in-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Sağ Taraf - Ürün Bilgileri (sonraki aşamada doldurulacak) */}
      <div className="flex-1 lg:w-[42%]">
        {/* Placeholder - sonraki commit'te doldurulacak */}
      </div>
    </div>
  );
}
