# Sticky组件

效果同 css 中的 position: sticky,对低端浏览器可使用其做兼容

## 引入

```tsx
import { Sticky } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 吸顶距离

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 指定容器内吸顶

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 吸底距离

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Sticky

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 吸附位置 | `top` \| `bottom` | `top` |
| threshold | 距离，当 position 为 top 时，设置的是 top | `number` | `0` |
| zIndex | 吸附时的层级 | `number` | `2000` |
| container | 容器的 ref | `React.RefObject<HTMLElement>` | `-` |
| onChange | 吸附状态改变时触发 | `(val: boolean) => void` | `-` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Sticky)

### Component Logs

- 🐛 fix(sticky): should rerender when zIndex changes ([#2572](https://github.com/jdf2e/nutui-react/pull/2572)) `v2.6.18`
- 🐛 fix(sticky): rerender sticky when threshold change ([#2564](https://github.com/jdf2e/nutui-react/pull/2564)) `v2.6.18`
- 🐛 sticky 构建时类型错误 @oasis-cloud `v2.6.15`
- 💡 🪵 refactor: sticky ([#2468](https://github.com/jdf2e/nutui-react/pull/2468)) @oasis-cloud `v2.6.15`
- 🐛 fix(sticky): demo拆解与规范 ([#2024](https://github.com/jdf2e/nutui-react/pull/2024)) @Alex-huxiyang `v2.4.2`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=sticky&expanded=true)
