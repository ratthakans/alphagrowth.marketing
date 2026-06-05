// Single source of truth — derived from the Alpha Growth Marketing 2026 Rate Card.

export const company = {
  name: "Alpha Growth Marketing",
  alpha: "α",
  tagline: "We create the alpha. You market the growth.",
  niche: "XAU/USD · FOREX · PROP FIRM — BANGKOK",
  web: "alphagrowth.marketing",
  email: "hello@alphagrowth.marketing",
  line: "@alphagrowthmkt",
  hours: "MON–FRI 10:00–18:00",
  issue: "2026 · 01",
};

export const nav = [
  { href: "/", label: "หน้าแรก" },
  { href: "/why-us", label: "ทำไมต้องเรา" },
  { href: "/services", label: "บริการ" },
  { href: "/packages", label: "แพ็กเกจ" },
  { href: "/method", label: "วิธีการทำงาน" },
  { href: "/contact", label: "ติดต่อ" },
];

export const ticker = [
  "XAU/USD",
  "FVG",
  "LIQUIDITY SWEEP",
  "DXY",
  "FTD",
  "LOT VOLUME",
  "PAYOUT-PROOF",
  "PROP FIRM",
  "NFP · CPI · FOMC",
  "SAFE-ZONE COPY",
];

// ── WHY US — 4 ปัญหา ────────────────────────────────────────────
export const problems = [
  {
    no: "01",
    title: "คุยภาษาเทรดไม่รู้เรื่อง คอนเทนต์เลยดูไม่ตรงสายทอง",
    problem:
      "เอเจนซี่ทั่วไปไม่เข้าใจ XAU/USD, FVG, Liquidity Sweep หรือความสัมพันธ์ DXY–ทอง เทรดเดอร์สายทองกวาดตาแวบเดียวก็รู้ว่าไม่ใช่คนในวงการ แบรนด์ขาดความน่าเชื่อถือทันที",
    answer:
      "ทีมเราเทรด XAU/USD จริง + เข้าใจหลังบ้านฟินเทค ย่อย setup ทองยากๆ เป็นงานดีไซน์ระดับ Editorial ที่ดึงดูดกลุ่มทุนหนา ไม่ต้องบรีฟใหม่",
  },
  {
    no: "02",
    title: "แอดโดนแบนรายวัน เพจปลิวจนธุรกิจชะงัก",
    problem:
      "กฎ Meta/TikTok เปลี่ยนตลอด 24 ชม. การ์ดโชว์กำไรทองนิดเดียวก็เข้าข่าย “การันตีผลตอบแทน” แอดโดน reject เพจหลักปลิว งบสูญเปล่า",
    answer:
      "Safe-Zone Copywriting เขียน payout-proof ให้ผ่านนโยบาย + Ad-Ban Resilience (เพจ/บัญชีสำรองวอร์มรอไว้) แคมเปญรันต่อเนื่องไม่สะดุด",
  },
  {
    no: "03",
    title: "ทองผันผวนโหด พอร์ตแตกเร็ว หา FTD ใหม่ไม่จบ",
    problem:
      "XAU/USD สวิงเป็นร้อยจุด เทรดเดอร์ล้างพอร์ตไว churn สูง · เอเจนซี่ทั่วไปขายแต่ยอดไลก์/คนทักราคาถูกที่ไม่มีกำลังซื้อ ปิด FTD ไม่ได้",
    answer:
      "เราโฟกัส FTD + Lot Volume ครีเอทีฟคัดกรองผู้เล่นทุนจริงผ่าน Trust Engine (Payout-Proof + Seeding) พร้อมคอนเทนต์ reactivate ฐานเก่าให้กลับมาเทรด",
  },
  {
    no: "04",
    title: "ผูกขาดโบรกเกอร์ ทำงานซับซ้อนและเชื่องช้า",
    problem:
      "บางเจ้ารับเฉพาะโบรกค่ายเดียว IB / Academy / Prop Firm ค่ายอื่นเข้าไม่ถึง หรือแพ็กเกจซับซ้อนมีค่าแฝงยุบยิบ",
    answer:
      "เราเป็น Multi-Broker Friendly ทำงานทุกค่าย ทั้ง Broker / IB / Prop Firm อย่างเป็นกลาง เซ็น Strict NDA ข้อเสนอเดียวจบในตารางเดียว",
  },
];

