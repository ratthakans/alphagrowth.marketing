import Image from "next/image";
import { galleryStrip } from "@/lib/images";

export default function Gallery() {
  const row = [...galleryStrip, ...galleryStrip];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="flex w-max animate-ticker-rev gap-4">
        {row.map((img, i) => (
          <div
            key={i}
            className="group relative h-40 w-64 shrink-0 overflow-hidden rounded-xl border border-ink-line sm:h-48 sm:w-80"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="320px"
              className="object-cover grayscale-[30%] transition duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-flame-500/10 mix-blend-overlay" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
