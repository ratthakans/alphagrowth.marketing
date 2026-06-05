import Counter from "./Counter";
import Reveal from "./Reveal";
import { results } from "@/lib/content";

export default function ResultsBand() {
  return (
    <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {results.map((r, i) => (
        <Reveal key={r.metric} delay={i * 90}>
          <div className="card-grad h-full bg-ink-card/60 p-7">
            <div className="font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
              <Counter
                to={r.value}
                prefix={r.prefix}
                suffix={r.suffix}
                decimals={Number.isInteger(r.value) ? 0 : 1}
              />
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-flame-300">
              {r.metric}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-snow-dim">{r.label}</p>
            <p className="mt-2 text-xs text-snow-faint">{r.note}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
