// nutui-react mcp —— 启动本地 MCP（stdio）服务，供 Claude Code / Cursor / VS Code / Codex
// 等客户端按需调用。复用与 CLI 命令相同的 meta 快照与查询原语。
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { createToolHandler, TOOL_DEFINITIONS } from '../mcp/tools.js'
import {
  NUTUI_EXPERT_PROMPT,
  NUTUI_PAGE_GENERATOR_PROMPT,
} from '../mcp/prompts.js'
import type { Lang } from '../types.js'

// tsup define 注入的包版本号。
declare const __CLI_VERSION__: string

const PROMPTS = [
  {
    name: 'nutui-expert',
    description: 'NutUI React 专家助手：先查文档再写代码',
    content: NUTUI_EXPERT_PROMPT,
  },
  {
    name: 'nutui-page-generator',
    description: '基于 NutUI React 组件生成完整可运行页面',
    content: NUTUI_PAGE_GENERATOR_PROMPT,
  },
]

export interface McpArgs {
  lang: Lang
}

export async function runMcp(args: McpArgs): Promise<void> {
  // 在 TTY 直接运行时给出提示（MCP 走 stdio，不该在终端裸跑）。
  if (process.stdin.isTTY) {
    process.stderr.write(
      [
        'NutUI React MCP Server',
        '',
        '该命令启动一个通过 stdio 通信的 MCP 服务，不应在终端直接运行。',
        '请在 AI 工具中如下配置：',
        '',
        '  {',
        '    "mcpServers": {',
        '      "nutui-react": {',
        '        "command": "npx",',
        '        "args": ["-y", "@nutui/nutui-react-cli", "mcp"]',
        '      }',
        '    }',
        '  }',
        '',
        '支持的客户端：Claude Code、Cursor、VS Code、Codex 等。',
        '正在 stdio 上启动 MCP 服务……',
        '',
      ].join('\n')
    )
  }

  const server = new Server(
    { name: 'nutui-react', version: __CLI_VERSION__ },
    { capabilities: { tools: {}, prompts: {} } }
  )

  const handleTool = createToolHandler({ lang: args.lang })

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: TOOL_DEFINITIONS,
  }))

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: params } = request.params
    return handleTool(name, (params as Record<string, unknown>) ?? {})
  })

  server.setRequestHandler(ListPromptsRequestSchema, async () => ({
    prompts: PROMPTS.map(({ name, description }) => ({ name, description })),
  }))

  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const found = PROMPTS.find((p) => p.name === request.params.name)
    if (!found) throw new Error(`未知提示词：${request.params.name}`)
    return {
      messages: [
        {
          role: 'user' as const,
          content: { type: 'text' as const, text: found.content },
        },
      ],
    }
  })

  const transport = new StdioServerTransport()
  await server.connect(transport)
}
