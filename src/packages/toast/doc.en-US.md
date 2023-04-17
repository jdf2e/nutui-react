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
        Toast.text(msg)
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
        Toast.text(msg,{title: 'title'})
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
        Toast.success(msg)
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
        Toast.fail(msg)
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
        Toast.warn(msg)
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
        Toast.loading(msg)
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
        Toast.text(msg, { duration: 10 })
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
            ) => {Toast.text('Toast Not Disappear', { duration: 0 })}}
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
        Toast.text(msg, {
            center: false,
            bottom: '10%',
        })
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



#### Loading with transparent cover

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const iconToast = (msg: string) => {
        Toast.loading(msg, {
        cover: true, 
        coverColor: 'rgba(0, 0, 0, 0)', 
        closeOnClickOverlay: true, 
        onClose: () => {
            console.log('closeToast')
        },
        })
    }
    return (
        <>
            <Cell
            title="Loading with transparent cover"
            
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

| Methods           | Description              | Attribute          | Return value     |
| ---------------- | ------------------------------------------- | --------------- | ---------- |
| Toast.text      | Show text toast   |  message｜ options | toast instance(message support incoming HTML) |
| Toast.success  | Show success toast     | message｜ options| toast instance |
| Toast.fail       | Show fail toast   | message｜ options| toast instance|
| Toast.warn       | Show warn toast    | message｜ options | toast instance |
| Toast.hide      | Close toast     | clearAll: boolean   | void       |
| Toast.loading       | Show loading toast      | message｜ options | toast instance |

### Props

| Attribute                | Description              |  Type         | Default                        |
| ------------------- | -------------- | ------------- | ----------------------------- |
| id                  | Identifier, share one instance at the same time, default to multiple instances| string \| number | -            |
| duration            | Toast duration(s), won't disappear if value is 0      | number       | `2`                          |
| title            | title     | string        |           -             |
| center  | Whether to display in the middle of the page (display at the bottom when false) | boolean | `true`                          |
| bottom | The distance from the bottom of the page (px or %), which takes effect when option.center is false | string | `30px`       |
| textAlignCenter     | Whether the multi-line copy is centered           | boolean       | `true`                          |
| bgColor             | background color (transparency) | string        | `rgba(0, 0, 0, 0.8)`      |
| customClass         |   Custom Class          | string        |          -                   |
| icon                | Custom Icon        | string        |         -                   |
| iconSize   | Custom iconSize      | string        | `20`                           |
| size        | Text Size **small**/**base**/**large**          | string        | `base`      |
| cover      | Whether to show the mask layer     | boolean       | `false` |
| coverColor          |  Cover Color   | string        | `rgba(0,0,0,0)`             |
| loadingRotate  | Whether the loading icon is rotated, only valid for the loading type  | boolean | `true`                          |
| onClose             |Callback function after close             | Function      | `null`         |
| closeOnClickOverlay | Whether to close when overlay is clicked         | boolean       | `false`         |



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
| --nutui-toast-cover-bg-color | `$gray7` |
