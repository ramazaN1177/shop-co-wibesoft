"use client";

import { useState } from "react";
import Image from "next/image";
import ProductInfo from "./ProductInfo";
import ColorSelector, { getColorsForType } from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import AddToCart from "./AddToCart";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

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

  const colors = getColorsForType(product.type);

  return (
    <div className="flex flex-col w-full">
      {/* Üst Alan - Görseller ve Bilgiler */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
        {/* Sol Taraf - Ürün Görselleri */}
        <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-[14px]">
          {/* Thumbnail Görseller - 152x168 */}
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

          {/* Ana Büyük Görsel - 444x530 */}
          <div className="relative w-full lg:w-[444px] aspect-[444/530] rounded-[20px] overflow-hidden bg-[#F0EEED]">
            <Image
              src={images[selectedImage]}
              alt={product.title}
              fill
              className="object-cover transition-all duration-500 ease-in-out"
              sizes="(max-width: 1024px) 100vw, 444px"
              priority
            />
          </div>
        </div>

        {/* Sağ Taraf - Ürün Bilgileri */}
        <div className="flex-1 flex flex-col gap-4">
          <ProductInfo
            title={product.title}
            rating={product.rating}
            price={product.price}
            oldPrice={product.oldPrice}
            discountedPrice={product.discountedPrice}
            description={product.description}
          />
          <ColorSelector colors={colors} />
          <SizeSelector sizes={product.size} />
          <AddToCart />
        </div>
      </div>

      {/* Ürün Sekmeleri (Details, Reviews, FAQs) */}
      <ProductTabs />

      {/* Benzer Ürünler (You Might Also Like) */}
      <RelatedProducts />
    </div>
  );
}
