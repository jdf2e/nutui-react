# Checkbox

## Intro

多选按钮用于选择。

## Install

```ts
// react
import { Checkbox } from '@nutui/nutui-react';

```

## Demo

### Uncontrolled

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<Checkbox
    className="test"
    label="Option"
    defaultChecked={false}
  />)
}
export default CheckBoxDemo;
```

:::

### Controlled

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [controlled, setControlled] = useState(false)

  return (<Checkbox
    className="test"
    label="Option"
    checked={controlled}
    onChange={(val) => setControlled(val)}
  />)
}
export default CheckBoxDemo;
```

:::

### Basic

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
      <Checkbox labelPosition="left" label="Option " defaultChecked={checked} />
      <Checkbox labelPosition="right" label="Option " defaultChecked={checked} />
      <Checkbox.Group labelPosition="left" defaultValue={['1']}>
        <span>
          <Checkbox value="1" label='Option 1' />
        </span>
        <Checkbox value="2" label='Option 2' />
        <Checkbox value="3" label='Option 3' />
      </Checkbox.Group>
    </>
  )
}
export default CheckBoxDemo;
```

:::

### Semi-selected state

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
      <Checkbox value="1" label='Option' checked indeterminate />
    </>
  )
}
export default CheckBoxDemo;
```

:::

### Disabled

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      labelPosition="right"
      label="unchecked"
      checked={false}
      disabled
    />
    <Checkbox
      labelPosition="right"
      label="checked"
      checked
      disabled
    />
  </>)
}
export default CheckBoxDemo;
```

:::

### Custom size

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox label="24" style={{
      '--nut-icon-width': '24px',
      '--nut-icon-height': '24px'
    }} />
    <Checkbox label="12" style={{
      '--nut-icon-width': '12px',
      '--nut-icon-height': '12px'
    }} />
  </>)
}
export default CheckBoxDemo;
```

:::

### Custom Icon

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';
import { Checklist } from '@nutui/icons-react'

