# Toast 吐司

## 介绍

用于轻提示。

## 安装

```tsx
import { Toast } from '@nutui/nutui-react';
```

## 代码演示

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
          ) => textToast('网络失败，请稍后再试~')}
        />
        </>
    )
}
export default App
```

:::

### 标题提示

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

### 失败提示

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

### 加载提示

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

### 展示时长设置

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

### Toast自定义底部高度

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

### 加载Loading带透明罩

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

## Toast


### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | Toast文本内容 | `React.ReactNode` | `-` |
| duration | 展示时长（秒）<br>值为 0 时，toast 不会自动消失 | `number` | `2` |
| position | toast展示位置 | `top` \| `center` \| `bottom` | `center` |
| title | 标题 | `string` | `-` |
| icon | 自定义图标 | `success` \| `fail` \| `loading` \| `warn` \| `React.ReactNode` | `-` |
| size | 文案尺寸，三选一 | `small` \| `base` \| `large`  | `base` |
| contentClassName | 自定义内容区类名 | `string` | `-` |
| contentStyle | 自定义内容区样式 | `React.CSSProperties` | `-` |
| closeOnOverlayClick | 是否在点击遮罩层后关闭提示 | `boolean` | `false` |
| lockScroll | 背景是否锁定 | `boolean` | `false` |
| onClose | 关闭时触发的事件 | `() => void` | `() => void` |

`Toast`只支持指令式调用

如果传入的参数是字符串类型，`Toast.show`会自动把它作为`content`

### Ref

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| clear | 关闭所有显示中的`Toast` | `-` |
| config | `Toast`全局配置 | `{ duration: number, position: 'top' \| 'center' \| 'bottom', closeOnOverlayClick: boolean, lockScroll: boolean }` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-toast-title-font-size | `toast`标题文字大小 | `16px` |
| \--nutui-toast-text-font-size | `toast`内容文字大小 | `14px` |
| \--nutui-toast-font-color | `toast`文字颜色 | `#fff` |
| \--nutui-toast-inner-top           | `toast`内容区自定义高度    | `50%`              |
| \--nutui-toast-inner-padding | `toast`内容区padding值 | `24px 30px` |
| \--nutui-toast-inner-bg-color | `toast`内容区背景色 | `$gray7` |
| \--nutui-toast-inner-border-radius | `toast`内容区圆角值 | `12px` |
| \--nutui-toast-inner-text-align | `toast`内容区文本对齐方式 | `center` |
| \--nutui-overlay-bg-color | `toast`遮罩背景色 | `rgba(0, 0, 0, 0)` |