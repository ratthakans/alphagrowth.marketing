import { platforms } from "@/lib/content";

export default function PlatformStrip() {
  return (
    <div className="container-page">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-snow-faint">
        ทำงานครอบคลุมทุกแพลตฟอร์ม &amp; ทุกค่าย · Multi-Broker Friendly
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
        {platforms.map((p) => (
          <span
            key={p}
            className="font-display text-lg font-semibold text-snow-faint transition-colors duration-300 hover:text-snow sm:text-xl"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
