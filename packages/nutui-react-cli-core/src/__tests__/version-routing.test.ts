import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { resolveSnapshotDir } from '../data.js'
import { detectVersion } from '../version.js'
import type { VersionsIndex } from '../types.js'

// 手造一个多版本 data 目录：versions.json + 各 v{tag}/meta.json（仅需能被 existsSync 命中）。
const VERSIONS: VersionsIndex = {
  defaultMajor: 'v4',
  majors: {
    v3: { latest: '3.1.0', stable: true, minors: { '3.0': '3.0.20', '3.1': '3.1.0' } },
    v4: { latest: '4.0.0-beta.7', stable: false, minors: { '4.0': '4.0.0-beta.7' } },
  },
}

let dataDir: string

beforeAll(() => {
  dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nutui-cli-test-'))
  fs.writeFileSync(
    path.join(dataDir, 'versions.json'),
    JSON.stringify(VERSIONS, null, 2)
  )
  for (const tag of ['3.0.20', '3.1.0', '4.0.0-beta.7']) {
    const dir = path.join(dataDir, `v${tag}`)
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(
      path.join(dir, 'meta.json'),
      JSON.stringify({ libVersion: tag, components: {} })
    )
  }
})

afterAll(() => {
  fs.rmSync(dataDir, { recursive: true, force: true })
})

describe('resolveSnapshotDir', () => {
  it('精确 minor 命中：3.1.0 → v3.1.0', () => {
    expect(resolveSnapshotDir(dataDir, '3.1.0')).toBe(path.join(dataDir, 'v3.1.0'))
  })

  it('最近不超过的旧 minor：3.0.5 → v3.0.20（minor 3.0）', () => {
    expect(resolveSnapshotDir(dataDir, '3.0.5')).toBe(path.join(dataDir, 'v3.0.20'))
  })

  it('请求的 minor 高于已有：3.5.0 → 回退最近的 3.1 → v3.1.0', () => {
    expect(resolveSnapshotDir(dataDir, '3.5.0')).toBe(path.join(dataDir, 'v3.1.0'))
  })

  it('v4 预发布精确命中：4.0.0-beta.7 → v4.0.0-beta.7', () => {
    expect(resolveSnapshotDir(dataDir, '4.0.0-beta.7')).toBe(
      path.join(dataDir, 'v4.0.0-beta.7')
    )
  })

  it('未知 major：99.0.0 → 回退 defaultMajor(v4) latest，并 stderr 提示', () => {
    const spy = vi.spyOn(process.stderr, 'write').mockImplementation(() => true)
    expect(resolveSnapshotDir(dataDir, '99.0.0')).toBe(
      path.join(dataDir, 'v4.0.0-beta.7')
    )
    expect(spy).toHaveBeenCalledOnce()
    spy.mockRestore()
  })

  it('只给 major：3 → v3 latest（v3.1.0）', () => {
    expect(resolveSnapshotDir(dataDir, '3')).toBe(path.join(dataDir, 'v3.1.0'))
  })
})

describe('detectVersion', () => {
  const base = { npmPackageName: '@nutui/nutui-react', versionsIndex: VERSIONS }

  it('flag 优先，保留预发布：4.0.0-beta.7', () => {
    const r = detectVersion({ ...base, flag: '4.0.0-beta.7' })
    expect(r).toMatchObject({ version: '4.0.0-beta.7', major: 'v4', source: 'flag' })
  })

  it('flag 只给 major：3 → coerce 3.0.0', () => {
    const r = detectVersion({ ...base, flag: '3' })
    expect(r).toMatchObject({ version: '3.0.0', major: 'v3', source: 'flag' })
  })

  it('flag 带 range 前缀：^3.1.0 → coerce 3.1.0', () => {
    const r = detectVersion({ ...base, flag: '^3.1.0' })
    expect(r).toMatchObject({ version: '3.1.0', major: 'v3', source: 'flag' })
  })

  it('flag 的 major 不存在：99 → 回退 defaultMajor v4 latest', () => {
    const spy = vi.spyOn(process.stderr, 'write').mockImplementation(() => true)
    const r = detectVersion({ ...base, flag: '99.0.0' })
    expect(r).toMatchObject({ version: '4.0.0-beta.7', major: 'v4' })
    spy.mockRestore()
  })

  it('无 flag、无项目文件：fallback 到 defaultMajor latest', () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nutui-empty-'))
    const r = detectVersion({ ...base, cwd: tmp })
    expect(r).toMatchObject({
      version: '4.0.0-beta.7',
      major: 'v4',
      source: 'fallback',
    })
    fs.rmSync(tmp, { recursive: true, force: true })
  })

  it('node_modules 检测优先于 package.json', () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nutui-proj-'))
    fs.mkdirSync(path.join(tmp, 'node_modules/@nutui/nutui-react'), {
      recursive: true,
    })
    fs.writeFileSync(
      path.join(tmp, 'node_modules/@nutui/nutui-react/package.json'),
      JSON.stringify({ version: '3.0.9' })
    )
    fs.writeFileSync(
      path.join(tmp, 'package.json'),
      JSON.stringify({ dependencies: { '@nutui/nutui-react': '^4.0.0-beta.7' } })
    )
    const r = detectVersion({ ...base, cwd: tmp })
    expect(r).toMatchObject({ version: '3.0.9', major: 'v3', source: 'node_modules' })
    fs.rmSync(tmp, { recursive: true, force: true })
  })

  it('无 node_modules 时读 package.json 依赖声明', () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nutui-proj2-'))
    fs.writeFileSync(
      path.join(tmp, 'package.json'),
      JSON.stringify({ devDependencies: { '@nutui/nutui-react': '~3.1.0' } })
    )
    const r = detectVersion({ ...base, cwd: tmp })
    expect(r).toMatchObject({ version: '3.1.0', major: 'v3', source: 'package.json' })
    fs.rmSync(tmp, { recursive: true, force: true })
  })

  it('非 semver 依赖声明（workspace:*）→ fallback', () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nutui-proj3-'))
    fs.writeFileSync(
      path.join(tmp, 'package.json'),
      JSON.stringify({ dependencies: { '@nutui/nutui-react': 'workspace:*' } })
    )
    const r = detectVersion({ ...base, cwd: tmp })
    expect(r.source).toBe('fallback')
    expect(r.major).toBe('v4')
    fs.rmSync(tmp, { recursive: true, force: true })
  })
})
