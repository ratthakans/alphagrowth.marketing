"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-line overflow-hidden rounded-2xl border border-ink-line bg-ink-card/40">
      {faqs.map((f, i) => {
        const active = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
              aria-expanded={active}
            >
              <span className="font-medium text-snow">{f.q}</span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink-line text-flame-300 transition-transform duration-300 ${
                  active ? "rotate-45 border-flame-400/60" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-snow-muted">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
