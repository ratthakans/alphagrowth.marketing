import Image from "next/image";
import type { Img } from "@/lib/images";

export default function Photo({
  img,
  ratio = "aspect-[4/3]",
  className = "",
  tag,
  label,
  priority = false,
  tint = true,
}: {
  img: Img;
  ratio?: string;
  className?: string;
  tag?: string;
  label?: string;
  priority?: boolean;
  tint?: boolean;
}) {
  return (
    <div
      className={`group relative ${ratio} w-full overflow-hidden rounded-2xl border border-ink-line bg-ink-card ${className}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />

      {/* darkening + subtle brand tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      {tint && (
        <div className="bg-grad absolute inset-0 opacity-20 mix-blend-overlay" />
      )}

      {/* tag chip */}
      {tag && (
        <span className="mono absolute left-3 top-3 z-10 rounded-md border border-flame-400/40 bg-ink/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-flame-300 backdrop-blur">
          {tag}
        </span>
      )}

      {/* bottom label */}
      {label && (
        <span className="absolute bottom-3 left-4 z-10 font-display text-lg font-semibold text-snow drop-shadow">
          {label}
        </span>
      )}

      {/* corner ticks */}
      <span className="absolute right-3 top-3 z-10 h-3 w-3 border-r border-t border-flame-400/60" />
      <span className="absolute bottom-3 right-3 z-10 h-3 w-3 border-b border-r border-flame-400/60" />

      {/* credit */}
      <span className="mono absolute bottom-1.5 right-2 z-10 text-[8px] uppercase tracking-wide text-snow/40">
        {img.credit}
      </span>
    </div>
  );
}
