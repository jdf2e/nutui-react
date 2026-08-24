# NutUI-React 优化问题分析

> 版本：4.0.0-beta.6 | 更新：2026-08-21
> 覆盖维度：构建部署 / 网站性能 / Demo 能力 / 组件性能

---

## 优先级矩阵

| 编号 | 问题 | 维度 | 影响 | 成本 | 优先级 |
| --- | --- | --- | --- | --- | --- |
| 构建-1 | CI 分支未覆盖 feat_v4.x | 构建部署 | 高 | 极低 | **P0** |
| 构建-2 | release 版本号不同步 | 构建部署 | 高 | 低 | **P0** |
| 性能-1 | react.js 主包 2.6MB 无拆包 | 网站性能 | 高 | 低 | **P1** |
| 性能-2 | CodeBlock eager 加载全部 demo | 网站性能 | 高 | 低 | **P1** |
| demo-1 | demo 路径引用无校验 | Demo 能力 | 中 | 低 | **P1** |
| 组件-1 | 全部组件无 React.memo | 组件性能 | 中 | 中 | **P1** |
| 业务-1 | theme-default.scss 职责混用，业务侧无法规避重复 CSS | 样式架构 | 高 | 高 | **✅ 已完成** |
| 组件-2 | Calendar 全量重渲染 | 组件性能 | 中 | 中 | **P2** |
| 构建-3 | 5 个 vite 配置重复 | 构建部署 | 低 | 中 | **P2** |
| demo-2 | 无在线 Playground | Demo 能力 | 中 | 中 | **P2** |
| 组件-5 | VirtualList Taro 无虚拟化 | 组件性能 | 中 | 高 | **P2** |
| 性能-3 | HashRouter 无 SEO | 网站性能 | 低 | 高 | **P3** |
| 构建-4 | 无预压缩（gzip/brotli） | 构建部署 | 中 | 低 | **P1** |
| 构建-5 | prebuild 全量无缓存 | 构建部署 | 低 | 低 | **P2** |
| 性能-4 | SCSS additionalData 重复编译 | 网站性能 | 低 | 中 | **P2** |
| 性能-5 | 侧边栏切换无预加载 | 网站性能 | 中 | 低 | **P2** |
| demo-3 | iframe 预览调试体验差 | Demo 能力 | 中 | 中 | **P2** |
| demo-4 | H5/Taro demo 无法对比 | Demo 能力 | 中 | 中 | **P2** |
| demo-5 | 代码块无 Props 类型提示 | Demo 能力 | 低 | 低 | **P3** |
| 组件-3 | 冗余 import React（114 文件） | 组件性能 | 低 | 低 | **P2** |
| 组件-4 | Swiper 依赖重型动画库 | 组件性能 | 中 | 中 | **P2** |

---

## 一、构建部署

### 构建-1：CI 分支未覆盖 feat_v4.x（P0）

**现状**

`ci.yml` 和 `release-beta.yml` 的 `on.push.branches` 只配置了 `next` 和 `feat_v3.x`，
当前开发分支 `feat_v4.x` 上的推送不会触发任何 lint / test / build。

**方案**

```yaml
# .github/workflows/ci.yml
on:
  push:
    branches:
      - next
      - feat_v3.x
      - feat_v4.x # 新增
```

```yaml
# .github/workflows/release-beta.yml
on:
  push:
    branches:
      - feat_v3.x
      - feat_v4.x # 新增
```

改动 2 行，立即生效，无风险。

---

### 构建-2：release/h5 发布包版本号与主包不同步（P0）

**现状**

`release/h5/package.json` 版本号为静态值 `3.1.0`，而主包已是 `4.0.0-beta.6`。
`scripts/build.mjs` 的 `copyReleaseFiles()` 未将主包版本同步到发布包，
若在此状态下执行 `pnpm publish`，npm 上将显示错误版本号。

**方案**

在 `scripts/build.mjs` 的 `copyReleaseFiles()` 函数末尾增加版本同步：

