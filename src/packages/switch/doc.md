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

### onChange事件

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 支持文字

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Switch

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultChecked | 开关状态，非受控 | `boolean` | `false` |
| checked | 开关状态，受控 | `boolean` | `false` |
| disabled | 禁用状态 | `boolean` | `false` |
| activeText | 打开时文字描述 | `string` | `-` |
| inactiveText | 关闭时文字描述 | `string` | `-` |
| onChange | 切换开关时触发 | `onChange:(value: boolean, event: Event)` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-switch-close-background-color | 开关关闭状态背景颜色 | `$color-text-disabled` |
| \--nutui-switch-open-background-color | 开关打开状态背景颜色 | `$color-primary` |
| \--nutui-switch-close-disabled-background-color | 开关关闭时的禁用时的背景颜色 | `rgba(0, 0, 0, 0.06)` |
| \--nutui-switch-open-disabled-background-color | 开关打开时的禁用时的背景颜色 | `$color-primary-disabled` |
| \--nutui-switch-width | 开关宽度 | `36px` |
| \--nutui-switch-height | 开关高度 | `21px` |
| \--nutui-switch-line-height | 开关行高 | `21px` |
| \--nutui-switch-border-radius | 开关圆角大小 | `21px` |
| \--nutui-switch-inside-width | 开关内部按钮宽度 | `13px` |
| \--nutui-switch-inside-height | 开关内部按钮高度 | `13px` |
| \--nutui-switch-inside-open-transform | 开关打开状态内部按钮位置 | `translateX(146%)` |
| \--nutui-switch-inside-close-transform | 开关关闭状态内部按钮位置 | `translateX(30%)` |
| \--nutui-switch-close-line-bg-color | 开关关闭状态内部按钮线条颜色 | `#f0f0f0` |
