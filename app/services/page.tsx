import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { PageHero, SectionHeading, CTASection } from "@/components/ui";
import { images } from "@/lib/images";
import { trustEngine, survivalKit } from "@/lib/content";

const engineImgs = [images.candles, images.terminal, images.mobile, images.desk];

export const metadata: Metadata = {
  title: "บริการ — The Engine",
  description:
    "Trust Engine + Survival Kit: Payout-Proof, Gold Setup Card, IO/Seeding, KOL, Ad-Ban Resilience และ News-Reactive Ops สำหรับสายเทรดทอง",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Engine"
        title={
          <>
            ความน่าเชื่อ <span className="flame-text">คือเงิน</span>
          </>
        }
        intro="ไม่มีใครฝากเงินเทรดทองกับ broker ที่ดูเหมือนสแกม เราจึงสร้างเครื่องยนต์ 2 ส่วน — Trust Engine ที่ดึงให้คนกล้าฝาก และ Survival Kit ที่ทำให้แคมเปญไม่มีวันสะดุด"
      />

      {/* Trust Engine */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Trust Engine"
              title="Social proof ที่ดูจริง ในทุกแคมเปญ"
              intro="เปลี่ยนความผันผวนของทองให้กลายเป็นหลักฐานความน่าเชื่อ"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {trustEngine.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="card flex h-full flex-col gap-5 p-7">
                  <Photo
                    img={engineImgs[i % engineImgs.length]}
                    ratio="aspect-[16/9]"
                    tag={`0${i + 1}`}
                  />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-snow">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-snow-muted">
                      {t.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Survival Kit */}
      <section className="section border-y border-ink-line bg-ink-soft/40">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Survival Kit"
              title="สิ่งที่เอเจนซี่อื่นไม่มี"
              intro="เกราะป้องกันแคมเปญและแบรนด์ของคุณจากความเสี่ยงเฉพาะของวงการเทรด"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {survivalKit.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card flex h-full gap-5 p-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-flame-400/40 bg-flame-400/[0.06] text-lg text-flame-300">
                    🛡
                  </span>
                  <div>
                    <h3 className="font-semibold text-snow">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-snow-muted">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables strip */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Deliverables"
              title="ทุกชิ้นออกแบบมาเพื่อเปลี่ยนยอดทักเป็นยอดฝาก"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Static Ads",
              "Reels / Video",
              "Gold Setup Card",
              "Payout-Proof Card",
              "LINE / Telegram Funnel",
              "Prop Firm Challenge Funnel",
              "Landing Page + CAPI Tracking",
              "A/B Creative Testing",
              "News-Reactive Content",
            ].map((d, i) => (
              <Reveal key={d} delay={i * 50}>
                <div className="flex items-center gap-3 rounded-xl border border-ink-line bg-ink-card/50 p-5 transition-colors hover:border-flame-400/30">
                  <span className="text-flame-400">✦</span>
                  <span className="text-sm font-medium text-snow-dim">{d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
