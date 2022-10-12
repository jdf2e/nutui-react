# SearchBar組件

### 介紹

用於蒐索場景的輸入框組件。

### 安裝

```javascript
import { SearchBar } from '@nutui/nutui-react';

```

## 程式碼演示

### 基礎用法

`SearchBar` 的 `placeholder` 内容支持自定義。

:::demo
```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react';

const App = () => {
  return <>
    <SearchBar placeholder="上京東，購好物" />
  </>
}
export default App;
```
:::

### 蒐索框形狀及最大長度

`SearchBar`的`round`内容支持定義圓角直角，`maxLength`可控制輸入字元的最大長度。

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


### 蒐索框內外背景設定

`SearchBar`的`background`内容可以設定蒐索框外部的背景色，`inputBackground`内容可以設定蒐索框的背景色，`align`設定文字對齊管道

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

### 蒐索框文字設定

`SearchBar`的`label`内容可以設定蒐索框左側文字，`actionText`内容可以設定取消按鈕文字

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


### 自定義圖標設定

`SearchBar`的`leftoutIcon` `rightoutIcon`内容可以設定左右的圖標或者自定義內容

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



### 數據改變監聽

`SearchBar`的`change`可獲取輸入的內容。

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

|參數|說明|類型|預設值|
|--------------|----------------------------------|--------|------------------|
| value |當前輸入的值| _string_ | - |
| placeholder |輸入框默認暗紋| _string_ | ` 請輸入` |
| className |自定義class類名| _string_ | '' |
| shape |蒐索框形狀，可選值為`round` | _string_ | ` square` |
| disabled |是否禁用輸入框| _boolean_ | ` false` |
| readonly |輸入框只讀| _boolean_ | ` false` |
| maxLength |最大輸入長度| _number_ | ` 9999` |
| clearable |是否展示清除按鈕| _boolean_ | ` true` |
| background |蒐索框外部背景色| _string_ | - |
| inputBackground |蒐索框背景色| _string_ | - |
| inputAlign |對齊管道，可選`center` `right` | _string_ | ` left` |
| autofocus |是否自動聚焦| _boolean_ | ` false` |
| label |蒐索框左側文字| _string_ | '' |
| actionText |取消按鈕文字| _ReactNode_ | '' |
| leftinIcon |輸入框內，左icon | _ReactNode_ | `< Icon name=“search”size=“12”/>` |
| rightinIcon |輸入框內，右icon | _ReactNode_ | - |
| leftoutIcon |輸入框外，左icon | _ReactNode_ | - |
| rightoutIcon |輸入框外，右icon | _ReactNode_ | - |

### Events

|事件名|說明|回檔參數|
|--------|----------------|--------------|
| onChange |輸入內容時觸發| _val: string，event: Event_ |
| onFocus |聚焦時觸發| _val: string，event: Event_ |
| onBlur |失焦時觸發| _val: string，event: Event_ |
| onClear |點擊清空時觸發| _event: Event_ |
| onCancel  | 點擊取消按鈕時觸發 | - |
| onSearch |確定蒐索時觸發| _val: string，event: Event_ |
| onClickInput |點擊輸入區域時觸發| _event: Event_ |
| onClickLeftinIcon |點擊輸入框`內左側`圖標時觸發| _val: string，event: Event_ |
| onClickLeftoutIcon |點擊輸入框`外左側`圖標時觸發| _val: string，event: Event_ |
| onClickRightinIcon |點擊輸入框`內右側`圖標時觸發| _val: string，event: Event_ |
| onClickRightoutIcon |點擊輸入框`外右側`圖標時觸發| _val: string，event: Event_ |
