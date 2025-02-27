# Signature 簽名

基於 Canvas 的簽名組件

## 引入

```tsx
import { Signature } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 修改顏色和簽字粗細

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## Signature

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| lineWidth | 線條的寬度 | `number` | `3` |
| strokeStyle | 繪圖筆觸顏色 | `string` | `#000` |
| type | 圖片格式 | `string` | `png` |
| unsupported | 不支持 Canvas 情況下的展示文案 | `ReactNode` | `對不起，當前瀏覽器不支持 Canvas，無法使用本控件！` |
| onConfirm | 點擊確認按鈕觸發事件回調函數 | `onConfirm: (canvas: HTMLCanvasElement, dataurl: string, isSigned?: boolean) => void` | `-` |
| onClear | 點擊重簽按鈕觸發事件回調函數 | `onClear: () => void` | `-` |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| confirm | 確認簽字 | `() => void` |
| clear | 清除簽字 | `() => void` |

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-signature-border-height | 簽名區域高度 | `10rem` |
| \--nutui-signature-border-color | 簽名邊框顏色 | `$color-border` |
| \--nutui-signature-border-width | 簽名邊框寬度 | `1px` |
| \--nutui-signature-background-color | 簽名背景顏色 | `$white` |
| \--nutui-signature-font-size | 簽名文字字號 | `$font-size-base` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Signature)

### Component Logs

- ✨ 签名组件增加当没有签名或已清空的情况下的参数暴露 ([#2288](https://github.com/jdf2e/nutui-react/pull/2288)) @xiaoyatong `v2.6.7`
- 🐛 fix(signature): 调整清空时机并更新demo ([#2190](https://github.com/jdf2e/nutui-react/pull/2190)) @Alex-huxiyang `v2.6.2`
- 🐛 fix(signature): demo拆解与规范 ([#2099](https://github.com/jdf2e/nutui-react/pull/2099)) @Alex-huxiyang `v2.5.0`
- 🐛 signature组件提取样式变量+修复taro h5 demo签字时滚动问题 ([#1220](https://github.com/jdf2e/nutui-react/pull/1220)) @songsong `v2.0.4`
- 🐛 修复signature小程序下demo签字时页面跟随滚动问题 ([#1225](https://github.com/jdf2e/nutui-react/pull/1225)) @songsong `v2.0.4`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=signature&expanded=true)
