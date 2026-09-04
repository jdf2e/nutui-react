// 命令间共享：版本检测 + 快照解析，以及组件名解析（未命中打印 did-you-mean 并退出）。
import {
  loadMetaByDir,
  loadVersionsIndex,
  resolveComponent,
  resolveSnapshotDir,
  suggestComponents,
} from '../data.js'
import { detectVersion, type VersionInfo } from '../version.js'
import type { CliConfig } from '../config.js'
import type { Component, Meta, OutputFormat } from '../types.js'

export interface ResolvedContext {
  meta: Meta
  snapshotDir: string
  versionInfo: VersionInfo
}

// 命令入口统一走这里：flag → detectVersion → resolveSnapshotDir → loadMetaByDir。
export function resolveContext(
  config: CliConfig,
  nutuiVersion?: string
): ResolvedContext {
  const versionsIndex = loadVersionsIndex(config.dataDir)
  const versionInfo = detectVersion({
    flag: nutuiVersion,
    cwd: process.cwd(),
    npmPackageName: config.npmPackageName,
    versionsIndex,
  })
  const snapshotDir = resolveSnapshotDir(config.dataDir, versionInfo.version)
  const meta = loadMetaByDir(snapshotDir)
  return { meta, snapshotDir, versionInfo }
}

// 文本格式的版本信息头，如 "NutUI React（H5）v3.1.0（来源：package.json）"。
export function versionHeaderText(
  config: CliConfig,
  info: VersionInfo
): string {
  const sourceLabel: Record<VersionInfo['source'], string> = {
    flag: '--nutui-version',
    node_modules: 'node_modules',
    'package.json': 'package.json',
    fallback: '默认',
  }
  return `${config.libLabel} v${info.version}（来源：${sourceLabel[info.source]}）`
}

// JSON 格式的 _meta 字段。
export function versionMeta(info: VersionInfo): {
  version: string
  major: string
  source: VersionInfo['source']
} {
  return { version: info.version, major: info.major, source: info.source }
}

export function resolveOrExit(
  config: CliConfig,
  meta: Meta,
  query: string
): Component {
  const comp = resolveComponent(meta, query)
  if (comp) return comp
  const suggestions = suggestComponents(meta, query)
  let msg = `未找到组件「${query}」。`
  if (suggestions.length) msg += ` 你是否想找：${suggestions.join(' / ')}？`
  msg += `\n运行 ${config.binName} list 查看全部组件。`
  process.stderr.write(`${msg}\n`)
  process.exit(1)
}

// 各命令共用的输出格式类型别名（避免重复 import）。
export type { OutputFormat }
