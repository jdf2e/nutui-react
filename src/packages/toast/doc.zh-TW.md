# Toast 吐司

### 介绍

用于轻提示。

### 安装

```javascript
// react
import { Toast } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

#### 文字提示

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
          ) => textToast('网络失败，请稍后再试~')}
        />
        </>
    )
}
export default App
```
:::

#### 标题提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const titleToast = (msg: string) => {
      Toast.show({
      	content: msg,
        title: '标题提示'
      })
    }
    return (
        <>
        <Cell
          title="Toast 标题提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => titleToast('Toast 标题提示')}
        />
        </>
    )
}
export default App
```
:::
#### 成功提示

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


#### 失败提示

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
          title="Error 失败提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => errorToast('失败提示')}
        />
        </>
    )
}
export default App
```
:::


#### 警告提示

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


#### 加载提示

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
              title=" Loading 加载提示"

              onClick={(
                  event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
              ) => loadingToast('加载中')}
            />
        </>
    )
}
export default App
```
:::



#### 展示时长设置

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
              title="设置展示时长为10秒提示"

              onClick={(
                  event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
              ) => duringToast('设置展示时长为10秒')}
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
            >隐藏Toast</Button>
        </>
    )
}
export default App
```
:::

#### Toast自定义底部高度

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
        title='Toast 自定义底部高度'
        
        onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => toastBottom('自定义距离')}
        />
    )
}
export default App
```
:::


#### 加载Loading带非透明罩

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const iconToast = (msg: string) => {
      Toast.show({
        content: msg,
        style: {
          background: 'rgba(0, 0, 0, 0)'
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
            title="Loading状态非透明遮罩"
            
            onClick={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => iconToast('加载状态非透明遮罩')}
            />
        </>
    )
}
export default App
```
:::

## API

`Toast`只支持指令式調用

### Toast.show

`show`方法支持傳入`props`對象，對應屬性如下：

### Props

| 字段                | 说明                                            | 类型                                                         | 默认值       |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------ | ------------ |
| content             | Toast文本內容                                   | `React.ReactNode`                                            | -            |
| duration            | 展示时长（秒）<br>值为 0 时，toast 不会自动消失 | `number`                                                     | `2`          |
| position            | toast展示位置                                   | `'top' \| 'center' \| 'bottom'`                              | `'center'`   |
| title               | 标题                                            | `'string'`                                                   | -            |
| icon                | 自定义图标                                      | `'success' \| 'fail' \| 'loading' \| 'warn' \| React.ReactNode` | -            |
| size                | 文案尺寸，**small**/**base**/**large**三选一    | `string`                                                     | `base`       |
| className           | 自定义遮罩层类名                                | `string`                                                     | -            |
| style               | 自定义遮罩层样式                                | `React.CSSProperties`                                        | -            |
| contentClassName    | 自定义内容区类名                                | `string`                                                     | -            |
| contentStyle        | 自定义内容区样式                                | `React.CSSProperties`                                        | -            |
| onClose             | 关闭时触发的事件                                | `() => void`                                                 | `() => void` |
| closeOnOverlayClick | 是否在点击遮罩层后关闭提示                      | `boolean`                                                    | `false`      |

如果传入的参数是字符串类型，`Toast.show`会自动把它作为`content`

### Toast.clear

关闭所有显示中的`Toast`

### Toast.config

`Toast`全局配置，支持配置项`duration`、`position`、`closeOnOverlayClick`，使用方法如下：

```typescript
Toast.config({ duration: 1.5, position: 'top', closeOnOverlayClick: false });
```

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-toast-title-font-size | `16px` |
| --nutui-toast-text-font-size | `14px` |
| --nutui-toast-font-color | `#fff` |
| --nutui-toast-inner-padding | `24px 30px` |
| --nutui-toast-inner-bg-color | `$gray7` |
| --nutui-toast-inner-border-radius | `12px` |
| --nutui-overlay-bg-color | `rgba(0, 0, 0, 0)` |
