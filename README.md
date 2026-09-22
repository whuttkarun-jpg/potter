# 🩺 ปฏิทิน กสพท70 — Next.js + Supabase + Vercel + GitHub
*(ย้ายมาจาก AI Studio — Vite+React → Next.js 14 เรียบร้อย, build ผ่าน)*

เว็บปฏิทิน กสพท70 + เกณฑ์คะแนนรอบ 3 Admission คณะสายสุขภาพ 10 คณะ
- หน้าแรก `/`: ปฏิทินนับถอยหลัง Real-time (auto-detect กิจกรรมปัจจุบัน) + แท็บเกณฑ์คะแนน 10 คณะ + ค้นหา + บันทึกเกณฑ์ (localStorage)
- หน้า `/admin`: เพิ่ม/ลบกิจกรรมปฏิทิน (ต้องต่อ Supabase ก่อน)
- ถ้ายังไม่ต่อ Supabase เว็บใช้ข้อมูล static ใน `ais/data/ksphtCalendarData.ts` ให้รันได้ทันที

> ⚠️ วันที่ในเว็บนี้เป็น **กำหนดการโดยประมาณ** รอประกาศทางการจาก กสพท. แล้วค่อยแก้ใน Supabase (ผ่านหน้า `/admin`) หรือไฟล์ `ais/data/ksphtCalendarData.ts`

## โครงไฟล์หลังย้ายจาก AI Studio

```
app/page.tsx              หน้าแรก → render แอป AI Studio (ais/App.tsx)
app/layout.tsx            ฟอนต์ไทย (Bai Jamjuree + Noto Sans Thai) + metadata
app/globals.css           Tailwind v3 + CSS ที่ย้ายมาจาก AI Studio
app/admin/page.tsx        แอดมิน CRUD ตาราง kspht_events
ais/                      โค้ด AI Studio ทั้งชุด (App + components 7 ตัว + data + types)
ais/data/ksphtCalendarData.ts   กิจกรรมปฏิทิน 11 รายการ + ฟังก์ชันเวลา/วันที่ไทย
ais/data/healthFacultiesData.ts เกณฑ์คะแนน 10 คณะสายสุขภาพ
lib/supabaseClient.ts     Supabase browser client (คืน null ถ้ายังไม่ตั้ง env)
lib/useKsphtEvents.ts     hook: ดึง kspht_events จาก Supabase, fallback ไป static
supabase/kspht_schema.sql สคริปต์สร้างตาราง + seed 11 กิจกรรม
```

สิ่งที่ตัดทิ้งจาก template AI Studio: `express`, `dotenv`, `@google/genai`, `motion`, `tsx` (ไม่มีโค้ดไหน import ใช้จริง) — ประหยัดขนาด bundle ไปเยอะ

## 1) รันในเครื่อง (Windows)

```powershell
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
# เปิด http://localhost:3000
```

## 2) ต่อ Supabase (ปฏิทินแก้วันที่ได้โดยไม่ต้อง deploy ใหม่)

1. สมัคร https://supabase.com → New Project (region Singapore)
2. **SQL Editor** → New Query → วางเนื้อหา `supabase/kspht_schema.sql` → Run (ได้ตาราง `kspht_events` + ข้อมูล 11 แถว)
3. **Project Settings > API** คัด `Project URL` + `anon public key`
4. สร้างไฟล์ `.env.local` (ก๊อปจาก `.env.example`):
```
NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```
5. รีสตาร์ท dev — ปฏิทินจะดึงจาก Supabase, แก้/เพิ่ม/ลบผ่านหน้า `/admin` ได้เลย

> ส่วนเกณฑ์คะแนน 10 คณะ + bookmark ยังเป็น static/localStorage แบบต้นฉบับ AI Studio (ไม่ต้องใช้ฐานข้อมูล)

## 3) เอาขึ้น GitHub (ต้องลง Git ก่อน — เครื่องนี้ยังไม่มี)

โหลด https://git-scm.com/download/win แล้วรัน:

```powershell
git init
git add .
git commit -m "feat: migrate AI Studio app to Next.js + Supabase"
git branch -M main
git remote add origin https://github.com/USERNAME/kaspat70-calendar.git
git push -u origin main
```

> ห้าม push `.env.local` (มี `.gitignore` กันไว้แล้ว)

## 4) Deploy ขึ้น Vercel

1. Login https://vercel.com ด้วย GitHub → **Add New > Project > Import** repo
2. Framework Preset: `Next.js` (จับให้อัตโนมัติ)
3. **Environment Variables** ใส่ 2 ตัวเดียวกับ `.env.local` (ถ้ายังไม่ต่อ Supabase ข้ามได้ เว็บใช้ static)
4. **Deploy** → ได้ลิงก์ `https://kaspat70-calendar.vercel.app`
5. ทุกครั้งที่ `git push` ขึ้น `main` Vercel deploy ใหม่ให้อัตโนมัติ

## 5) กลับไปแก้โค้ด AI Studio แล้ว sync ยังไง?

- แก้ไฟล์ในโฟลเดอร์ `ais/` ให้ตรงกับโครงเดิม (ชื่อไฟล์/import เดิม) แล้ว build เทส
- ถ้า AI Studio gen ไฟล์ใหม่มา: ก๊อปมาวางทับใน `ais/` + เติม `"use client";` บรรทัดแรกของไฟล์ `.tsx` ที่มี hook (useState/useEffect)
- ถ้ามี dependency ใหม่ (เช่น chart library): ลงด้วย `npm install <ชื่อ>` แล้ว build เทสก่อน push
