import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: "public",
  // ปิด SW ตอน dev (กันแคชค้างขณะพัฒนา), เปิดเฉพาะ production build
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
