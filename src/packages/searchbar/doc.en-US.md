#  SearchBar

### introduce

The input box component used to search the scene.

### Install

```javascript
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
|value | current input value | _string_ | - |
|placeholder | input box default dark texture | _string_ | ` Please enter `|
|classname | custom class name | _string_ | '' |
|shape | search box shape, the optional value is 'round '| _string_ | ` square` |
|disabled | whether to disable the input box | _boolean_ | ` false` |
|readonly | the input box is read-only | _boolean_ | ` false` |
|maxLength | maximum input length | _number_ | ` 9999` |
|clearable | whether to display the clear button | _boolean_ | ` true` |
|background | search box external background color |_string_ | - |
|inputbackground | search box background color |_string_ | - |
|inputalign | alignment, optional `center` `right` | _string_ | ` left` |
|autofocus | auto focus | _boolean_ | ` false` |
|label | left text of search box | _string_ | '' |
|actiontext | cancel button text | _ReactNode_ | '' |
|leftinicon | input box, left Icon | _ReactNode_ | `< Icon name="search" size="12" />` |
|rightinicon | input box, right icon | _ReactNode_ | - |
|leftouticon | outside the input box, left Icon | _ReactNode_ | - |
|rightouticon | outside the input box, right icon | _ReactNode_ | - |

### Events

|Event name | description | callback parameters|
|--------|----------------|--------------|
|onChange | triggered when entering content | _val: string, event: Event_ |
|onFocus | triggered when focusing | _val: string, event: Event_ |
|onBlur | triggered when out of focus | _val: string, event: Event_ |
|onClear | triggered when clicking clear | _event: Event_ |
|onCancel `v1.3.6`| Fired when the cancel button is clicked | - |
|onSearch | trigger when confirming search | _val: string, event: Event_ |
|onClickInput | triggered when clicking the input area | _event: Event_ |
|onClickLeftinIcon | triggered when clicking the icon on the left side of the input box | _val: string, event: Event_ |
|onClickLeftoutIcon | triggered when clicking the icon on the left outside of the input box | _val: string, event: Event_ |
|onClickRightinIcon | triggered when clicking the icon on the right side of the input box | _val: string, event: Event_ |
|onClickRightoutIcon | triggered when clicking the icon on the right side of the input box | _val: string, event: Event_ |
