import { Star } from "lucide-react";

export default function SafetyRating() {
  return (
    <div className="px-5 py-6 sm:px-6 lg:px-8 lg:py-7">
      <div className="flex items-start justify-between gap-4">
        <h3 dir="rtl" className="text-[15px] font-medium text-[#171717]">
          ایمنی
        </h3>
        <div className="text-right">
          <p dir="rtl" className="text-[12px] text-[#8a8a8a]">
            رتبه کلی ایمنی
          </p>
          <p dir="ltr" className="mixed mt-1 text-[38px] leading-none font-medium tracking-tight text-[#171717]">
            ۵٫۰
          </p>
          <div
            dir="ltr"
            className="mt-1.5 flex items-center justify-end gap-[2px] text-[#171717]"
            aria-label="پنج ستاره"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={12} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
        </div>
      </div>
      <p dir="rtl" className="mt-5 max-w-[230px] text-left text-[11.5px] leading-[1.85] text-[#8d8d8d]">
        مدل S موفق به دریافت بالاترین رتبه ایمنی از آزمون‌های تصادف شده است.
      </p>
    </div>
  );
}
