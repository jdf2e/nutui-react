// 多版本数据同步：遍历 NutUI git tag，为每个「每 minor 最高 patch」的 tag 生成一份
// meta/components.json 快照（放在该 tag 的 worktree 内），并产出 versions.json 索引。
//
// 与 antd 的 scripts/sync.ts 对应，差异：
//   - NutUI 的随包数据是「meta.json + docs/ + demos/ 目录树」而非单个大 JSON，故 sync
//     只负责产出 worktree + meta，真正裁剪到叶子包 data/ 由 prepare-data 消费；
//   - properties 一律现场重生成（runCreateProperties）：实测 3.x 已提交的
//     scripts/properties.json 是滞后产物（少 200+ 条、API 覆盖率更低），现补更准；
//   - worktree 的清理交回调用方（prepare-data 复制完源文件后再 cleanup）。
//
// sync() 返回 { snapshots, versionsIndex, cleanup }：
//   snapshots: Array<{ tag, major, worktreeDir, metaPath }>  已按 tag 升序
//   versionsIndex: { defaultMajor, majors: { vX: { latest, stable, minors } } }
//   cleanup(): 移除所有本次创建的 worktree
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'
import versionsConfig from './versions.config.mjs'
import { buildMeta } from './build-meta.mjs'
import { runCreateProperties } from './create-properties.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// packages/nutui-react-cli-core/scripts -> 仓库根（用于 git 命令的 cwd）
const REPO_ROOT = path.resolve(__dirname, '..', '..', '..')

const git = (args, opts = {}) =>
  execFileSync('git', args, { encoding: 'utf-8', ...opts })

