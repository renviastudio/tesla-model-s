export default function SpecificationItem({ label, value }) {
  return (
    <div className="min-w-0">
      <p dir="rtl" className="text-right text-[11.5px] leading-5 text-[#8a8a8a]">
        {label}
      </p>
      <p dir="rtl" className="mt-[3px] text-right text-[13.5px] leading-[1.55] font-medium text-[#1a1a1a]">
        {value}
      </p>
    </div>
  );
}
