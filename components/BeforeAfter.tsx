"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Img } from "@/lib/images";

export default function BeforeAfter({ img }: { img: Img }) {
  const [pos, setPos] = useState(52);
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  return (
    <div
      ref={wrap}
      className="relative aspect-[16/11] w-full select-none overflow-hidden rounded-3xl border border-ink-line"
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => dragging.current && move(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* AFTER — our creative (vibrant) */}
      <div className="absolute inset-0">
        <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-cover" />
        <div className="bg-grad absolute inset-0 opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-grad px-3 py-1 text-xs font-bold text-ink">
          ALPHA CREATIVE
        </span>
      </div>

      {/* BEFORE — plain boost (dull) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden border-r-0"
        style={{ width: `${pos}%` }}
      >
        <div className="relative h-full" style={{ width: wrap.current?.offsetWidth ?? 9999 }}>
          <Image
            src={img.src}
            alt="boost"
            fill
            sizes="100vw"
            className="object-cover grayscale brightness-[0.55] contrast-75"
          />
          <div className="absolute inset-0 bg-ink/40" />
          <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-ink/60 px-3 py-1 text-xs font-semibold text-snow-dim backdrop-blur">
            BOOST โพสต์ธรรมดา
          </span>
        </div>
      </div>

      {/* handle */}
      <div
        className="absolute inset-y-0 z-10 -ml-px w-0.5 cursor-ew-resize bg-grad"
        style={{ left: `${pos}%` }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-grad text-ink shadow-lg">
          <span className="text-sm font-bold">⇄</span>
        </span>
      </div>
    </div>
  );
}
