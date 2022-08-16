# Input 输入框

### 介绍

用户可以在文本框里输入内容。

### 安装

```javascript
import { Input } from '@nutui/nutui-react';

```

## 代码演示

### 基础用法

:::demo
```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const [value1, UpdateValue1] = useState('')
  return (
    <>
      <Input label="文本" defaultValue="{value1}"  placeholder="文本" />
    </>
  );
};
export default App;
```
:::


### 自定义类型

:::demo
```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const  [state, setState] = useState({
        text: '',
        password: '',
        number: '',
        digit: '',
        tel: ''
    })
  return (
    <>
       <Input
          label="文本" 
          placeholder="文本" 
          defaultValue={state.text}
        />
        <Input
          label="密码" 
          placeholder="密码"
          defaultValue={state.password}
          type="password"
        />
        <Input
          label="数字" 
          placeholder="数字"
          defaultValue={state.number}
          type="number"
        />
        <Input
          label="整数" 
          placeholder="整数"
          defaultValue={state.digit}
          type="digit"
        />
        <Input
          label="手机号" 
          placeholder="手机号"
          defaultValue={state.tel}
          type="tel"
        />
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
    const  [state, setState] = useState({
        readonly:'',
        disabled: '',
    })
  return (
    <>
       <Input
          label="文本" 
          placeholder="只读" 
          defaultValue={state.readonly}
          readonly
        />
        <Input
          label="文本" 
          placeholder="禁用"
          defaultValue={state.disabled}
          disabled
        />
    </>
  )
}
export default App;
```
:::
### 显示图标

通过 `left-icon` 和 `right-icon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。需要引用 `Icon` 组件

:::demo
```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const  [state, setState] = useState({
        showIcon: '',
        clear: '',
    })
  return (
    <>
       <Input
          label="文本" 
          placeholder="显示图标" 
          defaultValue={state.showIcon}
          leftIcon="dongdong"
          rightIcon="ask2"
        />
        <Input
          label="文本" 
          placeholder="显示清除图标"
          defaultValue={state.clear}
          clearable
          clearSize="14"
        />
    </>
  )
}
export default App;
```
:::

### 错误提示

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const  [state, setState] = useState({
        required: '',
        error1: '',
        error2: '',
    })
  return (
    <>
       <Input
          label="文本" 
          placeholder="必填项" 
          defaultValue={state.required}
          required
        />
        <Input
          label="文本" 
          placeholder="输入内容标红"
          defaultValue={state.error1}
          error
        />
         <Input
          label="文本" 
          placeholder="底部错误提示文案"
          defaultValue={state.error2}
          errorMessage="底部错误提示文案"
        />
    </>
  )
}
export default App;
```
:::
### 插入按钮

:::demo

