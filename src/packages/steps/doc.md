# Steps 步骤条

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

## 引入

```tsx
import { Steps } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 基础用法：点状

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 标题和描述信息

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义步骤条

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义步骤条：点状

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义步骤条：点状 + icon

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义图标

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 竖向步骤条

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 点状步骤和垂直方向

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Steps

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 显示方向 | `horizontal` \| `vertical` | `horizontal` |
| value | 当前所在的步骤 | `number` | `0` |
| dot | 点状步骤条 | `boolean` | `false` |

## Step

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 流程步骤的标题 | `string` | `-` |
| description | 流程步骤的描述性文字 | `string` | `-` |
| icon | 图标(来自Icon组件的name属性) | `ReactNode` | `-` |
| value | 流程步骤的索引 | `number` | `0` |
| description | 流程步骤的描述性文字的html结构 | `React.ReactNode` | `-` |
| onStepClick | 点击步骤的标题或图标时触发 | `(index: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-steps-base-icon-width | icon 容器的宽度 | `25px` |
| \--nutui-steps-base-icon-height | icon 容器的高度 | `25px` |
| \--nutui-steps-base-icon-line-height | icon 容器的行高 | `25px` |
| \--nutui-steps-base-icon-margin-bottom | icon 容器的底部外边距 | `12px` |
| \--nutui-steps-base-icon-font-size | icon 容器的字号 | `$font-size-small` |
| \--nutui-steps-base-line-width | 分割线的宽度 | `100%` |
| \--nutui-steps-base-line-background | 分割线的背景色 | `$color-text-help` |
| \--nutui-steps-base-title-font-size | 标题的字号 | `$font-size-base` |
| \--nutui-steps-base-title-color | 标题的颜色 | `$color-title` |
| \--nutui-steps-base-title-margin-bottom | 标题底部外边距 | `10px` |
| \--nutui-steps-base-description-font-size | 描述文案的字号 | `$font-size-small` |
| \--nutui-steps-base-description-color | 描述文案的字体颜色 | `$color-text` |
| \--nutui-steps-wait-icon-bg-color | 等待状态的 icon 容器的背景色 | `$color-text-help` |
| \--nutui-steps-wait-icon-color | 等待状态的 icon 容器的字体颜色 | `$white` |
| \--nutui-steps-wait-title-color | 等待状态标题字体颜色 | `$color-title` |
| \--nutui-steps-wait-description-color | 等待状态描述字体颜色 | `$color-text` |
| \--nutui-steps-process-icon-bg-color | 进行中icon容器背景色 | `$color-primary` |
| \--nutui-steps-process-icon-color | 进行中icon容器字体颜色 | `$white` |
| \--nutui-steps-process-icon-before-bg-color | 进行中颜色 | `$color-primary-stop-2` |
| \--nutui-steps-process-title-color | 进行中标题字体颜色 | `$color-primary` |
| \--nutui-steps-process-title-font-size | 进行中标题字号 | `$font-size-base` |
| \--nutui-steps-process-title-font-weight | 进行中标题字重 | `$font-weight-bold` |
| \--nutui-steps-process-description-color | 进行中描述字体颜色 | `$color-text` |
| \--nutui-steps-finish-icon-bg-color | 完成状态icon 容器的背景色 | `$color-primary-text` |
| \--nutui-steps-finish-icon-color | 完成状态icon 容器的字体颜色 | `$color-primary` |
| \--nutui-steps-finish-title-color | 完成状态标题的字体颜色 | `$color-primary` |
| \--nutui-steps-finish-description-color | 完成状态描述的字体颜色 | `$color-text` |
| \--nutui-steps-finish-line-background | 完成状态分割线的颜色 | `$color-primary` |
| \--nutui-steps-dot-icon-width | 点状进度条点的宽度 | `6px` |
| \--nutui-steps-dot-icon-height | 点状进度条点的高度 | `6px` |
| \--nutui-steps-dot-icon-border | 点状进度条点的边框 | `2px solid $white` |
| \--nutui-steps-dot-head-margin | 点状进度条点的外边距 | `7px 0 0 0` |
| \--nutui-steps-process-icon-before-bg-color | 进行中点状进度条点的外边颜色 | `$color-primary-stop-2` |
