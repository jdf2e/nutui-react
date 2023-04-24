#  Switch 开关

## 介绍

用来打开或关闭选项。

## 安装

```ts
import { Switch } from '@nutui/nutui-react-taro';
```

## 代码演示

### 非受控

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react-taro';

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
import { Switch } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro'

const App = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  
  const onChangeAsync = (value: boolean, event: Event) => {
    Taro.showToast({ title: `2秒后异步触发 ${value}` })
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


### 禁用状态

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react-taro';

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
import { Switch } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro'

const App = () => {
  const onChange = (value: boolean, event: Event) => {
    Taro.showToast({ title: `触发了onChange事件，开关状态：${value}` })
  }
  return ( 
    <>   
    <Switch onChange={(value, event) => onChange(value, event)} />
    </>
  );
};  
export default App;

```
:::
### 自定义颜色

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react-taro';

const App = () => {
  return ( 
    <Switch style={{ '--nutui-switch-open-bg-color': 'blue' }} />
  );
};  
export default App;

```
:::
### 支持文字

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react-taro';

const App = () => {
  return ( 
    <>   
    <Switch activeText="开" inactiveText="关" />
    </>
  );
};  
export default App;

```
:::




## Switch

### Props

| 参数           | 说明             | 类型    | 默认值                |
|----------------|------------------|---------|-----------------------|
| defaultChecked        | 开关状态，非受控         | boolean | `false`               |
| checked        | 开关状态，受控         | boolean | `false`               |
| disabled        | 禁用状态         | boolean | `false`               |
| activeText    | 打开时文字描述   | string  | -                     |
| inactiveText  | 关闭时文字描述   | string  | -                     |
| onChange  | 切换开关时触发 | `onChange:(value: boolean, event: Event)` | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| --nutui-switch-close-bg-color | 开关关闭状态背景颜色 | `#ebebeb` |
| --nutui-switch-open-bg-color | 开关打开状态背景颜色 |`$primary-color` |
| --nutui-switch-width | 开关宽度 | `36px` |
| --nutui-switch-height | 开关高度  | `21px` |
| --nutui-switch-line-height | 开关行高 | `21px` |
| --nutui-switch-border-radius | 开关圆角大小 | `21px` |
| --nutui-switch-inside-width | 开关内部按钮宽度 | `13px` |
| --nutui-switch-inside-height | 开关内部按钮高度 | `13px` |
| --nutui-switch-inside-open-transform | 开关打开状态内部按钮位置 | `translateX(146%)` |
| --nutui-switch-inside-close-transform | 开关关闭状态内部按钮位置 | `translateX(30%)` |
| --nutui-switch-close-line-bg-color | 开关关闭状态内部按钮线条颜色 | `#f0f0f0` |
