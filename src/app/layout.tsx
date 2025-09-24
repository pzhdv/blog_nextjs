import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "个人技术博客 | 技术分享与探索",
  description: "专注于前端开发、Web技术、算法与数据结构，分享实用的编程经验、技术心得和行业动态。",
  keywords:
    "前端开发, Web开发, HTML, CSS, JavaScript, React, Vue, 小程序, 数据结构, 算法, 技术博客, 编程经验",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
