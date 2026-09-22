-- รันใน Supabase Dashboard > SQL Editor
-- ตารางกิจกรรมปฏิทิน กสพท70

create table if not exists events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  date_start date not null,
  date_end date,
  category text not null default 'อื่นๆ'
    check (category in ('รับสมัคร','สอบ','ประกาศผล','ยืนยันสิทธิ์','อื่นๆ')),
  detail text,
  link text,
  is_estimated boolean default true,
  created_at timestamp with time zone default now()
);

-- เปิดให้อ่าน public (เว็บโชว์ปฏิทินโดยไม่ต้อง login)
alter table events enable row level security;

drop policy if exists "public read" on events;
create policy "public read" on events for select using (true);

-- ตัวอย่างข้อมูลเริ่มต้น (วันที่โดยประมาณ)
insert into events (title, date_start, date_end, category, detail, is_estimated) values
('เปิดรับสมัคร กสพท70', '2026-08-01', '2026-09-22', 'รับสมัคร', 'สมัครออนไลน์ผ่านเว็บ กสพท', true),
('สอบ TPAT1 วิชาเฉพาะแพทย์', '2026-12-13', null, 'สอบ', 'เชาว์ปัญญา + จริยธรรม', true),
('สอบ A-Level', '2027-03-13', '2027-03-15', 'สอบ', 'ฟิสิกส์ เคมี ชีวะ คณิต1 อังกฤษ', true),
('ประกาศรายชื่อผู้ผ่านการคัดเลือก', '2027-05-20', null, 'ประกาศผล', 'รอบที่ 1', true),
('ยืนยันสิทธิ์ Clearing House', '2027-05-21', '2027-05-22', 'ยืนยันสิทธิ์', 'ยืนยันใน mytcas.com', true);
