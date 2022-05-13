# Button 

### Introduce

Buttons are used to trigger an action, such as submitting a form.

### Install

``` javascript
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
        }, 1500),
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
| loading  | loading status                        | Boolean | `false`               |

### Events

| Event | Description           | Callback parameters     |
|--------|----------------|--------------|
| click  | Triggered when the button is clicked | event: MouseEvent |

