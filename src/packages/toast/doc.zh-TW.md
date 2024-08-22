# Toast 吐司

#

用於輕提示。

### 引入

```tsx
import { Toast } from '@nutui/nutui-react'
```

## 示例代碼

### 文字提示

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## 展示時長設置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## Toast自定義底部高度

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## 加載Loading帶透明罩

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## 換行截斷方式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Toast

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| content | Toast文本內容 | `React.ReactNode` | `-` |
| duration | 展示時長（秒）<br>值為 0 時，toast 不會自動消失 | `number` | `2` |
| position | toast展示位置 | `top` \| `center` \| `bottom` | `center` |
| title | 標題 | `string` | `-` |
| icon | 自定義圖標 | `success` \| `fail` \| `loading` \| `warn` \| `React.ReactNode` | `-` |
| size | 文案尺寸，三選一 | `small` \| `base` \| `large` | `base` |
| contentClassName | 自定義內容區類名 | `string` | `-` |
| contentStyle | 自定義內容區樣式 | `React.CSSProperties` | `-` |
| closeOnOverlayClick | 是否在點擊遮罩層後關閉提示 | `boolean` | `false` |
| wordBreak | 換行截斷方式 | `normal \| break-all \| break-word ` | `break-all` |
| onClose | 關閉時觸發的事件 | `() => void` | `() => void` |

`Toast`只支持指令式調用

如果傳入的參數是字符串類型，`Toast.show`會自動把它作為`content`

Toast.config 全局配置：

```js
Toast.config({ className: 'demo', contentClassName: 'content-demo' })
```

### Ref

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| clear | 關閉所有顯示中的`Toast` | `-` |
| config | `Toast`全局配置 | `ToastProps` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-toast-title-font-size | `toast`標題文字大小 | `16px` |
| \--nutui-toast-text-font-size | `toast`內容文字大小 | `14px` |
| \--nutui-toast-font-color | `toast`文字顏色 | `#fff` |
| \--nutui-toast-inner-top | `toast`內容區自定義高度 | `50%` |
| \--nutui-toast-inner-padding | `toast`內容區padding值 | `24px 30px` |
| \--nutui-toast-inner-bg-color | `toast`內容區背景色 | `$color-mask` |
| \--nutui-toast-inner-border-radius | `toast`內容區圓角值 | `12px` |
| \--nutui-toast-inner-text-align | `toast`內容區文本對齊方式 | `center` |
