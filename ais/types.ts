export interface ExamCountdownItem {
  id: string;
  name: string;
  code: string;
  date: string; // YYYY-MM-DD
  description?: string;
}

export interface KsphtCalendarEvent {
  id: number;
  title: string;
  start: string; // ISO e.g. "2026-09-01T00:00:00"
  end: string;   // ISO e.g. "2026-09-20T23:59:59"
  url: string;   // e.g. "cotmesadmission.com"
  note: string;  // e.g. "ม.6 ใช้ใบ ปพ.7 / เด็กซิ่ว ใช้ใบ ปพ.1 หรือ 2"
}

export interface UniversityInfo {
  id: string;
  name: string;
  short: string;
  color: string;
  campus?: string;
}

export interface SubjectRequirement {
  exam: string;
  code?: string; // e.g. '61', '64', '65', '66', '82', '81', '70', '90', '10', '30', '50'
  name: string;
  pct: number;
  min: string | null;
  minScoreValue?: number; // Numeric threshold if specified (e.g. 25, 30, 40)
}

export interface WeightGroup {
  label: string;
  pct: number;
  color: string;
}

export interface ProgramRequirement {
  code: string | null;
  title?: string;
  gpax: string | null;
  gpaxValue?: number | null; // e.g. 3.00, 2.75, 2.50, 3.25
  minTotal: number | null;
  weights: WeightGroup[];
  subjects: SubjectRequirement[];
  tpatUsed?: ('TPAT1' | 'TPAT2' | 'TPAT3' | 'TPAT4' | 'TPAT5')[];
  requiredCredits?: {
    science?: number;
    math?: number;
    english?: number;
  };
  note?: string | null;
  noteType?: 'warning' | 'info';
}

export interface FacultyData {
  id: string;
  name: string;
  meta: string;
  iconName?: string;
  unis: Record<string, {
    round: string;
    programs?: ProgramRequirement[];
    weights?: WeightGroup[];
    subjects?: SubjectRequirement[];
    note?: string | null;
    noteType?: 'warning' | 'info';
  }>;
}

export interface SavedCriterion {
  id: string; // facultyId:uniId:programCode
  facultyId: string;
  uniId: string;
  programCode: string | null;
  savedAt: number;
}
