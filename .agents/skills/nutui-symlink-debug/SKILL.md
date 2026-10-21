---
name: nutui-symlink-debug
description: 为 NutUI-React-Taro 本地构建产物创建/管理软链（symlink），以便在本地 Demo 或外部业务工程中联调未发布的组件库版本。当用户提到“创建软链”、“软链接联调”、“link 本地产物”、“unlink 还原依赖”、“本地调试 taro 组件库”时激活此 skill。
---

# NutUI-React 本地软链联调技能 (nutui-symlink-debug)

本技能指导开发者与 AI 助手将 `nutui-react`（特别是 `@nutui/nutui-react-taro`）在本地编译构建的产物快速建立软链（Symlink）到目标工程（内置 Demo 或外部宿主业务工程）中，实现零发布、即时生效的本地组件联调流程。

---

## 🎯 核心解决的问题

1. **避免频繁发布 Beta 包**：每次修改组件代码无需经历 `npm publish`，直接链接本地编译产物。
2. **多端环境路径一致性**：自动使用绝对路径创建软链，避免相对路径因目录层级不同产生死链。
3. **解决实体目录冲突**：若目标工程已安装同名 npm 实体依赖包，自动进行备份清理，无缝替换为软链。
4. **规避 Taro / Webpack 编译陷阱**：提供 React 多实例与模块解析缓存的排查指南。

---

## 🛠️ 快速操作指引

项目内置了自动化管理脚本 `scripts/nutui-symlink.mjs`，支持如下命令：

### 1. 建立软链（Link）

```bash
# 1. 软链到仓库内置的 Demo 工程 (packages/nutui-taro-demo)
pnpm symlink:taro
# 或
node scripts/nutui-symlink.mjs link

# 2. 软链到外部业务工程（支持相对路径或绝对路径）
node scripts/nutui-symlink.mjs link /path/to/your/taro-project
```

> **自动化逻辑**：
>
> - 检查 `release/taro/` 是否已编译，若尚未编译会自动执行 `pnpm build:taro`。
> - 确保目标工程的 `node_modules/@nutui` 目录存在。
> - 若已有实体依赖目录，会自动备份为 `.backup-<timestamp>` 避免误删。
> - 使用绝对路径将 `release/taro` 链接到 `node_modules/@nutui/nutui-react-taro`。

---

### 2. 检查软链状态（Status）

```bash
# 检查默认 Demo 工程
pnpm symlink:status
# 或检查指定业务工程
node scripts/nutui-symlink.mjs status /path/to/your/taro-project
```

输出示例：

```text
📂 [nutui-symlink] 目标工程: /Users/.../packages/nutui-taro-demo
ℹ️ [nutui-symlink] 软链位置: /Users/.../packages/nutui-taro-demo/node_modules/@nutui/nutui-react-taro
🔗 [nutui-symlink] 状态: 已软链 -> /Users/.../release/taro
✅ [nutui-symlink] 软链指向有效，正指向当前仓库 release/taro 本地构建产物！
```

---

### 3. 解除软链并恢复（Unlink）

联调完毕、需切回 npm 线上依赖时执行：

```bash
# 解除默认 Demo 工程的软链
pnpm unsymlink:taro
# 或解除指定业务工程的软链
node scripts/nutui-symlink.mjs unlink /path/to/your/taro-project
```

如需恢复官方线上依赖包：

```bash
cd /path/to/your/taro-project
pnpm install --force
```

---

## ⚠️ 常见避坑与故障排查

### 1. 宿主工程报 `Invalid hook call`（React 多实例冲突）

- **原因**：当组件库软链到业务工程时，组件库内部引入了自己 node_modules 里的 React，而宿主工程也有自己的 React。
- **解决方案**：在目标工程的编译配置（如 Taro 的 `config/index.js`）中配置 alias，将 `react` 和 `react-dom` 强制锁定到宿主工程的单一实例：

  ```js
  const path = require('path')

  module.exports = {
    alias: {
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
      '@tarojs/taro': path.resolve(__dirname, '../node_modules/@tarojs/taro'),
    },
  }
  ```

### 2. 更改组件代码后目标工程没有生效

- **原因**：Taro / Webpack 开启了持久化编译缓存（cache），或 `pnpm build:taro` 未重新执行。
- **解决方案**：
  1. 重新在组件库根目录执行：`pnpm build:taro`
  2. 在目标工程中带 `--clear-cache` 启动，或删除目标工程的 `.taro-cache` / `dist` 目录重新编译。

### 3. pnpm Monorepo 幽灵依赖缺失

- 若宿主项目为 pnpm，且使用了特定的 Taro 插件（如 `@jdtaro/plugin-intl`），因符号链接嵌套导致找不到插件：
  ```bash
  # 可在宿主项目 node_modules 下补齐对应插件软链：
  ln -s ../../node_modules/.pnpm/@jdtaro+plugin-intl@.../node_modules/@jdtaro/plugin-intl node_modules/@jdtaro/plugin-intl
  ```
