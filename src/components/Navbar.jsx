import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const links = [
  { id: "contact", label: "تماس با ما" },
  { id: "events", label: "رویدادها" },
  { id: "drive", label: "تست رانندگی" },
];

export function TeslaWordmark({ className = "" }) {
  return (
    <span
      dir="ltr"
      className={`mixed inline-flex items-center text-[#171717] ${className}`}
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 700,
        letterSpacing: "0.08em",
        gap: "0.52em",
      }}
      aria-label="Tesla"
    >
      {"TESLA".split("").map((letter) => (
        <span key={letter} className="leading-none">
          {letter}
        </span>
      ))}
    </span>
  );
}

function DotsMenuIcon() {
  return (
    <span className="grid grid-cols-2 gap-[3.5px]" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index} className="h-[3.5px] w-[3.5px] rounded-full bg-[#222]" />
      ))}
    </span>
  );
}

function NavLinks({ onNavigate }) {
  return (
    <nav className="flex items-center gap-8" aria-label="ناوبری اصلی">
      {links.map((link) => (
        <button
          key={link.id}
          type="button"
          onClick={() => onNavigate(link.id)}
          dir="rtl"
          className="text-[13px] font-normal text-[#1a1a1a] transition-opacity hover:opacity-55"
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}

export function ProductNav({ onNavigate }) {
  return (
    <div className="hidden h-[64px] items-center gap-8 px-8 lg:flex xl:px-10">
      <TeslaWordmark className="text-[14.5px]" />
      <NavLinks onNavigate={onNavigate} />
    </div>
  );
}

export function PanelToolbar({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    function onDoc(event) {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative hidden h-[64px] items-center justify-between px-7 lg:flex xl:px-8">
      <div ref={wrapRef} className="relative">
        <button
          type="button"
          dir="ltr"
          aria-expanded={open}
          aria-haspopup="listbox"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-1.5 text-[13.5px] text-[#2a2a2a]"
        >
          <ChevronDown size={15} strokeWidth={1.7} className="text-[#444]" />
          <span dir="rtl">فارسی</span>
        </button>
        {open && (
          <div
            dir="rtl"
            role="listbox"
            className="absolute top-9 right-0 z-20 w-32 rounded-lg border border-[#e4e4e4] bg-white py-1 text-right shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          >
            <button
              type="button"
              role="option"
              aria-selected="true"
              onClick={() => setOpen(false)}
              className="block w-full px-3 py-2 text-[13px] text-[#171717]"
            >
              فارسی
            </button>
          </div>
        )}
      </div>
      <MenuButton onNavigate={onNavigate} menuClassName="top-10 left-0" />
    </div>
  );
}

function MenuButton({ className = "", menuClassName = "top-10 left-0", onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(event) {
      if (!ref.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-label="منو"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-8 w-8 items-center justify-center"
      >
        <DotsMenuIcon />
      </button>
      {open && onNavigate && (
        <div
          dir="rtl"
          className={`absolute z-30 w-44 rounded-lg border border-[#e6e6e6] bg-white py-1 text-right shadow-[0_8px_24px_rgba(0,0,0,0.06)] ${menuClassName}`}
        >
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => {
                setOpen(false);
                onNavigate(link.id);
              }}
              className="block w-full px-4 py-2.5 text-[13px] text-[#171717] hover:bg-[#fafafa]"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileNav({ onNavigate }) {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="flex h-14 items-center justify-between border-b border-[#ececec] px-4 lg:hidden">
      <TeslaWordmark className="text-[13.5px]" />
      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            type="button"
            dir="ltr"
            onClick={() => setLangOpen((value) => !value)}
            className="inline-flex items-center gap-1 text-[13px]"
          >
            <ChevronDown size={14} strokeWidth={1.7} />
            <span dir="rtl">فارسی</span>
          </button>
          {langOpen && (
            <div
              dir="rtl"
              className="absolute top-8 left-0 z-20 w-28 rounded-lg border border-[#e6e6e6] bg-white py-1 text-right shadow-sm"
            >
              <button
                type="button"
                onClick={() => setLangOpen(false)}
                className="block w-full px-3 py-2 text-[13px]"
              >
                فارسی
              </button>
            </div>
          )}
        </div>
        <MenuButton onNavigate={onNavigate} />
      </div>
    </div>
  );
}
