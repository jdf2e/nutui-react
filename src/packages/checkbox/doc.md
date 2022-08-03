# Checkbox 复选按钮

### 介绍

多选按钮用于选择。

### 安装

``` ts
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

```

## 基本用法

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
      <Checkbox textPosition="left" label="复选框" checked={checked} />
      <Checkbox textPosition="right" label="复选框" checked={false} />
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
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      textPosition="right"
      label="未选时禁用状态"
      checked={false}
      disabled
    />
    <Checkbox
      textPosition="right"
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
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox label="自定义尺寸25" iconSize={25} />
    <Checkbox label="自定义尺寸10" iconSize={10} />
  </>)
}
export default CheckBoxDemo;
```

:::

## 自定义图标

这里建议同时设置 `iconName` 和 `iconActiveName` 属性

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox iconName="checklist" iconActiveName="checklist">自定义图标</Checkbox>
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
import { Checkbox, CheckboxGroup, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      checked={false}
      onChange={(state, label) => {
        Toast.text(`您${state ? '选中' : '取消'}了${label}`)
      }}
    >
      change复选框
    </Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::

## CheckBoxGroup 使用

:::demo

```tsx
import React, { useState } from "react";
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
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="2">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="3">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  )
}
export default CheckBoxDemo;
```

:::

## CheckBoxGroup 禁用

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <CheckboxGroup checkedValue={checkboxgroup1} disabled>
      <Checkbox label="1">
        组合复选框
      </Checkbox>
      <Checkbox label="2">
        组合复选框
      </Checkbox>
      <Checkbox label="3">
        组合复选框
      </Checkbox>
      <Checkbox label="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  )
}
export default CheckBoxDemo;
```

:::

## CheckboxGroup 全选/取消

:::demo

```tsx
import React, { useState, useRef } from "react";
import { Checkbox, CheckboxGroup, Button, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <CheckboxGroup
      style={{}}
      ref={checkboxgroup2Ref}
      checkedValue={checkboxgroup2}
      onChange={(value) => {
        Toast.text(`${value.length === 4 ? '全选' : '取消全选'}`)
      }}
    >
      <Checkbox checked={false} label="1">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="2">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="3">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
    <Button
      type="primary"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        (checkboxgroup2Ref.current as any).toggleAll(true)
      }}
    >
      全选
    </Button>
    <Button
      type="info"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        (checkboxgroup2Ref.current as any).toggleAll(false)
      }}
    >
      取消
    </Button>
    <Button
      type="warning"
      onClick={() => {
        ;(checkboxgroup2Ref.current as any).toggleReverse()
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
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="2">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="3">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  </>)
}
export default CheckBoxDemo;
```
:::

## 全选/半选/取消
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
      全选
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
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="2">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="3">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  </>)
}
export default CheckBoxDemo;
```
:::

## Checkbox

| 字段                    | 说明 | 类型 | 默认值 | 
|-----------------------| ----- | ----- | -----|
| checked               | 是否处于选中状态 | Boolean | `false`|
| disabled              | 是否禁用选择 | Boolean | `false`|
| textPosition          | 文本所在的位置，可选值：`left`,`right` | String | `right`|
| iconSize              | [图标尺寸](#/icon) | String、Number | `18`|
| iconName              | [图标名称](#/icon)，选中前(建议和`iconActiveName`一起修改) | String | `'check-normal'`|
| iconActiveName        | [图标名称](#/icon)，选中后(建议和`iconName`一起修改) | String | `'checked'`|
| iconIndeterminateName | [图标名称](#/icon)，半选状态 | String | `'check-disabled'`|
| iconClassPrefix       | 自定义 icon 类名前缀，用于使用自定义图标        | String                  | `nut-icon` |
| iconFontClassName     | 自定义 icon 字体基础类名        | String                  | `nutui-iconfont` |
| label                 | 复选框的文本内容 | String | -|

## CheckboxGroup

| 字段           | 说明 | 类型          | 默认值|
|--------------| ----- |-------------| -- |
| checkedValue | 当前选中项的标识符，和 `label` 相对应  | String      | -|
| disabled     | 是否禁用选择,将用于其下的全部复选框 | Boolean     | `false`|
| max           | 限制最大可选数 | `undefined|number` | `undefined`|

## Checkbox Event

| 字段 | 说明 | 回调参数|
|----- | ----- | ----- |
| onChange | 值变化时触发 | (state, label),`state`代表当前状态，`label`表示当前选中的值|

## CheckboxGroup Event

| 字段 | 说明 | 回调参数|
|----- | ----- | ----- |
| onChange | 值变化时触发 | label,`label`返回一个数组，表示当前选中项的集合|

## CheckboxGroup API

| 方法名 | 说明 | 参数 |
|----- | ----- | ----- |
| toggleAll | 全选/取消 | `f`,传 `true`,表示全选，传 `false`,表示取消全选 |
| toggleReverse | 反选 | - |