// 迁移文档解析：把手写的 migrate-from-v{n}.md 切成"通用引言 + 每组件段落"，供 migrate 命令按组件过滤。
// 文档是散文式 markdown：# 标题 → 若干前置 ## 小节（升级步骤等）→ 逐组件的 ### Component (分类) 段。
// 解析只做结构切分，不重写内容——组件段原文照出，交由 Agent 阅读判断（见 SKILL）。

export interface MigrationSection {
  // 组件英文名（### 标题里的首个 token，如 Toast / Empty）
  component: string
  // 组件中文分类标注（### 标题括号内文本，如"操作反馈"；无则空串）
  category: string
  // 该组件段的原文 markdown（含 ### 标题行）
  raw: string
}

export interface ParsedMigration {
  // 文档主标题（# 之后的文本，如"从 v3 升级到 v4"）
  title: string
  // 第一个 ### 组件段之前的全部内容（含"升级步骤"等通用小节）
  intro: string
  // 逐组件段落
  sections: MigrationSection[]
}

// 解析 ### 标题行：`### Toast (操作反馈)` → { component:'Toast', category:'操作反馈' }。
// 容忍全角/半角括号与缺省分类。
function parseHeading(line: string): { component: string; category: string } {
  const text = line.replace(/^###\s+/, '').trim()
  const m = text.match(/^(\S+)\s*[（(]\s*(.*?)\s*[）)]\s*$/)
  if (m) return { component: m[1], category: m[2] }
  // 没有括号分类，取首个 token 作组件名
  return { component: text.split(/\s+/)[0] ?? text, category: '' }
}

export function parseMigrationDoc(md: string): ParsedMigration {
  const lines = md.split('\n')

  // 主标题：首个 `# `
  let title = ''
  for (const l of lines) {
    const m = l.match(/^#\s+(.+)$/)
    if (m) {
      title = m[1].trim()
      break
    }
  }

  // 找出所有 `### ` 组件段的起始行号
  const headingIdx: number[] = []
  lines.forEach((l, i) => {
    if (/^###\s+/.test(l)) headingIdx.push(i)
  })

  // intro = 第一个 ### 之前的全部（去尾部空白）
  const introEnd = headingIdx.length ? headingIdx[0] : lines.length
  const intro = lines.slice(0, introEnd).join('\n').trim()

  const sections: MigrationSection[] = []
  for (let k = 0; k < headingIdx.length; k++) {
    const start = headingIdx[k]
    const end = k + 1 < headingIdx.length ? headingIdx[k + 1] : lines.length
    const raw = lines.slice(start, end).join('\n').trim()
    const { component, category } = parseHeading(lines[start])
    sections.push({ component, category, raw })
  }

  return { title, intro, sections }
}

// 大小写不敏感地按组件名筛选段落。names 为空时返回全部。
export function filterSections(
  sections: MigrationSection[],
  names: string[]
): MigrationSection[] {
  if (!names.length) return sections
  const want = new Set(names.map((n) => n.toLowerCase()))
  return sections.filter((s) => want.has(s.component.toLowerCase()))
}
