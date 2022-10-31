# Signature 

### Intro

Signature component based on canvas.

### Install

```javascript
import { Signature } from '@nutui/nutui-react'
```

## Demo

### Basic usage

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
           Tips: click the confirm button, and the signature image is displayed below
        </p>
    </>
    );
};
export default App;
```

:::

### Modify color and signature thickness

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
            Tips: click the confirm button, and the signature image is displayed below
        </p>
    </>
    );
};
export default App;
```

:::

## API

### Props

| Attribute           | Description                           | Type   | Default                                              |
| -------------- | ------------------------------ | ------ | --------------------------------------------------- |
| customClass   |  Custom class                 | String | -                                                   |
| lineWidth     | Width of line                    | Number | 3                                                   |
| strokeStyle   | Drawing stroke color                   | String | '#000'                                              |
| type           | Picture format                       | String | 'png'                                               |
| unSupportTpl |  Display copy without canvas | String | 'sorry, the current browser doesn't support canvas, so we can't use this control! ' |

## Event

| 字段    | 说明                         | 回调参数                         |
| ------- | ---------------------------- | -------------------------------- |
| confirm`v1.3.8废弃` | Click the confirm button to trigger the event callback function | Canvas and data URI displayed by signature imageURI |
| clear`v1.3.8废弃`   | Click the re sign button to trigger the event callback function | -                               |
| onConfirm`v1.3.8` | Click the confirm button to trigger the event callback function | Canvas and data URI displayed by signature imageURI |
| onClear`v1.3.8`   | Click the re sign button to trigger the event callback function | -                               |

