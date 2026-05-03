import ProductCard from "../productCard/ProductCard";

interface ApiProduct {
  _id: number;
  title: string;
  price: number;
  oldPrice?: string;
  image: string;
  rating: number;
}

// API'den ürünleri çeken fonksiyon (Sunucu Tarafında Çalışır)
async function getProducts(): Promise<ApiProduct[]> {
  try {
    const res = await fetch(process.env.NEXT_PRODUCTS_API_URL as string, {
      next: { revalidate: 3600 } // 1 saat boyunca önbellekte tutar (hızlı yükleme için)
    });

    if (!res.ok) {
      throw new Error("Ürünler getirilemedi");
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("API Hatası:", error);
    return [];
  }
}

export default async function MainComponent() {
  // Veriyi çekiyoruz
  const apiProducts = await getProducts();

  // API'den gelen veriyi bizim ProductCard bileşeninin beklediği yapıya dönüştürüyoruz
  const formattedProducts = apiProducts.map((p) => {
    const oldPriceNum = p.oldPrice ? parseFloat(p.oldPrice) : undefined;
    let discountPercentage;

    // Eğer eski fiyat varsa ve mevcut fiyattan büyükse indirim oranını hesapla
    if (oldPriceNum && oldPriceNum > p.price) {
      discountPercentage = Math.round(((oldPriceNum - p.price) / oldPriceNum) * 100);
    }

    return {
      id: p._id,
      name: p.title,
      price: p.price,
      originalPrice: oldPriceNum && oldPriceNum > p.price ? oldPriceNum : undefined,
      discountPercentage,
      image: p.image,
      rating: p.rating,
    };
  });

  // İlk 4 ürünü "NEW ARRIVALS" için alıyoruz
  const newArrivals = formattedProducts.slice(0, 4);
  // Sonraki 4 ürünü "TOP SELLING" için alıyoruz
  const topSelling = formattedProducts.slice(4, 8);

  return (
    <div className="w-full flex flex-col gap-[55px] pb-[64px]">
      {/* --- NEW ARRIVALS BÖLÜMÜ --- */}
      <h2 className="text-[32px] md:text-[48px] font-bold font-integral text-black leading-none mt-4 md:mt-8 text-center uppercase">
        NEW ARRIVALS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {newArrivals.map((product) => (
          <ProductCard key={`new-${product.id}`} product={product} />
        ))}
      </div>

      <div className="flex justify-center -mt-[19px]">
        <button className="px-[54px] py-[16px] rounded-[62px] border border-black/10 text-black font-medium text-[16px] leading-[22px] hover:bg-gray-50 transition-colors">
          View All
        </button>
      </div>

      {/* --- AYIRICI ÇİZGİ --- */}
      <div className="w-full">
        <hr className="border-t border-black/10" />
      </div>

      {/* --- TOP SELLING BÖLÜMÜ --- */}
      <h2 className="text-[32px] md:text-[48px] font-bold font-integral text-black leading-none text-center uppercase">
        TOP SELLING
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {topSelling.map((product) => (
          <ProductCard key={`top-${product.id}`} product={product} />
        ))}
      </div>

      <div className="flex justify-center -mt-[19px]">
        <button className="px-[54px] py-[16px] rounded-[62px] border border-black/10 text-black font-medium text-[16px] leading-[22px] hover:bg-gray-50 transition-colors">
          View All
        </button>
      </div>
    </div>
  );
}
