#!/usr/bin/env node
/**
 * 本地验证：默认就地写回 src/packages 下同一路径的组件 .scss（如 …/actionsheet/actionsheet.scss）。
 * 跳过 src/packages/**/demo.scss、demos、测试与快照（与 build.mjs ignore 一致）。
 * --mirror 只写 scale-verify/；不包含 build；自行 git diff / 恢复即可。
 */
import fs from 'node:fs/promises'
import path from 'path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const transform = require(path.resolve(process.cwd(), 'scripts/px-to-scale-px-in-component-scss.cjs'))

const repoRoot = process.cwd()
const packagesRoot = path.resolve(repoRoot, 'src/packages')
const outRoot = path.resolve(repoRoot, 'scale-verify')
const reportPath = path.resolve(outRoot, 'report.json')

const argv = new Set(process.argv.slice(2))
const shouldClean = argv.has('--clean')
const mirrorMode = argv.has('--mirror')
/** 默认覆盖 src/packages 原 .scss；传 --mirror 则只写 scale-verify/ */
const inPlace = !mirrorMode

if (mirrorMode && (argv.has('--in-place') || argv.has('-i'))) {
  console.error('[scale-verify] 不能同时使用 --mirror 与 --in-place / -i')
  process.exit(1)
}

function isScssFile(name) {
  return name.endsWith('.scss')
}

function shouldSkip(relPath) {
  const p = relPath.replaceAll('\\', '/')
  // 与 build.mjs 的 ignore 一致：**/demo.scss 不参与 px→scale 写回
  if (path.posix.basename(p) === 'demo.scss') return true
  if (p.includes('/demo/')) return true
  if (p.includes('/demos/')) return true
  if (p.includes('/__test__/')) return true
  if (p.includes('/__tests__/')) return true
  if (p.includes('/__snapshots__/')) return true
  if (p.startsWith('.scale-verify/')) return true
  return false
}

async function walkScssFiles(dir, base = dir, list = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const abs = path.resolve(dir, entry.name)
    const rel = path.relative(base, abs)
    if (entry.isDirectory()) {
      await walkScssFiles(abs, base, list)
      continue
    }
    if (!entry.isFile() || !isScssFile(entry.name)) continue
    if (shouldSkip(rel)) continue
    list.push(abs)
  }
  return list
}

async function ensureReportDir() {
  await fs.mkdir(outRoot, { recursive: true })
}

async function prepareOutputLayout() {
  if (shouldClean) {
    await fs.rm(outRoot, { recursive: true, force: true })
    console.log('[scale-verify] cleaned:', path.relative(repoRoot, outRoot))
    return
  }

  await fs.rm(outRoot, { recursive: true, force: true })
  await fs.mkdir(outRoot, { recursive: true })
}

async function main() {
  await prepareOutputLayout()
  if (shouldClean) {
    return
  }

  const files = await walkScssFiles(packagesRoot)
  files.sort()

  const changed = []
  for (const absFile of files) {
    const rel = path.relative(packagesRoot, absFile)
    const source = await fs.readFile(absFile, 'utf8')
    const transformed = transform(source)
    if (source === transformed) continue

    const targetFile = inPlace ? absFile : path.resolve(outRoot, rel)
    if (!inPlace) {
      await fs.mkdir(path.dirname(targetFile), { recursive: true })
    }
    await fs.writeFile(targetFile, transformed, 'utf8')
    changed.push(rel.replaceAll('\\', '/'))
  }

  await ensureReportDir()
  const scssWriteRoot = inPlace
    ? path.relative(repoRoot, packagesRoot).replaceAll('\\', '/')
    : path.relative(repoRoot, outRoot).replaceAll('\\', '/')

  const report = {
    generatedAt: new Date().toISOString(),
    mode: inPlace ? 'in-place' : 'mirror',
    overwriteSource: inPlace,
    /** 本次写入的 SCSS 根路径：原地为 src/packages，镜像为仓库根下 scale-verify */
    scssWriteRoot,
    /** 镜像模式下的实验目录；原地模式为 null */
    outDir: inPlace ? null : path.relative(repoRoot, outRoot).replaceAll('\\', '/'),
    reportPath: path.relative(repoRoot, reportPath).replaceAll('\\', '/'),
    totalScssFiles: files.length,
    changedFileCount: changed.length,
    changedFiles: changed,
  }
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8')

  console.log('[scale-verify] mode:', report.mode)
  if (!inPlace) {
    console.log('[scale-verify] outDir:', report.outDir)
  } else {
    console.log('[scale-verify] wrote into:', path.relative(repoRoot, packagesRoot))
  }
  console.log('[scale-verify] totalScssFiles:', report.totalScssFiles)
  console.log('[scale-verify] changedFileCount:', report.changedFileCount)
  console.log('[scale-verify] report:', path.relative(repoRoot, reportPath))
}

main().catch((err) => {
  console.error('[scale-verify] failed:', err)
  process.exitCode = 1
})
