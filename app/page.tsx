import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Tilt from "@/components/Tilt";
import Photo from "@/components/Photo";
import PackageCard from "@/components/PackageCard";
import PlatformStrip from "@/components/PlatformStrip";
import ResultsBand from "@/components/ResultsBand";
import FAQ from "@/components/FAQ";
import { SectionHeading, CTASection } from "@/components/ui";
import { images } from "@/lib/images";
import { company, problems, packages, trustEngine } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div className="grid-bg absolute inset-0 -z-10 opacity-40" />
        <Parallax speed={0.25} className="absolute -right-40 -top-24 -z-10">
          <div className="h-[34rem] w-[34rem] rounded-full bg-grad opacity-20 blur-3xl" />
        </Parallax>
        <Parallax speed={0.18} className="absolute -left-40 top-40 -z-10">
          <div className="h-96 w-96 rounded-full bg-grape/10 blur-3xl" />
        </Parallax>

        <div className="container-page grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="animate-fade-up [animation-delay:0ms]">
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-card/60 px-4 py-1.5 text-xs font-medium text-snow-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-grad" />
                </span>
                Creative × Performance Studio · {company.niche}
              </div>
            </div>

            <h1 className="mt-7 animate-fade-up font-display text-[3.25rem] font-bold leading-[1.02] tracking-tight text-snow [animation-delay:120ms] sm:text-7xl">
              We create the <span className="flame-text">alpha.</span>
              <br />
              You market the <span className="flame-text">growth.</span>
            </h1>

            <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-snow-muted [animation-delay:260ms]">
              เอเจนซี่ครีเอทีฟที่พูดภาษาเทรดทอง XAU/USD รู้เรื่อง —
              เปลี่ยนกลยุทธ์ คอนเทนต์ และยิงแอด ให้กลายเป็น{" "}
              <strong className="text-snow">ยอดฝากจริง (FTD)</strong>{" "}
              ไม่ใช่แค่ทำสวยหรือ boost โพสต์
            </p>

            <div className="mt-9 flex flex-wrap gap-4 animate-fade-up [animation-delay:360ms]">
              <Link href="/contact" className="btn-flame">
                เริ่ม Free Strategy Session →
              </Link>
              <a
                href="/alpha-growth-ratecard-2026.pdf"
                target="_blank"
                rel="noopener"
                className="btn-ghost"
              >
                ↓ ดาวน์โหลด Rate Card (PDF)
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-snow-faint animate-fade-up [animation-delay:460ms]">
              <span>✦ Safe-Zone Copywriting</span>
              <span>✦ Strict NDA</span>
            </div>
          </div>

          {/* Creative collage — single overlay chip */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <Parallax speed={0.08}>
              <Tilt className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none" max={5}>
                <div className="card-grad overflow-hidden">
                  <Photo img={images.designApps} ratio="aspect-[4/5]" tint priority />
                </div>

                <div className="absolute -right-4 -top-4 rounded-2xl bg-grad p-[1px] shadow-xl">
                  <div className="rounded-2xl bg-ink px-5 py-4 text-center">
                    <div className="font-display text-2xl font-bold text-snow">
                      FTD
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-snow-muted">
                      เราวัดผลที่ยอดฝาก
                    </div>
                  </div>
                </div>
              </Tilt>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ───── SOCIAL PROOF ───── */}
      <section className="border-y border-ink-line bg-ink-soft/40 py-12">
        <PlatformStrip />
      </section>

      {/* ───── RESULTS (proof) ───── */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              center
              eyebrow="By the numbers"
              title="ผลลัพธ์ที่เราโฟกัส"
              intro="เราวัดที่ยอดฝาก (FTD) และต้นทุนต่อราย (CPA) — ตัวเลขประกอบเพื่อสื่อแนวทาง ปรับเป็นผลงานจริงของแบรนด์คุณได้"
            />
          </Reveal>
        </div>
        <div className="mt-12">
          <ResultsBand />
        </div>
      </section>

      {/* ───── WHY US ───── */}
      <section className="section border-t border-ink-line bg-ink-soft/40">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why brands choose us"
              title={
                <>
                  เอเจนซี่ทั่วไปทำสวยได้{" "}
                  <span className="flame-text">แต่ไม่เข้าใจโลกของทอง</span>
                </>
              }
              intro="4 ปัญหาที่สายเทรดทองเจอทุกวัน — และวิธีที่เราแก้ให้ ด้วยทีมที่เทรดจริงและเข้าใจหลังบ้านฟินเทค"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={p.no} delay={i * 80}>
                <div className="card group h-full p-7 transition-colors hover:border-flame-400/30">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-bold text-flame-400/70">
                      {p.no}
                    </span>
                    <h3 className="font-semibold leading-snug text-snow">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-snow-faint">
                    {p.problem}
                  </p>
                  <p className="mt-4 border-t border-ink-line pt-4 text-sm leading-relaxed text-snow-dim">
                    <span className="font-semibold text-flame-300">ทำไมเรา · </span>
                    {p.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 text-center">
              <Link href="/why-us" className="btn-ghost">
                ดู Creative vs Boost →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── THE ENGINE ───── */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Tilt max={5}>
              <Photo
                img={images.bitcoin}
                ratio="aspect-[4/3]"
                tag="Social proof"
                label="ความน่าเชื่อ = เงิน"
              />
            </Tilt>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="The Engine"
                title="ทำไม Creative เรา ดึง FTD ได้"
                intro="ในวงการนี้ ความน่าเชื่อคือเงิน — เราจึงใส่ social proof ที่ดูจริงเข้าไปในทุกแคมเปญ"
              />
              <ul className="mt-8 space-y-5">
                {trustEngine.map((t) => (
                  <li key={t.title} className="flex gap-4">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-grad text-xs text-ink">
                      ✦
                    </span>
                    <div>
                      <div className="font-semibold text-snow">{t.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-snow-faint">
                        {t.body}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn-ghost mt-8">
                ดูบริการทั้งหมด →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── PACKAGES ───── */}
      <section className="section border-t border-ink-line bg-ink-soft/40">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Packages"
              title="ธุรกิจคุณ ขนาดไหน?"
              intro="เลือกแค่ขนาด — ไม่มีแพ็กเกจแยกย่อยให้ปวดหัว · สัญญาขั้นต่ำ 3 เดือน"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 100}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Link href="/packages" className="btn-ghost">
                ดูตารางเทียบทุกฟีเจอร์ →
              </Link>
              <p className="text-center text-xs text-snow-faint">
                ราคายังไม่รวม VAT 7% · ไม่รวม AD SPEND และค่าตัว KOL (จ่ายตามจริง)
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              center
              eyebrow="FAQ"
              title="คำถามที่เจอบ่อย"
              intro="ข้อกังวลที่ลูกค้าสายเทรดถามเรามากที่สุด"
            />
          </Reveal>
          <FAQ />
        </div>
      </section>

      <CTASection />
    </>
  );
}
