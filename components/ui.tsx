import Link from "next/link";
import Reveal from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-snow sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-snow-muted">{intro}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="container-page pb-12">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-snow sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-snow-muted">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
      <div className="container-page">
        <div className="hairline" />
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="card-grad overflow-hidden p-10 sm:p-16">
            <div className="relative">
              <p className="eyebrow">Let&apos;s talk</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
                พร้อมเปลี่ยน <span className="flame-text">Ad Spend</span> เป็น FTD?
              </h2>
              <p className="mt-4 max-w-xl text-snow-muted">
                Trade your traditional agency for a financial-fluent partner.
                เริ่มที่ Free Strategy Session — ไม่มีข้อผูกมัด
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-flame">
                  จองเซสชันฟรี →
                </Link>
                <Link href="/packages" className="btn-ghost">
                  ดูแพ็กเกจ
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ink-line bg-ink-card/50 p-6 transition-colors hover:border-flame-400/40">
      <div className="font-display text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-sm text-snow-muted">{label}</div>
      {/* mini sparkline */}
      <div className="mt-4 flex items-end gap-0.5 opacity-60 transition-opacity group-hover:opacity-100">
        {[35, 50, 42, 64, 58, 78, 70, 92].map((h, i) => (
          <span
            key={i}
            className="w-full rounded-sm bg-grad"
            style={{ height: `${h * 0.18}rem` }}
          />
        ))}
      </div>
    </div>
  );
}
