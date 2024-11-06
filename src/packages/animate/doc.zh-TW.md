# Animate 動畫/動效

給子元素添加動畫效果

## 引入

```tsx
import { Animate } from '@nutui/nutui-react'
```

## 示例代碼

### 點擊觸發

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 循環動畫

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## Animate

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 動畫類型，見下方type值說明 | `AnimateType` | `shake` |
| action | 觸發方式，'initial'初始化執行; 'click'點擊執行 | `initial` \| `click` | `initial` |
| loop | 是否循環執行。true循環執行;false執行一次 | `boolean` | `false` |
| onClick | 點擊元素時觸發 | `event: Event` | `-` |

### AnimateType值說明

| 序號 | 參數名稱 | 參數說明 |
| --- | --- | --- |
| 1 | shake | 抖動，建議loop為true |
| 2 | ripple | 不循環則是放大後縮小，循環則是心跳 |
| 3 | breath | 呼吸燈，建議loop為true |
| 4 | float | 漂浮，建議loop為true |
| 5 | slide-right | 由右嚮左劃入 |
| 6 | slide-left | 由左嚮右劃入 |
| 7 | slide-top | 由上至下劃入 |
| 8 | slide-bottom | 由下至上劃入 |
| 9 | jump | 跳躍，建議loop為true |
| 10 | twinkle | 水波，建議loop為true |
| 11 | flicker | 擦亮按鈕，建議loop為true |
