# Calendar 日历

日历，可平铺/弹窗展示

## 引入

```tsx
import { Calendar } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 区间选择

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 选择多个日期

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 选择周

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 日期不可选

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 和Datepicker 联动

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 快捷选择

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 快捷选择-日期区间

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 自定义日历-自定义时间文案

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### 自定义日历-自定义按钮

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

### 平铺展示

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

## Calendar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否可见 | `boolean` | `false` |
| type | 类型，日期选择'single'，区间选择'range' | `string` | `single` |
| viewMode `v2.7.10` | 面板模式，用于展示不一样的面板 | `day` \| `month` \| `quarter` | `day` |
| popup | 是否弹窗状态展示 | `boolean` | `true` |
| autoBackfill | 自动回填 | `boolean` | `false` |
| title | 显示标题 | `string` | `日期选择` |
| defaultValue | 默认值，日期选择 string 格式，区间选择 Array 格式 | `string` \| `Array` | `-` |
| startDate | 开始日期， 如果不限制开始日期传 null | `string` | `今天` |
| endDate | 结束日期，如果不限制结束日期传 null | `string` | `距离今天 365 天` |
| showToday | 是否展示今天标记 | `boolean` | `true` |
| startText | 范围选择，开始信息文案 | `ReactNode` | `开始` |
| endText | 范围选择，结束信息文案 | `ReactNode` | `结束` |
| confirmText | 底部确认按钮文案 | `ReactNode` | `确认` |
| showTitle | 是否在展示日历标题 | `boolean` | `true` |
| showSubTitle | 是否展示日期标题 | `boolean` | `true` |
| scrollAnimation | 是否启动滚动动画 | `boolean` | `true` |
| firstDayOfWeek | 设置周起始日 | `0-6` | `0` |
| closeIcon | 自定义 Icon | `ReactNode` | `close` |
| disableDate | 设置不可选日期 | `(date: CalendarDay) => boolean` | `-` |
| renderHeaderButtons | 自定义日历标题下部，可用以添加自定义操作 | `() => string` \| `JSX.Element` | `-` |
| renderBottomButton | 自定义日历底部按钮 | `() => string` \| `JSX.Element` | `-` |
| renderDay | 日期信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| renderDayTop | 日期顶部信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| renderDayBottom | 日期底部信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| onDayClick | 点击/选择后触发 | `(data: string) => {}` | `-` |
| onPageChange | 年月子标题到达顶部时触发 | `(param: string) => {}` | `-` |
| onConfirm | 选择之后或是点击确认按钮触发 | `(param: string) => {}` | `-` |
| onClose | 关闭时触发 | `() => {}` | `-` |

### CalendarDay

| 属性 | 类型 |
| --- | --- |
| day | `string` \| `number` |
| type | `string` |

### Ref

通过 ref 可以获取到 Calendar 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| scrollToDate | 滚动到指定日期所在月,如：'2023-06-30' | `string` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 日历选中状态时的元素背景色 | `$color-primary` |
| \--nutui-calendar-choose-background-color | 日历选中时区间内元素的背景色，区别区间两头元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-choose-color | 日历选中元素的字色 | `$color-primary` |
| \--nutui-calendar-choose-disable-background-color | 日历不可选元素的选中时的背景色 | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-disable-color | 日历不可选元素的字色 | `#d1d0d0` |
| \--nutui-calendar-base-font-size | 日历字号 | `$font-size-large` |
| \--nutui-calendar-title-font-size | 日历标题字号 | `$font-size-xl` |
| \--nutui-calendar-title-font-weight | 日历标题字重 | `500` |
| \--nutui-calendar-sub-title-font-size | 日历副标题字号 | `$font-size-base` |
| \--nutui-calendar-day67-color | 日历周末字色 | `$color-primary` |
| \--nutui-calendar-header-height | 日历自定义部分高度 | `24px` |
| \--nutui-calendar-day-width | 日历元素宽度 | `14.28%` |
| \--nutui-calendar-day-height | 日历元素高度 | `60px` |
| \--nutui-calendar-day-font-weight | 日历元素字重 | `500` |
| \--nutui-calendar-day-active-border-radius | 日历选中元素的圆角 | `4px` |
