// 把某个 tag 快照的 meta/components.json 裁剪为叶子包自包含的 data/v{tag}/ 目录树。
// 平台差异通过参数注入：H5 取 docs.h5/enUS + demos.h5 + api；Taro 取 docs.taro + demos.taro + apiTaro。
//
// 数据来源改为「某个 worktree（tag checkout）+ 其 meta」而非仓库根，从而支持多版本：
// sync.mjs 为每个入选 tag 产出 worktree + meta，叶子包 prepare-data 循环调本函数把每份
// 裁剪到 data/v{tag}/。
// DO NOT manual edit the output (data/). Run: pnpm run prepare-data
import fs from 'node:fs'
import path from 'node:path'

// meta 里的路径始终是 posix 相对仓库根路径。从 srcRepoRoot（worktree）取源文件。
function copyRepoFile(srcRepoRoot, relPosixPath, destAbs) {
  const srcAbs = path.join(srcRepoRoot, relPosixPath)
  if (!fs.existsSync(srcAbs)) return false
  fs.mkdirSync(path.dirname(destAbs), { recursive: true })
  fs.copyFileSync(srcAbs, destAbs)
  return true
}

/**
 * 把一份 tag 快照裁剪进叶子包的某个版本目录。
 * @param {object} opts
 * @param {string} opts.srcMetaPath  该 tag 的 meta/components.json 绝对路径（sync 产出）
 * @param {string} opts.srcRepoRoot  该 tag 的 worktree 根（复制 docs/demos 源文件用）
 * @param {string} opts.outDir       输出目录（如 <pkg>/data/v3.1.0），内部写 meta.json + docs/ + demos/
 * @param {Record<string,string>} opts.docKeys  lang -> meta.docs 的 key。{zh:'h5', en:'enUS'} 或 {zh:'taro'}
 * @param {'h5'|'taro'} opts.demoKey  取 meta.demos 的哪一端
 * @param {'api'|'apiTaro'} opts.apiField  取哪一端的 API 表，归一写入快照的 `api` 字段
 * @returns {{ docCount:number, demoCount:number, missing:number, libVersion:string }}
 */
export function prepareData({ srcMetaPath, srcRepoRoot, outDir, docKeys, demoKey, apiField }) {
  const meta = JSON.parse(fs.readFileSync(srcMetaPath, 'utf-8'))

  // 全量重建该版本目录，避免残留上一次的组件。
  fs.rmSync(outDir, { recursive: true, force: true })
  fs.mkdirSync(outDir, { recursive: true })

  // 1. meta.json：把对应端的 API 归一到 `api`，删除 apiTaro，缩减 docs/demos 到本端，
  //    使运行时代码只读 `api` / 只需 <lang>.md，无需感知平台。
  const langKeys = Object.keys(docKeys)
  const slimComponents = {}
  for (const [id, c] of Object.entries(meta.components)) {
    const api = c[apiField] || { tables: [] }
    const docs = {}
    for (const lang of langKeys) docs[lang] = c.docs?.[docKeys[lang]] ?? null
    slimComponents[id] = {
      ...c,
      api,
      docs,
      demos: c.demos?.[demoKey] ?? [],
    }
    delete slimComponents[id].apiTaro
  }
  const slimMeta = { ...meta, components: slimComponents }
  fs.writeFileSync(
    path.join(outDir, 'meta.json'),
    `${JSON.stringify(slimMeta, null, 2)}\n`
  )

  let docCount = 0
  let demoCount = 0
  const missing = []

  for (const c of Object.values(meta.components)) {
    // 2. docs：按 lang 复制为 docs/<id>/<lang>.md（zh.md / en.md）。
    for (const lang of langKeys) {
      const rel = c.docs && c.docs[docKeys[lang]]
      if (!rel) continue
      const ok = copyRepoFile(srcRepoRoot, rel, path.join(outDir, 'docs', c.id, `${lang}.md`))
      if (ok) docCount++
      else missing.push(rel)
    }

    // 3. demos：扁平放到 demos/<id>/<basename>.tsx（无 platform 子层）。
    const demoList = (c.demos && c.demos[demoKey]) || []
    for (const rel of demoList) {
      const base = path.posix.basename(rel)
      const ok = copyRepoFile(srcRepoRoot, rel, path.join(outDir, 'demos', c.id, base))
      if (ok) demoCount++
      else missing.push(rel)
    }
  }

  return { docCount, demoCount, missing: missing.length, libVersion: meta.libVersion, missingList: missing }
}

/**
 * 完整多版本快照构建：调 sync 遍历 tag，把每份裁剪到 data/v{tag}/，写 data/versions.json。
 * 供两个叶子包的 scripts/prepare-data.mjs 复用（只传自己的平台参数）。
 *
 * @param {object} opts
 * @param {string} opts.pkgDir  叶子包根目录绝对路径（其下写 data/）
 * @param {Record<string,string>} opts.docKeys
 * @param {'h5'|'taro'} opts.demoKey
 * @param {'api'|'apiTaro'} opts.apiField
 */
export async function prepareAllVersions({ pkgDir, docKeys, demoKey, apiField }) {
  const { sync } = await import('./sync.mjs')
  const platform = apiField === 'apiTaro' ? 'Taro' : 'React/H5'
  console.log(`🚀 building multi-version data snapshots (${platform}) for ${pkgDir} ...\n`)

  const { snapshots, versionsIndex, cleanup } = sync()
  const DATA_DIR = path.join(pkgDir, 'data')

  try {
    // 全量重建 data/：清掉旧的 v*/ 目录与 versions.json，避免残留已下线的版本。
    fs.rmSync(DATA_DIR, { recursive: true, force: true })
    fs.mkdirSync(DATA_DIR, { recursive: true })

    for (const snap of snapshots) {
      const outDir = path.join(DATA_DIR, `v${snap.clean}`)
      const res = prepareData({
        srcMetaPath: snap.metaPath,
        srcRepoRoot: snap.worktreeDir,
        outDir,
        docKeys,
        demoKey,
        apiField,
      })
      console.log(
        `  ✅ v${snap.clean}: docs ${res.docCount} + demos ${res.demoCount}（libVersion ${res.libVersion}）`
      )
      if (res.missing) {
        console.log(`     ⚠️  ${res.missing} 个文件在 worktree 缺失（已跳过）`)
      }
    }

    // versions.json
    fs.writeFileSync(
      path.join(DATA_DIR, 'versions.json'),
      `${JSON.stringify(versionsIndex, null, 2)}\n`
    )
    console.log(`\n✅ 写入 data/versions.json（defaultMajor=${versionsIndex.defaultMajor}）`)
  } finally {
    cleanup()
    console.log('🧹 已清理临时 worktree')
  }
}
