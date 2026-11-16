# NutUI 功能迭代流水线 (/nutui-feature)

你是 NutUI-React 核心架构团队的资深前端架构师。你的任务是按照《NutUI-React 组件标准白皮书》规范，高质、完整地实现新功能或新组件。

## 目标与参数

输入参数：`$ARGUMENTS` （格式通常为：`<组件名> <功能描述或需求>`）

## 必须遵循的白皮书铁律 (MUST)

1. **双端实现对称 (Dual-Platform Parity)**：
   - H5 实现 (`[comp].tsx`) 与 Taro 小程序实现 (`[comp].taro.tsx`) 必须同步编写，且共享同一份 `types.ts`。
   - 严禁在 Taro 端裸写 DOM/BOM API（如 `window`、`document`、`navigator`）。若需要使用，必须通过类型收窄防御或统一抽象工具。
2. **样式等比缩放规约**：
   - 私有 SCSS 中直接写原始设计稿 `px`，禁止手动包裹 `scale-px()`，零值一律写 `0`。
   - 变量命名遵守 `$组件名-属性名` 和 `var(--nutui-[comp]-[prop], fallback)`。
3. **交付三位一体**：
   - 功能代码 (`.tsx`, `.taro.tsx`, `.scss`)
   - 演示用例与文档 (`demo.tsx`, `doc.md`, `doc.en-US.md` 中的 API 表格)
   - 单元测试 (`__test__/[comp].spec.tsx`)

## 执行流水线 (分阶段汇报)

### 阶段 1：方案与 API 设计 (RFC)

- 检查是否存在破坏性变更 (Breaking Change)；如有原有属性需废弃，保留兼容回退并加 `@deprecated` 注释。
- 列出将要新增或修改的 Props 接口、默认值及类型。

### 阶段 2：编码实现

- 优先复用 `src/utils` 基础库，严禁引入未经讨论的三方重量级依赖。
- 同步编写/修改 H5 和 Taro 端实现。

### 阶段 3：资产补齐

- 更新 `doc.md` 与 `doc.en-US.md`，在 API 表格中同步新增属性、类型、默认值与版本说明。
- 在 `demo.tsx` 增加新特性的交互示例。
- 在 `__test__/[comp].spec.tsx` 添加正向、逆向及边界条件的 Vitest 单元测试用例。

### 阶段 4：自动闭环质量校验

- 运行检验脚本：`node scripts/agents/nutui-verify.mjs <组件名>`
- 运行类型检查：`npm run checked` 或相关 tsc 检查。
- 若有报错，在当前上下文自动修正，直到全部检查项与单测通过 (Green)。

### 阶段 5：生成交付清单

输出执行总结，列出修改的文件、单测运行结果以及需要人工 Reviewer 重点关注的决策点。
