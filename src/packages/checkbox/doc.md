# Checkbox 复选按钮

## 介绍

多选按钮用于选择。

## 安装

```ts
// react
import { Checkbox } from '@nutui/nutui-react';

```

## 代码演示

### 非受控

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<Checkbox
    className="test"
    label="复选框"
    defaultChecked={false}
  />)
}
export default CheckBoxDemo;
```

:::

### 受控

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [controlled, setControlled] = useState(false)

  return (<Checkbox
    className="test"
    label="复选框"
    checked={controlled}
    onChange={(val) => setControlled(val)}
  />)
}
export default CheckBoxDemo;
```

:::

### 基础用法

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
      <Checkbox labelPosition="left" label="复选框" defaultChecked={checked} />
      <Checkbox labelPosition="right" label="复选框" defaultChecked={checked} />
      <Checkbox.Group labelPosition="left" defaultValue={['1']}>
        <span>
          <Checkbox value="1" label='选项1' />
        </span>
        <Checkbox value="2" label='选项2' />
        <Checkbox value="3" label='选项3' />
      </Checkbox.Group>
    </>
  )
}
export default CheckBoxDemo;
```

:::

## 半选状态

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
      <Checkbox value="1" label='复选框1' checked indeterminate />
    </>
  )
}
export default CheckBoxDemo;
```

:::

## 禁用状态

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      labelPosition="right"
      label="未选时禁用状态"
      checked={false}
      disabled
    />
    <Checkbox
      labelPosition="right"
      label="选中时禁用状态"
      checked
      disabled
    />
  </>)
}
export default CheckBoxDemo;
```

:::

## 自定义尺寸

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox label="自定义尺寸24" style={{
      '--nut-icon-width': '24px',
      '--nut-icon-height': '24px'
    }} />
    <Checkbox label="自定义尺寸12" style={{
      '--nut-icon-width': '12px',
      '--nut-icon-height': '12px'
    }} />
  </>)
}
export default CheckBoxDemo;
```

:::

## 自定义图标

这里建议同时设置 `icon` 和 `checkedIcon` 属性

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';
import { Checklist } from '@nutui/icons-react'

const CheckBoxDemo = () => {
  return (<>
    <Checkbox icon={<Checklist />}
              checkedIcon={<Checklist
                className="nut-checkbox__icon" />}>自定义图标</Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::

## change事件

值发生变化时，将触发change事件

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
          Toast.show('选中')
        } else {
          Toast.show('取消选中')
        }
      }}
    >
      change复选框
    </Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::

## Checkbox.Group 使用

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
        Toast.show(value)
      }}
    >
      <Checkbox value="1">
        组合复选框
      </Checkbox>
      <Checkbox value="2">
        组合复选框
      </Checkbox>
      <Checkbox value="3">
        组合复选框
      </Checkbox>
      <Checkbox value="4">
        组合复选框
      </Checkbox>
    </Checkbox.Group>
  )
}
export default CheckBoxDemo;
```

:::

## Checkbox.Group 禁用

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
        组合复选框
      </Checkbox>
      <Checkbox value="2">
        组合复选框
      </Checkbox>
      <Checkbox value="3">
        组合复选框
      </Checkbox>
      <Checkbox value="4">
        组合复选框
      </Checkbox>
    </Checkbox.Group>
  )
}
export default CheckBoxDemo;
```

:::

