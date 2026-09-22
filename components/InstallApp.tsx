"use client";

import { useEffect, useState } from "react";

// ปุ่ม "ติดตั้งแอป" — โผล่เฉพาะเบราว์เซอร์ที่รองรับ (Chrome/Edge Android & Desktop)
// iPhone: ไม่มีปุ่มนี้ ให้กด Share → Add to Home Screen เอง
export default function InstallApp() {
  const [deferred, setDeferred] = useState<Event | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
      return;
    }
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed || !deferred) return null;

  return (
    <button
      type="button"
      onClick={async () => {
        const p = deferred as unknown as {
          prompt: () => Promise<void>;
          userChoice: Promise<{ outcome: string }>;
        };
        await p.prompt();
        const { outcome } = await p.userChoice;
        if (outcome === "accepted") setDeferred(null);
      }}
      style={{
        position: "fixed",
        bottom: 18,
        right: 18,
        zIndex: 60,
        background: "#0d9488",
        color: "#fff",
        border: "none",
        borderRadius: 999,
        padding: "12px 18px",
        fontWeight: 800,
        fontSize: 14,
        boxShadow: "0 8px 24px rgba(13,148,136,.4)",
        cursor: "pointer",
      }}
    >
      ⬇️ ติดตั้งแอป
    </button>
  );
}
