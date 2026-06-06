import { notUs, clients, adPlatforms } from "@/lib/content";

export default function PlatformStrip() {
  return (
    <div className="container-page">
      {/* What we are NOT → what we ARE */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-snow-faint">
          {notUs.map((n) => (
            <span key={n} className="inline-flex items-center gap-1.5">
              <span className="text-snow-faint/70">✕</span>
              {n}
            </span>
          ))}
        </div>

        <p className="mt-5 font-display text-xl font-bold leading-snug text-snow sm:text-2xl">
          เราคือ <span className="text-flame-400">Marketing Agency</span>{" "}
          ที่เชี่ยวชาญตลาด Forex โดยเฉพาะ
        </p>
        <p className="mt-2 text-sm leading-relaxed text-snow-muted">
          ทำการตลาดให้ธุรกิจสายเทรด — ไม่รับฝากเงิน ไม่ให้คำแนะนำการลงทุน
        </p>
      </div>

      {/* Clients */}
      <div className="mt-10 border-t border-ink-line pt-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-flame-400">
          ลูกค้าของเรา
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-lg font-semibold text-snow-faint transition-colors hover:text-snow sm:text-xl"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-snow-faint">
          ยิงแอด &amp; คอนเทนต์ครอบคลุม {adPlatforms.join(" · ")}
        </p>
      </div>
    </div>
  );
}
