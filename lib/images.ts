// Royalty-free imagery (Unsplash License — free for commercial use, no permission needed).
// URLs verified to resolve. Swap freely with the client's own brand assets later.

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Img = { src: string; alt: string; credit: string };

export const images = {
  candles: {
    src: U("photo-1611974789855-9c2a0a7236a3"),
    alt: "กราฟแท่งเทียนพร้อมเส้นค่าเฉลี่ยบนจอเทรด",
    credit: "Maxim Hopman / Unsplash",
  } as Img,
  bitcoin: {
    src: U("photo-1518546305927-5a555bb7020d"),
    alt: "เหรียญ Bitcoin ทองคำหน้าจอกราฟราคา",
    credit: "André François McKenzie / Unsplash",
  } as Img,
  terminal: {
    src: U("photo-1640340434855-6084b1f4901c"),
    alt: "หน้าจอเทรดดิ้งเทอร์มินัลแสดงแท่งเทียนและวอลุ่ม",
    credit: "Traxer / Unsplash",
  } as Img,
  web3: {
    src: U("photo-1639762681485-074b7f938ba0"),
    alt: "บล็อกเชน 3 มิติเชื่อมต่อกันแบบ Web3",
    credit: "Shubham Dhage / Unsplash",
  } as Img,
  desk: {
    src: U("photo-1642790106117-e829e14a795f"),
    alt: "โต๊ะเทรดแล็ปท็อปและมือถือแสดงกราฟตลาด",
    credit: "Austin Distel / Unsplash",
  } as Img,
  revenue: {
    src: U("photo-1559526324-4b87b5e36e44"),
    alt: "ทำงานบนแล็ปท็อปวางแผนการตลาดและรายได้",
    credit: "Carlos Muza / Unsplash",
  } as Img,
  mobile: {
    src: U("photo-1612178991541-b48cc8e92a4d"),
    alt: "เปิดแอปเทรดบนมือถือคู่กับหน้าจอราคาตลาด",
    credit: "Unsplash",
  } as Img,
  coins: {
    src: U("photo-1640161704729-cbe966a08476"),
    alt: "กองเหรียญคริปโต Bitcoin Ethereum",
    credit: "Kanchanara / Unsplash",
  } as Img,
  trader: {
    src: U("photo-1620266757065-5814239881fd"),
    alt: "เทรดเดอร์พิมพ์งานบนแล็ปท็อปพร้อมแดชบอร์ดตลาด",
    credit: "Unsplash",
  } as Img,

  // ── Creative-agency imagery ──
  designApps: {
    src: U("photo-1626785774573-4b799315345d"),
    alt: "โต๊ะดีไซเนอร์พร้อมแอปครีเอทีฟบนแท็บเล็ต",
    credit: "Emily Bernal / Unsplash",
  } as Img,
  gradient: {
    src: U("photo-1620641788421-7a1c342ea42e"),
    alt: "กราเดียนต์สีม่วงชมพูแนว Web3",
    credit: "Codioful / Unsplash",
  } as Img,
  swatches: {
    src: U("photo-1561070791-2526d30994b5"),
    alt: "ตัวอย่างพาเลตต์สีและงานออกแบบบนโต๊ะทำงาน",
    credit: "Balázs Kétyi / Unsplash",
  } as Img,
  teamHigh5: {
    src: U("photo-1600880292203-757bb62b4baf"),
    alt: "ทีมงานครีเอทีฟไฮไฟว์ฉลองความสำเร็จ",
    credit: "Krakenimages / Unsplash",
  } as Img,
  teamWork: {
    src: U("photo-1551434678-e076c223a692"),
    alt: "ทีมทำงานร่วมกันในออฟฟิศครีเอทีฟ",
    credit: "Annie Spratt / Unsplash",
  } as Img,
  strategy: {
    src: U("photo-1542744173-8e7e53415bb0"),
    alt: "ประชุมวางกลยุทธ์การตลาดในห้องประชุม",
    credit: "Campaign Creators / Unsplash",
  } as Img,
  social: {
    src: U("photo-1611926653458-09294b3142bf"),
    alt: "โฟลเดอร์โซเชียลมีเดียบนหน้าจอมือถือ",
    credit: "Nathan Dumlao / Unsplash",
  } as Img,
};

// For the auto-scrolling gallery band — creative work meets the market.
export const galleryStrip: Img[] = [
  images.designApps,
  images.candles,
  images.social,
  images.swatches,
  images.bitcoin,
  images.strategy,
  images.terminal,
  images.gradient,
  images.coins,
  images.teamWork,
];
