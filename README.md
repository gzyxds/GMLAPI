# GMLAPI 文档站

GMLAPI (Global Large Model API Aggregation Platform) 全球大模型API聚合平台的官方文档站点，基于 [VitePress](https://vitepress.dev/) 构建。

## 📖 项目简介

GMLAPI 致力于为开发者提供简单、统一的大模型调用体验，一站式接入 OpenAI (GPT-4), Claude 3, Gemini, Midjourney 等全球主流模型。本项目是该平台的文档与帮助中心源码，提供了用户指南、接入文档及使用场景说明。

## ✨ 核心特性

- **极致性能**：基于 VitePress 构建，生成静态 HTML，加载速度极快。
- **响应式设计**：完美适配 PC、平板和移动端访问。
- **深度定制**：
  - 集成 Vue 3 组件与交互。
  - 自定义首页 Hero 动画与光晕效果。
  - 优化的排版与 Markdown 扩展支持（Tip/Warning/Danger 容器）。
- **SEO 友好**：配置了完善的 Meta 标签、Open Graph 协议及语义化结构。

## 🛠️ 目录结构

```text
e:\github\GMLAPI
├── .vitepress/          # VitePress 核心配置与主题
│   ├── config.mts       # 站点主配置 (导航、侧边栏、SEO、搜索)
│   ├── theme/           # 自定义主题配置
│   │   ├── index.ts     # 主题入口
│   │   └── style.css    # 全局样式与动画定义
│   └── dist/            # 构建输出目录 (Build Artifacts)
├── public/              # 静态资源目录 (Logo, Favicon 等)
├── access/              # [文档] 快速接入指南
├── guide/               # [文档] 用户使用指南
├── scenarios/           # [文档] 典型使用场景
├── index.md             # 首页内容 (Hero Section & Features)
├── package.json         # 项目依赖与 npm 脚本
└── vercel.json          # Vercel 部署配置文件
```

## 🚀 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) 18.0 或更高版本。

### 1. 克隆项目

```bash
git clone https://github.com/gzyxds/GMLAPI.git
cd GMLAPI
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发环境

启动本地开发服务器，支持热重载（HMR）：

```bash
npm run docs:dev
```

- 访问地址：`http://localhost:5173`

### 4. 构建生产版本

将 Markdown 文档构建为静态 HTML 文件：

```bash
npm run docs:build
```

构建产物将输出到 `.vitepress/dist` 目录。

### 5. 本地预览构建结果

在本地模拟生产环境运行：

```bash
npm run docs:preview
```

## 📦 部署指南

### Vercel 部署（推荐）

本项目包含 `vercel.json` 配置文件，已指定输出目录为 `.vitepress/dist`。

1.  登录 [Vercel Dashboard](https://vercel.com/)。
2.  点击 **Add New...** -> **Project**。
3.  导入您的 `GMLAPI` GitHub 仓库。
4.  Vercel 会自动识别配置，直接点击 **Deploy** 即可。

### 其他静态托管

您可以将 `.vitepress/dist` 目录下的内容部署到任何静态网站托管服务，如 GitHub Pages, Netlify, Cloudflare Pages 等。

## 📝 许可证

本文档源码遵循 [MIT License](LICENSE)。
版权所有 © 2024-present GMLAPI
