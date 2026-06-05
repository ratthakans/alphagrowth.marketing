export default function Placeholder({
  label = "IMAGE",
  ratio = "aspect-[4/3]",
  className = "",
  tag,
}: {
  label?: string;
  ratio?: string;
  className?: string;
  tag?: string;
}) {
  return (
    <div
      className={`group relative ${ratio} w-full overflow-hidden rounded-2xl border border-ink-line bg-ink-card ${className}`}
    >
      {/* animated trading grid */}
      <div className="grid-bg absolute inset-0 animate-grid-pan opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-flame-400/10 via-transparent to-flame-600/10" />

      {/* faux candlesticks at the base */}
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-1 opacity-40">
        {[40, 65, 50, 80, 60, 92, 72, 100, 84, 96].map((h, i) => (
          <span
            key={i}
            className={`w-full rounded-sm ${i % 3 === 0 ? "bg-down/60" : "bg-up/60"}`}
            style={{ height: `${h * 0.7}px` }}
          />
        ))}
      </div>

      {/* center mark */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-display text-4xl text-flame-400/80 transition-transform duration-500 group-hover:scale-110">
            α
          </span>
          <span className="mono text-[11px] font-semibold uppercase tracking-[0.3em] text-snow-muted">
            {label}
          </span>
        </div>
      </div>

      {/* tag chip */}
      {tag && (
        <span className="mono absolute left-3 top-3 rounded-md border border-flame-400/40 bg-ink/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-flame-300">
          {tag}
        </span>
      )}

      {/* corner ticks */}
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-flame-400/50" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-flame-400/50" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-flame-400/50" />
    </div>
  );
}
