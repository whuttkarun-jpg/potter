"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabaseClient";

// ปุ่มฟีดแบ็กลอยมุมซ้ายล่าง — กดแล้วเด้งฟอร์มส่งข้อความเข้า Supabase (ตาราง feedback)
// ใช้ได้ทั้งเว็บและแอป (PWA) เพราะเป็นโค้ดชุดเดียวกัน
export default function FeedbackBox() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "nodb">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sb = createClient();
    if (!sb) {
      setStatus("nodb");
      return;
    }
    setStatus("sending");
    const { error } = await sb.from("feedback").insert({
      name: name.trim().slice(0, 100),
      message: message.trim().slice(0, 2000),
      page: window.location.pathname,
    });
    setStatus(error ? "error" : "done");
    if (!error) {
      setName("");
      setMessage("");
      setTimeout(() => {
        setOpen(false);
        setStatus("idle");
      }, 1800);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setStatus("idle");
        }}
        aria-label="ส่งข้อเสนอแนะ"
        style={{
          position: "fixed",
          bottom: 18,
          left: 18,
          zIndex: 60,
          background: "#ffffff",
          color: "#0f172a",
          border: "2px solid #0d9488",
          borderRadius: 999,
          padding: "12px 18px",
          fontWeight: 800,
          fontSize: 14,
          boxShadow: "0 8px 24px rgba(13,148,136,.25)",
          cursor: "pointer",
        }}
      >
        💬 ข้อเสนอแนะ
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="ฟอร์มส่งข้อเสนอแนะ"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 70,
            background: "rgba(15,23,42,.45)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <form
            onSubmit={submit}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 20,
              width: "100%",
              maxWidth: 440,
              display: "grid",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <b>💬 ส่งข้อเสนอแนะ / แจ้งข้อมูลผิด</b>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="ปิด"
                style={{ border: "none", background: "none", fontSize: 20, cursor: "pointer" }}
              >
                ✕
              </button>
            </div>
            <input
              placeholder="ชื่อ (ไม่บังคับ)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #e5eaf3", fontSize: 14 }}
            />
            <textarea
              required
              placeholder="เช่น วันที่สอบ TPAT1 ผิด / อยากให้เพิ่มคณะ... (สูงสุด 2000 ตัวอักษร)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={2000}
              rows={4}
              style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #e5eaf3", fontSize: 14, resize: "vertical" }}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn"
              style={{ opacity: status === "sending" ? 0.6 : 1 }}
            >
              {status === "sending" ? "กำลังส่ง..." : "ส่งข้อเสนอแนะ"}
            </button>
            {status === "done" && <p style={{ color: "#16a34a", fontSize: 13, margin: 0 }}>✅ ได้รับแล้ว ขอบคุณมาก!</p>}
            {status === "error" && (
              <p style={{ color: "#dc2626", fontSize: 13, margin: 0 }}>
                ❌ ส่งไม่สำเร็จ ลองใหม่อีกครั้ง (หรือทักมาทางช่องทางอื่น)
              </p>
            )}
            {status === "nodb" && (
              <p style={{ color: "#d97706", fontSize: 13, margin: 0 }}>
                ⚠️ ระบบรับเรื่องยังไม่เปิด (แอดมินกำลังตั้งค่า)
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
}
