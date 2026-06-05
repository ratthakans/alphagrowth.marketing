import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5">
      <div className="text-center">
        <div className="font-display text-7xl font-semibold flame-text">404</div>
        <p className="mt-4 text-snow-muted">
          ไม่พบหน้านี้ — อาจถูกย้ายหรือยังไม่มีอยู่
        </p>
        <Link href="/" className="btn-flame mt-8">
          กลับหน้าแรก
        </Link>
      </div>
    </section>
  );
}
