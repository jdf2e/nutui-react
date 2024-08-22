# Cascader 級聯選擇

級聯選擇器，用於多層級數據的選擇，典型場景為省市區選擇。

## 引入

```tsx
import { Cascader } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

傳入`options`列表

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義屬性名稱

可通過`textKey`、`valueKey`、`childrenKey`指定屬性名。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 動態加載

使用`lazy`標識是否需要動態獲取數據，此時不傳`options`代表所有數據都需要通過`onLoad`加載，首次加載通過`root`屬性區分，當遇到非葉子節點時會調用`onLoad`方法，參數為當前節點和`resolve`方法，註意`resolve`方法必須調用，不傳子節點時會被當做葉子節點處理。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 部分數據動態加載

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自動轉換

如果你的數據為可轉換為樹形結構的扁平結構時，可以通過`format`告訴組件需要進行自動轉換，`format`接受4個參數，`topId`為頂層節點的父級id，`idKey`為節點唯一id，`pidKey`為指向父節點id的屬性名，存在`sortKey`將根據指定字段調用Array.prototype.sort()進行同層排序。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義样式

使用configprovider 完成自定義设置

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Cascader

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 選中值，受控 | `(number \| string)[]` | `-` |
| defaultValue | 默认選中值 | `(number \| string)[]` | `-` |
| options | 級聯數據 | `Array` | `-` |
| popup | 是否彈窗狀態展示 | `boolean` | `true` |
| visible | 級聯顯示隱藏狀態 | `boolean` | `false` |
| activeColor | 選中啟動態顏色 | `string` | `-` |
| activeIcon | 標記選中的Icon | `string` | `ReactNode` |
| lazy | 是否開啟動態加載 | `boolean` | `false` |
| optionKey | 自定義`options`中的關鍵字，valueKey、textKey、childrenKey | `object` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` |
| format | 當options為可轉換為樹形結構的扁平結構時，配置轉換規則 | `object` | `-` |
| title | 標題 | `string` | `-` |
| closeIconPosition | 取消按鈕位置，繼承 Popup 組件 | `string` | `top-right` |
| closeIcon | 自定義關閉按鈕，繼承 Popup 組件 | `ReactNode` | `close` |
| closeable | 是否顯示關閉按鈕，繼承 Popup 組件 | `boolean` | `true` |
| onLoad | 動態加載回調，開啟動態加載時生效 | `(node: any, resolve: any) => void` | `-` |
| onChange | 選中值改變時觸發 | `(value: CascaderValue, params?: any) => void` | `-` |
| onPathChange | 選中項改變時觸發 | `(value: CascaderValue, params: any) => void` | `-` |

### Ref

| 事件名 | 說明 | 回調參數 |
| --- | --- | --- |
| open | 顯示 Cascader | `() => void` |
| close | 關閉 Cascader | `() => void` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 说明 | 默認值 |
| --- | --- | --- |
| \--nutui-cascader-font-size | 級聯總字號 | `$font-size-base` |
| \--nutui-cascader-pane-height | 級聯面闆高度 | `342px` |
| \--nutui-cascader-tabs-item-padding | 級聯tabs的標題部分的padding 值 | `0 10px` |
| \--nutui-cascader-item-height | 級聯數據每一條的高度 | `40px` |
| \--nutui-cascader-item-padding | 級聯數據每一條的padding值 | `10px 20px` |
| \--nutui-cascader-item-margin | 級聯數據每一條的margin值 | `0px` |
| \--nutui-cascader-item-border-bottom | 級聯數據每一條的底部邊框 | `0px solid #ddd` |
| \--nutui-cascader-item-color | 級聯數據每一條的色值 | `$color-title` |
| \--nutui-cascader-item-font-size | 級聯數據每一條的字號 | `$font-size-base` |
| \--nutui-cascader-item-active-color | 級聯數據每一條的選中色值 | `$color-primary` |
