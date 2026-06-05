"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // hide on the contact page (already a big CTA) and once dismissed
  if (closed || pathname === "/contact") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-[120%]"
      }`}
    >
      <div className="container-page pb-4">
        <div className="card-grad flex items-center justify-between gap-4 overflow-hidden bg-ink-card/95 px-5 py-3 backdrop-blur-xl">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-snow">
              พร้อมเปลี่ยน Ad Spend เป็น FTD?
            </p>
            <p className="hidden truncate text-xs text-snow-muted sm:block">
              Free Strategy Session — วินิจฉัยเพจ + 3 Quick Wins ฟรี ไม่มีข้อผูกมัด
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn-flame whitespace-nowrap !px-5 !py-2.5">
              จองเลย →
            </Link>
            <button
              onClick={() => setClosed(true)}
              aria-label="ปิด"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-line text-snow-muted hover:text-snow"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
