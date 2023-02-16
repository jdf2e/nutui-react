# Radio

### Introduction

Used to single select in a set of alternatives

### Install

``` ts
// react
import { Radio } from '@nutui/nutui-react';

```

## Basic Usage

Tie the value of the current option by the label. And must be used in
conjunction with Radio.RadioGroup and Radio

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1">Option 1</Radio>
      <Radio disabled value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} textPosition="left">
      <Radio value="1">Option 1</Radio>
      <Radio disabled value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal}>
      <Radio shape="button" value="1">Option 1</Radio>
      <Radio disabled shape="button" value="2">Option 2</Radio>
      <Radio shape="button" value="3">Option 3</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Horizontal use

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal} direction="horizontal">
      <Radio value="1">Option 1</Radio>
      <Radio disabled value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} textPosition="left" direction="horizontal">
      <Radio value="1">Option 1</Radio>
      <Radio disabled value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} direction="horizontal">
      <Radio value="1">Option 1</Radio>
      <Radio disabled value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Custom sizes

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1" iconSize="12">Size 12</Radio>
      <Radio value="2" iconSize="12">Size 12</Radio>
    </Radio.RadioGroup>
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
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1" iconName="checklist" iconActiveName="checklist">Custom
        icons</Radio>
      <Radio value="2" iconName="checklist" iconActiveName="checklist">Custom
        icons</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Trigger the change event

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  const handleChange = (v) => {
    console.log(v)
  }
  return <>
    <Radio.RadioGroup value={radioVal} onChange={handleChange}>
      <Radio value="1">Trigger event</Radio>
      <Radio value="2">Trigger event</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## Render radios by configuring options

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupOptions = () => {
  const [radioVal, setRadioVal] = useState('1')
  const [optionsDemo1, setOptionsDemo1] = useState([
    {
      label: 'Option1',
      value: '1',
    },
    {
      label: 'Option2',
      value: '2',
      disabled: true,
    },
    {
      label: 'Option3',
      value: '3',
    },
  ])
  const handleChange = (v) => {
    console.log(v)
    setRadioVal(v)
  }
  return <Radio.RadioGroup options={optionsDemo1} value={radioVal} onChange={handleChange}></Radio.RadioGroup>
}
export default RadioGroupOptions;
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
| value            | Value is carrying identification, used in Group mode | String、Number、Boolean | -                 |
| shape            | Shape, with optional values of button, round, | String                  | round             |

### Radio.RadioGroup

| Props          | Description | Type | Default          |
|----------------| ----- | ----- |------------------|
| value       | The identifier of the currently selected item, which is selected when the label value is consistent with the | String、Number、Boolean | -          |
| textPosition | Where the text is located, optional values: 'left', 'right' | String                  | `right`    |
| direction     | Use horizontal and vertical directions The optional values horizontal, vertical, | String                  | `vertical` |
| options `v1.3.10`     | Render radios by configuring options      | Array                  | `Array<{ label: string value: string disabled?: boolean }` |

## Radio.RadioGroup Event

| Props    | Description | Callback parameters|
|----------| ----- | ----- |
| onChange | Triggers | when the value changes The currently selected label value (label) [there is a value after setting the label, the default is empty] |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-radio-label-font-color | ` $gray1` |
| --nutui-radio-label-font-active-color | `  $primary-color` |
| --nutui-radio-label-disable-color | `  $gray3` |
| --nutui-radio-icon-disable-color | `  $gray2` |
| --nutui-radio-label-button-border-color | `  $primary-color` |
| --nutui-radio-label-button-background | `  rgba(250, 44, 25, 0.05)` |
| --nutui-radio-label-margin-left | ` 15px` |
| --nutui-radio-button-border-radius | `  15px` |
| --nutui-radio-label-font-size | ` 14px` |
| --nutui-radio-button-font-size | ` 12px` |
| --nutui-radio-button-padding | ` 5px 18px` |
| --nutui-radio-icon-font-size | ` 18px` |
| --nutui-radio-icon-disable-color2 | `  $gray3` |
