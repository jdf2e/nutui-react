# Button

## Intro

Buttons are used to trigger an action, such as submitting a form.

## Install

```tsx
import { Button } from '@nutui/nutui-react';
```

## Demo

### The button type

The button supports six types: 'default', 'primary', 'info', 'warning', 'danger', 'success', which defaults to ' default'.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button type="primary">primary</Button>
      <Button type="info">info</Button>
      <Button type="default">default</Button>
      <Button type="danger">danger</Button>
      <Button type="warning">warning</Button>
      <Button type="success">success</Button>
    </>
  );
};
export default App;
```

:::

### Fill button

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button fill="solid">Solid</Button>
      <Button fill="outline">Outline</Button>
      <Button fill="none">None</Button>
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

const App = () => {
  return (
    <>
      <Button disabled type="primary">primary</Button>
      <Button fill="outline" disabled type="info">info</Button>
      <Button fill="outline" disabled type="primary">primary</Button>
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
  return (
    <>
      <Button shape="square" type="primary">square</Button>
      <Button type="info">circular</Button>
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
  return (
    <>
      <Button loading type="info" />
      <Button loading type="warning">Loading...</Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500);
          setLoading(!loading)
        }}
        style={{ margin: 8 }}
      >
        Click me!
      </Button>
    </>
  );
};
export default App;
```

:::

### Icon button

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button shape="square" plain type="primary" icon="star-fill" />
      <Button shape="square" type="primary" icon="star">collection</Button>
      <Button
        shape="round"
        type="primary"
        size="large"
        icon="star"
        iconSize={20}
      >
        collection
      </Button>
    </>
  );
};
export default App;
```

:::

### Button size

Support 'large', 'normal', 'small' three sizes, the default is 'normal'.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button size="large" type="primary">Large</Button>
      <Button type="primary">Normal</Button>
      <Button size="small" type="primary">Small</Button>
    </>
  );
};
export default App;
```

:::

### Block

Buttons are inline block-level elements by default, and the 'block' attribute allows you to set the element type of the button to a block-level element, which is commonly used to implement banner buttons.

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button block type="primary">Block</Button>
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
  return (
    <>
      <Button color="#7232dd">Monochrome</Button>
      <Button color="#7232dd" fill="outline">Monochrome</Button>
      <Button color="rgba(10,101,208,0.75)">Monochrome</Button>
      <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
        Gradient
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
| type | button style | `default` \| `primary` \| `info` \| `warning` \| `danger` \| `success` | `default` |
| size | button size | `normal` \| `large` \| `small` | `normal` |
| shape | button shape | `square` \| `round` | `round` | 
| color | button color | `string` | `-` |
| fill | fill pattern | `solid` \| `ouline` \| `none` | `solid` |
| disabled | disable the button | `boolean` | `false` |
| block | block element | `boolean` | `false` |
| icon | icon | `ReactNode` | `-` |
| loading | loading status | `boolean` | `false` |
| onClick | Triggered when the button is clicked | `(e: MouseEvent<HTMLButtonElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-button-border-radius | Rounded corners of the button | `24px` |
| \--nutui-button-border-width | Button border width | `1px` |
| \--nutui-button-normal-padding | The padding of the button whose size is normal | `0px 20px` |
| \--nutui-button-default-height | The height of the button whose type is default | `38px` |
| \--nutui-button-default-color | The text color of the button whose type is default |`$color-title` |
| \--nutui-button-default-background-color | The background color of the button whose type is default | `$white` |
| \--nutui-button-default-border-color | The border color of the button whose type is default | `$color-text` |
| \--nutui-button-default-padding | padding of buttons with type default | `0 18px` |
| \--nutui-button-default-font-size | The font size of the button whose type is default | `$font-size` |
| \--nutui-button-default-font-weight |The font weight of the button whose type is default | `$font-weight-bold` |
| \--nutui-button-large-height | The height of the button whose size is large | `48px` |
| \--nutui-button-large-font-size | The font size of buttons whose size is large | `$button-default-font-size` |
| \--nutui-button-small-padding | Padding for small buttons | `0 12px` |
| \--nutui-button-small-height | The height of the button whose size is small | `28px` |
| \--nutui-button-small-font-size | The font size of the button whose size is small | `$font-size-small` |
| \--nutui-button-small-font-weight | The font weight of the button whose size is small | `$font-weight` |
| \--nutui-button-mini-padding | Padding for buttons with size mini | `0 12px` |
| \--nutui-button-mini-height | The height of the button whose size is mini | `24px` |
| \--nutui-button-mini-font-size | The font size of the button whose size is mini | `$font-size-small` |
| \--nutui-button-mini-font-weight | The font weight of the button whose size is mini | `$font-weight` |
| \--nutui-button-primary-color | type is the text color of the primary button | `$white` |
| \--nutui-button-primary-border-color | Type is the border color of the primary button | `$color-primary` |
| \--nutui-button-info-color | Type is info button text color | `$white` |
| \--nutui-button-info-border-color | type is the border color of info button | `#496af2` |
| \--nutui-button-success-color | Type is the text color of the success button | `$white` |
| \--nutui-button-success-border-color | type is the border color of the success button | `rgba(38, 191, 38, 1)` |
| \--nutui-button-danger-color | Type is the text color of danger button | `$white` |
| \--nutui-button-danger-border-color | type is the border color of danger button | `rgba(250, 44, 25, 1)` |
| \--nutui-button-danger-background-color | type is the background color of the danger button | `rgba(250, 44, 25, 1)` |
| \--nutui-button-warning-color | Type is warning button text color | `$white` |
| \--nutui-button-warning-border-color | type is warning button border color | `rgba(255, 158, 13, 1)` |
| \--nutui-button-text-icon-margin | left margin of text with icon button | `4px` |
| \--nutui-button-disabled-opacity | opacity of button in disabled state | `0.68` |