```tsx
import  React, { useState } from "react";
import { Input, Button } from '@nutui/nutui-react';

const App = () => {
    const  [state, setState] = useState({
        buttonVal: '',
    })
    
  return (
    <>
       <Input
          label="短信验证码"
          placeholder="请输入短信验证码"
          defaultValue={state.buttonVal}
          clearable
          center
          slotButton={<Button size="small" type="primary">发送验证码</Button>}
        />
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
    const  [state, setState] = useState({
        format1: '',
        format2: '',
    })
    const formatter = (value: string) => value.replace(/\d/g, '')
  return (
    <>
       <Input
          label="文本"
          placeholder="在输入时执行格式化"
          defaultValue={state.format1}
          formatter={formatter}
        />
        <Input
          label="文本"
          placeholder="在失焦时执行格式化"
          defaultValue={state.format2}
          formatter={formatter}
          formatTrigger="onBlur"
        />
    </>
  )
}
export default App;
```
:::
### 显示字数统计

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const  [state, setState] = useState({
        textarea: '',
    })
  return (
    <>
       <Input
          label="留言"
          placeholder="请输入留言"
          defaultValue={state.textarea}
          type="textarea"
          showWordLimit
          rows="2"
          maxlength="50"
        />
    </>
  )
}
export default App;
```
:::
### 对齐方式

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const  [state, setState] = useState({
        align1: '',
        align2: '',
    })
  return (
    <>
       <Input
          label="文本"
          placeholder="文本内容对齐"
          defaultValue={state.align1}
          labelAlign="right"
        />
        <Input
          label="文本"
          placeholder="输入框内容对齐"
          defaultValue={state.align2}
          labelAlign="right"
        />
    </>
  )
}
export default App;
```
:::
### 无边框

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const  [state, setState] = useState({
        noBorder1: '',
        noBorder2: '',
    })
  return (
    <>
       <Input
          label="无边框"
          defaultValue={state.noBorder1}
          placeholder="无边框"
          border={false}
        />
        <Input
          label="无边框"
          defaultValue={state.noBorder2}
           placeholder="无边框"
          border={false}
        />
    </>
  )
}
export default App;
```
:::
### 点击事件

:::demo

```tsx
import  React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const  [state, setState] = useState({
        event: '',
    })
    const change = (value: string | number) => {
        console.log('change: ', value)
    }
    const focus = (value: string | number, event: Event) => {
        console.log('focus:', value, event)
    }
    const blur = (value: string | number, event: Event) => {
        console.log('blur:', value, event)
    }
    const clear = (value: string | number, event: Event) => {
        console.log('clear:', value, event)
    }
    const click = (value: string | number) => {
        console.log('click:', value)
    }
    const clickInput = (value: string | number) => {
        console.log('clickInput:', value)
    }
    const clickLeftIcon = (value: string | number) => {
        console.log('clickLeftIcon:', value)
    }
    const clickRightIcon = (value: string | number) => {
        console.log('clickRightIcon:', value)
    }
  return (
    <>
       <Input
          label="点击"
          placeholder="点击"
          defaultValue={state.event}
          leftIcon="dongdong"
          rightIcon="ask2"
          clearable
          change={change}
          focus={focus}
          blur={blur}
          clear={clear}
          click={click}
          clickInput={clickInput}
          clickLeftIcon={clickLeftIcon}
          clickRightIcon={clickRightIcon}
        />
    </>
  )
}
export default App;
```
:::
### Prop

| 参数         | 说明                                   | 类型           | 默认值  |
| ------------ | -------------------------------------- | -------------- | ------- |
| defaultValue | 初始默认值，双向绑定                   | String         | -       |
| type         | 输入框类型，支持原生 `input` 标签的所有 `type` 属性，另外还支持 `textarea` `number` `digit`      | String         | `text`  |
| placeholder  | 输入框为空时占位符                           | String         | -       |
| label        | 左侧文本                               | String         | -       |
| labelClass  | 左侧文本额外类名                        | String | -  |
| labelWidth  | 左侧文本宽度，默认单位为 `px`            | String、Number | `80`    |
| labelAlign  | 左侧文本对齐方式，可选值 `left`、`center`、`right`   | String | `left` |
| inputAlign  | 输入框内容对齐方式，可选值 `left`、`center`、`right` | String | `left` |
| colon        | 是否在 label 后面添加冒号               | Boolean        | `false` |
| required     | 左侧*号是否展示                        | Boolean        | `false` |
| border       | 是否显示下边框                         | Boolean        | `true` |
| disabled     | 是否禁用                              | Boolean        | `false` |
| readonly     | 是否只读                              | Boolean        | `false` |
| autofocus    | 是否自动获得焦点，iOS 系统不支持该属性     | Boolean        | `false` |
| maxlength      | 限制最长输入字符                       | String、Number  | -       |
| clearable    | 展示清除 Icon                         | Boolean        | `false`  |
| clearIcon   | 清除图标 Icon 名称或图片链接，[可参考 Icon 组件的 name 属性](#/icon)   | String        | `mask-close`  |
| clearSize   | 清除图标的 `font-size` 大小           | String        | `14`  |
| leftIcon    | 左侧 Icon 名称或图片链接，[可参考 Icon 组件的 name 属性](#/icon) | String        | - |
| rightIcon   | 右侧 Icon 名称或图片链接，[可参考 Icon 组件的 name 属性](#/icon) | String        | - |
| leftIconSize    | 左侧 Icon 的 `font-size` 大小           | String        | `14`  |
| rightIconSize   | 右侧 Icon 的 `font-size` 大小           | String        | `14`  |
| showWordLimit | 是否显示限制最长输入字符，需要设置 `max-length` 属性 | Boolean | `false`  |
| error         | 是否标红                                | Boolean | `false`  |
| errorMessage | 底部错误提示文案，为空时不展示            | String、Number | - |
| errorMessageAlign | 底部错误提示文案对齐方式，可选值 `left`、`center`、`right`          | String | - |
| formatter      | 输入内容格式化函数    | `(val: string) => string` | - |
| formatTrigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | String | - |
### Events

| 名称   | 说明           | 回调参数    |
|--------|----------------|-------------|
| change | 输入框内容变化时触发 | val ,event |
| focus  | 输入框聚焦时触发     | val  ,event |
| blur   | 输入框失焦时触发     | val ,event  |
| clear  | 点击清除按钮时触发   | val ,event  |
| click  | 点击组件时触发      | val ,event  |
| clickInput      | 点击输入区域时触发      | val ,event  |
| clickLeftIcon  | 点击左侧图标时触发      | val ,event  |
| clickRightIcon | 点击右侧图标时触发      | val ,event  |

### Slots
| 名称  | 说明     | 
|-------|----------|
| slotButton | 自定义输入框尾部按钮 |
| slotInput `v3.1.22` | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |