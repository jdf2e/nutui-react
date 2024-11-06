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
