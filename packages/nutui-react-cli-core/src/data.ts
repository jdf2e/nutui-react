// 数据查询原语。dataDir 由各叶子包通过 CliConfig.dataDir 注入（各包用 import.meta.url
// 相对定位自己的随包 data/ 快照根，其下为 versions.json + v{tag}/ 多版本目录）。
//
// 多版本：dataDir 不再直接含 meta.json，而是 dataDir/versions.json + dataDir/v{tag}/meta.json。
// 命令层先 detectVersion 得到目标版本，再 resolveSnapshotDir 路由到某个 v{tag}/ 目录（snapshotDir），
// 之后所有读取都基于该 snapshotDir。
import fs from 'node:fs'
import path from 'node:path'
import type { Component, Lang, Meta, VersionsIndex } from './types.js'

// 按快照目录缓存 meta，避免重复读盘。快照目录内容在进程生命周期内不变。
const metaCache = new Map<string, Meta>()

export function loadMetaByDir(snapshotDir: string): Meta {
  const cached = metaCache.get(snapshotDir)
  if (cached) return cached
  const metaPath = path.join(snapshotDir, 'meta.json')
  if (!fs.existsSync(metaPath)) {
    throw new Error(
      `未找到打包数据 ${metaPath}。若为源码开发，请先运行 pnpm run build（或 pnpm run prepare-data）。`
    )
  }
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8')) as Meta
  metaCache.set(snapshotDir, meta)
  return meta
}

// versions.json 缓存（按 dataDir）。
const versionsCache = new Map<string, VersionsIndex>()

export function loadVersionsIndex(dataDir: string): VersionsIndex {
  const cached = versionsCache.get(dataDir)
  if (cached) return cached
  const p = path.join(dataDir, 'versions.json')
  if (!fs.existsSync(p)) {
    throw new Error(
      `未找到 ${p}。若为源码开发，请先运行 pnpm run prepare-data 生成多版本快照。`
    )
  }
  const idx = JSON.parse(fs.readFileSync(p, 'utf-8')) as VersionsIndex
  versionsCache.set(dataDir, idx)
  return idx
}

// 把不带/带 v 前缀的 tag 串统一成快照目录名 v{tag}。
function snapshotDirFor(dataDir: string, tag: string): string {
  const clean = tag.replace(/^v/, '')
  return path.join(dataDir, `v${clean}`)
}

/**
 * 把一个完整版本号路由到最接近的历史快照目录（复刻 antd loader 的解析顺序）。
 * 1. 精确 minor 命中：versions.majors[vX].minors["X.Y"] → data/v{tag}/
 * 2. 最近不超过请求 minor 的旧 minor
 * 3. 回退该 major 的 latest 主快照
 * 4. major 不存在 → 回退 defaultMajor 的 latest，stderr 提示
 * 返回存在的 snapshotDir 绝对路径。
 */
export function resolveSnapshotDir(dataDir: string, version: string): string {
  const idx = loadVersionsIndex(dataDir)
  const parts = version.split('.')
  const major = `v${parts[0]}`

  const majorIndex = idx.majors[major]

  // major 不存在 → 回退 defaultMajor
  if (!majorIndex) {
    const fb = idx.majors[idx.defaultMajor]
    process.stderr.write(
      `[nutui-cli] 未找到 NutUI ${major} 的离线数据，回退到默认版本 ${idx.defaultMajor}（${fb?.latest ?? '未知'}）。\n`
    )
    return snapshotDirFor(dataDir, fb.latest)
  }

  const tryDir = (tag: string): string | null => {
    const dir = snapshotDirFor(dataDir, tag)
    return fs.existsSync(path.join(dir, 'meta.json')) ? dir : null
  }

  // 不是可识别的 major.minor.patch → 直接用该 major latest
  if (parts[1] === undefined || parts[1] === '') {
    return tryDir(majorIndex.latest) ?? snapshotDirFor(dataDir, majorIndex.latest)
  }

  const minorKey = `${parts[0]}.${parts[1]}`

  // 1. 精确 minor 命中
  if (majorIndex.minors[minorKey]) {
    const dir = tryDir(majorIndex.minors[minorKey])
    if (dir) return dir
  }

  // 2. 最近不超过请求 minor 的旧 minor
  const requestedMinor = parseInt(parts[1], 10)
  const availableMinors = Object.keys(majorIndex.minors)
    .filter((k) => k.startsWith(`${parts[0]}.`))
    .sort((a, b) => parseInt(a.split('.')[1], 10) - parseInt(b.split('.')[1], 10))
  let bestMinorKey: string | undefined
  for (const m of availableMinors) {
    if (parseInt(m.split('.')[1], 10) <= requestedMinor) bestMinorKey = m
  }
  if (bestMinorKey && majorIndex.minors[bestMinorKey]) {
    const dir = tryDir(majorIndex.minors[bestMinorKey])
    if (dir) return dir
  }

  // 3. 回退该 major latest
  return tryDir(majorIndex.latest) ?? snapshotDirFor(dataDir, majorIndex.latest)
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
  snapshotDir: string,
  component: Component,
  lang: Lang
): string | null {
  const file = path.join(snapshotDir, 'docs', component.id, `${lang}.md`)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null
}

// 列出组件的全部 demo 文件名（不含扩展名，如 demo1），按序号排序。
export function listDemos(snapshotDir: string, component: Component): string[] {
  const dir = path.join(snapshotDir, 'demos', component.id)
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
  snapshotDir: string,
  component: Component,
  name: string
): string | null {
  // 防御路径穿越：确保 name 中不包含路径分隔符
  if (name.includes('/') || name.includes('\\')) {
    return null
  }
  const base = name.endsWith('.tsx') ? name : `${name}.tsx`
  const file = path.join(snapshotDir, 'demos', component.id, base)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null
}