// ── PACKAGES ────────────────────────────────────────────────────
export type Pkg = {
  id: string;
  name: string;
  audience: string;
  price: string;
  featured?: boolean;
  badge?: string;
  features: string[];
};

export const packages: Pkg[] = [
  {
    id: "S",
    name: "Package S",
    audience: "IB / MASTER TRADER · เริ่มสร้างตัว",
    price: "18,900",
    features: [
      "Static / Reels — 6 / 2",
      "Gold Setup / Payout Card — 4",
      "Ads Management 1 แคมเปญ · Meta",
      "IO / Seeding 4 รีวิว",
      "Feed / Stories — 4 / 8",
      "Report รายเดือน",
      "Revision 2 ครั้ง",
    ],
  },
  {
    id: "M",
    name: "Package M",
    audience: "ACADEMY / MID BROKER · SCALE แล้ว",
    price: "34,900",
    featured: true,
    badge: "★ START HERE",
    features: [
      "Static / Reels — 10 / 4",
      "Gold Setup / Payout Card — 7",
      "Ads Management 3 แคมเปญ · +TikTok",
      "IO / Seeding 8 รีวิว",
      "LINE / Telegram Funnel Setup",
      "KOL บริหารให้ สูงสุด 2 ท่าน",
      "Survival Kit + Backup",
      "Report ทุก 2 สัปดาห์",
    ],
  },
  {
    id: "L",
    name: "Package L",
    audience: "BROKER / EXCHANGE / PROP FIRM",
    price: "59,900",
    features: [
      "Static / Reels — 18 / 7",
      "Gold Setup / Payout Card — 12",
      "Ads Management ไม่จำกัด · ทุกช่อง",
      "Prop Firm Challenge Funnel",
      "KOL บริหารให้ สูงสุด 5 ท่าน",
      "Survival Kit Priority",
      "Dedicated AM",
      "Report รายสัปดาห์",
    ],
  },
];

export const budgetNote =
  "งบแอดแนะนำ · S ฿15–30K · M ฿25–70K · L ฿80K+ / เดือน — ไม่รวม AD SPEND และค่าตัว KOL (จ่ายตามจริง) · สัญญาขั้นต่ำ 3 เดือน";

// ── SIDE-BY-SIDE COMPARISON (grouped + info tooltips) ───────────
export type CmpRow = { label: string; info: string; s: string; m: string; l: string };
export type CmpGroup = { title: string; rows: CmpRow[] };

export const comparisonPrice = { s: "฿18,900", m: "฿34,900", l: "฿59,900" };