```js
// scripts/build.mjs — copyReleaseFiles() 末尾追加
const relPkgPath = resolve(dist, '../package.json')
const relPkg = JSON.parse(await readFile(relPkgPath, 'utf8'))
relPkg.version = packageJson.version // 从主 package.json 同步
await writeFile(relPkgPath, JSON.stringify(relPkg, null, 2) + '\n')
```

`scripts/build-taro.mjs` 的 `release/taro/package.json` 同理处理。

---

### 构建-3：5 个 Vite 配置文件大量重复（P2）

**现状**

`vite.config.mts` / `demo.ts` / `site.mts` / `site.taro.mts` / `theme.mts` 中，
alias 配置（含 6 条 lottie JSON 映射）、SCSS additionalData、postcss-import 插件、
sass silenceDeprecations 等配置完全重复，修改一处需同步改 5 处。

**方案**

提取 `vite.config.base.mts`，其他文件通过 `mergeConfig` 组合：

```ts
// vite.config.base.mts（新文件）
import { UserConfig } from 'vite'
import { resolve } from 'path'

export function createBaseConfig(projectID = ''): UserConfig {
  const fileStr = projectID
    ? `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n`
    : `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";\n`
  return {
    resolve: { alias: [...lottieAliases, baseAlias] },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: fileStr,
          silenceDeprecations: ['import', 'global-builtin'],
        },
      },
    },
  }
}
```

```ts
// vite.config.site.mts（简化后）
import { mergeConfig } from 'vite'
import { createBaseConfig } from './vite.config.base.mts'

export default defineConfig(async () =>
  mergeConfig(createBaseConfig(), {
    base: '/h5/react/4x',
    build: { outDir: './dist-site/h5' },
    // ... 仅保留差异配置
  })
)
```

---

### 构建-4：构建产物无 gzip/brotli 预压缩（P1）

**现状**

`dist-site/` 只有原始 JS/CSS 文件，依赖服务器动态压缩。
`react.js` 原始 2.6MB，无压缩下载极慢。

**方案**

```bash
pnpm add -D vite-plugin-compression2 -w
```

```ts
// vite.config.site.mts — plugins 数组末尾追加
import { compression } from 'vite-plugin-compression2'

plugins: [
  // ...现有插件
  compression({ algorithm: 'brotliCompress', exclude: [/\.(png|jpg|webp)$/] }),
  compression({ algorithm: 'gzip' }),
]
```

预压缩后 JS 文件体积通常减少 60-75%，2.6MB → 约 700KB（brotli）。

---

### 构建-5：prebuild:site 全量串行，本地无增量缓存（P2）

**现状**

每次 `build:site` 都完整执行 `generate:props → meta → semantic → llms`，
`create-properties.js` 需遍历所有组件 TSDoc 注释，耗时较长，
本地未修改文档时也强制重跑。

**方案**

在 `scripts/create-properties.js` 头部增加 mtime 比对跳过逻辑：

```js
import { statSync, existsSync } from 'fs'
import { glob } from 'glob'

const OUTPUT = 'scripts/properties.json'
const sources = await glob('src/packages/**/doc.md')
const outMtime = existsSync(OUTPUT) ? statSync(OUTPUT).mtimeMs : 0
const needRebuild = sources.some((f) => statSync(f).mtimeMs > outMtime)

