"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { comparisonGroups, comparisonPrice } from "@/lib/content";

const PKGS = [
  { id: "S", name: "Package S", aud: "IB / Master Trader", price: comparisonPrice.s, key: "s" as const },
  { id: "M", name: "Package M", aud: "Academy / Mid Broker", price: comparisonPrice.m, key: "m" as const, hot: true },
  { id: "L", name: "Package L", aud: "Broker / Prop Firm", price: comparisonPrice.l, key: "l" as const },
];

// Render a single comparison value as JSX (✓ / — / badge / text).
function renderVal(v: string) {
  if (v === "✓")
    return (
      <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-grad text-xs font-bold text-ink">
        ✓
      </span>
    );
  if (v === "—") return <span className="text-snow-faint">—</span>;
  if (v === "Priority" || v === "Add-on")
    return (
      <span className="inline-block rounded-full border border-flame-400/40 bg-flame-400/10 px-2 py-0.5 text-[11px] font-semibold text-flame-300">
        {v}
      </span>
    );
  return <span>{v}</span>;
}

function InfoBtn({ open, onClick, label }: { open: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={`อธิบาย ${label}`}
      aria-expanded={open}
      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[9px] font-bold transition-colors ${
        open
          ? "border-flame-400 bg-flame-400 text-ink"
          : "border-snow-faint/60 text-snow-faint hover:border-flame-400 hover:text-flame-300"
      }`}
    >
      i
    </button>
  );
}

export default function ComparisonTable() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [tab, setTab] = useState<"s" | "m" | "l">("m");
  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  return (
    <div>
      {/* ───────── MOBILE: tabbed, one package at a time ───────── */}
      <div className="md:hidden">
        <div className="grid grid-cols-3 gap-2">
          {PKGS.map((p) => {
            const active = tab === p.key;
            return (
              <button
                key={p.id}
                onClick={() => setTab(p.key)}
                className={`rounded-xl border p-3 text-center transition-all ${
                  active
                    ? "border-flame-400/60 bg-flame-400/[0.08]"
                    : "border-ink-line bg-ink-card/40"
                }`}
              >
                <div className={`font-display text-base font-bold ${active ? "text-gradient" : "text-snow"}`}>
                  {p.id}
                  {p.hot && " ★"}
                </div>
                <div className="mt-1 font-display text-sm font-bold text-snow">{p.price}</div>
                <div className="text-[9px] text-snow-faint">/ เดือน</div>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-center text-[11px] text-snow-faint">
          {PKGS.find((p) => p.key === tab)?.aud} · แตะ (i) เพื่อดูคำอธิบาย
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-ink-line">
          {comparisonGroups.map((group, gi) => (
            <div key={gi}>
              <div className="bg-ink-soft/60 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-flame-300">
                {group.title}
              </div>
              {group.rows.map((row, ri) => {
                const key = `${gi}-${ri}`;
                const isOpen = open[key];
                return (
                  <div key={key} className="border-t border-ink-line">
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <span className="flex items-center gap-2 text-sm text-snow-dim">
                        {row.label}
                        <InfoBtn open={isOpen} onClick={() => toggle(key)} label={row.label} />
                      </span>
                      <span className="shrink-0 text-right text-sm font-medium text-snow">
                        {renderVal(row[tab])}
                      </span>
                    </div>
                    {isOpen && (
                      <div className="px-4 pb-3">
                        <div className="flex gap-2 rounded-lg border border-flame-400/20 bg-flame-400/[0.04] p-3 text-xs leading-relaxed text-snow-muted">
                          <span className="text-flame-300">ⓘ</span>
                          <span>{row.info}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <Link href="/contact" className="btn-flame mt-5 w-full">
          เลือก {PKGS.find((p) => p.key === tab)?.id} — คุยกับเรา →
        </Link>
      </div>

      {/* ───────── DESKTOP: full 3-column table ───────── */}
      <div className="hidden overflow-x-auto rounded-2xl border border-ink-line md:block">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="bg-ink-card">
              <th className="sticky left-0 z-10 w-[34%] bg-ink-card p-4 text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-snow-faint">
                  เทียบทุกฟีเจอร์
                </span>
              </th>
              {PKGS.map((p) => (
                <th
                  key={p.id}
                  className={`relative p-4 text-center align-top ${p.hot ? "bg-flame-400/[0.07]" : ""}`}
                >
                  {p.hot && (
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-grad px-3 py-0.5 text-[10px] font-bold text-ink">
                      ★ แนะนำ
                    </span>
                  )}
                  <div className={`font-display text-lg font-bold ${p.hot ? "text-gradient" : "text-snow"}`}>
                    {p.name}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-snow-faint">{p.aud}</div>
                  <div className="mt-2 font-display text-xl font-bold text-snow">{p.price}</div>
                  <div className="text-[10px] text-snow-faint">/ เดือน</div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {comparisonGroups.map((group, gi) => (
              <Fragment key={`g${gi}`}>
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
                      <tr className="border-t border-ink-line transition-colors hover:bg-white/[0.02]">
                        <td className="sticky left-0 z-10 bg-ink px-4 py-3">
                          <span className="inline-flex items-center gap-2 text-sm text-snow-dim">
                            {row.label}
                            <InfoBtn open={isOpen} onClick={() => toggle(key)} label={row.label} />
                          </span>
                        </td>
                        <td className="px-3 py-3 text-center text-sm text-snow-dim">{renderVal(row.s)}</td>
                        <td className="bg-flame-400/[0.05] px-3 py-3 text-center text-sm text-snow">
                          {renderVal(row.m)}
                        </td>
                        <td className="px-3 py-3 text-center text-sm text-snow-dim">{renderVal(row.l)}</td>
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

            <tr className="border-t border-ink-line bg-ink-card">
              <td className="sticky left-0 z-10 bg-ink-card px-4 py-4 text-xs text-snow-faint">
                เลือกแพ็กที่ใช่สำหรับธุรกิจคุณ
              </td>
              {PKGS.map((p) => (
                <td key={p.id} className={`px-3 py-4 text-center ${p.hot ? "bg-flame-400/[0.05]" : ""}`}>
                  <Link
                    href="/contact"
                    className={`${p.hot ? "btn-flame" : "btn-ghost"} !px-4 !py-2 text-xs`}
                  >
                    เลือก {p.id}
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
