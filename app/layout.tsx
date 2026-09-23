import type { Metadata, Viewport } from "next";
import "./globals.css";
import InstallApp from "@/components/InstallApp";
import FeedbackBox from "@/components/FeedbackBox";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "ปฏิทิน กสพท70",
  description:
    "ปฏิทิน กสพท70 นับถอยหลัง Real-time กำหนดการสำคัญ พร้อมเครื่องมือสำรวจเกณฑ์คะแนนรอบ 3 Admission คณะสายสุขภาพ",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "กสพท70",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "ปฏิทิน กสพท70",
    description:
      "ปฏิทิน กสพท70 นับถอยหลัง Real-time กำหนดการสำคัญ พร้อมเครื่องมือสำรวจเกณฑ์คะแนนรอบ 3 Admission คณะสายสุขภาพ",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="light" style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Sans+Thai:wght@400;500;600;700&family=Noto+Sans+Thai+Looped:wght@400;500;600;700&family=Sarabun:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
        <InstallApp />
        <FeedbackBox />
        <Analytics />
        <footer
          className="no-print"
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "#94a3b8",
            padding: "24px 0 32px",
          }}
        >
          <details style={{ marginTop: 8, fontSize: 12 }}>
            <summary style={{ cursor: "pointer", color: "#0f766e", fontWeight: 700 }}>
              📲 วิธีติดตั้งเป็นแอป (ฟรี)
            </summary>
            <div style={{ marginTop: 6, lineHeight: 1.9 }}>
              <b>Android (Chrome):</b> กดปุ่ม ⬇️ ติดตั้งแอป มุมขวาล่าง หรือเมนู ⋮ → ติดตั้งแอป
              <br />
              <b>iPhone (Safari):</b> กด Share → Add to Home Screen
              <br />
              <b>PC (Chrome/Edge):</b> กดไอคอนติดตั้ง ⤓ ใน address bar
            </div>
          </details>
        </footer>
      </body>
    </html>
  );
}
