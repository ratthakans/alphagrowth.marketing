const WORDS = [
  "CREATIVE THAT CONVERTS",
  "XAU/USD FLUENT",
  "FTD-FOCUSED",
  "SAFE-ZONE COPY",
  "MULTI-BROKER",
  "AD-BAN RESILIENT",
  "PROP FIRM FUNNELS",
  "PAYOUT-PROOF",
  "NEWS-REACTIVE",
  "EDITORIAL DESIGN",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-ink-line bg-ink-soft/60 py-5">
      <div className="flex w-max animate-ticker items-center gap-8 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-lg font-semibold tracking-tight text-snow-dim">
              {w}
            </span>
            <span className="text-gradient text-xl">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
