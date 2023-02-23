# Checkbox 複選按鈕

### 介紹

多選按鈕用於選擇。

### 安裝

```ts
// react
import { Checkbox } from '@nutui/nutui-react';

```

## 基本用法

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
      <Checkbox textPosition="left" label="複選框" checked={checked} />
      <Checkbox textPosition="right" label="複選框" checked={false} />
    </>
  )
}
export default CheckBoxDemo;
```

:::

## 禁用狀態

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      textPosition="right"
      label="未選時禁用狀態"
      checked={false}
      disabled
    />
    <Checkbox
      textPosition="right"
      label="選中時禁用狀態"
      checked
      disabled
    />
  </>)
}
export default CheckBoxDemo;
```

:::

## 自定義尺寸

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox label="自定義尺寸" iconSize={25} />
    <Checkbox label="自定義尺寸" iconSize={10} />
  </>)
}
export default CheckBoxDemo;
```

:::

## 自定義圖標

這裡建議同時設置 `iconName` 和 `iconActiveName` 屬性

:::demo

```tsx
import React from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox iconName="checklist" iconActiveName="checklist">自定义图标</Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::
## change事件

值發生變化時，將觸發change事件

:::demo

```tsx
import React from "react";
import { Checkbox, Toast } from '@nutui/nutui-react';

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

## Checkbox.Group

:::demo

```tsx
import React, { useState } from "react";
import { Checkbox } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <Checkbox.Group
      checkedValue={checkboxgroup1}
      onChange={(value) => {
        console.log(value)
        setCheckboxgroup1(value)
      }}
    >
      <Checkbox checked={false} label="1">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="2">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="3">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="4">
        組合複選框
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
    <Checkbox.Group checkedValue={checkboxgroup1} disabled>
      <Checkbox label="1">
        組合複選框
      </Checkbox>
      <Checkbox label="2">
        組合複選框
      </Checkbox>
      <Checkbox label="3">
        組合複選框
      </Checkbox>
      <Checkbox label="4">
        組合複選框
      </Checkbox>
    </Checkbox.Group>
  )
}
export default CheckBoxDemo;
```

:::

## Checkbox.Group 全選/取消

:::demo

```tsx
import React, { useState, useRef } from "react";
import { Checkbox, Button, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <Checkbox.Group
      style={{}}
      ref={checkboxgroup2Ref}
      checkedValue={checkboxgroup2}
      onChange={(value) => {
        Toast.text(`${value.length === 4 ? '全選' : '取消全选'}`)
      }}
    >
      <Checkbox checked={false} label="1">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="2">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="3">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="4">
        組合複選框
      </Checkbox>
    </Checkbox.Group>
    <Button
      type="primary"
      style={{ margin: '0 20px 0 0' }}
      onClick={() => {
        (checkboxgroup2Ref.current as any).toggleAll(true)
      }}
    >
      全選
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
      反選
    </Button>
  </>)
}
export default CheckBoxDemo;
```

:::

## checkboxGroup使用，限制最大可選數（2個）

:::demo
```tsx
import React, { useState, useRef } from "react";
import { Checkbox, Button, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <Checkbox.Group
      checkedValue={checkboxgroup2}
      max={2}
      onChange={(value) => {
        Toast.text(value)
      }}
    >
      <Checkbox checked={false} label="1">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="2">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="3">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="4">
        組合複選框
      </Checkbox>
    </Checkbox.Group>
  </>)
}
export default CheckBoxDemo;
```
:::

## 全選/半選/取消
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
          ;(checkboxgroup2Ref.current as any).toggleAll(state)
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
      <Checkbox checked={false} label="1">
        选项
      </Checkbox>
      <Checkbox checked={false} label="2">
        选项
      </Checkbox>
      <Checkbox checked={false} label="3">
        选项
      </Checkbox>
      <Checkbox checked={false} label="4">
        选项
      </Checkbox>
    </Checkbox.Group>
  </>)
}
export default CheckBoxDemo;
```
:::


