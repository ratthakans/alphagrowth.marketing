import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PackageCard from "@/components/PackageCard";
import ComparisonTable from "@/components/ComparisonTable";
import { PageHero, SectionHeading, CTASection } from "@/components/ui";
import { images } from "@/lib/images";
import { packages, budgetNote, includedInAll } from "@/lib/content";

export const metadata: Metadata = {
  title: "แพ็กเกจ & ราคา",
  description:
    "3 ขนาดแพ็กเกจ S / M / L สำหรับ IB, Academy, Broker และ Prop Firm — เลือกแค่ขนาด ไม่มีค่าแฝง ราคาเริ่ม ฿18,900/เดือน",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title={
          <>
            ธุรกิจคุณ <span className="flame-text">ขนาดไหน?</span>
          </>
        }
        intro="เลือกแค่ขนาด — ไม่มีแพ็กเกจแยกย่อยให้ปวดหัว · สัญญาขั้นต่ำ 3 เดือน · ข้อเสนอเดียวจบในตารางเดียว"
      />

      {/* Cards */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 100}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 rounded-2xl border border-ink-line bg-ink-card/50 p-6 text-center text-sm text-snow-muted">
              {budgetNote}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coins banner */}
      <section className="pb-4">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-ink-line">
              <Image
                src={images.studio.src}
                alt={images.studio.alt}
                width={1200}
                height={420}
                className="h-44 w-full object-cover sm:h-56"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
              <div className="absolute inset-0 flex items-center px-8 sm:px-12">
                <div>
                  <p className="eyebrow">Multi-broker friendly</p>
                  <h3 className="mt-2 max-w-lg font-display text-xl font-semibold text-snow sm:text-2xl">
                    ทำงานทุกค่าย Broker / IB / Prop Firm อย่างเป็นกลาง · เซ็น
                    Strict NDA
                  </h3>
                </div>
              </div>
              <span className="mono absolute bottom-2 right-3 text-[8px] uppercase tracking-wide text-snow/40">
                {images.studio.credit}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section border-t border-ink-line bg-ink-soft/40">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Side by side"
              title="เทียบทุกฟีเจอร์ แบบละเอียด"
              intro="กด (i) ท้ายแต่ละฟีเจอร์เพื่อดูคำอธิบายว่าคืออะไร · M คือตัวที่คนเลือกมากสุด"
            />
          </Reveal>

          <Reveal>
            <div className="mt-10">
              <ComparisonTable />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-snow-faint">
                รวมในทุกแพ็ก ·
              </span>
              {includedInAll.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-flame-600/30 bg-flame-400/[0.05] px-3 py-1 text-xs text-flame-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-snow-faint">
              ราคาต่อเดือน · ALL PRICES EXCLUDE VAT 7%
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
