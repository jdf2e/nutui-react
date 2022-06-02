# Radio

### Introduction

Used to single select in a set of alternatives

### Install

``` ts
import { Radio,RadioGroup } from '@nutui/nutui-react';
```

## Basic Usage

Tie the value of the current option by the label. And must be used in
conjunction with RadioGroup and Radio

:::demo

```tsx
import React, { useState } from 'react';
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <RadioGroup value={radioVal}>
      <Radio label="1">Option 1</Radio>
      <Radio disabled label="2">Option 2</Radio>
      <Radio label="3">Option 3</Radio>
    </RadioGroup>
    <RadioGroup value={radioVal} textPosition="left">
      <Radio label="1">Option 1</Radio>
      <Radio disabled label="2">Option 2</Radio>
      <Radio label="3">Option 3</Radio>
    </RadioGroup>
    <RadioGroup value={radioVal}>
      <Radio shape="button" label="1">Option 1</Radio>
      <Radio disabled shape="button" label="2">Option 2</Radio>
      <Radio shape="button" label="3">Option 3</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Horizontal use

:::demo

```tsx
import React, { useState } from 'react';
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <RadioGroup value={radioVal} direction="horizontal">
      <Radio label="1">Option 1</Radio>
      <Radio disabled label="2">Option 2</Radio>
      <Radio label="3">Option 3</Radio>
    </RadioGroup>
    <RadioGroup value={radioVal} textPosition="left" direction="horizontal">
      <Radio label="1">Option 1</Radio>
      <Radio disabled label="2">Option 2</Radio>
      <Radio label="3">Option 3</Radio>
    </RadioGroup>
    <RadioGroup value={radioVal} direction="horizontal">
      <Radio label="1">Option 1</Radio>
      <Radio disabled label="2">Option 2</Radio>
      <Radio label="3">Option 3</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Custom sizes

:::demo

```tsx
import React, { useState } from 'react';
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <RadioGroup value={radioVal}>
      <Radio label="1" iconSize="12">Size 12</Radio>
      <Radio label="2" iconSize="12">Size 12</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Customize the icon

It is recommended that 'iconName' and 'iconActiveName' be modified together

:::demo

```tsx
import React, { useState } from 'react';
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <RadioGroup value={radioVal}>
      <Radio label="1" iconName="checklist" iconActiveName="checklist">Custom
        icons</Radio>
      <Radio label="2" iconName="checklist" iconActiveName="checklist">Custom
        icons</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Trigger the change event

:::demo

```tsx
import React, { useState } from 'react';
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  const handleChange = (v) => {
    console.log(v)
  }
  return <>
    <RadioGroup value={radioVal} onChange={handleChange}>
      <Radio label="1">Trigger event</Radio>
      <Radio label="2">Trigger event</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Prop

### Radio

| Props          | Description | Type | Default          |
|----------------| ----- | ----- |------------------|
| disabled         | Disable the selection | Boolean                 | `false`           |
| iconSize        | [Icon size] (#/icon)                                           | String、Number          | `18`              |
| iconName        | [Icon Name] (#/icon), before selecting (it is recommended to modify it with 'iconActiveName') | String                  | `'check-normal'`  |
| iconActiveName | [Icon Name] (#/icon), selected (it is recommended to modify it with 'iconName') | String                  | `'check-checked'` |
| label            | The radio box identifies the | String、Number、Boolean | -                 |
| shape            | Shape, with optional values of button, round, | String                  | round             |

### RadioGroup

| Props          | Description | Type | Default          |
|----------------| ----- | ----- |------------------|
| value       | The identifier of the currently selected item, which is selected when the label value is consistent with the | String、Number、Boolean | -          |
| textPosition | Where the text is located, optional values: 'left', 'right' | String                  | `right`    |
| direction     | Use horizontal and vertical directions The optional values horizontal, vertical, | String                  | `vertical` |

## RadioGroup Event

| Props          | Description | Callback parameters|
|----- | ----- | ----- |
| change | Triggers | when the value changes The currently selected label value (label) [there is a value after setting the label, the default is empty] |