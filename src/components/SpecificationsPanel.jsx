import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { variantOrder, variants } from "../data/vehicle.js";
import SpecificationItem from "./SpecificationItem.jsx";
import AccordionSection from "./AccordionSection.jsx";

export default function SpecificationsPanel({ variantId, onVariantChange }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [autopilotOpen, setAutopilotOpen] = useState(false);
  const [interiorOpen, setInteriorOpen] = useState(false);
  const spec = variants[variantId];

  const rows = [
    [
      { label: "ظرفیت باتری", value: spec.battery },
      { label: "برد مسافت", value: spec.range },
      { label: "شتاب", value: spec.accel },
    ],
    [
      { label: "قدرت موتور", value: spec.power },
      { label: "گشتاور", value: spec.torque },
      { label: "حداکثر سرعت", value: spec.speed },
    ],
  ];

  const extra = [
    { label: "نوع محرک", value: spec.drive },
    { label: "شارژ سریع", value: spec.charge },
    { label: "وزن تقریبی", value: spec.weight },
    { label: "تعداد صندلی", value: "۵ نفر" },
    { label: "چرخ‌ها", value: "۲۱ اینچ" },
    { label: "ضمانت باتری", value: "۸ سال" },
  ];

  return (
    <div className="flex h-full flex-col px-5 pt-1 pb-4 sm:px-7 lg:px-8">
      <div className="mb-5 flex items-end justify-between gap-3 border-b border-[#e2e2e5] pb-[14px]">
        <h2 dir="rtl" className="text-[21px] leading-none font-medium text-[#171717]">
          مشخصات
        </h2>
        <div
          dir="ltr"
          className="mixed flex items-center gap-[18px] pb-0.5"
          role="tablist"
          aria-label="نسخه خودرو"
        >
          {variantOrder.map((id) => {
            const active = id === variantId;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onVariantChange(id)}
                className={`text-[12.5px] tracking-wide transition-colors ${
                  active
                    ? "font-semibold text-[#171717]"
                    : "font-medium text-[#a4a4a4] hover:text-[#555]"
                }`}
              >
                {id}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-y-0">
        {rows[0].map((item) => (
          <SpecificationItem key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
      <div className="mt-[18px] grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[#e2e2e5] pt-[18px] sm:grid-cols-3 sm:gap-y-0">
        {rows[1].map((item) => (
          <SpecificationItem key={item.label} label={item.label} value={item.value} />
        ))}
      </div>

      <button
        type="button"
        aria-expanded={detailsOpen}
        onClick={() => setDetailsOpen((open) => !open)}
        className="mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] text-[#3d3d3d] hover:text-[#111]"
      >
        {detailsOpen ? <Minus size={14} strokeWidth={1.7} /> : <Plus size={14} strokeWidth={1.7} />}
        <span dir="rtl">جزئیات بیشتر</span>
      </button>

      {detailsOpen && (
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[#e2e2e5] pt-4 sm:grid-cols-3">
          {extra.map((item) => (
            <SpecificationItem key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      )}

      <div className="mt-6">
        <AccordionSection
          title="خودران"
          open={autopilotOpen}
          onToggle={() => setAutopilotOpen((open) => !open)}
        >
          سیستم خودران پیشرفته با حفظ خودرو بین خطوط، کنترل تطبیقی سرعت و تغییر
          خطوط، رانندگی در بزرگراه را آرام‌تر و دقیق‌تر می‌کند.
        </AccordionSection>
        <AccordionSection
          title="فضای داخلی"
          open={interiorOpen}
          onToggle={() => setInteriorOpen((open) => !open)}
        >
          کابین مینیمال با نمایشگر افقی، صندلی‌های چرمی و فضای بار جلو و عقب،
          پنج سرنشین را در سکوت و راحتی جا می‌دهد.
        </AccordionSection>
        <div className="border-t border-[#e1e1e4]" />
      </div>
    </div>
  );
}
