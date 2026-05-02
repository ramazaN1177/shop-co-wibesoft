export default function FooterBottom() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4 w-full">
      <p className="text-black/60 text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
      <div className="flex items-center gap-3">
        {/* Payment Methods placeholders */}
        <div className="w-11 h-7 bg-white rounded border border-black/10 flex items-center justify-center text-[10px] font-bold text-blue-800">VISA</div>
        <div className="w-11 h-7 bg-white rounded border border-black/10 flex items-center justify-center">
          <div className="flex -space-x-1.5">
            <div className="w-4 h-4 rounded-full bg-red-500 mix-blend-multiply"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400 mix-blend-multiply"></div>
          </div>
        </div>
        <div className="w-11 h-7 bg-white rounded border border-black/10 flex items-center justify-center text-[10px] font-bold text-blue-500 italic">PayPal</div>
        <div className="w-11 h-7 bg-white rounded border border-black/10 flex items-center justify-center text-[10px] font-bold">Pay</div>
        <div className="w-11 h-7 bg-white rounded border border-black/10 flex items-center justify-center text-[10px] font-bold text-gray-600">G Pay</div>
      </div>
    </div>
  );
}
