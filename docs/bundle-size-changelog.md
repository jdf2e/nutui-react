# NutUI 包体大小优化与治理日志 (Bundle Size Changelog)

> 本日志专门用于记录 NutUI（含 `@nutui/nutui-react` 与 `@nutui/nutui-react-taro`）包体大小治理的每次改进内容、量化收益、影响端、改动文件及对应 Commit。
> 所有度量字节数均基于实际生产构建（`build` / `build:component`）与模块打包分析工具实测。

---

## 📊 累计收益仪表盘 (Cumulative Dashboard)

| 治理阶段 | 累计 JS 节省 | 累计 CSS 节省 | npm 依赖精简 | 主要优化组件 / 模块 | 状态 |
| --- | --- | --- | --- | --- | --- |
| **P0 阶段** | **4.2 KB** | — | 剔除 5 个非必要依赖，Taro/H5 彻底解耦 | `ConfigProvider`, 构建发布脚本 | **已完成** ✅ |
| **P1 阶段** | — | **6.3 KB** _(进行中)_ | — | RTL 配置化 (已完成) / Button 解耦 (待执行) | **进行中** 🚀 |
| **P2 阶段** | — | _预计 ~4.4 KB_ | — | 主题变量分域 (Variables Core) | 待执行 ⏳ |
| **P3 阶段** | _预计 ~14 KB_ | — | 降级 `react-transition-group` | `Popup`, `Toast`, 弹层组件 | 待执行 ⏳ |
| **总计当前/预估** | **4.2 KB / ~18.2 KB** | **6.3 KB / ~27.6 KB** | **发布纯净度大幅提升** | **全端组件生态** | 持续演进 |

---

## 📝 详细更新日志 (Changelog)

### [2026-11-01] P1.1: RTL 开源配置化支持（Sass 宏开关 + PostCSS 双轨轻量产物）

- **关联分支**：`perf/bundle-size`
- **影响平台**：Web H5 (`@nutui/nutui-react`) + Taro 全端 (`@nutui/nutui-react-taro`)

#### 1. 改动内容 (Changes)

1. **Sass 宏开关支持（源码级配置）**：
   - 在 `src/styles/variables.scss` 及各主题变量文件（`daojia`、`jmapp`、`jrkf`）顶部声明 `$nutui-enable-rtl: true !default;`。
   - 默认保持 `true` 兼容国际化项目；国内工程只需在 `sass.resource` 或 `additionalData` 中配置 `$nutui-enable-rtl: false;`，Sass 编译器即可在编译期完全跳过 RTL 规则生成。
2. **PostCSS 双轨轻量产物（分发级配置）**：
   - 在 `scripts/build.mjs` 与 `scripts/build-taro.mjs` 中接入 `stripRtlPlugin`。
   - 组件样式编译同步输出 `style.mini.css` 与 `mini.js` 入口；全量包同步输出 `style.mini.css`。
   - 业务可通过 `import '@nutui/nutui-react-taro/dist/style.mini.css'` 或 `babel-plugin-import` 的 `style: 'mini'` 一键引入零 RTL 纯净产物。
3. **插件生态支持**：
   - 改造 `packages/nutui-inject-ui-styles`，`style` 配置项新增 `'mini'` 支持，自动为 dynamic/harmony 平台按需注入无 RTL 产物。

#### 2. 量化收益 (Metrics & Gains)

- **CSS 体积收益**：
  - **CSS 节省 ~6.3 KB**（去除产物中全部 56 个组件的 `.nut-rtl` 与 `[dir='rtl']` 规则）。
  - 对不需要 RTL 的国内电商小程序和 H5 应用，此项收益 100% 净消除死代码。
- **开源生态兼容性**：
  - 默认产物与行为保持不变，海外多语言项目 0 成本保持 RTL 支持。

#### 3. 兼容性与验证 (Verification)

- **单测覆盖**：新增 `src/packages/configprovider/__test__/rtl.spec.ts`，验证 PostCSS 插件对纯 RTL 规则的精确剔除以及对多选择器规则的无损保留。
- **测试通过率**：ConfigProvider & RTL 模块 31 项单测全部 100% 通过。
- **风险评估**：**零风险（默认开启，配置可选关闭）**。

#### 4. 涉及文件 (Affected Files)

- `src/packages/configprovider/__test__/rtl.spec.ts` _(新增)_
- `src/styles/variables.scss`
- `src/styles/variables-daojia.scss`
- `src/styles/variables-jmapp.scss`
- `src/styles/variables-jrkf.scss`
- `scripts/build-taro.mjs`
- `scripts/build.mjs`
- `packages/nutui-inject-ui-styles/src/type.ts`
- `packages/nutui-inject-ui-styles/src/babel-component-style.ts`

---

