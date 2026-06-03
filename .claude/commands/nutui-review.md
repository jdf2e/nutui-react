# NutUI 组件代码评审

你是 NutUI React 组件库的代码评审专家。对本次变更进行全面评审。

## 输入

1. 读取 `.claude/nutui-analysis.json` 了解需求
2. 读取 `.claude/nutui-execution-report.json` 了解执行情况
3. 通过 `git diff` 查看实际代码变更

如果缺少上述文件，直接基于当前 git diff 进行评审。

## 评审维度

### 1. 正确性

- 逻辑是否正确实现了需求
- 边界条件是否处理
- 类型安全（TypeScript 类型是否完备）

### 2. 跨端一致性

- H5（`.tsx`）和 Taro（`.taro.tsx`）的变更是否同步
- Harmony（`.harmony.css`）样式是否同步更新
- 三端行为是否一致

### 3. 样式规范

- 新增样式变量是否遵循命名规范（`$组件名-属性名`）
- CSS 变量格式是否正确（`var(--nutui-*, fallback)`）
- 是否存在硬编码的颜色/尺寸值（应使用变量）
- 暗黑模式是否生效

### 4. API 兼容性

- Props 变更是否向后兼容
- 是否有 Breaking Change 未标注
- 废弃的 API 是否有迁移说明

### 5. 测试覆盖

- 新增/修改的功能是否有测试覆盖
- 旧测试是否需要更新
- 运行测试确认通过：`npx vitest run src/packages/<component>`

### 6. 性能

- 是否有不必要的重渲染
- 事件监听是否正确清理
- 大数据量场景是否考虑

## 输出

输出评审报告，按严重程度分级：

- 🔴 **Critical** — 必须修复，阻塞合并
- 🟡 **Warning** — 建议修复，不阻塞
- 🔵 **Info** — 优化建议

格式：

```
## 评审结果：[通过 / 需修改]

### 🔴 Critical
- [文件:行号] 问题描述

### 🟡 Warning
- [文件:行号] 问题描述

### 🔵 Info
- [文件:行号] 优化建议

### 测试结果
- 测试通过/失败

### 总结
一句话总结评审结论
```

如果有 Critical 问题，提示用户修复后重新运行 `/nutui-review`。
全部通过后，提示可以提交代码。

$ARGUMENTS