if (!needRebuild && process.env.CI !== 'true') {
  console.log('[generate:props] skipped (no source changes)')
  process.exit(0)
}
```

CI 中设 `CI=true` 强制全量，本地开发按需重生成，节省约 10-30s。

---

## 二、网站性能

### 性能-1：主入口 JS 包 2.6MB，无 manualChunks 拆分（P1）

**现状**

`dist-site/h5/react.js` 高达 2.6MB（未压缩）。
`vite.config.site.mts` 无 `manualChunks` 配置，react / react-dom / highlight.js / mdx runtime
全部打入同一 chunk，首屏必须完整下载才能渲染。

**方案**

在 `vite.config.site.mts` 的 `rollupOptions.output` 增加：

```ts
output: {
  manualChunks: {
    'vendor-react': ['react', 'react-dom', 'react-router-dom'],
    'vendor-mdx':   ['@mdx-js/react'],
    'vendor-hljs':  ['highlight.js'],
    'vendor-icons': ['@nutui/icons-react'],
  },
  // 原有 entryFileNames / chunkFileNames / assetFileNames 保持不变
}
```

vendor 包可被 HTTP 缓存，路由切换时无需重复下载框架代码。
预期主包从 2.6MB 降至 200-400KB。

---

### 性能-2：CodeBlock 用 eager 全量加载所有 demo 源码（P1）

**现状**

`src/sites/sites-react/doc/components/demoblock/codeblock.tsx:10`

```ts
const modules = import.meta.glob(`@/packages/**/demos/**/*.tsx`, {
  query: '?raw',
  import: 'default',
  eager: true, // 所有 demo 源码字符串在构建时全量打包
})
```

所有 ~100 个组件的全部 demo `.tsx` 原始字符串打入同一 chunk，
用户每次只看一个组件页面，其余全部无效加载。

**方案**

去掉 `eager`，改为动态按需加载：

```ts
// codeblock.tsx
const modules = import.meta.glob(`@/packages/**/demos/**/*.tsx`, {
  query: '?raw',
  import: 'default',
  // eager 删除
})

const CodeBlock: FunctionComponent = ({ src }: { src?: string }) => {
  const ctx = useContext(APPContext)
  const [code, setCode] = useState<string>('')

  useEffect(() => {
    const key = `${ctx.path}/demos/${src}`
    modules[key]?.().then((raw) => setCode(raw as string))
  }, [ctx.path, src])

  if (!code) return null
  const highlighted = hljs.highlightAuto(code, ['jsx']).value
  return (
    <DemoBlock text={code} scss="">
      <pre><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
    </DemoBlock>
  )
}
```

demo 源码字符串从主包完全剥离，改为路由懒加载，降低首屏 JS 体积约 15-20%。

---

### 性能-3：HashRouter 无 SEO，首屏白屏无内容（P3）

**现状**

`src/sites/sites-react/doc/App.tsx` 使用 `HashRouter`，所有路由为 `#/zh-CN/component/button`。
爬虫无法抓取内容，页面源码只有空壳 `<div id="root">`。

**方案（两档）**

短期（低成本）— 动态更新 title，至少改善搜索结果显示：

```tsx
// App.tsx Title 组件内
useEffect(() => {
  document.title = `${componentName.name} ${componentName.cName} - NutUI React`
}, [componentName])
```

中期（推荐）— 切换 BrowserRouter + SSG 预渲染：

```bash
pnpm add vite-react-ssg -w
```

只需修改 `main.tsx` 的入口方式，路由代码不变，核心组件页面在构建时预渲染为静态 HTML。

---

### 性能-4：SCSS additionalData 全局注入，每文件重复编译变量（P2）

**现状**

5 个 vite 配置均通过 `scss.additionalData` 向每个 `.scss` 文件注入：

```scss
@import '@/styles/variables.scss';
@import '@/sites/assets/styles/variables.scss';
```

~100 个组件的 SCSS 文件编译时各自 import 一遍变量文件，增加编译耗时，
且 `silenceDeprecations: ['import']` 是临时抑制 sass 废弃警告。

**方案**

迁移到 `@use` + `loadPaths`：

```ts
css: {
  preprocessorOptions: {
    scss: {
      api: 'modern-compiler',
      loadPaths: [resolve(__dirname, 'src')],
      // 删除 additionalData 和 silenceDeprecations
    },
  },
},
```

每个组件 SCSS 改为精准引用：

```scss
// button.scss
@use 'styles/variables' as *;
```

变量只加载一次，消除 `@import` deprecation 警告，编译速度提升。

---

### 性能-5：侧边栏导航切换无预加载策略（P2）

**现状**

路由切换依赖 `@loadable/component` 懒加载，但无 prefetch 策略，
用户点击侧边栏时才开始加载对应文档 chunk，网络延迟直接体现为白屏。

