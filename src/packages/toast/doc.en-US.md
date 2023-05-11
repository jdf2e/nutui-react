# Toast 

### Intro

For light tips.

### Install

```javascript
// react
import { Toast } from '@nutui/nutui-react';
```

## Demo

### Usage

#### Text

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
          title="Text"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => textToast('text message~')}
        />
        </>
    )
}
export default App
```
:::

#### Title

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
          title="Toast Title"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => titleToast('title message~')}
        />
        </>
    )
}
export default App
```
:::

#### Success

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
          title="Toast Success"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => successToast('Success')}
        />
        </>
    )
}
export default App
```
:::


#### Fail

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
          title="Toast Fail"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => errorToast('Fail')}
        />
        </>
    )
}
export default App
```
:::


#### Warn

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
            title="Toast Warn"
            
            onClick={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => warningToast('Warn')}
            />
        </>
    )
}
export default App
```
:::


#### Loading

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
            title="Toast Loading"
            
            onClick={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => loadingToast('Loading')}
            />
        </>
    )
}
export default App
```
:::


#### Set Display Duration

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
            title="Show for 10 seconds"
            
            onClick={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => duringToast('Show for 10 seconds')}
            />
            <Cell
            title="Toast Not Disappear"
            
            onClick={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => permanentToast('Toast Not Disappear')
            />
            <Button
                style={{ margin: 8 }}
                type="primary"
                shape="round"
                onClick={() => {
                    Toast.hide()
                }}
            >Hide Toast</Button>
        </>
    )
}
export default App
```
:::

#### Custom Bottom Height

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const toastBottom = (msg: string) => {
      Toast.show({
        content: msg,
        icon: 'loading',
        maskStyle: {
          '--toast-inner-top': '90%'
        }
      });
    }
    return (
        <Cell
        title='Custom Bottom Height'
        
        onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => toastBottom('Custom Bottom Height')}
        />
    )
}
export default App
```
:::



#### Loading with non-transparent cover

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const iconToast = (msg: string) => {
      Toast.show({
        content: msg,
        maskStyle: {
          background: 'rgba(0, 0, 0, 0)'
        },
        closeOnOverlayClick: true,
      	maskClickable: false,
        onClose: () => {
          console.log('closeToast')
        },
      });
    }
    return (
        <>
            <Cell
            title="Loading with non-transparent cover"
            
            onClick={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => iconToast('Loading')}
            />
        </>
    )
}
export default App
```
:::



## API

`Toast` only supports Imperative calls.

### Toast.show

The `show` method supports passing in a `props` object, which contains the following props:

### Props

| Attribute                | Description              |  Type         | Default                        |
| ------------------- | -------------- | ------------- | ----------------------------- |
| content | Toast content | `React.ReactNode` | - |
| duration            | Toast duration(s), won't disappear if value is 0      | `number`     | `2`                          |
| position | Vertical position of toast | `'top' \|'center' \|'bottom'` | `'center'` |
| title            | title     | `string`      |           -             |
| icon | Toast icon | `'success' \|'fail' \|'loading' \|'warn' \|React.ReactNode` | - |
| size        | Text Size **small**/**base**/**large**          | `string`      | `base`      |
| maskClassName | Toast mask class name | `string` | - |
| maskStyle |  Toast mask style  | `React.CSSProperties` | -            |
| contentClassName | Toast content class name | `string` | -                         |
| contentStyle | Toast content style | `React.CSSProperties` | - |
| onClose             |Callback function after close             | `() => void` | `null`         |
| closeOnOverlayClick | Whether to close when overlay is clicked         | `boolean`     | `false`         |

You can also pass in a string directly, and `Toast.show` will automatically use it as `content`.

### Toast.clear

Turn off `Toast` in all displays.

### Toast.config

Methods for global configuration. Support `duration`, `position` and `maskClickable`. The configuration method is as follows:

```typescript
Toast.config({ duration: 1.5, position: 'top', maskClickable: false });
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-toast-title-font-size | `16px` |
| --nutui-toast-text-font-size | `14px` |
| --nutui-toast-font-color | `#fff` |
| --nutui-toast-inner-padding | `24px 30px` |
| --nutui-toast-inner-bg-color | `$gray7` |
| --nutui-toast-inner-border-radius | `12px` |
