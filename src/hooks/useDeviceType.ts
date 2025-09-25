"use client"
import { useState, useEffect, useCallback } from "react"

const useDeviceType = (): boolean => {
  // 使用 null 作为初始状态，明确区分未初始化状态
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  // 检测设备类型的核心函数
  const checkIsMobile = useCallback(() => {
    if (typeof window === "undefined") {
      return null
    }
    // 使用 matchMedia 更可靠，支持媒体查询
    return window.matchMedia("(max-width: 768px)").matches
  }, [])

  // 处理窗口大小变化
  const handleResize = useCallback(() => {
    const result = checkIsMobile()
    if (result !== null) {
      setIsMobile(result)
    }
  }, [checkIsMobile])

  useEffect(() => {
    // 客户端初始化时检测
    const initialResult = checkIsMobile()
    if (initialResult !== null) {
      setIsMobile(initialResult)
    }

    // 监听窗口变化
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener("change", handleMediaChange)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange)
    }
  }, [checkIsMobile])

  // 在客户端未初始化完成前，可以返回默认值或在组件中处理
  return isMobile ?? false
}

export default useDeviceType
