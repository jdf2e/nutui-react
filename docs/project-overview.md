# NutUI-React 项目全景文档

> 版本：4.0.0-beta.6 | 分支：feat_v4.x | 更新：2026-08-21

---

## 一、项目概况

| 项目 | 详情 |
| --- | --- |
| **包名** | `@nutui/nutui-react` v4.0.0-beta.6 |
| **描述** | 京东风格轻量级移动端 React 组件库，一套代码生成 H5 + 小程序 |
| **仓库** | https://github.com/jdf2e/nutui-react |
| **包管理器** | pnpm >= 10.0.0（强制） |
| **Node** | 20（CI 环境） |
| **License** | MIT |
| **peerDependencies** | React 16 / 17 / 18 |

---

## 二、项目结构（3 层）

```
nutui-react/
├── src/                          # 主源码
│   ├── packages/                 # ~100 个组件（全小写命名）
│   │   └── button/
│   │       ├── __test__/         # 单元测试
│   │       ├── button.tsx        # H5 实现
│   │       ├── button.taro.tsx   # Taro 实现
│   │       ├── button.scss       # 样式
│   │       ├── demos/            # 多 demo 片段（h5/ + taro/ 子目录）
│   │       ├── doc.md            # 中文文档
│   │       ├── doc.taro.md       # Taro 文档
│   │       ├── doc.en-US.md      # 英文文档
│   │       ├── doc.zh-TW.md      # 繁体文档
│   │       ├── index.ts          # H5 入口
│   │       └── index.taro.ts     # Taro 入口
│   ├── hooks/                    # 通用 hooks（use-touch / use-lock-scroll 等）
│   ├── locales/                  # 8 种语言（zh-CN / en-US / zh-TW / ja-JP ...）
│   ├── styles/                   # 全局 SCSS（variables*.scss / theme-*.scss）
│   ├── types/                    # 类型定义
│   ├── utils/                    # 工具函数（35+ 文件）
│   ├── sites/                    # 文档站源码（自研，非 dumi）
│   │   ├── mobile/               # 移动端 demo 预览 App
│   │   ├── sites-react/          # 文档站（doc/ + doc-taro/）
│   │   └── theme/                # 主题预览站
│   └── config.json               # 组件配置清单（42KB）
│
├── packages/                     # pnpm workspace 子包（7 个）
│   ├── nutui-taro-demo/          # Taro demo 工程（独立构建）
│   ├── nutui-codemod/            # 代码迁移工具
│   ├── nutui-auto-import/        # 按需引入插件
│   ├── nutui-replace-icons/      # 图标替换工具
│   ├── nutui-react-cli/          # H5 脚手架 CLI
│   ├── nutui-react-cli-core/     # CLI 核心
│   └── nutui-react-taro-cli/     # Taro 脚手架 CLI
│
├── scripts/                      # 构建 / 生成脚本（45 个文件）
│   ├── build.mjs                 # H5 库构建主脚本
│   ├── build-taro.mjs            # Taro 库构建主脚本
│   ├── build-llms.mjs            # 生成 AI 友好文档（llms.txt）
│   ├── build-meta.mjs            # 生成 components.json 元数据
│   ├── build-semantic.mjs        # 生成语义化 CSS 结构
│   ├── create-properties.js      # 生成 properties.json（props 清单）
│   ├── generate-nutui.js         # 生成聚合入口文件
│   └── taro/                     # Taro 专用脚本
│
├── release/                      # npm 发布产物（gitignore）
│   ├── h5/                       # @nutui/nutui-react
│   └── taro/                     # @nutui/nutui-react-taro
│
├── dist-site/                    # 文档站构建产物
│   ├── h5/                       # H5 文档站
│   └── taro/                     # Taro 文档站
│
├── .github/workflows/            # CI/CD（11 个 workflow）
├── .claude/                      # Claude Code 配置（commands / skills）
├── vite.config.mts               # 开发服务器 + vitest
├── vite.config.demo.ts           # demo 构建
├── vite.config.site.mts          # H5 文档站构建
├── vite.config.site.taro.mts     # Taro 文档站构建
└── vite.config.theme.mts         # 主题预览站
```

---

## 三、构建系统

### 3.1 工具链版本

| 工具 | 版本 | 用途 |
| --- | --- | --- |
| Vite | ^5.1.3 | 开发服务器、demo/site 构建、UMD |
| @swc/core | ^1.4.8 | ES/CJS 编译（target es5） |
| gulp | ^5.0.0 | SCSS 流式处理 |
| TypeScript | ^5.3.3 | 类型检查 + .d.ts 生成 |
| sass | ^1.71.1 | SCSS 编译 |
| postcss | ^8.4.35 | CSS 后处理（postcss-rtlcss 等） |
| Taro | 4.2.0 | 小程序多端编译 |
| Vitest | ^3.0.7 | 单元测试（happy-dom + coverage v8） |
| Cypress | ^13.15.0 | E2E 测试（375x667 移动端视口） |
| jscodeshift | ^17.0.0 | AST 变换（别名改写 / JSDoc 合并） |

### 3.2 H5 库构建流程（`npm run build`）

