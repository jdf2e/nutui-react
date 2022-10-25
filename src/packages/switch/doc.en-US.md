#  Switch 

### Introduction

Used to open or close the options.

### Install

```ts
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
| checked        | switch status              | Boolean | `false`    |
| disable        | Disable                     | Boolean | `false`   |
| activeColor   | Background color when opening | String  | `#fa2c19`|
| inactiveColor | Background color when closed | String  | `#ebebeb` |
| activeText    | Text description when opening | String  | -        |
| inactiveText  | Text description when closed  | String  | -        |
| isAsync  | Whether the switch state is modified asynchronous   | Boolean  | `false`                     |


### Events

| Incident name | illustrate           | Callback parameter       |
|--------|----------------|-------------------------------|
| onChange `v1.3.8` | Trigger when switching switches | (value: boolean,event: Event) |
