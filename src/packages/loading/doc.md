# Loading 加载中

加载图标，用于显示正在加载中的状态

### 引入

```tsx
import { Loading } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义大小

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 带文字

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 带文字(竖向排列)

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义文字颜色和大小

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义图标

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 与遮罩层结合

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Loading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | loading图标的样式 | `circular \| spinner` | `circular` |
| direction | loading图标和文字的排列方式 | `horizontal \| vertical` | `horizontal` |
| icon | 自定义loading的图标 | `tsx.Element` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-loading-icon-color | icon色值 | `$color-text-help` |
| \--nutui-loading-icon-size | icon大小 | `$font-size-s` |
| \--nutui-loading-color | 文本色值 | `$color-text-help` |
| \--nutui-loading-font-size | 文本字号 | `$font-size-s` |

## 贡献记录

### Issues

- 希望Dialog组件内置的确认以及取消按钮对异步自带loading或者可以手动设置loading [#1202](https://github.com/jdf2e/nutui-react/issues/1202)

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ALoading)

### Component Logs

- 💡 📖 docs(loading): 主题变量修正 ([#3008](https://github.com/jdf2e/nutui-react/pull/3008)) `v2.7.9`
- 💡 📖 docs(infiniteloading): remove deprecated usage ([#2801](https://github.com/jdf2e/nutui-react/pull/2801)) `v2.7.2`
- 💡 📖 docs(infiniteLoading): optimize target description ([#2770](https://github.com/jdf2e/nutui-react/pull/2770)) `v2.7.1`
- 🐛 fix(uploader): beforeUpload should trigger every time before uploading ([#2553](https://github.com/jdf2e/nutui-react/pull/2553)) `v2.6.17`
- 🐛 fix(infiniteLoading): rest 导致事件无法触发 ([#2474](https://github.com/jdf2e/nutui-react/pull/2474)) @oasis-cloud `v2.6.15`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=loading&expanded=true)
