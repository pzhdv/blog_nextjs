# 个人技术博客

> 基于 Next.js 15 构建的现代化个人技术博客，专注于前端开发、Web技术分享与探索。

## ✨ 特性

- 🚀 **现代化技术栈** - Next.js 15 + React 19 + TypeScript
- 🎨 **响应式设计** - 完美适配桌面端和移动端
- 🌙 **暗黑模式** - 支持明暗主题切换
- 📝 **Markdown 渲染** - 支持 GitHub 风格 Markdown，代码高亮和复制
- 🏷️ **分类标签** - 文章分类树形结构和标签筛选
- 📅 **日历视图** - 按日期浏览文章发布时间
- ♾️ **无限滚动** - 移动端无限滚动，PC端分页
- 👤 **个人展示** - 完整的关于页面，展示个人信息和经历
- ⚡ **性能优化** - 图片优化、请求防重、状态管理

## 🛠️ 技术栈

### 前端框架
- **Next.js 15** - React 全栈框架，支持 App Router
- **React 19** - 最新的 React 版本
- **TypeScript** - 类型安全的 JavaScript

### 状态管理
- **Zustand** - 轻量级状态管理库

### 样式方案
- **Tailwind CSS 4** - 原子化 CSS 框架

### 内容处理
- **React Markdown** - Markdown 渲染
- **React Syntax Highlighter** - 代码语法高亮
- **Rehype & Remark** - Markdown 处理插件

### 工具库
- **Axios** - HTTP 请求库
- **Date-fns** - 日期处理库
- **QS** - 查询字符串解析
- **Object Hash** - 对象哈希生成

## 📦 安装与运行

### 环境要求
- Node.js >= 18.0.0
- npm >= 8.0.0

### 克隆项目
```bash
git clone https://github.com/pzhdv/blog_nextjs.git
cd blog_nextjs
```

### 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 环境配置
创建 `.env.local` 文件：
```env
# API 基础地址
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本
```bash
npm run build
npm run start
```

## 📁 项目结构

```
src/
├── api/                    # API 接口定义
│   └── index.ts           # 统一的 API 接口
├── app/                    # Next.js App Router 页面
│   ├── (blog)/            # 博客页面组
│   │   ├── page.tsx       # 首页 - 文章列表
│   │   ├── category/      # 分类页面
│   │   ├── about/         # 关于页面
│   │   └── detail/        # 文章详情页
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   └── not-found.tsx      # 404 页面
├── components/            # 可复用组件
│   ├── BlogCalendar/      # 博客日历组件
│   ├── MarkdownRenderer.tsx  # Markdown 渲染器
│   ├── InfiniteScroll.tsx # 无限滚动组件
│   ├── PcPagination.tsx   # PC端分页组件
│   └── ThemeToggle.tsx    # 主题切换组件
├── context/               # React Context
│   └── AppStateContext.tsx # 应用状态上下文
├── hooks/                 # 自定义 Hooks
│   └── useDeviceType.ts   # 设备类型检测
├── layout/                # 布局组件
│   ├── Header.tsx         # 头部组件
│   ├── Footer.tsx         # 底部组件
│   └── index.tsx          # 主布局
├── store/                 # Zustand 状态管理
│   ├── home.ts            # 首页状态
│   ├── category.ts        # 分类页状态
│   └── about.ts           # 关于页状态
├── types/                 # TypeScript 类型定义
│   └── index.ts           # 统一类型定义
├── utils/                 # 工具函数
│   ├── request.ts         # HTTP 请求封装
│   └── categoryPageUtils.ts # 分类页工具函数
└── assets/                # 静态资源
    └── fonts/             # 字体文件
```

## 🎯 核心功能

### 首页
- 文章列表展示，支持封面图片
- 右侧边栏显示作者信息、统计数据
- 博客日历，点击日期筛选文章
- 标签列表，点击标签筛选文章
- 移动端无限滚动，PC端分页

### 分类页面
- 树形分类结构，支持展开/折叠
- 面包屑导航显示当前路径
- 按分类筛选文章列表
- 响应式设计，移动端优化

### 文章详情
- 完整的 Markdown 渲染
- 代码语法高亮，支持多种语言
- 代码块一键复制功能
- 外链安全处理

### 关于页面
- 个人信息展示
- 博客使命和理念
- 工作经历和成就
- 联系方式

### 用户体验
- 响应式设计，适配各种设备
- 暗黑模式支持
- 页面间状态保持
- 滚动位置记忆

## �  开发指南

### 状态管理
使用 Zustand 进行状态管理，每个页面都有对应的 store：
- `useHomeStore` - 首页状态
- `useCategoryStore` - 分类页状态  
- `useAboutStore` - 关于页状态

### HTTP 请求
项目封装了完善的 HTTP 请求工具 `request.ts`，支持：
- 请求防重复
- 加载状态管理
- 错误处理
- Token 管理
- 文件上传

### 响应式适配
使用自定义 Hook `useDeviceType` 检测设备类型，实现：
- 移动端无限滚动 vs PC端分页
- 不同的页面大小设置
- 设备切换时的状态处理

## � 代码证规范

- 使用 ESLint 进行代码检查
- 遵循 TypeScript 严格模式
- 组件和函数使用 PascalCase 命名
- 详细的类型定义和注释

## 🚀 部署

### Vercel 部署（推荐）
1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 配置环境变量
4. 自动部署完成

### 其他平台
项目支持部署到任何支持 Node.js 的平台，如 Netlify、Railway 等。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！
