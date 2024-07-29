# CalendarCard 日歷

日歷

## 引入

```tsx
import { CalendarCard } from '@nutui/nutui-react'
```

## 示例代碼

### 選擇單個日期

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 選擇多個日期

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 選擇範圍

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 選擇周

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 受控模式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義日期信息

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義周起始日

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 自定義選擇範圍

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 自定義禁止選擇日期

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 與 Popup 組合使用

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 使用 Ref 上的方法

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## CalendarCard

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 類型，單個日期 `single`，多個日期 `multiple`，日期範圍 `range`，周選擇 `week` | `string` | `single` |
| defaultValue | 默認值，單個日期 Date 格式，多個日期/範圍選擇 Date[] 格式 | `Date \| Date[]` | `-` |
| startDate | 限製範圍開始日期 | `Date` | `-` |
| endDate | 限製範圍結束日期 | `Date` | `-` |
| firstDayOfWeek | 設置周起始日，0 為周日，1 為周一 | `0-6` | `1` |
| disableDay | 設置不可選日期 | `(day: CalendarCardDay) => boolean` | `-` |
| renderDay | 日期信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayTop | 日期頂部信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayBottom | 日期底部信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| value | 受控模式下的值，與 onChange 搭配使用 | `Date \| Date[]` | `-` |
| onDayClick | 點擊後觸發 | `(day: CalendarCardDay) => void` | `-` |
| onPageChange | 切換月份時觸發 | `(val: { year, month }) => void` | `-` |
| onChange | 選擇值發生變化時觸發 | `(val: Date \| Date[]) => void` | `-` |

### CalendarCardDay

| 屬性 | 類型 | 說明 |
| --- | --- | --- |
| year | `number` | 年 |
| month | `number` | 月 |
| date | `number` | 日 |
| type | `prev \| current \| next` | 可選項。表示上一個月、當月、下一個月 |

### Ref

通過 ref 可以獲取到 CalendarCard 實例並調用實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| jump | 在當前基礎上前進或後退月數，正數向前，負數向後 | `step: number` |
| jumpTo | 跳轉至特定的年月 | `year: number, month: number` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 選中狀態時的元素背景色 | `$color-primary` |
| \--nutui-calendar-choose-background-color | 選中時區間內元素的背景色，區別區間兩頭元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-disable-color | 不可選元素的字色 | `#bfbfbf` |
| \--nutui-calendar-base-font-size | 字號 | `$font-size-large` |
| \--nutui-calendar-day-width | 日歷元素寬度 | `14.28%` |
| \--nutui-calendar-choose-color | 日歷選中元素的字色 | `$color-primary` |
| \--nutui-calendar-day-active-border-radius | 日歷選中元素的圓角 | `4px` |
