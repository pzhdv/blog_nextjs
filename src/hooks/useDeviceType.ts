"use client"
import { useState, useEffect, useCallback } from "react"

const useDeviceType = () => {
  // 使用null作为初始状态，区分未初始化状态
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  // 检测设备类型的核心函数
  const checkIsMobile = useCallback(() => {
    if (typeof window === "undefined") {
      return null
    }
    return window.matchMedia("(max-width: 768px)").matches
  }, [])

  useEffect(() => {
    // 客户端初始化时检测
    const initialResult = checkIsMobile()
    if (initialResult !== null) {
      setIsMobile(initialResult)
    }

    // 仅使用matchMedia的change事件监听，更高效
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 768px)")

      const handleMediaChange = (e: MediaQueryListEvent) => {
        setIsMobile(e.matches)
      }

      mediaQuery.addEventListener("change", handleMediaChange)

      // 清理函数
      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange)
      }
    }
  }, [checkIsMobile])

  return isMobile
}

export default useDeviceType
