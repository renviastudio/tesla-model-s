import { tabs } from "../data/vehicle.js";

export default function PerformanceTabs({ active, onChange }) {
  return (
    <div
      dir="rtl"
      className="flex items-center justify-between gap-3"
      role="tablist"
      aria-label="اطلاعات محصول"
    >
      {tabs.map((tab) => {
        const selected = tab === active;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(tab)}
            className={`pb-[7px] text-[13px] ${
              selected
                ? "border-b-2 border-[#171717] font-medium text-[#171717]"
                : "border-b-2 border-transparent text-[#2a2a2a] hover:text-[#111]"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
