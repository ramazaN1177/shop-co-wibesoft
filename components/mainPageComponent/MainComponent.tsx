export default function MainComponent() {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Ürün Listeleme İçeriği (Arka plansız ve hizalanmış) */}
      <h1 className="text-[32px] md:text-[40px] font-bold font-integral text-black leading-none mt-4">
        NEW ARRIVALS
      </h1>
      <p className="text-black/60 font-satoshi text-sm">
        Burada API'den çekilen ürünler ve diğer bileşenler listelenecektir.
      </p>

      {/* İleride diğer component'ler (Filtreler, Ürün Kartları vs.) buraya eklenecek */}
    </div>
  );
}