const CheckBoxDemo = () => {
  return (<>
    <Checkbox icon={<Checklist />}
              checkedIcon={<Checklist
                className="nut-checkbox__icon" />}>Custom Icon</Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::

### Change

When the value changes, the change event will be fired

:::demo

```tsx
import React from "react";
import { Checkbox, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      defaultChecked={false}
      onChange={(state) => {
        if (state) {
          Toast.text('checked')
        } else {
          Toast.text('unchecked')
        }
      }}
    >
      Option
    </Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::

## Checkbox.Group

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <Checkbox.Group
      defaultValue={checkboxgroup1}
      direction="horizontal"
      onChange={(value) => {
        Toast.text(value)
      }}
    >
      <Checkbox value="1">
        Option 1
      </Checkbox>
      <Checkbox value="2">
        Option 2
      </Checkbox>
      <Checkbox value="3">
        Option 3
      </Checkbox>
      <Checkbox value="4">
        Option 4
      </Checkbox>
    </Checkbox.Group>
  )
}
export default CheckBoxDemo;
```

:::

## Checkbox.Group Disabled

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <Checkbox.Group defaultValue={checkboxgroup1} disabled
                    direction="horizontal">
      <Checkbox value="1">
        Option 1
      </Checkbox>
      <Checkbox value="2">
        Option 2
      </Checkbox>
      <Checkbox value="3">
        Option 3
      </Checkbox>
      <Checkbox value="4">
        Option 4
      </Checkbox>
    </Checkbox.Group>
  )
}
export default CheckBoxDemo;
```

:::

## Checkbox.Group Select all/Cancel

:::demo

```tsx
import React, { useState, useRef } from "react";
import { Checkbox, Button, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <Checkbox.Group
      labelPosition="left"
      direction="horizontal"
      ref={checkboxgroup2Ref}
      defaultValue={checkboxgroup2}
      onChange={(value) => {
        Toast.text(`${value.length === 4 ? '全选' : '取消全选'}`)
      }}
    >
      <Checkbox value="1">
        Option 1
      </Checkbox>
      <Checkbox value="2">
        Option 2
      </Checkbox>
      <Checkbox value="3">
        Option 3
      </Checkbox>
      <Checkbox value="4">
        Option 4
      </Checkbox>
    </Checkbox.Group>
    <Button
      type="primary"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        (checkboxgroup2Ref.current as any).toggle(true)
      }}
    >
      Select All
    </Button>
    <Button
      type="info"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        (checkboxgroup2Ref.current as any).toggle(false)
      }}
    >
      Cancel
    </Button>
    <Button
      type="warning"
      onClick={() => {
        ;(checkboxgroup2Ref.current as any).reverse()
      }}
    >
      Reverse
    </Button>
  </>)
}
export default CheckBoxDemo;
```

:::

## Used by checkboxGroup, limit the maximum number of options (2)

:::demo

```tsx
import React, { useState, useRef } from "react";
import { Checkbox, Button, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <Checkbox.Group
      defaultValue={checkboxgroup2}
      max={2}
      onChange={(value) => {
        Toast.text(value)
      }}
    >
      <Checkbox value="1">
        Option 1
      </Checkbox>
      <Checkbox value="2">
        Option 2
      </Checkbox>
      <Checkbox value="3">
        Option 3
      </Checkbox>
      <Checkbox value="4">
        Option 4
      </Checkbox>
    </Checkbox.Group>
  </>)
}
export default CheckBoxDemo;
```

:::

## Select All/Half Select/Cancel

:::demo

```tsx
import React, { useState, useRef } from "react";
import { Checkbox, Button, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  const [checkbox1, setCheckbox1] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  return (<>
      <div style={{ width: '50%' }}>
        <Checkbox
          checked={checkbox1}
          indeterminate={indeterminate}
          onChange={(state, label) => {
            if (state) {
              setIndeterminate(false)
            }
            setCheckbox1(state)
            ;(checkboxgroup2Ref.current as any).toggle(state)
          }}
        >
          Select All
        </Checkbox>
      </div>

      <Checkbox.Group
        ref={checkboxgroup2Ref}
        direction="horizontal"
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
        <Checkbox value="1">
          Option 1
        </Checkbox>
        <Checkbox value="2">
          Option 2
        </Checkbox>
        <Checkbox value="3">
          Option 3
        </Checkbox>
        <Checkbox value="4">
          Option 4
        </Checkbox>
      </Checkbox.Group>
    </>
  )
}
export default CheckBoxDemo;
```

:::

## Configure options to render check buttons

:::demo

```tsx
import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckboxGroupOptions = () => {
  const [checkboxVal, setCheckboxVal] = useState(['1'])
  const [optionsDemo1, setOptionsDemo1] = useState([
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
      disabled: true,
    },
    {
      label: 'Option 3',
      value: '3',
    },
  ])
  return <Checkbox.Group options={optionsDemo1} defaultValue={checkboxVal}
  />
}
export default CheckboxGroupOptions;
```

:::

## Checkbox
### props
| Property | Description | Type | Default |
|-------------------|---------------------------------------|---------|-------------------|
| checked | whether checked | `boolean` | `false` |
| defaultChecked | Initially checked or not | `boolean` | `false` |
| disabled | Whether to disable selection | `boolean` | `false` |
| labelPosition | The position of the text, optional values: `left`, `right` | `string` | `right` |
| icon | [icon](#/icon), before selection (recommended to be modified together with `ActiveIcon`) | `ReactNode` | `'CheckNormal'` |
| checkedIcon | [icon](#/icon), after selection (it is recommended to modify it together with `iconName`) | `ReactNode` | `'Checked'` |
| indeterminateIcon | [icon](#/icon), half-selected state | `ReactNode` | `'CheckDisabled'` |
| label | text content of the checkbox | `string` | - |
| value | identification value, used in Group mode | `string\| number` | - |
| onChange | Triggered when the value changes | `(value: boolean) => void` | - |
## Checkbox.Group
### Props
| Property | Description | Type | Default |
|--------------| ----- |-------------| -- |
| value | identifier of the currently selected item | `string\|number` | -|
| defaultValue | Identifier of the initially selected item | `string\|number` | -|
| disabled | Whether to disable selection, will be used for all checkboxes under it | `boolean` | `false`|
| max | limit the maximum number of options | `undefined|number` | `undefined`|
| labelPosition | The position of the text, optional values: `left`,`right`| `string`| `right` |
| direction | Use horizontal and vertical directions Optional values horizontal、vertical| `string`| `vertical` |
| options | Configure options to render check buttons | `Array<{ label: string value: string disabled?: boolean }` | - |
| onChange | Triggered when the value changes | `(value: string[]) => void` | - |
###  Ref

| Property | Description | Parameters |
|--------------------| ----- | ----- |
| toggle | Select All/Cancel | Pass `true` to select all, pass `false` to cancel all selection |
| reverse | reverse election | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer
to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description |  Default           |
| --- |-----------------| --- |
| --nutui-checkbox-label-color | text color of label | `$gray1` |
| --nutui-checkbox-label-disable-color | disabled color for label | `#999` |
| --nutui-checkbox-icon-disable-color | Default icon disable color |`#d6d6d6` |
| --nutui-checkbox-label-margin-left | left margin of label |`15px` |
| --nutui-checkbox-label-font-size | font size of label | `14px` |