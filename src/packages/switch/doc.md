# Switch 开关

用来打开或关闭选项。

## 引入

```tsx
import { Switch } from '@nutui/nutui-react'
```

## 示例代码

### 非受控

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 禁用状态

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 支持文字

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 支持 Icon

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### onChange事件

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Switch

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultChecked | 开关状态，非受控 | `boolean` | `false` |
| checked | 开关状态，受控 | `boolean` | `false` |
| disabled | 禁用状态 | `boolean` | `false` |
| activeText | 打开时文字描述 | `ReactNode` | `-` |
| inactiveText | 关闭时文字描述 | `ReactNode` | `-` |
| onChange | 切换开关时触发 | `onChange:(value: boolean, event: Event)` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-switch-active-background-color | 开关打开状态背景颜色 | `$color-primary` |
| \--nutui-switch-inactive-background-color | 开关关闭状态背景颜色 | `$color-text-disabled` |
| \--nutui-switch-active-disabled-background-color | 开关打开状态禁用的背景颜色 | `$color-primary-disabled-special` |
| \--nutui-switch-inactive-disabled-background-color | 开关关闭状态禁用的背景颜色 | `$color-background` |
| \--nutui-switch-inactive-line-bg-color | 开关关闭状态内部按钮线条颜色 | `#ffffff` |
| \--nutui-switch-width | 开关宽度 | `46px` |
| \--nutui-switch-height | 开关高度 | `28px` |
| \--nutui-switch-line-height | 开关行高 | `28px` |
| \--nutui-switch-border-radius | 开关圆角大小 | `$radius-circle` |
| \--nutui-switch-border-width | 开关边框宽度 | `2px` |
| \--nutui-switch-inside-border-radius | 开关内部按钮圆角大小 | `$radius-full` |
| \--nutui-switch-inside-box-shadow | 开关内部按钮阴影 | `0px 2px 6px 0px rgba(0, 0, 0, 0.4)` |
| \--nutui-switch-label-text-color | 开关内部文字颜色 | `$color-primary-text` |
| \--nutui-switch-label-font-size | 开关内部文字大小 | `$font-size-s` |
| \--nutui-switch-inactive-disabled-label-text-color | 开关关闭禁用内部文字颜色 | `$color-text-disabled` |
