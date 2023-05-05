# TextArea

## Intro

Enter or edit text in the text box, and limit the number of entries is supported.

## Install

```javascript
// react
import { TextArea } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
  const [value1, updateValue1] = useState('')
  const change = (value: any, event: Event) => {
    updateValue1(value)
  }
  return (
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
  )
};
export default App
```
:::


### Display word count

:::demo

```tsx
import React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
  const [value2, updateValue2] = useState('')
  return (
    <TextArea defaultValue={value2} showCount maxLength={20} />
  )
};
export default App
```
:::

### Height customization, stretching

:::demo

```tsx
import React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
  const [value3, updateValue3] = useState('')
  return (
    <TextArea defaultValue={value3} rows={1} autoSize />
  )
};
export default App
```
:::

### read-only，disabled

:::demo

```tsx
import React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <TextArea readOnly defaultValue="textarea readOnly" />
      <TextArea disabled defaultValue="textarea disabled" showCount maxLength={20} />
    </>
  )
};
export default App
```
:::

### TextAlign

:::demo

```tsx
import React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
  return (
    <TextArea defaultValue="TextAlign Right" textAlign="right" /> 
  )
};
export default App
```
:::

## TextArea

### Props

| Property     | Description            | Type   | Default       |
| ------------ | ----------------------------------- | -------------- | -------------- |
| defaultValue | input value, support two-way binding              | `string`         | -              |
| placeholder  | set placeholder prompt text             | `string`         | `please enter content ` |
| maxLength    | limit the maximum input characters              | `number` | `140`              |
| rows         | height of textarea, with priority higher than autoSize attribute | `number` | `2`            |
| showCount    | whether textarea displays the input characters. Use | `boolean`        | `false`        |
| autoSize     | whether to adapt the content height.          | `boolean`        | `false`    |
| textAlign    | text position, optional values ` left ,  center,  right `     | `string`         | `left`         |
| readOnly     | read only attribute          | `boolean`        | `false`        |
| disabled     | disable attribute           | `boolean`        | `false`        |
| onChange | Triggered when the value of the input box changes | `(val) => void`      | - |
| onFocus  | Triggered when focusing     | `(val) => void`      | - |
| onBlur   | Triggered when out of focus     | `(val) => void`      | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-textarea-font | `$font-size-2` |
| --nutui-textarea-height | `100px` |
| --nutui-textarea-padding | `16px 10px 16px 16px `|
| --nutui-textarea-limit-color | `$text-color` |
| --nutui-textarea-text-color | `$title-color` |
| --nutui-textarea-text-curror-color  | `$title-color`|
| --nutui-textarea-text-line-height  | `30px` |
| --nutui-textarea-disabled-color | `$disable-color` |
