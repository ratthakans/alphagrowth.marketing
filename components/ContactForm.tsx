"use client";

import { useState } from "react";

const packageOptions = ["Package S", "Package M", "Package L", "ยังไม่แน่ใจ"];
const channelOptions = ["Facebook", "Instagram", "TikTok", "LINE", "Telegram"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [channels, setChannels] = useState<string[]>([]);

  const toggleChannel = (c: string) =>
    setChannels((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo submit — no backend wired. Plug in your endpoint / CRM here.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card grid place-items-center p-12 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-flame-400/40 bg-flame-400/[0.06] text-3xl text-flame-300">
          ✓
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-snow">
          ได้รับข้อมูลแล้ว ขอบคุณครับ
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-snow-muted">
          ทีม Alpha Growth Marketing จะติดต่อกลับภายใน 24 ชม. เพื่อนัด Free
          Strategy Session — ระหว่างนี้ทักเราได้เลยที่ LINE/Telegram
          @alphagrowthmkt
        </p>
        <button
          onClick={() => {
            setSent(false);
            setChannels([]);
          }}
          className="btn-ghost mt-8"
        >
          ส่งฟอร์มอีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6 p-8 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="ชื่อ-นามสกุล" name="name" required placeholder="ชื่อของคุณ" />
        <Field
          label="แบรนด์ / บริษัท"
          name="company"
          placeholder="IB / Broker / Academy / Prop Firm"
        />
        <Field
          label="อีเมล"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
        />
        <Field label="เบอร์ / LINE" name="contact" placeholder="08x-xxx-xxxx" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-snow-dim">
          สนใจแพ็กเกจ
        </label>
        <div className="relative">
          <select
            name="package"
            className="w-full appearance-none rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-snow-dim outline-none transition-colors focus:border-flame-400/60"
            defaultValue=""
          >
            <option value="" disabled>
              เลือกแพ็กเกจ
            </option>
            {packageOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-snow-faint">
            ▾
          </span>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-snow-dim">
          ช่องทางปัจจุบัน
        </label>
        <div className="flex flex-wrap gap-2">
          {channelOptions.map((c) => {
            const active = channels.includes(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggleChannel(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-flame-400/60 bg-flame-400/[0.08] text-flame-200"
                    : "border-ink-line text-snow-muted hover:border-flame-400/30"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-snow-dim">
          เล่าให้เราฟังหน่อย
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="เป้าหมาย FTD ต่อเดือน, งบแอดคร่าวๆ, โบรกเกอร์/โปรดักส์ ฯลฯ"
          className="w-full resize-none rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-snow-dim outline-none transition-colors placeholder:text-snow-faint focus:border-flame-400/60"
        />
      </div>

      <button type="submit" className="btn-flame w-full">
        จอง Free Strategy Session →
      </button>
      <p className="text-center text-xs text-snow-faint">
        การส่งฟอร์มถือว่ายอมรับการติดต่อกลับจากทีมงาน · ข้อมูลของคุณถูกเก็บเป็นความลับ
        (Strict NDA)
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-snow-dim">
        {label} {required && <span className="text-flame-400">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-snow-dim outline-none transition-colors placeholder:text-snow-faint focus:border-flame-400/60"
      />
    </div>
  );
}
