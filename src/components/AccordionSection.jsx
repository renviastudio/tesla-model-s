import { ChevronDown } from "lucide-react";

export default function AccordionSection({ title, open, onToggle, children }) {
  return (
    <div className="border-t border-[#e1e1e4]">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-[17px]"
      >
        <span dir="rtl" className="text-[15.5px] font-medium text-[#171717]">
          {title}
        </span>
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#c9c9cd] text-[#3a3a3a]">
          <ChevronDown
            size={14}
            strokeWidth={1.7}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>
      {open && (
        <p dir="rtl" className="pb-4 text-right text-[13px] leading-7 text-[#5c5c5c]">
          {children}
        </p>
      )}
    </div>
  );
}
