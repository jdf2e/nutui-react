# TextArea

### Intro

Enter or edit text in the text box, and limit the number of entries is supported.

### Install

```javascript

import { TextArea } from '@nutui/nutui-react';

```

## Demo

### Basic Usage

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    const [value1, updateValue1] = useState('')
    const change = (value: any, event: Event) => {
        updateValue1(value)
    }
    return (
        <>
           <TextArea
            defaultValue={value1}
            className="text-1"
            style={{ fontSize: '12px' }}
            onChange={(value, event) => {
                change(value, event)
            }}
            onBlur={() => {
                console.log('blur')
            }}
            onFocus={() => {
                console.log('focus')
            }}
            />
        </>
    )
};
export default App
```
:::


### Display word count

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    const [value2, updateValue2] = useState('')
    return (
        <>
            <TextArea defaultValue={value2} limitShow maxlength="20" />
        </>
    )
};
export default App
```
:::

### Height customization, stretching

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    const [value3, updateValue3] = useState('')
    return (
        <>
            <TextArea defaultValue={value3} rows="1" autosize />
        </>
    )
};
export default App
```
:::

### read-only，disabled

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    return (
        <>
            <TextArea readonly defaultValue="textarea readonly" />
            <TextArea disabled defaultValue="textarea disabled" limitShow maxlength="20" />
        </>
    )
};
export default App
```
:::

### TextAlign

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    return (
        <>
            <TextArea defaultValue="TextAlign Right" textAlign="right" />
        </>
    )
};
export default App
```
:::

## API

### Props

| Attribute     | Description            | Type   | Default       |
| ------------ | ----------------------------------- | -------------- | -------------- |
| defaultValue | input value, support two-way binding              | String         | -              |
| placeholder  | set placeholder prompt text             | String         | ` 'please enter content' ` |
| maxlength    | limit the maximum input characters              | String、Number | -              |
| rows         | height of textarea, with priority higher than autosize attribute `Only H5 is supported`                                  | String、Number | `2`            |
| limitShow    | whether textarea displays the input characters. Use | Boolean        | `false`        |
| autosize     | whether to adapt the content height. You can also pass in objects, such as {maxheight: 200, minheight: 100}. The unit is PX          | Boolean        | `false`    |
| textAlign    | text position, optional values ` left ,  center,  right `     | String         | `left`         |
| readonly     | read only attribute          | Boolean        | `false`        |
| disabled     | disable attribute           | Boolean        | `false`        |

### Events

| Event   | Description           |Arguments  |
| ------ | -------------- | -------- |
| onChange | Triggered when the value of the input box changes | val      |
| onFocus  | Triggered when focusing     | val      |
| onBlur   | Triggered when out of focus     | val      |
