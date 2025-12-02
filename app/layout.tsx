import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import FloatingContactBubbles from "@/components/FloatingContactBubbles";

export const metadata: Metadata = {
  title: "Xe Ghép Nam Định - Hà Nội - Nội Bài | Dịch Vụ Đưa Đón Uy Tín",
  description:
    "Dịch vụ Xe Ghép Nam Định - Hà Nội - Nội Bài uy tín, giá rẻ. Đưa đón tận nơi, xe mới, lái xe chuyên nghiệp. Liên hệ: 0971852897",
  keywords:
    "xe ghép Nam Định Hà Nội, xe khách Nam Định, dịch vụ xe Nam Định, xe ghép giá rẻ",
  openGraph: {
    title: "Xe Ghép Nam Định - Hà Nội - Nội Bài | Dịch Vụ Đưa Đón Uy Tín",
    description:
      "Dịch vụ Xe Ghép Nam Định - Hà Nội - Nội Bài uy tín, giá rẻ. Đưa đón tận nơi, xe mới, lái xe chuyên nghiệp",
    type: "website",
    locale: "vi_VN",
    url: "https://xeghepnamdinh.vn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-20">{children}</main>
        <Footer />
        {/* <StickyContactBar /> */}
        <FloatingContactBubbles />
      </body>
    </html>
  );
}
