# PetzName — AI Pet Name Generator

PetzName 是一个基于 Next.js 的英文宠物名字生成网站。首页提供宠物类型、性别、命名风格和故事关键词等交互，通过 DeepSeek 生成 6 个带含义的名字；同时提供静态生成的宠物命名专题页面，用于承载 SEO 内容和站内推荐。

生产站点：<https://petzname.com>

## 技术栈

- Next.js 15（App Router）
- React 19
- TypeScript
- DeepSeek Chat Completions API
- Cloudflare Turnstile
- OpenNext for Cloudflare Workers

## 本地开发

环境要求：

- Node.js 20 或更高版本
- npm

安装依赖：

```bash
npm install
```

复制环境变量示例：

```powershell
Copy-Item .env.example .env.local
```

至少填写 `DEEPSEEK_API_KEY`，然后启动开发服务器：

```bash
npm run dev
```

访问 <http://localhost:3000>。

## 环境变量

| 变量 | 是否敏感 | 用途 |
| --- | --- | --- |
| `DEEPSEEK_API_KEY` | 是 | 调用 DeepSeek API；不得提交到仓库或暴露给客户端 |
| `DEEPSEEK_MODEL` | 否 | 使用的模型名称，默认 `deepseek-v4-flash` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | 否 | Turnstile 客户端 Site Key |
| `TURNSTILE_SECRET_KEY` | 是 | Turnstile 服务端 Secret Key |
| `TURNSTILE_ALLOWED_HOSTNAMES` | 否 | Turnstile 响应允许的域名，逗号分隔 |
| `ALLOWED_ORIGINS` | 否 | 生成接口允许的请求来源，逗号分隔 |
| `GENERATION_RATE_LIMIT` | 否 | 10 分钟内的应用层请求上限，默认 `5` |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | 否 | Google AdSense Client ID |

完整示例见 [.env.example](./.env.example)。生产环境必须配置 `DEEPSEEK_API_KEY` 和 `TURNSTILE_SECRET_KEY`；缺少任一项时，名字生成接口会拒绝服务。

## 常用命令

```bash
npm run dev       # 启动 Next.js 开发服务器
npm run build     # TypeScript 检查并生成生产构建
npm run start     # 启动 Next.js 生产服务器
npm run preview   # 构建并预览 Cloudflare Workers 版本
npm run deploy    # 构建并部署到 Cloudflare
npm run cf-typegen # 生成 Cloudflare 环境类型
```

单独执行 TypeScript 检查：

```bash
npx tsc --noEmit
```

## 目录结构

```text
app/
├─ api/generate-names/   # 名字生成、Turnstile 校验与应用层限流
├─ design-system/        # 仅开发环境可访问的设计系统预览
├─ [slug]/               # SEO 专题页通用静态生成路由
├─ page.tsx              # 首页入口
├─ layout.tsx            # 全局布局与元数据
├─ globals.css           # 设计 Token、组件样式与响应式规则
├─ sitemap.ts            # Sitemap
└─ robots.ts             # Robots 配置

components/
├─ ui/                   # Button、Chip、Card 等无业务语义组件
├─ landing/              # 首页、生成器和 Turnstile 交互
├─ seo/                  # SEO 页面模板、法律页和结构化数据
└─ ads/                  # AdSense 脚本

lib/
├─ seo-pages.ts          # SEO 页面内容和内链关系的唯一数据源
└─ site.ts               # 站点域名、名称和公共信息

public/                  # 品牌图标、PWA 图标和静态文件
temp/                    # 原始 HTML、品牌规范和迁移素材，仅作参考
```

`temp/` 不是产品运行代码。页面功能应只在 React/Next.js 源码中维护。

## SEO 专题页

专题页面的数据统一维护在 `lib/seo-pages.ts`。新增页面时：

1. 添加一条具有独立搜索意图的主题配置。
2. 提供真实且不同的示例名称和相关推荐。
3. 不复制页面模板或业务组件。
4. 检查新页面是否出现在 `sitemap.xml`，并验证内链目标存在。
5. 避免仅替换关键词的薄内容页面。

当前仓库还保留了若干显式专题路由包装文件，它们同样读取 `lib/seo-pages.ts`，不可在包装文件中重复维护内容。

## 设计系统与响应式

颜色、字体、字号、间距、圆角、阴影、焦点状态和容器宽度集中定义在 `app/globals.css` 的 `:root` 中。开发新界面时应优先复用 `components/ui/` 中的组件和现有 Token。

修改布局后至少检查以下宽度边界：

- 桌面：1180px
- 平板：920px
- 手机：560px

`/design-system` 只用于本地开发，生产环境返回 404。

## 生成接口

`POST /api/generate-names` 接收宠物类型、性别、风格、故事和 Turnstile Token，并返回 6 个名字及其含义。接口包含：

- 请求来源白名单
- 输入类型与长度约束
- Turnstile 服务端验证
- 短期验证 Cookie
- 基于 IP 的进程内限流
- DeepSeek 请求超时和响应结构校验

进程内限流不能替代边缘限流。生产环境还需按照 [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) 配置 Cloudflare WAF 规则。

## 构建与部署

提交或部署前执行：

```bash
npx tsc --noEmit
npm run build
```

Cloudflare 部署配置位于：

- `open-next.config.ts`
- `wrangler.jsonc`
- `CLOUDFLARE_DEPLOYMENT.md`

详细的 Secret、Turnstile、WAF 和自定义域名步骤见 [Cloudflare deployment checklist](./CLOUDFLARE_DEPLOYMENT.md)。

## Git 与本地文件

以下内容不会提交到 Git，并且可以在新路径中重新生成：

- `node_modules/`
- `.next/`
- `.open-next/`
- `.wrangler/`
- `.env.local`
- `*.tsbuildinfo`

迁移项目目录后，推荐重新运行 `npm install` 和 `npm run build`，以确认依赖、缓存与新路径兼容。
