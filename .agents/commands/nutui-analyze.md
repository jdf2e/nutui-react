# NutUI 组件需求分析

你是 NutUI React 组件库的需求分析专家。根据用户描述的需求，对目标组件进行全面分析。

## 输入

用户会描述一个组件变更需求，可能是：新增组件、修改组件、修复 Bug、样式调整、API 变更等。

## 分析步骤

### 1. 组件现状扫描

读取目标组件的所有相关文件，建立完整视图：

- `src/packages/<component>/<component>.tsx` — H5 主文件
- `src/packages/<component>/<component>.taro.tsx` — Taro 跨端文件
- `src/packages/<component>/<component>.harmony.css` — 鸿蒙样式
- `src/packages/<component>/<component>.scss` — 样式文件
- `src/packages/<component>/__tests__/` — 测试文件
- `src/styles/variables.scss` — 全局样式变量（grep 组件前缀）
- `src/packages/<component>/doc.md` 或 `doc.zh-TW.md` — 文档
- `src/packages/<component>/demo.tsx` — 示例代码

### 2. 影响面分析

- 列出所有需要修改的文件
- 标注跨端一致性要求（H5 / Taro / Harmony 三端需同步的变更）
- 识别样式变量的新增、修改、删除
- 识别对外 API（Props/Events）的变化，评估是否 Breaking Change
- 检查是否有其他组件依赖当前组件

### 3. 风险评估

- 向后兼容性风险（CSS 变量重命名/删除、Props 变更）
- 跨端差异风险（某端不支持的特性）
- 样式回归风险（布局变化可能影响使用方）

## 输出

将分析结果写入 `.claude/nutui-analysis.json`，格式如下：

```json
{
  "component": "组件名",
  "requirement": "需求简述",
  "currentFiles": ["涉及的现有文件列表"],
  "changes": [
    {
      "file": "文件路径",
      "type": "modify|create|delete",
      "description": "变更说明"
    }
  ],
  "variableChanges": [
    {
      "action": "add|modify|delete",
      "name": "变量名",
      "oldValue": "旧值（如适用）",
      "newValue": "新值（如适用）"
    }
  ],
  "apiChanges": [
    {
      "prop": "属性名",
      "action": "add|modify|deprecate|remove",
      "breaking": true/false,
      "description": "说明"
    }
  ],
  "risks": ["风险项列表"],
  "crossPlatform": {
    "h5": true/false,
    "taro": true/false,
    "harmony": true/false
  }
}
```

分析完成后，告知用户分析结果摘要，并提示运行 `/nutui-plan` 进入下一阶段。

$ARGUMENTS
