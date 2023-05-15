# Radio

## Intro

Used to single select in a set of alternatives

## Install

``` ts
// react
import { Radio } from '@nutui/nutui-react';

```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio defaultChecked>Option 1</Radio>
    <Radio defaultChecked disabled>
      Option 1
    </Radio>
    <Radio.Group defaultValue="1">
      <Radio value="1">Option 1</Radio>
      <Radio disabled value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.Group>
    <Radio.Group defaultValue="1">
      <Radio shape="button" value="1">
        Option 1
      </Radio>
      <Radio shape="button" disabled value="2">
        Option 2
      </Radio>
      <Radio shape="button" value="3">
        Option 3
      </Radio>
    </Radio.Group>
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
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio value="1">Option 1</Radio>
      <Radio disabled value="2">
        Option 2
      </Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.Group>
    <Radio.Group
      defaultValue="1"
      labelPosition="left"
      direction="horizontal"
    >
      <Radio value="1">Option 1</Radio>
      <Radio disabled value="2">
        Option 2
      </Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.Group>
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio shape="button" value="1">
        Option 1
      </Radio>
      <Radio shape="button" disabled value="2">
        Option 2
      </Radio>
      <Radio shape="button" value="3">
        Option 3
      </Radio>
    </Radio.Group>
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
    <Radio
      style={{
        '--nut-icon-width': '12px',
        '--nutui-icon-height': '12px',
      }}
    >
      自定义尺寸
    </Radio>
  </>
}
export default RadioGroupLast;
```

:::

## Customize the icon

It is recommended that 'icon' and 'activeIcon' be modified together

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';
import { Checklist } from '@nutui/icons-react'

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio
      icon={<Checklist />}
      activeIcon={<Checklist style={{ color: 'red' }} />}
    >
      Custom Icon
    </Radio>
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
  const [checkedValue] = useState(1)
  return <>
    <Radio.Group
      defaultValue={checkedValue}
      onChange={(value) => Toast.text(value)}
    >
      <Radio value={1}>Trigger Event</Radio>
      <Radio value={2}>Trigger Event</Radio>
    </Radio.Group>
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
  return <Radio.Group options={optionsDemo1} value={radioVal}
                      onChange={handleChange} />
}
export default RadioGroupOptions;
```

:::

## Radio

### Props

| Property | Description | Type | Default |
|----------------|-----------------------------------------|-----------------------------|------------------|
| checked | specifies whether it is currently checked | `boolean` | - |
| defaultChecked | Initially checked or not | `boolean` | - |
| disabled | Whether to disable selection | `boolean` | `false` |
| value | The identification value carried, used in Group mode | `string \| number` | - |
| labelPosition | The position of the text | `left \| right` | `right` |
| icon | [icon name](#/icon), before selection (it is recommended to modify it together with `activeIcon`) | `ReactNode` | `'CheckNormal'` |
| activeIcon | [icon name](#/icon), after selected (it is recommended to modify it together with `icon`) | `ReactNode` | `'CheckChecked'` |
| shape | shape | `'button' \| 'round'` | round |
| onChange | Triggered when the checked state changes | `(checked: boolean) => void` | `-` |

## Radio.Group

### Props

| Property | Description | Type | Default |
|---------------|-------------|------------------------------------------------------------|------------------|
| value | identifier of the currently selected item | `string \| number` | - |
| labelPosition | The position of the text | `left \| right` | `right` |
| disabled | Whether to disable | `boolean` | `false` |
| direction | use landscape orientation | `horizontal \| vertical` | `vertical` |
| options | Configure options to render radio buttons | `Array<{ label: string value: string disabled?: boolean }` | `-` |
| onChange | Triggered when the value changes | `(value: string \| number) => void` | `-` |

## Theming

### CSS Variables

组件提供了下列 CSS
变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| Name | Description | Default |
| --- |-------------------|---------------------------|
| --nutui-radio-label-font-color | 字体颜色              | `$gray1`                  |
| --nutui-radio-label-font-active-color | 按钮状态下选中字体颜色       | `$primary-color`          |
| --nutui-radio-label-disable-color | label 的禁用字体颜色     | `$gray3`                  |
| --nutui-radio-icon-disable-color | label 的禁用字体颜色     | `$gray2`                  |
| --nutui-radio-label-button-border-color | shape为button的边框颜色 | `$primary-color`          |
| --nutui-radio-label-button-background | shape为button的背景色  | `rgba(250, 44, 25, 0.05)` |
| --nutui-radio-label-margin-left | label 的左外边距       | `15px`                    |
| --nutui-radio-label-font-size | 字号                | `14px`                    |
| --nutui-radio-button-border-radius | shape为button的圆角   | `15px`                    |
| --nutui-radio-button-font-size | shape为button的字号   | `12px`                    |
| --nutui-radio-button-padding | shape为button的内边距  | `5px 18px`                |
| --nutui-radio-icon-disable-color2 | icon 的禁用颜色        | `$gray3`                  |
