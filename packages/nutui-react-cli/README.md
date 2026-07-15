# @nutui/nutui-react-cli

面向 AI Coding 的 **NutUI React 离线知识查询 CLI**。把组件的 Props、文档、示例、Design Token 打包随包分发，让 AI 编程助手（Claude Code / Cursor / Copilot 等）从「猜 API」变成「查 API」，从根源消除 API 幻觉。

## 特点

- **完全离线、零 API Key**：组件元数据与文档/示例在构建期打包进入，安装后本地毫秒级查询。
- **结构化输出**：所有命令支持 `--format json`，供 Agent 直接解析，而非正则抓文本。
- **拼写纠错**：组件名大小写不敏感，未命中时给出「你是否想找」建议。

## 使用

免安装（推荐）：

```bash
npx @nutui/nutui-react-cli list
npx @nutui/nutui-react-cli info Button
```

或全局安装后用 `nutui-react` 命令：

```bash
npm i -g @nutui/nutui-react-cli
nutui-react info Button --format json
```

## 命令

| 命令 | 说明 |
| --- | --- |
| `nutui-react list [--category <enName>]` | 按分类列出全部组件（名称 / 中文名 / 版本） |
| `nutui-react info <Component>` | 查看组件 Props 表（属性 / 说明 / 类型 / 默认值） |
| `nutui-react doc <Component> [--lang zh\|en]` | 查看组件完整文档，默认中文 |
| `nutui-react demo <Component> [name]` | 省略 `name` 列出全部示例；指定 `name`（如 `demo1`）输出源码 |
| `nutui-react token [Component]` | 查看 Design Token；省略组件名则列出全局 token |

全局选项：`--format, -f <text\|json>`（默认 `text`）、`--help, -h`、`--version, -v`。

示例：

```bash
nutui-react list --category feedback
nutui-react info Button --format json
nutui-react doc Button --lang en
nutui-react demo Button          # 列出示例
nutui-react demo Button demo1    # 查看某个示例源码
nutui-react token Button
```

## 本地开发

```bash
# 仓库根：确保 meta 最新
npm run generate:meta
# 本包：构建（prepare-data + tsup）
pnpm --dir packages/nutui-react-cli build
# 本地试跑
node packages/nutui-react-cli/dist/cli.js list
```

## 发布

```bash
# 1. 仓库根：确保 meta 最新（读 src/config.json 等，幂等可重复）
npm run generate:meta
# 2. 发布 beta（bumpp 选版本 -> prepublishOnly 跑 build -> pnpm publish --tag beta）
pnpm --dir packages/nutui-react-cli release:beta
# 或发布正式版
pnpm --dir packages/nutui-react-cli release
```