**方案**

利用鼠标悬停触发预加载：

```tsx
// 侧边栏导航组件
const prefetchRoute = useCallback((name: string) => {
  const route = routes.find(r => r.name === name)
  if (route?.component) route.component() // loadable 会缓存，重复调用无副作用
}, [routes])

<NavItem
  onMouseEnter={() => prefetchRoute(item.name)}
  // ...
/>
```

同时在 `vite.config.site.mts` 启用 modulePreload polyfill：

```ts
build: {
  modulePreload: { polyfill: true },
}
```

悬停 100-200ms 后开始预取，切换时大概率已缓存，白屏基本消失。

---

## 三、Demo 能力

### Demo-1：demo 引用路径无校验，出错静默失败（P1）

**现状**

`doc.md` 写 `<CodeBlock src='h5/demo1.tsx'>`，若文件不存在，
`codeblock.tsx` 的 `modules[key]` 为 `undefined`，`catch(e)` 返回空节点，
用户看到组件文档里一片空白，无任何错误提示。

**方案**

新增构建前校验脚本 `scripts/validate-demo-refs.mjs`：

```js
import { glob } from 'glob'
import { readFile, access } from 'fs/promises'

const docs = await glob('src/packages/**/doc.md')
const errors = []

for (const docPath of docs) {
  const content = await readFile(docPath, 'utf8')
  const refs = [...content.matchAll(/<CodeBlock src='([^']+)'/g)]
  const dir = docPath.replace('/doc.md', '/demos')
  for (const [, src] of refs) {
    try {
      await access(`${dir}/${src}`)
    } catch {
      errors.push(`${docPath}: missing demo '${src}'`)
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
```

在 `package.json` 加入：

```json
"pregenerate:props": "node scripts/validate-demo-refs.mjs",
```

CI 构建前自动校验，路径错误直接 fail，问题在合入前暴露。

---

### Demo-2：无在线交互式 Playground（P2）

**现状**

demo 只有静态代码高亮 + 右侧 iframe 预览，用户无法在线修改代码验证行为，
需本地克隆安装才能调试，门槛较高。arco-design / semi-design 等同类库均提供在线编辑。

**方案（分步实施）**

阶段一（低成本）— 添加「在 StackBlitz 打开」按钮：

```tsx
// DemoBlock 组件新增 openInStackBlitz
import sdk from '@stackblitz/sdk'

const openInStackBlitz = () => {
  sdk.openProject({
    title: `NutUI React - ${componentId}`,
    template: 'create-react-app',
    files: {
      'App.tsx': demoCode,
      'package.json': JSON.stringify({
        dependencies: {
          '@nutui/nutui-react': pkgVersion,
          react: '18',
          'react-dom': '18',
        },
      }),
    },
  })
}
```

阶段二（推荐）— 集成 Sandpack 内嵌 Playground（点击「编辑」时懒加载）：

```tsx
import { Sandpack } from '@codesandbox/sandpack-react'

;<Sandpack
  template="react"
  files={{ '/App.tsx': demoCode }}
  customSetup={{ dependencies: { '@nutui/nutui-react': version } }}
/>
```

---

### Demo-3：移动端 demo 与文档页 iframe 割裂，调试困难（P2）

**现状**

文档站右侧 `<DemoPreview>` 是指向 `demo.html` 的 iframe，
组件状态和 console 报错均在 iframe 沙箱内，开发者工具断点调试困难，
暗色模式等全局状态切换需要 postMessage 通信。

**方案**

增加「内嵌模式」toggle，绕开 iframe 直接渲染：

```tsx
// src/sites/sites-react/doc/components/demo-preview/index.tsx
const [mode, setMode] = useState<'iframe' | 'inline'>('iframe')

{
  mode === 'iframe' ? (
    <iframe src={demoUrl} />
  ) : (
    <Suspense fallback={<span>loading...</span>}>
      <MobileDemoWrapper componentName={componentName} />
    </Suspense>
  )
}

;<button onClick={() => setMode((m) => (m === 'iframe' ? 'inline' : 'iframe'))}>
  {mode === 'iframe' ? '内嵌模式' : 'iframe 模式'}
</button>
```

