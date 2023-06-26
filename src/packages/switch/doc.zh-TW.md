# Switch 開關

## 介紹

用來打開或關閉選項。

## 安裝

```tsx
import { Switch } from '@nutui/nutui-react';
```

## 代碼演示

### 非受控

:::demo

```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch defaultChecked />
    </>
  );
};  
export default App;

```

:::

### 受控

:::demo

```tsx
import  React, { useState } from "react";
import { Switch, Toast } from '@nutui/nutui-react';

const App = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  
  const onChangeAsync = (value: boolean, event: Event) => {
    Toast.show(`2秒後異步觸發 ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return ( 
    <>   
    <Switch
      checked={checkedAsync}
      onChange={(value, event) => onChangeAsync(value, event)}
     />
    </>
  );
};  
export default App;

```

:::

### 禁用狀態

:::demo

```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch defaultChecked disabled />
    </>
  );
};  
export default App;

```

:::

### onChange事件

:::demo

```tsx
import  React from "react";
import { Switch, Toast } from '@nutui/nutui-react';

const App = () => {
  const onChange = (value: boolean, event: Event) => {
    Toast.show(`觸發了onChange事件，開關狀態：${value}`)
  }
  return ( 
    <>   
    <Switch defaultChecked  onChange={(value, event) => onChange(value, event)} />
    </>
  );
};  
export default App;

```

:::

### 自定義顏色

:::demo

```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <Switch defaultChecked style={{ '--nutui-switch-open-background-color': 'blue' }} />
  );
};  
export default App;

```

:::

### 支持文字

:::demo

```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch  defaultChecked activeText=
"開" inactiveText="關" />
    </>
  );
};  
export default App;

```

:::

## Switch

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultChecked | 開關狀態，非受控 | `boolean` | `false` |
| checked | 開關狀態，受控 | `boolean` | `false` |
| disabled | 禁用狀態 | `boolean` | `false` |
| activeText | 打開時文字描述 | `string` | `-` |
| inactiveText | 關閉時文字描述 | `string` | `-` |
| onChange | 切換開關時觸發 | `onChange:(value: boolean, event: Event)` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-switch-close-background-color | 開關關閉狀態背景顏色 | `#ebebeb` |
| \--nutui-switch-open-background-color | 開關打開狀態背景顏色 | `$primary-color` |
| \--nutui-switch-width | 開關寬度 | `36px` |
| \--nutui-switch-height | 開關高度 | `21px` |
| \--nutui-switch-line-height | 開關行高 | `21px` |
| \--nutui-switch-border-radius | 開關圓角大小 | `21px` |
| \--nutui-switch-inside-width | 開關內部按鈕寬度 | `13px` |
| \--nutui-switch-inside-height | 開關內部按鈕高度 | `13px` |
| \--nutui-switch-inside-open-transform | 開關打開狀態內部按鈕位置 | `translateX(146%)` |
| \--nutui-switch-inside-close-transform | 開關關閉狀態內部按鈕位置 | `translateX(30%)` |
| \--nutui-switch-close-line-bg-color | 開關關閉狀態內部按鈕線條顏色 | `#f0f0f0` |