#  Notify

### Intro

Show message tips at the top of the page

### Install
```javascript
import { Notify } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const baseNotify = (msg: string) => {
        Notify.text(msg, {
        onClosed: () => {
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
            click={(event: React.MouseEvent) => {
                baseNotify('Basic Usage')
            }}
            />
        </>
    )
}
export default App
```
:::

## Notify Type


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
                click={(event: React.MouseEvent) => {
                    primaryNotify('Primary Notify')
                }}
            />
            <Cell
                title="Success Notify"
                click={(event: React.MouseEvent) => {
                successNotify('Success Notify')
                }}
            />
            <Cell
                title="Error Notify"
                click={(event: React.MouseEvent) => {
                errorNotify('Error Notify')
                }}
            />
            <Cell
                title="Warning Notify"
                click={(event: React.MouseEvent) => {
                warningNotify('Warning Notify')
                }}
            />
        </>
    )
}
export default App
```
:::


## Custom
### Custom Style

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const cusBgNotify = (msg: string) => {
        Notify.text(msg, { color: '#ad0000', background: '#ffe1e1' })
    }
    return (
        <>
            <Cell
                title="Customize background and font colors"
                click={(event: React.MouseEvent) => {
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
                click={(event: React.MouseEvent) => {
                    timeNotify('Custom Duration')
                }}
            />
            <Cell
                title="Custom Position"
                click={(event: React.MouseEvent) => {
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
| type       | Display Type（primary,success ,danger,warning）      | String        | 'danger' |
| message    | Display copy, support line feed through \n              | Boolean       | false    |
| duration   | Display duration (ms),value is 0 ,notify not disappear | String        | 3000     |
| color      | Font Color                                               | String        | -        |
| background | Background color                                         | String        | -        |
| className | Custom class name                                        | String/Number | 1        |
| position `v1.3.0` | Custom Position (top, bottom)                               | String | 'top'        |

### Events

| Event | Description         | Arguments |
|--------|--------------|----------|
| onClick  | Emitted when notify is clicked | -       |
| onClosed | Emitted when notify is closed | -       |
