export type CalEvent = {
  id: string;
  title: string;
  date_start: string; // ISO date
  date_end?: string | null;
  category: "รับสมัคร" | "สอบ" | "ประกาศผล" | "ยืนยันสิทธิ์" | "อื่นๆ";
  detail?: string | null;
  link?: string | null;
  is_estimated?: boolean;
};

// กำหนดการโดยประมาณ กสพท70 (ปีการศึกษา 2570)
// อิงแพทเทิร์นปีก่อนหน้า — รอประกาศทางการจากกสพท. แล้วค่อยแก้วันที่ใน Supabase / ไฟล์นี้
export const DEFAULT_EVENTS: CalEvent[] = [
  {
    id: "kaspat70-01",
    title: "เปิดรับสมัคร กสพท70 ผ่านเว็บ cotmesadmission.com",
    date_start: "2026-08-01",
    date_end: "2026-09-22",
    category: "รับสมัคร",
    detail: "สมัครออนไลน์ + อัปโหลดเอกสาร + ชำระค่าสมัครตามประกาศ",
    link: "https://www9.si.mahidol.ac.th/",
    is_estimated: true,
  },
  {
    id: "kaspat70-02",
    title: "ชำระค่าสมัครสอบ (วันสุดท้าย)",
    date_start: "2026-09-23",
    category: "รับสมัคร",
    detail: "ชำระผ่านธนาคาร / QR ตามคู่มือผู้สมัคร",
    is_estimated: true,
  },
  {
    id: "kaspat70-03",
    title: "ประกาศรายชื่อผู้มีสิทธิ์สอบ TPAT1",
    date_start: "2026-11-15",
    category: "ประกาศผล",
    detail: "ตรวจสอบเลขที่นั่งสอบและสนามสอบ",
    is_estimated: true,
  },
  {
    id: "kaspat70-04",
    title: "สอบ TPAT1 วิชาเฉพาะแพทย์ (กสพท)",
    date_start: "2026-12-13",
    category: "สอบ",
    detail: "เชาว์ปัญญา จริยธรรม ทักษะการสื่อสาร — เตรียมบัตรประชาชน + บัตรประจำตัวผู้เข้าสอบ",
    is_estimated: true,
  },
  {
    id: "kaspat70-05",
    title: "สอบ A-Level (ใช้คะแนนยื่น กสพท)",
    date_start: "2027-03-13",
    date_end: "2027-03-15",
    category: "สอบ",
    detail: "ฟิสิกส์ เคมี ชีววิทยา คณิต1 อังกฤษ ไทย สังคม — สมัครสอบ A-Level แยกกับ กสพท",
    is_estimated: true,
  },
  {
    id: "kaspat70-06",
    title: "ประกาศคะแนน TPAT1 + A-Level",
    date_start: "2027-04-20",
    category: "ประกาศผล",
    detail: "ดูคะแนนผ่านระบบ ทปอ. / mytcas.com",
    link: "https://www.mytcas.com/",
    is_estimated: true,
  },
  {
    id: "kaspat70-07",
    title: "ยื่นเลือกคณะ/สถาบัน รอบ กสพท (รอบ 3 Admission)",
    date_start: "2027-05-06",
    date_end: "2027-05-12",
    category: "ยืนยันสิทธิ์",
    detail: "เลือกได้สูงสุดตามเกณฑ์ กสพท จัดอันดับคณะแพทยศาสตร์/ทันตฯ/สัตวฯ/เภสัช",
    is_estimated: true,
  },
  {
    id: "kaspat70-08",
    title: "ประกาศรายชื่อผู้ผ่านการคัดเลือก กสพท70",
    date_start: "2027-05-20",
    category: "ประกาศผล",
    detail: "รอบที่ 1 — ตรวจสอบรายชื่อ + เตรียมเอกสารยืนยัน",
    is_estimated: true,
  },
  {
    id: "kaspat70-09",
    title: "ยืนยันสิทธิ์ (Clearing House) รอบ กสพท",
    date_start: "2027-05-21",
    date_end: "2027-05-22",
    category: "ยืนยันสิทธิ์",
    detail: "ยืนยันใน mytcas.com ภายในเวลาที่กำหนด มิฉะนั้นถือว่าสละสิทธิ์",
    is_estimated: true,
  },
  {
    id: "kaspat70-10",
    title: "สละสิทธิ์ / รอบ 2 (ถ้ามีที่ว่าง)",
    date_start: "2027-05-27",
    category: "อื่นๆ",
    detail: "ติดตามประกาศแต่ละสถาบันสำหรับรอบเก็บตก",
    is_estimated: true,
  },
];

export function getNextEvent(events: CalEvent[]): CalEvent | null {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const upcoming = [...events]
    .filter((e) => new Date(e.date_end ?? e.date_start) >= now)
    .sort((a, b) => +new Date(a.date_start) - +new Date(b.date_start));
  return upcoming[0] ?? null;
}

export function daysLeft(iso: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(iso);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / 86400000);
}

export function formatThaiDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
