# Watermark 水印

页面上添加特定的文字或图案，可用于防止信息盗用。

## 引入

```tsx
import { WaterMark } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

包含单行文本、多行文本、支持图片。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 局部用法

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## WaterMark

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 水印的宽度 | `number` | `120` |
| height | 水印的高度 | `number` | `64` |
| rotate | 水印绘制时，旋转的角度 | `number` | `-22` |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string` | `-` |
| imageWidth | 图片宽度 | `number` | `120` |
| imageHeight | 图片高度 | `number` | `64` |
| zIndex | 追加的水印元素的 z-index | `number` | `2000` |
| content | 水印文字内容 | `string` | `-` |
| color | 水印文字颜色 | `string` | `rgba(0, 0, 0, .15)` |
| fontSize | 文字大小 | `string` \| `number` | `16` |
| gapX | 水印之间的水平间距 | `number` | `24` |
| gapY | 水印之间的垂直间距 | `number` | `48` |
| startX | 水印之间的水平起点 | `number` | `0` |
| startY | 水印之间的垂直起点 | `number` | `0` |
| fullPage | 是否覆盖整个页面 | `boolean` | `true` |
| fontFamily | 水印文字字体 | `string` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-watermark-z-index | zIndex | `$mask-content-z-index` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AWaterMark)

### Component Logs

- ✨ feat(watermark): support multi-line text ([#2477](https://github.com/jdf2e/nutui-react/pull/2477)) @xiaoyatong `v2.6.15`
- 🐛 fix(watermark): demo拆解与规范 ([#2083](https://github.com/jdf2e/nutui-react/pull/2083)) @eiinu `v2.4.2`
- 💡 🐛 fix(watermark): fix demos ([#1817](https://github.com/jdf2e/nutui-react/pull/1817)) @xiaoyatong `v2.3.4`
- 🐛 fix(watermark): 修复小程序下画布尺寸问题 ([#1073](https://github.com/jdf2e/nutui-react/pull/1073)) @Eiinu `v1.5.8`
- 💡 🛠 refactor: watermark ([#1071](https://github.com/jdf2e/nutui-react/pull/1071)) @Eiinu `v2.0.0-alpha.13`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=watermark&expanded=true)