## Checkbox.Group 全选/取消

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
        Toast.show(`${value.length === 4 ? '全选' : '取消全选'}`)
      }}
    >
      <Checkbox value="1">
        组合复选框
      </Checkbox>
      <Checkbox value="2">
        组合复选框
      </Checkbox>
      <Checkbox value="3">
        组合复选框
      </Checkbox>
      <Checkbox value="4">
        组合复选框
      </Checkbox>
    </Checkbox.Group>
    <Button
      type="primary"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        (checkboxgroup2Ref.current as any).toggle(true)
      }}
    >
      全选
    </Button>
    <Button
      type="info"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        (checkboxgroup2Ref.current as any).toggle(false)
      }}
    >
      取消
    </Button>
    <Button
      type="warning"
      onClick={() => {
        ;(checkboxgroup2Ref.current as any).reverse()
      }}
    >
      反选
    </Button>
  </>)
}
export default CheckBoxDemo;
```

:::

## checkboxGroup使用，限制最大可选数（2个）

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
        Toast.show(value)
      }}
    >
      <Checkbox value="1">
        组合复选框
      </Checkbox>
      <Checkbox value="2">
        组合复选框
      </Checkbox>
      <Checkbox value="3">
        组合复选框
      </Checkbox>
      <Checkbox value="4">
        组合复选框
      </Checkbox>
    </Checkbox.Group>
  </>)
}
export default CheckBoxDemo;
```

:::

## 全选/半选/取消

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
          全选
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
          选项
        </Checkbox>
        <Checkbox value="2">
          选项
        </Checkbox>
        <Checkbox value="3">
          选项
        </Checkbox>
        <Checkbox value="4">
          选项
        </Checkbox>
      </Checkbox.Group>
    </>
  )
}
export default CheckBoxDemo;
```

:::

## 配置 options 渲染复选按钮

:::demo

```tsx
import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckboxGroupOptions = () => {
  const [checkboxVal, setCheckboxVal] = useState(['1'])
  const [optionsDemo1, setOptionsDemo1] = useState([
    {
      label: '选项1',
      value: '1',
    },
    {
      label: '选项2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项3',
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
| 属性 | 说明                                    | 类型      | 默认值               | 
|-------------------|---------------------------------------|---------|-------------------|
| checked           | 是否选中                                  | `boolean` | `false`           |
| defaultChecked    | 初始是否选中                                | `boolean` | `false`           |
| disabled          | 是否禁用选择                                | `boolean` | `false`           |
| labelPosition     | 文本所在的位置，可选值：`left`,`right`            | `string` | `right`           |
| icon              | [图标](#/icon)，选中前(建议和`ActiveIcon`一起修改) | `ReactNode` | `'CheckNormal'`   |
| activeIcon       | [图标](#/icon)，选中后(建议和`iconName`一起修改)   | `ReactNode` | `'Checked'`       |
| indeterminateIcon | [图标](#/icon)，半选状态                     | `ReactNode` | `'CheckDisabled'` |
| label             | 复选框的文本内容                              | `string` | -                 |
| value               | 标识值，用于 Group 模式                       | `string\| number`               | -                 |
| onChange | 值变化时触发 | `(value: boolean) => void`        | - |

## Checkbox.Group
### Props
| 属性 | 说明 | 类型 | 默认值|
|--------------| ----- |-------------| -- |
| value | 当前选中项的标识符 | `string\|number`      | -|
| defaultValue | 初始选中项的标识符 | `string\|number`      | -|
| disabled | 是否禁用选择,将用于其下的全部复选框 | `boolean`     | `false`|
| max | 限制最大可选数 | `undefined|number` | `undefined`|
| labelPosition | 文本所在的位置，可选值：`left`,`right`| `string`| `right` |
| direction | 使用横纵方向 可选值 horizontal、vertical| `string`| `vertical` |
| options | 配置 options 渲染复选按钮 | `Array<{ label: string value: string disabled?: boolean }` | - |
| onChange | 值变化时触发 | `(value: string[]) => void` | - |

###  Ref

| 方法名               | 说明 | 参数 |
|-------------------| ----- | ----- |
| toggle | 全选/取消 | 传 `true`,表示全选，传 `false`,表示取消全选 |
| reverse   | 反选 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS
变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 |  默认值           |
| --- |-----------------| --- |
| --nutui-checkbox-label-color | label 的文本颜色 | `$gray1`       |
| --nutui-checkbox-label-disable-color | label 的禁用颜色 | `#999`        |
| --nutui-checkbox-icon-disable-color | 默认 icon 的禁用颜色 |`#d6d6d6`     |
| --nutui-checkbox-label-margin-left | label 的左边距 |`15px`        |
| --nutui-checkbox-label-font-size | label 的字号 | `14px`         |