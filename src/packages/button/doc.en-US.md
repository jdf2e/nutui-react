# Button 

### Introduce

Buttons are used to trigger an action, such as submitting a form.

### Install

``` javascript
// react
import { Button } from '@nutui/nutui-react';

```

## Demo

### The button type

The button supports six types: 'default', 'primary', 'info', 'warning', 'danger', 'success', which defaults to 'default'.

:::demo
```tsx
import  React from "react";
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

### Plain button

Set the button to naïve with the text of the naïve button and the background white with the 'plain' attribute.

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
<Button plain type="primary">primary</Button>
<Button plain type="info">info</Button>
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
import  React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
<Button disabled type="primary">primary</Button>
<Button plain disabled type="info">info</Button>
<Button plain disabled type="primary">primary</Button>
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
import  React from "react";
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
import  React ,{useState} from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const [loading,setLoading] = useState(false)
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
import  React from "react";
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
import  React from "react";
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
import  React from "react";
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
import  React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => { 
  return (
    <>
<Button color="#7232dd">Monochrome</Button>
<Button color="#7232dd" plain>Monochrome</Button>
<Button color="linear-gradient(to right, #ff6034, #ee0a24)">
  Gradient
</Button>
    </>
  );
};
export default App;
```
:::
## API

### Props

| Props    | Description                             | Type   | Default           |
|----------|----------------------------------|--------|------------------|
| type     | Type, optionally `primary` `info` `warning` `danger` `success` | String |`default`         |
| size     | Dimensions, optionally `large` `small`  | String | `normal`      |
| shape    | Shape, optionally `square` | String | `round`             |
| color    | Button color, which supports incoming linear-gradient gradients     | String | - |
| plain    | 	Whether it is a naïve button or not                       | Boolean | `false`             |
| disabled | 	Whether to disable the button                       | Boolean | `false`              |
| block    | Whether it is a block-level element                        | Boolean | `false`               |
| icon     | Button icon, with the Icon component name property                        | String | -     |
| iconSize`v1.4.7` | Button icon size, with the Icon's size property | string、number | 16 |
| loading  | loading status                        | Boolean | `false`               |

### Events

| Event | Description           | Callback parameters     |
|--------|----------------|--------------|
| onClick`v1.3.8`  | Triggered when the button is clicked | event: MouseEvent |

### Support Native MiniProgram API
Not supported native MiniProgram API before 1.3.11 version, if you are a user who needs to use the native MiniProgram button component capability，please upgrade to version 1.3.11 as soon as possible. For detailed API of native MiniProgram button components, please go to[more documents](https://taro-docs.jd.com/docs/components/forms/button)

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-button-border-radius | ` 25px` |
| --nutui-button-border-width | ` 1px` |
| --nutui-button-default-bg-color | ` $white` |
| --nutui-button-default-border-color | `  rgba(204, 204, 204, 1)` |
| --nutui-button-default-color | ` $gray1` |
| --nutui-button-plain-color`v1.4.8` | ` $gray2` |
| --nutui-button-default-padding | ` 0 18px` |
| --nutui-button-mini-padding | ` 0 12px` |
| --nutui-button-small-padding | ` 0 12px` |
| --nutui-button-small-height | ` 28px` |
| --nutui-button-mini-height | ` 24px` |
| --nutui-button-default-height | ` 38px` |
| --nutui-button-large-height | ` 48px` |
| --nutui-button-large-line-height | ` 46px` |
| --nutui-button-small-line-height | ` 26px` |
| --nutui-button-block-height | ` 48px` |
| --nutui-button-default-line-height | `  36px` |
| --nutui-button-block-line-height | ` 46px` |
| --nutui-button-default-font-size | `  $font-size-2` |
| --nutui-button-large-font-size | `  $button-default-font-size` |
| --nutui-button-small-font-size | `  $font-size-1` |
| --nutui-button-mini-font-size | `  $font-size-1` |
| --nutui-button-mini-line-height | ` 1.2` |
| --nutui-button-text-icon-width | ` 5px` |
| --nutui-button-text-icon--large-width | ` 10px` |
| --nutui-button-text-icon-small-width | ` 2px` |
| --nutui-button-text-icon-mini-width | ` 1px` |
| --nutui-button-disabled-opacity | ` 0.68` |
| --nutui-button-primary-color | ` $white` |
| --nutui-button-primary-border-color | `  $primary-color` |
| --nutui-button-info-color | ` $white` |
| --nutui-button-info-border-color | `  #496af2` |
| --nutui-button-success-color | ` $white` |
| --nutui-button-success-border-color | `  rgba(38, 191, 38, 1)` |
| --nutui-button-danger-color | ` $white` |
| --nutui-button-danger-border-color | `  rgba(250, 44, 25, 1)` |
| --nutui-button-danger-background-color | `  rgba(250, 44, 25, 1)` |
| --nutui-button-warning-color | ` $white` |
| --nutui-button-warning-border-color | `  rgba(255, 158, 13, 1)` |
| --nutui-button-plain-background-color | `  $white` |
| --nutui-button-small-round-border-radius | `  $button-border-radius` |
