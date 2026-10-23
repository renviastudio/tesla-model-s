import { useState } from "react";
import MobileNav, { PanelToolbar, ProductNav } from "./components/Navbar.jsx";
import ProductHeader from "./components/ProductHeader.jsx";
import VehicleGallery from "./components/VehicleGallery.jsx";
import SpecificationsPanel from "./components/SpecificationsPanel.jsx";
import BottomInformation from "./components/BottomInformation.jsx";
import { colors, tabs, variants } from "./data/vehicle.js";

export default function App() {
  const [variantId, setVariantId] = useState("P100D");
  const [colorIndex, setColorIndex] = useState(0);
  const [tab, setTab] = useState(tabs[0]);
  const [orderMessage, setOrderMessage] = useState("");

  function onNavigate(target) {
    if (target === "drive") {
      setTab("تست رانندگی");
      document.getElementById("performance")?.scrollIntoView({ block: "nearest" });
      return;
    }
    if (target === "contact") {
      document.getElementById("newsletter-email")?.focus();
      document.getElementById("bottom-info")?.scrollIntoView({ block: "nearest" });
      return;
    }
    document.getElementById("description")?.scrollIntoView({ block: "nearest" });
  }

  function onOrder() {
    const color = colors[colorIndex];
    setOrderMessage(
      `سفارش مدل S نسخه ${variantId} به رنگ ${color.name} ثبت شد. کارشناسان ما به‌زودی با شما تماس می‌گیرند.`,
    );
  }

  return (
    <div dir="ltr" className="page-shell min-h-screen w-full bg-white">
      <MobileNav onNavigate={onNavigate} />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.63fr)_minmax(280px,1fr)]">
        <section className="flex min-w-0 flex-col bg-white">
          <ProductNav onNavigate={onNavigate} />
          <ProductHeader price={variants[variantId].price} />
          <VehicleGallery colors={colors} colorIndex={colorIndex} onChange={setColorIndex} />
        </section>

        <aside className="min-w-0 border-[#e4e4e6] bg-[#f0f0f2] max-lg:border-t lg:border-l">
          <PanelToolbar onNavigate={onNavigate} />
          <SpecificationsPanel variantId={variantId} onVariantChange={setVariantId} />
        </aside>
      </div>

      <BottomInformation
        tab={tab}
        onTabChange={setTab}
        onOrder={onOrder}
        orderMessage={orderMessage}
      />
    </div>
  );
}
