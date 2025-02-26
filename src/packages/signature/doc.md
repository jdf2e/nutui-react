# Signature 签名

基于 Canvas 的签名组件

## 引入

```tsx
import { Signature } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 修改颜色和签字粗细

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## Signature

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| lineWidth | 线条的宽度 | `number` | `3` |
| strokeStyle | 绘图笔触颜色 | `string` | `#000` |
| type | 图片格式 | `string` | `png` |
| unsupported | 不支持 Canvas 情况下的展示文案 | `ReactNode` | `对不起，当前浏览器不支持 Canvas，无法使用本控件！` |
| onConfirm | 点击确认按钮触发事件回调函数 | `onConfirm: (canvas: HTMLCanvasElement, dataurl: string, isSigned?: boolean) => void` | `-` |
| onClear | 点击重签按钮触发事件回调函数 | `onClear: () => void` | `-` |

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| confirm | 确认签字 | `() => void` |
| clear | 清除签字 | `() => void` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-signature-border-height | 签名区域高度 | `10rem` |
| \--nutui-signature-border-color | 签名边框颜色 | `$color-border` |
| \--nutui-signature-border-width | 签名边框宽度 | `1px` |
| \--nutui-signature-background-color | 签名背景颜色 | `$white` |
| \--nutui-signature-font-size | 签名文字字号 | `$font-size-base` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASignature)

### Component Logs

- ✨ 签名组件增加当没有签名或已清空的情况下的参数暴露 ([#2288](https://github.com/jdf2e/nutui-react/pull/2288)) @xiaoyatong `v2.6.7`
- 🐛 fix(signature): 调整清空时机并更新demo ([#2190](https://github.com/jdf2e/nutui-react/pull/2190)) @Alex-huxiyang `v2.6.2`
- 🐛 fix(signature): demo拆解与规范 ([#2099](https://github.com/jdf2e/nutui-react/pull/2099)) @Alex-huxiyang `v2.5.0`
- 🐛 signature组件提取样式变量+修复taro h5 demo签字时滚动问题 ([#1220](https://github.com/jdf2e/nutui-react/pull/1220)) @songsong `v2.0.4`
- 🐛 修复signature小程序下demo签字时页面跟随滚动问题 ([#1225](https://github.com/jdf2e/nutui-react/pull/1225)) @songsong `v2.0.4`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=signature&expanded=true)
