import Image from "next/image";
import type { Img } from "@/lib/images";

export default function StatCard({
  img,
  value,
  label,
  tag,
}: {
  img: Img;
  value: string;
  label: string;
  tag?: string;
}) {
  return (
    <div className="card-grad group relative h-56 overflow-hidden">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      {/* legibility + brand wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
      <div className="bg-grad absolute inset-0 opacity-25 mix-blend-overlay" />

      {tag && (
        <span className="mono absolute left-4 top-4 rounded-md border border-white/15 bg-ink/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-snow/80 backdrop-blur">
          {tag}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="font-display text-3xl font-bold tracking-tight text-snow drop-shadow-lg sm:text-4xl">
          {value}
        </div>
        <div className="mt-1 h-0.5 w-10 rounded-full bg-grad" />
        <p className="mt-3 text-sm leading-snug text-snow-dim">{label}</p>
      </div>
    </div>
  );
}
