# Checkbox 複選按鈕

### 介紹

多選按鈕用於選擇。

### 安裝

``` ts
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

```

## 基本用法

:::demo

```tsx
import React, {useState} from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
      <Checkbox textPosition="left" label="複選框"
                checked={checked} />
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
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

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

## 自訂尺寸

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox label="自訂尺寸25" iconSize={25} />
    <Checkbox label="自訂尺寸10" iconSize={10} />
  </>)
}
export default CheckBoxDemo;
```

:::

## 自訂圖示

這裏建議同時設置 『iconName』 和 『iconActiveName』 屬性

:::demo

```tsx
import React from "react";
import { Checkbox, CheckboxGroup } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox iconName="checklist" iconActiveName="checklist">自訂圖示</Checkbox>
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
import { Checkbox, CheckboxGroup, Toast } from '@nutui/nutui-react';

const CheckBoxDemo = () => {
  return (<>
    <Checkbox
      checked={false}
      onChange={(state, label) => {
        Toast.text(`您${state ? '選中' : '取消'}了${label}`)
      }}
    >
      複選框
    </Checkbox>
  </>)
}
export default CheckBoxDemo;
```

:::

## CheckBoxGroup使用

:::demo

```tsx
import React, {useState} from "react";
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
    </CheckboxGroup>
  )
}
export default CheckBoxDemo;
```

:::

## CheckboxGroup 全選/取消

:::demo

```tsx
import React, {useState, useRef} from "react";
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
        Toast.text(`${value.length === 2 ? '全選' : '取消全選'}`)
      }}
    >
      <Checkbox checked={false} label="1">
        組合複選框
      </Checkbox>
      <Checkbox checked={false} label="2">
        組合複選框
      </Checkbox>
    </CheckboxGroup>
    <Button
      type="primary"
      onClick={() => {
        ;(checkboxgroup2Ref.current as any).toggleAll(true)
      }}
    >
      全選
    </Button>
    <Button
      type="info"
      onClick={() => {
        ;(checkboxgroup2Ref.current as any).toggleAll(false)
      }}
    >
      取消
    </Button>
  </>)
}
export default CheckBoxDemo;
```

:::

## Checkbox

| 屬性 | 說明 | 類型 | 預設值 |
|----- | ----- | ----- | -----  |
| checked | 是否處於選取狀態 | Boolean | `false` |
| disabled | 是否禁用選擇 | Boolean | `false` |
| textPosition | 文本所在的位置，可選值：`left`,`right` | String | `right` |
| iconSize | [图标尺寸](#/icon) | String、Number | `18` |
| iconName | [图标名称](#/icon)，选中前(建议和`iconActiveName`一起修改) | String | `'check-normal'` |
| iconActiveName | [图标名称](#/icon)，选中后(建议和`iconName`一起修改) | String | `'checked'` |
| label | 复选框的文本内容 | String | - |

## CheckboxGroup

| 屬性 | 說明 | 類型 | 預設值 |
|----- | ----- | ----- | ----- |
| checkedValue | 當前選取的標識碼，和 'label' 相對應 | String | - |
| disabled | 是否禁用選擇，將用於其下的全部複選框 | Boolean | `false` |

## Checkbox Event

| 事件名稱 | 說明 | 回調參數 |
|----- | ----- | ----- |
| change | 值變化時觸發 | (state, label),`state`代表當前狀態，`label`表示目前選取的值 |

## CheckboxGroup Event

| 事件名稱 | 說明 | 回調參數 |
|----- | ----- | ----- |
| change | 值變化時觸發 | label，'label'返回一個陣列，表示當前選中項的集合 |