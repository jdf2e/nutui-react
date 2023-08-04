# Signature

## Intro

Signature component based on canvas.

## Install

```tsx
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

## Signature

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| lineWidth | Width of line | `number` | `3` |
| strokeStyle | Drawing stroke color | `string` | `#000` |
| type | Picture format | `string` | `png` |
| unsupported | Display copy without canvas | `ReactNode` | `sorry, the current browser doesn't support canvas, so we can't use this control!` |
| onConfirm | Click the confirm button to trigger the event callback function | `onConfirm: (canvas: HTMLCanvasElement, dataurl: string) => void` | `-` |
| onClear | Clicking the reschedule button triggers the event callback function | `onClear: () => void` | `-` |

### Ref

| Property | Description | Type |
| --- | --- | --- |
| confirm | Confirmation of signature | `() => void` |
| clear | Clear signature | `() => void` |

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-signature-border-height | Signature area height | `10rem` |
| \--nutui-signature-border-color | Signature border color | `$color-border` |
| \--nutui-signature-border-width | Signature border width | `1px` |
| \--nutui-signature-background-color | Signature background color | `$white` |
| \--nutui-signature-font-size | Signature text size | `$font-text` |