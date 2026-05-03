"use client";

import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

interface ApiProduct {
  _id: number;
  title: string;
  price: number;
  oldPrice?: string;
  image: string;
  rating: number;
}

export default function RelatedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapiserver.reactbd.org/api/products");
        const json = await response.json();
        const productList = json.data || [];
        
        // Rastgele 4 ürün seçelim (veya belirli bir aralık)
        const mappedProducts = productList.slice(4, 8).map((item: ApiProduct) => {
          const originalPrice = item.oldPrice ? parseFloat(item.oldPrice) : undefined;
          let discountPercentage;
          if (originalPrice && originalPrice > item.price) {
            discountPercentage = Math.round(((originalPrice - item.price) / originalPrice) * 100);
          }

          return {
            id: item._id,
            name: item.title,
            price: item.price,
            originalPrice: originalPrice,
            discountPercentage: discountPercentage,
            image: item.image,
            rating: item.rating,
          };
        });

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, []);

  if (loading) return null;

  return (
    <div className="w-full mt-16 md:mt-24 mb-10">
      <h2 className="text-[32px] md:text-[48px] font-bold font-integral text-center mb-8 md:mb-14 text-black uppercase leading-tight">
        You Might Also Like
      </h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
