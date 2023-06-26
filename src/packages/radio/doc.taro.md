# Radio 单选按钮

## 介绍

用于在一组备选项中进行单选

## 安装

```tsx
import { Radio } from '@nutui/nutui-react-taro';

```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react-taro';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio defaultChecked>选项1</Radio>
    <Radio defaultChecked disabled>
      选项1
    </Radio>
    <Radio.Group defaultValue="1">
      <Radio value="1" disabled>
        选项1
      </Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
    <Radio.Group disabled defaultValue="1">
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
    <Radio.Group defaultValue="1">
      <Radio shape="button" disabled value="1">
        选项1
      </Radio>
      <Radio shape="button" value="2">
        选项2
      </Radio>
      <Radio shape="button" value="3">
        选项3
      </Radio>
    </Radio.Group>
    <Radio.Group disabled defaultValue="1">
      <Radio shape="button" value="1">
        选项1
      </Radio>
      <Radio shape="button" value="2">
        选项2
      </Radio>
      <Radio shape="button" value="3">
        选项3
      </Radio>
    </Radio.Group>
  </>
}
export default RadioGroupLast;
```

:::

## 水平使用

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react-taro';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio value="1">选项1</Radio>
      <Radio disabled value="2">
        选项2
      </Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
    <Radio.Group
      defaultValue="1"
      labelPosition="left"
      direction="horizontal"
    >
      <Radio value="1">选项1</Radio>
      <Radio disabled value="2">
        选项2
      </Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio shape="button" value="1">
        选项1
      </Radio>
      <Radio shape="button" disabled value="2">
        选项2
      </Radio>
      <Radio shape="button" value="3">
        选项3
      </Radio>
    </Radio.Group>
  </>
}
export default RadioGroupLast;
```

:::

## 自定义尺寸

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react-taro';

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

## 自定义图标

建议 `icon` `activeIcon` 一起修改

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react-taro';
import { Checklist } from '@nutui/icons-react-taro'

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio
      icon={<Checklist />}
      activeIcon={<Checklist style={{ color: 'red' }} />}
    >
      自定义图标
    </Radio>
  </>
}
export default RadioGroupLast;
```

:::

## 触发 change 事件

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react-taro';

const RadioGroupLast = () => {
  const [checkedValue] = useState(1)
  return <>
    <Radio.Group
      defaultValue={checkedValue}
      onChange={(value) => console.log(value)}
    >
      <Radio value={1}>触发事件</Radio>
      <Radio value={2}>触发事件</Radio>
    </Radio.Group>
  </>
}
export default RadioGroupLast;
```

:::

## 配置 options 渲染单选按钮

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react-taro';

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
  return <Radio.Group options={optionsDemo1} value={radioVal}
                      onChange={handleChange} />
}
export default RadioGroupOptions;
```

:::

## Radio

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | `boolean` | `-` |
| defaultChecked | 初始是否选中 | `boolean` | `-` |
| disabled | 是否禁用选择 | `boolean` | `false` |
| value | 携带的标识值，用于 Group 模式 | `string`  \|  `number` | `-` |
| labelPosition | 文本所在的位置 | `left\| right` | `right` |
| icon | <a href="#/icon">图标名称</a>，选中前(建议和`activeIcon`一起修改) | `ReactNode` | `'CheckNormal'` |
| activeIcon | <a href="#/icon">图标名称</a>，选中后(建议和`icon`一起修改) | `ReactNode` | `'CheckChecked'` |
| shape | 形状 | `button` \| `round` \| `round` |`round` |
| onChange | 选中态变化时触发 | `(checked: boolean) => void` | `-` |

## Radio.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项的标识符 | `string`  \|  `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| disabled | 是否禁用 | `boolean` | `false` |
| direction | 使用横纵方向 | `horizontal` \| `vertical` | `vertical` |
| options | 配置 options 渲染单选按钮 | `Array<{ label: string value: string disabled?: boolean }>`  | `-` |
| onChange | 值变化时触发 | `(value: string \| number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-radio-label-font-color | 字体颜色 | `$gray1` |
| \--nutui-radio-label-font-active-color | 按钮状态下选中字体颜色 | `$primary-color` |
| \--nutui-radio-label-disable-color | label 的禁用字体颜色 | `$gray3` |
| \--nutui-radio-icon-disable-color | label 的禁用字体颜色 | `$gray2` |
| \--nutui-radio-label-button-border-color | shape为button的边框颜色 | `$primary-color` |
| \--nutui-radio-label-button-background | shape为button的背景色 | `rgba(250, 44, 25, 0.05)` |
| \--nutui-radio-label-margin-left | label 的左外边距 | `15px` |
| \--nutui-radio-label-font-size | 字号 | `14px` |
| \--nutui-radio-button-border-radius | shape为button的圆角 | `15px` |
| \--nutui-radio-button-font-size | shape为button的字号 | `12px` |
| \--nutui-radio-button-padding | shape为button的内边距 | `5px 18px` |
| \--nutui-radio-icon-disable-color2 | icon 的禁用颜色 | `$gray3` |
| \--nutui-radiogroup-radio-margin | Group模式下每个 radio 的外边距 | `0 20px 5px 0` |
| \--nutui-radiogroup-radio-label-margin | Group模式下每个 radio 中的 label 外边距 | `0 5px 0 5px` |
| \--nutui-radio-button-disabled-active-background | button模式下选中且禁用的背景色 | `rgba(0, 0, 0, 0.15)` |
| \--nutui-radio-button-disabled-active-color | button模式下选中且禁用的字体色 | `rgba(0, 0, 0, 0.25)` |
| \--nutui-radio-button-disabled-active-border-color | button模式下选中且禁用的边框色 | `rgba(211, 211, 211, 0.15)` |