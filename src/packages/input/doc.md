# Input 输入框

## 介绍

用户可以在文本框里输入内容。

## 安装

```javascript
// react
import { Input } from '@nutui/nutui-react';

```

## 代码演示

### 基础用法

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

### 非受控

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

### 受控

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

### 自定义类型

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

### 禁用和只读

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
       <Input readOnly placeholder="输入框只读" />
       <Input disabled placeholder="输入框禁用" />
    </>
  )
}
export default App;
```

:::

### 显示清除图标

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';
import { Close } from '@nutui/icons-react'

const App = () => {
  return (
    <>
       <Input clearable placeholder="显示清除图标" />
       <Input clearable clearIcon={<Close />} placeholder="显示清除图标" />
    </>
  )
}
export default App;
```

:::

### 格式化输入内容

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  const formatter = (value: string) => value.replace(/\d/g, '')
  return (
    <>
       <Input formatter={formatter} placeholder="在输入时执行格式化" />
       <Input
         formatter={formatter}
         formatTrigger="onBlur"
         placeholder="在失焦时执行格式化"
       />
    </>
  )
}
export default App;
```

:::

### 事件

:::demo

```tsx
import  React, { useState } from "react";
import { Input, Toast } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
       <Input
         placeholder="事件"
         onClick={() => Toast.text('onClick')}
       />
    </>
  )
}
export default App;
```

:::

### 布局

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
         <Input placeholder="请输入短信验证码" />
         <div className="right">
           <Button type="primary" size="small">
             获取验证码
           </Button>
         </div>
       </div>
    </>
  )
}
export default App;
```

:::

### 边框

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
       <Input style={{'--nutui-input-border-bottom-width': '1px'}} placeholder="边框" />
    </>
  )
}
export default App;
```

:::

## Input

### Prop

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 初始默认值 | `string` | `-` |
| value | 初始默认值 | `string` | `-` |
| type | 输入框类型，支持原生 `input` 标签的所有 `type` 属性，另外还支持 `number` `digit` | `string` | `text` |
| name | 组件名字，用于表单提交获取数据 | `string` | `-` |
| placeholder | 输入框为空时占位符 | `string` | `-` |
| align | 输入框内容对齐方式，可选值 `left`、`center`、`right` | `string` | `left` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| autoFocus | 是否自动获得焦点，iOS 系统不支持该属性 | `boolean` | `false` |
| maxLength | 限制最长输入字符 | `string \| number` | `-` |
| clearable | 展示清除 Icon | `boolean` | `false` |
| clearIcon | 清除图标 Icon <a href="#/icon">可参考 Icon </a> | `ReactNode` | `MaskClose` |
| confirmType | 键盘右下角按钮的文字，仅在type='text'时生效,可选值 send：发送、search：搜索、next：下一个、go：前往、done：完成 | `string` | `done` |
| formatter | 输入内容格式化函数 | `(val: string) => string` | `-` |
| formatTrigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | `string` | `-` |
| onChange | 输入框内容变化时触发 | `(value: string) => void` | `-` |
| onBlur | 失去焦点后触发 | `(value: string) => void` | `-` |
| onFocus | 获得焦点后触发 | `(value: string) => void` | `-` |
| onClear | 点击清空按钮时触发 | `(value: string) => void` | `-` |
| onClick | 点击 input 容器触发 | `(value: MouseEvent<HTMLDivElement>) => void` | `-` |

此外还支持以下原生属性：`onCompositionStart` `onCompositionEnd`

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-input-border-bottom | 边框颜色 | `#eaf0fb` |
| \--nutui-input-border-bottom-width | 边框宽度 | `0px` |
| \--nutui-input-disabled-color | 禁用的文本颜色 | `#c8c9cc` |
| \--nutui-input-font-size | 文本字号 | `$font-size-2` |
| \--nutui-input-padding | 输入框容器的内边距 | `10px 25px` |