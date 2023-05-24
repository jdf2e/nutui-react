#  SearchBar

## Introduce

The input box component used to search the scene.

## Install

```javascript
// react
import { SearchBar } from '@nutui/nutui-react';
```

## Demo

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

`SearchBar`'s `shape` Attribute supports defining fillet right angles，`maxLength` Can control the maximum length of input characters。

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

`SearchBar`'s CSS variable

:::demo
```tsx
import React from "react";
import { SearchBar, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return <>
    <ConfigProvider
      theme={{
        nutuiSearchbarBackground: 'var(--nutui-brand-color)',
        nutuiSearchbarInputBackground: '#eee',
        nutuiSearchbarInputTextAlign: 'right',
      }}
    >
      <SearchBar onSearch={(value) => Toast.text(value)} />
    </ConfigProvider>
  </>
}
export default App;
```
:::

### Search box text settings

`SearchBar`’s `left` Property to set the text on the left side of the search box，`right` Property to set the right side

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar left="text" right="test" />
  </>
}
export default App;

```
:::

### Customize icon settings

`SearchBar`'s `left` `right` `rightIn` Property can set the customize the content

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';
import { HeartFill1, StarFill, ArrowDown } from '@nutui/icons-react'

const App = () => {
  return <>
    <SearchBar
      left={<HeartFill1 width={14} height={14} />}
      right={<StarFill width={14} height={14} />}
      rightIn={
        <StarFill
          width={14}
          height={14}
          onClick={() => {
            console.log('StarFill right in')
          }}
        />
      }
    />
  </>
}
export default App;

```
:::


### Customize settings

`SearchBar`'s `leftIn` Property can set the customize the content

:::demo
```tsx
import React from "react";
import { SearchBar , PopOver} from '@nutui/nutui-react';
import { ArrowDown } from '@nutui/icons-react'

const App = () => {
  return <>
    <SearchBar
      leftIn={
        <PopOver
          visible={lightTheme}
          onClick={() => {
            lightTheme ? setLightTheme(false) : setLightTheme(true)
          }}
          list={itemList}
        >
          <div style={{ fontSize: '12px', width: '50px', display: 'flex' }}>
            更多
            <ArrowDown />
          </div>
        </PopOver>
      }
    />
  </>
}
export default App;

```
:::

### Data change monitoring

`SearchBar`'s `onChange` You can get the input content.

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
      onChange={(val: string, e: Event) => change(val, e)}
      maxLength={10}
    />
    value：{value}
  </>
}
export default App;
```
:::

## SearchBar

### Props

|Property | Description | Type | Default|
|--------------|-----------------|--------|------------------|
|value | current input value |  `string` | - |
|placeholder | input box default dark texture |  `string` | `Please enter `|
|shape | search box shape, the optional value is 'round '|  `string` | `square` |
|disabled | whether to disable the input box |  `boolean` | `false` |
|readOnly | the input box is read-only |  `boolean` | `false` |
|maxLength | maximum input length | number | `9999` |
|clearable | whether to display the clear button |  `boolean` | `true` |
|autoFocus | auto focus |  `boolean` | `false` |
|leftIn | input box, left in area |  `ReactNode` | `< Search size="12" />` |
|rightIn | input box, right in area |  `ReactNode` | - |
|left | outside the input box, left  |  `ReactNode` | - |
|right | outside the input box, right  |  `ReactNode` | - |
|onChange | triggered when entering content |  `(value: string, event: Event) => void` |
|onFocus | triggered when focusing |  `(value: string, event: Event) => void` |
|onBlur | triggered when out of focus |  `(value: string, event: Event) => void` |
|onClear | triggered when clicking clear | `(event: Event) => void` |
|onSearch | trigger when confirming search | `(val: string) => void`|
|onClickInput | triggered when clicking the input area | `(event: Event) => void` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | -- |
| --nutui-searchbar-width | searchbar width | `100%` |
| --nutui-searchbar-background | searchbar background | `$gray6` |
| --nutui-searchbar-padding | searchbar padding | `9px 10px` |
| --nutui-searchbar-content-border-radius | searchbar content border radius | `2px` |
| --nutui-searchbar-left-fontsize | searchbar left fontsize | `12px` | 
| --nutui-searchbar-left-padding | searchbar left padding | `0 12px 0 0`| 
| --nutui-searchbar-left-color | searchbar left color | `$gray1` |
| --nutui-searchbar-right-fontsize | searchbar right fontsize| `14px`| 
| --nutui-searchbar-right-padding | searchbar right padding| `0 0 0 8px`|
| --nutui-searchbar-right-color | searchbar right color|`$gray1` |
| --nutui-searchbar-input-height | searchbar input height |`32px` |
| --nutui-searchbar-input-padding | searchbar input padding |`0 28px` |
| --nutui-searchbar-input-background | searchbar input background |`#f7f7f7` |
| --nutui-searchbar-input-text-color | searchbar input text color |`$gray1` |
| --nutui-searchbar-input-curror-color |searchbar input curror color | `$gray1` |
| --nutui-searchbar-input-width | searchbar input width |`100%` |
| --nutui-searchbar-input-text-align | searchbar input text align |`100%` |
| --nutui-searchbar-input-border-radius | searchbar input border radius |`16px` |
| --nutui-searchbar-clear-icon-padding | searchbar clear icon padding | `0 10px 0 5px` |

