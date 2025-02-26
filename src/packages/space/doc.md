# Space 间距

#

元素排列中保持相同的宽度。

### 引入

```tsx
import { Space } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 换行

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 垂直

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 间距大小

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 主轴对齐方式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 交叉轴对齐方式

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Space

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | `'vertical'｜ 'horizontal'` | `'horizontal'` |
| align | 交叉轴对齐方式 | `'start'｜'end'｜'center'｜'baseline'` | `-` |
| justify | 主轴对齐方式 | `'start' ｜ 'end' ｜ 'center' ｜ 'between' ｜ 'around' ｜ 'evenly' ｜ 'stretch'` | `-` |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | 间距大小 |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASpace)

### Component Logs

- 🐛 fix(space): demo拆解与规范 ([#2021](https://github.com/jdf2e/nutui-react/pull/2021)) @Alex-huxiyang `v2.4.1`
- 🐛 fix(space): 主/交叉轴的 demo 与国际化改进 ([#1867](https://github.com/jdf2e/nutui-react/pull/1867)) @Alex.huxiyang `v2.3.7`
- ✨ feat(space): update demos and docs of justify and align ([#1856](https://github.com/jdf2e/nutui-react/pull/1856)) @Alex.huxiyang `v2.3.6`
- ✨ 提取 Taro 的 Demo 到 workspace ([#1302](https://github.com/jdf2e/nutui-react/pull/1302)) @oasis-cloud `v2.0.13`
- 🐛 space 版本号修改为 2.0 ([#1265](https://github.com/jdf2e/nutui-react/pull/1265)) @oasis-cloud `v2.0.9`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=space&expanded=true)
