"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { comparisonGroups, comparisonPrice } from "@/lib/content";

function Cell({ v, highlight }: { v: string; highlight?: boolean }) {
  let content: React.ReactNode = v;
  if (v === "✓") {
    content = (
      <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-grad text-xs font-bold text-ink">
        ✓
      </span>
    );
  } else if (v === "—") {
    content = <span className="text-snow-faint">—</span>;
  } else if (v === "Priority" || v === "Add-on") {
    content = (
      <span className="inline-block rounded-full border border-flame-400/40 bg-flame-400/10 px-2 py-0.5 text-[11px] font-semibold text-flame-300">
        {v}
      </span>
    );
  }
  return (
    <td
      className={`px-3 py-3 text-center text-sm ${
        highlight ? "bg-flame-400/[0.05] text-snow" : "text-snow-dim"
      }`}
    >
      {content}
    </td>
  );
}

export default function ComparisonTable() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-line">
      <table className="w-full min-w-[760px] border-collapse">
        {/* Header */}
        <thead>
          <tr className="bg-ink-card">
            <th className="sticky left-0 z-10 w-[34%] bg-ink-card p-4 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-snow-faint">
                เทียบทุกฟีเจอร์
              </span>
            </th>
            {[
              { id: "S", name: "Package S", aud: "IB / Master Trader", price: comparisonPrice.s },
              { id: "M", name: "Package M", aud: "Academy / Mid Broker", price: comparisonPrice.m, hot: true },
              { id: "L", name: "Package L", aud: "Broker / Prop Firm", price: comparisonPrice.l },
            ].map((p) => (
              <th
                key={p.id}
                className={`relative p-4 text-center align-top ${
                  p.hot ? "bg-flame-400/[0.07]" : ""
                }`}
              >
                {p.hot && (
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-grad px-3 py-0.5 text-[10px] font-bold text-ink">
                    ★ แนะนำ
                  </span>
                )}
                <div className={`font-display text-lg font-bold ${p.hot ? "text-gradient" : "text-snow"}`}>
                  {p.name}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wider text-snow-faint">
                  {p.aud}
                </div>
                <div className="mt-2 font-display text-xl font-bold text-snow">
                  {p.price}
                </div>
                <div className="text-[10px] text-snow-faint">/ เดือน</div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {comparisonGroups.map((group, gi) => (
            <Fragment key={`g${gi}`}>
              {/* group header */}
              <tr>
                <td
                  colSpan={4}
                  className="border-t border-ink-line bg-ink-soft/60 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-flame-300"
                >
                  {group.title}
                </td>
              </tr>

              {group.rows.map((row, ri) => {
                const key = `${gi}-${ri}`;
                const isOpen = open[key];
                return (
                  <Fragment key={key}>
                    <tr
                      className="border-t border-ink-line transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="sticky left-0 z-10 bg-ink px-4 py-3">
                        <span className="inline-flex items-center gap-2 text-sm text-snow-dim">
                          {row.label}
                          <button
                            onClick={() => toggle(key)}
                            aria-label={`อธิบาย ${row.label}`}
                            aria-expanded={isOpen}
                            className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[9px] font-bold transition-colors ${
                              isOpen
                                ? "border-flame-400 bg-flame-400 text-ink"
                                : "border-snow-faint/60 text-snow-faint hover:border-flame-400 hover:text-flame-300"
                            }`}
                          >
                            i
                          </button>
                        </span>
                      </td>
                      <Cell v={row.s} />
                      <Cell v={row.m} highlight />
                      <Cell v={row.l} />
                    </tr>
                    {isOpen && (
                      <tr className="bg-ink-soft/40">
                        <td colSpan={4} className="px-4 pb-3 pt-0">
                          <div className="flex gap-2 rounded-lg border border-flame-400/20 bg-flame-400/[0.04] p-3 text-xs leading-relaxed text-snow-muted">
                            <span className="text-flame-300">ⓘ</span>
                            <span>{row.info}</span>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </Fragment>
          ))}

          {/* CTA row */}
          <tr className="border-t border-ink-line bg-ink-card">
            <td className="sticky left-0 z-10 bg-ink-card px-4 py-4 text-xs text-snow-faint">
              เลือกแพ็กที่ใช่สำหรับธุรกิจคุณ
            </td>
            {["S", "M", "L"].map((id) => (
              <td
                key={id}
                className={`px-3 py-4 text-center ${id === "M" ? "bg-flame-400/[0.05]" : ""}`}
              >
                <Link
                  href="/contact"
                  className={`${id === "M" ? "btn-flame" : "btn-ghost"} !px-4 !py-2 text-xs`}
                >
                  เลือก {id}
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
