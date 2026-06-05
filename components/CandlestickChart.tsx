// TradingView-style candlestick chart — grid, price axis, volume, MA, crosshair.
// Deterministic generation → identical on server & client (no hydration drift).
// Illustrative only, not live market data.

function build() {
  let seed = 20260105;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  const n = 44;
  const c: { o: number; c: number; h: number; l: number; v: number; bull: boolean }[] = [];
  let p = 42;
  for (let i = 0; i < n; i++) {
    const o = p;
    const drift = (rnd() - 0.44) * 9;
    const cl = Math.max(8, Math.min(92, o + drift));
    const h = Math.max(o, cl) + rnd() * 5;
    const l = Math.min(o, cl) - rnd() * 5;
    const v = 25 + Math.abs(drift) * 5 + rnd() * 25;
    c.push({ o, c: cl, h, l, v, bull: cl >= o });
    p = cl;
  }
  return c;
}

const C = build();
const N = C.length;

// moving average (period 7) over closes
const MA = C.map((_, i) => {
  const s = Math.max(0, i - 6);
  const slice = C.slice(s, i + 1);
  return slice.reduce((a, b) => a + b.c, 0) / slice.length;
});

// map illustrative 0..100 scale to gold-like price labels
const PRICE_LO = 2312;
const PRICE_HI = 2356;
const toPrice = (v: number) => PRICE_LO + (v / 100) * (PRICE_HI - PRICE_LO);

export default function CandlestickChart({
  className = "",
}: {
  className?: string;
}) {
  const W = 480;
  const H = 300;
  const padL = 10;
  const axisW = 46;
  const plotR = W - axisW;
  const top = 12;
  const priceBot = 196;
  const volTop = 214;
  const volBot = 286;

  const step = (plotR - padL) / N;
  const cw = step * 0.6;
  const y = (v: number) => priceBot - (v / 100) * (priceBot - top);
  const vMax = Math.max(...C.map((d) => d.v));
  const vy = (v: number) => volBot - (v / vMax) * (volBot - volTop);

  const maPath = MA.map(
    (m, i) => `${i === 0 ? "M" : "L"} ${padL + i * step + step / 2} ${y(m)}`
  ).join(" ");
  const closePath = C.map(
    (d, i) => `${i === 0 ? "M" : "L"} ${padL + i * step + step / 2} ${y(d.c)}`
  ).join(" ");

  const gridLevels = [12.5, 30, 50, 70, 87.5];
  const cross = Math.round(N * 0.74); // crosshair candle
  const crossX = padL + cross * step + step / 2;
  const crossY = y(C[cross].c);

  return (
    <div className={`relative ${className}`}>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full">
        <defs>
          <linearGradient id="ma" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f08263" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#eb5939" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eb5939" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#eb5939" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* horizontal grid + price axis labels */}
        {gridLevels.map((lvl, i) => (
          <g key={i}>
            <line
              x1={padL}
              x2={plotR}
              y1={y(lvl)}
              y2={y(lvl)}
              stroke="#272727"
              strokeWidth={1}
              strokeDasharray="2 4"
            />
            <text
              x={plotR + 6}
              y={y(lvl) + 3}
              fill="#8f8f88"
              fontSize="9"
              fontFamily="monospace"
            >
              {toPrice(lvl).toFixed(1)}
            </text>
          </g>
        ))}

        {/* area under close */}
        <path
          d={`${closePath} L ${plotR} ${priceBot} L ${padL} ${priceBot} Z`}
          fill="url(#area)"
        />

        {/* volume bars */}
        {C.map((d, i) => {
          const x = padL + i * step + step / 2;
          return (
            <rect
              key={`v${i}`}
              x={x - cw / 2}
              y={vy(d.v)}
              width={cw}
              height={volBot - vy(d.v)}
              fill={d.bull ? "#22c55e" : "#ef4444"}
              opacity={0.28}
              rx={0.5}
            />
          );
        })}

        {/* candles */}
        {C.map((d, i) => {
          const x = padL + i * step + step / 2;
          const color = d.bull ? "#22c55e" : "#ef4444";
          const t = y(Math.max(d.o, d.c));
          const b = y(Math.min(d.o, d.c));
          return (
            <g key={i}>
              <line x1={x} x2={x} y1={y(d.h)} y2={y(d.l)} stroke={color} strokeWidth={1} opacity={0.7} />
              <rect x={x - cw / 2} y={t} width={cw} height={Math.max(1.5, b - t)} fill={color} rx={0.5} />
            </g>
          );
        })}

        {/* MA line */}
        <path d={maPath} fill="none" stroke="url(#ma)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

        {/* crosshair */}
        <line x1={crossX} x2={crossX} y1={top} y2={priceBot} stroke="#fdfdf9" strokeWidth={0.75} strokeDasharray="3 3" opacity={0.35} />
        <line x1={padL} x2={plotR} y1={crossY} y2={crossY} stroke="#fdfdf9" strokeWidth={0.75} strokeDasharray="3 3" opacity={0.35} />

        {/* price tag on axis */}
        <g>
          <rect x={plotR} y={crossY - 8} width={axisW} height={16} fill="#eb5939" rx={2} />
          <text x={plotR + axisW / 2} y={crossY + 3} fill="#0e0e0e" fontSize="9" fontWeight="700" fontFamily="monospace" textAnchor="middle">
            {toPrice(C[cross].c).toFixed(1)}
          </text>
        </g>

        {/* leading live dot */}
        <circle cx={padL + (N - 1) * step + step / 2} cy={y(C[N - 1].c)} r={3.5} fill="#eb5939" className="animate-glow" />

        {/* divider above volume */}
        <line x1={padL} x2={plotR} y1={volTop - 6} y2={volTop - 6} stroke="#272727" strokeWidth={1} />
        <text x={padL} y={volTop + 2} fill="#5e5e58" fontSize="8" fontFamily="monospace">VOL</text>
      </svg>
    </div>
  );
}
