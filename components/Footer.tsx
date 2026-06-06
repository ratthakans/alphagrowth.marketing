import Link from "next/link";
import Logo from "./Logo";
import { company, nav, riskWarning } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-snow-muted">
              {company.tagline}
            </p>
            <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-flame-400">
              {company.niche}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-snow-faint">
              เมนู
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-snow-muted transition-colors hover:text-flame-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-snow-faint">
              ติดต่อ
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-snow-muted">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-flame-200"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="transition-colors hover:text-flame-200"
                >
                  {company.contactName} · {company.phoneDisplay}
                </a>
              </li>
              <li>LINE · Telegram {company.line}</li>
              <li>{company.web}</li>
              <li className="text-snow-faint">{company.hours}</li>
            </ul>
            <Link href="/contact" className="btn-flame mt-5">
              Free Strategy Session
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-flame-600/30 bg-flame-400/[0.04] p-4">
          <p className="text-[11px] leading-relaxed text-snow-faint">
            <span className="font-semibold text-flame-400">⚠ RISK WARNING — </span>
            {riskWarning}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-ink-line pt-6 text-xs text-snow-faint sm:flex-row sm:items-center">
          <p>
            © 2026 {company.name} · Bangkok · All prices exclude VAT 7%
          </p>
          <p>Issue {company.issue}</p>
        </div>
      </div>
    </footer>
  );
}
