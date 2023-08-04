# Signature 簽名

## 介紹

基於 Canvas 的簽名組件

## 安裝

```tsx
import { Signature } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import  React from "react";
import { Signature} from '@nutui/nutui-react';

const App = () => {
    const confirm = (canvas: HTMLCanvasElement, data: string) => {
      const img = document.createElement('img')
      img.src = data
      const demo = document.querySelector('.demo') as HTMLElement
      demo.appendChild(img)
    }
    const clear = () => {
      const img = document.querySelector('.demo img')
      if (img) {
        img.remove()
      }
    }
    const demoStyles: React.CSSProperties = { margin: '1em 0' }
    return (
    <>
        <Signature onConfirm={confirm} onClear={clear} />
        <p className="demo-tips demo" style={demoStyles}>
            Tips: 點擊確認按鈕,下方顯示簽名圖片
        </p>
    </>
    );
};
export default App;
```

:::

### 修改顏色和簽字粗細

:::demo

```tsx
import  React from "react";
import { Signature} from '@nutui/nutui-react';

const App = () => {
    const confirm = (canvas: HTMLCanvasElement, data: string) => {
    const img = document.createElement('img')
    img.src = data
    const demo = document.querySelector('.demo') as HTMLElement
    demo.appendChild(img)
    }
    const clear = () => {
    const img = document.querySelector('.demo img')
    if (img) {
        img.remove()
    }
    }
    const demoStyles: React.CSSProperties = { margin: '1em 0' }
    return (
    <>
        <Signature
            lineWidth={4}
            strokeStyle="green"
            onConfirm={confirm}
            onClear={clear}
         />
        <p className="demo-tips demo" style={demoStyles}>
            Tips: 點擊確認按鈕,下方顯示簽名圖片
        </p>
    </>
    );
};
export default App;
```

:::

## Signature

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| lineWidth | 線條的寬度 | `number` | `3` |
| strokeStyle | 繪圖筆觸顏色 | `string` | `#000` |
| type | 圖片格式 | `string` | `png` |
| unsupported | 不支持 Canvas 情況下的展示文案 | `ReactNode` | `對不起，當前瀏覽器不支持 Canvas，無法使用本控件！` |
| onConfirm | 點擊確認按鈕觸發事件回調函數 | `onConfirm: (canvas: HTMLCanvasElement, dataurl: string) => void` | `-` |
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
| \--nutui-signature-font-size | 簽名文字字號 | `$font-text` |