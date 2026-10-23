import PerformanceTabs from "./PerformanceTabs.jsx";
import NewsletterForm from "./NewsletterForm.jsx";
import SafetyRating from "./SafetyRating.jsx";
import OrderButton from "./OrderButton.jsx";
import { tabCopy } from "../data/vehicle.js";

export default function BottomInformation({ tab, onTabChange, onOrder, orderMessage }) {
  return (
    <section
      id="bottom-info"
      className="grid grid-cols-1 border-t border-[#e6e6e6] md:grid-cols-2 lg:grid-cols-[0.92fr_1.15fr_1.28fr_auto]"
    >
      <div className="border-[#ececec] max-lg:border-b md:max-lg:border-e lg:border-e">
        <SafetyRating />
      </div>

      <div
        id="performance"
        className="border-[#ececec] px-5 py-6 max-lg:border-b sm:px-6 md:max-lg:border-e lg:border-e lg:px-7 lg:py-7"
      >
        <PerformanceTabs active={tab} onChange={onTabChange} />
        <NewsletterForm message={tabCopy[tab]} />
      </div>

      <div
        id="description"
        className="border-[#ececec] px-5 py-6 max-lg:border-b sm:px-6 lg:border-e lg:px-7 lg:py-7"
      >
        <p dir="rtl" className="text-right text-[12.5px] leading-[1.95] text-[#5a5a5a]">
          مدل S ترکیبی از عملکرد بی‌نظیر، برد مسافت استاندارد و ایمنی پیشرفته، یکی از
          قدرتمندترین خودروهای برقی جهان است. این خودرو با شتاب فوق‌العاده، فناوری‌های
          پیشرفته و امکانات مدرن، تجربه‌ای بی‌نظیر از رانندگی را ارائه می‌دهد. مدل S
          خودروی تمام‌برقی با عملکرد بالا است.
        </p>
      </div>

      <div className="flex items-center px-5 pb-7 sm:px-6 lg:items-start lg:px-7 lg:pt-10 lg:pb-7">
        <OrderButton onClick={onOrder} message={orderMessage} />
      </div>
    </section>
  );
}
