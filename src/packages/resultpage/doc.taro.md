# ResultPage组件

## 介绍

以页面的形式向用户反馈操作结果

## 安装

```tsx
import { ResultPage } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 修改状态

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 无标题

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 单按钮

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 无按钮

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 半弹层内嵌

适用于 Popup 半弹层场景，内容区纵向居中展示。

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 弹窗内嵌

适用于 Dialog 弹窗场景。

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

## ResultPage

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | `-` |
| description | 描述，最多展示两行 | `ReactNode` | `-` |
| status | 状态类型 | `success` \| `error` \| `warning` \| `info` \| `waiting` | `info` |
| icon | 自定义图标 | `ReactNode` | `-` |
| actions | 底部操作按钮 | `ResultPageAction[]` | `[]` |

### ResultPageAction

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文案 | `ReactNode` | `-` |
| type | 按钮类型 | `UIType` | `default` |
| size | 按钮尺寸 | `UISize` | `large` |
| fill | 填充模式 | `UIFill` | `outline` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 点击回调 | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-resultpage-width | 内容区域宽度 | `240px` |
| \--nutui-resultpage-icon-size | 图标尺寸 | `36px` |
| \--nutui-resultpage-icon-margin-bottom | 图标与内容间距 | `4px` |
| \--nutui-resultpage-title-margin-bottom | 标题与描述间距 | `4px` |
| \--nutui-resultpage-title-font-size | 标题字号 | `16px` |
| \--nutui-resultpage-title-line-height | 标题行高 | `24px` |
| \--nutui-resultpage-title-color | 标题颜色 | `$color-title` |
| \--nutui-resultpage-description-font-size | 描述字号 | `14px` |
| \--nutui-resultpage-description-color | 描述颜色 | `$color-text` |
| \--nutui-resultpage-description-line-height | 描述行高 | `22px` |
| \--nutui-resultpage-actions-margin-top | 描述与操作区间距 | `12px` |

<Contribution name="ResultPage" />
