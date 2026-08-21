# Popover 氣泡彈出框

點擊或在元素上懸停鼠標，彈出氣泡卡片浮層。

## 引入

```tsx
import { Popover } from '@nutui/nutui-react'
```

## 示例代碼

### 氣泡類型

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 選項配置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義內容+顏色

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 位置自定義：多條資料

通過 location 屬性來控製氣泡的彈出位置。可選值

> 註意：這裏在 3.x 版本上發生了變化，參考 type 文件中的 `FullPosition` 類型。

```
top           # 頂部中間位置
left          # 左側中間位置
right         # 右側中間位置
bottom        # 底部中間位置
top-left      # 頂部左側位置
top-right     # 頂部右側位置
left-top      # 左側上方位置
left-bottom   # 左側下方位置
right-top     # 右側上方位置
right-bottom  # 右側下方位置
bottom-left   # 底部左側位置
bottom-right  # 底部右側位置
```

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 位置自定義：單一資料

通過 location 屬性來控製氣泡的彈出位置。可選值

> 註意：這裏在 3.x 版本上發生了變化，參考 type 文件中的 `FullPosition` 類型。

:::demo

<CodeBlock src='h5/demo4-1.tsx'></CodeBlock>

:::

### 自定義目標元素

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

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
| type | 氣泡類型，`status` 狀態型（圖標+文案+關閉），`description` 說明型（僅文案） | `status` \| `description` | `status` |
| list | 選項列表 | `PopoverList[]` | `[]` |
| visible | 是否展示氣泡彈出層 | `boolean` | `false` |
| theme | 主題風格，默認 `dark` 為設計規範深色氣泡；`light` 為明亮風格（白底深字） | `light` \| `dark` | `dark` |
| location | 彈出位置，裏面具體的參數值可以參考上面的位置自定義例子 | `FullPosition` | `bottom` |
| offset | 出現位置的偏移量 | `string[]` \| `number[]` | `[0, 8]` |
| arrowOffset | 小箭頭的偏移量 | `number` | `20` |
| showArrow | 是否顯示小箭頭 | `boolean` | `true` |
| closeOnActionClick | 是否在點擊選項後關閉 | `boolean` | `true` |
| closeOnOutsideClick | 是否在點擊外部元素後關閉菜單 | `boolean` | `true` |
| autoShow | 是否自動彈出，需配合 `onOpen` 更新 `visible` | `boolean` | `false` |
| duration | 自動關閉時長（ms），`0` 表示不自動關閉 | `number` | `0` |
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
| \--nutui-popover-border-radius | popover 內容區的圓角 | `6px` |
| \--nutui-popover-font-size | popover 內容區的字號 | `12px` |
| \--nutui-popover-text-color | 文案顏色 | `$color-primary-text` |
| \--nutui-popover-content-background-color | 內容區背景色 | `$color-mask` |
| \--nutui-popover-divider-color | 多選項之間的分割線顏色 | `rgba(255, 255, 255, 0.12)` |
| \--nutui-popover-disable-color | 選項禁用的顏色 | `$color-text-disabled` |
| \--nutui-popover-padding-horizontal | 內容區水平內邊距 | `8px` |
| \--nutui-popover-padding-vertical | 內容區垂直內邊距 | `6px` |
| \--nutui-popover-height | 氣泡高度 | `28px` |
| \--nutui-popover-icon-size | 圖標尺寸 | `12px` |
| \--nutui-popover-icon-color | 圖標顏色（80% 透明度） | `rgba(255, 255, 255, 0.8)` |
| \--nutui-popover-status-max-width | 狀態型最大寬度 | `240px` |
| \--nutui-popover-description-max-width | 說明型最大寬度 | `208px` |
| \--nutui-popover-action-hotspot-size | 關閉按鈕觸控熱區尺寸 | `36px` |
| \--nutui-popover-light-content-background-color | 明亮風格背景色 | `#ffffff` |
| \--nutui-popover-light-text-color | 明亮風格文案顏色 | `$color-mask` |
| \--nutui-popover-light-icon-color | 明亮風格圖標顏色（80% 透明度） | `rgba(17, 20, 26, 0.8)` |
| \--nutui-popover-light-divider-color | 明亮風格分割線顏色 | `$color-border` |
| \--nutui-popover-padding | 兼容舊版水平內邊距變量 | `8px` |
| \--nutui-popover-item-width | 兼容舊版選項寬度，等同狀態型最大寬度 | `240px` |

<Contribution name="Popover" />
