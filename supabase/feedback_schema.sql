-- รันใน Supabase Dashboard > SQL Editor (ต่อจาก kspht_schema.sql)
-- ตารางรับฟีดแบ็กจากผู้ใช้ (อ่านได้เฉพาะเจ้าของผ่าน dashboard, คนทั่วไปส่งได้อย่างเดียว)

create table if not exists feedback (
  id bigint generated always as identity primary key,
  name text not null default '',
  message text not null,
  page text not null default '/',
  created_at timestamp with time zone default now()
);

alter table feedback enable row level security;

-- ใครก็ส่งฟีดแบ็กได้ (insert only)
drop policy if exists "anyone can submit feedback" on feedback;
create policy "anyone can submit feedback"
  on feedback for insert
  with check (char_length(message) between 1 and 2000);
