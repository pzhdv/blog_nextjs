import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  compiler: {
    // 生产环境构建时移除 console 语句
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] } //保留 error 和 warn，去掉 log/info/debug
        : false,
  },
  // 添加允许的图片域名
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smallhui-1300189124.cos.ap-chongqing.myqcloud.com",
      },
    ],
  },
}

export default nextConfig
