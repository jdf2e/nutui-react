# Calendar 日歴

日歴，可平鋪/彈窗展示

## 引入

```tsx
import { Calendar } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 區間選擇

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 選擇多個日期

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 選擇周

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 日期不可選

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 和Datepicker 聯動

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 快捷選擇

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 快捷選擇-日期區間

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 自定義日歴-自定義時間文案

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 自定義日歴-自定義按鈕

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 平鋪展示

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## Calendar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否可見 | `boolean` | `false` |
| type | 類型，日期選擇'single'，區間選擇'range' | `string` | `single` |
| viewMode `v2.7.10` | 面板模式，用於展示不一樣的面板 | `day` \| `month` \| `quarter` | `day` |
| popup | 是否彈窗狀態展示 | `boolean` | `true` |
| autoBackfill | 自動回填 | `boolean` | `false` |
| title | 顯示標題 | `string` | `日期選擇` |
| defaultValue | 默認值，日期選擇 string 格式，區間選擇 Array 格式 | `string` \| `Array` | `-` |
| startDate | 開始日期， 如果不限制開始日期傳 null | `string` | `今天` |
| endDate | 結束日期，如果不限制結束日期傳 null | `string` | `距離今天 365 天` |
| showToday | 是否展示今天標記 | `boolean` | `true` |
| startText | 範圍選擇，開始信息文案 | `ReactNode` | `開始` |
| endText | 範圍選擇，結束信息文案 | `ReactNode` | `結束` |
| confirmText | 底部確認按鈕文案 | `ReactNode` | `確認` |
| showTitle | 是否在展示日歴標題 | `boolean` | `true` |
| showSubTitle | 是否展示日期標題 | `boolean` | `true` |
| scrollAnimation | 是否啟動滾動動畫 | `boolean` | `true` |
| firstDayOfWeek | 設置周起始日 | `0-6` | `0` |
| closeIcon | 自定義 Icon | `ReactNode` | `close` |
| disableDate | 設置不可選日期 | `(date: CalendarDay) => boolean` | `-` |
| renderHeaderButtons | 自定義日歴標題下部，可用以添加自定義操作 | `() => string` \| `JSX.Element` | `-` |
| renderBottomButton | 自定義日歴底部按鈕 | `() => string` \| `JSX.Element` | `-` |
| renderDay | 日期信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| renderDayTop | 日期頂部信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| renderDayBottom | 日期底部信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| onDayClick | 點擊/選擇後觸發 | `(data: string) => {}` | `-` |
| onPageChange | 年月子標題到達頂部時觸發 | `(param: string) => {}` | `-` |
| onConfirm | 選擇之後或是點擊確認按鈕觸發 | `(param: string) => {}` | `-` |
| onClose | 關閉時觸發 | `() => {}` | `-` |

### CalendarDay

| 屬性 | 類型 |
| --- | --- |
| day | `string` \| `number` |
| type | `string` |

### Ref

通過 ref 可以獲取到 Calendar 實例併調用實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| scrollToDate | 滾動到指定日期所在月,如：'2023-06-30' | `string` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 日歴選中狀態時的元素背景色 | `$color-primary` |
| \--nutui-calendar-choose-background-color | 日歴選中時區間內元素的背景色，區別區間兩頭元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-choose-color | 日歴選中元素的字色 | `$color-primary` |
| \--nutui-calendar-choose-disable-background-color | 日歴不可選元素的選中時的背景色 | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-disable-color | 日歴不可選元素的字色 | `#d1d0d0` |
| \--nutui-calendar-base-font-size | 日歴字號 | `$font-size-large` |
| \--nutui-calendar-title-font-size | 日歴標題字號 | `$font-size-xl` |
| \--nutui-calendar-title-font-weight | 日歴標題字重 | `500` |
| \--nutui-calendar-sub-title-font-size | 日歴副標題字號 | `$font-size-base` |
| \--nutui-calendar-day67-color | 日歴周末字色 | `$color-primary` |
| \--nutui-calendar-header-height | 日歴自定義部分高度 | `24px` |
| \--nutui-calendar-day-width | 日歴元素寬度 | `14.28%` |
| \--nutui-calendar-day-height | 日歴元素高度 | `60px` |
| \--nutui-calendar-day-font-weight | 日歴元素字重 | `500` |
| \--nutui-calendar-day-active-border-radius | 日歴選中元素的圓角 | `4px` |
