# Checkbox

### Introduction

Multi-select buttons are used for selection.

### Install

``` ts
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

```

## Basic Usage

:::demo

```tsx
import React, {useState} from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
      <Checkbox textPosition="left" label="check box"
                checked={checked} />
      <Checkbox textPosition="right" label="check box"
                checked={false} />
    </>
  )
}
export default CheckBoxDemo;
```

:::

## Disabled state

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      textPosition="right"
      label="not selected"
      checked={false}
      disabled
     />
    <Checkbox
      textPosition="right"
      label="selected"
      checked
      disabled
     />
  </>)
}
export default CheckBoxDemo;
```

:::

## Custom dimensions

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox label="size 25" iconSize={25} />
    <Checkbox label="size 10" iconSize={10} />
  </>)
}
export default CheckBoxDemo;
```

:::

## Customize the icon

It is recommended to set both the 'iconName' and 'iconActiveName' properties
here

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox iconName="checklist" iconActiveName="checklist">Custom
      icons</Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::

## Change event

When the value changes, the change event is triggered

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      checked={false}
      onChange={(state, label) => {
        Toast.text(`${state ? 'selected' : 'cancel'}了${label}`)
      }}
    >
      check box
    </Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::

## CheckboxGroup

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <CheckboxGroup
      checkedValue={checkboxgroup1}
      onChange={(value) => {
        console.log(value)
        setCheckboxgroup1(value)
      }}
    >
      <Checkbox checked={false} label="1">
        apple
      </Checkbox>
      <Checkbox checked={false} label="2">
        plum
      </Checkbox>
      <Checkbox checked={false} label="3">
        hawthorn
      </Checkbox>
      <Checkbox checked={false} label="4">
        pomegranate
      </Checkbox>
    </CheckboxGroup>
  )
}
export default CheckBoxDemo;
```

:::

## CheckBoxGroup Disabled

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <CheckboxGroup checkedValue={checkboxgroup1} disabled>
      <Checkbox label="1">
        apple
      </Checkbox>
      <Checkbox label="2">
        plum
      </Checkbox>
      <Checkbox label="3">
        hawthorn
      </Checkbox>
      <Checkbox label="4">
        pomegranate
      </Checkbox>
    </CheckboxGroup>
  )
}
export default CheckBoxDemo;
```

:::

## CheckboxGroup Select All/Cancel

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup, Button } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <CheckboxGroup
      style={{}}
      ref={checkboxgroup2Ref}
      checkedValue={checkboxgroup2}
      onChange={(value) => {
        Toast.text(`${value.length === 4 ? 'Select All' : 'Cancel'}`)
      }}
    >
      <Checkbox checked={false} label="1">
        apple
      </Checkbox>
      <Checkbox checked={false} label="2">
        pomegranate
      </Checkbox>
      <Checkbox label="3">
        hawthorn
      </Checkbox>
      <Checkbox label="4">
        pomegranate
      </Checkbox>
    </CheckboxGroup>
    <Button
      type="primary"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        ;(checkboxgroup2Ref.current as any).toggleAll(true)
      }}
    >
      Select All
    </Button>
    <Button
      type="info"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        ;(checkboxgroup2Ref.current as any).toggleAll(false)
      }}
    >
      Cancel
    </Button>
    <Button
      type="warning"
      onClick={() => {
        ;(checkboxgroup2Ref.current as any).toggleReverse()
      }}
    >
      Reverse
    </Button>
  </>)
}
export default CheckBoxDemo;
```

:::

## use checkboxGroup, Limit the maximum number of options (2)

:::demo
```tsx
import React, { useState, useRef } from "react";
import { Checkbox, CheckboxGroup, Button, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <CheckboxGroup
      checkedValue={checkboxgroup2}
      max={2}
      onChange={(value) => {
        Toast.text(value)
      }}
    >
      <Checkbox checked={false} label="1">
        Combined check box
      </Checkbox>
      <Checkbox checked={false} label="2">
        Combined check box
      </Checkbox>
      <Checkbox checked={false} label="3">
        Combined check box
      </Checkbox>
      <Checkbox checked={false} label="4">
        Combined check box
      </Checkbox>
    </CheckboxGroup>
  </>)
}
export default CheckBoxDemo;
```
:::

## Select all / half / cancel
:::demo
```tsx
import React, { useState, useRef } from "react";
import { Checkbox, CheckboxGroup, Button, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  const [checkbox1, setCheckbox1] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  return (<>
    <Checkbox
      checked={checkbox1}
      indeterminate={indeterminate}
      onChange={(state, label) => {
        ;(checkboxgroup2Ref.current as any).toggleAll(state)
      }}
    >
      selectAll
    </Checkbox>
    <CheckboxGroup
      ref={checkboxgroup2Ref}
      checkedValue={checkboxgroup2}
      onChange={(value) => {
        if (value.length === 4) {
          setIndeterminate(false)
          setCheckbox1(true)
        } else if (value.length && value.length < 4) {
          setIndeterminate(true)
          setCheckbox1(true)
        } else {
          setCheckbox1(false)
        }
      }}
    >
      <Checkbox checked={false} label="1">
        Combined check box
      </Checkbox>
      <Checkbox checked={false} label="2">
        Combined check box
      </Checkbox>
      <Checkbox checked={false} label="3">
        Combined check box
      </Checkbox>
      <Checkbox checked={false} label="4">
        Combined check box
      </Checkbox>
    </CheckboxGroup>
  </>)
}
export default CheckBoxDemo;
```
:::


## Checkbox

| Props          | Description | Type | Default          |
|----------------| ----- | ----- |------------------|
| checked        | Whether it is selected | Boolean | `false`          |
| disabled       | Whether to disable the selection | Boolean | `false`          |
| textPosition   | The location of the text, optionally：`left`,`right` | String | `right`          |
| iconSize       | [Icon size](#/icon) | String、Number | `18`             |
| iconName       | [Icon name](#/icon)，Before selecting (it is recommended to modify it with 'iconActiveName') | String | `'check-normal'` |
| iconActiveName | [Icon name](#/icon)，Once selected (it is recommended to modify it together with 'iconName') | String | `'checked'`      |
| iconIndeterminateName | [Icon Name](#/en-US/icon)，Semi selected state | String | `'check-disabled'`|
| iconClassPrefix       | Custom icon class name prefix, used to use custom icons        | String                  | `nut-icon` |
| iconFontClassName     | Basic class name of custom icon font        | String                  | `nutui-iconfont` |
| label          | The text content of the check box | String | -                |

## CheckboxGroup

| Props          | Description | Type | Default|
|----- | ----- | ----- | ----- |
| checkedValue | The identifier of the currently selected item, corresponding to 'label'  | String | -|
| disabled | Whether to disable the selection will be used for all check boxes under it | Boolean | `false`|
| max           | Limit the maximum number of options | `undefined|number` | `undefined`|

## Checkbox Event

| Props          | Description | Callback parameters|
|----- | ----- | ----- |
| onChange | Triggers | when the value changes (state, label), 'state' represents the current state, and 'label' represents the currently selected value|

## CheckboxGroup Event

| Props          | Description | Callback parameters|
|----- | ----- | ----- |
| onChange | Triggered when the value changes | label, 'label' returns an array representing the collection of the currently selected items|

## CheckboxGroup API

| 方法名 | 说明 | 参数 |
|----- | ----- | ----- |
| toggleAll | Select all / cancel | `f`,`true`,to select all，`false`,cancel the selection |
| toggleReverse | Reverse selection | - |