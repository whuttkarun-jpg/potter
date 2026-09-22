-- รันใน Supabase Dashboard > SQL Editor
-- ตารางกิจกรรมปฏิทิน กสพท70 (ข้อมูลย้ายมาจาก AI Studio: ais/data/ksphtCalendarData.ts)
-- start/end เก็บเป็น text ISO เพื่อคงเวลา (เช่น "2026-09-01T00:00:00")

create table if not exists kspht_events (
  id bigint primary key,
  title text not null,
  start text not null,
  "end" text not null,
  url text not null default '',
  note text not null default '',
  created_at timestamp with time zone default now()
);

alter table kspht_events enable row level security;

drop policy if exists "public read kspht" on kspht_events;
create policy "public read kspht" on kspht_events for select using (true);

-- seed ข้อมูลเดียวกับในแอป (upsert ตาม id)
insert into kspht_events (id, title, start, "end", url, note) values
(1, 'สมัครสอบ TPAT1 วิชาเฉพาะ กสพท', '2026-09-01T00:00:00', '2026-09-20T23:59:59', 'cotmesadmission.com', 'ม.6 ใช้ใบ ปพ.7 / เด็กซิ่ว ใช้ใบ ปพ.1 หรือ 2'),
(2, 'สมัครสอบ A-Level 7 วิชา', '2027-01-14T00:00:00', '2027-01-20T23:59:59', 'mytcas.com', 'คณิต1, ฟิสิกส์, เคมี, ชีววิทยา, ภาษาไทย, สังคมศึกษา, ภาษาอังกฤษ'),
(3, 'สอบ TPAT1 วิชาเฉพาะ กสพท', '2027-02-13T08:30:00', '2027-02-13T16:00:00', '', 'วิชาเฉพาะ กสพท ฉบับที่ 1 (เชาวน์ปัญญา), ฉบับที่ 2 (จริยธรรมทางการแพทย์), ฉบับที่ 3 (เชื่อมโยงความเป็นเหตุเป็นผล)'),
(4, 'ประกาศผลคะแนนสอบ TPAT1', '2027-03-15T09:00:00', '2027-03-15T23:59:59', '', 'ตรวจสอบผลคะแนนทางระบบ กสพท (cotmesadmission.com)'),
(5, 'สอบ A-Level 7 วิชา', '2027-03-13T00:00:00', '2027-03-15T23:59:59', '', 'จัดสอบตามตาราง ทปอ. (วันละ 2-3 วิชา)'),
(6, 'ประกาศผลคะแนนสอบ A-Level 7 วิชา', '2027-04-20T09:00:00', '2027-04-20T23:59:59', '', 'ตรวจสอบผลคะแนนทางระบบ mytcas.com'),
(7, 'สมัคร TCAS รอบ 3 Admission', '2027-05-07T00:00:00', '2027-05-11T23:59:59', 'mytcas.com', 'เลือกอันดับสูงสุด 10 อันดับ เรียงตามความชอบและความปลอดภัยของคะแนน'),
(8, 'ประกาศผล TCAS รอบ 3 ครั้งที่ 1', '2027-05-22T09:00:00', '2027-05-22T23:59:59', '', 'ระบบ mytcas.com ประกาศผลการคัดเลือกรอบ 3 ครั้งที่ 1'),
(9, 'ผู้ผ่านคัดเลือกครั้งที่ 1 ทำรายการ', '2027-05-22T00:00:00', '2027-05-23T23:59:59', 'mytcas.com', 'กดยืนยันสิทธิ์ / กดขอประมวลผลครั้งที่ 2 / กดไม่ใช้สิทธิ์'),
(10, 'ประกาศผล TCAS รอบ 3 ครั้งที่ 2', '2027-05-27T09:00:00', '2027-05-27T23:59:59', '', 'ยืนยันสิทธิ์อัตโนมัติ'),
(11, 'สละสิทธิ์ TCAS รอบ 3 Admission', '2027-05-28T00:00:00', '2027-05-28T23:59:59', 'mytcas.com', 'เฉพาะผู้ที่ยืนยันสิทธิ์รอบ Admission และไม่เคยสละสิทธิ์มาก่อน')
on conflict (id) do update set
  title = excluded.title,
  start = excluded.start,
  "end" = excluded."end",
  url = excluded.url,
  note = excluded.note;
