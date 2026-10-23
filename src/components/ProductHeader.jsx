import { ChevronLeft } from "lucide-react";

export default function ProductHeader({ price }) {
  return (
    <div className="flex items-start justify-between gap-6 px-5 pt-1 pb-2 sm:px-8 lg:px-10">
      <div className="min-w-0">
        <p
          dir="ltr"
          className="mixed text-[13px] font-normal text-[#2b2b2b]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Tesla
        </p>
        <h1 dir="rtl" className="mt-1.5 text-[34px] leading-none font-medium text-[#171717] sm:text-[40px]">
          مدل{" "}
          <span dir="ltr" className="mixed">
            S
          </span>
        </h1>
        <nav
          dir="rtl"
          aria-label="مسیر"
          className="mt-3 flex items-center gap-1 text-[12px] text-[#9a9a9a]"
        >
          <span>مدل‌ها</span>
          <ChevronLeft size={12} strokeWidth={1.7} className="text-[#b0b0b0]" />
          <span>
            مدل{" "}
            <span dir="ltr" className="mixed">
              S
            </span>
          </span>
          <ChevronLeft size={12} strokeWidth={1.7} className="text-[#b0b0b0]" />
          <span>سدان</span>
        </nav>
      </div>

      <div className="shrink-0 pt-1">
        <p dir="ltr" className="mixed text-right text-[22px] leading-none font-medium text-[#171717] sm:text-[25px]">
          <span className="me-[3px] text-[18px] font-normal sm:text-[19px]">€</span>
          {price}
        </p>
        <p dir="rtl" className="mt-2 text-right text-[12px] text-[#8a8a8a]">
          قیمت نقدی
        </p>
      </div>
    </div>
  );
}
