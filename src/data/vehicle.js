export const colors = [
  { id: "white", name: "سفید", hex: "#f4f4f4", image: "./vehicles/white.jpg" },
  { id: "black", name: "مشکی", hex: "#171717", image: "./vehicles/black.jpg" },
  { id: "red", name: "قرمز", hex: "#e82127", image: "./vehicles/red.jpg" },
  { id: "gray", name: "خاکستری", hex: "#858585", image: "./vehicles/gray.jpg" },
  { id: "blue", name: "آبی", hex: "#4285c5", image: "./vehicles/blue.jpg" },
];

export const variants = {
  "75D": {
    id: "75D",
    price: "۹۸٬۹۰۰",
    battery: "۷۵ کیلووات‌ساعت",
    range: "۴۱۷ کیلومتر",
    accel: "۴٫۴ ثانیه (۰ تا ۱۰۰ کیلومتر/ساعت)",
    power: "۵۱۸ اسب‌بخار",
    torque: "۶۶۰ نیوتن‌متر",
    speed: "۲۲۵ کیلومتر/ساعت",
    drive: "دو موتوره، تمام‌چرخ",
    charge: "۴۰ دقیقه تا ۸۰٪",
    weight: "۲٬۰۹۰ کیلوگرم",
  },
  "100D": {
    id: "100D",
    price: "۱۱۲٬۹۰۰",
    battery: "۱۰۰ کیلووات‌ساعت",
    range: "۵۷۲ کیلومتر",
    accel: "۳٫۸ ثانیه (۰ تا ۱۰۰ کیلومتر/ساعت)",
    power: "۶۰۳ اسب‌بخار",
    torque: "۸۶۰ نیوتن‌متر",
    speed: "۲۵۰ کیلومتر/ساعت",
    drive: "دو موتوره، تمام‌چرخ",
    charge: "۴۰ دقیقه تا ۸۰٪",
    weight: "۲٬۲۰۰ کیلوگرم",
  },
  P100D: {
    id: "P100D",
    price: "۱۲۴٬۲۳۰",
    battery: "۱۰۰ کیلووات‌ساعت",
    range: "۶۱۳ کیلومتر",
    accel: "۲٫۷ ثانیه (۰ تا ۱۰۰ کیلومتر/ساعت)",
    power: "۷۶۲ اسب‌بخار",
    torque: "۹۳۱ نیوتن‌متر",
    speed: "۲۵۰ کیلومتر/ساعت",
    drive: "دو موتوره عملکردی، تمام‌چرخ",
    charge: "۳۵ دقیقه تا ۸۰٪",
    weight: "۲٬۲۴۱ کیلوگرم",
  },
};

export const variantOrder = ["75D", "100D", "P100D"];

export const tabs = ["عملکرد", "تست رانندگی", "سفارش"];

export const tabCopy = {
  عملکرد: "برای دریافت آخرین به‌روزرسانی‌ها عضو شوید.",
  "تست رانندگی": "برای هماهنگی تست رانندگی، ایمیل خود را وارد کنید.",
  سفارش: "برای پیگیری سفارش، ایمیل خود را ثبت کنید.",
};
