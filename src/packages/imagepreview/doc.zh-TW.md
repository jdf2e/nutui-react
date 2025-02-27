# ImagePreview組件

支持全屏預覽視頻和圖片，可函數式調用

## 引入

```tsx
import { ImagePreview } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 點擊縮略圖切換

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 設置初始頁碼

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 受控模式

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 設置輪播指示器及顏色

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 視頻、圖片預覽

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 關閉按鈕

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## ImagePreview

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否展示預覽圖片 | `boolean` | `false` |
| videos | 預覽的視頻數組（視頻自動放到圖片之前） | `Array<Object>` | `[]` |
| images | 預覽圖片數組 | `{ src: string; index?: number }[]` | `[]` |
| autoPlay | 自動輪播時長，0錶示不會自動輪播 | `number` \| `string` | `3000` |
| defaultValue | 初始頁碼 | `number` | `1` |
| value | 頁碼，受控 | `number` | `1` |
| pagination | 分頁是否展示 | `boolean` | `true` |
| indicator | 分頁指示器是否展示 | `boolean` | `false` |
| indicatorColor | 分頁指示器選中的顏色 | `string` | `#fff` |
| closeOnContentClick | 點擊圖片可以退出預覽 | `boolean` | `false` |
| closeIcon | 關閉按鈕 | `boolean` \| `ReactNode` | `false` |
| closeIconPosition | 關閉按鈕位置 | `top-right` \| `top-left` \| `bottom` | `top-right` |
| onChange | 切換時觸發 | `(value:number) => void` | `-` |
| onClose | 點擊遮罩關閉圖片預覽時觸發 | `() => void` | `-` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20ImagePreview)

### Component Logs

- 🐛 fix(imagepreview): 无法在预期情景正确关闭图片的异常 ([#2421](https://github.com/jdf2e/nutui-react/pull/2421)) @Alex-huxiyang `v2.6.13`
- ✨ add pagination whether to show pages in imagepreview ([#2411](https://github.com/jdf2e/nutui-react/pull/2411)) @xiaoyatong `v2.6.12`
- 🐛 fix(imagepreview): 阻止冒泡，防止点击图片关闭 ([#2281](https://github.com/jdf2e/nutui-react/pull/2281)) @Alex-huxiyang `v2.6.6`
- 🐛 fix(imagePreview): 阻止关闭预览事件对父结构的非必要影响 ([#2227](https://github.com/jdf2e/nutui-react/pull/2227)) @Alex-huxiyang `v2.6.4`
- 🐛 fix(imagepreview): demo拆解与规范 ([#2134](https://github.com/jdf2e/nutui-react/pull/2134)) @Alex-huxiyang `v2.5.1`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=imagepreview&expanded=true)
