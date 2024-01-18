# Button

## Intro

Buttons are used to trigger an action, such as submitting a form.

## Install

```tsx
import { Button } from '@nutui/nutui-react';
```

## Demo

### Button type

The button supports six types: 'default', 'primary', 'info', 'warning', 'danger', 'success', which defaults to 'default'.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button type="primary" style={marginStyle}>primary</Button>
      <Button type="info" style={marginStyle}>info</Button>
      <Button type="default" style={marginStyle}>default</Button>
      <Button type="danger" style={marginStyle}>danger</Button>
      <Button type="warning" style={marginStyle}>warning</Button>
      <Button type="success" style={marginStyle}>success</Button>
    </>
  );
};
export default App;
```

:::

### Fill Button

The button supports four types: 'solid', 'outline', 'dashed', 'none', which defaults to 'solid'.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button fill="solid" style={marginStyle}>Solid</Button>
      <Button type="primary" fill="outline" style={marginStyle}>Outline</Button>
      <Button type="primary" fill="dashed" style={marginStyle}>Dashed</Button>
      <Button fill="none" style={marginStyle}>None</Button>
    </>
  );
};
export default App;
```

:::

### Icon button

Set the button icon through the 'icon' property, and provide the 'rightIcon' property to display the icon on the right side.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';
import { Star, Plus } from '@nutui/icons-react'

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Operation Button
      </Button>
      <Button
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Operation Button
      </Button>
      <Button
        type="primary"
        fill="dashed"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Operation Button
      </Button>
      <Button
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-color-primary-light)`,
          borderColor: `var(--nutui-color-primary)`,
          color: `var(--nutui-color-primary)`,
        }}
      >
        Operation Button
      </Button>
      <Button
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-3)`,
          color: `var(--nutui-gray-7)`,
        }}
      >
        Operation Button
      </Button>
      <Button
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-1)`,
          color: `var(--nutui-gray-7)`,
        }}
      >
        Operation Button
      </Button>
      <Button
        type="default"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Operation Button
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        type="primary"
        fill="dashed"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={marginStyle}
      >
        Operation Button
      </Button>
    </>
  );
};
export default App;
```

:::

### Disabled state

Disable the button through the 'disabled' attribute, which is not clickable.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';
import { Star, Plus } from '@nutui/icons-react'

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button
        disabled
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Disabled State
      </Button>
      <Button
        disabled
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Disabled State
      </Button>
      <Button
        disabled
        type="primary"
        fill="dashed"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Disabled State
      </Button>
      <Button
        disabled
        fill="solid"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Disabled State
      </Button>
      <Button
        disabled
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-3)`,
          color: `var(--nutui-gray-5)`,
        }}
      >
        Disabled State
      </Button>
      <Button
        disabled
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-1)`,
          color: `var(--nutui-gray-5)`,
        }}
      >
        Disabled State
      </Button>
      <Button
        disabled
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Disabled State
      </Button>
      <Button
        disabled
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        disabled
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        disabled
        type="primary"
        fill="dashed"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        disabled
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={marginStyle}
      >
        Disabled State
      </Button>
    </>
  );
};
export default App;
```

:::

### Button shape

Set the button shape through the 'shape' property, support circular, square buttons, and default to circle.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button style={marginStyle} type="primary" shape="square">
        square
      </Button>
      <Button style={marginStyle} type="primary">round</Button>
    </>
  );
};
export default App;
```

:::

### Load state

:::demo

```tsx
import React, { useState } from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const [loading, setLoading] = useState(false)
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button loading type="warning" style={marginStyle}>
        Loading
      </Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setLoading(!loading)
        }}
        style={marginStyle}
      >
        Click me!
      </Button>
    </>
  );
};
export default App;
```

:::

### Button size

Support 'large', 'normal', 'small', 'mini' four sizes, the default is 'normal'.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button size="large" type="primary">Large Button</Button>
      <Button type="primary" style={marginStyle}>Normal Button</Button>
      <Button style={marginStyle}>Normal Button</Button>
      <Button size="small" style={marginStyle} type="primary">
        Small Button
      </Button>
      <Button size="mini" style={marginStyle} type="primary">
        Mini Button
      </Button>
    </>
  );
};
export default App;
```

:::

### Block-level elements

Buttons are inline block-level elements by default, and the 'block' attribute allows you to set the element type of the button to a block-level element, which is commonly used to implement banner buttons.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button block type="primary">Block-level elements</Button>
    </>
  );
};
export default App;
```

:::

### Custom colors

The color property allows you to customize the color of the button.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button color="blue" style={marginStyle}>Monochrome button</Button>
      <Button fill="outline" color="#7232dd" style={marginStyle}>
        Monochrome button
      </Button>
      <Button color="rgba(10,101,208,0.75)" style={marginStyle}>
        Monochrome button
      </Button>
      <Button
        type="primary"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        style={marginStyle}
      >
        Gradient Button
      </Button>
    </>
  );
};
export default App;
```

:::

## Button

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | button style | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` | `default` |
| size | button size | `large` \| `small` \| `mini` \| `normal` |
| shape | button shape | `square` \| `round` | `round` |
| color | button color | `string` | `-` |
| fill | fill pattern | `solid` \| `outline`  \| `dashed` \| `none` | `solid` |
| disabled | disable the button | `boolean` | `false` |
| block | block element | `boolean` | `false` |
| icon | icon | `ReactNode` | `-` |
| rightIcon | icon on the right | `ReactNode` | `-` |
| loading | loading status | `boolean` | `false` |
| nativeType | button nativeType | `submit` \| `reset` \| `button` | `button` |
| onClick | Triggered when the button is clicked | `(e: MouseEvent<HTMLButtonElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-button-border-radius | Rounded corners of the button | `24px` |
| \--nutui-button-border-width | Button border width | `1px` |
| \--nutui-button-normal-padding | The padding of the button whose size is normal | `0px 16px` |
| \--nutui-button-default-height | The height of the button whose type is default | `32px` |
| \--nutui-button-default-color | The text color of the button whose type is default |`$color-title` |
| \--nutui-button-default-background-color | The background color of the button whose type is default | `$white` |
| \--nutui-button-default-border-color | The border color of the button whose type is default | `$color-text` |
| \--nutui-button-default-disabled | The color of the button whose type is default and whose status is disable | `$color-text-disabled` |
| \--nutui-button-default-padding | padding of buttons with type default | `0 16px` |
| \--nutui-button-default-font-size | The font size of the button whose type is default | `$font-size-base` |
| \--nutui-button-default-font-weight |The font weight of the button whose type is default | `$font-weight` |
| \--nutui-button-large-height | The height of the button whose size is large | `40px` |
| \--nutui-button-large-font-size | The font size of buttons whose size is large | `$button-default-font-size` |
| \--nutui-button-small-padding | Padding for small buttons | `0 12px` |
| \--nutui-button-small-height | The height of the button whose size is small | `28px` |
| \--nutui-button-small-font-size | The font size of the button whose size is small | `$font-size-small` |
| \--nutui-button-mini-padding | Padding for buttons with size mini | `0 12px` |
| \--nutui-button-mini-height | The height of the button whose size is mini | `24px` |
| \--nutui-button-mini-font-size | The font size of the button whose size is mini | `$font-size-small` |
| \--nutui-button-text-icon-margin | margin of text with icon button | `4px` |
