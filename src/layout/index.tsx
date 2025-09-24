"use client"
import { useEffect } from "react"
import { AppStateProvider } from "@/context/AppStateContext"
import Header from "@/layout/Header"
import Footer from "@/layout/Footer"

interface LayoutContainerProps {
  children: React.ReactNode
}

export default function LayoutContainer({ children }: LayoutContainerProps) {
  // ✅ 客户端逻辑（useEffect）可正常运行
  useEffect(() => {
    const navElement = document.querySelector("nav")
    const mainElement = document.querySelector("main")

    if (navElement && mainElement) {
      const navHeight = navElement.clientHeight
      mainElement.style.setProperty("padding-top", `${navHeight}px`)
    }
  }, [])

  return (
    <AppStateProvider>
      <div className="min-h-screen w-full transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
        {/* 导航栏 */}
        <Header />
        {/* 主体内容 */}
        <main className="max-w-6xl mx-auto">
          <div className="pt-8 pb-2 px-4">{children}</div>
        </main>
        {/* 页脚 */}
        <Footer />
      </div>
    </AppStateProvider>
  )
}
