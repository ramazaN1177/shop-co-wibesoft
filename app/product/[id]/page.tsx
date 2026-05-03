import PathComponent from "@/components/PathComponent";
import DetailPageComponent from "@/components/detailPageComponent/DetailPageComponent";

interface ApiProduct {
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

async function getProduct(id: string): Promise<ApiProduct | null> {
  try {
    const res = await fetch(process.env.NEXT_PRODUCTS_API_URL as string, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Ürünler getirilemedi");

    const json = await res.json();
    const products: ApiProduct[] = json.data || [];
    return products.find((p) => p._id === Number(id)) || null;
  } catch (error) {
    console.error("API Hatası:", error);
    return null;
  }
}

export default async function ProductDetailScreen({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-black/60 font-satoshi">Ürün bulunamadı.</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col w-full">
      <PathComponent
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/" },
          { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: "/" },
          { label: product.title },
        ]}
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-16 py-6 md:py-9">
        <DetailPageComponent product={product} />
      </div>
    </main>
  );
}
