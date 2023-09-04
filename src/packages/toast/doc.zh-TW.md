# Toast 吐司

### 介紹

用於輕提示。

### 安裝

```tsx
import { Toast } from '@nutui/nutui-react';
```

## 代碼演示

### 文字提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const textToast = (msg: string) => {
      Toast.show(msg);
    }
    return (
        <>
        <Cell
          title="Text文字提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => textToast('網絡失敗，請稍後再試~')}
        />
        </>
    )
}
export default App
```

:::

### 標題提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const titleToast = (msg: string) => {
      Toast.show({
      	content: msg,
        title: '標題提示'
      })
    }
    return (
        <>
        <Cell
          title="Toast 標題提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => titleToast('Toast 標題提示')}
        />
        </>
    )
}
export default App
```

:::

### 成功提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const successToast = (msg: string) => {
      Toast.show({
        content: msg,
        icon: 'success'
      });
    }
    return (
        <>
        <Cell
          title="Success 成功提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => successToast('成功提示')}
        />
        </>
    )
}
export default App
```

:::

### 失敗提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const errorToast = (msg: string) => {
      Toast.show({
        content: msg,
        icon: 'fail'
      });
    }
    return (
        <>
        <Cell
          title="Error 失敗提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => errorToast('失敗提示')}
        />
        </>
    )
}
export default App
```

:::

### 警告提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const warningToast = (msg: string) => {
      Toast.show({
        content: msg,
        icon: 'warn'
      });
    }
    return (
        <>
            <Cell
              title=" Warning 警告提示"

              onClick={(
                  event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
              ) => warningToast('警告提示')}
            />
        </>
    )
}
export default App
```

:::

### 加載提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const loadingToast = (msg: string) => {
      Toast.show({
        content: msg,
        icon: 'loading'
      });
    }
    return (
        <>
            <Cell
              title=" Loading 加載提示"

              onClick={(
                  event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
              ) => loadingToast('加載中')}
            />
        </>
    )
}
export default App
```

:::

### 展示時長設置

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell, Button } from '@nutui/nutui-react';

const App = () => {
    const duringToast = (msg: string) => {
      Toast.show({
        content: msg,
        duration: 10
      });
    }
    
    const permanentToast = (msg: string) => {
      Toast.show({
        content: msg,
        duration: 0
      });
    }
    
    return (
        <>
            <Cell
              title="設置展示時長為10秒提示"

              onClick={(
                  event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
              ) => duringToast('設置展示時長為10秒')}
            />
            <Cell
              title="Toast 不消失"

              onClick={(
                  event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
              ) => permanentToast('Toast 不消失') }
            />
            <Button
              style={{ margin: 8 }}
              type="primary"
              shape="round"
              onClick={() => {
                  Toast.clear()
              }}
            >隱藏Toast</Button>
        </>
    )
}
export default App
```

:::

### Toast自定義底部高度

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const toastBottom = (msg: string) => {
      Toast.show({
        content: msg,
        icon: 'loading',
        style: {
          '--nutui-toast-inner-top': '90%'
        }
      });
    }
    return (
        <Cell
        title='Toast 自定義底部高度'
        
        onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => toastBottom('自定義距離')}
        />
    )
}
export default App
```

:::

### 加載Loading帶透明罩

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const iconToast = (msg: string) => {
      Toast.show({
        content: msg,
        style: {
          '--nutui-overlay-bg-color': 'rgba(0, 0, 0, 0)'
        },
        closeOnOverlayClick: true,
        onClose: () => {
          console.log('closeToast')
        },
      });
    }
    return (
        <>
            <Cell
            title="Loading狀態非透明遮罩"
            
            onClick={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => iconToast('加載狀態非透明遮罩')}
            />
        </>
    )
}
export default App
```

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
| size | 文案尺寸，三選一 | `small` \| `base` \| `large`  | `base` |
| contentClassName | 自定義內容區類名 | `string` | `-` |
| contentStyle | 自定義內容區樣式 | `React.CSSProperties` | `-` |
| closeOnOverlayClick | 是否在點擊遮罩層後關閉提示 | `boolean` | `false` |
| onClose | 關閉時觸發的事件 | `() => void` | `() => void` |

`Toast`只支持指令式調用

如果傳入的參數是字符串類型，`Toast.show`會自動把它作為`content`

### Ref

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| clear | 關閉所有顯示中的`Toast` | `-` |
| config | `Toast`全局配置 | `{ duration: number, position: 'top' \| 'center' \| 'bottom', closeOnOverlayClick: boolean }` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-toast-title-font-size | `toast`標題文字大小 | `16px` |
| \--nutui-toast-text-font-size | `toast`內容文字大小 | `14px` |
| \--nutui-toast-font-color | `toast`文字顏色 | `#fff` |
| \--nutui-toast-inner-top           | `toast`內容區自定義高度    | `50%`              |
| \--nutui-toast-inner-padding | `toast`內容區padding值 | `24px 30px` |
| \--nutui-toast-inner-bg-color | `toast`內容區背景色 | `$gray7` |
| \--nutui-toast-inner-border-radius | `toast`內容區圓角值 | `12px` |
| \--nutui-toast-inner-text-align | `toast`內容區文本對齊方式 | `center` |
| \--nutui-overlay-bg-color | `toast`遮罩背景色 | `rgba(0, 0, 0, 0)` |