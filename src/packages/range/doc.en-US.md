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
import  React from "react";
import { Range,Cell } from '@nutui/nutui-react';

const App = () => {
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
            <Range modelValue={40} />
        </Cell>
    </>
    )
};

export default App;

```
:::


### Range Desc

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value, SetValue] = useState(40)
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
        SetValue(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
           <Range
            modelValue={value}
            minDescription="0%"
            maxDescription="100%"
            currentDescription={`${value}%`}
            onChange={(value) => {
              change(value)
            }}
          />
        </Cell>
    </>
    )
};
export default App;
```
:::
### Dual thumb

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value0, SetValue0] = useState([30, 60])
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
        SetValue0(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            range
            modelValue={value0}
            onChange={(value) => {
                change(value)
            }}
        />
        </Cell>
    </>
    )
};
export default App;
```
:::

### Range

:::demo

```tsx
import  React from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={0}
            max={10}
            min={-10}
            onChange={(value) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::

### Step Size

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value1, SetValue1] = useState(40)
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
        SetValue1(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={value1}
            step={5}
            onChange={(value: any) => {
                change(value, 'value1')
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::


### Hidden Range

:::demo

```tsx
import  React from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
            <Range
                modelValue={30}
                maxDescription={null}
                minDescription={null}
                onChange={(value: any) => {
                change(value)
                }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::


### Hidden Tag

:::demo

```tsx
import  React  from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={20}
            hiddenTag
            onChange={(value: any) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::


### Disabled

:::demo

```tsx
import  React from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={50}
            disabled
            onChange={(value: any) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::

### Custom Style

:::demo

```tsx
import  React from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={40}
            inactiveColor="rgba(163,184,255,1)"
            buttonColor="rgba(52,96,250,1)"
            activeColor="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            onChange={(value: number) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::


### Custom Button

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';
import "./demo.scss"

const App = () => {
    const [value2, SetValue2] = useState(60)
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
        SetValue2(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={value2}
            button={<div className="range-custom-button">{value2}</div>}
            onChange={(value: number) => {
                change(value, 'value2')
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::

### Vertical

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value3, SetValue3] = useState(20)
    const [value4, SetValue4] = useState([20, 80])
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
        switch (name) {
        case 'value3':
            SetValue3(value)
            break
        case 'value4':
            SetValue4(value)
            break
        default:
            break
        }
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    const verticalStyle = {
        height: '180px',
        padding: '10px',
    }
    return (
    <Cell style={verticalStyle}>
        <div style={{ width: '150px' }}>
        <Range
            modelValue={value3}
            vertical
            onChange={(value: number) => {
               change(value, 'value3')
            }}
        />
        </div>
        <div style={{ width: '150px' }}>
        <Range
            modelValue={value4}
            vertical
            range
            onChange={(value: number) => {
               change(value, 'value4')
            }}
        />
        </div>
    </Cell>
    )
};
export default App;
```
:::

### Marks

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value5, SetValue5] = useState(60)
    const [value6, SetValue6] = useState([20, 80])
    const [value7, SetValue7] = useState(60)
    const [value8, SetValue8] = useState([20, 80])
    const [marks, SetMarks] = useState({
        0: 0,
        20: 20,
        40: 40,
        60: 60,
        80: 80,
        100: 100,
    })
    const change = (value: number, name?: string) => {
        Toast.text(`value：${value}`)
        switch (name) {
            case 'value5':
                SetValue5(value)
                break
            case 'value6':
                SetValue6(value)
                break
            case 'value7':
                SetValue7(value)
                break
            case 'value8':
                SetValue8(value)
                break
            default:
                break
        }
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    const verticalStyle = {
        height: '180px',
        padding: '10px',
    }
    return (
    <>
        <Cell style={cellStyle}>
          <Range
            modelValue={value5}
            hiddenRange
            marks={marks}
            onChange={(value: number) => {
              change(value, 'value5')
            }}
          />
        </Cell>
        <Cell style={cellStyle}>
          <Range
            modelValue={value6}
            marks={marks}
            range
            onChange={(value: number) => {
              change(value, 'value6')
            }}
          />
        </Cell>
        <Cell style={verticalStyle}>
          <Range
            modelValue={value7}
            vertical
            hiddenRange
            marks={marks}
            onChange={(value: number) => {
              change(value, 'value7')
            }}
          />
          <Range
            modelValue={value8}
            vertical
            marks={marks}
            range
            onChange={(value: number) => {
              change(value, 'value8')
            }}
          />
        </Cell>
    </>
    )
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
