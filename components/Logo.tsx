import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-end gap-1.5 leading-none">
      <span className="font-display text-2xl font-bold tracking-tight text-snow transition-opacity group-hover:opacity-90">
        alpha
        <span className="text-gradient">.</span>
      </span>
      {!compact && (
        <span className="mb-1 hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-snow-faint sm:inline">
          marketing
        </span>
      )}
    </Link>
  );
}
