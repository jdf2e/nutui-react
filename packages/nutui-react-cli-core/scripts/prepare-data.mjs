// 读仓库根 meta/components.json，为某个 CLI 叶子包产出自包含的 data/ 快照。
// 平台差异通过参数注入：H5 取 docs.h5/enUS + demos.h5 + api；Taro 取 docs.taro + demos.taro + apiTaro。
// 会先自动重生成 meta（generate:meta），无需手动同步。
// 各叶子包的 scripts/prepare-data.mjs 只需 import 本函数并传入自己的参数。
// DO NOT manual edit the output (data/). Run: pnpm run prepare-data
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// core 包目录：packages/nutui-react-cli-core/scripts -> ..
const CORE_DIR = path.resolve(__dirname, '..')
// 仓库根：packages/nutui-react-cli-core -> ../..
const REPO_ROOT = path.resolve(CORE_DIR, '..', '..')
const META_PATH = path.join(REPO_ROOT, 'meta/components.json')
const BUILD_META_SCRIPT = path.join(REPO_ROOT, 'scripts/build-meta.mjs')

// 先重生成 meta 再读，确保快照与仓库源码（config/properties/demos/...）同步，
// 免去手动 generate:meta 的漏同步风险。build-meta 纯读源码且幂等，可安全重复执行。
function regenerateMeta() {
  if (!fs.existsSync(BUILD_META_SCRIPT)) {
    // 脱离 monorepo（如已发布包被重新 build），无源码可生成，沿用现有快照。
    console.log('ℹ️  未找到 build-meta 脚本，跳过 meta 重生成（沿用现有快照）')
    return
  }
  console.log('🔄 重新生成 meta/components.json（generate:meta）...')
  execFileSync(process.execPath, [BUILD_META_SCRIPT], { stdio: 'inherit' })
}

function readMeta() {
  try {
    regenerateMeta()
  } catch (err) {
    // meta 生成失败：有旧快照则告警后沿用，否则无从继续。
    if (fs.existsSync(META_PATH)) {
      console.warn(
        `⚠️  meta 重生成失败（${err.message}），沿用现有 ${path.relative(REPO_ROOT, META_PATH)}`
      )
    } else {
      console.error(
        `❌ meta 重生成失败且无现有快照：${err.message}\n` +
          `   请在仓库根手动执行：npm run generate:meta`
      )
      process.exit(1)
    }
  }
  if (!fs.existsSync(META_PATH)) {
    console.error(
      `❌ 未找到 ${path.relative(REPO_ROOT, META_PATH)}。\n` +
        `   它是构建产物，请先在仓库根执行：npm run generate:meta`
    )
    process.exit(1)
  }
  return JSON.parse(fs.readFileSync(META_PATH, 'utf-8'))
}

// meta 里的路径始终是 posix 相对仓库根路径，用 posix 取 basename，再 join 到本地。
function copyRepoFile(relPosixPath, destAbs) {
  const srcAbs = path.join(REPO_ROOT, relPosixPath)
  if (!fs.existsSync(srcAbs)) return false
  fs.mkdirSync(path.dirname(destAbs), { recursive: true })
  fs.copyFileSync(srcAbs, destAbs)
  return true
}

/**
 * 生成某叶子包的 data/ 快照。
 * @param {object} opts
 * @param {string} opts.pkgDir     叶子包根目录绝对路径（其下写入 data/）
 * @param {Record<string,string>} opts.docKeys  lang -> meta.docs 的 key。如 {zh:'h5', en:'enUS'} 或 {zh:'taro'}
 * @param {'h5'|'taro'} opts.demoKey  取 meta.demos 的哪一端
 * @param {'api'|'apiTaro'} opts.apiField  取哪一端的 API 表，归一写入快照的 `api` 字段
 */
export function prepareData({ pkgDir, docKeys, demoKey, apiField }) {
  console.log(
    `🚀 building data snapshot (${apiField === 'apiTaro' ? 'Taro' : 'React/H5'}) for ${path.relative(REPO_ROOT, pkgDir)} ...`
  )
  const meta = readMeta()
  const DATA_DIR = path.join(pkgDir, 'data')

  // 全量重建，避免残留上一版删掉的组件。
  fs.rmSync(DATA_DIR, { recursive: true, force: true })
  fs.mkdirSync(DATA_DIR, { recursive: true })

  // 1. meta.json：把对应端的 API 归一到 `api`，删除 apiTaro，缩减 docs/demos 到本端，
  //    使运行时代码只读 `api` / 只需 <lang>.md，无需感知平台。
  const langKeys = Object.keys(docKeys)
  const slimComponents = {}
  for (const [id, c] of Object.entries(meta.components)) {
    const api = c[apiField] || { tables: [] }
    // docs 归一：只保留本端支持的 lang，key 换成 lang 名（zh/en），值为原相对路径（仅用于存在性）。
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
    path.join(DATA_DIR, 'meta.json'),
    `${JSON.stringify(slimMeta, null, 2)}\n`
  )

  let docCount = 0
  let demoCount = 0
  const missing = []

  for (const c of Object.values(meta.components)) {
    // 2. docs：按 lang 复制为 data/docs/<id>/<lang>.md（zh.md / en.md）。
    for (const lang of langKeys) {
      const rel = c.docs && c.docs[docKeys[lang]]
      if (!rel) continue
      const ok = copyRepoFile(rel, path.join(DATA_DIR, 'docs', c.id, `${lang}.md`))
      if (ok) docCount++
      else missing.push(rel)
    }

    // 3. demos：扁平放到 data/demos/<id>/<basename>.tsx（无 platform 子层）。
    const demoList = (c.demos && c.demos[demoKey]) || []
    for (const rel of demoList) {
      const base = path.posix.basename(rel)
      const ok = copyRepoFile(rel, path.join(DATA_DIR, 'demos', c.id, base))
      if (ok) demoCount++
      else missing.push(rel)
    }
  }

  console.log(`✅ 写入 ${path.relative(pkgDir, DATA_DIR)}/`)
  console.log(`   meta.json + docs ${docCount} 份 + demos ${demoCount} 份`)
  if (missing.length) {
    console.log(`\n⚠️  ${missing.length} 个 meta 引用的文件在仓库中缺失（已跳过）：`)
    for (const m of missing.slice(0, 20)) console.log(`   - ${m}`)
    if (missing.length > 20) console.log(`   … 其余 ${missing.length - 20} 条省略`)
  }
}
