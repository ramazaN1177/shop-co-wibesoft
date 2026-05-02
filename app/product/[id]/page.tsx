export default async function ProductDetailScreen({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Ürün Detay Ekranı</h1>
      <p className="text-gray-700">
        Burada <strong>{id}</strong> ID'li ürünün görseli, açıklaması, fiyatı ve "Sepete Ekle" butonu yer alacaktır.
      </p>
    </div>
  );
}
