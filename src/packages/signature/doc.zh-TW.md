# Signature 簽名

### 介紹

基於 Canvas 的簽名組件

### 安裝

```javascript
// react
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

## API

### Props

| 參數           | 說明                           | 類型   | 默認值                                              |
| -------------- | ------------------------------ | ------ | --------------------------------------------------- |
| customClass   | 自定義 class                   | String | -                                                   |
| lineWidth     | 線條的寬度                     | Number | 3                                                   |
| strokeStyle   | 繪圖筆觸顏色                   | String | '#000'                                              |
| type           | 圖片格式                       | String | 'png'                                               |
| unSupportTpl | 不支持 Canvas 情況下的展示文案 | String | '對不起，當前瀏覽器不支持 Canvas，無法使用本控件！' |

## Event

| 字段    | 說明                         | 回調參數                         |
| ------- | ---------------------------- | -------------------------------- |
| confirm`v1.3.8 废弃` | 點擊確認按鈕觸發事件回調函數 | canvas 和簽名圖片展示的 data URI |
| clear`v1.3.8 废弃`   | 點擊重簽按鈕觸發事件回調函數 | -                               |
| onConfirm`v1.3.8` | 點擊確認按鈕觸發事件回調函數 | canvas 和簽名圖片展示的 data URI |
| onClear`v1.3.8`   | 點擊重簽按鈕觸發事件回調函數 | -                               |

