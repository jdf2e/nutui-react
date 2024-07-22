# Indicator 指示器

显示一个任务或流程的进度，常用于开通流程。

## 引入

```tsx
import { Indicator } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Indicator, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={0} />
      </Cell>
      <Cell>
        <Indicator total={3} current={1} />
      </Cell>
      <Cell>
        <Indicator total={3} current={2} />
      </Cell>
    </>
  )
}
export default Demo1

```

### 自定义节点

```tsx
import React from 'react'
import { Cell, Indicator } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo2 = () => {
  return (
    <Cell>
      <Indicator total={6} current={5}>
        <View
          style={
            !harmonyAndRn()
              ? {
                  display: 'inline-block',
                  width: '14px',
                  height: '14px',
                  lineHeight: '14px',
                  textAlign: 'center',
                  fontSize: '12px',
                  color: '#FFFFFF',
                  border: '1px solid #FFFFFF',
                  borderRadius: '50%',
                  margin: '4px',
                  backgroundColor: 'var(--nutui-color-primary)',
                  boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
                }
              : {
                  display: 'inline-block',
                  width: pxTransform(14),
                  height: pxTransform(14),
                  lineHeight: pxTransform(14),
                  textAlign: 'center',
                  fontSize: pxTransform(12),
                  color: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#FFFFFF',
                  borderRadius: pxTransform(14),
                  margin: 4,
                  backgroundColor: '#ff0f23',
                  // @ts-ignore
                  shadowColor: '#ff0f23',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 1,
                }
          }
        >
          {5}
        </View>
      </Indicator>
    </Cell>
  )
}
export default Demo2

```

### 自定义颜色大小

```tsx
import React from 'react'
import { Indicator, Cell, ConfigProvider } from '@dongdesign/ui'

// rn 下直接报错、鸿蒙下没生效。
const customTheme = {
  nutuiIndicatorColor: '#3768fa',
  nutuiIndicatorDotColor: '#ddd',
  nutuiIndicatorDotSize: '8px',
  nutuiIndicatorDotActiveSize: '24px',
}

const Demo3 = () => {
  return (
    <Cell>
      <ConfigProvider theme={customTheme}>
        <Indicator total={6} current={5} />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo3

```

### 竖向展示

```tsx
import React from 'react'
import { Indicator, Cell } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo4 = () => {
  return (
    <Cell>
      <Indicator total={6} current={5} direction="vertical">
        <View
          style={
            !harmonyAndRn()
              ? {
                  display: 'inline-block',
                  width: '14px',
                  height: '14px',
                  lineHeight: '14px',
                  textAlign: 'center',
                  fontSize: '12px',
                  color: '#FFFFFF',
                  border: '1px solid #FFFFFF',
                  borderRadius: '50%',
                  margin: '4px',
                  backgroundColor: 'var(--nutui-color-primary)',
                  boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
                }
              : {
                  display: 'inline-block',
                  width: pxTransform(14),
                  height: pxTransform(14),
                  lineHeight: pxTransform(14),
                  textAlign: 'center',
                  fontSize: pxTransform(12),
                  color: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#FFFFFF',
                  borderRadius: pxTransform(14),
                  margin: 4,
                  backgroundColor: '#ff0f23',
                  // @ts-ignore
                  shadowColor: '#ff0f23',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 1,
                }
          }
        >
          {5}
        </View>
      </Indicator>
      <Indicator
        total={6}
        current={2}
        direction="vertical"
        style={{
          marginLeft: 50,
        }}
      />
    </Cell>
  )
}
export default Demo4

```

## Indicator

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤 | `number` | `0` |
| total | 步骤长度 | `number` | `3` |
| direction | 展示方向，默认为水平方向 | `horizontal` \| `vertical` | `horizontal` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-indicator-color | 指示器焦点时色值 | `$color-primary` |
| \--nutui-indicator-dot-color | 指示器默认色值 | `$color-text-disabled` |
| \--nutui-indicator-dot-size | 指示器尺寸 | `5px` |
| \--nutui-indicator-dot-active-size | 指示器焦点时尺寸 | `15px` |
| \--nutui-indicator-border-radius | 指示器焦点时的border值 | `3px` |
| \--nutui-indicator-dot-margin | 指示器横向时的margin值 | `4px` |
