# BackTop 返回顶部

提供较长的页面快捷返回顶部功能。

## 引入

```tsx
import { BackTop } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 设置出现位置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义样式

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 父级元素内滚动

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### click事件

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## BackTop

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 获取监听的目标元素 | `string` | `-` |
| threshold | 页面垂直滚动多高后出现 | `number` | `200` |
| zIndex | 设置组件页面层级 | `number` | `900` |
| duration | 设置动画持续时间，为 0 时表示无动画 | `number` | `1000` |
| onClick | 按钮点击时触发事件 | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-backtop-border-color | 边框颜色 | `#e0e0e0` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20BackTop)

### Component Logs

- 🐛 update backtop demos ([#2865](https://github.com/jdf2e/nutui-react/pull/2865)) `v2.7.5`
- 🐛 fix(backtop & menu): lint, code simplification, deprecated pageYOffset removed ([#2633](https://github.com/jdf2e/nutui-react/pull/2633)) `v2.6.22`
- ✨ feat(backtop): rtl ([#2051](https://github.com/jdf2e/nutui-react/pull/2051)) @xiaoyatong `v2.4.2`
- 🐛 fix(backtop): demo拆解与规范 ([#2025](https://github.com/jdf2e/nutui-react/pull/2025)) @Alex-huxiyang `v2.4.1`
- 💡 📖 docs(backtop): 文档可读性优化 ([#1909](https://github.com/jdf2e/nutui-react/pull/1909)) @Alex.huxiyang `v2.3.9`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=backtop&expanded=true)
