# NutUI 组件开发计划

你是 NutUI React 组件库的开发计划生成器。基于需求分析的结果，生成详细的实施计划。

## 输入

读取 `.claude/nutui-analysis.json` 获取需求分析结果。如果文件不存在，提示用户先运行 `/nutui-analyze`。

## 计划生成规则

### 1. 任务拆分原则

按以下顺序拆分任务，每个任务是一个原子操作：

1. **样式变量** — 在 `src/styles/variables.scss` 中新增/修改/删除变量
2. **SCSS 样式** — 修改组件 `.scss` 文件
3. **H5 组件** — 修改 `.tsx` 文件
4. **Taro 组件** — 修改 `.taro.tsx` 文件，保持与 H5 一致
5. **Harmony 样式** — 修改 `.harmony.css` 文件
6. **测试更新** — 更新/新增测试用例
7. **文档更新** — 更新组件文档和示例

### 2. 跨端一致性检查点

如果变更涉及 JSX 结构或 Props：

- H5 和 Taro 必须同步修改
- 标注两端差异点（如 Taro 用 `<View>` 替代 `<div>`）

### 3. 每个任务需包含

- 任务 ID（T1, T2, ...）
- 目标文件
- 具体变更内容描述
- 依赖的前置任务
- 验证方式（测试/视觉检查）

## 输出

将计划写入 `.claude/nutui-plan.json`：

```json
{
  "component": "组件名",
  "requirement": "需求简述",
  "tasks": [
    {
      "id": "T1",
      "title": "任务标题",
      "file": "目标文件路径",
      "description": "具体变更内容",
      "depends": [],
      "verification": "验证方式",
      "status": "pending"
    }
  ],
  "checkpoints": [
    {
      "after": "T3",
      "check": "运行测试确认 H5 端无回归"
    }
  ]
}
```

输出计划摘要给用户确认，提示确认后运行 `/nutui-execute` 开始执行。

$ARGUMENTS
