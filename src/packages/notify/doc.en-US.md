#  Notify

### Intro

Show message tips at the top of the page

### Install
```javascript
import { Notify } from '@nutui/nutui-react';
```

### Basic Usage

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const baseNotify = (msg: string) => {
        Notify.text(msg, {
        onClose: () => {
            console.log('close')
        },
        onClick: () => {
            console.log('click')
        },
        })
    }
    return (
        <>
            <Cell
            title="Basic Usage"
            onClick={(event: React.MouseEvent) => {
                baseNotify('Basic Usage')
            }}
            />
        </>
    )
}
export default App
```
:::

### Notify Type


:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const primaryNotify = (msg: string) => {
        Notify.primary(msg)
    }
    const successNotify = (msg: string) => {
        Notify.success(msg)
    }
    const errorNotify = (msg: string) => {
        Notify.danger(msg)
    }
    const warningNotify = (msg: string) => {
        Notify.warn(msg)
    }
    return (
        <>
            <Cell
                title="Primary Notify"
                onClick={(event: React.MouseEvent) => {
                    primaryNotify('Primary Notify')
                }}
            />
            <Cell
                title="Success Notify"
                onClick={(event: React.MouseEvent) => {
                successNotify('Success Notify')
                }}
            />
            <Cell
                title="Error Notify"
                onClick={(event: React.MouseEvent) => {
                errorNotify('Error Notify')
                }}
            />
            <Cell
                title="Warning Notify"
                onClick={(event: React.MouseEvent) => {
                warningNotify('Warning Notify')
                }}
            />
        </>
    )
}
export default App
```
:::

### Custom Style

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const cusBgNotify = (msg: string) => {
        Notify.text(msg, { 
            style: {
                '--nutui-notify-text-color': '#ad0000',
                '--nutui-notify-base-background-color': '#ffe1e1',
            },
             })
    }
    return (
        <>
            <Cell
                title="Customize background and font colors"
                onClick={(event: React.MouseEvent) => {
                    cusBgNotify('Customize background and font colors')
                }}
            />
        </>
    )
}
export default App
```
:::



### Custom Duration

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const timeNotify = (msg: string) => {
        Notify.text(msg, { duration: 1000 })
    }
    const positionNotify = (msg: string) => {
        Notify.text(msg, { position: 'bottom' })
    }
    return (
        <>
             <Cell
                title="Custom Duration"
                onClick={(event: React.MouseEvent) => {
                    timeNotify('Custom Duration')
                }}
            />
            <Cell
                title="Custom Position"
                onClick={(event: React.MouseEvent) => {
                    positionNotify('Custom Postion')
                }}
            />
        </>
    )
}
export default App
```
:::




## API
    
### Props
    
| Attribute      | Description                                    | Type          | Default   |
|------------|-------------------------------------------------------|---------------|----------|
| type       | Display Type（primary,success ,danger,warning）      | string        | `danger` |
| duration   | Display duration (ms),value is 0 ,notify not disappear | string        | `3000`     |
| position  | Custom Position (top, bottom)                               | string | `top`        |
| onClick  | Emitted when notify is clicked | `onClick: () => void`      | -|
| onClose | Emitted when notify is closed |`onClose: () => void`       | -|


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).



| Name | Description | Default |
| --- | --- | --- |
| --nutui-notify-height | Height of notify| `44px` |
| --nutui-notify-padding | Inside margin of notify| `12px 0` |
| --nutui-notify-font-size | The font size of notify| `14px` |
| --nutui-notify-line-height | The row height of notify| `auto` |
| --nutui-notify-text-color | The text color of notify | `$white` |
| --nutui-notify-base-background-color | The background color of notify| `linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%)` |
| --nutui-notify-primary-background-color | The main notify background color| `linear-gradient(315deg,rgba(73, 143, 242, 1) 0%,rgba(73, 101, 242,1) 100%)` |
| --nutui-notify-success-background-color | Background color of successful notify| `linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)` |
| --nutui-notify-danger-background-color | Danger notify background color| `rgba(250, 50, 25, 1)` |
| --nutui-notify-warning-background-color | Warning notify background color| `linear-gradient(135deg,rgba(255, 93, 13, 1) 0%,rgba(255, 154, 13, 1) 100%)` |