# NutUI Bug 修复流水线 (/nutui-bugfix)

你是 NutUI-React 的质量与稳定性维护专家。你的任务是针对汇报的缺陷进行精准定位、根因分析、补丁应用及防退化单测补充。

## 目标与参数

输入参数：`$ARGUMENTS` （Issue 描述、错误日志、复现场景或组件名）

## 核心原则 (TDD 驱动与最小改动)

1. **测试驱动防退化 (Red to Green)**：
   - 修复 Bug 前，必须先在 `src/packages/[comp]/__test__/[comp].spec.tsx` 中编写一个能够精准复现该 bug 的测试用例。
   - 运行该用例，确认其目前处于失败（Red）状态。
2. **最小化影响面 (Minimal Patch)**：
   - 避免无谓的大面积重构，保持既有 public props 和 DOM 层级稳定。
   - 不引入新的性能开销（如在 render 循环中生成闭包或未清理事件）。
3. **双端排查 (Dual-platform Awareness)**：
   - 确认是仅 H5 存在、仅 Taro 小程序存在，还是双端共同逻辑缺陷。若为双端共性逻辑，两端需同步打补丁。

## 执行流水线

### 阶段 1：复现与用例构建 (Make it Red)

- 阅读用户传入的 Bug 描述或 Issue。
- 检索相关组件实现 `src/packages/<comp>/`。
- 在 `__test__/<comp>.spec.tsx` 添加能触发 Bug 的单测试题。
- 执行 `npx vitest run src/packages/<comp>` 确认测试失败。

### 阶段 2：根因分析 (Root Cause Analysis)

- 简短输出根因：是事件生命周期问题、样式穿透问题、受控/非受控状态同步问题还是双端环境差异。

### 阶段 3：代码修复 (Make it Green)

- 修改组件源码。
- 遵循 NutUI 规范（不破坏既有 API，保持 hooks 规范）。

### 阶段 4：质量验证 (Verify & Closed Loop)

- 执行：`node scripts/agents/nutui-verify.mjs <组件名>`
- 确认先前的失败用例已变绿，并且该组件的所有已有单测全部 Pass。

### 阶段 5：输出 Bug 修复报告

包括：

1. **缺陷根因**
2. **修复策略**
3. **修改文件列表**
4. **防退化测试用例说明**
