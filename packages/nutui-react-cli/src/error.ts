// MCP 层的结构化错误。CLI 命令用 process.exit 退出，MCP 不能退出进程，
// 需返回带 error/code 字段的对象，供 Agent 解析。
export const ErrorCodes = {
  COMPONENT_NOT_FOUND: 'COMPONENT_NOT_FOUND',
  DOC_NOT_FOUND: 'DOC_NOT_FOUND',
  DEMO_NOT_FOUND: 'DEMO_NOT_FOUND',
  UNKNOWN_TOOL: 'UNKNOWN_TOOL',
} as const

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes]

export interface ErrorResult {
  error: true
  code: ErrorCode
  message: string
  suggestion?: string
}

export function createError(
  code: ErrorCode,
  message: string,
  suggestion?: string
): ErrorResult {
  return suggestion
    ? { error: true, code, message, suggestion }
    : { error: true, code, message }
}
