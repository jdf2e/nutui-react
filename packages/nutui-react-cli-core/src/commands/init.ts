// init —— 在业务项目中一键初始化 Agent-Ready 规范配置与 Skills。
import fs from 'node:fs'
import path from 'node:path'
import type { CliConfig } from '../config.js'

export interface InitArgs {
  config: CliConfig
  targetDir?: string
  force?: boolean
}

export function runInit(args: InitArgs): void {
  const { config } = args
  const targetDir = path.resolve(args.targetDir || process.cwd())
  const force = Boolean(args.force)

  // 1. 检查目标项目 package.json
  const pkgPath = path.join(targetDir, 'package.json')
  let pkgName = 'project'
  let isTaro = config.platform === 'taro'

  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
      if (pkg.name) pkgName = pkg.name
      const deps = { ...pkg.dependencies, ...pkg.devDependencies }
      if (deps['@tarojs/taro'] || deps['@tarojs/react']) {
        isTaro = true
      }
    } catch {
      // 保持默认
    }
  }

  process.stdout.write(
    `🚀 正在初始化 ${config.libLabel} Agent-Ready 规范至: ${targetDir}\n\n`
  )

  const results: string[] = []

  // 2. 生成 AGENTS.md
  const agentsMdPath = path.join(targetDir, 'AGENTS.md')
  if (!fs.existsSync(agentsMdPath) || force) {
    const content = generateAgentsMd(config, pkgName, isTaro)
    fs.writeFileSync(agentsMdPath, content, 'utf-8')
    results.push('✅ 生成 AGENTS.md（通用 AI 编码 Agent 规范指南）')
  } else {
    results.push('ℹ️ 已存在 AGENTS.md（使用 --force 可覆盖）')
  }

  // 3. 生成 .cursorrules
  const cursorRulesPath = path.join(targetDir, '.cursorrules')
  if (!fs.existsSync(cursorRulesPath) || force) {
    const content = generateCursorRules(config, isTaro)
    fs.writeFileSync(cursorRulesPath, content, 'utf-8')
    results.push('✅ 生成 .cursorrules（Cursor 规则注入）')
  } else {
    results.push('ℹ️ 已存在 .cursorrules（使用 --force 可覆盖）')
  }

  // 4. 生成 .claude/CLAUDE.md
  const claudeDir = path.join(targetDir, '.claude')
  const claudeMdPath = path.join(claudeDir, 'CLAUDE.md')
  if (!fs.existsSync(claudeMdPath) || force) {
    fs.mkdirSync(claudeDir, { recursive: true })
    const content = generateClaudeMd(config, isTaro)
    fs.writeFileSync(claudeMdPath, content, 'utf-8')
    results.push('✅ 生成 .claude/CLAUDE.md（Claude Code 规范）')
  } else {
    results.push('ℹ️ 已存在 .claude/CLAUDE.md（使用 --force 可覆盖）')
  }

  // 5. 复制随包发布的 Skills 到 .cursor/skills
  if (config.skillsDir && fs.existsSync(config.skillsDir)) {
    const cursorSkillsDir = path.join(targetDir, '.cursor/skills')
    copySkills(config.skillsDir, cursorSkillsDir)
    results.push('✅ 注入 NutUI Skills 到 .cursor/skills/ 目录')
  }

  for (const r of results) {
    process.stdout.write(`${r}\n`)
  }

  process.stdout.write(
    `\n✨ 初始化完成！AI Agent 现在可以通过 \`${config.binName} info <Comp> --dense\` 精准获取组件规格与 Token。\n`
  )
}

