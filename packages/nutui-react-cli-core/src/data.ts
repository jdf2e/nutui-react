// 数据查询原语。DATA_DIR 由各叶子包通过 CliConfig.dataDir 注入（各包用 import.meta.url
// 相对定位自己的随包 data/ 快照），core 不再自行用 import.meta.url 定位。
import fs from 'node:fs'
import path from 'node:path'
import type { Component, Lang, Meta } from './types.js'

let cachedMeta: Meta | null = null

export function loadMeta(dataDir: string): Meta {
  if (cachedMeta) return cachedMeta
  const metaPath = path.join(dataDir, 'meta.json')
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

// 读取组件某语言的文档原文。快照期 prepare-data 已按 <lang>.md 落盘（zh.md / en.md），
// 故此处直接以 lang 寻址，无需 key 映射。缺失（如 Taro 无英文）返回 null。
export function readDoc(
  dataDir: string,
  component: Component,
  lang: Lang
): string | null {
  const file = path.join(dataDir, 'docs', component.id, `${lang}.md`)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null
}

// 列出组件的全部 demo 文件名（不含扩展名，如 demo1），按序号排序。
export function listDemos(dataDir: string, component: Component): string[] {
  const dir = path.join(dataDir, 'demos', component.id)
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
export function readDemo(
  dataDir: string,
  component: Component,
  name: string
): string | null {
  // 防御路径穿越：确保 name 中不包含路径分隔符
  if (name.includes('/') || name.includes('\\')) {
    return null
  }
  const base = name.endsWith('.tsx') ? name : `${name}.tsx`
  const file = path.join(dataDir, 'demos', component.id, base)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null
}
