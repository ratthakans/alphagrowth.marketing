const ROWS = [
  { sym: "XAU/USD", name: "Gold Spot", price: "2,338.42", chg: 0.84, spark: [4, 6, 5, 7, 6, 8, 7, 9] },
  { sym: "EUR/USD", name: "Euro", price: "1.0872", chg: -0.12, spark: [7, 6, 6, 5, 5, 4, 5, 4] },
  { sym: "GBP/USD", name: "Pound", price: "1.2718", chg: 0.21, spark: [5, 5, 6, 5, 6, 7, 6, 7] },
  { sym: "US30", name: "Dow Jones", price: "38,995.2", chg: 0.46, spark: [4, 5, 5, 6, 6, 7, 8, 8] },
  { sym: "BTC/USD", name: "Bitcoin", price: "67,214", chg: 2.04, spark: [3, 4, 5, 4, 6, 7, 8, 9] },
  { sym: "DXY", name: "Dollar Index", price: "104.62", chg: -0.18, spark: [7, 7, 6, 6, 5, 6, 5, 5] },
];

export default function Watchlist() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-ink-line bg-ink-soft/70 px-4 py-3">
        <span className="mono text-xs font-bold uppercase tracking-wider text-snow-dim">
          Watchlist
        </span>
        <span className="mono flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-up">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-up" />
          Markets open
        </span>
      </div>
      <ul className="divide-y divide-ink-line">
        {ROWS.map((r) => {
          const up = r.chg >= 0;
          return (
            <li
              key={r.sym}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/[0.02]"
            >
              <div className="min-w-0 flex-1">
                <div className="mono text-sm font-semibold text-snow">{r.sym}</div>
                <div className="text-[11px] text-snow-faint">{r.name}</div>
              </div>

              {/* sparkline */}
              <div className="flex h-7 items-end gap-0.5">
                {r.spark.map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-sm ${up ? "bg-up/50" : "bg-down/50"}`}
                    style={{ height: `${h * 2.5}px` }}
                  />
                ))}
              </div>

              <div className="w-20 text-right">
                <div className="mono text-sm text-snow">{r.price}</div>
                <div className={`mono text-[11px] ${up ? "text-up" : "text-down"}`}>
                  {up ? "▲" : "▼"} {Math.abs(r.chg).toFixed(2)}%
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
