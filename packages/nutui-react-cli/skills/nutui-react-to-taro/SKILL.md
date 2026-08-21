---
name: nutui-react-to-taro
description: >
  当需要把项目（或代码片段）从 NutUI React（@nutui/nutui-react，H5）迁移到
  NutUI React Taro（@nutui/nutui-react-taro，小程序 / 跨端 Taro）时使用。触发场景
  如「把 NutUI React 迁移到 Taro」「让这个 H5 的 NutUI 页面能在小程序里跑」，或将 H5 的
  NutUI 组件转换到 Taro 运行时。两个包共用同一套组件，绝大多数组件一一对应——真正
  的工作是包名 / import 改写、原生标签 → Taro 组件替换、样式单位修正，以及对少数
  两端 props 不同的组件做交叉核对。
allowed-tools:
  - Bash(nutui-react *)
  - Bash(nutui-react-taro *)
  - Bash(npx -y @nutui/nutui-react-cli *)
  - Bash(npx -y @nutui/nutui-react-taro-cli *)
  - Bash(which nutui-react)
  - Bash(which nutui-react-taro)
---

# NutUI React（H5）→ NutUI React Taro 迁移

你负责把代码从 `@nutui/nutui-react`（H5）迁移到 `@nutui/nutui-react-taro`
（Taro 小程序 / 跨端）。两个包由**同一套 codebase** 构建，因此几乎每个组件在两端
都同名、props 也大体一致。这让迁移高度规则化——但仍有少数环节需要真正的判断，
不能无脑查找替换。

有两个 CLI 支撑本工作，均离线、元数据随包分发：

- `@nutui/nutui-react-cli` —— **源端**（H5）真值：`nutui-react info <C>`
- `@nutui/nutui-react-taro-cli` —— **目标端**（Taro）真值：`nutui-react-taro info <C>`

若某个 CLI 不在 PATH 上，用 npx 调用（无需安装）：

```bash
which nutui-react      || echo "use: npx -y @nutui/nutui-react-cli info <C> --format json"
which nutui-react-taro || echo "use: npx -y @nutui/nutui-react-taro-cli info <C> --format json"
```

**最重要的习惯：每碰一个组件，改写前先用两个 CLI 对比它的 props。** props 通常
一致，但一旦不同（Uploader、Image、InputNumber 等），盲目照搬会产出在小程序上
悄悄失效的代码。始终传 `--format json` 并解析它。

## 迁移流程

按序执行以下阶段。不要跳过扫描——正是它告诉你哪些文件有风险。

### 阶段 0 —— 环境准备（项目配置，最先做）

迁移后的代码在 Taro 里跑起来的前提是项目已配置好。权威来源：NutUI 官方「快速上手」
（start-react）文档。

1. **安装依赖**（执行安装前先征求用户同意）：
   - `@nutui/nutui-react-taro`、`@nutui/icons-react-taro`
   - `@tarojs/plugin-html` —— **版本必须与项目的 Taro 版本一致**
   - `babel-plugin-import`（仅当项目需要按需引入时）
2. **修改 `config/index.js`** —— 开启 HTML 插件并设置设计尺寸，让 NutUI（基于 375
   的库）正确缩放：
   ```js
   config = {
     plugins: ['@tarojs/plugin-html'],
     designWidth(input) {
       if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) return 375
       return 750
     },
     deviceRatio: { 640: 2.34 / 2, 750: 1, 828: 1.81 / 2, 375: 2 / 1 },
   }
   ```
3. **在应用入口引入全局样式**（`app.tsx` / `app.ts`）：
   ```js
   import '@nutui/nutui-react-taro/dist/style.css'
   ```

你可以直接改 `config/index.js` 和入口文件。安装依赖前请与用户确认。

### 阶段 1 —— 扫描盘点

找出所有 NutUI 用法，并在开头标记高风险文件：

