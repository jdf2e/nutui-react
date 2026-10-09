// migrate [from] [to] —— 输出 vN→vM 迁移指南。数据源是随包抽取的官方迁移文档（migrate-from-v{n}.md），
// 按组件切段后原文输出；--component 只看某组件，--apply <dir> 扫描项目、只输出用到组件的迁移步骤并生成给 Agent 的提示。
//
// 与其它命令不同：迁移跨两个版本，故不走 resolveContext（它只解析单版本），而是用 to 版本定位快照、读其内迁移文档。
import { loadVersionsIndex, readMigrationDoc, resolveSnapshotDir } from '../data.js'
import { output } from '../format.js'
import { parseMigrationDoc, filterSections } from './migrate-parse.js'
import { scanProject } from '../utils/scan.js'
import type { OutputFormat } from './_shared.js'
import type { CliConfig } from '../config.js'

export interface MigrateArgs {
  config: CliConfig
  from?: string
  to?: string
  component?: string
  apply?: string
  format: OutputFormat
}

// 把版本参数（'3' / '3.1.0' / 'v4'）归一为大版本号整数。无法解析返回 null。
function toMajorNum(v: string | undefined): number | null {
  if (!v) return null
  const m = String(v).replace(/^v/, '').match(/^(\d+)/)
  return m ? Number(m[1]) : null
}

function fail(msg: string): never {
  process.stderr.write(`${msg}\n`)
  process.exit(1)
}

export function runMigrate(args: MigrateArgs): void {
  const fromMajor = toMajorNum(args.from) ?? 3
  const toMajor = toMajorNum(args.to) ?? fromMajor + 1

  if (toMajor <= fromMajor) {
    fail(
      `迁移方向无效：from=v${fromMajor} to=v${toMajor}。请指定从低到高的大版本，如 ${args.config.binName} migrate 3 4。`
    )
  }

  // 用 to 大版本定位快照目录（该版本快照里带 migrations/from-v{from}.md）。
  const idx = loadVersionsIndex(args.config.dataDir)
  const toMajorKey = `v${toMajor}`
  if (!idx.majors[toMajorKey]) {
    fail(
      `未找到 NutUI v${toMajor} 的离线数据，无法提供 v${fromMajor}→v${toMajor} 迁移指南。已知版本：${Object.keys(idx.majors).join(' / ')}。`
    )
  }
  const snapshotDir = resolveSnapshotDir(args.config.dataDir, String(toMajor))
  const md = readMigrationDoc(snapshotDir, fromMajor)

  if (md === null) {
    fail(
      `暂无 v${fromMajor}→v${toMajor} 的迁移文档数据。目前仅内置随 ${idx.majors[toMajorKey].latest} 分发的迁移说明；若为源码开发，请先运行 pnpm run build 重新抽取。`
    )
  }

  const parsed = parseMigrationDoc(md)

  // 确定要输出的组件段：--apply 扫描项目取交集；--component 显式过滤；否则全部。
  let sections = parsed.sections
  let scan: ReturnType<typeof scanProject> | null = null
  let matchedComponents: string[] = []
  let missingFromDoc: string[] = []

  if (args.apply) {
    scan = scanProject(args.apply)
    sections = filterSections(parsed.sections, scan.components)
    matchedComponents = sections.map((s) => s.component)
    // 项目用到、但迁移文档未覆盖的组件（v3→v4 大多无破坏性变更，属正常）。
    const covered = new Set(sections.map((s) => s.component.toLowerCase()))
    missingFromDoc = scan.components.filter((c) => !covered.has(c.toLowerCase()))
  } else if (args.component) {
    sections = filterSections(parsed.sections, [args.component])
    if (!sections.length) {
      fail(
        `迁移文档中未找到组件「${args.component}」。已覆盖：${parsed.sections.map((s) => s.component).join(' / ')}。`
      )
    }
  }

  const jsonData = {
    from: `v${fromMajor}`,
    to: `v${toMajor}`,
    libVersion: idx.majors[toMajorKey].latest,
    coveredComponents: parsed.sections.map((s) => s.component),
    steps: sections.map((s) => ({
      component: s.component,
      category: s.category,
      guide: s.raw,
    })),
    ...(scan
      ? {
          appliedTo: args.apply,
          scannedFiles: scan.scannedFileCount,
          projectComponents: scan.components,
          matchedComponents,
          componentsWithoutBreakingChanges: missingFromDoc,
        }
      : {}),
  }

  output(
    args.format,
    jsonData,
    () => renderText(parsed, sections, args, scan, matchedComponents, missingFromDoc),
    // 迁移指南本身是可直接粘贴的 markdown，text 不加版本头（同 doc.ts）。
    { header: '', meta: { from: `v${fromMajor}`, to: `v${toMajor}`, libVersion: idx.majors[toMajorKey].latest } }
  )
}

function renderText(
  parsed: ReturnType<typeof parseMigrationDoc>,
  sections: ReturnType<typeof parseMigrationDoc>['sections'],
  args: MigrateArgs,
  scan: ReturnType<typeof scanProject> | null,
  matchedComponents: string[],
  missingFromDoc: string[]
): string {
  const parts: string[] = []

  if (scan) {
    // --apply：产出一段给 Code Agent 的定向迁移提示。
    parts.push(`# NutUI ${parsed.title || '版本迁移'}（基于项目扫描）`)
    parts.push(
      `> 扫描目录 \`${args.apply}\`：共 ${scan.scannedFileCount} 个源文件，检测到 ${scan.components.length} 个 NutUI 组件：${scan.components.join('、') || '（无）'}。`
    )
    if (matchedComponents.length) {
      parts.push(
        `> 其中 **${matchedComponents.length}** 个有破坏性变更需处理：${matchedComponents.join('、')}。`
      )
    } else {
      parts.push('> 未命中任何有破坏性变更的组件——按当前迁移文档，项目所用组件无需改代码（仍建议构建后人工核对样式）。')
    }
    if (missingFromDoc.length) {
      parts.push(
        `> 以下组件项目用到、但迁移文档未列破坏性变更（v3→v4 多数组件如此，通常无需改动）：${missingFromDoc.join('、')}。`
      )
    }
    parts.push(
      [
        '## 给代码 Agent 的指令',
        '',
        '1. 仅需处理下方列出的组件，逐个阅读其「迁移说明」原文。',
        '2. 破坏性变更集中在**样式 / CSS 类名 / Design Token / 枚举值 / 默认值**，几乎没有 Props 增删——请重点检查这些维度，不要臆造 Props 改名。',
        '3. 枚举值/默认值变更（如 Empty 的 `size`/`status`、Popover 的 `theme`）**不会自动兼容**，必须改代码。',
        '4. 对无法机械改写、需要视觉确认的改动，改完后标记「待人工复核」，不要声称已完成。',
        '5. 迁移后运行构建验证；编译通过 ≠ 视觉/行为正确。',
      ].join('\n')
    )
  } else {
    // 全量 / --component：先给引言（升级步骤），再给组件段。
    if (!args.component && parsed.intro) parts.push(parsed.intro)
  }

  if (sections.length) {
    if (scan || args.component) {
      parts.push('---')
      parts.push('## 迁移说明')
    }
    for (const s of sections) parts.push(s.raw)
  } else if (!scan) {
    parts.push('（无匹配的组件迁移说明。）')
  }

  return parts.join('\n\n')
}