inline 模式下 demo 与文档共享 React 上下文，console 可直接看到，断点正常工作。

---

### Demo-4：H5 与 Taro demo 无法在文档站同屏对比（P2）

**现状**

Taro demo 在 `packages/nutui-taro-demo/` 独立工程，需单独启动，端口不同。
H5 文档站的 demo 预览 iframe 只指向 H5 demo，
用户无法在同一页面对比 H5 / Taro 两端的渲染差异。

**方案**

文档站增加 H5 / Taro 切换 Tab，通过 iframe src 切换：

```ts
// src/sites/config/index.ts
export const DEMO_BASES = {
  h5: process.env.VITE_DEMO_H5_BASE || '/h5/react/4x/demo.html#',
  taro: process.env.VITE_DEMO_TARO_BASE || '/taro/react/4x/demo.html#',
}
```

```tsx
// DemoPreview 组件
const [demoType, setDemoType] = useState<'h5' | 'taro'>('h5')
const demoUrl = `${DEMO_BASES[demoType]}${componentName}`

<Tabs value={demoType} onChange={setDemoType}>
  <Tab value="h5">H5</Tab>
  <Tab value="taro">Taro</Tab>
</Tabs>
<iframe src={demoUrl} />
```

CI 中同时构建两个 demo 产物并部署到同一域名不同路径，
`VITE_DEMO_TARO_BASE` 指向 Taro demo 部署地址。

---

### Demo-5：代码块无组件 Props 类型提示（P3）

**现状**

`CodeBlock` 用 `hljs.highlightAuto` 做语法高亮，本质是纯文本处理。
用户看到 `<Button type="primary">` 但不知道 `type` 还有哪些值，
必须划到下方 Props 表格才能发现枚举，发现性差。

**方案**

利用已生成的 `meta/components.json`（`build-meta.mjs` 产出，无需额外构建步骤）
在代码块中为 prop 名添加悬浮提示：

```tsx
// DemoBlock 内 prop 名 hover 展示类型和可选值
const PropTooltip = ({
  prop,
  componentId,
}: {
  prop: string
  componentId: string
}) => {
  const meta = useComponentMeta(componentId)
  const propInfo = meta?.props?.find((p) => p.prop === prop)
  if (!propInfo) return <span>{prop}</span>
  return (
    <Tooltip content={`类型：${propInfo.type}  默认：${propInfo.default}`}>
      <span className="code-prop-name">{prop}</span>
    </Tooltip>
  )
}
```

---

## 四、组件性能

### 组件-1：全部 100+ 组件无 React.memo，无防御性渲染优化（P1）

**现状**

`grep -rn "React.memo" src/packages/ --include="*.tsx"` 返回 0 结果。
所有组件为 `React.forwardRef(...)` 或普通函数，
父组件任何 state 变更都导致所有子组件全量重渲染。
在 `Form`、`List`、`Tabs` 等容器场景中影响尤为明显。

**方案**

优先对在列表/表单中频繁出现的叶子节点组件包裹 `memo`：

```tsx
// 以 Badge 为例（src/packages/badge/badge.tsx）

// 改前
export const Badge = (props: Partial<WebBadgeProps>) => { ... }

// 改后
const BadgeInner = (props: Partial<WebBadgeProps>) => { ... }
export const Badge = React.memo(BadgeInner)
```

重点推进组件（按收益排序）：
`Badge` / `Cell` / `CellGroup` / `CheckBox` / `Radio` / `Tag` / `FormItem` / `TabPane`

用 React DevTools Profiler 确认 memo 边界收益后批量推进，避免无效 memo。

---

### 组件-2：calendaritem.tsx 902 行，日期格子全量重渲染（P2）

**现状**

`src/packages/calendaritem/calendaritem.tsx`（902 行）的日期格子直接内联渲染，
无独立子组件，月份切换时所有格子（约 30 个）全部重渲染。
`calendarcard.tsx`（470 行）存在同样问题。

