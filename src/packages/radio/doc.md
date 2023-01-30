# Radio 单选按钮

### 介绍

用于在一组备选项中进行单选

### 安装

``` ts
// react
import { Radio } from '@nutui/nutui-react';

```

## 基本用法

通过 **value** 绑定值当前选项的 **label** 。并且必须 **Radio.RadioGroup** 和 **Radio** 相结合进行使用

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1">选项1</Radio>
      <Radio disabled value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} textPosition="left">
      <Radio value="1">选项1</Radio>
      <Radio disabled value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal}>
      <Radio shape="button" value="1">选项1</Radio>
      <Radio disabled shape="button" value="2">选项2</Radio>
      <Radio shape="button" value="3">选项3</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 水平使用

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal} direction="horizontal">
      <Radio value="1">选项1</Radio>
      <Radio disabled value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} textPosition="left" direction="horizontal">
      <Radio value="1">选项1</Radio>
      <Radio disabled value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} direction="horizontal">
      <Radio shape="button" value="1">选项1</Radio>
      <Radio disabled shape="button" value="2">选项2</Radio>
      <Radio shape="button" value="3">选项3</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 自定义尺寸

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1" iconSize="12">自定义尺寸12</Radio>
      <Radio value="2" iconSize="12">自定义尺寸12</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 自定义图标

建议 `iconName` `iconActiveName` 一起修改

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1" iconName="checklist"
             iconActiveName="checklist">自定义图标</Radio>
      <Radio value="2" iconName="checklist"
             iconActiveName="checklist">自定义图标</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 触发 change 事件

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
      <Radio value="1">触发事件</Radio>
      <Radio value="2">触发事件</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 配置 options 渲染单选按钮

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupOptions = () => {
  const [radioVal, setRadioVal] = useState('1')
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

| 字段             | 说明                                                         | 类型                    | 默认值            |
|------------------|--------------------------------------------------------------|-------------------------|-------------------|
| disabled         | 是否禁用选择                                                 | Boolean                 | `false`           |
| iconSize        | [图标尺寸](#/icon)                                           | String、Number          | `18`              |
| iconName        | [图标名称](#/icon)，选中前(建议和`iconActiveName`一起修改) | String                  | `'check-normal'`  |
| iconActiveName | [图标名称](#/icon)，选中后(建议和`iconName`一起修改)        | String                  | `'check-checked'` |
| value            | 携带的标识值，用于 Group 模式                                                   | String、Number、Boolean | -                 |
| shape            | 形状，可选值为 button、round                                 | String                  | round             |

### Radio.RadioGroup

| 字段          | 说明                                          | 类型                    | 默认值     |
|---------------|-----------------------------------------------|-------------------------|------------|
| value       | 当前选中项的标识符，与label值一致时呈选中状态 | String、Number、Boolean | -          |
| textPosition | 文本所在的位置，可选值：`left`,`right`        | String                  | `right`    |
| direction     | 使用横纵方向 可选值 horizontal、vertical      | String                  | `vertical` |
| options `v1.3.10`     | 配置 options 渲染单选按钮      | Array                  | `Array<{ label: string value: string disabled?: boolean }` |


## Radio.RadioGroup Event

| 字段       | 说明         | 回调参数                                           |
|----------|--------------|----------------------------------------------------|
| onChange | 值变化时触发 | 当前选中项值（label）【设置label后有值、默认为空】 |