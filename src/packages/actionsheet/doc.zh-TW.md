# ActionSheet 動作面闆

從頂部或底部彈出的動作菜單面闆。

## 引入

```tsx
import { ActionSheet } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

底部彈出時以列錶展示。當 `options` 中存在 `icon` 欄位時，列錶自動切換為左對齊的圖示列錶佈局。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 展示取消按鈕

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 展示描述信息

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 選項狀態

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義內容

通過 `children` 自定義面板內容。此處複用 `Checkbox` 實現清空篩選的多選列表，支持勾選框居左、居右兩種佈局，點擊標題「清空篩選」可清空已選項。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義key

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 頂部彈出

通過 `position="top"` 從頂部彈出，內容以網格形式展示，`options` 支持 `icon` 欄位（字串使用 `img` 渲染，也可傳入自定義節點）。網格佈局也可通過 `layout="grid"` 用於底部彈出；`columns` 僅支持 `4` 或 `5`，為 `4` 時左右間距更寬。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## ActionSheet

### Props

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| visible | 遮罩層可見 | `boolean` | `false` |
| title | 設定列錶面闆標題 | `ReactNode` | \- |
| titleAlign | 標題對齊方式，`left` \| `center`，僅 `center` 時 `description` 生效 | `string` | `center` |
| description | 設定列錶面闆副標題/描述 | `ReactNode` | \- |
| headerLeft | 頭部左側自定義內容 | `ReactNode` | \- |
| headerRight | 頭部右側自定義內容 | `ReactNode` | \- |
| position | 彈出位置，`top` \| `bottom`，`top` 時以網格展示 | `string` | `bottom` |
| layout | 內容佈局方式，不傳時按 `position` 推導（`top`→`grid`、`bottom`→`list`） | `grid` \| `list` | `-` |
| options | 列錶項 | `Array` | `[]` |
| optionKey | 列錶項的自定義設定 | `{ [key: string]: string }` | `-` |
| columns | 網格列數，僅支持 `4` 或 `5` | `4` \| `5` | `5` |
| cancelText | 取消文案，`top` 時渲染為「點選收起」按鈕 | `ReactNode` | `取消` |
| closeable | 是否顯示關閉按鈕 | `boolean` | `false` |
| onSelect | 選擇之後觸發 | `(item: any, index: number) => void` | `-` |
| onCancel | 點選取消文案時觸發 | `() => void` | `-` |

### options

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| name | 列錶項的標題key值 | `string` | \- |
| description | 列錶項的描述key值 | `string` | \- |
| icon | 列錶項的圖示key值，頂部網格與底部列錶均支持，底部列錶存在 `icon` 時自動切換為圖示列錶佈局 | `ReactNode` \| `string` | \- |
| danger | 高亮顏色 | `string` | `$color-primary` |
| disabled | 禁用狀態 | `string` | `$disabled-color` |

## 主題定制

### 樣式變數

組件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 預設值 |
| --- | --- | --- |
| \--nutui-actionsheet-background-color | 背景色 | `$color-background-overlay` |
| \--nutui-actionsheet-border-radius | 列錶和取消按鈕圓角 | `0` |
| \--nutui-actionsheet-item-text-align | 列錶項的文字對齊方式 | center |
| \--nutui-actionsheet-item-border-bottom | 列錶項的底部border | `$color-border` |
| \--nutui-actionsheet-item-line-height | 列錶項行高 | `24px` |
| \--nutui-actionsheet-item-color | 列錶項字色 | `$color-title` |
| \--nutui-actionsheet-item-danger | 列錶項danger字色 | `$color-primary` |
| \--nutui-actionsheet-header-padding | 頭部內邊距 | `16px` |
| \--nutui-actionsheet-title-color | 頭部標題字色 | `$color-title` |
| \--nutui-actionsheet-title-font-size | 頭部標題字號 | `$font-size-xl` |
| \--nutui-actionsheet-description-color | 頭部描述字色 | `$color-text-help` |
| \--nutui-actionsheet-description-font-size | 頭部描述字號 | `$font-size-s` |
| \--nutui-actionsheet-grid-padding | 網格容器內邊距 | `16px` |
| \--nutui-actionsheet-grid-gap | 網格項間距 | `16px` |
| \--nutui-actionsheet-grid-item-width | 網格項寬度 | `50px` |
| \--nutui-actionsheet-grid-text-color | 網格文字字色 | `$color-text` |
| \--nutui-actionsheet-grid-text-font-size | 網格文字字號 | `12px` |
| \--nutui-actionsheet-grid-text-line-height | 網格文字行高 | `18px` |

<Contribution name="ActionSheet" />
