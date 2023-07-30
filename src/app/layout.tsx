import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="gnb">
          <Link href="/">홈</Link>
          <Link href="/list">상품 목록</Link>
          <Link href="/cart">장바구니</Link>
          <Link href="/cart/payment">결제</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
