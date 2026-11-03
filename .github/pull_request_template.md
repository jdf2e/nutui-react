<!--
非常感谢您的贡献！维护者审核通过后会合并。
请确保填写以下 pull request 的信息，谢谢！~
-->

### 🤔 这个变动的性质是？

- [ ] 新特性提交
- [ ] 日常 bug 修复
- [ ] 组件升级 / 重构
- [ ] 站点、文档改进
- [ ] 演示代码改进
- [ ] 组件样式/交互改进
- [ ] TypeScript 定义更新
- [ ] 包体积优化
- [ ] 性能优化
- [ ] 国际化改进
- [ ] 测试用例
- [ ] 其他改动

### 🔗 相关 Issue

<!--
描述相关需求的来源，如相关的 issue 讨论链接。
-->

### 💡 需求背景和解决方案

<!--
1. 要解决的具体问题。
2. 列出最终的 API 实现和用法。
3. 涉及 UI/交互变动需要提供截图或 GIF。
-->

---

### ☑️ 核心质量与合并自查清单 (Quality Checklist)

⚠️ **请在提交前逐项核对并勾选以下自查项**：

#### 1. 📐 等比缩放规范 (Proportional Scaling)

- [ ] 组件 SCSS 源码（`src/packages/*/*.scss`）直接书写标准设计稿裸 `px`（构建和 dev 环境会自动转为 `scale-px`，源码中未手动硬编码 `scale-px`）
- [ ] 凡数值为 0 的尺寸已写为字面量 `0`（未写 `scale-px(0px)`）
- [ ] 细边框/微小线条（`border`、`outline` 上 `≤ 1px` 如 1px、0.5px）保持物理像素，未被错误放大
- [ ] 若修改了 `src/styles/variables*.scss` 中的变量兜底值，已显式声明 `scale-px()`；字号/图标专用场景使用了 `scale-font-px` / `scale-icon-px`

#### 2. 🛡️ 向前兼容性 (Backward Compatibility)

- [ ] 未直接删除或重命名既有的公开 Props、公开方法及 CSS 变量（`--nutui-*`）
- [ ] 若废弃了旧属性，已标注 `@deprecated` 并提供兼容桥接（旧写法仍能正常运行）
- [ ] DOM 结构未发生破坏性层级增加，避免影响外部宿主工程的 CSS 深度选择器穿透

#### 3. 🧩 属性抽象与双端一致 (Prop Design & Consistency)

- [ ] API 设计符合 React 通用规范（受控/非受控标准、语义清晰，无琐碎属性膨胀）
- [ ] H5 端与 Taro 端共享完全相同的 Props 类型定义（`types.ts`），双端功能行为一致

#### 4. 📦 包体大小与依赖控制 (Bundle Size)

- [ ] 未引入任何多余或重型的第三方 npm 依赖，优先复用 `src/utils` 内部轻量工具
- [ ] Tree-shaking 良好，无模块顶层副作用代码，无重复冗余样式

#### 5. ✨ 使用易用性与文档 (Developer Experience)

- [ ] 提供了开箱即用的合理默认参数（Default Props）
- [ ] TypeScript 类型定义严谨，所有公开 Props 均附带详尽的中英文 JSDoc 注释
- [ ] 已在 `demos/` 补齐对应的高频使用场景演示（基础用法、受控用法等）
- [ ] 组件各语言文档（`doc.md`、`doc.taro.md` 等）已同步更新

#### 6. ⚙️ 自动化检查 (QA)

- [ ] 运行 `npm run checked && npm run checked:taro` 双端类型检查零报错
- [ ] 相关的 Vitest 单元测试全部通过（`npx vitest run src/packages/[component]`）
- [ ] Fork 仓库基于最新分支，Files changed 中没有 `package-lock.json` 等无关改动
