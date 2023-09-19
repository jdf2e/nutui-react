# Notify

## Intro

Show message tips at the top of the page

## Install

```tsx
import { Notify } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const baseNotify = (message: string) => {
        Notify.text(message, {
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
    const primaryNotify = (message: string) => {
        Notify.primary(message)
    }
    const successNotify = (message: string) => {
        Notify.success(message)
    }
    const errorNotify = (message: string) => {
        Notify.danger(message)
    }
    const warningNotify = (message: string) => {
        Notify.warn(message)
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
    const cusBgNotify = (message: string) => {
        Notify.text(message, { 
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
    const timeNotify = (message: string) => {
        Notify.text(message, { duration: 1000 })
    }
    const positionNotify = (message: string) => {
        Notify.text(message, { position: 'bottom' })
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

## Notify

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Display Type（primary,success ,danger,warning） | `string` | `danger` |
| duration | Display duration (ms),value is 0 ,notify not disappear | `string` | `3000` |
| position | Custom Position (top, bottom) | `string` | `top` |
| onClick | Emitted when notify is clicked | `onClick: () => void` | `-` |
| onClose | Emitted when notify is closed | `onClose: () => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-notify-height | Height of notify | `40px` |
| \--nutui-notify-padding | Inside margin of notify | `0 10px` |
| \--nutui-notify-font-size | The font size of notify | `$font-size` |
| \--nutui-notify-text-color | The text color of notify | `$white` |
| \--nutui-notify-base-background-color | The background color of notify | `$color-primary-gradient-1` |
| \--nutui-notify-primary-background-color | The main notify background color | `$color-info` |
| \--nutui-notify-success-background-color | Background color of successful notify | `linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)` |
| \--nutui-notify-danger-background-color | Danger notify background color | `$color-primary` |
| \--nutui-notify-warning-background-color | Warning notify background color | `$color-warning` |