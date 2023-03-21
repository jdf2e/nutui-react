#  Switch 

### Introduction

Used to open or close the options.

### Install

```ts
// react
import { Switch } from '@nutui/nutui-react';
```

## Code demonstration

### Basic usage

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch checked />
    </>
  );
};  
export default App;

```
:::


### disable status

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch checked disable />
    </>
  );
};  
export default App;

```
:::

### onChange event

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  const onChange = (value: boolean, event: Event) => {
    alert(`Triggering the onChange event, the switch status：${value}`)
  }
  return ( 
    <>   
    <Switch onChange={(value, event) => onChange(value, event)} />
    </>
  );
};  
export default App;

```
:::
### Asynchronous control

:::demo
```tsx
import  React, { useState } from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  
  const onChangeAsync = (value: boolean, event: Event) => {
    alert(`Asynchronous trigger after 2 seconds ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return ( 
    <>   
    <Switch
      checked={checkedAsync}
      isAsync
      onChange={(value, event) => onChangeAsync(value, event)}
     />
    </>
  );
};  
export default App;

```
:::
### Custom color

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch activeColor="blue" />
    </>
  );
};  
export default App;

```
:::
### Support text

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch activeText="open" inactiveText="close" />
    </>
  );
};  
export default App;

```
:::




## API

### Props

| parameter            | illustrate             | type    | Defaults   |
|----------------|------------------|---------|-----------------------|
| checked        | switch status              | boolean | `false`    |
| disable        | Disable                     | boolean | `false`   |
| activeColor   | Background color when opening | string  | `#fa2c19`|
| inactiveColor | Background color when closed | string  | `#ebebeb` |
| activeText    | Text description when opening | string  | -        |
| inactiveText  | Text description when closed  | string  | -        |
| isAsync  | Whether the switch state is modified asynchronous   | boolean  | `false`                     |


### Events

| Incident name | illustrate           | Callback parameter       |
|--------|----------------|-------------------------------|
| onChange  | Trigger when switching switches | `value: boolean, event: Event` |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-switch-close-bg-color | `#ebebeb` |
| --nutui-switch-close--line-bg-color | `#f0f0f0` |
| --nutui-switch-width | `36px` |
| --nutui-switch-height | `21px` |
| --nutui-switch-line-height | `21px` |
| --nutui-switch-border-radius | `21px` |
| --nutui-switch-inside-width | `13px` |
| --nutui-switch-inside-height | `13px` |
| --nutui-switch-inside-open-transform | `translateX(146%)` |
| --nutui-switch-inside-close-transform | `translateX(30%)` |
