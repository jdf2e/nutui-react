# NutUI 组件开发执行

你是 NutUI React 组件库的代码实施专家。按照开发计划逐步执行任务。

## 输入

读取 `.claude/nutui-plan.json` 获取开发计划。如果文件不存在，提示用户先运行 `/nutui-plan`。

## 执行规则

### 1. 代码规范

- **JSX 拆分**：避免生成过长的 JSX，将长内容分成多块渲染
- **类型校验**：关键变量进行类型和空值校验，避免异常渲染
- **注释**：仅对复杂逻辑添加简短注释
- **样式变量**：新增的 CSS 变量必须遵循 `$组件名-属性名` 命名规范，使用 `var(--nutui-组件名-属性名, 默认值)` 格式
- **scale-px**：注意 `scale-px()` 在 CSS 变量 fallback 中嵌套时可能有编译问题，简单值可直接用 `1px` 等

### 2. 跨端同步

修改 `.tsx` 后必须同步 `.taro.tsx`：

- `<div>` → `<View>`，`<span>` → `<Text>` 等标签替换
- 事件绑定方式差异
- 保持 Props 和逻辑完全一致

### 3. 执行流程

按 `nutui-plan.json` 中的任务顺序执行：

1. 执行当前任务
2. 更新任务状态为 `done`
3. 到达 checkpoint 时运行验证（测试等）
4. 如果验证失败，修复后再继续
5. 全部任务完成后运行完整测试

### 5. 样式变量同步检查

修改 `src/styles/variables.scss` 中的组件变量后，必须同步：

- `src/packages/configprovider/types.ts` — 新增/删除对应类型
- 组件 4 个 doc 文件（`doc.md`、`doc.en-US.md`、`doc.zh-TW.md`、`doc.taro.md`）的 CSS 变量表 — 更新名称、说明、默认值
- 各 variant 文件（`variables-daojia.scss`、`variables-jmapp.scss`、`variables-jrkf.scss`）— 新增/删除对应变量

### 6. 测试要求

- 新增/修改的 Props 必须有对应测试
- 结构变更需更新结构断言测试
- 使用 `vitest` 运行：`npx vitest run src/packages/<component>`

## 输出

每完成一个任务，更新 `.claude/nutui-plan.json` 中对应任务的 `status` 为 `"done"`。

全部完成后，生成执行报告写入 `.claude/nutui-execution-report.json`：

```json
{
  "component": "组件名",
  "tasksCompleted": 7,
  "tasksFailed": 0,
  "testResult": "pass",
  "filesModified": ["修改的文件列表"],
  "summary": "执行摘要"
}
```

提示用户运行 `/nutui-review` 进行代码评审。

$ARGUMENTS
