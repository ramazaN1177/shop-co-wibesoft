import ProductCard from "../productCard/ProductCard";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    rating: 4.5,
    price: 120,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop", // Örnek resim, daha sonra gerçek ürün resimleriyle değiştirilecek
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discountPercentage: 20,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    rating: 4.5,
    price: 180,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500&auto=format&fit=crop",
  }
];

export default function MainComponent() {
  return (
    <div className="w-full flex flex-col gap-[55px] pb-[64px]">
      <h2 className="text-[32px] md:text-[48px] font-bold font-integral text-black leading-none mt-10 md:mt-16 text-center uppercase">
        NEW ARRIVALS
      </h2>

      {/* Ürün Listesi Grid'i */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] px-4 md:px-[100px]">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* View All Butonu */}
      <div className="flex justify-center mt-[36px]">
        <button className="px-[54px] py-[16px] rounded-[62px] border border-black/10 text-black font-medium text-[16px] leading-[22px] hover:bg-gray-50 transition-colors">
          View All
        </button>
      </div>
    </div>
  );
}
