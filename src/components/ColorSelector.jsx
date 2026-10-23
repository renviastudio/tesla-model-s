export default function ColorSelector({ colors, selectedIndex, onSelect }) {
  return (
    <div className="flex items-center justify-center gap-[11px]" role="radiogroup" aria-label="رنگ بدنه">
      {colors.map((color, index) => {
        const selected = index === selectedIndex;
        return (
          <button
            key={color.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={color.name}
            onClick={() => onSelect(index)}
            className="flex h-[22px] w-[22px] items-center justify-center"
          >
            <span
              className={`flex h-[18px] w-[18px] items-center justify-center rounded-full ${
                selected ? "ring-1 ring-[#b3b3b3] ring-offset-0" : ""
              }`}
            >
              <span
                className="block h-[10px] w-[10px] rounded-full"
                style={{
                  backgroundColor: color.hex,
                  boxShadow: color.id === "white" ? "inset 0 0 0 1px #d2d2d2" : "none",
                }}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
