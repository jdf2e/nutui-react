# Steps 步骤条

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

## 引入

```tsx
import { Steps } from '@nutui/nutui-react-taro'
```

## 示例代码

### 横版左右布局1行文案

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 横版左右布局2行文案

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 横版左右布局icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 横版上下布局点状、icon、文案

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 横向上下布局混合：点状 + icon

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 横向自定义icon

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义步骤条

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 竖向点状

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 竖向混合：点状 + icon

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Steps

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 步骤条的显示方向 | `horizontal` \| `vertical` | `horizontal` |
| value | 当前所在的步骤 | `number` | `0` |
| status | 步骤条的展示状态 | `default` \| `business` \| `dynamic` \| `enhanced` | `default` |
| type | 步骤条的类型 | `text` \| `dot` \| `icon` | `text` |
| layout | 步骤条的布局方式 | `single` \| `double` | `single` |
| icon | 自定义图标 | `ReactNode` | `-` |
| onStepClick | 点击切换步骤条时触发 | `(index: number) => void` | `-` |

## Step

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 流程步骤的标题 | `ReactNode` | `-` |
| description | 流程步骤的描述性文字 | `ReactNode` | `-` |
| icon | 图标 | `ReactNode` | `-` |
| value | 流程步骤的索引 | `number` | `0` |
| type | 步骤类型 | `text` \| `dot` \| `icon` | `text` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-steps-background-color | 步骤条背景色 | `$white` |
| \--nutui-steps-base-head-height | 头部高度 | `14px` |
| \--nutui-steps-base-head-background-color | 头部背景色 | `$color-background` |
| \--nutui-steps-base-head-border | 头部边框 | `none` |
| \--nutui-steps-base-head-text-size | 头部文字大小 | `12px` |
| \--nutui-steps-base-head-size | 头部图标大小 | `$font-size-xxs` |
| \--nutui-steps-base-head-color | 头部颜色 | `$color-text` |
| \--nutui-steps-base-head-dot-size | 头部点状大小 | `6px` |
| \--nutui-steps-base-head-dot-background-color | 头部点状背景色 | `$color-text-disabled` |
| \--nutui-steps-base-head-icon-size | 头部图标大小 | `16px` |
| \--nutui-steps-double-head-icon-size | 双行头部图标大小 | `20px` |
| \--nutui-steps-vertical-head-icon-size | 垂直头部图标大小 | `20px` |
| \--nutui-steps-base-line-height | 分割线高度 | `1px` |
| \--nutui-steps-base-line-background | 分割线背景色 | `$color-border` |
| \--nutui-steps-base-title-font-size | 标题字号 | `$font-size-s` |
| \--nutui-steps-base-title-color | 标题颜色 | `$color-title` |
| \--nutui-steps-base-description-margin-top | 描述上边距 | `2px` |
| \--nutui-steps-base-description-font-size | 描述字号 | `$font-size-xxs` |
| \--nutui-steps-base-description-color | 描述颜色 | `$color-text-help` |
| \--nutui-steps-base-head-border-color | 头部边框颜色 | `$color-border` |
| \--nutui-steps-process-head-background-color | 进行中头部背景色 | `$color-primary` |
| \--nutui-steps-process-color | 进行中颜色 | `$white` |
| \--nutui-steps-process-title-color | 进行中标题颜色 | `$color-primary` |
| \--nutui-steps-process-description-color | 进行中描述颜色 | `$color-primary` |
| \--nutui-steps-wait-icon-color | 等待状态图标颜色 | `$color-text-help` |
| \--nutui-steps-wait-title-color | 等待状态标题颜色 | `$color-title` |
| \--nutui-steps-wait-description-color | 等待状态描述颜色 | `$color-text` |
| \--nutui-steps-finish-icon-color | 完成状态图标颜色 | `$color-text-help` |
| \--nutui-steps-business-title-color | 业务状态标题颜色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-description-color | 业务状态描述颜色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-text-color | 业务状态头部文字颜色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-dot-background-color | 业务状态头部点状背景色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-icon-color | 业务状态头部图标颜色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-background-color | 业务状态头部背景色 | `var(--nutui-color-service)` |
| \--nutui-steps-enhanced-finish-head-background-color | 增强完成状态头部背景色 | `$color-primary-light-pressed` |
| \--nutui-steps-enhanced-finish-head-dot-background-color | 增强完成状态头部点状背景色 | `$color-primary-disabled-special` |
| \--nutui-steps-enhanced-finish-head-icon-color | 增强完成状态头部图标颜色 | `$color-primary-stop-1` |
| \--nutui-steps-enhanced-finish-head-text-color | 增强完成状态头部文字颜色 | `$color-primary-stop-1` |
| \--nutui-steps-horizontal-item-padding-right | 水平项右内边距 | `28px` |
| \--nutui-steps-horizontal-item-line-padding | 水平项分割线内边距 | `0 8px` |
| \--nutui-steps-horizontal-item-special-padding-right | 特殊水平项右内边距 | `22px` |
| \--nutui-steps-horizontal-item-special-3-padding-right | 3项特殊水平项右内边距 | `9px` |
| \--nutui-steps-vertical-item-padding-bottom | 垂直项下内边距 | `13px` |
| \--nutui-steps-vertical-title-font-size | 垂直标题字号 | `$font-size-l` |
| \--nutui-steps-vertical-title-margin-bottom | 垂直标题下边距 | `4px` |
| \--nutui-steps-vertical-line-height | 垂直行高 | `18px` |
| \--nutui-steps-vertical-description-font-size | 垂直描述字号 | `$font-size-base` |
| \--nutui-steps-vertical-description-margin | 垂直描述边距 | `0 0 1px` |

<Contribution name="Steps" />
