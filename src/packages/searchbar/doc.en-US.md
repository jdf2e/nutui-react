# SearchBar

## Intro

The input box component used to search the scene.

## Install

```tsx
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
    <SearchBar backable placeholder="Go to jd.com and buy good things" />
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
        nutuiSearchbarBackground: 'var(--nutui-color-primary)',
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
import {   Left,
  Photograph,
  ArrowDown,
  MoreS,
  Close,
  Star
} from '@nutui/icons-react'

const App = () => {
  return <>
    <SearchBar
      left={
        <>
          <Left width={20} height={20} />
          <Close width={20} height={20} />
        </>
      }
      right={
        <>
          <Star
            width={20}
            height={20}
            style={{
              color: 'var(--nutui-color-primary)',
            }}
          />
          <MoreS width={20} height={20} />
        </>
      }
      rightIn={
        <Photograph
          width={16}
          height={16}
          onClick={() => {
            console.log('Photograph right in')
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | current input value | `string` | `-` |
| placeholder | input box default dark texture | `string` | `Please enter` |
| shape | search box shape, the optional value is 'round ' | `string` | `square` |
| disabled | whether to disable the input box | `boolean` | `false` |
| readOnly | the input box is read-only | `boolean` | `false` |
| maxLength | maximum input length | `number` | `9999` |
| clearable | whether to display the clear button | `boolean` | `true` |
| autoFocus | auto focus | `boolean` | `false` |
| backable | whether to display the back button | `boolean` | `false` |
| leftIn | input box, left in area | `ReactNode` | `<Search width="12" height="12" />` |
| rightIn | input box, right in area | `ReactNode` | `-` |
| left | outside the input box, left | `ReactNode` | `-` |
| right | outside the input box, right | `ReactNode` | `-` |
| onChange | triggered when entering content | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | triggered when focusing | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | triggered when out of focus | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onClear | triggered when clicking clear | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |
| onSearch | trigger when confirming search | `(val: string) => void` | `-` |
| onInputClick | triggered when clicking the input area | `(event: MouseEvent<HTMLInputElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-searchbar-width | searchbar width | `100%` |
| \--nutui-searchbar-padding | searchbar padding | `6px 16px` |
| \--nutui-searchbar-background | searchbar background | `$color-background` |
| \--nutui-searchbar-color | searchbar font color | `$color-title` |
| \--nutui-searchbar-gap | searchbar gap | `16px` |
| \--nutui-searchbar-font-size | searchbar font size | `$font-size` |
| \--nutui-searchbar-content-padding | searchbar content padding | `0px 12px` |
| \--nutui-searchbar-content-background | searchbar content background | `$color-background-overlay` |
| \--nutui-searchbar-content-border-radius | searchbar content border radius | `4px` |
| \--nutui-searchbar-content-round-border-radius | searchbar content border radius when mode is round | `18px` |

| \--nutui-searchbar-input-height |  searchbar input height  | `32px` |
| \--nutui-searchbar-input-padding | searchbar input padding | `0 4px` |
| \--nutui-searchbar-input-text-color | searchbar input text color | `$color-title` |
| \--nutui-searchbar-input-curror-color | searchbar input curror color | `$color-title` |
| \--nutui-searchbar-input-text-align | searchbar input text align | `left` |
