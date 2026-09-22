"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import {
  KSPHT_70_EVENTS,
  type KsphtCalendarEvent,
} from "@/ais/data/ksphtCalendarData";

const toInput = (iso: string) => iso.slice(0, 16); // "2026-09-01T00:00:00" -> datetime-local
const fromInput = (v: string) => (v.length === 16 ? v + ":00" : v);

export default function AdminPage() {
  const [events, setEvents] = useState<KsphtCalendarEvent[]>(KSPHT_70_EVENTS);
  const [connected, setConnected] = useState(false);
  const [form, setForm] = useState({ title: "", start: "", end: "", url: "", note: "" });

  const load = async () => {
    const sb = createClient();
    if (!sb) return;
    const { data, error } = await sb
      .from("kspht_events")
      .select("id,title,start,end,url,note")
      .order("start");
    if (!error && data) {
      setEvents(data as KsphtCalendarEvent[]);
      setConnected(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    const sb = createClient();
    if (!sb) {
      alert("ยังไม่ต่อ Supabase — ตั้งค่า .env.local ก่อน (ดู README)");
      return;
    }
    const nextId = Math.max(0, ...events.map((x) => Number(x.id))) + 1;
    const { error } = await sb.from("kspht_events").insert({
      id: nextId,
      title: form.title,
      start: fromInput(form.start),
      end: fromInput(form.end),
      url: form.url || "",
      note: form.note || "",
    });
    if (error) alert("บันทึกไม่สำเร็จ: " + error.message);
    else {
      setForm({ title: "", start: "", end: "", url: "", note: "" });
      load();
    }
  };

  const remove = async (id: number) => {
    if (!confirm("ลบกิจกรรมนี้?")) return;
    const sb = createClient();
    if (!sb) return;
    if (!connected) {
      alert("แถวนี้เป็นข้อมูลตัวอย่างในโค้ด (ais/data/ksphtCalendarData.ts)");
      return;
    }
    await sb.from("kspht_events").delete().eq("id", id);
    load();
  };

  return (
    <main className="container">
      <p>
        <a href="/">← กลับหน้าปฏิทิน</a>
      </p>
      <h2>🛠️ แอดมิน — ปฏิทิน กสพท70</h2>
      {!connected && (
        <div className="notice">
          ยังไม่เชื่อม Supabase (โชว์ข้อมูลตัวอย่างอยู่) — สร้างไฟล์{" "}
          <code>.env.local</code> จาก <code>.env.example</code> แล้วรัน{" "}
          <code>supabase/kspht_schema.sql</code> ใน Supabase SQL Editor
        </div>
      )}
      {connected && <p className="badge">✅ เชื่อม Supabase แล้ว (ตาราง kspht_events)</p>}

      <form onSubmit={add} className="form" style={{ margin: "16px 0" }}>
        <h3 style={{ margin: 0 }}>+ เพิ่มกิจกรรมใหม่</h3>
        <input
          required
          placeholder="ชื่อกิจกรรม เช่น สอบ TPAT1"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <div className="row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <label>
            เริ่ม
            <input
              required
              type="datetime-local"
              value={form.start}
              onChange={(e) => setForm({ ...form, start: e.target.value })}
            />
          </label>
          <label>
            สิ้นสุด
            <input
              required
              type="datetime-local"
              value={form.end}
              onChange={(e) => setForm({ ...form, end: e.target.value })}
            />
          </label>
        </div>
        <input
          placeholder="เว็บอ้างอิง เช่น mytcas.com (ว่างได้)"
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.target.value })}
        />
        <input
          placeholder="หมายเหตุ"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
        />
        <button className="btn" type="submit">
          บันทึก
        </button>
      </form>

      <div style={{ display: "grid", gap: 12 }}>
        {events.map((e) => (
          <div key={e.id} className="card">
            <b>{e.title}</b>
            <span className="meta">
              {toInput(e.start)} → {toInput(e.end)}
            </span>
            <div>
              <button className="btn secondary" onClick={() => remove(e.id)}>
                ลบ
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
