# Radio

## Intro

Used to single select in a set of alternatives

## Install

```tsx
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
      <Radio value="1" disabled>
        Option1
      </Radio>
      <Radio value="2">Option2</Radio>
      <Radio value="3">Option3</Radio>
    </Radio.Group>
    <Radio.Group disabled defaultValue="1">
      <Radio value="1">Option1</Radio>
      <Radio value="2">Option2</Radio>
      <Radio value="3">Option3</Radio>
    </Radio.Group>
    <Radio.Group defaultValue="1">
      <Radio shape="button" disabled value="1">
        Option1
      </Radio>
      <Radio shape="button" value="2">
        Option2
      </Radio>
      <Radio shape="button" value="3">
        Option3
      </Radio>
    </Radio.Group>
    <Radio.Group disabled defaultValue="1">
      <Radio shape="button" value="1">
        Option1
      </Radio>
      <Radio shape="button" value="2">
        Option2
      </Radio>
      <Radio shape="button" value="3">
        Option3
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
      onChange={(value) => Toast.show(value)}
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
| --- | --- | --- | --- |
| checked | specifies whether it is currently checked | `boolean` | `-` |
| defaultChecked | Initially checked or not | `boolean` | `-` |
| disabled | Whether to disable selection | `boolean` | `false` |
| value | The identification value carried, used in Group mode | `string`  \|  `number` | `-` |
| labelPosition | The position of the text | `left` \| `right` | `right` |
| icon | <a href="#/icon">icon name</a>, before selection (it is recommended to modify it together with `activeIcon`) | `ReactNode` | `'CheckNormal'` |
| activeIcon | <a href="#/icon">icon name</a>, after selected (it is recommended to modify it together with `icon`) | `ReactNode` | `'CheckChecked'` |
| shape | shape | `button` \| `round` \| `round` | `round` |
| onChange | Triggered when the checked state changes | `(checked: boolean) => void` | `-` |

## Radio.Group

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | identifier of the currently selected item | `string`  \|  `number` | `-` |
| labelPosition | The position of the text | `left` \| `right` | `right` |
| disabled | Whether to disable | `boolean` | `false` |
| direction | use landscape orientation | `horizontal` \| `vertical` | `vertical` |
| options | Configure options to render radio buttons | `Array<{ label: string value: string disabled?: boolean }>`  | `-` |
| onChange | Triggered when the value changes | `(value: string \| number) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS Variables, which can be used for custom styles, please refer to [ConfigProvider Components](#/zh-CN/component/configprovider) for usage methods.

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-radio-icon-font-size | icon font size | `18px` |
| \--nutui-radio-label-font-size | font size | `14px` |
| \--nutui-radio-label-color | font color | `$color-title` |
| \--nutui-radio-label-font-active-color | The selected font color in the button state | `$color-primary` |
| \--nutui-radio-label-margin-left | left margin of label | `6px` |

| \--nutui-radio-button-font-size | shape is the font size of the button | `12px` |
| \--nutui-radio-button-color | button font color | `$color-text` |
| \--nutui-radio-button-background | shape is the background color of the button | `$color-background` |
| \--nutui-radio-button-padding | The shape is the padding of the button | `5px 18px` |
| \--nutui-radio-button-border-radius | The shape is the rounded corner of the button | `15px` |
| \--nutui-radio-button-active-border-color | shape is the border color of the button | `$color-primary` |
| \--nutui-radio-button-active-background | shape is the background color of the button | `$color-primary-light-bg-color` |

| \--nutui-radio-button-disabled-active-background | Selected and disabled background color in button mode | `$color-text-disable` |
| \--nutui-radio-button-disabled-active-color | The font color that is selected and disabled in button mode | `$white` |
| \--nutui-radio-button-disabled-active-border-color | Selected and disabled border color in button mode | `$color-text-disable` |

| \--nutui-radiogroup-radio-margin | Margin of each radio in Group mode | `0 20px 5px 0` |
| \--nutui-radiogroup-radio-label-margin | Label margin in each radio in Group mode | `0 5px 0 5px` |