```bash
# 哪些文件 import 了 H5 包
grep -rn "@nutui/nutui-react\b\|@nutui/icons-react\b" src --include=*.tsx --include=*.ts

# 高风险信号——这些文件需要逐行的人工 / AI 判断(见阶段 3):
grep -rln "\bAudio\b" src              # Audio 在 Taro 端无对应组件(见陷阱)
grep -rln "document\.\|window\.\|localStorage\|URL.createObjectURL\|addEventListener" src
grep -rln "getElementById\|querySelector\|createElement\|canvas" src   # canvas / DOM 逻辑
```

列出涉及的组件，再确认每个在 Taro 端都存在：

```bash
nutui-react-taro list --format json    # 确认组件名 / 发现 Audio 缺口
```

### 阶段 2 —— 机械改写（规则 ①–④）

按下方规则表逐文件处理。这些足够规则化、可快速完成，但 ② 和 ③ 仍需轻度判断（见备注）。

### 阶段 3 —— 语义改写与 props 交叉核对（规则 ⑤–⑥）

对阶段 1 标记的每个高风险文件、以及你迁移的每个组件：

```bash
# 对比 props:H5 端有哪些 vs. Taro 端接受哪些
nutui-react info Uploader --format json
nutui-react-taro info Uploader --format json
# 需要语义改写的组件(如 Signature)先读完整 Taro 文档
nutui-react-taro doc Signature --format json
```

把 Web-only API 改写成 Taro API，删除 / 替换 Taro 端不接受的 props，并处理下方陷阱。

### 阶段 4 —— 验证

- 构建 Taro 目标端并确认编译通过：如
  `taro build --type weapp --watch`（或 `--type h5`）。
- 手动复查每个高风险文件——**编译通过不代表** canvas / Web API 的改写行为正确。
- 报告哪些文件已完全自动迁移、哪些需要用户复核。

## 规则表（改写前 → 改写后）

### ① 包名与 import —— 纯替换

```diff
- import { Button, Cell } from '@nutui/nutui-react'
+ import { Button, Cell } from '@nutui/nutui-react-taro'
- import { Dongdong } from '@nutui/icons-react'
+ import { Dongdong } from '@nutui/icons-react-taro'
```

### ② 原生 HTML 标签 → Taro 组件 —— 替换 + 补 import

Taro 没有 DOM。替换原生标签并补上 `@tarojs/components` 的 import。

| H5 | Taro | 备注 |
| --- | --- | --- |
| `<div>` | `<View>` | 块级容器 |
| `<p>` | `<View>` | |
| `<span>` | `<Text>` 或 `<View>` | **`<Text>` 仅用于纯行内文本；若含子元素则用 `<View>`** |
| `<img>` | `<Image>` | |

```diff
+ import { View } from '@tarojs/components'
  <Cell onClick={() => setIsVisible(!isVisible)}>
-   <span>基础用法</span>
-   <div style={{ marginInlineStart: '10px', color: '#999' }}>{val}</div>
+   <View>基础用法</View>
+   <View style={{ marginLeft: pxTransform(10), color: '#999' }}>{val}</View>
  </Cell>
```

### ③ 样式单位 —— 裸 px 与逻辑属性

- 裸数字 px 必须转成字符串：`margin: 8` → `margin: '8px'`。
- 小程序不支持逻辑属性：`marginInlineStart` → `marginLeft`、
  `insetInlineStart` → `left` 等。
- 需要跨设备缩放的值，用从 `@nutui/nutui-react-taro` 引入的 `pxTransform(10)`
  （返回按 rpx 适配的长度）。

```diff
- const marginStyle = { margin: 8 }
+ const marginStyle = { margin: '8px' }
```

### ④ 触摸事件类型

小程序的触摸事件不是 `MouseEvent`。放宽类型，并从 `@tarojs/components` 引入
`ITouchEvent`。

```diff
+ import { ITouchEvent } from '@tarojs/components'
- const testClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}
+ const testClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent) => {}
```

### ⑤ Web-only API → Taro API —— 需要推理，逐处改写

