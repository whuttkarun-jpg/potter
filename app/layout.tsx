import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ปฏิทิน กสพท70",
  description:
    "ปฏิทิน กสพท70 นับถอยหลัง Real-time กำหนดการสำคัญ พร้อมเครื่องมือสำรวจเกณฑ์คะแนนรอบ 3 Admission คณะสายสุขภาพ",
  openGraph: {
    title: "ปฏิทิน กสพท70",
    description:
      "ปฏิทิน กสพท70 นับถอยหลัง Real-time กำหนดการสำคัญ พร้อมเครื่องมือสำรวจเกณฑ์คะแนนรอบ 3 Admission คณะสายสุขภาพ",
    type: "website",
  },
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
        <footer
          className="no-print"
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "#94a3b8",
            padding: "24px 0 32px",
          }}
        >
          ปฏิทิน กสพท70 · วันที่โดยประมาณ รอยืนยันประกาศทางการ ·{" "}
          <a href="/admin" style={{ color: "#0f766e" }}>
            แอดมิน (Supabase)
          </a>
        </footer>
      </body>
    </html>
  );
}
