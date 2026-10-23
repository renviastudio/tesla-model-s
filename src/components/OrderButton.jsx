import { ArrowLeft } from "lucide-react";

export default function OrderButton({ onClick, message }) {
  return (
    <div className="flex flex-col items-start gap-3 lg:items-end">
      <button
        type="button"
        onClick={onClick}
        dir="rtl"
        className="inline-flex items-center gap-2 rounded-lg bg-[#171717] px-[18px] py-[11px] text-[13px] text-white transition-colors duration-200 hover:bg-black"
      >
        <span className="whitespace-nowrap">همین حالا سفارش دهید</span>
        <ArrowLeft size={15} strokeWidth={1.7} />
      </button>
      {message && (
        <p dir="rtl" className="max-w-[240px] text-right text-[12.5px] leading-6 text-[#333]">
          {message}
        </p>
      )}
    </div>
  );
}
