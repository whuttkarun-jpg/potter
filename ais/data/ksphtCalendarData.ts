export interface KsphtCalendarEvent {
  id: number;
  title: string;
  start: string; // ISO e.g. "2026-09-01T00:00:00"
  end: string;   // ISO e.g. "2026-09-20T23:59:59"
  url: string;   // e.g. "cotmesadmission.com"
  note: string;  // e.g. "ม.6 ใช้ใบ ปพ.7 / เด็กซิ่ว ใช้ใบ ปพ.1 หรือ 2"
}

export const KSPHT_70_EVENTS: KsphtCalendarEvent[] = [
  {
    id: 1,
    title: 'สมัครสอบ TPAT1 วิชาเฉพาะ กสพท',
    start: '2026-09-01T00:00:00',
    end: '2026-09-20T23:59:59',
    url: 'cotmesadmission.com',
    note: 'ม.6 ใช้ใบ ปพ.7 / เด็กซิ่ว ใช้ใบ ปพ.1 หรือ 2'
  },
  {
    id: 2,
    title: 'สมัครสอบ A-Level 7 วิชา',
    start: '2027-01-14T00:00:00',
    end: '2027-01-20T23:59:59',
    url: 'mytcas.com',
    note: 'คณิต1, ฟิสิกส์, เคมี, ชีววิทยา, ภาษาไทย, สังคมศึกษา, ภาษาอังกฤษ'
  },
  {
    id: 3,
    title: 'สอบ TPAT1 วิชาเฉพาะ กสพท',
    start: '2027-02-13T08:30:00',
    end: '2027-02-13T16:00:00',
    url: '',
    note: 'วิชาเฉพาะ กสพท ฉบับที่ 1 (เชาวน์ปัญญา), ฉบับที่ 2 (จริยธรรมทางการแพทย์), ฉบับที่ 3 (เชื่อมโยงความเป็นเหตุเป็นผล)'
  },
  {
    id: 4,
    title: 'ประกาศผลคะแนนสอบ TPAT1',
    start: '2027-03-15T09:00:00',
    end: '2027-03-15T23:59:59',
    url: '',
    note: 'ตรวจสอบผลคะแนนทางระบบ กสพท (cotmesadmission.com)'
  },
  {
    id: 5,
    title: 'สอบ A-Level 7 วิชา',
    start: '2027-03-13T00:00:00',
    end: '2027-03-15T23:59:59',
    url: '',
    note: 'จัดสอบตามตาราง ทปอ. (วันละ 2-3 วิชา)'
  },
  {
    id: 6,
    title: 'ประกาศผลคะแนนสอบ A-Level 7 วิชา',
    start: '2027-04-20T09:00:00',
    end: '2027-04-20T23:59:59',
    url: '',
    note: 'ตรวจสอบผลคะแนนทางระบบ mytcas.com'
  },
  {
    id: 7,
    title: 'สมัคร TCAS รอบ 3 Admission',
    start: '2027-05-07T00:00:00',
    end: '2027-05-11T23:59:59',
    url: 'mytcas.com',
    note: 'เลือกอันดับสูงสุด 10 อันดับ เรียงตามความชอบและความปลอดภัยของคะแนน'
  },
  {
    id: 8,
    title: 'ประกาศผล TCAS รอบ 3 ครั้งที่ 1',
    start: '2027-05-22T09:00:00',
    end: '2027-05-22T23:59:59',
    url: '',
    note: 'ระบบ mytcas.com ประกาศผลการคัดเลือกรอบ 3 ครั้งที่ 1'
  },
  {
    id: 9,
    title: 'ผู้ผ่านคัดเลือกครั้งที่ 1 ทำรายการ',
    start: '2027-05-22T00:00:00',
    end: '2027-05-23T23:59:59',
    url: 'mytcas.com',
    note: 'กดยืนยันสิทธิ์ / กดขอประมวลผลครั้งที่ 2 / กดไม่ใช้สิทธิ์'
  },
  {
    id: 10,
    title: 'ประกาศผล TCAS รอบ 3 ครั้งที่ 2',
    start: '2027-05-27T09:00:00',
    end: '2027-05-27T23:59:59',
    url: '',
    note: 'ยืนยันสิทธิ์อัตโนมัติ'
  },
  {
    id: 11,
    title: 'สละสิทธิ์ TCAS รอบ 3 Admission',
    start: '2027-05-28T00:00:00',
    end: '2027-05-28T23:59:59',
    url: 'mytcas.com',
    note: 'เฉพาะผู้ที่ยืนยันสิทธิ์รอบ Admission และไม่เคยสละสิทธิ์มาก่อน'
  }
];