// 拉取远端全部 v3/v4 tag（升序）。只列 refs，不落地对象。
function listRemoteTags(repo) {
  const out = git([
    'ls-remote',
    '--tags',
    '--sort=v:refname',
    repo,
    'refs/tags/v3*',
    'refs/tags/v4*',
  ])
  return out
    .split('\n')
    .filter((line) => line && !line.includes('^{}'))
    .map((line) => line.replace(/.*refs\/tags\//, ''))
}

// tag 串（可能带 v 前缀）→ { major:'v3', minor:'3.0', patch:0, prerelease:bool, raw }
function parseTag(tag) {
  const clean = tag.replace(/^v/, '')
  const m = clean.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/)
  if (!m) return null
  return {
    raw: tag,
    clean,
    majorNum: Number(m[1]),
    major: `v${m[1]}`,
    minor: `${m[1]}.${m[2]}`,
    patch: Number(m[3]),
    prerelease: m[4] != null,
  }
}

// 每 minor 取最高 patch。默认排除预发布；includePrerelease 为 true 时（如 v4 全 beta）
// 在「该 minor 没有稳定 tag」时才纳入最高的预发布。
function buildMinorMap(tags, includePrerelease) {
  const parsed = tags.map(parseTag).filter(Boolean)
  const byMinor = new Map() // minor -> best parsed tag
  const better = (a, b) => {
    // 稳定优先于预发布；同稳定性比 patch；patch 相同再比预发布串（beta.7 > beta.6）
    if (a.prerelease !== b.prerelease) return a.prerelease ? b : a
    if (a.patch !== b.patch) return a.patch > b.patch ? a : b
    return (a.raw > b.raw ? a : b)
  }
  for (const t of parsed) {
    if (t.prerelease && !includePrerelease) continue
    const cur = byMinor.get(t.minor)
    byMinor.set(t.minor, cur ? better(cur, t) : t)
  }
  return byMinor
}

// 确保本地存在该 tag 对象；没有就从远端 fetch 到本地同名 tag（幂等、无害）。
function ensureTagLocally(repo, tag) {
  try {
    git(['rev-parse', '--verify', '--quiet', `refs/tags/${tag}`], {
      cwd: REPO_ROOT,
      stdio: 'pipe',
    })
    return
  } catch {
    // 本地无此 tag
  }
  console.log(`  fetch tag ${tag} ...`)
  git(['fetch', repo, `refs/tags/${tag}:refs/tags/${tag}`], {
    cwd: REPO_ROOT,
    stdio: 'pipe',
  })
}

// 为 tag 建 detached worktree，返回其路径。
function addWorktree(tag) {
  const dir = path.join(os.tmpdir(), `nutui-sync-${tag.replace(/[^\w.-]/g, '_')}`)
  if (fs.existsSync(dir)) {
    // 残留则先移除（--force 容忍脏树）
    try {
      git(['worktree', 'remove', dir, '--force'], { cwd: REPO_ROOT, stdio: 'pipe' })
    } catch {
      fs.rmSync(dir, { recursive: true, force: true })
    }
  }
  git(['worktree', 'add', '--detach', dir, tag], { cwd: REPO_ROOT, stdio: 'pipe' })
  return dir
}

// worktree 内路径解析（3.x / 4.x 结构一致）。
function repoPaths(worktreeDir) {
  return {
    configPath: path.join(worktreeDir, 'src/config.json'),
    packagesDir: path.join(worktreeDir, 'src/packages'),
    variablesPath: path.join(worktreeDir, 'src/styles/variables.scss'),
    pkgJsonPath: path.join(worktreeDir, 'package.json'),
    specDir: path.join(worktreeDir, 'src/types/spec'),
    propertiesPath: path.join(worktreeDir, 'scripts/properties.json'),
    propertiesTaroPath: path.join(worktreeDir, 'scripts/properties-taro.json'),
    metaPath: path.join(worktreeDir, 'meta/components.json'),
  }
}

// 现补 properties（H5 必补；Taro 仅在有 doc.taro.md 时补，否则降级为空表 + warn）。
function preparePropertiesInWorktree(worktreeDir, p) {
  const hasTaroDoc = () => {
    // 抽查任一组件是否有 doc.taro.md；有就认为该 tag 支持 taro 端抽取。
    try {
      const cfg = JSON.parse(fs.readFileSync(p.configPath, 'utf-8'))
      for (const nav of cfg.nav) {
        for (const c of nav.packages) {
          const f = path.join(p.packagesDir, c.name.toLowerCase(), 'doc.taro.md')
          if (fs.existsSync(f)) return true
        }
      }
    } catch {
      /* ignore */
    }
    return false
  }

  runCreateProperties({
    configPath: p.configPath,
    packagesDir: p.packagesDir,
    docFileName: 'doc.md',
    outPath: p.propertiesPath,
  })

  if (hasTaroDoc()) {
    runCreateProperties({
      configPath: p.configPath,
      packagesDir: p.packagesDir,
      docFileName: 'doc.taro.md',
      outPath: p.propertiesTaroPath,
    })
  } else {
    console.log(`  ⚠️  该 tag 无 doc.taro.md，apiTaro 将为空表`)
  }
}

/**
 * 执行多版本同步。
 * @param {object} [opts]
 * @param {(tag:string)=>boolean} [opts.tagFilter] 只处理返回 true 的 tag（调试用）
 * @returns {{ snapshots: Array<{tag,major,worktreeDir,metaPath}>, versionsIndex: object, cleanup: ()=>void }}
 */
export function sync(opts = {}) {
  const cfg = versionsConfig
  const allTags = listRemoteTags(cfg.repo)
  console.log(`🔎 远端 tag 共 ${allTags.length} 个`)

  // 按 major 分桶取每 minor 最高 patch
  const majorKeys = Object.keys(cfg.majors) // ['v3','v4']
  const selected = [] // { tag, major, minor }
  const versionsIndex = { defaultMajor: cfg.defaultMajor, majors: {} }

  for (const majorKey of majorKeys) {
    const majorNum = Number(majorKey.replace('v', ''))
    const majorCfg = cfg.majors[majorKey]
    const tagsOfMajor = allTags.filter((t) => {
      const p = parseTag(t)
      return p && p.majorNum === majorNum
    })
    const minorMap = buildMinorMap(tagsOfMajor, majorCfg.includePrerelease)
    if (!minorMap.size) {
      console.warn(`  ⚠️  ${majorKey} 无入选 tag，跳过`)
      continue
    }
    // minors 索引（不带 v 前缀）+ latest（最高 minor 的 tag）
    const minors = {}
    let latest = null
    const sortedMinors = [...minorMap.keys()].sort(
      (a, b) => Number(a.split('.')[1]) - Number(b.split('.')[1])
    )
    for (const minor of sortedMinors) {
      const t = minorMap.get(minor)
      minors[minor] = t.clean
      selected.push({ tag: t.raw, clean: t.clean, major: majorKey, minor })
      latest = t.clean
    }
    versionsIndex.majors[majorKey] = {
      latest,
      stable: majorCfg.stable !== false && sortedMinors.some((mn) => !minorMap.get(mn).prerelease),
      minors,
    }
  }

  // 可选过滤（调试：只跑部分 tag）
  const finalSelected = opts.tagFilter
    ? selected.filter((s) => opts.tagFilter(s.tag))
    : selected

  console.log(
    `📦 入选快照 ${finalSelected.length} 个：${finalSelected.map((s) => s.tag).join(', ')}`
  )

  const createdWorktrees = []
  const snapshots = []

  for (const sel of finalSelected) {
    console.log(`\n=== ${sel.tag}（${sel.major}）===`)
    ensureTagLocally(cfg.repo, sel.tag)
    const worktreeDir = addWorktree(sel.tag)
    createdWorktrees.push(worktreeDir)
    const p = repoPaths(worktreeDir)

    preparePropertiesInWorktree(worktreeDir, p)

    const res = buildMeta({
      repoRoot: worktreeDir,
      configPath: p.configPath,
      propertiesPath: p.propertiesPath,
      propertiesTaroPath: p.propertiesTaroPath,
      packagesDir: p.packagesDir,
      variablesPath: p.variablesPath,
      pkgJsonPath: p.pkgJsonPath,
      specDir: p.specDir,
      cssVarPrefix: cfg.majors[sel.major].cssVarPrefix,
      out: p.metaPath,
    })
    console.log(
      `  ✅ meta：组件 ${res.componentCount}，有 API(H5) ${res.apiComponentCount}，token ${res.globalTokens}，libVersion ${res.libVersion}`
    )

    // 校验：meta 必须有 libVersion 且组件非空
    if (!res.libVersion || res.componentCount === 0) {
      throw new Error(`${sel.tag} 的 meta 校验失败：libVersion=${res.libVersion} componentCount=${res.componentCount}`)
    }

    snapshots.push({
      tag: sel.tag,
      clean: sel.clean,
      major: sel.major,
      worktreeDir,
      metaPath: p.metaPath,
    })
  }

  const cleanup = () => {
    for (const dir of createdWorktrees) {
      try {
        git(['worktree', 'remove', dir, '--force'], { cwd: REPO_ROOT, stdio: 'pipe' })
      } catch {
        fs.rmSync(dir, { recursive: true, force: true })
      }
    }
  }

  return { snapshots, versionsIndex, cleanup }
}

// 独立调试：node scripts/sync.mjs [tagSubstr]
function main() {
  const filterArg = process.argv[2]
  const { snapshots, versionsIndex, cleanup } = sync(
    filterArg ? { tagFilter: (t) => t.includes(filterArg) } : {}
  )
  console.log('\n=== versions.json ===')
  console.log(JSON.stringify(versionsIndex, null, 2))
  console.log(`\n快照 ${snapshots.length} 个（worktree 未清理，调试模式保留）`)
  if (process.env.NUTUI_SYNC_CLEANUP === '1') {
    cleanup()
    console.log('已清理 worktree')
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main()
}
