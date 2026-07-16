// 定位随包发布的 data/ 快照，加载 meta 与 doc/demo 文件。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Component, Lang, Meta } from './types.js'
import { LANG_TO_DOC_KEY } from './types.js'

// dist/cli.js 运行时，data/ 与 dist/ 同级（见 package.json files: [dist, data]）。
const DATA_DIR = fileURLToPath(new URL('../data/', import.meta.url))

let cachedMeta: Meta | null = null

export function loadMeta(): Meta {
  if (cachedMeta) return cachedMeta
  const metaPath = path.join(DATA_DIR, 'meta.json')
  if (!fs.existsSync(metaPath)) {
    throw new Error(
      `未找到打包数据 ${metaPath}。若为源码开发，请先运行 pnpm run build（或 pnpm run prepare-data）。`
    )
  }
  cachedMeta = JSON.parse(fs.readFileSync(metaPath, 'utf-8')) as Meta
  return cachedMeta
}

// 组件名大小写不敏感解析：Button / button / BUTTON 均可。命中返回组件，否则 null。
export function resolveComponent(meta: Meta, query: string): Component | null {
  const id = query.trim().toLowerCase()
  return meta.components[id] ?? null
}

// Levenshtein 编辑距离，用于未命中时的 did-you-mean 建议。
function editDistance(a: string, b: string): number {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [
    i,
    ...Array(b.length).fill(0),
  ])
  for (let j = 0; j <= b.length; j++) dp[0][j] = j
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      )
    }
  }
  return dp[a.length][b.length]
}

// 返回与 query 最接近的若干组件名（用于「did you mean」）。
export function suggestComponents(
  meta: Meta,
  query: string,
  limit = 3
): string[] {
  const q = query.trim().toLowerCase()
  return Object.values(meta.components)
    .map((c) => ({ name: c.name, d: editDistance(q, c.id) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, limit)
    .filter((x) => x.d <= Math.max(3, Math.ceil(q.length / 2)))
    .map((x) => x.name)
}

// 读取组件某语言的文档原文。缺失返回 null。
export function readDoc(component: Component, lang: Lang): string | null {
  const key = LANG_TO_DOC_KEY[lang]
  const file = path.join(DATA_DIR, 'docs', component.id, `${key}.md`)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null
}

// 列出组件的全部 H5 demo 文件名（不含扩展名，如 demo1），按序号排序。
export function listDemos(component: Component): string[] {
  const dir = path.join(DATA_DIR, 'demos', component.id)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => f.replace(/\.tsx$/, ''))
    .sort((a, b) => {
      const na = Number(a.replace(/\D/g, ''))
      const nb = Number(b.replace(/\D/g, ''))
      return Number.isNaN(na) || Number.isNaN(nb) ? a.localeCompare(b) : na - nb
    })
}

// 读取组件某个 demo 的源码。name 形如 demo1（也容忍带 .tsx）。缺失返回 null。
export function readDemo(component: Component, name: string): string | null {
  // 防御路径穿越：确保 name 中不包含路径分隔符
  if (name.includes('/') || name.includes('\\')) {
    return null
  }
  const base = name.endsWith('.tsx') ? name : `${name}.tsx`
  const file = path.join(DATA_DIR, 'demos', component.id, base)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null
}
