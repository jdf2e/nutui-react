# Popover 氣泡彈出框

點擊或在元素上懸停鼠標，彈出氣泡卡片浮層。

## 引入

```tsx
import { Popover } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 選項配置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義內容

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 位置自定義：多條資料

通過 location 屬性來控製氣泡的彈出位置。可選值

```
top           # 頂部中間位置
left          # 左側中間位置
right         # 右側中間位置
bottom        # 底部中間位置
top-start     # 頂部左側位置
top-end       # 頂部右側位置
left-start    # 左側上方位置
left-end      # 左側下方位置
right-start   # 右側上方位置
right-end     # 右側下方位置
bottom-start  # 底部左側位置
bottom-end    # 底部右側位置
```

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 位置自定義：單一資料

通過 location 屬性來控製氣泡的彈出位置。可選值

```
top           # 頂部中間位置
left          # 左側中間位置
right         # 右側中間位置
bottom        # 底部中間位置
top-start     # 頂部左側位置
top-end       # 頂部右側位置
bottom-start  # 底部左側位置
bottom-end    # 底部右側位置
```

:::demo

<CodeBlock src='h5/demo4-1.tsx'></CodeBlock>

:::

### 自定義目標元素

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 置於可滾動容器中

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 容器設置 position: fixed

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Popover

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| list | 選項列表 | `PopoverList[]` | `[]` |
| visible | 是否展示氣泡彈出層 | `boolean` | `false` |
| location | 彈出位置，裏面具體的參數值可以參考上面的位置自定義例子 | `string` | `bottom` |
| offset | 出現位置的偏移量 | `string[]` \| `number[]` | `[0, 12]` |
| arrowOffset | 小箭頭的偏移量 | `number` | `0` |
| showArrow | 是否顯示小箭頭 | `boolean` | `true` |
| closeOnActionClick | 是否在點擊選項後關閉 | `boolean` | `true` |
| closeOnOutsideClick | 是否在點擊外部元素後關閉菜單 | `boolean` | `true` |
| targetId | 自定義目標元素 id | `string` | `-` |
| onClick | 點擊切換 popover 展示狀態 | `() => void` | `() => {}` |
| onSelect | 點擊選項時觸發 | `(item: PopoverList, index: number) => void` | `(item, index) => {}` |
| onOpen | 點擊菜單時觸發 | `() => void` | `() => {}` |
| onClose | 關閉菜單時觸發 | `() => void` | `() => {}` |

```
此外，還支持Popup組件的overlayStyle、overlayClassName、overlay、closeOnOverlayClick屬性。
```

### PopoverList 數據結構

PopoverList 屬性是一個由對象構成的數組，數組中的每個對象配置一列，對象可以包含以下值：

| 鍵名 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| key | 選項 key 值 | `string` | `-` |
| name | 選項文字 | `string` | `-` |
| icon | 參考 Icon 組件 | `ReactNode` | `-` |
| disabled | 是否為禁用狀態 | `boolean` | `false` |
| className | 為對應選項添加額外的類名 | `string` | `-` |
| action | 為對應選項添加方法 | `{ icon?: React.ReactNode; onClick?: (e: any) => void }` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-popover-border-radius | popover 內容區的 border 的圓角值 | `8px` |
| \--nutui-popover-font-size | popover 內容區的 font-size 值 | `12px` |
| \--nutui-popover-text-color | 選項區的文字顏色 | `$color-title` |
| \--nutui-popover-content-background-color | 選項區的背景顏色 | `$white` |
| \--nutui-popover-hover-background-color | 手指點擊菜單選項選中的背景顏色 | `#fff` |
| \--nutui-popover-hover-text-color | 手指點擊菜單選項選中的文字顏色 | `#1a1a1a` |
| \--nutui-popover-border-color | top、bottom、left 和 right 的箭頭顏色 | `$white` |
| \--nutui-popover-divider-color | 選項區的底部 border 顏色 | `$color-border` |
| \--nutui-popover-disable-color | 選項禁用的顏色 | `$color-text-disabled` |
| \--nutui-popover-menu-item-padding | 選項區菜單每一項的 padding 值 | `8px` |
| \--nutui-popover-menu-item-width | 選項區菜單每一項寬度值，超過寬度值後，會折行展示，保障信息的完整性 | `160px` |
