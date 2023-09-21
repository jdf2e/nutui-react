# SearchBar組件

## 介紹

用於搜索場景的輸入框組件。

## 安裝

```tsx
import { SearchBar } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

`SearchBar` 的 `placeholder` 屬性支持自定義。

:::demo

```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar backable placeholder="上京東，購好物" />
  </>
}
export default App;
```

:::

### 搜索框形狀及最大長度

`SearchBar` 的 `shape` 屬性支持定義圓角直角，`maxLength` 可控制輸入字符的最大長度。

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

### 搜索框內外背景設置

`SearchBar` 通過 CSS 變量設置。

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

### 搜索框文本設置

`SearchBar` 的 `left` 屬性可以設置搜索框左側內容，`right` 屬性可以設置搜索框右側內容

:::demo

```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar left="文本" right="測試" />
  </>
}
export default App;

```

:::

### 自定義圖標設置

`SearchBar` 的 `left` `right` `rightIn` 屬性可以設置自定義圖標

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

### 自定義設置

`SearchBar` 的 `leftIn` 屬性可以設置自定義內容

:::demo

```tsx
import React from "react";
import { SearchBar, PopOver } from '@nutui/nutui-react';
import {  ArrowDown } from '@nutui/icons-react'

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

### 數據改變監聽

`SearchBar` 的 `onChange` 可獲取輸入的內容。

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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前輸入的值 | `string` | `-` |
| placeholder | 輸入框默認暗紋 | `string` | `請輸入` |
| shape | 搜索框形狀，可選值為 `round` | `string` | `square` |
| disabled | 是否禁用輸入框 | `boolean` | `false` |
| readOnly | 輸入框只讀 | `boolean` | `false` |
| maxLength | 最大輸入長度 | `number` | `9999` |
| clearable | 是否展示清除按鈕 | `boolean` | `true` |
| autoFocus | 是否自動聚焦 | `boolean` | `false` |
| left | 搜索框左側區域 | `ReactNode` | `-` |
| right | 搜搜框右側區域 | `ReactNode` | `-` |
| leftIn | 輸入框內左側區域 | `ReactNode` | `<Search width="12" height="12" />` |
| rightIn | 輸入框內右側區域 | `ReactNode` | `-` |
| onChange | 輸入內容時觸發 | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | 聚焦時觸發 | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | 失焦時觸發 | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onClear | 點擊清空時觸發 | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |
| onSearch | 確定搜索時觸發 | `(val: string) => void` | `-` |
| onInputClick | 點擊輸入區域時觸發 | `(event: MouseEvent<HTMLInputElement>) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-searchbar-width | 搜索框的寬度 | `100%` |
| \--nutui-searchbar-padding | 搜索框的padding值 | `6px 16px` |
| \--nutui-searchbar-background | 搜索框背景色 | `$color-background` |
| \--nutui-searchbar-color | 搜索框字色 | `$color-title` |
| \--nutui-searchbar-gap | 搜索框各個間距 | `16px` |
| \--nutui-searchbar-font-size | 搜索框字號 | `$font-size` |
| \--nutui-searchbar-content-padding | 搜索框中間內容區的padding值 | `0px 12px` |
| \--nutui-searchbar-content-background | 搜索框中間內容區的背景色 | `$color-background-overlay` |
| \--nutui-searchbar-content-border-radius | 搜索框內容區圓角 | `4px` |
| \--nutui-searchbar-content-round-border-radius | 搜索框內容區在round模式下的圓角 | `18px` |
| \--nutui-searchbar-input-height | 搜索框輸入區高度 | `32px` |
| \--nutui-searchbar-input-padding | 搜索框輸入區padding | `0 4px` |
| \--nutui-searchbar-input-text-color | 搜索框輸入區字色 | `$color-title` |
| \--nutui-searchbar-input-curror-color | 搜索框輸入區輸入色 | `$color-title` |
| \--nutui-searchbar-input-text-align | 搜索框輸入區對齊方式 | `left` |