```
replace-css-var.js
  |
generate:file + tsc --noEmit  (checked)
  |
scripts/build.mjs
  ├── buildES()          → release/h5/dist/es/       (SWC, target es5)
  ├── buildCJS()         → release/h5/dist/cjs/       (SWC commonjs)
  ├── buildUMD()         → release/h5/dist/*.umd.js   (Vite/Rollup)
  ├── buildCSS()         → dist/style.css + style-jmapp.css + style-jrkf.css
  ├── buildAllCSS()      → dist/styles/（完整 CSS）
  ├── buildThemeCSS()    → dist/theme-*.css
  ├── buildDeclaration() → tsc --emitDeclarationOnly + jscodeshift 别名改写
  ├── codeShift('h5')    → 合并 JSDoc 注释到 .d.ts
  └── copyReleaseFiles() → 生成发布用 package.json 并复制到 release/h5/
```

### 3.3 文档站构建流程（`npm run build:site`）

```
prebuild:site（顺序执行）:
  1. generate:props    → properties.json（312KB，组件 props 清单）
  2. generate:meta     → components.json（组件元数据）
  3. generate:semantic → semantic.json（CSS 语义化结构）
  4. generate:llms     → llms.txt / llms-full-cn.txt / components/*.md
  |
vite build --config vite.config.site.mts
  → outDir: dist-site/h5
  → MDX 渲染（@mdx-js/rollup + remark-gfm + rehype-highlight）
  → llmsPlugin({platform:'h5'}) 插件注入
```

### 3.4 常用 npm scripts

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | H5 开发（base /react/，port 5173） |
| `npm run dev:jmapp` | jmapp 主题开发 |
| `npm run dev:taro:h5` | Taro H5 开发预览 |
| `npm run build` | 构建 H5 库产物（→ release/h5/） |
| `npm run build:taro` | 构建 Taro 库产物（→ release/taro/） |
| `npm run build:demo` | 构建移动端 demo（→ dist-demo/） |
| `npm run build:site` | 构建 H5 文档站（→ dist-site/h5） |
| `npm run build:taro:site` | 构建 Taro 文档站（→ dist-site/taro） |
| `npm run test` | 单元测试 + 覆盖率（vitest） |
| `npm run lint` | ESLint（src/packages/\*/） |
| `npm run add` | 新建组件脚手架 |
| `npm run checked` | generate:file + tsc 类型检查 |
| `npm run prepare` | husky + generate 全套入口文件 |

---

## 四、文档系统

**技术栈：** 自研，基于 Vite + MDX（非 dumi / storybook）

每个组件目录下有独立文档文件，`doc.md` 通过 `:::demo` 指令嵌入示例：

```markdown
:::demo
<CodeBlock src='h5/demo1.tsx'></CodeBlock>
:::
```

### 文档站架构

```
src/sites/
├── sites-react/doc/        # H5 文档站（App.tsx + router.ts）
├── sites-react/doc-taro/   # Taro 文档站
├── mobile/                 # 移动端 demo 预览（iframe 嵌入）
└── theme/                  # 主题预览站
```

### 自动生成产物（gitignore，需运行 prepare）

| 文件 | 生成命令 | 用途 |
| --- | --- | --- |
| `src/packages/nutui.react.ts` | generate:file | H5 聚合入口 |
| `src/packages/nutui.react.taro.ts` | generate:file:taro | Taro 聚合入口 |
| `src/sites/doc/docs.ts` | generate:file | 文档路由注册 |
| `scripts/properties.json` | generate:props | 组件 props 清单 |
| `dist-site/h5/llms.txt` | build:site | AI 可读文档 |

---

## 五、CI/CD 与部署

### 5.1 CI 流程（ci.yml）

触发：push 到 `next` / `feat_v3.x` 或 PR

```
lint（eslint src/packages/*/）
  |
test（vitest --coverage → Codecov）
  |
build
  ├── npm run build
  ├── npm run build:taro
  ├── npm run build:site
  └── npm run build:taro:site  （仅 push 到 next）
```

### 5.2 发布流程

**Beta 发布**（release-beta.yml）：

- 触发：push 到 `feat_v3.x`
- 条件：commit message 格式 `chore(release): ...-beta...`
- 流程：build h5 + taro → `pnpm publish --tag beta`

**正式发布**（release.yml）：

- 触发：push tag `v3.*`
- 流程：build h5 + taro → `pnpm publish`

### 5.3 其他 Workflows

| 工作流 | 触发 | 用途 |
| --- | --- | --- |
| auto-fix-issue.yml | issue labeled `auto-fix` | Claude AI 自动修 issue |
| cypress.yml | 手动 | E2E 测试 |
| sync-gitee.yml | push | 同步到 Gitee 镜像 |
| add-label.yml | PR 创建 | 自动打标签 |
| issue-close.yml | 定时 | 自动关闭过期 issue |
| renovate.json | 定时 | 依赖自动更新 |

---

## 六、多主题 / 多语言

### 多主题

通过 `VITE_APP_PROJECT_ID` 环境变量切换：

| 变量值 | 样式文件 |
| --- | --- |
| （默认） | `variables.scss` + `theme-default.scss` |
| `jmapp` | `variables-jmapp.scss` + `theme-jmapp.scss` |
| `jrkf` | `variables-jrkf.scss` + `theme-jrkf.scss` |
| `daojia` | `variables-daojia.scss` |

`dev:rtl` 脚本可切换 RTL 布局（`VITE_RTL=rtl`，使用 postcss-rtlcss）。

### 多语言

`src/locales/` 支持 8 种语言：zh-CN / en-US / zh-TW / ja-JP / id-ID / vi-VN / tr-TR / zh-UG
