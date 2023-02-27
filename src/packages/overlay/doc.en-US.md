# Overlay 

### Introduce

Create a mask layer that is typically used to prevent users from doing other things

### Installation


``` ts
// react
import { OverLay } from '@nutui/nutui-react';
```

## Code demo

### Basic usage

:::demo
```tsx
import React, { useState } from "react";
import { Button, Overlay } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type="primary" onClick={handleToggleShow}>
        Displays the mask layer
      </Button>
      <Overlay visible={visible} onClick={onClose} />
    </>
  )
}
export default App;
```
:::

### Nested content

:::demo
```tsx
import React, { useState } from "react";
import { Button, Overlay } from '@nutui/nutui-react';

const WrapperStyle = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center'
}
const ContentStyle = {
  display: 'flex',
  width: '150px',
  height: '150px',
  background: '#fff',
  borderRadius: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red'
}
const App = () => {
  const [visible2, setVisible2] = useState(false)
  const handleToggleShow2 = () => {
    setVisible2(true)
  }
  const onClose2 = () => {
    setVisible2(false)
  }
  return (
    <>
      <Button type="success" onClick={handleToggleShow2}>
        Nested content
      </Button>
      <Overlay visible={visible2} onClick={onClose2}>
        <div className="wrapper" style={WrapperStyle}>
          <div className="content" style={ContentStyle}>Here is the main text</div>
        </div>
      </Overlay>
    </>
  )
}
export default App;
```
:::

## API

### Props

| Props                   | Description             | Type           | Default |
| ---------------------- | ---------------- | -------------- | ------ |
| visible                   | Whether the current component is displayed | boolean        | `false`  |
| zIndex                | Mask hierarchy         | number | `2000`   |
| duration               | Animation duration, in seconds | number | `0.3`    |
| overlayClass          | Custom mask class name   | string         | -      |
| overlayStyle          | Customize the mask style   | CSSProperties  | -      |
| lockScroll          | Whether the background is locked   | boolean  | `false`     |
| closeOnClickOverlay | Tap Mask off | boolean        | `true`   |

### Events

| Event | Description       | Callback parameters     |
| ------ | ---------- | ------------ |
| onClick  | Triggered when the button is clicked | `event: Event` |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-overlay-bg-color | `$gray7` |
| --nutui-overlay-content-bg-color | `$gray6` |
| --nutui-overlay-content-color | `$gray1` |
