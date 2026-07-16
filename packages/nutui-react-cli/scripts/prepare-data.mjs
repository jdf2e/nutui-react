// 读仓库根 meta/components.json，为 @nutui/nutui-react-cli 产出自包含的 data/ 快照。
// 仅 React（H5）端：docs 取 h5(中文)/enUS(英文)，demos 取 h5。忽略 zhTW / taro 维度。
// 让发布后的 CLI 无需依赖仓库源码即可离线运行 doc / demo 命令。
// 会先自动重生成 meta（generate:meta），无需手动同步。
// DO NOT manual edit the output (data/). Run: pnpm run prepare-data
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PKG_DIR = path.resolve(__dirname, '..')
// 仓库根：packages/nutui-react-cli/scripts -> ../../..
const REPO_ROOT = path.resolve(PKG_DIR, '..', '..')
const META_PATH = path.join(REPO_ROOT, 'meta/components.json')
const BUILD_META_SCRIPT = path.join(REPO_ROOT, 'scripts/build-meta.mjs')
const DATA_DIR = path.join(PKG_DIR, 'data')

// meta.docs 的 key -> CLI 语言维度。仅保留 React/H5 端用到的两种。
const DOC_KEYS = ['h5', 'enUS']

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

function main() {
  console.log('🚀 building @nutui/nutui-react-cli data snapshot (React/H5) ...')
  const meta = readMeta()

  // 全量重建，避免残留上一版删掉的组件。
  fs.rmSync(DATA_DIR, { recursive: true, force: true })
  fs.mkdirSync(DATA_DIR, { recursive: true })

  // 1. meta.json 逐字复制。
  fs.copyFileSync(META_PATH, path.join(DATA_DIR, 'meta.json'))

  let docCount = 0
  let demoCount = 0
  const missing = []

  for (const c of Object.values(meta.components)) {
    // 2. docs：仅 h5 / enUS 的非 null 路径。
    for (const key of DOC_KEYS) {
      const rel = c.docs && c.docs[key]
      if (!rel) continue
      const ok = copyRepoFile(rel, path.join(DATA_DIR, 'docs', c.id, `${key}.md`))
      if (ok) docCount++
      else missing.push(rel)
    }

    // 3. demos：仅 H5，扁平放到 data/demos/<id>/<basename>.tsx（无 platform 子层）。
    const h5Demos = (c.demos && c.demos.h5) || []
    for (const rel of h5Demos) {
      const base = path.posix.basename(rel)
      const ok = copyRepoFile(rel, path.join(DATA_DIR, 'demos', c.id, base))
      if (ok) demoCount++
      else missing.push(rel)
    }
  }

  console.log(`✅ 写入 ${path.relative(PKG_DIR, DATA_DIR)}/`)
  console.log(`   meta.json + docs ${docCount} 份 + demos ${demoCount} 份`)
  if (missing.length) {
    console.log(`\n⚠️  ${missing.length} 个 meta 引用的文件在仓库中缺失（已跳过）：`)
    for (const m of missing.slice(0, 20)) console.log(`   - ${m}`)
    if (missing.length > 20) console.log(`   … 其余 ${missing.length - 20} 条省略`)
  }
}

main()