function generateAgentsMd(
  config: CliConfig,
  pkgName: string,
  isTaro: boolean
): string {
  const runtimePkg = isTaro ? '@nutui/nutui-react-taro' : '@nutui/nutui-react'
  const iconPkg = isTaro ? '@nutui/icons-react-taro' : '@nutui/icons-react'

  const platformTips = isTaro
    ? `- 本项目为 **Taro 多端/小程序项目**。
- 图标必须从 \`${iconPkg}\` 按需引入，严禁使用非 Taro 图标包。
- 严禁在 JSX 中直接绑定浏览器私有事件（如 window / document 监听），统一遵循 Taro 规范。
- 样式覆盖受小程序样式隔离影响，请优先使用组件暴露的 Design Token (CSS Variables)。`
    : `- 本项目为 **移动端 H5 项目**。
- 图标必须从 \`${iconPkg}\` 引入。
- 严格遵循移动端触控交互规范，遵循 NutUI Design Token 体系。`

  return `# NutUI AI Coding Guidelines

> 适用于当前项目 (${pkgName}) 的 AI 编码助手规范。本文件由 \`${config.binName} init\` 自动生成。

本项目采用 **${config.libLabel}** 作为移动端 UI 组件库。所有 AI Agent 在编写或重构页面时必须遵守以下规则：

## 1. 编码前先查依据（禁止凭空捏造 API）
在编写任何使用 NutUI 组件的代码前，必须使用本地 CLI 确认组件支持的属性和默认值：
\`\`\`bash
# 1. 查询组件支持的属性与类型（高密度模式，极低 Token 消耗）
${config.binName} info <ComponentName> --dense

# 2. 查询组件样式变量 Token
${config.binName} token <ComponentName> --dense

# 3. 查看官方成熟用法示例
${config.binName} demo <ComponentName>
\`\`\`

## 2. 样式与主题规范（Design Token 优先）
- **禁止硬编码魔法颜色与尺寸**：只要组件提供了对应的 \`--nutui-*\` 变量，必须优先使用 CSS 变量进行定制。
- **全局与局部覆盖**：全局主题在根节点覆盖变量，局部页面在容器 class 下覆盖变量。
- 查询全局可用 Token：
\`\`\`bash
${config.binName} token --dense
\`\`\`

## 3. 端能力与运行环境约束
${platformTips}

## 4. 组件库依赖引入规范
- 基础组件引入来源：\`${runtimePkg}\`
- 图标组件引入来源：\`${iconPkg}\`

## 5. 版本升级与迁移 (v3 -> v4)
如涉及跨版本迁移或升级，先使用 CLI 扫描当前目录或查询单组件迁移说明：
\`\`\`bash
${config.binName} migrate 3 4 --component <ComponentName>
\`\`\`
`
}

function generateCursorRules(config: CliConfig, isTaro: boolean): string {
  return `# NutUI React Rules for Cursor
- When using NutUI components, always verify API via \`${config.binName} info <Component> --dense\` first.
- Always use CSS variables (\`--nutui-*\`) for component styling instead of hardcoded hex colors.
- Component runtime package: \`${isTaro ? '@nutui/nutui-react-taro' : '@nutui/nutui-react'}\`.
- Icon package: \`${isTaro ? '@nutui/icons-react-taro' : '@nutui/icons-react'}\`.
`
}

function generateClaudeMd(config: CliConfig, isTaro: boolean): string {
  return `# Claude Code Guidelines for NutUI

## Guidelines
- Before implementing UI components, run \`${config.binName} info <Component> --dense\` to obtain exact TypeScript props.
- Reference \`${config.binName} token <Component> --dense\` for styling customization.
- Package: \`${isTaro ? '@nutui/nutui-react-taro' : '@nutui/nutui-react'}\`.
`
}

function copySkills(srcDir: string, destDir: string): void {
  if (!fs.existsSync(srcDir)) return
  fs.mkdirSync(destDir, { recursive: true })

  const entries = fs.readdirSync(srcDir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.name.startsWith('.')) {
      const srcPath = path.join(srcDir, entry.name)
      const destPath = path.join(destDir, entry.name)

      if (entry.isDirectory()) {
        copySkills(srcPath, destPath)
      } else if (entry.isFile()) {
        fs.copyFileSync(srcPath, destPath)
      }
    }
  }
}
