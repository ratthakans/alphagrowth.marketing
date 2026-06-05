"use client";

import { useEffect, useState } from "react";

type Quote = { sym: string; price: number; decimals: number; chg: number };

// Base quotes — realistic-looking, illustrative only (not live market data).
const BASE: Quote[] = [
  { sym: "XAU/USD", price: 2338.42, decimals: 2, chg: 0.84 },
  { sym: "EUR/USD", price: 1.0872, decimals: 4, chg: -0.12 },
  { sym: "GBP/USD", price: 1.2718, decimals: 4, chg: 0.21 },
  { sym: "USD/JPY", price: 157.34, decimals: 2, chg: 0.33 },
  { sym: "DXY", price: 104.62, decimals: 2, chg: -0.18 },
  { sym: "US30", price: 38995.2, decimals: 1, chg: 0.46 },
  { sym: "NAS100", price: 18421.7, decimals: 1, chg: 1.12 },
  { sym: "BTC/USD", price: 67214.0, decimals: 0, chg: 2.04 },
];

function Row({ q }: { q: Quote }) {
  const up = q.chg >= 0;
  return (
    <span className="mono flex items-center gap-2.5 text-sm">
      <span className="font-semibold tracking-wide text-snow-dim">{q.sym}</span>
      <span className="text-snow">
        {q.price.toLocaleString("en-US", {
          minimumFractionDigits: q.decimals,
          maximumFractionDigits: q.decimals,
        })}
      </span>
      <span className={up ? "text-up" : "text-down"}>
        {up ? "▲" : "▼"} {Math.abs(q.chg).toFixed(2)}%
      </span>
      <span className="text-ink-line">|</span>
    </span>
  );
}

export default function Ticker() {
  const [quotes, setQuotes] = useState<Quote[]>(BASE);

  // Subtle live flicker after mount (client-only → no hydration mismatch).
  useEffect(() => {
    const id = setInterval(() => {
      setQuotes((prev) =>
        prev.map((q) => {
          const drift = (Math.random() - 0.5) * (q.price * 0.0004);
          const newChg = q.chg + (Math.random() - 0.5) * 0.06;
          return { ...q, price: q.price + drift, chg: newChg };
        })
      );
    }, 1600);
    return () => clearInterval(id);
  }, []);

  const loop = [...quotes, ...quotes];

  return (
    <div className="relative overflow-hidden border-y border-ink-line bg-ink-soft/90 py-3">
      <div className="flex items-center">
        <span className="mono z-10 flex shrink-0 items-center gap-2 border-r border-ink-line bg-ink-soft px-4 text-[11px] font-bold uppercase tracking-wider text-flame-400">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-up" />
          LIVE
        </span>
        <div className="flex w-max animate-ticker gap-6 whitespace-nowrap pl-6">
          {loop.map((q, i) => (
            <Row key={i} q={q} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
    </div>
  );
}
