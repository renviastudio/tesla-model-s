import { useState } from "react";
import { Mail } from "lucide-react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm({ message }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const value = email.trim();
    if (!emailPattern.test(value)) {
      setDone(false);
      setError("لطفاً یک ایمیل معتبر وارد کنید.");
      return;
    }
    setError("");
    setDone(true);
  }

  return (
    <div className="mt-3">
      <p dir="rtl" className="text-right text-[12.5px] leading-6 text-[#4a4a4a]">
        {message}
      </p>

      {done ? (
        <p dir="rtl" className="mt-3 text-right text-[13px] leading-6 text-[#171717]">
          عضویت شما با موفقیت انجام شد.
        </p>
      ) : (
        <form dir="rtl" className="mt-3 flex items-center gap-2" onSubmit={onSubmit} noValidate>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            dir="ltr"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError("");
            }}
            placeholder="ایمیل خود را وارد کنید"
            aria-label="ایمیل"
            aria-invalid={Boolean(error)}
            className="h-[34px] min-w-0 flex-1 rounded-md border border-[#e0e0e0] bg-white px-3 text-right text-[12.5px] text-[#171717] outline-none placeholder:text-right placeholder:text-[#b5b5b5] focus:border-[#171717]"
          />
          <button
            type="submit"
            dir="rtl"
            className="inline-flex h-[34px] shrink-0 items-center gap-1.5 rounded-md border border-[#d8d8d8] bg-white px-2.5 text-[12.5px] text-[#171717] transition-colors hover:border-[#111]"
          >
            <span>عضویت</span>
            <Mail size={13} strokeWidth={1.7} />
          </button>
        </form>
      )}

      {error && (
        <p dir="rtl" className="mt-2 text-right text-[12px] text-[#e82127]">
          {error}
        </p>
      )}
    </div>
  );
}
