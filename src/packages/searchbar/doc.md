#  SearchBar组件

### 介绍

用于搜索场景的输入框组件。

### 安装

```javascript
// react
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

| 属性 | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| value         | 当前输入的值               | string | -                |
| placeholder        | 输入框默认暗纹  | string | `请输入`   |
| className | 自定义class类名 | string | - |
| shape | 搜索框形状，可选值为 `round` | string | `square` |
| disabled | 是否禁用输入框 | boolean | `false` |
| readonly | 输入框只读 | boolean | `false` |
| maxLength         | 最大输入长度   | number | `9999`   |
| clearable          | 是否展示清除按钮 | boolean | `true`     |
| clearSize`v2.0.0` | 清除按钮尺寸大小，同Icon的size | string \| number | `12px` |
| background          | 搜索框外部背景色 | string | -     |
| inputBackground          | 搜索框背景色 | string | -     |
| inputAlign | 对齐方式，可选 `center` `right` | string | `left` |
| autofocus  | 是否自动聚焦 | boolean | `false` |
| label | 搜索框左侧文本 | string | - |
| actionText | 取消按钮文本 | ReactNode | - |
| leftinIcon     | 输入框内，左icon  | ReactNode | `<Icon name="search" size="12" />` |
| rightinIcon     | 输入框内，右icon | ReactNode | - |
| leftoutIcon     | 输入框外，左icon | ReactNode | - |
| rightoutIcon    | 输入框外，右icon | ReactNode | - |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onChange  | 输入内容时触发 | `val: string, event: Event` |
| onFocus  | 聚焦时触发 | `val: string, event: Event` |
| onBlur  | 失焦时触发 | `val: string, event: Event` |
| onClear  | 点击清空时触发 | `event: Event` |
| onCancel `v1.3.6` | 点击取消按钮时触发 | - |
| onSearch  | 确定搜索时触发 | `val: string, event: Event` |
| onClickInput |	点击输入区域时触发	 |	event: Event |
| onClickLeftinIcon |	点击输入框`内左侧`图标时触发 |	`val: string, event: Event` |
| onClickLeftoutIcon |	点击输入框`外左侧`图标时触发 |	`val: string, event: Event` |
| onClickRightinIcon |	点击输入框`内右侧`图标时触发 |	`val: string, event: Event` |
| onClickRightoutIcon |	点击输入框`外右侧`图标时触发 |	`val: string, event: Event` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-searchbar-background | `$gray6` |
| --nutui-searchbar-content-border-radius | `2px` |
| --nutui-searchbar-right-out-color | `$black` |
| --nutui-searchbar-padding | `9px 16px` |
| --nutui-searchbar-width | `100%` |
| --nutui-searchbar-label-fontsize | `12px` | 
| --nutui-searchbar-label-padding | `0 12px 0 0`| 
| --nutui-searchbar-label-color | `$gray1` |
| --nutui-searchbar-action-text-fontsize | `14px`| 
| --nutui-searchbar-action-text-padding | `0 0 0 8px`|
| --nutui-searchbar-action-text-color | `$gray1` |
| --nutui-searchbar-input-height | `32px` |
| --nutui-searchbar-input-padding | `0 28px` |
| --nutui-searchbar-input-background | `#f7f7f7` |
| --nutui-searchbar-input-text-color | `$gray1` |
| --nutui-searchbar-input-curror-color | `$gray1` |
| --nutui-searchbar-input-width | `100%` |
| --nutui-searchbar-input-border-radius | `16px` |
| --nutui-searchbar-input-box-shadow | `0 0 8px 0 rgba(0, 0, 0, 0.04)` |
| --nutui-searchbar-input-bar-color | `inherit` |
| --nutui-searchbar-input-bar-placeholder-color | `inherit` |
| --nutui-searchbar-clear-icon-padding | `0 10px 0 5px` |
