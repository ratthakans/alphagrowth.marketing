import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHeading, CTASection } from "@/components/ui";
import { images } from "@/lib/images";
import { method, glossary, finePrint } from "@/lib/content";

export const metadata: Metadata = {
  title: "วิธีการทำงาน",
  description:
    "กระบวนการ 4 เฟส: Setup & Test → Optimize → Scale → Compound พร้อม FTD Glossary และเงื่อนไขการทำงานทั้งหมด",
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Our method"
        title={
          <>
            เห็นผลลัพธ์ <span className="flame-text">เมื่อไหร่</span>
          </>
        }
        intro="ไม่ใช่เวทมนตร์ — เป็นกระบวนการที่ทบต้น (compound) ยิ่งทำนาน CPA ยิ่งถูกลง ต่างจากการยิงแอดล้วนที่หยุดยิงแล้วยอดหาย"
      />

      {/* Timeline */}
      <section className="section">
        <div className="container-page">
          <div className="relative space-y-6">
            <div className="absolute left-7 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-flame-400/50 to-transparent sm:block" />
            {method.map((m, i) => (
              <Reveal key={m.step} delay={i * 80}>
                <div className="relative grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-flame-400/40 bg-ink font-display text-2xl font-semibold text-flame-300">
                    {m.step}
                  </div>
                  <div className="card p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-snow">
                        {m.phase}
                      </h3>
                      <span className="rounded-full border border-flame-600/30 bg-flame-400/[0.05] px-3 py-1 text-xs font-medium text-flame-200">
                        {m.when}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-snow-muted">
                      {m.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compound banner */}
      <section className="pb-4">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-ink-line">
              <Image
                src={images.videoEditing.src}
                alt={images.videoEditing.alt}
                width={1200}
                height={500}
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-xl px-8 sm:px-12">
                  <p className="eyebrow">Compound effect</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-snow sm:text-3xl">
                    Trust + ฐานคอนเทนต์ที่สะสม{" "}
                    <span className="flame-text">ทบต้นเหมือนพอร์ต</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-snow-muted">
                    ยิ่งทำนาน ระบบยิ่งรู้จักลูกค้าจริง CPA ยิ่งถูกลง — ต่างจากการ
                    boost ที่หยุดแล้วยอดหายทันที
                  </p>
                </div>
              </div>
              <span className="mono absolute bottom-2 right-3 text-[8px] uppercase tracking-wide text-snow/40">
                {images.videoEditing.credit}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Glossary */}
      <section className="section border-y border-ink-line bg-ink-soft/40">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="FTD Glossary"
              title="ศัพท์ที่เราพูดกันรู้เรื่อง"
              intro="ภาษาเดียวกับเทรดเดอร์ — เพราะเราอยู่ในวงการจริง"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {glossary.map((g, i) => (
              <Reveal key={g.term} delay={i * 60}>
                <div className="card h-full p-6">
                  <div className="font-display text-lg font-semibold text-flame-300">
                    {g.term}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-snow-muted">
                    {g.def}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fine print */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="The fine print"
              title="เงื่อนไข & ความรับผิดชอบ"
              intro="โปร่งใสตั้งแต่ต้น — ไม่มีค่าแฝง ไม่มีเซอร์ไพรส์"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {finePrint.map((f, i) => (
              <Reveal key={f.no} delay={i * 60}>
                <div className="card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-ink-line text-sm font-bold text-flame-300">
                      {f.no}
                    </span>
                    <h3 className="font-semibold text-snow">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-snow-muted">
                    {f.body}
                  </p>
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