export const comparisonGroups: CmpGroup[] = [
  {
    title: "ครีเอทีฟ & คอนเทนต์",
    rows: [
      {
        label: "Static Ad",
        info: "ภาพนิ่งโฆษณาออกแบบเฉพาะสายทอง สำหรับฟีด/สตอรี่ — จำนวนต่อเดือน",
        s: "6", m: "10", l: "18",
      },
      {
        label: "Reels / Video",
        info: "วิดีโอสั้นแนวตั้งสำหรับ Reels/TikTok ตัดต่อพร้อมซับและฮุกดึงคนดู — ต่อเดือน",
        s: "2", m: "4", l: "7",
      },
      {
        label: "Gold Setup / Payout-Proof Card",
        info: "การ์ดวิเคราะห์ XAU/USD (Bias · Zone · TP/SL) + การ์ดหลักฐานกำไร/ถอนจริง สร้างความน่าเชื่อให้คนกล้าฝาก",
        s: "4", m: "7", l: "12",
      },
      {
        label: "Feed / Stories Design",
        info: "งานออกแบบฟีดและสตอรี่ให้หน้าเพจดูโปร คุมโทนแบรนด์ให้สม่ำเสมอ",
        s: "4 / 8", m: "ครบชุด", l: "ครบชุด",
      },
      {
        label: "A/B Creative Testing",
        info: "ทำครีเอทีฟหลายเวอร์ชันแล้วทดสอบหาตัวที่เวิร์กสุด (Winning Ad) เพื่อลดต้นทุนต่อยอดฝาก",
        s: "1 ชุด", m: "2 ชุด", l: "4 ชุด",
      },
      {
        label: "Editorial-Grade Design",
        info: "ดีไซน์ระดับนิตยสารการเงินที่ดึงกลุ่มทุนหนา ไม่ใช่กราฟิกสำเร็จรูปทั่วไป",
        s: "✓", m: "✓", l: "Priority",
      },
      {
        label: "Revision ต่อชิ้น",
        info: "จำนวนรอบแก้ไขงานที่รวมในแพ็ก ต่อหนึ่งชิ้นงาน",
        s: "2 รอบ", m: "3 รอบ", l: "ไม่จำกัด",
      },
    ],
  },
  {
    title: "ยิงแอด & Performance",
    rows: [
      {
        label: "Ads Management",
        info: "วางแผน ตั้งค่า ยิง และออปติไมซ์แคมเปญรายวันโดยทีมเรา",
        s: "1 แคมเปญ", m: "3 แคมเปญ", l: "ไม่จำกัด",
      },
      {
        label: "แพลตฟอร์มโฆษณา",
        info: "ช่องทางที่เรายิงและบริหารโฆษณาให้",
        s: "Meta", m: "Meta +TikTok", l: "ทุกช่อง +LINE +TG",
      },
      {
        label: "Conversion Tracking",
        info: "ระบบติดตามว่าแอดสร้างยอดทัก/ฝากจริงแค่ไหน — CAPI ส่งข้อมูลฝั่งเซิร์ฟเวอร์ให้แม่นขึ้น ยิงแม่นขึ้น",
        s: "พื้นฐาน", m: "Custom", l: "Custom +CAPI",
      },
      {
        label: "Retargeting",
        info: "ยิงแอดตามกลุ่มคนที่เคยสนใจ/ทักแล้วยังไม่ฝาก เพื่อตามปิดการฝาก",
        s: "—", m: "✓", l: "Priority",
      },
      {
        label: "Landing Page",
        info: "หน้าเว็บรับทราฟฟิกจากแอด ออกแบบมาเพื่อเปลี่ยนคนเข้าให้เป็นยอดฝาก",
        s: "—", m: "1 หน้า", l: "2+ หน้า",
      },
      {
        label: "LINE / Telegram Funnel",
        info: "วางระบบกรวยปิดการขายผ่าน LINE OA / Telegram (ออโต้ตอบ + seeding + คัดลีด)",
        s: "—", m: "✓", l: "Priority",
      },
      {
        label: "Prop Firm Challenge Funnel",
        info: "ฟันเนลขายคอร์ส/Challenge ของ Prop Firm โดยเฉพาะ",
        s: "—", m: "Add-on", l: "✓",
      },
    ],
  },
  {
    title: "Trust Engine & Survival Kit",
    rows: [
      {
        label: "IO / Seeding (รีวิว)",
        info: "วางกระแสรีวิว/คอมเมนต์ในกลุ่ม LINE/Telegram อย่างแนบเนียน สร้าง “คนกำลังพูดถึง” — จำนวนต่อเดือน",
        s: "4", m: "8", l: "16",
      },
      {
        label: "KOL บริหารให้",
        info: "เราหา เจรจา บรีฟ และวัดผล KOL สายทองให้ (ค่าตัว KOL จ่ายตามจริง แยกจากค่าแพ็ก)",
        s: "—", m: "2 ท่าน", l: "5 ท่าน",
      },
      {
        label: "Safe-Zone Copywriting",
        info: "เขียนคอนเทนต์/payout-proof ให้ผ่านนโยบาย Meta/TikTok ลดโอกาสแอดโดน reject",
        s: "✓", m: "✓", l: "✓",
      },
      {
        label: "Ad-Ban Resilience",
        info: "เตรียมเพจ/บัญชีสำรองวอร์มไว้ + ระบบกู้คืนและช่วย appeal ให้แคมเปญไม่สะดุดเมื่อโดนแบน",
        s: "—", m: "✓", l: "Priority",
      },
      {
        label: "News-Reactive Ops",
        info: "ปล่อยคอนเทนต์ทันรอบข่าวใหญ่ NFP / CPI / FOMC ที่ราคาทองวิ่งแรงและคนตื่นตัวสุด",
        s: "—", m: "✓", l: "Priority",
      },
      {
        label: "Reputation Defense",
        info: "เฝ้าระวัง Pantip / รีวิวลบ / การ label สแกม พร้อมแผนตอบกลับปกป้องแบรนด์",
        s: "—", m: "✓", l: "Priority",
      },
    ],
  },
  {
    title: "ดูแล & รายงาน",
    rows: [
      {
        label: "Dedicated AM",
        info: "Account Manager เฉพาะทีมคุณ ดูแลใกล้ชิด ตอบไว ประสานงานครบ",
        s: "—", m: "—", l: "✓",
      },
      {
        label: "รายงานผล (Report)",
        info: "สรุปผลแคมเปญ ตัวเลข FTD / CPA และแผนถัดไป ตามรอบ",
        s: "รายเดือน", m: "ทุก 2 สัปดาห์", l: "รายสัปดาห์",
      },
      {
        label: "Strategy Call",
        info: "คอลวางแผนกลยุทธ์กับทีมเรา",
        s: "—", m: "รายเดือน", l: "รายสัปดาห์",
      },
      {
        label: "Onboarding 30 วันแรก",
        info: "ตั้งระบบ tracking + วางทิศทางดีไซน์สายทอง + ส่งงานชุดแรก",
        s: "✓", m: "✓", l: "Priority",
      },
      {
        label: "Strict NDA",
        info: "เซ็นสัญญารักษาความลับข้อมูลทุกโปรเจกต์",
        s: "✓", m: "✓", l: "✓",
      },
    ],
  },
];