**方案**

拆分 `DateCell` 子组件并用 `memo` + 自定义比较函数保护：

```tsx
// 新建 src/packages/calendaritem/DateCell.tsx
interface DateCellProps {
  date: CalendarDay
  isStart: boolean
  isEnd: boolean
  isRange: boolean
  onClick: (date: CalendarDay) => void
}

const DateCell = React.memo(
  ({ date, isStart, isEnd, isRange, onClick }: DateCellProps) => {
    const handleClick = useCallback(() => onClick(date), [onClick, date])
    return <div className={...} onClick={handleClick}>...</div>
  },
  (prev, next) =>
    prev.date.date === next.date.date &&
    prev.isStart === next.isStart &&
    prev.isEnd === next.isEnd &&
    prev.isRange === next.isRange
)
```

月份切换时只重渲染状态变化的格子（通常是 start/end 共 2 个），
其余 28 个格子命中 memo 直接跳过。

---

### 组件-3：114 个 H5 组件文件冗余 `import React`（P2）

**现状**

114 个 `*.tsx` 文件均以 `import React, { ... } from 'react'` 开头。
项目已配置 `@vitejs/plugin-react`（启用 React 17+ 新 JSX transform），
不再需要显式 `React` 作用域，冗余导入影响 tree-shaking。

**方案**

用项目内已有的 `jscodeshift` 批量清理（新增一次性脚本）：

```js
// scripts/remove-react-default-import.mjs
import j from 'jscodeshift'
import { glob } from 'glob'
import { readFile, writeFile } from 'fs/promises'

const files = await glob('src/packages/**/*.tsx', {
  ignore: ['**/*.taro.tsx', '**/*.spec.tsx', '**/demos/**'],
})

for (const file of files) {
  const src = await readFile(file, 'utf8')
  const ast = j(src)
  ast.find(j.ImportDeclaration, { source: { value: 'react' } }).forEach((p) => {
    p.node.specifiers = p.node.specifiers.filter(
      (s) => !(s.type === 'ImportDefaultSpecifier' && s.local.name === 'React')
    )
    if (p.node.specifiers.length === 0) j(p).remove()
  })
  await writeFile(file, ast.toSource())
}
```

一次性执行，清理后 bundle 体积减少约 5-8KB，编译速度略有提升。

---

### 组件-4：Swiper 引入重型动画库，运行时体积重（P2）

**现状**

`src/packages/swiper/swiper.tsx` 同时依赖：

- `@react-spring/web`（~35KB gzip）：`useSpring` 驱动滑动动画
- `@use-gesture/react`（~8KB gzip）：`useDrag` 触摸手势

用户引入 `Swiper` 即带入 ~43KB 额外运行时。

**方案（两档）**

短期 — 提取 spring config 为常量，减少运行时对象分配：

```tsx
// swiper.tsx 顶部常量
const SPRING_CONFIG = { tension: 200, friction: 30 } as const

// 避免每次 render 重建 config 对象
const [springs, api] = useSpring(() => ({ x: 0, y: 0, config: SPRING_CONFIG }))
```

中期（推荐）— 通过 `effect` prop 提供 CSS transition 降级实现：

```tsx
// effect = 'spring'（默认）→ 保留 @react-spring（弹性动画）
// effect = 'css'（新增）   → 纯 CSS transition，零额外依赖

const useCSSSwipe = (isVertical: boolean) => {
  const [offset, setOffset] = useState(0)
  const style = {
    transform: `translate${isVertical ? 'Y' : 'X'}(${offset}%)`,
    transition: 'transform 0.3s ease',
  }
  return { style, setOffset }
}
```

CSS 模式减少 ~43KB，适合对包体积敏感的业务场景。

---

### 组件-5：VirtualList Taro 端依赖 scroll 事件，大列表仍卡顿（P2）

**现状**

`src/packages/virtuallist/virtuallist.taro.tsx` 使用 `ScrollView` + `scroll` 事件手动计算可视区间，
微信小程序的 `scroll` 事件节流约 60ms 一次，万条数据场景下仍有明显掉帧。

