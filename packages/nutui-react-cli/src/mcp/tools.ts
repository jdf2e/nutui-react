// MCP 工具定义与处理器。复用 data.ts 原语，与 CLI 命令共享同一份 meta 快照，
// 输出结构与各命令的 --format json 保持一致。命名对齐 antd 风格（nutui_*）。
import {
  listDemos,
  loadMeta,
  readDemo,
  readDoc,
  resolveComponent,
  suggestComponents,
} from '../data.js'
import { createError, ErrorCodes } from '../error.js'
import type { Component, Lang, Meta } from '../types.js'

export interface McpContext {
  lang: Lang
}

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
  meta: Meta,
  query: string
): Component | ReturnType<typeof createError> {
  const comp = resolveComponent(meta, query)
  if (comp) return comp
  const suggestions = suggestComponents(meta, query)
  return createError(
    ErrorCodes.COMPONENT_NOT_FOUND,
    `未找到组件「${query}」。`,
    suggestions.length
      ? `你是否想找：${suggestions.join(' / ')}？或用 nutui_list 查看全部组件。`
      : '用 nutui_list 查看全部组件。'
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

export const TOOL_DEFINITIONS = [
  {
    name: 'nutui_list',
    description:
      '列出全部 NutUI React 组件（英文名、中文名、分类、版本）。可用 category 按分类筛选。',
    inputSchema: {
      type: 'object' as const,
      properties: {
        category: {
          type: 'string',
          description:
            '按分类英文名筛选（如 base / feedback / form），省略则列出全部',
        },
      },
      required: [] as string[],
    },
    annotations: { title: '列出组件', ...TOOL_ANNOTATIONS },
  },
  {
    name: 'nutui_info',
    description:
      '获取组件的 Props 规格（属性、说明、类型、默认值），按表格分组。',
    inputSchema: {
      type: 'object' as const,
      properties: {
        component: {
          type: 'string',
          description: '组件名（大小写不敏感，如 Button）',
        },
      },
      required: ['component'],
    },
    annotations: { title: '获取组件 Props', ...TOOL_ANNOTATIONS },
  },
  {
    name: 'nutui_doc',
    description:
      '获取组件的完整 Markdown 文档。lang 可选 zh（中文，默认）或 en（英文）。',
    inputSchema: {
      type: 'object' as const,
      properties: {
        component: {
          type: 'string',
          description: '组件名（大小写不敏感，如 Button）',
        },
        lang: {
          type: 'string',
          enum: ['zh', 'en'],
          description: '文档语言，zh=中文（默认），en=英文',
        },
      },
      required: ['component'],
    },
    annotations: { title: '获取组件文档', ...TOOL_ANNOTATIONS },
  },
  {
    name: 'nutui_demo',
    description:
      '获取组件的 H5 示例源码。不传 name 时列出全部示例名；传 name（如 demo1）时返回该示例源码。',
    inputSchema: {
      type: 'object' as const,
      properties: {
        component: {
          type: 'string',
          description: '组件名（大小写不敏感，如 Button）',
        },
        name: {
          type: 'string',
          description: '示例名（如 demo1）；省略则列出全部示例',
        },
      },
      required: ['component'],
    },
    annotations: { title: '获取组件示例', ...TOOL_ANNOTATIONS },
  },
  {
    name: 'nutui_token',
    description:
      '查询 Design Token（var(--nutui-*) 体系）。不传 component 返回全局 token；传 component 返回组件级 token。',
    inputSchema: {
      type: 'object' as const,
      properties: {
        component: {
          type: 'string',
          description: '组件名，返回组件级 token；省略则返回全局 token',
        },
      },
      required: [] as string[],
    },
    annotations: { title: '查询 Design Token', ...TOOL_ANNOTATIONS },
  },
]

export function createToolHandler(ctx: McpContext) {
  return async (name: string, params: Record<string, unknown>) => {
    const meta = loadMeta()

    switch (name) {
      case 'nutui_list': {
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
        return toMcpResult({ libVersion: meta.libVersion, categories: data })
      }

      case 'nutui_info': {
        const comp = resolve(meta, params.component as string)
        if (isError(comp)) return toMcpResult(comp)
        const propTables = (comp.api?.tables ?? []).filter(
          (t) => t.kind === 'props'
        )
        return toMcpResult({
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

      case 'nutui_doc': {
        const comp = resolve(meta, params.component as string)
        if (isError(comp)) return toMcpResult(comp)
        const lang = (params.lang as Lang) === 'en' ? 'en' : ctx.lang
        const content = readDoc(comp, lang)
        if (content === null) {
          return toMcpResult(
            createError(
              ErrorCodes.DOC_NOT_FOUND,
              `${comp.name} ${comp.cName} 暂无${lang === 'en' ? '英文' : '中文'}文档。`
            )
          )
        }
        return toMcpResult({ name: comp.name, lang, doc: content })
      }

      case 'nutui_demo': {
        const comp = resolve(meta, params.component as string)
        if (isError(comp)) return toMcpResult(comp)
        const demos = listDemos(comp)
        const demoName = params.name as string | undefined
        if (!demoName) {
          return toMcpResult({ component: comp.name, demos })
        }
        const code = readDemo(comp, demoName)
        if (code === null) {
          return toMcpResult(
            createError(
              ErrorCodes.DEMO_NOT_FOUND,
              `${comp.name} 未找到示例「${demoName}」。`,
              demos.length
                ? `可选：${demos.join(' / ')}`
                : '该组件暂无 H5 示例。'
            )
          )
        }
        return toMcpResult({ component: comp.name, demo: demoName, code })
      }

      case 'nutui_token': {
        const query = params.component as string | undefined
        if (!query) {
          return toMcpResult({ scope: 'global', tokens: meta.globalTokens })
        }
        const comp = resolve(meta, query)
        if (isError(comp)) return toMcpResult(comp)
        return toMcpResult({
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