export const includedInAll = [
  "Safe-Zone Copywriting",
  "Risk-Disclaimer & Platform-Policy Compliant",
  "IO / Seeding",
  "Strict NDA",
];

// ── THE ENGINE — Trust + Survival Kit ───────────────────────────
export const trustEngine = [
  {
    title: "Payout-Proof / Win Card",
    body: "หลักฐานกำไร / ถอนเงินจริง โชว์เป็น “จุดทอง” (เช่น +850 จุด XAU) จับต้องได้ ดึงดราม่ากว่ากำไรเป็น % — ทำให้คนกล้าฝาก",
  },
  {
    title: "Gold Setup Card",
    body: "วิเคราะห์ XAU/USD รายวัน (Bias · Zone · TP/SL) เป็นการ์ดแบรนด์ โชว์ว่าเพจมีของจริง คัดคนที่ตั้งใจเทรด",
  },
  {
    title: "IO / Seeding",
    body: "วางกระแสรีวิวในกลุ่ม LINE/Telegram และคอมเมนต์ ให้เกิด “คนกำลังพูดถึง” อย่างแนบเนียน",
  },
  {
    title: "KOL ที่ประสานให้",
    body: "เทรดเดอร์สายทองที่มีฐานแฟนจริงรีวิว — เราหา เจรจา บรีฟ วัดผลให้ (ค่าตัวจ่ายแยก ค่าบริหารรวมในแพ็ก)",
  },
];

export const survivalKit = [
  {
    title: "Ad-Ban Resilience",
    body: "เพจ + บัญชีสำรองวอร์มรอไว้ + ระบบกู้คืน ให้แคมเปญไม่สะดุดเมื่อโดนแบน",
  },
  {
    title: "Risk-Disclaimer Safe",
    body: "ใส่ Risk Warning + Responsible Marketing ให้สอดคล้อง platform policy ลดโอกาสโดน reject / label สแกม",
  },
  {
    title: "Reputation Defense",
    body: "เฝ้าระวัง Pantip / รีวิวลบ / การ label สแกม พร้อมแผนตอบกลับ",
  },
  {
    title: "News-Reactive Ops",
    body: "ทองวิ่งเป็นร้อยจุดในไม่กี่นาทีรอบข่าว NFP / CPI / FOMC — คอนเทนต์ออกทันจังหวะที่เทรดเดอร์ตื่นตัวสุด",
  },
];

