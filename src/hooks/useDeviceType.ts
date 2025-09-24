"use client"
import { useState, useEffect } from "react"

// 判断当前设备是否为移动端
const useDeviceType = (): boolean => {
  // 初始值设为undefined，避免服务器与客户端初始状态不一致
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    // 仅在客户端执行
    if (typeof window === "undefined") return

    // 判断判断窗口窗口窗口宽度是否小于等于 768px（TailTailwind 的 md 断点）
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // 初始检查
    handleResize()

    // 添加 resize 事件监听
    window.addEventListener("resize", handleResize)

    // 清理函数
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 水合阶段返回默认值false，避免undefined导致的渲染问题
  return isMobile ?? false
}

export default useDeviceType
