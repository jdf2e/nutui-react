# ResultPage组件

## 介绍

以页面的形式向用户反馈操作结果

## 安装

```tsx
import { ResultPage } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 修改状态

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 无标题

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 单按钮

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 无按钮

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## ResultPage

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | `-` |
| description | 描述，最多展示两行 | `ReactNode` | `-` |
| status | 状态类型 | `success` \| `error` \| `warning` \| `info` \| `waiting` | `info` |
| icon | 自定义 `icon` | `ReactNode` | `-` |
| actions | 可用于处理操作的一组数据 | `Array` | `[]` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-resultpage-width | 内容区域宽度 | `240px` |
| \--nutui-resultpage-icon-size | icon的宽高 | `36px` |
| \--nutui-resultpage-icon-margin-bottom | icon的margin-bottom值 | `12px` |
| \--resultpage-title-margin-bottom | 标题的margin-top值 | `12px` |
| \--nutui-resultpage-title-font-size | 标题的字体大小 | `$font-size-xl` |
| \---nutui-resultpage-title-color | 标题的文字颜色 | `$color-title` |
| \--nutui-resultpage-description-font-size | 描述的字体大小 | `$font-size-base` |
| \--nutui-resultpage-description-color | 描述的文字颜色 | `$color-text` |
| \--nutui-resultpage-description-line-height | 描述的行高 | `20px` |
| \--nutui-resultpage-actions-margin-topt | 操作区域的margin-top值 | `16px` |