// ── METHOD — timeline ───────────────────────────────────────────
export const method = [
  {
    step: "1",
    phase: "Setup & Test",
    when: "30 วันแรก",
    body: "เชื่อมระบบ Tracking · วางทิศทางดีไซน์สายทอง · ส่งงานชุดแรก · เริ่มยิงแอดสร้าง FTD ชุดแรกของเดือน",
  },
  {
    step: "2",
    phase: "Optimize",
    when: "60 วัน",
    body: "ค้นพบ Winning Ads ที่ทำกำไรสูงสุด · social proof เริ่มทำงาน · ต้นทุนต่อการฝาก (CPA) เริ่มนิ่งและถูกลง",
  },
  {
    step: "3",
    phase: "Scale",
    when: "90 วัน+",
    body: "อัดงบในแคมเปญที่คุ้มที่สุด · ขยายช่องทางการยิงไปแพลตฟอร์มอื่น · ดันยอด Lot Volume ทองให้โตก้าวกระโดด",
  },
  {
    step: "4",
    phase: "Compound",
    when: "ต่อเนื่อง",
    body: "ทองล้างพอร์ตไว แต่ Trust + ฐานคอนเทนต์ที่สะสมช่วย reactivate คนเก่า — ยิ่งทำนาน CPA ยิ่งถูกลง ต่างจากการยิงแอดล้วนที่หยุดยิงแล้วยอดหาย",
  },
];

export const glossary = [
  { term: "FTD", def: "ยอดฝากเงินครั้งแรกของลูกค้าใหม่" },
  { term: "Lot Volume", def: "ปริมาณการเทรด (รายได้ rebate ของ IB)" },
  { term: "จุด / Point", def: "หน่วยวัดการเคลื่อนไหวราคาทอง" },
  { term: "CPA", def: "ต้นทุนต่อการได้ลูกค้า 1 ราย" },
  { term: "Payout-Proof", def: "หลักฐานถอนเงินจริงที่ใช้สร้างความน่าเชื่อ" },
];

// ── THE FINE PRINT ──────────────────────────────────────────────
export const finePrint = [
  {
    no: "1",
    title: "ราคา & VAT",
    body: "ราคายังไม่รวม VAT 7% · ใบเสนอราคาอายุ 90 วัน · งบยิงแอดและค่าตัว KOL แยกต่างหาก (จ่ายตามจริง)",
  },
  {
    no: "2",
    title: "สิ่งที่เรารับผิดชอบ",
    body: "ส่งมอบงานครบตามแพ็ก · รับผิดชอบหาก ad ban จาก copy ของเรา พร้อมระบบ backup กู้คืนและช่วย appeal",
  },
  {
    no: "3",
    title: "นอกเหนือการการันตี",
    body: "ไม่การันตี FTD/ROAS ตายตัว (ขึ้นกับโปรดักส์ payout และความผันผวนของตลาดทอง) · การแบนจากนโยบายที่เปลี่ยน หรือปัจจัยฝั่งลูกค้า",
  },
  {
    no: "4",
    title: "สัญญา & ยกเลิก",
    body: "ขั้นต่ำ 3 เดือน · แจ้งยกเลิกล่วงหน้า 30 วัน · เปลี่ยนขนาดได้ในรอบบิลถัดไป",
  },
  {
    no: "5",
    title: "กรรมสิทธิ์ & NDA",
    body: "final files เป็นของลูกค้าหลังชำระครบ · เซ็น Strict NDA รักษาความลับข้อมูลทุกโปรเจกต์",
  },
  {
    no: "6",
    title: "Multi-Broker",
    body: "ทำงานกับทุกโบรกเกอร์ / IB / Prop Firm อย่างเป็นกลาง · ไม่ผูกขาดค่ายใด · โปร่งใสเรื่องงบทุกส่วน",
  },
];

export const riskWarning =
  "การเทรด XAU/USD และผลิตภัณฑ์ที่มี Leverage มีความเสี่ยงสูง อาจสูญเสียเงินลงทุนทั้งหมด · คอนเทนต์ทั้งหมดจัดทำเพื่อการตลาด ไม่ใช่คำแนะนำการลงทุน · ลูกค้าเป็นผู้รับผิดชอบการกำกับดูแลและใบอนุญาตของผลิตภัณฑ์ตนเอง";

// ── SOCIAL PROOF — platforms & broker types we work across ──────
export const platforms = [
  "Meta Ads",
  "TikTok Ads",
  "LINE OA",
  "Telegram",
  "Google",
  "YouTube",
  "MT4 / MT5",
  "cTrader",
  "Prop Firms",
  "IB Networks",
  "Exchanges",
  "Academy",
];

