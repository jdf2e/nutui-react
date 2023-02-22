# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 安装

``` javascript
import { Button } from '@nutui/nutui-react-taro';
```

## 代码演示

### 设置 open-type
:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Button openType='share'>分享给好友</Button>
      <Button openType='openSetting'>打开授权设置页</Button>
    </>
  );
};
export default App;
```
:::

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
    <Button type="primary">主要按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="default">默认按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="success">成功按钮</Button>
    </>
  );
};
export default App;
```
:::

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Button plain type="primary">朴素按钮</Button>
      <Button plain type="info">朴素按钮</Button>
    </>
  );
};
export default App;
```
:::
### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Button disabled type="primary">禁用状态</Button>
      <Button plain disabled type="info">禁用状态</Button>
      <Button plain disabled type="primary">禁用状态</Button>
    </>
  );
};
export default App;
```
:::

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Button shape="square" type="primary">方形按钮</Button>
      <Button type="info">圆形按钮</Button>
    </>
  );
};
export default App;
```
:::

### 加载状态

:::demo
```tsx
import  React ,{useState} from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [loading,setLoading] = useState(false)
  return (
    <>
      <Button loading type="info" />
      <Button loading type="warning">加载中...</Button>
      <Button
            loading={loading}
            type="success"
            onClick={() => {
              setTimeout(() => {
                setLoading(false)
              }, 1500);
                setLoading(!loading)
            }}
            style={{ margin: 8 }}
          >
            Click me!
      </Button>
    </>
  );
};
export default App;
```
:::
### 图标按钮

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Button shape="square" plain type="primary" icon="star-fill" />
      <Button shape="square" type="primary" icon="star">收藏</Button>
      <Button
        shape="round"
        type="primary"
        size="large"
        icon="star"
        iconSize={20}
      >
        收藏
      </Button>
    </>
  );
};
export default App;
```
:::
### 按钮尺寸

支持 `large`、`normal`、`small` 三种尺寸，默认为 `normal`。

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => { 
  return (
    <>
      <Button size="large" type="primary">大号按钮</Button>
      <Button type="primary">普通按钮</Button>
      <Button size="small" type="primary">小型按钮</Button>
    </>
  );
};
export default App;
```
:::

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => { 
  return (
    <>
      <Button block type="primary">块级元素</Button>
    </>
  );
};
export default App;
```
:::

### 自定义颜色
通过 color 属性可以自定义按钮的颜色。

:::demo
```tsx
import  React from "react";
import { Button } from '@nutui/nutui-react-taro';

const App = () => { 
  return (
    <>
      <Button color="#7232dd">单色按钮</Button>
      <Button color="#7232dd" plain>单色按钮</Button>
      <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变色按钮
      </Button>
    </>
  );
};
export default App;
```
:::
## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 类型，可选值为 `primary` `info` `warning` `danger` `success` | String |`default`         |
| size        | 尺寸，可选值为 `large` `small`  | String | `normal`      |
| shape         | 形状，可选值为 `square` | String | `round`             |
| color | 按钮颜色，支持传入 linear-gradient 渐变色     | String | - |
| plain          | 	是否为朴素按钮                       | Boolean | `false`             |
| disabled          | 	是否禁用按钮                       | Boolean | `false`              |
| block          | 是否为块级元素                        | Boolean | `false`               |
| icon          | 按钮图标，同Icon组件name属性                        | String | -     |
| iconSize`v1.4.7` | 按钮图标大小，同Icon组件的size属性 | string、number | 16 |
| loading          | 按钮loading状态                        | Boolean | `false`               |

### Events

| 事件名           | 说明           | 回调参数     |
|---------------|----------------|--------------|
| onClick`v1.3.8` | 点击按钮时触发 | event: MouseEvent |

### 支持小程序API能力
目前1.3.11版本以前不支持原生小程序API, 如果你是需要使用原生小程序button组件能力的用户，请尽快升级至1.3.11版本，关于原生小程序button组件的详细API请前往[查阅更多文档](https://taro-docs.jd.com/docs/components/forms/button)

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-button-border-radius | ` 25px` |
| --nutui-button-border-width | ` 1px` |
| --nutui-button-default-bg-color | ` $white` |
| --nutui-button-default-border-color | `  rgba(204, 204, 204, 1)` |
| --nutui-button-default-color | ` $gray1` |
| --nutui-button-plain-color`v1.4.8` | ` $gray2` |
| --nutui-button-default-padding | ` 0 18px` |
| --nutui-button-mini-padding | ` 0 12px` |
| --nutui-button-small-padding | ` 0 12px` |
| --nutui-button-small-height | ` 28px` |
| --nutui-button-mini-height | ` 24px` |
| --nutui-button-default-height | ` 38px` |
| --nutui-button-large-height | ` 48px` |
| --nutui-button-large-line-height | ` 46px` |
| --nutui-button-small-line-height | ` 26px` |
| --nutui-button-block-height | ` 48px` |
| --nutui-button-default-line-height | `  36px` |
| --nutui-button-block-line-height | ` 46px` |
| --nutui-button-default-font-size | `  $font-size-2` |
| --nutui-button-large-font-size | `  $button-default-font-size` |
| --nutui-button-small-font-size | `  $font-size-1` |
| --nutui-button-mini-font-size | `  $font-size-1` |
| --nutui-button-mini-line-height | ` 1.2` |
| --nutui-button-text-icon-width | ` 5px` |
| --nutui-button-text-icon--large-width | ` 10px` |
| --nutui-button-text-icon-small-width | ` 2px` |
| --nutui-button-text-icon-mini-width | ` 1px` |
| --nutui-button-disabled-opacity | ` 0.68` |
| --nutui-button-primary-color | ` $white` |
| --nutui-button-primary-border-color | `  $primary-color` |
| --nutui-button-info-color | ` $white` |
| --nutui-button-info-border-color | `  #496af2` |
| --nutui-button-success-color | ` $white` |
| --nutui-button-success-border-color | `  rgba(38, 191, 38, 1)` |
| --nutui-button-danger-color | ` $white` |
| --nutui-button-danger-border-color | `  rgba(250, 44, 25, 1)` |
| --nutui-button-danger-background-color | `  rgba(250, 44, 25, 1)` |
| --nutui-button-warning-color | ` $white` |
| --nutui-button-warning-border-color | `  rgba(255, 158, 13, 1)` |
| --nutui-button-plain-background-color | `  $white` |
| --nutui-button-small-round-border-radius | `  $button-border-radius` |
