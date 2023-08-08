# Overlay

## Intro

Create a mask layer that is typically used to prevent users from doing other things

## Install

```tsx
import { OverLay } from '@nutui/nutui-react';
```

## Demo

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
      <Overlay
        visible={visible}
        onClick={onClose}
        style={{'--nutui-overlay-zIndex': 2000,}}
        afterShow={() => {
          console.log('afterShow')
        }}
      />
    </>
  )
}
export default App;
```

:::

### Mask style

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
        Mask style
      </Button>
      <Overlay
        visible={visible}
        onClick={onClose}
        style={{
          backgroundColor: 'rgba(0, 0, 0, .2)',
          '--nutui-overlay-zIndex': 2000,
        }}
      />
    </>
  )
}
export default App;
```

:::

### Set animation time

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
        Set animation time
      </Button>
      <Overlay
        visible={visible}
        onClick={onClose}
        style={{ '--nutui-overlay-animation-duration': '2.5s' }}
        duration={2500}
        afterShow={() => {
          console.log('afterShow')
        }}
        afterClose={() => {
          console.log('afterClose')
        }}
      />
    </>
  )
}
export default App;
```

:::

### Do not lock background scrolling

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
        Do not lock background scrolling
      </Button>
      <Overlay visible={visible} onClick={onClose} lockScroll={false} />
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
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type="success" onClick={handleToggleShow}>
        Nested content
      </Button>
      <Overlay visible={visible} onClick={onClose}>
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

### Click the mask not to close

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
        Click the mask not to close
      </Button>
      <Overlay visible={visible} closeOnOverlayClick={false}>
        <div className="wrapper">
          <div className="content" onClick={onClose}>here is the text</div>
        </div>
      </Overlay>
    </>
  )
}
export default App;
```

:::

## Overlay

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether the current component is displayed | `boolean` | `false` |
| duration | Animation duration, in ms | `number` | `300` |
| lockScroll | Whether the background is locked | `boolean` | `true` |
| closeOnOverlayClick | Tap Mask off | `boolean` | `true` |
| onClick | Triggered when the button is clicked | `event: Event` | `-` |
| afterClose | Triggered after complete shutdown | `() => void` | `-` |
| afterShow | Trigger after complete display | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-overlay-bg-color | Overlay background color | `$gray7` |
| \--nutui-overlay-zIndex | z-index | `1000` |
| \--nutui-overlay-content-bg-color | Mask layer nested content background color | `$gray6` |
| \--nutui-overlay-content-color | Mask layer nested content font color | `$gray1` |
| \--nutui-overlay-animation-duration| Mask layer nested content animation duration | `0.3s` |