## 配置 options 渲染複選按鈕

:::demo

```tsx
import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckboxGroupOptions = () => {
  const [checkboxVal, setCheckboxValVal] = useState(['1'])
  const [optionsDemo1, setOptionsDemo1] = useState([
    {
      label: '選項1',
      value: '1',
    },
    {
      label: '選項2',
      value: '2',
      disabled: true,
    },
    {
      label: '選項3',
      value: '3',
    },
  ])
  const handleChange = (v) => {
    console.log(v)
    setCheckboxValVal(v)
  }
  return <Checkbox.Group options={optionsDemo1} checkedValue={checkboxVal} onChange={handleChange} />
}
export default CheckboxGroupOptions;
```

:::

## Checkbox

| 字段                            | 說明 | 類型 | 默認值 | 
|-------------------------------| ----- | ----- | -----|
| checked                       | 是否處於選中狀態 | Boolean | `false`|
| disabled                      | 是否禁用選擇 | Boolean | `false`|
| textPosition                  | 文本所在的位置，可選值：`left`,`right` | String | `right`|
| iconSize                      | [圖標尺寸](#/icon) | String、Number | `18`|
| iconName                      | [圖標名稱](#/icon)，選中前(建議和`iconActiveName`一起修改) | String | `'check-normal'`|
| iconActiveName                | [圖標名稱](#/icon)，選中後(建議和`iconName`一起修改) | String | `'checked'`|
| iconIndeterminateName`v1.2.1` | [圖標名稱](#/icon)，半選狀態 | String | `'check-disabled'`|
| iconClassPrefix`v1.2.1`       | 自定義 icon 類名前綴，用於使用自定義圖標        | String                  | `nut-icon` |
| iconFontClassName`v1.2.1`       | 自定義 icon 字體基礎類名        | String                  | `nutui-iconfont` |
| label                         | 複選框的文本內容 | String | -|

## Checkbox.Group

| 字段           | 說明 | 類型          | 默認值|
|--------------| ----- |-------------| -- |
| checkedValue | 當前選中項的標識符，和 `label` 相對應  | String      | -|
| disabled     | 是否禁用選擇,將用於其下的全部複選框 | Boolean     | `false`|
| max`v1.2.1`           | 限制最大可選數 | `undefined|number` | `undefined`|
| textPosition | 文本所在的位置，可選值：'left'，'right' | String | `right`    |
| direction     | 使用橫縱方向 可選值 horizontal、vertical | String | `vertical` |
| options `v1.3.10`     | 配置 options 渲染复选按钮      | Array                  | `Array<{ label: string value: string disabled?: boolean }` |

## Checkbox Event

| 字段 | 說明 | 回調參數|
|----- | ----- | ----- |
| onChange | 值變化時觸發 | (state, label),`state`代表當前狀態，`label`表示當前選中的值|

## Checkbox.Group Event

| 字段 | 說明 | 回調參數|
|----- | ----- | ----- |
| onChange | 值變化時觸發 | label,`label`返回一個數組，表示當前選中項的集合|

## Checkbox.Group API

| 方法名               | 說明 | 參數 |
|-------------------| ----- | ----- |
| toggleAll`v1.2.1` | 全選/取消 | `f`,傳 `true`,表示全選，傳 `false`,表示取消全選 |
| toggleReverse`v1.2.1`   | 反選 | - |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-checkbox-label-color | ` $gray1` |
| --nutui-checkbox-label-disable-color | `  #999` |
| --nutui-checkbox-icon-disable-color | `  #d6d6d6` |
| --nutui-checkbox-label-margin-left | `  15px` |
| --nutui-checkbox-label-font-size | ` 14px` |
| --nutui-checkbox-icon-font-size | ` 18px` |
| --nutui-checkbox-icon-disable-color2 | `  $help-color` |
