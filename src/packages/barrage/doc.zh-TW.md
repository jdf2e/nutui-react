# Barrage 彈幕

用於話語和詞組的輪播展示，適用於視頻中或其他類似需求中。

## 引入

```tsx
import { Barrage } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## Barrage

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| list | 彈幕列錶數據 | `Array<string>` | `[]` |
| interval | 可視區域內每個彈幕出現的時間間隔 | `number` | `500` |
| duration | 每個彈幕的滾動時間 | `number` | `3000` |
| rows | 彈幕行數，分幾行展示 | `number` | `1` |
| gapY | 彈幕垂直距離 | `number` | `10` |
| loop | 是否循環播放 | `boolean` | `true` |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| add | 添加數據 | `(word: string) => void` |
