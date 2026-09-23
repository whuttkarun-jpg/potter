import { ExamCountdownItem, UniversityInfo, FacultyData, SubjectRequirement, WeightGroup } from '../types';

export const EXAMS: ExamCountdownItem[] = [
  {
    id: 'tgat',
    name: 'TGAT ความถนัดทั่วไป (90)',
    code: 'TGAT',
    date: '2026-12-13',
    description: 'การสื่อสารภาษาอังกฤษ (91), การคิดอย่างมีเหตุผล (92), สมรรถนะการทำงาน (93)'
  },
  {
    id: 'tpat1',
    name: 'TPAT1 วิชาเฉพาะ กสพท (10)',
    code: 'TPAT1',
    date: '2026-12-20',
    description: 'เชาวน์ปัญญา (11), จริยธรรมทางการแพทย์ (12), ความคิดเชื่อมโยง (13) - ใช้ในแพทย์, ทันตะ, เภสัช, สัตวแพทย์, แผนไทย'
  },
  {
    id: 'tpat3',
    name: 'TPAT3 ความถนัดด้านวิทยาศาสตร์ฯ (30)',
    code: 'TPAT3',
    date: '2026-12-14',
    description: 'วิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์ - ใช้ในวิทย์เครื่องสำอาง, โภชนาการ, แผนจีน, แผนไทย'
  },
  {
    id: 'tpat5',
    name: 'TPAT5 ความถนัดทางวิชาชีพครู (50)',
    code: 'TPAT5',
    date: '2026-12-15',
    description: 'คุณลักษณะความเป็นครู - ใช้ในสาขาสุขศึกษาและการส่งเสริมสุขภาพ (สายครุศาสตร์/ศึกษาศาสตร์)'
  },
  {
    id: 'alevel',
    name: 'A-Level วิชาสามัญ (วันแรก)',
    code: 'A-Level',
    date: '2027-03-20',
    description: 'สอบ 7 วิชาหลัก: คณิต 1/2, ฟิสิกส์, เคมี, ชีววิทยา, วิทย์ประยุกต์, ภาษาอังกฤษ, ภาษาไทย, สังคม'
  }
];

