import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
