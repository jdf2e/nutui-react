# Empty组件

空状态时的占位提示

## 引入

```tsx
import { Empty } from '@nutui/nutui-react-taro'
```

## 示例代码

### 全屏 full

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 半屏 half

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 局部 partial

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 图片类型，内置 8 个

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义图片大小

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 自定义图片

> 如果您是京东站内相关项目的开发，我们特意为您提供了一系列的缺省状态的图片链接，您可通过内部群获取。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义底部按钮

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## Empty

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片,支持传入图片 URL | `ReactNode` | `-` |
| imageSize | 图片大小，number 类型单位为 px | `number` \| `string` | `-` |
| title | 图片下方的标题 | `ReactNode` | `-` |
| description | 图片下方的描述文字 | `ReactNode` | `-` |
| size | 组件尺寸，对齐 JD APP V11.0 缺省状态规范 | `full` \| `half` \| `partial` | `half` |
| status | 内置缺省插图类型，与设计稿业务场景一一对应 | `network` \| `comment` \| `search` \| `shop` \| `address` \| `order` \| `favor` \| `cart` | `network` |
| actions | 操作按钮列表，项内字段同 Button，支持 `onClick` | `EmptyAction[]` | `[]` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

**通用**

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-empty-padding | 组件内边距 | `20px` |
| \--nutui-empty-background-color | 背景色 | `$color-background-overlay` |
| \--nutui-empty-title-color | 标题颜色 | `$color-title`（`#11141A`） |
| \--nutui-empty-description-color | 描述颜色 | `$color-text-help`（`#8D9199`） |

**全屏 `full`**

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-empty-full-padding-top | 顶部间距 | `160px` |
| \--nutui-empty-full-image-size | 插图尺寸 | `160px` |
| \--nutui-empty-full-title-font-size | 标题字号 | `$font-size-md` |
| \--nutui-empty-full-title-line-height | 标题行高 | `$line-height-xxl` |
| \--nutui-empty-full-description-font-size | 描述字号 | `$font-size-base` |
| \--nutui-empty-full-description-line-height | 描述行高 | `22px` |
| \--nutui-empty-full-actions-margin-top | 操作区上边距 | `8px` |

**半屏 `half`**

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-empty-half-image-size | 插图尺寸 | `80px` |
| \--nutui-empty-half-title-font-size | 标题字号 | `$font-size-s` |
| \--nutui-empty-half-title-line-height | 标题行高 | `22px` |
| \--nutui-empty-half-description-font-size | 描述字号 | `$font-size-m` |
| \--nutui-empty-half-description-line-height | 描述行高 | `$line-height-2xl` |
| \--nutui-empty-half-actions-margin-top | 操作区上边距 | `8px` |

**局部 `partial`**

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-empty-partial-padding | 容器内边距 | `0 16px` |
| \--nutui-empty-partial-image-size | 插图尺寸 | `32px` |
| \--nutui-empty-partial-content-gap | 图与文案间距 | `8px` |
| \--nutui-empty-partial-description-font-size | 文案字号 | `$font-size-m` |
| \--nutui-empty-partial-description-line-height | 文案行高 | `32px` |

> v4 已移除 `--nutui-empty-image-size`、`--nutui-empty-image-small-size` 等 v3 变量，请按 `size` 使用上表对应变量。

<Contribution name="Empty" />
