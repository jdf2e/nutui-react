// NutUI 目标版本检测：复刻 antd CLI 的四层回落，把 npm 包名参数化，供 H5 / Taro 共用。
// 解析顺序：--nutui-version → node_modules/<pkg> → 项目 package.json 依赖声明 → defaultMajor 兜底。
import fs from 'node:fs'
import path from 'node:path'
import semver from 'semver'
import type { VersionsIndex } from './types.js'

export interface VersionInfo {
  version: string // 解析出的完整版本号，如 '3.1.0' / '4.0.0-beta.7'
  major: string // 'v3' / 'v4'
  source: 'flag' | 'node_modules' | 'package.json' | 'fallback'
}

export interface DetectVersionOptions {
  flag?: string
  cwd?: string
  npmPackageName: string // '@nutui/nutui-react' | '@nutui/nutui-react-taro'
  versionsIndex: VersionsIndex
}

function toMajor(version: string): string {
  return `v${version.split('.')[0]}`
}

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8')) as T
  } catch {
    return null
  }
}

// 拿到完整版本后，若其 major 不在离线数据里，回退 defaultMajor 并提示。
function withKnownMajor(
  version: string,
  source: VersionInfo['source'],
  idx: VersionsIndex
): VersionInfo {
  const major = toMajor(version)
  if (idx.majors[major]) {
    return { version, major, source }
  }
  const fbMajor = idx.defaultMajor
  const fbVersion = idx.majors[fbMajor]?.latest ?? version
  process.stderr.write(
    `[nutui-cli] 未找到 NutUI ${major} 的离线数据，回退到默认版本 ${fbMajor}（${fbVersion}）。\n`
  )
  return { version: fbVersion, major: fbMajor, source }
}

export function detectVersion(opts: DetectVersionOptions): VersionInfo {
  const cwd = opts.cwd ?? process.cwd()
  const idx = opts.versionsIndex

  // 1. --nutui-version flag：先 parse 保留预发布串，再 coerce 兼容 "3"、"^3.1.0" 等。
  if (opts.flag) {
    const parsed =
      semver.parse(opts.flag) ??
      semver.coerce(opts.flag, { includePrerelease: true })
    if (parsed) {
      return withKnownMajor(parsed.version, 'flag', idx)
    }
    process.stderr.write(
      `[nutui-cli] Warning: --nutui-version "${opts.flag}" 不是有效的 semver，改用自动检测。\n`
    )
  }

  // 2. node_modules/<pkg>/package.json
  const nmPath = path.join(cwd, 'node_modules', opts.npmPackageName, 'package.json')
  if (fs.existsSync(nmPath)) {
    const pkg = readJson<{ version?: string }>(nmPath)
    if (pkg?.version) {
      return withKnownMajor(pkg.version, 'node_modules', idx)
    }
  }

  // 3. 项目 package.json 的 deps / devDeps / peerDeps 声明
  const pkgPath = path.join(cwd, 'package.json')
  if (fs.existsSync(pkgPath)) {
    const pkg = readJson<{
      dependencies?: Record<string, string>
      devDependencies?: Record<string, string>
      peerDependencies?: Record<string, string>
    }>(pkgPath)
    const dep =
      pkg?.dependencies?.[opts.npmPackageName] ??
      pkg?.devDependencies?.[opts.npmPackageName] ??
      pkg?.peerDependencies?.[opts.npmPackageName]
    if (dep) {
      const parsed =
        semver.parse(dep) ?? semver.coerce(dep, { includePrerelease: true })
      if (parsed) {
        return withKnownMajor(parsed.version, 'package.json', idx)
      }
      // 非 semver（如 'workspace:*' / '*'）→ 落到 fallback
    }
  }

  // 4. Fallback：defaultMajor 的 latest
  const fbMajor = idx.defaultMajor
  const fbVersion = idx.majors[fbMajor]?.latest ?? '0.0.0'
  return { version: fbVersion, major: fbMajor, source: 'fallback' }
}