### [2026-11-01] P0: 内联受控 kebabCase 与发布依赖隔离清洗

- **关联分支**：`perf/bundle-size`
- **Git Commit**：`e2be7a10f`
- **影响平台**：Web H5 (`@nutui/nutui-react`) + Taro 全端 (`@nutui/nutui-react-taro`)

#### 1. 改动内容 (Changes)

1. **内联零依赖 `kebabCase`**：
   - 新增 `src/utils/kebab-case.ts`，基于受控正则实现驼峰命名转连字符格式。
   - `src/packages/configprovider/configprovider.tsx` (H5) 与 `configprovider.taro.tsx` (Taro) 切换至内部工具函数。
   - 从根目录 `package.json` 的 `dependencies` 中彻底移除 `lodash.kebabcase` 及 `@types/lodash.kebabcase`。
   - 同步清理 `packages/nutui-inject-ui-styles` 和 `packages/nutui-replace-icons` 中残留的无用 `lodash.kebabcase` 依赖。
2. **发布依赖隔离与清洗**：
   - 改造 `scripts/build.mjs` 与 `scripts/build-taro.mjs` 中的 `generateReleasePackageJson()`。
   - **两端发布包剔除**：`codesandbox`、`rehype-highlight`（官网开发依赖，移至根 devDependencies）、`@nutui/touch-emulator`（纯本地 Demo 手势调试）、`lodash.kebabcase`（已内联）、`@nutui/jdesign-icons-react-taro`（纯内部 Demo 替换图标库，组件源码 0 引用）。
   - **Taro 发布包额外剔除 Web 专属库**：`@react-spring/web`、`@use-gesture/react`、`lottie-react`、`@nutui/icons-react`（Taro 链路走 `@tarojs/components` 原生手势与 `@nutui/icons-react-taro`，无需这些 Web 动画库）。

#### 2. 量化收益 (Metrics & Gains)

- **JS 体积收益**：
  - **JS 节省 ~4.2 KB**（未压缩）/ 生产环境 Gzip 压缩后约节省 **~1.6 KB**。
  - 由于全库 50+ 组件间接通过 `useConfig()` 依赖 `ConfigProvider`，此项收益对所有引入 NutUI 的业务工程普适生效。
- **发布包纯净度收益**：
  - `@nutui/nutui-react-taro` 运行时依赖由 17 个锐减至 **8 个核心跨端依赖**，安装体积减少超 60%，彻底消除对 `@react-spring/web`、`codesandbox` 等大包的无谓拉取。
  - `@nutui/nutui-react` 运行时依赖收敛至 **10 个纯 Web 依赖**。

#### 3. 兼容性与验证 (Verification)

- **单测覆盖**：新增 `src/packages/configprovider/__test__/kebab-case.spec.ts`，针对 `types.ts` 定义的全部 **1086 个 NutCSSVariables Token** 进行全量比对，转换结果与 `lodash.kebabcase` 达成 **100% 字节级一致（0 差异）**。
- **回归测试**：`ConfigProvider` 相关 28 项单测全部 pass，Pre-commit Hooks 语法与格式检查 100% 通过。
- **风险评估**：**零风险（无 API Break，行为 100% 保持兼容）**。

#### 4. 涉及文件 (Affected Files)

- `src/utils/kebab-case.ts` _(新增)_
- `src/packages/configprovider/__test__/kebab-case.spec.ts` _(新增)_
- `src/packages/configprovider/configprovider.tsx`
- `src/packages/configprovider/configprovider.taro.tsx`
- `src/utils/index.ts`
- `src/utils/index.taro.ts`
- `scripts/build.mjs`
- `scripts/build-taro.mjs`
- `package.json`
- `packages/nutui-inject-ui-styles/package.json`
- `packages/nutui-replace-icons/package.json`

---

## 🔮 规划中里程碑 (Roadmap)

### [待推进] P1.2: Button 样式结构解耦 (Base vs Variants)

- **计划内容**：
  - `Button` 样式按 Base / Variants 分层，`Dialog` 与 `Empty` 切换至只引入 `button-base`。
- **预期收益**：**CSS −16.9 KB**（去除未使用的语义色与小尺寸按钮变体）。

### [待推进] P2: 主题变量核心域拆分

- **计划内容**：
  - 抽取 `src/styles/variables-core.scss`，组件专属变量私有化声明，根入口保持聚合向下兼容。
- **预期收益**：**CSS −4.4 KB**（消除 115 个未用死 CSS 变量）。

### [待推进] P3: 小程序端弹层动画轻量化

- **计划内容**：
  - 针对 Taro 小程序端实现轻量 CSS 状态机 Hook，降级/移除对 `react-transition-group` 的强制依赖。
- **预期收益**：**JS −~14 KB**（免去小程序环境下的 `dom-helpers` 与 `prop-types` 开销）。