// ชุดวิชาและสัดส่วนคะแนนมาตรฐาน กสพท (แพทย์, ทันตะ, เภสัช, สัตวแพทย์) ตรงตามประกาศ กสพท. 100%
export const KSPHT_SUBJECTS: SubjectRequirement[] = [
  { exam: 'TPAT1', code: '10', name: 'TPAT1 วิชาเฉพาะ กสพท (เชาวน์ปัญญา, จริยธรรม, เชื่อมโยง)', pct: 30, min: 'ตาม กสพท กำหนด' },
  { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 14, min: 'ไม่ต่ำกว่า 30 คะแนน', minScoreValue: 30 },
  { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์ (กลุ่มวิทยาศาสตร์)', pct: 9.33, min: 'กลุ่มวิทย์เฉลี่ย >= 30 คะแนน', minScoreValue: 30 },
  { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี (กลุ่มวิทยาศาสตร์)', pct: 9.33, min: 'กลุ่มวิทย์เฉลี่ย >= 30 คะแนน', minScoreValue: 30 },
  { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา (กลุ่มวิทยาศาสตร์)', pct: 9.34, min: 'กลุ่มวิทย์เฉลี่ย >= 30 คะแนน', minScoreValue: 30 },
  { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 14, min: 'ไม่ต่ำกว่า 30 คะแนน', minScoreValue: 30 },
  { exam: 'A-Level', code: '81', name: 'A-Level 81 ภาษาไทย', pct: 7, min: 'ไม่ต่ำกว่า 30 คะแนน', minScoreValue: 30 },
  { exam: 'A-Level', code: '70', name: 'A-Level 70 สังคมศึกษา', pct: 7, min: 'ไม่ต่ำกว่า 30 คะแนน', minScoreValue: 30 }
];

export const KSPHT_WEIGHTS: WeightGroup[] = [
  { label: 'TPAT1 (กสพท)', pct: 30, color: '#2F6F8F' },
  { label: 'A-Level (7 วิชา)', pct: 70, color: '#0E3B34' }
];

// 8 มหาวิทยาลัยที่มีในเอกสารประกาศทางการ 8 ฉบับ (คัดลอกและตรวจสอบ 100% จากเอกสาร)
export const UNIS: Record<string, UniversityInfo> = {
  chula: { id: 'chula', name: 'จุฬาลงกรณ์มหาวิทยาลัย', short: 'จุฬาฯ', color: '#E0477D' },
  swu: { id: 'swu', name: 'มหาวิทยาลัยศรีนครินทรวิโรฒ', short: 'มศว', color: '#CE2027' },
  cmu: { id: 'cmu', name: 'มหาวิทยาลัยเชียงใหม่', short: 'มช.', color: '#6A1B9A' },
  psu: { id: 'psu', name: 'มหาวิทยาลัยสงขลานครินทร์', short: 'มอ.', color: '#005B94' },
  tu: { id: 'tu', name: 'มหาวิทยาลัยธรรมศาสตร์', short: 'มธ.', color: '#C31B1B' },
  buu: { id: 'buu', name: 'มหาวิทยาลัยบูรพา', short: 'มบ.', color: '#D97706' },
  mfu: { id: 'mfu', name: 'มหาวิทยาลัยแม่ฟ้าหลวง', short: 'มฟล.', color: '#A31D24' },
  up: { id: 'up', name: 'มหาวิทยาลัยพะเยา', short: 'มพ.', color: '#6D2B78' }
};

export const FACULTIES: FacultyData[] = [
  // 1. แพทยศาสตร์ / ฉุกเฉินการแพทย์ / วิทยาศาสตร์การแพทย์
  {
    id: 'med',
    name: 'คณะแพทยศาสตร์',
    meta: 'แพทยศาสตรบัณฑิต, ฉุกเฉินการแพทย์, วิทยาศาสตร์การแพทย์',
    iconName: 'Stethoscope',
    unis: {
      swu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'วท.บ.',
            title: 'สาขาวิชาวิทยาศาสตร์การแพทย์',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (5 วิชา)', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 10, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'สัดส่วนคะแนนรอบ 3 Admission: TGAT 30% + คณิต1 10% + ฟิสิกส์ 10% + เคมี 20% + ชีววิทยา 20% + ภาษาอังกฤษ 10%',
            noteType: 'info'
          }
        ]
      },
      cmu: {
        round: 'รอบ 3 กสพท',
        programs: [
          {
            code: '10040107100101A',
            title: 'สาขาวิชาแพทยศาสตร์ (การรับตรงร่วมกัน กสพท.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'จำนวนรับ 24 คน คัดเลือกผ่าน กสพท. (TPAT1 30% + A-Level 7 วิชา 70%) แต่ละกลุ่มวิชาต้องไม่ต่ำกว่า 30 คะแนน',
            noteType: 'info'
          }
        ]
      },
      tu: {
        round: 'รอบ 3 กสพท',
        programs: [
          {
            code: '10050211100101A',
            title: 'หลักสูตรแพทยศาสตรบัณฑิต (กสพท)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'จำนวนรับ 69 คน รับผ่าน กสพท (TPAT1 30% + A-Level 7 วิชา 70%) ผู้สมัครต้องผ่านเกณฑ์ขั้นต่ำ 30 คะแนนทุกกลุ่มวิชา',
            noteType: 'info'
          }
        ]
      },
      psu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 18',
            title: 'สาขาวิชาปฏิบัติการฉุกเฉินทางการแพทย์ (ว.หาดใหญ่)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level', pct: 60, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: 'ขั้นต่ำ 40 คะแนน', minScoreValue: 40 },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 30, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 }
            ],
            note: 'จำนวนรับ 4 คน GPAX ไม่กำหนดขั้นต่ำ (หน่วยกิตวิทย์ >= 22, คณิต >= 12) เกณฑ์คะแนน: TGAT >= 40, ฟิสิกส์ >= 25, ชีวะ >= 25',
            noteType: 'warning'
          }
        ]
      },
      up: {
        round: 'รอบ 3 Admission & กสพท',
        programs: [
          {
            code: '3135',
            title: 'หลักสูตรฉุกเฉินการแพทย์บัณฑิต',
            gpax: '3.00',
            gpaxValue: 3.00,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'GPAX', pct: 20, color: '#888888' },
              { label: 'TGAT', pct: 10, color: '#C8862B' },
              { label: 'A-Level', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX (6 ภาคเรียน)', pct: 20, min: 'GPAX >= 3.00' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 10, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: null }
            ],
            note: 'จำนวนรับ 10 คน จบ ม.6 แผนวิทย์-คณิต (วิทย์ >= 22 นก., คณิต >= 12 นก.) GPAX ขั้นต่ำ 3.00',
            noteType: 'info'
          },
          {
            code: 'กสพท',
            title: 'หลักสูตรแพทยศาสตรบัณฑิต (กสพท)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            requiredCredits: { science: 22, math: 12 },
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'รับผ่าน กสพท. (TPAT1 30% + A-Level 7 วิชา 70%) วิทย์ >= 22 หน่วยกิต, คณิต >= 12 หน่วยกิต เกณฑ์ขั้นต่ำ A-Level 30 คะแนน',
            noteType: 'info'
          }
        ]
      },
      mfu: {
        round: 'รอบ 3 กสพท',
        programs: [
          {
            code: 'กสพท',
            title: 'หลักสูตรแพทยศาสตรบัณฑิต (รับร่วม กสพท.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'รับสมัครผ่านการรับร่วม กสพท. (TPAT1 30% + A-Level 7 วิชา 70%) เกณฑ์ขั้นต่ำ 30 คะแนนทุกกลุ่มวิชา',
            noteType: 'info'
          }
        ]
      },
      buu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10190119112101A0J0010',
            title: 'วิทยาศาสตร์การแพทย์',
            gpax: 'ไม่ระบุ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX', pct: 10, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null }
            ],
            note: 'สัดส่วนคะแนน: GPAX 10% + TGAT 40% + เคมี 25% + ชีววิทยา 25%',
            noteType: 'info'
          }
        ]
      }
    }
  },

  // 2. ทันตแพทยศาสตร์
  {
    id: 'dent',
    name: 'คณะทันตแพทยศาสตร์',
    meta: 'หลักสูตรทันตแพทยศาสตรบัณฑิต (ท.บ.)',
    iconName: 'Smile',
    unis: {
      up: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '3107',
            title: 'หลักสูตรทันตแพทยศาสตรบัณฑิต (ท.บ.)',
            gpax: '3.00',
            gpaxValue: 3.00,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: [
              { label: 'TGAT', pct: 10, color: '#C8862B' },
              { label: 'TPAT1', pct: 20, color: '#2F6F8F' },
              { label: 'A-Level', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 10, min: 'ไม่น้อยกว่า 25%', minScoreValue: 25 },
              { exam: 'TPAT1', code: '10', name: 'TPAT1 วิชาเฉพาะ กสพท', pct: 20, min: 'ไม่น้อยกว่า 25%', minScoreValue: 25 },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: 'ไม่น้อยกว่า 25%', minScoreValue: 25 },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 10, min: 'ไม่น้อยกว่า 25%', minScoreValue: 25 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: 'ไม่น้อยกว่า 25%', minScoreValue: 25 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ไม่น้อยกว่า 30%', minScoreValue: 30 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: 'ไม่น้อยกว่า 30%', minScoreValue: 30 }
            ],
            note: 'จำนวนรับ 2 คน GPAX ขั้นต่ำ 3.00 ทุกวิชาต้องสอบผ่านไม่น้อยกว่า 25% (ชีววิทยาและอังกฤษต้องผ่านไม่น้อยกว่า 30%)',
            noteType: 'warning'
          }
        ]
      },
      buu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10190125120101A0J0010',
            title: 'ทันตแพทยศาสตรบัณฑิต',
            gpax: '3.25',
            gpaxValue: 3.25,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            requiredCredits: { science: 22, math: 12, english: 9 },
            weights: [
              { label: 'TPAT1', pct: 30, color: '#2F6F8F' },
              { label: 'A-Level', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TPAT1', code: '10', name: 'TPAT1 วิชาเฉพาะ กสพท', pct: 30, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 14, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 9.33, min: 'วิทย์รวม (64+65+66) >= 120' },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 9.33, min: 'วิทย์รวม (64+65+66) >= 120' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 9.34, min: 'วิทย์รวม (64+65+66) >= 120' },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 14, min: 'ขั้นต่ำ 40 คะแนน', minScoreValue: 40 },
              { exam: 'A-Level', code: '81', name: 'A-Level 81 ภาษาไทย', pct: 7, min: null },
              { exam: 'A-Level', code: '70', name: 'A-Level 70 สังคมศึกษา', pct: 7, min: null }
            ],
            note: 'จำนวนรับ 14 คน GPAX ขั้นต่ำ 3.25 วิทย์ 22 นก. คณิต 12 นก. อังกฤษ 9 นก. ไม่ตาบอดสี คะแนนวิทย์ (64+65+66) รวมกันไม่น้อยกว่า 120 คะแนน และอังกฤษขั้นต่ำ 40 คะแนน',
            noteType: 'warning'
          }
        ]
      },
      swu: {
        round: 'รอบ 3 กสพท',
        programs: [
          {
            code: 'กสพท',
            title: 'หลักสูตรทันตแพทยศาสตรบัณฑิต (กสพท)',
            gpax: '3.50',
            gpaxValue: 3.50,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'GPAX ขั้นต่ำ 3.50 คัดเลือกผ่าน กสพท. (TPAT1 30% + A-Level 7 วิชา 70%) แต่ละกลุ่มวิชาต้องไม่ต่ำกว่า 30 คะแนน',
            noteType: 'warning'
          }
        ]
      },
      cmu: {
        round: 'รอบ 3 กสพท',
        programs: [
          {
            code: '10040109120101A',
            title: 'สาขาวิชาทันตแพทยศาสตร์ (การรับตรงร่วมกัน กสพท.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'จำนวนรับ 15 คน คัดเลือกผ่าน กสพท. (TPAT1 30% + A-Level 7 วิชา 70%) ผ่านเกณฑ์ขั้นต่ำ 30 คะแนนทุกกลุ่มวิชา',
            noteType: 'info'
          }
        ]
      },
      tu: {
        round: 'รอบ 3 กสพท',
        programs: [
          {
            code: '10050213120101A',
            title: 'หลักสูตรทันตแพทยศาสตรบัณฑิต (กสพท)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'จำนวนรับ 30 คน คัดเลือกผ่าน กสพท. (TPAT1 30% + A-Level 7 วิชา 70%) ผ่านเกณฑ์ขั้นต่ำ 30 คะแนนทุกกลุ่มวิชา',
            noteType: 'info'
          }
        ]
      },
      mfu: {
        round: 'รอบ 3 กสพท',
        programs: [
          {
            code: 'กสพท',
            title: 'หลักสูตรทันตแพทยศาสตรบัณฑิต (รับร่วม กสพท.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'รับสมัครผ่านการรับร่วม กสพท. (TPAT1 30% + A-Level 7 วิชา 70%) ผ่านเกณฑ์ขั้นต่ำ 30 คะแนนทุกกลุ่มวิชา',
            noteType: 'info'
          }
        ]
      }
    }
  },

  // 3. เภสัชศาสตร์ / วิทยาศาสตร์เครื่องสำอาง
  {
    id: 'pharm',
    name: 'คณะเภสัชศาสตร์',
    meta: 'หลักสูตรเภสัชศาสตรบัณฑิต (ภ.บ.) และวิทยาศาสตร์เครื่องสำอาง',
    iconName: 'Pill',
    unis: {
      tu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10050218130101A',
            title: 'หลักสูตรเภสัชศาสตรบัณฑิต (ภ.บ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (5 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 13.33, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 13.33, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 13.34, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: null }
            ],
            note: 'จำนวนรับ 60 คน คุณสมบัติ: ม.6 ไม่ตาบอดสี ทำสัญญาผูกพัน 3 ปี สัดส่วนคะแนน A-Level รวม 80% (คณิต1 20%, กลุ่มวิทย์ 40%, อังกฤษ 20%)',
            noteType: 'info'
          }
        ]
      },
      psu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 39-40',
            title: 'เภสัชกรรมอุตสาหการ & การบริบาลทางเภสัชกรรม',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (5 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 16, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 16, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 16, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 16, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 16, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 }
            ],
            note: 'จำนวนรับ: อุตสาหการ 45 คน / บริบาล 30 คน ตัวเลขในตารางคือเกณฑ์ขั้นต่ำ: TGAT >= 20, A-Level แต่ละวิชา >= 25 คะแนน',
            noteType: 'warning'
          }
        ]
      },
      up: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '3136',
            title: 'หลักสูตรเภสัชศาสตรบัณฑิต สาขาวิชาการบริบาลทางเภสัชกรรม',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 20, color: '#888888' },
              { label: 'A-Level (5 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX (6 ภาคเรียน)', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 13.33, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 13.33, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 13.34, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: null }
            ],
            note: 'จำนวนรับ 20 คน แผนการเรียนวิทย์-คณิต คำนวณค่าน้ำหนัก GPAX 20% + A-Level 80%',
            noteType: 'info'
          },
          {
            code: '3137',
            title: 'สาขาวิชาวิทยาศาสตร์เครื่องสำอาง (วท.บ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT3'],
            weights: [
              { label: 'GPAX', pct: 20, color: '#888888' },
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'TPAT3', pct: 20, color: '#2F6F8F' },
              { label: 'A-Level', pct: 40, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX (6 ภาคเรียน)', pct: 20, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'TPAT3', code: '30', name: '30 TPAT3 ความถนัดวิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 10, min: null }
            ],
            note: 'จำนวนรับ 30 คน ใช้ TPAT3 สัดส่วน 20% ร่วมกับ GPAX 20%, TGAT 20% และ A-Level 4 วิชา (คณิต1+ฟิสิกส์+เคมี+ชีวะ) 40%',
            noteType: 'info'
          }
        ]
      },
      buu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10190102111101A0J0010',
            title: 'วิทยาศาสตร์และเทคโนโลยีเครื่องสำอาง',
            gpax: '2.25',
            gpaxValue: 2.25,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 60, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX (6 ภาคเรียน)', pct: 10, min: 'GPAX >= 2.25' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: 'ไม่น้อยกว่า 15 คะแนน', minScoreValue: 15 },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ไม่น้อยกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: 'ไม่น้อยกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ไม่น้อยกว่า 20 คะแนน', minScoreValue: 20 }
            ],
            note: 'จำนวนรับ 40 คน GPAX ขั้นต่ำ 2.25 เกณฑ์ขั้นต่ำรายวิชา: TGAT >= 15, คณิต 1 >= 20, เคมี >= 20, ชีววิทยา >= 20',
            noteType: 'warning'
          }
        ]
      },
      cmu: {
        round: 'รอบ 3 กสพท',
        programs: [
          {
            code: '10040110130101A',
            title: 'สาขาวิชาเภสัชศาสตร์ (การรับตรงร่วมกัน กสพท.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'จำนวนรับ 50 คน คัดเลือกผ่าน กสพท. (TPAT1 30% + A-Level 7 วิชา 70%) ผ่านเกณฑ์ขั้นต่ำ 30 คะแนนทุกกลุ่มวิชา',
            noteType: 'info'
          }
        ]
      },
      swu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ภ.บ.',
            title: 'สาขาวิชาการบริบาลทางเภสัชกรรม / เภสัชกรรมอุตสาหการ',
            gpax: '3.00',
            gpaxValue: 3.00,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (5 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 13, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 14, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 13, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'สัดส่วนคะแนนรอบ 3 Admission (เภสัชกรรมอุตสาหการ และการบริบาลทางเภสัชกรรม): TGAT 20% + คณิต1 20% + ฟิสิกส์ 13% + เคมี 14% + ชีวะ 13% + อังกฤษ 20%',
            noteType: 'info'
          }
        ]
      },
      mfu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'วท.บ. (A-Level)',
            title: 'สาขาวิชาวิทยาศาสตร์เครื่องสำอาง / เทคโนโลยีความงาม (รูปแบบ A-Level)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null }
            ],
            note: 'รูปแบบ A-Level 100%: อังกฤษ 25%, ฟิสิกส์ 25%, เคมี 25%, ชีววิทยา 25%',
            noteType: 'info'
          },
          {
            code: 'วท.บ. (TGAT+TPAT3)',
            title: 'สาขาวิชาวิทยาศาสตร์เครื่องสำอาง / เทคโนโลยีความงาม (รูปแบบ TGAT + TPAT3)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT3'],
            weights: [
              { label: 'TGAT', pct: 50, color: '#C8862B' },
              { label: 'TPAT3', pct: 50, color: '#2F6F8F' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 50, min: null },
              { exam: 'TPAT3', code: '30', name: '30 TPAT3 ความถนัดวิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์', pct: 50, min: null }
            ],
            note: 'รูปแบบทางเลือก: ใช้ TGAT 50% + TPAT3 ความถนัดด้านวิทยาศาสตร์และเทคโนโลยี 50%',
            noteType: 'info'
          }
        ]
      }
    }
  },

  // 4. พยาบาลศาสตร์
  {
    id: 'nurse',
    name: 'คณะพยาบาลศาสตร์',
    meta: 'หลักสูตรพยาบาลศาสตรบัณฑิต (พย.บ.)',
    iconName: 'HeartPulse',
    unis: {
      tu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10050214111701A',
            title: 'หลักสูตรพยาบาลศาสตรบัณฑิต (พย.บ.)',
            gpax: '3.00',
            gpaxValue: 3.00,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: null },
              { exam: 'A-Level', code: '62', name: 'A-Level 62 คณิตศาสตร์ประยุกต์ 2', pct: 10, min: null },
              { exam: 'A-Level', code: '63', name: 'A-Level 63 วิทยาศาสตร์ประยุกต์', pct: 20, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: null }
            ],
            note: 'จำนวนรับ 60 คน GPAX ไม่ต่ำกว่า 3.00 ไม่ตาบอดสี (มีทุน รพ.ธรรมศาสตร์ 80,000 บ./ปี จำนวน 30 ทุน)',
            noteType: 'info'
          }
        ]
      },
      cmu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '00431201301010',
            title: 'สาขาวิชาพยาบาลศาสตร์ (หลักสูตรปกติ)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 15, min: 'ไม่น้อยกว่า 40 คะแนน (T-Score)', minScoreValue: 40 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: 'ไม่น้อยกว่า 45 คะแนน (T-Score)', minScoreValue: 45 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: null }
            ],
            note: 'จำนวนรับ 62 คน เกณฑ์คะแนนขั้นต่ำ A-Level: เคมี >= 40, ชีววิทยา >= 45 (Adj. T-Score)',
            noteType: 'warning'
          },
          {
            code: '00431271301010',
            title: 'สาขาวิชาพยาบาลศาสตร์ (หลักสูตรนานาชาติ)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 15, min: 'ไม่น้อยกว่า 40 คะแนน', minScoreValue: 40 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: 'ไม่น้อยกว่า 45 คะแนน', minScoreValue: 45 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: 'ไม่น้อยกว่า 50 คะแนน', minScoreValue: 50 }
            ],
            note: 'จำนวนรับ 5 คน เกณฑ์คะแนนขั้นต่ำ A-Level: เคมี >= 40, ชีวะ >= 45, อังกฤษ >= 50',
            noteType: 'warning'
          }
        ]
      },
      buu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10190104111701A0J0010',
            title: 'พยาบาลศาสตรบัณฑิต (หลักสูตรภาษาไทย)',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 35, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 55, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'GPAX 6 ภาคเรียน', pct: 10, min: 'GPAX >= 2.75' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 35, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 15, min: null },
              { exam: 'A-Level', code: '63', name: 'A-Level 63 วิทยาศาสตร์ประยุกต์', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 15, min: null }
            ],
            note: 'จำนวนรับ 50 คน GPAX ขั้นต่ำ 2.75 วิทย์ 22 นก. คณิต 12 นก.',
            noteType: 'info'
          },
          {
            code: '10190104111702D0J0010',
            title: 'พยาบาลศาสตรบัณฑิต (หลักสูตรภาษาอังกฤษ)',
            gpax: 'ไม่ระบุ',
            gpaxValue: null,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 35, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 55, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'GPAX 6 ภาคเรียน', pct: 10, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 35, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 15, min: null },
              { exam: 'A-Level', code: '63', name: 'A-Level 63 วิทยาศาสตร์ประยุกต์', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 15, min: null }
            ],
            note: 'จำนวนรับ 5 คน GPAX ไม่ระบุขั้นต่ำ (ช่องเงื่อนไขเป็น -) วิทย์ 22 นก. คณิต 12 นก.',
            noteType: 'info'
          }
        ]
      },
      up: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '3129',
            title: 'หลักสูตรพยาบาลศาสตรบัณฑิต (พย.บ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 20, color: '#888888' },
              { label: 'A-Level (3 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'GPAX 6 ภาคเรียน', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 20 คน แผนการเรียนวิทย์-คณิต GPAX ค่าน้ำหนัก 20% + A-Level 3 วิชา 80%',
            noteType: 'info'
          }
        ]
      },
      psu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 19',
            title: 'พยาบาลศาสตร์ (วิทยาเขตหาดใหญ่)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            requiredCredits: { science: 26, math: 12, english: 9 },
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ต้องมีผลสอบ (> 1)' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 }
            ],
            note: 'จำนวนรับ 55 คน คุณสมบัติ: วิทย์ >= 26 นก., คณิต >= 12 นก., อังกฤษ >= 9 นก., ไม่ตาบอดสีรุนแรง เกณฑ์ขั้นต่ำ A-Level แต่ละวิชา',
            noteType: 'warning'
          },
          {
            code: 'ลำดับ 128',
            title: 'พยาบาลศาสตร์ (วิทยาเขตปัตตานี)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ต้องมีผลสอบ (> 1)' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ต้องมีผลสอบ (> 1)' },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: 'ต้องมีผลสอบ (> 1)' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ต้องมีผลสอบ (> 1)' },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: 'ต้องมีผลสอบ (> 1)' }
            ],
            note: 'จำนวนรับ 4 คน วิทยาเขตปัตตานี ต้องมีผลคะแนนสอบทุกวิชา',
            noteType: 'info'
          }
        ]
      },
      swu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'พย.บ.',
            title: 'หลักสูตรพยาบาลศาสตรบัณฑิต',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '63', name: 'A-Level 63 วิทยาศาสตร์ประยุกต์', pct: 30, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'GPAX ขั้นต่ำ 2.50 สัดส่วนคะแนนรอบ 3 Admission: TGAT 30% + คณิต1 20% + อังกฤษ 20% + วิทย์ประยุกต์ 30%',
            noteType: 'warning'
          }
        ]
      },
      mfu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 67',
            title: 'หลักสูตรพยาบาลศาสตรบัณฑิต',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '81', name: 'A-Level 81 ภาษาไทย', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null }
            ],
            note: 'รายวิชา A-Level 4 วิชาหลักที่ใช้คัดเลือกตามประกาศ มฟล. รอบที่ 3',
            noteType: 'info'
          }
        ]
      }
    }
  },

  // 5. กายภาพบำบัด
  {
    id: 'pt',
    name: 'คณะกายภาพบำบัด',
    meta: 'หลักสูตรกายภาพบำบัดบัณฑิต (กภ.บ.)',
    iconName: 'UserCheck',
    unis: {
      chula: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 129',
            title: 'สาขาวิชากายภาพบำบัด (คณะสหเวชศาสตร์ จุฬาฯ)',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX (6 ภาคเรียน)', pct: 10, min: 'GPAX >= 2.75' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 40 คน GPAX ขั้นต่ำ 2.75 ค่าน้ำหนัก GPAX 10% + TGAT 40% + ฟิสิกส์ 25% + ชีวะ 25%',
            noteType: 'info'
          }
        ]
      },
      tu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10050212110101A',
            title: 'สาขาวิชากายภาพบำบัด (คณะสหเวชศาสตร์ มธ.)',
            gpax: '3.00',
            gpaxValue: 3.00,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 5, color: '#888888' },
              { label: 'TGAT2', pct: 20, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 75, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'GPAX 6 ภาคเรียน (ค่าน้ำหนัก 5%)', pct: 5, min: 'GPAX >= 3.00' },
              { exam: 'TGAT', code: '92', name: 'TGAT 92 การคิดอย่างมีเหตุผล', pct: 20, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: 'ไม่ต่ำกว่า 30 คะแนน', minScoreValue: 30 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: 'ไม่ต่ำกว่า 30 คะแนน', minScoreValue: 30 }
            ],
            note: 'จำนวนรับ 60 คน คุณสมบัติ: GPAX ไม่ต่ำกว่า 3.00 สูงไม่น้อยกว่า 155 ซม. เกณฑ์คะแนนขั้นต่ำ: ฟิสิกส์ >= 25, ชีวะ >= 30, อังกฤษ >= 30',
            noteType: 'warning'
          }
        ]
      },
      cmu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10040111110101A',
            title: 'สาขาวิชากายภาพบำบัด (คณะเทคนิคการแพทย์ มช.)',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX (6 ภาคเรียน)', pct: 10, min: 'GPAX >= 2.50' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: 'ไม่น้อยกว่า 45 คะแนน', minScoreValue: 45 }
            ],
            note: 'จำนวนรับ 20 คน GPAX ขั้นต่ำ 2.50 เกณฑ์ขั้นต่ำ A-Level ชีววิทยา >= 45 (Adj. T-Score)',
            noteType: 'warning'
          }
        ]
      },
      buu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10190119110101A0J0010',
            title: 'กายภาพบำบัด',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX (6 ภาคเรียน)', pct: 10, min: 'GPAX >= 2.75' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 24 คน GPAX ขั้นต่ำ 2.75 วิทย์ 22 นก. คณิต 12 นก. ต้องไม่ตาบอดสี',
            noteType: 'info'
          }
        ]
      },
      up: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '3166',
            title: 'หลักสูตรกายภาพบำบัดบัณฑิต (คณะสหเวชศาสตร์ มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX (6 ภาคเรียน)', pct: 10, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 10 คน แผนการเรียนวิทย์-คณิต คำนวณ GPAX 10% + TGAT 40% + A-Level 50%',
            noteType: 'info'
          }
        ]
      },
      psu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 16',
            title: 'สาขาวิชากายภาพบำบัด (คณะแพทยศาสตร์ มอ.หาดใหญ่)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 60, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: 'ขั้นต่ำ 40 คะแนน', minScoreValue: 40 },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 30, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 }
            ],
            note: 'จำนวนรับ 20 คน เกณฑ์คะแนนขั้นต่ำ: TGAT >= 40, ฟิสิกส์ >= 25, ชีววิทยา >= 25',
            noteType: 'warning'
          }
        ]
      },
      swu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'กภ.บ.',
            title: 'สาขาวิชากายภาพบำบัด',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX', pct: 10, min: 'ขั้นต่ำ 2.50', minScoreValue: 2.50 },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'GPAX ขั้นต่ำ 2.50 สัดส่วนคะแนนรอบ 3 Admission: GPAX 10% + TGAT 40% + ฟิสิกส์ 25% + ชีววิทยา 25%',
            noteType: 'warning'
          },
          {
            code: 'วท.บ.',
            title: 'สาขาวิชาการส่งเสริมสุขภาพ',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX', pct: 10, min: 'ใช้ผลการเรียน' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '81', name: 'A-Level 81 ภาษาไทย', pct: 20, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'สัดส่วนคะแนนรอบ 3 Admission: GPAX 10% + TGAT 40% + เคมี 10% + ชีววิทยา 20% + ภาษาไทย 20%',
            noteType: 'info'
          },
          {
            code: 'ก.บ.',
            title: 'สาขาวิชากิจกรรมบำบัด',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 60, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX', pct: 10, min: 'ใช้ผลการเรียน' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '81', name: 'A-Level 81 ภาษาไทย', pct: 20, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'สัดส่วนคะแนนรอบ 3 Admission: GPAX 10% + TGAT 30% + คณิต1 20% + ชีววิทยา 20% + ภาษาไทย 20%',
            noteType: 'info'
          }
        ]
      },
      mfu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'สำนักวิชาการแพทย์บูรณาการ',
            title: 'สาขาวิชากายภาพบำบัด (มฟล.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'TPAT1', pct: 40, color: '#2F6F8F' },
              { label: 'A-Level (5 วิชา)', pct: 10, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX', pct: 10, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: null },
              { exam: 'TPAT1', code: '10', name: 'TPAT1 วิชาเฉพาะ กสพท', pct: 40, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 2, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 2, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 2, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 2, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 2, min: null }
            ],
            note: 'สัดส่วน มฟล. รอบที่ 3: GPAX 10% + TGAT 40% + TPAT1 40% + A-Level 5 วิชาหลักวิชาละ 2% (รวม 10%)',
            noteType: 'info'
          }
        ]
      }
    }
  },

  // 6. เทคนิคการแพทย์ / สหเวชศาสตร์ / รังสีเทคนิค / โภชนาการ / กิจกรรมบำบัด
  {
    id: 'allied',
    name: 'คณะเทคนิคการแพทย์ / สหเวชศาสตร์',
    meta: 'เทคนิคการแพทย์, รังสีเทคนิค, โภชนาการ, กิจกรรมบำบัด',
    iconName: 'Microscope',
    unis: {
      chula: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 128',
            title: 'สาขาวิชาเทคนิคการแพทย์ (คณะสหเวชศาสตร์ จุฬาฯ)',
            gpax: '3.00',
            gpaxValue: 3.00,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 30, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 }
            ],
            note: 'จำนวนรับ 40 คน GPAX ขั้นต่ำ 3.00 ทุกวิชาต้องผ่านเกณฑ์ขั้นต่ำตามที่ระบุ',
            noteType: 'warning'
          },
          {
            code: 'ลำดับ 131',
            title: 'สาขาวิชารังสีเทคนิค (คณะสหเวชศาสตร์ จุฬาฯ)',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 25, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 75, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 25, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 }
            ],
            note: 'จำนวนรับ 15 คน GPAX ขั้นต่ำ 2.75 ทุกวิชาต้องผ่านเกณฑ์ขั้นต่ำ',
            noteType: 'warning'
          },
          {
            code: 'ลำดับ 130',
            title: 'สาขาวิชาโภชนาการและการกำหนดอาหาร (คณะสหเวชศาสตร์ จุฬาฯ)',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 70, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 30, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 }
            ],
            note: 'จำนวนรับ 30 คน GPAX ขั้นต่ำ 2.75 คณิต 1 เคมี และชีววิทยา ต้องได้ไม่ต่ำกว่า 25 คะแนน',
            noteType: 'warning'
          }
        ]
      },
      tu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10050212111301A',
            title: 'หลักสูตรเทคนิคการแพทย์บัณฑิต (คณะสหเวชศาสตร์ มธ.)',
            gpax: '3.00',
            gpaxValue: 3.00,
            minTotal: null,
            requiredCredits: { science: 22, math: 12, english: 9 },
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 30, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: null }
            ],
            note: 'จำนวนรับ 40 คน GPAX ขั้นต่ำ 3.00 วิทย์ >= 22 นก. คณิต >= 12 นก. อังกฤษ >= 9 นก. ตาไม่บอดสีรุนแรง',
            noteType: 'info'
          },
          {
            code: '10050212111901B',
            title: 'สาขาวิชารังสีเทคนิค (โครงการพิเศษ คณะสหเวชศาสตร์ มธ.)',
            gpax: '3.25',
            gpaxValue: 3.25,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'TGAT1', pct: 20, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '91', name: 'TGAT 91 การสื่อสารภาษาอังกฤษ', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 30, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 30, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: null }
            ],
            note: 'จำนวนรับ 34 คน GPAX ขั้นต่ำ 3.25 วิทย์ 22 นก. คณิต 12 นก.',
            noteType: 'info'
          }
        ]
      },
      cmu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10040111111301A',
            title: 'สาขาวิชาเทคนิคการแพทย์ (คณะเทคนิคการแพทย์ มช.)',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: 'T-Score >= 47', minScoreValue: 47 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 30, min: 'T-Score >= 50', minScoreValue: 50 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: 'T-Score >= 50', minScoreValue: 50 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: 'T-Score >= 40', minScoreValue: 40 }
            ],
            note: 'จำนวนรับ 25 คน GPAX >= 2.50 เกณฑ์ขั้นต่ำ A-Level (T-Score): คณิต 1 >= 47, เคมี >= 50, ชีวะ >= 50, อังกฤษ >= 40',
            noteType: 'warning'
          },
          {
            code: '10040111111901A',
            title: 'สาขาวิชารังสีเทคนิค (คณะเทคนิคการแพทย์ มช.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (5 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ไม่น้อยกว่า 45 คะแนน', minScoreValue: 45 },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: 'ไม่น้อยกว่า 45 คะแนน', minScoreValue: 45 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: 'ไม่น้อยกว่า 45 คะแนน', minScoreValue: 45 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ไม่น้อยกว่า 45 คะแนน', minScoreValue: 45 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 15, min: 'ไม่น้อยกว่า 50 คะแนน', minScoreValue: 50 }
            ],
            note: 'จำนวนรับ 15 คน เกณฑ์ขั้นต่ำ A-Level: คณิต 1 >= 45, ฟิสิกส์ >= 45, เคมี >= 45, ชีวะ >= 45, อังกฤษ >= 50',
            noteType: 'warning'
          },
          {
            code: '10040111110901A',
            title: 'สาขาวิชากิจกรรมบำบัด (คณะเทคนิคการแพทย์ มช.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level สายวิทย์', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '91', name: '91 TGAT1 การสื่อสารภาษาอังกฤษ', pct: 10, min: null },
              { exam: 'TGAT', code: '92', name: '92 TGAT2 การคิดอย่างมีเหตุผล', pct: 10, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 40, min: 'ชีววิทยา >= 40 (Adj. T-Score)', minScoreValue: 40 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 40, min: 'ภาษาอังกฤษ >= 50 (Adj. T-Score)', minScoreValue: 50 }
            ],
            note: 'จำนวนรับ 30 คน เกณฑ์ขั้นต่ำ A-Level: ชีววิทยา >= 40, ภาษาอังกฤษ >= 50',
            noteType: 'warning'
          }
        ]
      },
      buu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10190119111301A0J0010',
            title: 'เทคนิคการแพทย์',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 30, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: null }
            ],
            note: 'จำนวนรับ 40 คน GPAX ขั้นต่ำ 2.50 วิทย์ 22 นก. คณิต 12 นก. ต้องไม่ตาบอดสี',
            noteType: 'info'
          },
          {
            code: '10190119111801A0J0010',
            title: 'โภชนาการและการกำหนดอาหาร',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            tpatUsed: ['TPAT3'],
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'TPAT3', pct: 20, color: '#2F6F8F' },
              { label: 'A-Level (2 วิชา)', pct: 40, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX 6 ภาคเรียน', pct: 10, min: 'GPAX >= 2.50' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: null },
              { exam: 'TPAT3', code: '30', name: '30 TPAT3 ความถนัดด้านวิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์', pct: 20, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: null }
            ],
            note: 'จำนวนรับ 40 คน GPAX ขั้นต่ำ 2.50 วิทย์ 22 นก. คณิต 12 นก. ต้องไม่ตาบอดสี ใช้ TPAT3 สัดส่วน 20%',
            noteType: 'info'
          },
          {
            code: '10190119112102A0J0010',
            title: 'พยาธิวิทยากายวิภาค',
            gpax: 'ไม่ระบุ',
            gpaxValue: null,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX 6 ภาคเรียน', pct: 10, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 40, min: null }
            ],
            note: 'จำนวนรับ 45 คน GPAX ไม่ระบุขั้นต่ำ (ช่องเงื่อนไขเป็น -) วิทย์ 22 นก. คณิต 12 นก. ต้องไม่ตาบอดสี',
            noteType: 'info'
          }
        ]
      },
      up: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '3167',
            title: 'สาขาวิชาเทคนิคการแพทย์ (คณะสหเวชศาสตร์ มพ.)',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 20, color: '#888888' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX 6 ภาคเรียน', pct: 20, min: 'GPAX >= 2.50' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 30, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: null }
            ],
            note: 'จำนวนรับ 20 คน GPAX ไม่น้อยกว่า 2.50',
            noteType: 'info'
          }
        ]
      },
      psu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 59',
            title: 'คณะเทคนิคการแพทย์ (มอ.หาดใหญ่)',
            gpax: '3.25',
            gpaxValue: 3.25,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 }
            ],
            note: 'จำนวนรับ 20 คน คุณสมบัติ: GPAX ไม่ต่ำกว่า 3.25 เกณฑ์ขั้นต่ำแต่ละวิชาต้องผ่านตามที่กำหนด',
            noteType: 'warning'
          },
          {
            code: 'ลำดับ 17',
            title: 'สาขาวิชารังสีเทคนิค (คณะแพทยศาสตร์ มอ.หาดใหญ่)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (5 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ขั้นต่ำ 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: 'ผลรวมเคมี+ชีวะ+อังกฤษ >= 25%' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 15, min: 'ผลรวมเคมี+ชีวะ+อังกฤษ >= 25%' },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: 'ผลรวมเคมี+ชีวะ+อังกฤษ >= 25%' }
            ],
            note: 'จำนวนรับ 10 คน เกณฑ์ขั้นต่ำ: TGAT >= 20, คณิต 1 >= 20, ฟิสิกส์ >= 25, ผลรวมเคมี+ชีวะ+อังกฤษ >= 25%',
            noteType: 'warning'
          }
        ]
      },
      swu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ก.บ.',
            title: 'สาขาวิชากิจกรรมบำบัด',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 60, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX', pct: 10, min: 'ใช้ผลการเรียน' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '81', name: 'A-Level 81 ภาษาไทย', pct: 20, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'สัดส่วนคะแนนรอบ 3 Admission: GPAX 10% + TGAT 30% + คณิต1 20% + ชีววิทยา 20% + ภาษาไทย 20%',
            noteType: 'info'
          }
        ]
      }
    }
  },

  // 7. การแพทย์แผนไทย / การแพทย์แผนไทยประยุกต์ / แผนจีน
  {
    id: 'thaimed',
    name: 'คณะการแพทย์แผนไทย / แผนจีน',
    meta: 'การแพทย์แผนไทยประยุกต์ (พทป.บ.) และการแพทย์แผนจีน',
    iconName: 'Sparkles',
    unis: {
      tu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10050211110801A',
            title: 'การแพทย์แผนไทยประยุกต์ (คณะแพทยศาสตร์ มธ. รังสิต)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            tpatUsed: ['TPAT1'],
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'TPAT1', pct: 20, color: '#2F6F8F' },
              { label: 'A-Level (5 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX 6 ภาคเรียน', pct: 10, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'TPAT1', code: '10', name: 'TPAT1 วิชาเฉพาะ กสพท', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 10, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: null }
            ],
            note: 'จำนวนรับ: ศูนย์รังสิต 20 คน (และศูนย์ลำปาง 15 คน) คุณสมบัติ: ม.6 วิทย์ 22 นก. คณิต 12 นก.',
            noteType: 'info'
          },
          {
            code: '10050229110501E',
            title: 'การแพทย์แผนจีนบัณฑิต นานาชาติ (วิทยาลัยแพทยศาสตร์นานาชาติจุฬาภรณ์ CICM)',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 30, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: 'ไม่ต่ำกว่า 20 คะแนน', minScoreValue: 20 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 20, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 }
            ],
            note: 'จำนวนรับ 5 คน GPAX >= 2.50 เกณฑ์ขั้นต่ำ: คณิต 1 >= 20, เคมี >= 20, ชีวะ >= 20, อังกฤษ >= 25 (หรือ IELTS >= 6.0)',
            noteType: 'warning'
          }
        ]
      },
      buu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10190119110801A0J0010',
            title: 'การแพทย์แผนไทยประยุกต์บัณฑิต',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'TPAT1', pct: 20, color: '#2F6F8F' },
              { label: 'A-Level (5 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX 6 ภาคเรียน', pct: 10, min: 'GPAX >= 2.75' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'TPAT1', code: '10', name: 'TPAT1 วิชาเฉพาะ กสพท', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 10, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: null }
            ],
            note: 'จำนวนรับ 10 คน GPAX ขั้นต่ำ 2.75 วิทย์ 22 นก. คณิต 12 นก. ต้องไม่ตาบอดสี ใช้ TPAT1 สัดส่วน 20%',
            noteType: 'info'
          }
        ]
      },
      up: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '3175',
            title: 'หลักสูตรการแพทย์แผนไทยประยุกต์บัณฑิต (คณะสาธารณสุขศาสตร์ มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'TPAT1', pct: 20, color: '#2F6F8F' },
              { label: 'A-Level (5 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX 6 ภาคเรียน', pct: 10, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'TPAT1', code: '10', name: 'TPAT1 วิชาเฉพาะ กสพท', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 10, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 10, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 10, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: null }
            ],
            note: 'จำนวนรับ 10 คน แผนการเรียนวิทย์-คณิต สัดส่วน GPAX 10% + TGAT 20% + TPAT1 20% + A-Level 5 วิชา 50%',
            noteType: 'info'
          },
          {
            code: '3168',
            title: 'หลักสูตรควบ 2 ปริญญา การแพทย์แผนจีน + ศิลปศาสตรบัณฑิต (ภาษาจีน)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT3'],
            weights: [
              { label: 'GPAX', pct: 20, color: '#888888' },
              { label: 'TGAT', pct: 30, color: '#C8862B' },
              { label: 'TPAT3', pct: 50, color: '#2F6F8F' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX 6 ภาคเรียน', pct: 20, min: null },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 30, min: null },
              { exam: 'TPAT3', code: '30', name: '30 TPAT3 ความถนัดวิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์', pct: 50, min: null }
            ],
            note: 'จำนวนรับ 20 คน แผนการเรียนวิทย์-คณิต สัดส่วน GPAX 20% + TGAT 30% + TPAT3 50%',
            noteType: 'info'
          }
        ]
      },
      psu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 57',
            title: 'คณะการแพทย์แผนไทย (มอ.หาดใหญ่)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT3'],
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'TPAT3', pct: 20, color: '#2F6F8F' },
              { label: 'A-Level (4 วิชา)', pct: 60, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ต้องมีผลสอบ (> 1)' },
              { exam: 'TPAT3', code: '30', name: '30 TPAT3 ความถนัดวิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์', pct: 20, min: 'ต้องมีผลสอบ (> 1)' },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 15, min: 'ต้องมีผลสอบ (> 1)' },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 15, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 15, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 15, min: 'ขั้นต่ำ 25 คะแนน', minScoreValue: 25 }
            ],
            note: 'จำนวนรับ 30 คน เกณฑ์คะแนนขั้นต่ำ: เคมี >= 25, ชีววิทยา >= 25, อังกฤษ >= 25, TGAT, TPAT3, คณิต 1 (>1)',
            noteType: 'warning'
          }
        ]
      }
    }
  },

  // 8. สาธารณสุขศาสตร์ / อาชีวอนามัย / อนามัยสิ่งแวดล้อม
  {
    id: 'publichealth',
    name: 'คณะสาธารณสุขศาสตร์',
    meta: 'อนามัยสิ่งแวดล้อม, อาชีวอนามัยและความปลอดภัย, สาธารณสุขชุมชน',
    iconName: 'ShieldPlus',
    unis: {
      swu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ส.บ. / วท.บ.',
            title: 'สาขาวิชาสาธารณสุขศาสตร์',
            gpax: '2.80',
            gpaxValue: 2.80,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 30, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'GPAX ขั้นต่ำ 2.80 สัดส่วนคะแนนรอบ 3 Admission: TGAT 20% + ฟิสิกส์ 20% + เคมี 30% + ชีววิทยา 30%',
            noteType: 'warning'
          },
          {
            code: 'วท.บ.',
            title: 'สาขาวิชาการส่งเสริมสุขภาพ',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'GPAX', pct: 10, color: '#888888' },
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 50, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'GPAX', name: 'ผลการเรียนเฉลี่ยสะสม GPAX', pct: 10, min: 'ใช้ผลการเรียน' },
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 10, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '81', name: 'A-Level 81 ภาษาไทย', pct: 20, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'สัดส่วนคะแนนรอบ 3 Admission: GPAX 10% + TGAT 40% + เคมี 10% + ชีววิทยา 20% + ภาษาไทย 20%',
            noteType: 'info'
          }
        ]
      },
      tu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10050217112701A',
            title: 'สาขาวิชาอาชีวอนามัยและความปลอดภัย (คณะสาธารณสุขศาสตร์ มธ. รังสิต)',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: 'ไม่ต่ำกว่า 1 คะแนน', minScoreValue: 1 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: 'ไม่ต่ำกว่า 1 คะแนน', minScoreValue: 1 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: 'ไม่ต่ำกว่า 1 คะแนน', minScoreValue: 1 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: 'ไม่ต่ำกว่า 1 คะแนน', minScoreValue: 1 }
            ],
            note: 'จำนวนรับ 60 คน GPAX ขั้นต่ำ 2.75 วิทย์ 22 นก. คณิต 12 นก. ไม่ตาบอดสีรุนแรง แต่ละวิชาต้องไม่ต่ำกว่า 1',
            noteType: 'info'
          },
          {
            code: '10050217112702A',
            title: 'สาขาวิชาอนามัยสิ่งแวดล้อม (คณะสาธารณสุขศาสตร์ มธ. รังสิต)',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: 'ไม่ต่ำกว่า 1 คะแนน', minScoreValue: 1 },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: 'ไม่ต่ำกว่า 1 คะแนน', minScoreValue: 1 },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: 'ไม่ต่ำกว่า 1 คะแนน', minScoreValue: 1 },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: 'ไม่ต่ำกว่า 1 คะแนน', minScoreValue: 1 }
            ],
            note: 'จำนวนรับ 50 คน GPAX ขั้นต่ำ 2.75 วิทย์ 22 นก. คณิต 12 นก.',
            noteType: 'info'
          }
        ]
      },
      buu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10190112112501A0J0010',
            title: 'สุขศึกษาและการส่งเสริมสุขภาพ',
            gpax: '2.00',
            gpaxValue: 2.00,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 30, min: null }
            ],
            note: 'จำนวนรับ 20 คน GPAX ขั้นต่ำ 2.00 วิทย์ 22 นก. คณิต 12 นก. ต้องไม่ตาบอดสี',
            noteType: 'info'
          },
          {
            code: '10190112112701A0J0010',
            title: 'สาธารณสุขชุมชน',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 5 คน GPAX ขั้นต่ำ 2.50 วิทย์ 22 นก. คณิต 12 นก.',
            noteType: 'info'
          },
          {
            code: '10190112112702A0J0010',
            title: 'สาธารณสุขศาสตร์ อุตสาหกรรมและความปลอดภัย',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 30, min: null }
            ],
            note: 'จำนวนรับ 15 คน GPAX ขั้นต่ำ 2.50 วิทย์ 22 นก. คณิต 12 นก. ต้องไม่ตาบอดสี',
            noteType: 'info'
          },
          {
            code: '10190112112703A0J0010',
            title: 'อนามัยสิ่งแวดล้อม',
            gpax: '2.00',
            gpaxValue: 2.00,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 30, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 30, min: null }
            ],
            note: 'GPAX ขั้นต่ำ 2.00 วิทย์ 22 นก. คณิต 12 นก. สัดส่วนคะแนน: คณิต 1 20% + เคมี 20% + ชีววิทยา 30% + ภาษาอังกฤษ 30%',
            noteType: 'info'
          }
        ]
      },
      up: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '3176',
            title: 'อนามัยสิ่งแวดล้อม / การส่งเสริมสุขภาพ / อนามัยชุมชน (คณะสาธารณสุขศาสตร์ มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ: สิ่งแวดล้อม 30 คน, ส่งเสริมสุขภาพ 30 คน, อนามัยชุมชน 20 คน',
            noteType: 'info'
          },
          {
            code: '3177',
            title: 'สาขาวิชาอาชีวอนามัยและความปลอดภัย (คณะสาธารณสุขศาสตร์ มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 30 คน แผนการเรียนวิทย์-คณิต',
            noteType: 'info'
          },
          {
            code: '3178',
            title: 'หลักสูตรควบ 2 ปริญญา อนามัยสิ่งแวดล้อม + นิติศาสตรบัณฑิต (มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 5 คน หลักสูตรวิทยาศาสตรบัณฑิต สาขาอนามัยสิ่งแวดล้อม ควบ นิติศาสตรบัณฑิต',
            noteType: 'info'
          },
          {
            code: '3179',
            title: 'หลักสูตรควบ 2 ปริญญา อนามัยสิ่งแวดล้อม + เศรษฐศาสตรบัณฑิต (มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 5 คน หลักสูตรวิทยาศาสตรบัณฑิต สาขาอนามัยสิ่งแวดล้อม ควบ เศรษฐศาสตรบัณฑิต',
            noteType: 'info'
          },
          {
            code: '3180',
            title: 'หลักสูตรควบ 2 ปริญญา อาชีวอนามัยฯ + วิศวกรรมสิ่งแวดล้อม (มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 5 คน หลักสูตรวิทยาศาสตรบัณฑิต สาขาอาชีวอนามัยและความปลอดภัย ควบ วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมสิ่งแวดล้อม',
            noteType: 'info'
          },
          {
            code: '3181',
            title: 'หลักสูตรควบ 2 ปริญญา ส่งเสริมสุขภาพ + เศรษฐศาสตรบัณฑิต (มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 5 คน หลักสูตรสาธารณสุขศาสตรบัณฑิต สาขาส่งเสริมสุขภาพ ควบ เศรษฐศาสตรบัณฑิต',
            noteType: 'info'
          },
          {
            code: '3182',
            title: 'หลักสูตรควบ 2 ปริญญา อนามัยชุมชน + นิติศาสตรบัณฑิต (มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 10 คน หลักสูตรสาธารณสุขศาสตรบัณฑิต สาขาวิชาอนามัยชุมชน ควบ นิติศาสตรบัณฑิต',
            noteType: 'info'
          },
          {
            code: '3183',
            title: 'หลักสูตรควบ 2 ปริญญา อนามัยชุมชน + เศรษฐศาสตรบัณฑิต (มพ.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (4 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 10 คน หลักสูตรสาธารณสุขศาสตรบัณฑิต สาขาวิชาอนามัยชุมชน ควบ เศรษฐศาสตรบัณฑิต',
            noteType: 'info'
          }
        ]
      },
      mfu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'วท.บ.',
            title: 'สาธารณสุขศาสตร์ / อนามัยสิ่งแวดล้อม (มฟล.)',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [{ label: 'A-Level (3 วิชา)', pct: 100, color: '#0E3B34' }],
            subjects: [
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 34, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 33, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 33, min: null }
            ],
            note: 'รูปแบบ A-Level 3 วิชา (หรือเลือกยื่นรูปแบบคะแนน TGAT1 + TPAT3)',
            noteType: 'info'
          }
        ]
      }
    }
  },

  // 9. สัตวแพทยศาสตร์ / การพยาบาลสัตว์
  {
    id: 'vet',
    name: 'คณะสัตวแพทยศาสตร์',
    meta: 'สัตวแพทยศาสตรบัณฑิต (สพ.บ.) และการพยาบาลสัตว์',
    iconName: 'Activity',
    unis: {
      cmu: {
        round: 'รอบ 3 กสพท & Admission',
        programs: [
          {
            code: '10040114140101A',
            title: 'สาขาวิชาสัตวแพทยศาสตร์ (กสพท)',
            gpax: 'ไม่กำหนดขั้นต่ำ (ตามเกณฑ์ กสพท)',
            gpaxValue: null,
            minTotal: null,
            tpatUsed: ['TPAT1'],
            weights: KSPHT_WEIGHTS,
            subjects: KSPHT_SUBJECTS,
            note: 'จำนวนรับ 15 คน คัดเลือกผ่าน กสพท. (TPAT1 30% + A-Level 7 วิชา 70%)',
            noteType: 'info'
          },
          {
            code: '10040114140102A',
            title: 'สาขาวิชาการพยาบาลสัตว์',
            gpax: 'ไม่กำหนดขั้นต่ำ',
            gpaxValue: null,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 25, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 75, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 25, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 25, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 25, min: null },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 25, min: null }
            ],
            note: 'จำนวนรับ 10 คน (โครงการสายวิทย์ 5 คน, โครงการสายศิลป์-วิทย์ประยุกต์ 5 คน)',
            noteType: 'info'
          }
        ]
      }
    }
  },

  // 10. วิทยาศาสตร์การกีฬาและการออกกำลังกาย
  {
    id: 'sports',
    name: 'คณะวิทยาศาสตร์การกีฬาและสุขภาพ',
    meta: 'วิทยาศาสตร์การกีฬาและการออกกำลังกาย (วท.บ.)',
    iconName: 'Activity',
    unis: {
      swu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'วท.บ.',
            title: 'สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (3 วิชา)', pct: 60, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '62', name: 'A-Level 62 คณิตศาสตร์ประยุกต์ 2', pct: 10, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '82', name: 'A-Level 82 ภาษาอังกฤษ', pct: 10, min: 'ใช้ผลคะแนนสอบ' },
              { exam: 'A-Level', code: '63', name: 'A-Level 63 วิทยาศาสตร์ประยุกต์', pct: 40, min: 'ใช้ผลคะแนนสอบ' }
            ],
            note: 'GPAX ขั้นต่ำ 2.50 สัดส่วนคะแนนรอบ 3 Admission: TGAT 40% + คณิต2 10% + อังกฤษ 10% + วิทย์ประยุกต์ 40%',
            noteType: 'warning'
          }
        ]
      },
      chula: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: 'ลำดับ 135',
            title: 'สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย (คณะวิทยาศาสตร์การกีฬา จุฬาฯ)',
            gpax: '2.50',
            gpaxValue: 2.50,
            minTotal: null,
            weights: [
              { label: 'TGAT', pct: 40, color: '#C8862B' },
              { label: 'A-Level (2 วิชา)', pct: 60, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 40, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '62', name: 'A-Level 62 คณิตศาสตร์ประยุกต์ 2', pct: 30, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 },
              { exam: 'A-Level', code: '63', name: 'A-Level 63 วิทยาศาสตร์ประยุกต์', pct: 30, min: 'ไม่ต่ำกว่า 25 คะแนน', minScoreValue: 25 }
            ],
            note: 'จำนวนรับ 30 คน GPAX ขั้นต่ำ 2.50 เกณฑ์ขั้นต่ำรายวิชา: TGAT >= 25, คณิต 2 >= 25, วิทย์ประยุกต์ >= 25',
            noteType: 'warning'
          }
        ]
      },
      tu: {
        round: 'รอบ 3 Admission',
        programs: [
          {
            code: '10050212112001A',
            title: 'สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย (คณะสหเวชศาสตร์ มธ.)',
            gpax: '2.75',
            gpaxValue: 2.75,
            minTotal: null,
            requiredCredits: { science: 22, math: 12 },
            weights: [
              { label: 'TGAT', pct: 20, color: '#C8862B' },
              { label: 'A-Level (4 วิชา)', pct: 80, color: '#0E3B34' }
            ],
            subjects: [
              { exam: 'TGAT', code: '90', name: '90 TGAT ความถนัดทั่วไป', pct: 20, min: null },
              { exam: 'A-Level', code: '61', name: 'A-Level 61 คณิตศาสตร์ประยุกต์ 1', pct: 20, min: null },
              { exam: 'A-Level', code: '64', name: 'A-Level 64 ฟิสิกส์', pct: 20, min: null },
              { exam: 'A-Level', code: '65', name: 'A-Level 65 เคมี', pct: 20, min: null },
              { exam: 'A-Level', code: '66', name: 'A-Level 66 ชีววิทยา', pct: 20, min: null }
            ],
            note: 'จำนวนรับ 25 คน GPAX ขั้นต่ำ 2.75 วิทย์ 22 นก. คณิต 12 นก.',
            noteType: 'info'
          }
        ]
      }
    }
  }
];

export const DISCLAIMER_TEXT =
  'ข้อมูลเกณฑ์คะแนนและค่าน้ำหนักอ้างอิงตามประกาศ TCAS69 รอบที่ 3 Admission (ปีการศึกษา 2569) บางมหาวิทยาลัย/บางคณะยังไม่ครบและอาจคลาดเคลื่อนได้ เนื่องจากอยู่ระหว่างการตรวจสอบ กรุณายึดประกาศทางการของมหาวิทยาลัยและ mytcas.com เป็นหลักก่อนยื่นสมัคร';
