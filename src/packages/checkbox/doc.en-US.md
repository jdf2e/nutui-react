# Checkbox

### Introduction

Multi-select buttons are used for selection.

### Install

``` ts
import { Checkbox, CheckBoxGroup } from '@nutui/nutui-react';

```

## Basic Usage

```html
const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
    <CheckBox textPosition={'left'} label={'check box'} checked={checked}></CheckBox>
    <CheckBox textPosition={'right'} label={'check box'} checked={false}></CheckBox>
  </>
  )
}
```

## Disabled state

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox
      textPosition={'right'}
      label={'not selected'}
      checked={false}
      disabled={true}
    ></CheckBox>
    <CheckBox
      textPosition={'right'}
      label={'selected'}
      checked={true}
      disabled={true}
    ></CheckBox>
  </>)
}
```

## Custom dimensions

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox label={'size 25'} iconSize={25}></CheckBox>
    <CheckBox label={'size 10'} iconSize={10}></CheckBox>
  </>)
}
```

## Customize the icon

It is recommended to set both the 'iconName' and 'iconActiveName' properties here

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox iconName="checklist" iconActiveName="checklist">Custom icons</CheckBox>
  </>)
}
```


## Change event

When the value changes, the change event is triggered

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox
      checked={false}
      onChange={(state, label) => {
      Toast.text(`${state ? 'selected' : 'cancel'}了${label}`)
      }}
      >
      check box
    </CheckBox>
  </>)
}
```

## CheckBoxGroup

```html
const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <CheckBoxGroup
      checkedValue={checkboxgroup1}
      onChange={(value) => {
    console.log(value)
    setCheckboxgroup1(value)
    }}
    >
      <CheckBox checked={false} label="1">
        apple
      </CheckBox>
      <CheckBox checked={false} label="2">
        plum
      </CheckBox>
      <CheckBox checked={false} label="3">
        hawthorn
      </CheckBox>
      <CheckBox checked={false} label="4">
        pomegranate
      </CheckBox>
    </CheckBoxGroup>
  )
}
```

## CheckBoxGroup Select All/Cancel

```html
const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <CheckBoxGroup
      style={{}}
      ref={checkboxgroup2Ref}
      checkedValue={checkboxgroup2}
      onChange={(value) => {
    Toast.text(`${value.length === 2 ? 'Select All' : 'Cancel'}`)
    }}
    >
    <CheckBox checked={false} label="1">
      apple
    </CheckBox>
    <CheckBox checked={false} label="2">
      pomegranate
    </CheckBox>
    </CheckBoxGroup>
    <Button
      type="primary"
      onClick={() => {
    ;(checkboxgroup2Ref.current as any).toggleAll(true)
    }}
    >
    Select All
    </Button>
    <Button
      type="info"
      onClick={() => {
    ;(checkboxgroup2Ref.current as any).toggleAll(false)
    }}
    >
    Cancel
    </Button>
  </>)
}
```

## Checkbox

| Props          | Description | Type | Default          |
|----------------| ----- | ----- |------------------|
| checked        | Whether it is selected | Boolean | `false`          |
| disabled       | Whether to disable the selection | Boolean | `false`          |
| textPosition   | The location of the text, optionally：`left`,`right` | String | `right`          |
| iconSize       | [Icon size](#/icon) | String、Number | `18`             |
| iconName       | [Icon name](#/icon)，Before selecting (it is recommended to modify it with 'iconActiveName') | String | `'check-normal'` |
| iconActiveName | [Icon name](#/icon)，Once selected (it is recommended to modify it together with 'iconName') | String | `'checked'`      |
| label          | The text content of the check box | String | -                |


## CheckBoxGroup

| Props          | Description | Type | Default|
|----- | ----- | ----- | ----- |
| checkedValue | The identifier of the currently selected item, corresponding to 'label'  | String | -|
| disabled | Whether to disable the selection will be used for all check boxes under it | Boolean | `false`|



## Checkbox Event

| Props          | Description | Callback parameters|
|----- | ----- | ----- |
| change | Triggers | when the value changes (state, label), 'state' represents the current state, and 'label' represents the currently selected value|

## CheckBoxGroup Event

| Props          | Description | Callback parameters|
|----- | ----- | ----- |
| change | Triggered when the value changes | label, 'label' returns an array representing the collection of the currently selected items|