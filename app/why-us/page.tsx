import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";
import { PageHero, CTASection } from "@/components/ui";
import { images } from "@/lib/images";
import { problems } from "@/lib/content";

export const metadata: Metadata = {
  title: "ทำไมต้องเรา",
  description:
    "4 ปัญหาที่สายเทรดทอง XAU/USD เจอ และทำไม Alpha Growth Marketing คือคำตอบ — ทีมที่เทรดจริงและเข้าใจหลังบ้านฟินเทค",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why us"
        title={
          <>
            เอเจนซี่ทั่วไปไม่เข้าใจ{" "}
            <span className="flame-text">โลกของทอง</span>
          </>
        }
        intro="4 ปัญหาที่สายเทรดทองเจอทุกวัน — และวิธีที่เราแก้ให้ ต่างจากเอเจนซี่ที่แค่ทำสวยแต่ไม่เข้าใจวงการ"
      />

      <section className="section">
        <div className="container-page space-y-6">
          {problems.map((p, i) => (
            <Reveal key={p.no} delay={i * 60}>
              <div className="card grid gap-8 p-8 md:grid-cols-[auto_1fr] sm:p-10">
                <div className="font-display text-6xl font-semibold text-flame-400/30">
                  {p.no}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-snow">
                    {p.title}
                  </h2>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-ink-line bg-ink/40 p-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-red-400/70">
                        ปัญหา
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-snow-muted">
                        {p.problem}
                      </p>
                    </div>
                    <div className="rounded-xl border border-flame-600/30 bg-flame-400/[0.05] p-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-flame-400">
                        ทำไมเรา
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-snow-dim">
                        {p.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Creative vs Boost */}
      <section className="section border-y border-ink-line bg-ink-soft/40">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Creative vs Boost</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-snow sm:text-4xl">
                เราคิด กลยุทธ์ + ครีเอทีฟ + ยิงแอด + วัดผล FTD{" "}
                <span className="flame-text">ครบจบในที่เดียว</span>
              </h2>
              <p className="mt-5 leading-relaxed text-snow-muted">
                ไม่ใช่แค่รับจ้างทำรูปหรือ boost โพสต์ · ทุกชิ้นออกแบบมาเพื่อเปลี่ยน
                ยอดทักให้เป็นยอดฝากจริง
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-ink-line bg-ink/40 p-5">
                  <div className="text-sm font-semibold text-snow-faint">
                    เอเจนซี่ทั่วไป
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-snow-faint">
                    <li>✕ ทำรูปสวยแต่ไม่ตรงสายทอง</li>
                    <li>✕ ขายยอดไลก์ / คนทักราคาถูก</li>
                    <li>✕ ไม่เข้าใจ payout / compliance</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-flame-600/30 bg-flame-400/[0.05] p-5">
                  <div className="text-sm font-semibold text-flame-300">
                    Alpha Growth Marketing
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-snow-dim">
                    <li>✦ ทีมเทรด XAU/USD จริง</li>
                    <li>✦ โฟกัส FTD + Lot Volume</li>
                    <li>✦ Safe-Zone + Survival Kit</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <BeforeAfter img={images.social} />
              <p className="mt-3 text-center text-xs text-snow-faint">
                ↔ ลากสไลเดอร์เทียบ Boost ธรรมดา กับ Creative ของเรา
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