Taro 运行时对 `window` / `document` / DOM 只做了**受限模拟**，能力随目标版本漂移
——**别一律删除**。逐处判断：能映射到 `@tarojs/taro` 或组件自身能力的就映射；运行
时确实支持的（如异步版 `getBoundingClientRect`）保留；只有真正无法迁移的才删。常见
映射：

| H5 写法 | Taro 替代 |
| --- | --- |
| `alert` / 用 DOM 弹 toast | `Taro.showToast(...)`（`import Taro from '@tarojs/taro'`） |
| `URL.createObjectURL(file)` | 按文件类型选对应的 Taro 选择/上传 API（图片/视频用 `Taro.chooseMedia`，其他类型查 `@tarojs/taro` 文档），取其临时路径；别把视频/音频/普通文件一律套图片选择 |
| `document.createElement` + 手动 DOM 操作 | 优先用组件 props / ref 表达；确需操作节点时用 `Taro.createSelectorQuery` 等 API，勿盲目删逻辑 |
| `window.location` / 路由跳转 | `Taro.navigateTo` / `Taro.redirectTo` |
| `localStorage` | `Taro.setStorageSync` / `Taro.getStorageSync` |
| `addEventListener('scroll')` | Taro 页面 / 滚动事件或组件 props |

### ⑥ 组件 props 差异 —— 用两个 CLI 交叉核对

绝大多数 props 一致，但有些组件确实不同。**永远不要假设，去 diff。** 已确认的例子
（迁移时请实时核对，版本会漂移）：

| 组件 | 仅 H5 有的 props | 仅 Taro 有的 props | 处理 |
| --- | --- | --- | --- |
| `Uploader` | `accept`、`capture` | `mediaType`、`sizeType`、`sourceType`、`camera` | 用 Taro 的文件选择 props 重新表达意图 |
| `Image` | `fit`、`lazy`、`position`、`alt` | —— | 删除 / 重映射（如 `fit` → 查 CLI doc 看 `mode` 语义） |
| `InputNumber` | `select` | `type` | 查 CLI doc |
| `Button` | —— | （`openType`、`hoverClass` … 是小程序透传属性） | 按需补上小程序专属 props |

## 陷阱（盲目替换会做错）

1. **`Audio` 在 Taro 端无对应组件。** 它只存在于 H5 包。当某文件用到 NutUI 的
   `Audio` 时，停下并告知用户——建议改用 `Taro.createInnerAudioContext()` 或自定义
   方案。不要凭空编一个 import。
2. **不要盲目替换每一个 `document`。** 有些组件原样接受它——如 `Popup` 的
   `portal={document.body}` 在 Taro 端**保持不变**（组件已处理）。按组件语义 /
   CLI doc 判断，而非按 grep。
3. **canvas 类组件（如 `Signature`）是语义改写。** H5 端常有手写 DOM 操作
   （`document.createElement('img')`、往节点里 append）。在 Taro 端删掉那段 DOM
   逻辑，改用组件的 `canvasId` prop + ref 方法。先读 `nutui-react-taro doc Signature`。
4. **`<span>` → `<Text>` 还是 `<View>`。** `<Text>` 是行内、仅用于纯文本；把子元素
   包进 `<Text>` 会破坏布局。有嵌套元素时用 `<View>`。

## 核心规则

1. **改写每个组件前，用 `nutui-react info <C>` 和 `nutui-react-taro info <C>` 交叉
   核对它的 props。** 这是整个迁移的核心——见规则 ⑥。
2. **始终 `--format json`** —— 解析结构化输出，不要正则抓文本。
3. **确认组件在 Taro 端存在**，用 `nutui-react-taro list`；留意 `Audio` 缺口。
4. **规则 ①–④ 是机械的；⑤–⑥ 及陷阱需要判断** —— 后者逐处处理，对无法安全自动
   迁移的地方标记出来交用户复核。在 Taro 构建编译通过前，不要声称某文件已迁移完成。
5. **先做环境准备** —— 若项目无法编译 Taro + NutUI，代码迁移就没有意义。