// ── RESULTS — illustrative outcomes (แก้เป็นตัวเลขจริงได้) ───────
export const results = [
  {
    metric: "FTD",
    value: 2.5,
    suffix: "x",
    prefix: "",
    label: "ยอดฝากใหม่เพิ่มขึ้นเฉลี่ยใน 90 วัน",
    note: "เทียบจากฐานก่อนเริ่มแคมเปญ",
  },
  {
    metric: "CPA",
    value: 38,
    suffix: "%",
    prefix: "-",
    label: "ต้นทุนต่อการได้ลูกค้า 1 ราย ลดลง",
    note: "หลังเจอ Winning Ads + social proof",
  },
  {
    metric: "Ad Spend",
    value: 80,
    suffix: "M+",
    prefix: "฿",
    label: "งบโฆษณาสายเทรดที่บริหารรวม",
    note: "ครอบคลุม Meta · TikTok · LINE",
  },
  {
    metric: "Uptime",
    value: 99,
    suffix: "%",
    prefix: "",
    label: "แคมเปญรันต่อเนื่องไม่สะดุดจากการแบน",
    note: "ด้วย Ad-Ban Resilience + backup",
  },
];

// ── FAQ ─────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "แอดโดนแบนบ่อย จัดการยังไง?",
    a: "เราใช้ Safe-Zone Copywriting เขียน payout-proof ให้ผ่านนโยบาย Meta/TikTok ตั้งแต่แรก + เตรียมเพจ/บัญชีสำรองวอร์มไว้ (Ad-Ban Resilience) ถ้าโดนแบนจาก copy ของเรา เรารับผิดชอบช่วย appeal และกู้คืนให้แคมเปญรันต่อ",
  },
  {
    q: "การันตี FTD หรือ ROAS ได้ไหม?",
    a: "เราไม่การันตีตัวเลขตายตัว เพราะขึ้นกับ payout ของโปรดักส์และความผันผวนของตลาดทอง — แต่เรารับผิดชอบส่งมอบงานครบตามแพ็ก โฟกัสที่ FTD + Lot Volume และมีระบบวัดผล/ออปติไมซ์ให้ CPA ถูกลงตามเวลา",
  },
  {
    q: "ทำงานกับโบรกเกอร์เจ้าไหนบ้าง?",
    a: "เราเป็น Multi-Broker Friendly ทำงานกับทุกค่ายอย่างเป็นกลาง ทั้ง Broker / IB / Academy / Prop Firm / Exchange ไม่ผูกขาดค่ายใด และเซ็น Strict NDA รักษาความลับทุกโปรเจกต์",
  },
  {
    q: "เริ่มต้นยังไง ใช้เวลานานไหมกว่าจะเห็นผล?",
    a: "เริ่มที่ Free Strategy Session (ฟรี ไม่มีข้อผูกมัด) เราออดิตเพจ + วาง 3 Quick Wins ให้ จากนั้น 30 วันแรกคือ Setup & Test, 60 วันเจอ Winning Ads, 90 วันขึ้นไปเริ่ม Scale — ยิ่งทำนาน CPA ยิ่งถูกลง",
  },
  {
    q: "ราคารวมค่าอะไรบ้าง?",
    a: "ราคาแพ็กคือค่าบริการครีเอทีฟ + บริหารแคมเปญ ยังไม่รวม VAT 7% และไม่รวมงบยิงแอด (Ad Spend) กับค่าตัว KOL ซึ่งจ่ายตามจริง โปร่งใสทุกส่วน ไม่มีค่าแฝง",
  },
  {
    q: "สัญญาขั้นต่ำเท่าไหร่ ยกเลิกยังไง?",
    a: "ขั้นต่ำ 3 เดือน แจ้งยกเลิกล่วงหน้า 30 วัน และเปลี่ยนขนาดแพ็กได้ในรอบบิลถัดไป · final files เป็นของลูกค้าหลังชำระครบ",
  },
];

export const freeSession = {
  title: "พร้อมเปลี่ยน Ad Spend เป็น FTD?",
  body: "เริ่มที่ Free Strategy Session — เราวินิจฉัยเพจ วางแผนกลยุทธ์ และโครงสร้างการหายอด FTD สายทองให้ฟรีในครั้งแรก ไม่มีข้อผูกมัด",
  bullets: [
    "Quick Audit ช่องทางปัจจุบัน (FB / IG / TikTok / LINE)",
    "3 Quick Wins ที่ลงมือทำได้ทันที โดยไม่ต้องจ้างเรา",
    "Custom Package Recommendation ถ้าสนใจไปต่อ",
  ],
};
