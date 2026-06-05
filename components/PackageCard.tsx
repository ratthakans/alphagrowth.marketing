import Link from "next/link";
import type { Pkg } from "@/lib/content";

export default function PackageCard({ pkg }: { pkg: Pkg }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 ${
        pkg.featured
          ? "border-flame-400/50 bg-gradient-to-b from-flame-400/[0.07] to-ink-card shadow-[0_20px_60px_-20px_rgba(235,89,57,0.4)]"
          : "border-ink-line bg-ink-card/60 hover:border-flame-400/30"
      }`}
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-grad px-4 py-1 text-[11px] font-bold tracking-wide text-ink">
          {pkg.badge}
        </span>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-2xl font-semibold text-snow">
          {pkg.name}
        </h3>
        <span className="grid h-9 w-9 place-items-center rounded-lg border border-ink-line text-sm font-bold text-flame-300">
          {pkg.id}
        </span>
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-snow-faint">
        {pkg.audience}
      </p>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-lg text-snow-muted">฿</span>
        <span className="font-display text-4xl font-bold tracking-tight text-snow">
          {pkg.price}
        </span>
        <span className="mb-1 text-sm text-snow-faint">/ เดือน</span>
      </div>

      <ul className="mt-7 space-y-3 border-t border-ink-line pt-7">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-3 text-sm text-snow-dim">
            <span className="mt-1 text-flame-400">✦</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-8 ${pkg.featured ? "btn-flame" : "btn-ghost"} w-full`}
      >
        เลือกแพ็ก {pkg.id}
      </Link>
    </div>
  );
}
