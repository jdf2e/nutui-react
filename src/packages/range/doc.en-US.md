# Range 

## Intro
  
Slide the input bar to select a value within a given range.

## Install

```javascript
// react
import { Range } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  };
  return <Cell style={cellStyle}>
    <Range defaultValue={40} onEnd={(val) => Toast.text(`${val}`)} />
  </Cell>
};
export default App;
```

:::

### Controlled

:::demo

```tsx
import React from "react";
import { Range, Cell } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  };
  const [value, setValue] = useState(40)
  return <Cell style={{cellStyle}}>
    <Range value={value} onChange={(val) => setValue(val)} />
  </Cell>
};
export default App;
```

:::

### Range Desc

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  };
  return <Cell style={cellStyle}>
    <Range
      defaultValue={40}
      minDescription="0%"
      maxDescription="100%"
      currentDescription={(value) => `${value}%`}
      onEnd={(val) => Toast.text(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::
### Dual thumb

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={[20, 80]}
      range
      onEnd={(val) => Toast.text(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### Range

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={0}
      max={10}
      min={-10}
      onEnd={(val) => Toast.text(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### Step Size

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={30}
      step={5}
      onEnd={(val) => Toast.text(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### Hidden Range

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={30}
      maxDescription={null}
      minDescription={null}
      onEnd={(val) => Toast.text(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### Hidden Tag

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={20}
      currentDescription={null}
      onEnd={(val) => Toast.text(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::
### Disabled

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range defaultValue={50} disabled />
  </Cell>
};
export default App;
```

:::

### Custom Style

:::demo

```tsx
import React, {useState} from "react";
import { Range, ConfigProvider, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell
    style={{
      ...cellStyle,
      display: 'block',
    }}
  >
    <ConfigProvider
      theme={{
        [`--nutui-range-bar-btn-border`]: '1px solid rgba(52,96,250,1)',
        [`--nutui-range-active-color`]:
          'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
        [`--nutui-range-inactive-color`]: 'rgba(163,184,255,1)',
      }}
    >
      <Range
        className="test-range"
        defaultValue={40}
        style={{ color: 'red' }}
        marks={{
          10: 10,
          20: 20,
        }}
      />
    </ConfigProvider>
  </Cell>
};
export default App;
```

:::


### Custom Button

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  const [value, setValue] = useState(60)
  return <Cell style={cellStyle}>
    <Range
      value={value}
      button={<div className="range-custom-button">{value}</div>}
      onChange={(val) => setValue(val)}
      onEnd={(val) => Toast.text(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::
### Vertical

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <div style={{ width: '150px', height: '100%' }}>
      <Range
        defaultValue={20}
        vertical
        onEnd={(val) => Toast.text(`${val}`)}
      />
    </div>
    <div style={{ width: '150px', height: '100%' }}>
      <Range
        defaultValue={[20, 80]}
        vertical
        range
        onEnd={(val) => Toast.text(`${val}`)}
      />
    </div>
  </Cell>
};
export default App;
```

:::
### Marks

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  const verticalStyle = {
    height: '180px',
    padding: '10px',
  }
  return <>
    <Cell style={cellStyle}>
      <Range
        defaultValue={60}
        maxDescription={null}
        minDescription={null}
        marks={marks}
        onEnd={(val) => Toast.text(`${val}`)}
      />
    </Cell>
    <Cell style={cellStyle}>
      <Range
        defaultValue={[20, 80]}
        marks={marks}
        range
        onEnd={(val) => Toast.text(`${val}`)}
      />
    </Cell>
    <Cell style={verticalStyle}>
      <Range
        defaultValue={60}
        vertical
        maxDescription={null}
        minDescription={null}
        marks={marks}
        onEnd={(val) => Toast.text(`${val}`)}
      />
      <Range
        defaultValue={[20, 80]}
        vertical
        marks={marks}
        range
        onEnd={(val) => Toast.text(`${val}`)}
      />
    </Cell>
  </>
};
export default App;
```

:::

## Range

### Props

| Property         | Description            |  Type            | Default                   |
| ------------- | ------------------ | ---------------- | ------------------------ |
| value    | current percentage, controlled     | `number \| number[]` | `0`                      |
| defaultValue    | default percentage, uncontrolled     | `number \| number[]` | `0`                      |
| range         | Whether to enable dual slider mode | `boolean`          | `false`                  |
| max           | maximum             | `number`   | `100`                    |
| min           | minimum             | `number`   | `0`                      |
| maxDescription     | maximum description, `null` to hidden        | `ReactNode`   | -                    |
| minDescription     | minimum description, `null` to hidden          | `ReactNode`   | -                      |
| currentDescription | current progress percentage description, `null` to hidden  | `((value: SliderValue) => ReactNode) | null` |-                    |
| step          | step size               | `number`   | `1`                      |
| disabled      | Whether to disable the slider       | `boolean`          | `false`                  |
| vertical      | Whether to display vertically | `boolean` | `false` |
| marks | scale mark | `Object{key: number}` | `{}` |
| button | custom slide button | `ReactNode` | - |
| onChange            | Triggered when the progress changes and the drag is over | `(value) => void` | - |
| onStart         | Triggered when dragging starts           | -               |
| onEnd          | Triggered when the drag is over           | -               |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-range-tip-font-color | `$gray1` |
| --nutui-range-active-color | `$primary-color` |
| --nutui-range-inactive-color | `#fa958c` |
| --nutui-range-bar-btn-bg-color | `$white` |
| --nutui-range-bar-btn-width | `24px` |
| --nutui-range-bar-btn-height | `24px` |
| --nutui-range-bar-btn-border | `1px solid $primary-color` |
