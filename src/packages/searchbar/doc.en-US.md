#  SearchBar

### introduce

The input box component used to search the scene.

### Install

```javascript
// react
import { SearchBar } from '@nutui/nutui-react';
```

## Code demonstration

### Basic usage

`SearchBar`'s `placeholder` 'attribute supports customization.

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar placeholder="Go to jd.com and buy good things" />
  </>
}
export default App;
```
:::

### Search box shape and maximum length

`SearchBar`'s `round` Attribute supports defining fillet right angles，`maxLength` Can control the maximum length of input characters。

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


### Background settings inside and outside the search box

`SearchBar`'s `background` Property to set the background color outside the search box，`inputBackground` Property to set the background color of the search box，`align` Set text alignment

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

### Search box text settings

`SearchBar`’s `label` Property to set the text on the left side of the search box，`actionText` Property to set the Cancel button text

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar label="text" actionText="test" />
  </>
}
export default App;

```
:::


### Customize icon settings

`SearchBar`'s `leftoutIcon` `rightoutIcon` Property can set the left and right icons or customize the content

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



### Data change monitoring

`SearchBar`'s `change` You can get the input content.

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

|Parameter | description | type | default value|
|--------------|----------------------------------|--------|------------------|
|value | current input value | string | - |
|placeholder | input box default dark texture | string | `Please enter `|
|classname | custom class name | string | - |
|shape | search box shape, the optional value is 'round '| string | `square` |
|disabled | whether to disable the input box | boolean | `false` |
|readonly | the input box is read-only | boolean | `false` |
|maxLength | maximum input length | number | `9999` |
|clearable | whether to display the clear button | boolean | `true` |
| clearSize `v2.0.0` | the size of clear button，same as Icon's size | string \| number | `12px` |
|background | search box external background color |string | - |
|inputbackground | search box background color |string | - |
|inputalign | alignment, optional `center` `right` | string | `left` |
|autofocus | auto focus | boolean | `false` |
|label | left text of search box | string | - |
|actiontext | cancel button text | ReactNode | - |
|leftinicon | input box, left Icon | ReactNode | `< Icon name="search" size="12" />` |
|rightinicon | input box, right icon | ReactNode | - |
|leftouticon | outside the input box, left Icon | ReactNode | - |
|rightouticon | outside the input box, right icon | ReactNode | - |

### Events

|Event name | description | callback parameters|
|--------|----------------|--------------|
|onChange | triggered when entering content | `val: string, event: Event` |
|onFocus | triggered when focusing | `val: string, event: Event` |
|onBlur | triggered when out of focus | `val: string, event: Event` |
|onClear | triggered when clicking clear | `event: Event` |
|onCancel `v1.3.6`| Fired when the cancel button is clicked | - |
|onSearch | trigger when confirming search | `val: string, event: Event` |
|onClickInput | triggered when clicking the input area | event: Event |
|onClickLeftinIcon | triggered when clicking the icon on the left side of the input box | `val: string, event: Event` |
|onClickLeftoutIcon | triggered when clicking the icon on the left outside of the input box | `val: string, event: Event` |
|onClickRightinIcon | triggered when clicking the icon on the right side of the input box | `val: string, event: Event` |
|onClickRightoutIcon | triggered when clicking the icon on the right side of the input box | `val: string, event: Event` |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
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
