# Sticky組件

效果同 css 中的 position: sticky,對低端瀏覽器可使用其做兼容

## 引入

```tsx
import { Sticky } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 吸頂距離

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 指定容器內吸頂

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 吸底距離

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Sticky

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| position | 吸附位置 | `top` \| `bottom` | `top` |
| threshold | 距離，當 position 為 top 時，設置的是 top | `number` | `0` |
| zIndex | 吸附時的層級 | `number` | `2000` |
| container | 容器的 ref | `React.RefObject<HTMLElement>` | `-` |
| onChange | 吸附狀態改變時觸發 | `(val: boolean) => void` | `-` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASticky)

### Component Logs

- 🐛 fix(sticky): should rerender when zIndex changes ([#2572](https://github.com/jdf2e/nutui-react/pull/2572)) `v2.6.18`
- 🐛 fix(sticky): rerender sticky when threshold change ([#2564](https://github.com/jdf2e/nutui-react/pull/2564)) `v2.6.18`
- 🐛 sticky 构建时类型错误 @oasis-cloud `v2.6.15`
- 💡 🪵 refactor: sticky ([#2468](https://github.com/jdf2e/nutui-react/pull/2468)) @oasis-cloud `v2.6.15`
- 🐛 fix(sticky): demo拆解与规范 ([#2024](https://github.com/jdf2e/nutui-react/pull/2024)) @Alex-huxiyang `v2.4.2`

> 更多版本更新記錄請查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=sticky&expanded=true)
