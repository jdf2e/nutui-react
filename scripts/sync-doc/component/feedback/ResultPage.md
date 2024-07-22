# ResultPage组件

## 介绍

以页面的形式向用户反馈操作结果

## 安装

```tsx
import { ResultPage } from '@dongdesign/ui'
```

## 代码演示

### 基础用法

```tsx
import React from 'react'
import { ResultPage, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <Cell>
      <ResultPage
        title="成功反馈"
        description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
        status="success"
        actions={[
          {
            text: '次要按钮',
          },
          {
            text: '主要按钮',
            type: 'primary',
          },
        ]}
      />
    </Cell>
  )
}
export default Demo1

```

### 修改状态

```tsx
import React from 'react'
import { ResultPage, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <Cell>
      <ResultPage
        title="失败反馈"
        description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
        status="error"
        actions={[
          {
            text: '次要按钮',
          },
          {
            text: '主要按钮',
            type: 'primary',
          },
        ]}
      />
    </Cell>
  )
}
export default Demo1

```

### 无标题

```tsx
import React from 'react'
import { ResultPage, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <Cell>
      <ResultPage
        description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
        status="warning"
        actions={[
          {
            text: '次要按钮',
          },
          {
            text: '主要按钮',
            type: 'primary',
          },
        ]}
      />
    </Cell>
  )
}
export default Demo1

```

### 单按钮

```tsx
import React from 'react'
import { ResultPage, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <ResultPage
          title="信息补充"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="info"
          actions={[
            {
              text: '主要按钮',
              type: 'primary',
            },
          ]}
        />
      </Cell>
      <Cell>
        <ResultPage
          title="信息补充"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="info"
          actions={[
            {
              text: '次要按钮',
            },
          ]}
        />
      </Cell>
    </>
  )
}
export default Demo1

```

### 无按钮

```tsx
import React from 'react'
import { ResultPage, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <Cell>
      <ResultPage
        title="二次确认"
        description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
        status="waiting"
      />
    </Cell>
  )
}
export default Demo1

```

## ResultPage

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | `-`|
| description | 描述，最多展示两行 | `ReactNode` | `-` |
| status | 状态类型 | `success` \| `error` \| `warning` \| `info` \| `waiting` | `info` |
| icon | 自定义 `icon` | `ReactNode` | `-` |
| actions | 可用于处理操作的一组数据 | `Array` | `[]` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-resultpage-width | 内容区域宽度 | `247px` |
| \--nutui-resultpage-icon-size | icon的宽高 | `48px` |
| \--nutui-resultpage-icon-margin-bottom | icon的margin-bottom值 | `16px` |
| \--resultpage-title-margin-bottom | 标题的margin-top值 | `9px` |
| \--nutui-resultpage-title-font-size | 标题的字体大小 | `$font-size-xl` |
| \---nutui-resultpage-title-color | 标题的文字颜色 | `$color-title` |
| \--nutui-resultpage-description-font-size | 描述的字体大小 | `$font-size-base` |
| \--nutui-resultpage-description-color | 描述的文字颜色 | `$color-text` |
| \--nutui-resultpage-description-line-height | 描述的行高 | `20px` |
| \--nutui-resultpage-actions-margin-topt | 操作区域的margin-top值 | `21px` |