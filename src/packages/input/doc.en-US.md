# Input

## Intro

The user can enter content in the text box.

## Install

```tsx
import { Input } from '@nutui/nutui-react';

```

## Demo

### Basic Usage

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Input placeholder="请输入文本" />
    </>
  );
};
export default App;
```

:::

### Uncontrolled

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
       <Input defaultValue="NutUI React" placeholder="请输入文本" />
    </>
  )
}
export default App;
```

:::

### Controlled

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const [val, setVal] = useState('NutUI React')
  return (
    <>
      <Input
        value={val}
        onChange={(val) => setVal(val)}
        placeholder={translated.text}
      /> 
    </>
  )
}
export default App;
```

:::

### Custom Type

:::demo

```tsx
import React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Input type="text" placeholder="请输入文本" />
      <Input type="password" placeholder="请输入密码" />
      <Input type="digit" placeholder="请输入数字" />
      <Input type="number" placeholder="请输入整数" />
    </>
  )
}
export default App;
```

:::

### Disabled and readonly

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
       <Input readOnly placeholder="readOnly" />
       <Input disabled placeholder="disabled" />
    </>
  )
}
export default App;
```

:::

### Clear

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';
import { Close } from '@nutui/icons-react'

const App = () => {
  return (
    <>
       <Input clearable placeholder="clear Icon" />
       <Input clearable clearIcon={<Close />} placeholder="clear Icon" />
    </>
  )
}
export default App;
```

:::

### Formatter

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  const formatter = (value: string) => value.replace(/\d/g, '')
  return (
    <>
       <Input formatter={formatter} placeholder="Perform formatting on input" />
       <Input
         formatter={formatter}
         formatTrigger="onBlur"
         placeholder="Perform formatting when out of focus"
       />
    </>
  )
}
export default App;
```

:::

### Event

:::demo

```tsx
import  React, { useState } from "react";
import { Input, Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
       <Input
         placeholder="trigger onClick"
         onClick={() => Toast.show('onClick')}
       />
    </>
  )
}
export default App;
```

:::

### Layout

:::demo

```tsx
import  React, { useState } from "react";
import { Input, Button } from '@nutui/nutui-react';
import { Ask } from '@nutui/icons-react'

const App = () => {
  return (
    <>
       <div
         style={{
           display: 'flex',
           alignItems: 'center',
           background: '#fff',
           padding: '0 10px',
         }}
       >
         <Ask />
         <Input placeholder="Please enter the SMS verification code" />
         <div className="right">
           <Button type="primary" size="small">
             Get code
           </Button>
         </div>
       </div>
    </>
  )
}
export default App;
```

:::

### Border

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
       <Input style={{'--nutui-input-border-bottom-width': '1px'}} placeholder="with border" />
    </>
  )
}
export default App;
```

:::

## Input

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | default value | `string` | `-` |
| value | input value | `string` | `-` |
| type | input box type, supports all `type` attributes of native `input` tags, and also supports `number` `digit` | `string` | `text` |
| name | Component name, used for form submission to get data | `string` | `-` |
| placeholder | placeholder when the input box is empty | `string` | `-` |
| align | Alignment of input box content, optional values `left`, `center`, `right` | `string` | `left` |
| disabled | Whether to disable | `boolean` | `false` |
| readOnly | Whether to read only | `boolean` | `false` |
| autoFocus | Whether to automatically get the focus, iOS system does not support this property | `boolean` | `false` |
| maxLength | Limit the longest input characters | `string, number` | `-` |
| clearable | show clear Icon | `boolean` | `false` |
| clearIcon | clear icon Icon <a href="#/icon">refer to Icon </a> | `ReactNode` | `MaskClose` |
| formatter | input content formatting function | `(val: string) => string` | `-` |
| formatTrigger | The timing when the format function is triggered, the optional values are `onChange`, `onBlur` | `string` | `-` |
| onChange | Triggered when the content of the input box changes | `(value: string) => void` | `-` |
| onBlur | Triggered when focus is lost | `(value: string) => void` | `-` |
| onFocus | Triggered after gaining focus | `(value: string) => void` | `-` |
| onClear | Triggered when the clear button is clicked | `(value: string) => void` | `-` |
| onClick | Triggered when the input container is clicked | `(value: MouseEvent<HTMLDivElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-input-border-bottom | 边框颜色 | `#eaf0fb` |
| \--nutui-input-border-bottom-width | 边框宽度 | `0px` |
| \--nutui-input-disabled-color | 禁用的文本颜色 | `#c8c9cc` |
| \--nutui-input-font-size | 文本字号 | `$font-size` |
| \--nutui-input-padding | 输入框容器的内边距 | `10px 25px` |