export type EventStatus = 'active' | 'upcoming' | 'passed';

export interface EventTimeAnalysis {
  status: EventStatus;
  isToday: boolean;
  isLastDay: boolean;
  daysDiff: number;
  targetTimestamp: number;
}

export function analyzeEventTime(event: KsphtCalendarEvent, now: Date): EventTimeAnalysis {
  const startTime = new Date(event.start).getTime();
  const endTime = new Date(event.end).getTime();
  const nowTime = now.getTime();

  let status: EventStatus = 'upcoming';
  if (nowTime > endTime) {
    status = 'passed';
  } else if (nowTime >= startTime && nowTime <= endTime) {
    status = 'active';
  } else {
    status = 'upcoming';
  }

  // Check if today matches start or end
  const nowDateStr = now.toISOString().slice(0, 10);
  const startDateStr = event.start.slice(0, 10);
  const endDateStr = event.end.slice(0, 10);

  const isToday = nowDateStr === startDateStr || nowDateStr === endDateStr || (nowDateStr >= startDateStr && nowDateStr <= endDateStr);
  const isLastDay = status === 'active' && nowDateStr === endDateStr;

  // Target for countdown: if active, count to end; if upcoming, count to start
  const targetTimestamp = status === 'active' ? endTime : startTime;
  const daysDiff = Math.max(0, Math.ceil((targetTimestamp - nowTime) / (1000 * 60 * 60 * 24)));

  return {
    status,
    isToday,
    isLastDay,
    daysDiff,
    targetTimestamp
  };
}

const THAI_MONTHS_SHORT = [
  'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
  'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
];

export function formatEventDateThai(startIso: string, endIso: string): string {
  try {
    const sDate = new Date(startIso);
    const eDate = new Date(endIso);

    const sDay = sDate.getDate();
    const sMonth = THAI_MONTHS_SHORT[sDate.getMonth()];
    const sYear = sDate.getFullYear() + 543;

    const eDay = eDate.getDate();
    const eMonth = THAI_MONTHS_SHORT[eDate.getMonth()];
    const eYear = eDate.getFullYear() + 543;

    const hasTimeSpec = (startIso.includes('T08:') || startIso.includes('T09:') || startIso.includes('T16:'));

    // Same date
    if (sDate.toISOString().slice(0, 10) === eDate.toISOString().slice(0, 10)) {
      if (hasTimeSpec) {
        const sHours = String(sDate.getHours()).padStart(2, '0');
        const sMins = String(sDate.getMinutes()).padStart(2, '0');
        const eHours = String(eDate.getHours()).padStart(2, '0');
        const eMins = String(eDate.getMinutes()).padStart(2, '0');

        if (eHours === '23' && eMins === '59') {
          return `${sDay} ${sMonth} ${sYear} (ตั้งแต่ ${sHours}:${sMins} น.)`;
        }
        return `${sDay} ${sMonth} ${sYear} (${sHours}:${sMins} - ${eHours}:${eMins} น.)`;
      }
      return `${sDay} ${sMonth} ${sYear}`;
    }

    // Different dates, same month and year
    if (sDate.getMonth() === eDate.getMonth() && sDate.getFullYear() === eDate.getFullYear()) {
      return `${sDay} - ${eDay} ${sMonth} ${sYear}`;
    }

    // Different months
    return `${sDay} ${sMonth} - ${eDay} ${eMonth} ${eYear}`;
  } catch {
    return `${startIso} - ${endIso}`;
  }
}
