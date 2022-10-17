#  SearchBar组件

### 介绍

用于搜索场景的输入框组件。

### 安装

```javascript
import { SearchBar } from '@nutui/nutui-react';

```

## 代码演示

### 基础用法

`SearchBar` 的 `placeholder` 属性支持自定义。

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar placeholder="上京东，购好物" />
  </>
}
export default App;
```
:::

### 搜索框形状及最大长度

`SearchBar` 的 `round` 属性支持定义圆角直角，`maxLength` 可控制输入字符的最大长度。

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar shape="round" maxLength={5} />
  </>
}
export default App;
```
:::


### 搜索框内外背景设置

`SearchBar` 的 `background` 属性可以设置搜索框外部的背景色，`inputBackground` 属性可以设置搜索框的背景色，
`align` 设置文本对齐方式

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar
      background="linear-gradient(to right, #9866F0, #EB4D50)"
      inputBackground="#999"
      align="right"
    />
  </>
}
export default App;
```
:::

### 搜索框文本设置

`SearchBar` 的 `label` 属性可以设置搜索框左侧文本，`actionText` 属性可以设置取消按钮文本

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar label="文本" actionText="测试" />
  </>
}
export default App;

```
:::


### 自定义图标设置

`SearchBar` 的 `leftoutIcon` `rightoutIcon` 属性可以设置左右的图标或者自定义内容

:::demo
```tsx
import React from "react";
import { SearchBar, Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar
      leftoutIcon={<Icon name="heart-fill1" size="14" />}
      rightoutIcon={<Icon name="star-fill" size="14" />}
    />
  </>
}
export default App;

```
:::



### 数据改变监听

`SearchBar` 的 `change` 可获取输入的内容。

:::demo
```tsx
import React, { useState } from 'react'
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  const [value, setValue] = useState('')
  const change = (val: string, e: Event) => {
    setValue(val)
  }
  return <>
    <SearchBar
      change={(val: string, e: Event) => change(val, e)}
      maxLength={10}
    />
    value：{value}
  </>
}
export default App;
```
:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| value         | 当前输入的值               | _string_ | -                |
| placeholder        | 输入框默认暗纹  | _string_ | `请输入`   |
| className | 自定义class类名 | _string_ | '' |
| shape | 搜索框形状，可选值为 `round` | _string_ | `square` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 输入框只读 | _boolean_ | `false` |
| maxLength         | 最大输入长度   | _number_ | `9999`   |
| clearable          | 是否展示清除按钮 | _boolean_ | `true`     |
| background          | 搜索框外部背景色 | _string_ | -     |
| inputBackground          | 搜索框背景色 | _string_ | -     |
| inputAlign | 对齐方式，可选 `center` `right` | _string_ | `left` |
| autofocus  | 是否自动聚焦 | _boolean_ | `false` |
| label | 搜索框左侧文本 | _string_ | '' |
| actionText | 取消按钮文本 | _ReactNode_ | '' |
| leftinIcon     | 输入框内，左icon  | _ReactNode_ | `<Icon name="search" size="12" />` |
| rightinIcon     | 输入框内，右icon | _ReactNode_ | - |
| leftoutIcon     | 输入框外，左icon | _ReactNode_ | - |
| rightoutIcon    | 输入框外，右icon | _ReactNode_ | - |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onChange  | 输入内容时触发 | _val: string, event: Event_ |
| onFocus  | 聚焦时触发 | _val: string, event: Event_ |
| onBlur  | 失焦时触发 | _val: string, event: Event_ |
| onClear  | 点击清空时触发 | _event: Event_ |
| onCancel `v1.3.6` | 点击取消按钮时触发 | - |
| onSearch  | 确定搜索时触发 | _val: string, event: Event_ |
| onClickInput |	点击输入区域时触发	 |	_event: Event_ |
| onClickLeftinIcon |	点击输入框`内左侧`图标时触发 |	_val: string, event: Event_ |
| onClickLeftoutIcon |	点击输入框`外左侧`图标时触发 |	_val: string, event: Event_ |
| onClickRightinIcon |	点击输入框`内右侧`图标时触发 |	_val: string, event: Event_ |
| onClickRightoutIcon |	点击输入框`外右侧`图标时触发 |	_val: string, event: Event_ |
