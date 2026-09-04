// MCP 工具定义与处理器。复用 data.ts 原语，与 CLI 命令共享同一套多版本快照路由，
// 输出结构与各命令的 --format json 保持一致。工具名 = config.mcp.toolPrefix + 动词。
//
// 多版本：每个工具入参新增可选 nutuiVersion（与 CLI 的 --nutui-version 对齐）。handler
// 内部走同一套 detectVersion → resolveSnapshotDir → loadMetaByDir，路由到对应快照。
import {
  listDemos,
  loadMetaByDir,
  loadVersionsIndex,
  readDemo,
  readDoc,
  resolveComponent,
  resolveSnapshotDir,
  suggestComponents,
} from '../data.js'
import { detectVersion, type VersionInfo } from '../version.js'
import { createError, ErrorCodes } from '../error.js'
import type { CliConfig } from '../config.js'
import type { Component, Lang, Meta } from '../types.js'

function toMcpResult(data: unknown) {
  const isError =
    !!data &&
    typeof data === 'object' &&
    'error' in data &&
    (data as { error: unknown }).error === true
  const payload = {
    content: [{ type: 'text' as const, text: JSON.stringify(data) }],
  }
  return isError ? { ...payload, isError: true } : payload
}

// 解析组件名；未命中返回结构化错误（含 did-you-mean 建议），不退出进程。
function resolve(
  config: CliConfig,
  meta: Meta,
  query: string
): Component | ReturnType<typeof createError> {
  const comp = resolveComponent(meta, query)
  if (comp) return comp
  const suggestions = suggestComponents(meta, query)
  const listTool = `${config.mcp.toolPrefix}list`
  return createError(
    ErrorCodes.COMPONENT_NOT_FOUND,
    `未找到组件「${query}」。`,
    suggestions.length
      ? `你是否想找：${suggestions.join(' / ')}？或用 ${listTool} 查看全部组件。`
      : `用 ${listTool} 查看全部组件。`
  )
}

function isError(x: unknown): x is ReturnType<typeof createError> {
  return !!x && typeof x === 'object' && 'error' in x
}

// 所有工具均为只读、无副作用、幂等、不访问外部世界。
const TOOL_ANNOTATIONS = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const

// 语言参数描述：随 config.langs 生成，仅暴露该端支持的语言（Taro 只有 zh）。
function langEnumDesc(config: CliConfig): string {
  const parts = config.langs.map(
    (l) =>
      `${l}=${config.langLabel[l] ?? l}${l === config.defaultLang ? '（默认）' : ''}`
  )
  return `文档语言，${parts.join('，')}`
}

// 目标版本参数描述（各工具共用）。
const NUTUI_VERSION_DESC =
  '目标 NutUI 版本（如 3、3.1.0、4.0.0-beta.7）；省略则从项目 node_modules / package.json 自动检测，检测不到则用默认大版本'

function nutuiVersionProp() {
  return {
    nutuiVersion: {
      type: 'string',
      description: NUTUI_VERSION_DESC,
    },
  }
}

export function buildToolDefinitions(config: CliConfig) {
  const p = config.mcp.toolPrefix
  return [
    {
      name: `${p}list`,
      description: `列出全部 ${config.libLabel}组件（英文名、中文名、分类、版本）。可用 category 按分类筛选。`,
      inputSchema: {
        type: 'object' as const,
        properties: {
          category: {
            type: 'string',
            description:
              '按分类英文名筛选（如 base / feedback / form），省略则列出全部',
          },
          ...nutuiVersionProp(),
        },
        required: [] as string[],
      },
      annotations: { title: '列出组件', ...TOOL_ANNOTATIONS },
    },
    {
      name: `${p}info`,
      description:
        '获取组件的 Props 规格（属性、说明、类型、默认值），按表格分组。',
      inputSchema: {
        type: 'object' as const,
        properties: {
          component: {
            type: 'string',
            description: '组件名(大小写不敏感，如 Button)',
          },
          ...nutuiVersionProp(),
        },
        required: ['component'],
      },
      annotations: { title: '获取组件 Props', ...TOOL_ANNOTATIONS },
    },
    {
      name: `${p}doc`,
      description: `获取组件的完整 Markdown 文档。${langEnumDesc(config)}。`,
      inputSchema: {
        type: 'object' as const,
        properties: {
          component: {
            type: 'string',
            description: '组件名(大小写不敏感，如 Button)',
          },
          lang: {
            type: 'string',
            enum: [...config.langs],
            description: langEnumDesc(config),
          },
          ...nutuiVersionProp(),
        },
        required: ['component'],
      },
      annotations: { title: '获取组件文档', ...TOOL_ANNOTATIONS },
    },
    {
      name: `${p}demo`,
      description: `获取组件的 ${config.demoLabel} 示例源码。不传 name 时列出全部示例名；传 name（如 demo1）时返回该示例源码。`,
      inputSchema: {
        type: 'object' as const,
        properties: {
          component: {
            type: 'string',
            description: '组件名(大小写不敏感，如 Button)',
          },
          name: {
            type: 'string',
            description: '示例名（如 demo1）；省略则列出全部示例',
          },
          ...nutuiVersionProp(),
        },
        required: ['component'],
      },
      annotations: { title: '获取组件示例', ...TOOL_ANNOTATIONS },
    },
    {
      name: `${p}token`,
      description:
        '查询 Design Token（var(--nutui-*) 体系）。不传 component 返回全局 token；传 component 返回组件级 token。',
      inputSchema: {
        type: 'object' as const,
        properties: {
          component: {
            type: 'string',
            description: '组件名，返回组件级 token；省略则返回全局 token',
          },
          ...nutuiVersionProp(),
        },
        required: [] as string[],
      },
      annotations: { title: '查询 Design Token', ...TOOL_ANNOTATIONS },
    },
  ]
}

