import { ChevronLeft, ChevronRight } from "lucide-react";
import ColorSelector from "./ColorSelector.jsx";

export default function VehicleGallery({ colors, colorIndex, onChange }) {
  const color = colors[colorIndex];

  function step(direction) {
    onChange((colorIndex + direction + colors.length) % colors.length);
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 items-center justify-center px-3 py-4 sm:px-6 lg:min-h-[300px] lg:py-6">
        <img
          src={color.image}
          alt={`تسلا مدل S به رنگ ${color.name}`}
          className="h-auto w-[86%] max-w-[820px] object-contain select-none"
          draggable="false"
        />
      </div>

      <div className="mt-auto grid grid-cols-[auto_1fr_auto] items-center px-4 pb-5 sm:px-7 lg:px-8 lg:pb-6">
        <button
          type="button"
          aria-label="تصویر قبلی"
          onClick={() => step(-1)}
          className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d4d4d4] text-[#555] transition-colors hover:border-[#111] hover:text-[#111]"
        >
          <ChevronLeft size={15} strokeWidth={1.7} />
        </button>

        <ColorSelector colors={colors} selectedIndex={colorIndex} onSelect={onChange} />

        <button
          type="button"
          aria-label="تصویر بعدی"
          onClick={() => step(1)}
          className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d4d4d4] text-[#555] transition-colors hover:border-[#111] hover:text-[#111]"
        >
          <ChevronRight size={15} strokeWidth={1.7} />
        </button>
      </div>
    </div>
  );
}
