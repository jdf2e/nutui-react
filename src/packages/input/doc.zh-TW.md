# Input 输入框

用户可以在文本框里输入内容。

## 引入

```tsx
import { Input } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 非受控

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义类型

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 禁用和只读

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 显示清除图标

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 受控下的清除

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 字数统计

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 带密码可见

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 格式化输入内容

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 对齐方式

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 事件

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### 布局

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

### 边框

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

## Input

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 初始默認值 | `string` | `-` |
| value | 初始默認值 | `string` | `-` |
| type | 輸入框類型，支持原生 `input` 標簽的所有 `type` 屬性，另外還支持 `number` `digit` | `string` | `text` |
| plain | 輸入框是容器型還是文本型，容器型一般都是帶外邊框的 | `boolean` | `false` |
| name | 組件名字，用於表單提交獲取數據 | `string` | `-` |
| placeholder | 輸入框為空時占位符 | `string` | `-` |
| align | 輸入框內容對齊方式，可選值 `left`、`center`、`right` | `string` | `left` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只讀 | `boolean` | `false` |
| autoFocus | 是否自動獲得焦點，iOS 系統不支持該屬性 | `boolean` | `false` |
| maxLength | 限製最長輸入字符 | `string` \| `number` | `-` |
| clearable | 展示清除 Icon | `boolean` | `false` |
| clearIcon | 清除圖標 Icon <a href="#/icon">可參考 Icon </a> | `ReactNode` | `MaskClose` |
| formatter | 輸入內容格式化函數 | `(val: string) => string` | `-` |
| formatTrigger | 格式化函數觸發的時機，可選值為 `onChange`、`onBlur` | `string` | `-` |
| onChange | 輸入框內容變化時觸發 | `(value: string) => void` | `-` |
| onBlur | 失去焦點後觸發 | `(value: string) => void` | `-` |
| onFocus | 獲得焦點後觸發 | `(value: string) => void` | `-` |
| onClear | 點擊清空按鈕時觸發 | `(value: string) => void` | `-` |
| onClick | 點擊 input 容器觸發 | `(value: MouseEvent<HTMLDivElement>) => void` | `-` |

### Ref

通過 ref 可以獲取到 Input 實例並調用實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| clear | 清除容器中的數據 | `-` |
| focus | 使容器獲取焦點 | `-` |
| blur | 使容器失去焦點 | `-` |
| nativeElement | 獲取當前容器 | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-input-border-bottom | 边框颜色 | `#eaf0fb` |
| \--nutui-input-border-bottom-width | 边框宽度 | `0px` |
| \--nutui-input-color | 文本颜色 | `$color-title` |
| \--nutui-input-disabled-color | 禁用的文本颜色 | `#c8c9cc` |
| \--nutui-input-background-color | 输入框背景颜色 | `$color-background-overlay` |
| \--nutui-input-border-radius | 输入框圆角 | `0` |
| \--nutui-input-font-size | 文本字号 | `$font-size-base` |
| \--nutui-input-lineheight | 行高 | `$font-size-l` |
| \--nutui-input-padding | 输入框容器的内边距 | `10px 25px` |

<Contribution name="Input" />