export function createToolHandler(config: CliConfig) {
  const p = config.mcp.toolPrefix
  return async (name: string, params: Record<string, unknown>) => {
    // 每次调用按入参 nutuiVersion 路由到对应快照（省略则自动检测）。
    const versionsIndex = loadVersionsIndex(config.dataDir)
    const versionInfo: VersionInfo = detectVersion({
      flag: params.nutuiVersion as string | undefined,
      cwd: process.cwd(),
      npmPackageName: config.npmPackageName,
      versionsIndex,
    })
    const snapshotDir = resolveSnapshotDir(config.dataDir, versionInfo.version)
    const meta = loadMetaByDir(snapshotDir)
    const _meta = {
      version: versionInfo.version,
      major: versionInfo.major,
      source: versionInfo.source,
    }

    // 去前缀得到动词，兼容两端不同前缀。
    const verb = name.startsWith(p) ? name.slice(p.length) : name

    switch (verb) {
      case 'list': {
        const filter = params.category as string | undefined
        let categories = meta.categories
        if (filter) {
          const key = filter.toLowerCase()
          categories = categories.filter(
            (c) => c.enName.toLowerCase() === key || c.name === filter
          )
        }
        const data = categories.map((cat) => ({
          name: cat.name,
          enName: cat.enName,
          components: cat.components
            .map((id) => meta.components[id])
            .filter(Boolean)
            .map((c) => ({
              name: c.name,
              cName: c.cName,
              version: c.version,
            })),
        }))
        return toMcpResult({ _meta, libVersion: meta.libVersion, categories: data })
      }

      case 'info': {
        const comp = resolve(config, meta, params.component as string)
        if (isError(comp)) return toMcpResult(comp)
        const propTables = (comp.api?.tables ?? []).filter(
          (t) => t.kind === 'props'
        )
        return toMcpResult({
          _meta,
          name: comp.name,
          cName: comp.cName,
          version: comp.version,
          tables: propTables.map((t) => ({
            name: t.name,
            subComponent: t.subComponent,
            rows: t.rows,
          })),
        })
      }

      case 'doc': {
        const comp = resolve(config, meta, params.component as string)
        if (isError(comp)) return toMcpResult(comp)
        const lang = (params.lang as Lang) ?? config.defaultLang
        const content = readDoc(snapshotDir, comp, lang)
        if (content === null) {
          const langName = config.langLabel[lang] ?? lang
          return toMcpResult(
            createError(
              ErrorCodes.DOC_NOT_FOUND,
              `${comp.name} ${comp.cName} 暂无${langName}文档。`
            )
          )
        }
        return toMcpResult({ _meta, name: comp.name, lang, doc: content })
      }

      case 'demo': {
        const comp = resolve(config, meta, params.component as string)
        if (isError(comp)) return toMcpResult(comp)
        const demos = listDemos(snapshotDir, comp)
        const demoName = params.name as string | undefined
        if (!demoName) {
          return toMcpResult({ _meta, component: comp.name, demos })
        }
        const code = readDemo(snapshotDir, comp, demoName)
        if (code === null) {
          return toMcpResult(
            createError(
              ErrorCodes.DEMO_NOT_FOUND,
              `${comp.name} 未找到示例「${demoName}」。`,
              demos.length
                ? `可选：${demos.join(' / ')}`
                : `该组件暂无 ${config.demoLabel} 示例。`
            )
          )
        }
        return toMcpResult({ _meta, component: comp.name, demo: demoName, code })
      }

      case 'token': {
        const query = params.component as string | undefined
        if (!query) {
          return toMcpResult({ _meta, scope: 'global', tokens: meta.globalTokens })
        }
        const comp = resolve(config, meta, query)
        if (isError(comp)) return toMcpResult(comp)
        return toMcpResult({
          _meta,
          scope: comp.id,
          component: comp.name,
          tokens: comp.tokens ?? [],
        })
      }

      default:
        return toMcpResult(
          createError(ErrorCodes.UNKNOWN_TOOL, `未知工具：${name}`)
        )
    }
  }
}
