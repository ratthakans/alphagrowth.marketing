import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Photo from "@/components/Photo";
import { PageHero } from "@/components/ui";
import { images } from "@/lib/images";
import { company, freeSession, riskWarning } from "@/lib/content";

export const metadata: Metadata = {
  title: "ติดต่อ — Free Strategy Session",
  description:
    "เริ่มที่ Free Strategy Session ฟรี ไม่มีข้อผูกมัด — Quick Audit, 3 Quick Wins และ Custom Package Recommendation",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title={
          <>
            พร้อมเปลี่ยน <span className="flame-text">Ad Spend</span> เป็น FTD?
          </>
        }
        intro={freeSession.body}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: info */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl font-semibold text-snow">
                  ใน Free Strategy Session คุณจะได้
                </h2>
                <ul className="mt-5 space-y-4">
                  {freeSession.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-flame-400/40 text-xs text-flame-300">
                        →
                      </span>
                      <span className="text-sm leading-relaxed text-snow-dim">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 border-t border-ink-line pt-8">
                <ContactRow
                  label="WEB · BOOK ONLINE 24/7"
                  value={company.web}
                  href={`https://${company.web}`}
                />
                <ContactRow
                  label="EMAIL · ตอบกลับใน 24 ชม."
                  value={company.email}
                  href={`mailto:${company.email}`}
                />
                <ContactRow
                  label={`LINE · TELEGRAM · ${company.hours}`}
                  value={company.line}
                />
              </div>

              <div className="rounded-xl border border-ink-line bg-ink-card/50 p-5">
                <p className="text-sm font-medium text-flame-300">
                  Trade your traditional agency for a financial-fluent partner.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-snow-faint">
                  {company.niche}
                </p>
              </div>

              <Photo
                img={images.studio}
                ratio="aspect-[16/9]"
                tag="Bangkok · 2026"
              />
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-xl border border-flame-600/30 bg-flame-400/[0.04] p-5">
            <p className="text-[11px] leading-relaxed text-snow-faint">
              <span className="font-semibold text-flame-400">
                ⚠ RISK WARNING —{" "}
              </span>
              {riskWarning}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-xl border border-ink-line bg-ink-card/40 p-5 transition-colors hover:border-flame-400/30">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-snow-faint">
        {label}
      </div>
      <div className="mt-1 font-display text-lg text-snow">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
