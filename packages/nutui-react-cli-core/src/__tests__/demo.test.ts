import { describe, expect, it } from 'vitest'
import { extractDemoDescriptions } from '../commands/demo.js'

describe('demo intent & title extraction', () => {
  it('extracts demo titles and descriptions from markdown correctly', () => {
    const mockDoc = `
# Empty 组件

## 示例代码

### 全屏 full
空态全屏居中展示，适合整页无数据

:::demo
<CodeBlock src='h5/demo1.tsx'></CodeBlock>
:::

### 半屏 half
适合卡片内展示

:::demo
<CodeBlock src='h5/demo2.tsx'></CodeBlock>
:::
`

    const result = extractDemoDescriptions(mockDoc)
    expect(result.demo1).toBeDefined()
    expect(result.demo1.title).toBe('全屏 full')
    expect(result.demo1.desc).toBe('空态全屏居中展示，适合整页无数据')

    expect(result.demo2).toBeDefined()
    expect(result.demo2.title).toBe('半屏 half')
    expect(result.demo2.desc).toBe('适合卡片内展示')
  })
})
