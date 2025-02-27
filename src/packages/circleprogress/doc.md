# CircleProgress 环形进度条

展示操作或任务的当前进度。

## 引入

```tsx
import { CircleProgress } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 环形进度条自定义样式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 环形进度条自定义颜色(支持渐变色)

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 环形进度条自定义大小

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 环形进度条自定义内容

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 动态改变环形进度条的进度

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## CircleProgress

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` \| `string` | `必传项，无默认值` |
| strokeWidth | 圆弧的宽度 | `number` \| `string` | `5` |
| radius | 半径 | `number` \| `string` | `50` |
| color | 圆环进度条颜色，传入对象格式可以定义渐变色 | `Record<string, string> \| string` | `-` |
| background | 圆环轨道颜色 | `string` | `#d9d9d9` |
| strokeLinecap | 圆环进度条端点形状 | `butt` \| `round` \| `square` \| `inherit` | `round` |
| clockwise | 是否顺时针展示 | `boolean` | `true` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-circleprogress-primary-color | 环形进度条填充部分的颜色 | `$color-primary` |
| \--nutui-circleprogress-path-color | 环形进度条轨道的颜色 | `#e5e9f2` |
| \--nutui-circleprogress-text-color | 环形进度条轨道内容区的颜色 | `$color-title` |
| \--nutui-circleprogress-text-size | 环形进度条轨道内容区的大小 | `$font-size-l` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20CircleProgress)

### Component Logs

- 🐛 fix(circleprogress): update demo ([#2260](https://github.com/jdf2e/nutui-react/pull/2260)) @eiinu `v2.6.5`
- 🐛 fix(circleprogress): demo拆解与规范 ([#2091](https://github.com/jdf2e/nutui-react/pull/2091)) @Alex-huxiyang `v2.5.0`
- 💡 🛠 refactor(circleprogress): optimize animation duration ([#1861](https://github.com/jdf2e/nutui-react/pull/1861)) @oasis-cloud `v2.3.7`
- 💡 style(circleprogress): docs 优化，修订 css 变量 ([#1699](https://github.com/jdf2e/nutui-react/pull/1699)) @xiaoyatong `v2.3.0`
- 🐛 fix(circleprogress): 计算出现 NaN 导致组件展示为 100% 的情况 ([#1602](https://github.com/jdf2e/nutui-react/pull/1602)) @oasis-cloud `v2.0.24`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=circleprogress&expanded=true)