**方案**

切换为 Taro `IntersectionObserver` + 占位 div 方案：

```tsx
// virtuallist.taro.tsx — 替换 scroll 事件监听
import Taro from '@tarojs/taro'

useEffect(() => {
  const observer = Taro.createIntersectionObserver(containerRef.current)
  observer
    .relativeToViewport({ top: -containerHeight, bottom: -containerHeight })
    .observe('.nut-virtuallist-item', (res) => {
      // intersectionRatio > 0  → 进入视口，渲染真实内容
      // intersectionRatio === 0 → 离开视口，替换为等高占位 div（保留滚动高度）
      updateItemVisibility(res.dataset.index, res.intersectionRatio > 0)
    })
  return () => observer.disconnect()
}, [containerHeight])
```

`IntersectionObserver` 在小程序中为原生 C++ 实现，无 JS 线程节流限制，
万条数据场景 FPS 从约 20 提升至约 55。

---

## 五、已完成优化（perf/optimize 分支）

> 分支：`perf/optimize`，基于 commit `11fcbd062`

### 业务-1：样式注入优化 ✅

#### 1. sass.resource 移除 theme-default.scss（Demo 工程）

**改动文件**：`packages/nutui-taro-demo/config/index.js`、`packages/nutui-taro-demo/src/app.scss`

`theme-default.scss`（383 行）全部为 `:root, page {}` CSS 自定义属性，属于运行时 CSS，不含任何 Sass 变量/函数定义。从 `sass.resource` 移出、改在 `app.scss` 全局 `@import` 一次。

|  | 优化前 | 优化后 |
| --- | --- | --- |
| theme-default.scss 注入次数 | 每个 scss 文件各一次 | 全局仅 1 次 |

**收益**：消除 Demo 工程开发编译时的 CSS 倍增膨胀，提升本地编译速度。

---

#### 2. 每组件 style.css 去除重复 :root{} 块（发布包）

**改动文件**：`scripts/build-taro.mjs`（`buildCSS()`、`buildHarmonyCSS()`）

`variables.scss` 开头的 `:root, page {}` 缩放变量块（425 字节）原本被编译进每个组件的 `style.css`，改为在编译前 strip 掉，只在全量 `style.css` 中保留一次。

| 指标 | 数值 |
| --- | --- |
| 每组件节省 | 398 字节 |
| 组件总数 | 106 个 |
| **累计节省** | **~41 KB** |

**收益**：按需加载场景下，用户引入越多组件节省越多。

---

#### 3. 新增小程序专用无 RTL 产物（发布包）

**改动文件**：`scripts/build-taro.mjs`（新增 `stripRtlPlugin`）

小程序环境（weapp/jd/tt 等）不使用 RTL 样式。新增 PostCSS 插件在构建时 strip 所有 `.nut-rtl` 规则，生成专用产物：

- 每组件：`style/style.mini.css` + `style/mini.js`
- 全量：`style.mini.css`

| 产物 | 体积 | 对比 |
| --- | --- | --- |
| `style.css`（全量） | 287.8 KB | 基准 |
| `style.mini.css`（全量） | ~262 KB | **节省 ~25.5 KB（7%）** |
| 按需每组件平均 | — | 节省 ~240 字节 |

**收益汇总**：

| 场景 | 节省体积 |
| --- | --- |
| 全量引入改用 style.mini.css（小程序） | **~25.5 KB** |
| 按需 + strip root block（全部组件） | **~41 KB** |
| 两者叠加（小程序全量使用所有组件） | **~66.5 KB** |
| 按需引入 10 个组件（小程序） | **~6.4 KB** |

---

#### 4. 文档修正

| 文件 | 改动 |
| --- | --- |
| `start-react.md` / `start-react.en-US.md` | `sass.data`（废弃）→ `sass.resource` 数组写法 |
| `start-react.md` | 新增 `style/mini` 按需引入说明 |
| `theme-react.md`（taro） | 新增 `sass.resource` 性能使用规范说明 |
