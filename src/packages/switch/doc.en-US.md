# Switch

## Introduction

Used to open or close the options.

## Install

```tsx
import { Switch } from '@nutui/nutui-react';
```

## Demo

### Uncontrolled

:::demo

```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch defaultChecked />
    </>
  );
};  
export default App;

```

:::

### Controlled

:::demo

```tsx
import  React, { useState } from "react";
import { Switch, Toast } from '@nutui/nutui-react';

const App = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  
  const onChangeAsync = (value: boolean, event: Event) => {
    Toast.show(`Asynchronous trigger after 2 seconds ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return ( 
    <>   
    <Switch
      checked={checkedAsync}
      onChange={(value, event) => onChangeAsync(value, event)}
     />
    </>
  );
};  
export default App;

```

:::

### disabled status

:::demo

```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch defaultChecked disabled />
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
import { Switch, Toast } from '@nutui/nutui-react';

const App = () => {
  const onChange = (value: boolean, event: Event) => {
    Toast.show(`Triggering the onChange event, the switch status：${value}`)
  }
  return ( 
    <>   
    <Switch defaultChecked  onChange={(value, event) => onChange(value, event)} />
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
    <Switch defaultChecked style={{ '--nutui-switch-open-background-color': 'blue' }} />
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
    <Switch  defaultChecked activeText=
"open" inactiveText="close" />
    </>
  );
};  
export default App;

```

:::

## Switch

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultChecked | Switch status, uncontrolled | `boolean` | `false` |
| checked | Switch status, controlled | `boolean` | `false` |
| disabled | Disabled | `boolean` | `false` |
| activeText | Text description when opening | `string` | `-` |
| inactiveText | Text description when closed | `string` | `-` |
| onChange | Trigger when switching switches | `onChange:(value: boolean, event: Event)` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-switch-close-background-color | Switch off state background color | `#ebebeb` |
| \--nutui-switch-open-background-color | Switch on background color | `$primary-color` |
| \--nutui-switch-width | Switch width | `36px` |
| \--nutui-switch-height | Switch height | `21px` |
| \--nutui-switch-line-height | Switch line height | `21px` |
| \--nutui-switch-border-radius | Switch border radius | `21px` |
| \--nutui-switch-inside-width | Width of button inside switch | `13px` |
| \--nutui-switch-inside-height | Switch internal button height | `13px` |
| \--nutui-switch-inside-open-transform | Position of internal button in switch on state | `translateX(146%)` |
| \--nutui-switch-inside-close-transform | Switch off state internal button position | `translateX(30%)` |
| \--nutui-switch-close-line-bg-color | Switch off state inner button line color | `#f0f0f0` |