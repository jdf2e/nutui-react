#  NoticeBar 公告栏

### 介绍

用于循环播放展示一组消息通知。

### 安装

```javascript
import { NoticeBar } from '@nutui/nutui-react';
```

## 代码演示

### 基本用法

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
    return (
      <>
        <NoticeBar text={text} />
      </>
    )
}
export default App
```
:::

### 滚动播放
通知栏的内容长度溢出时会自动开启滚动播放，可通过 scrollable 属性可以控制该行为

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    return (
      <>
        <NoticeBar
            text="NutUI 是京东风格的移动端组件库"
            scrollable
        />

        <NoticeBar 
            text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。" scrollable={false} 
        />
      </>
    )
}
export default App
```
:::


### 通告栏模式--关闭模式

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const hello = () => {
        console.log('hello world')
    }
    return (
      <>
       <NoticeBar closeMode onClick={hello}>
          NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
        </NoticeBar>
        <br />
        <NoticeBar closeMode rightIcon="circle-close" onClick={hello}>
          NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
        </NoticeBar>
        <br />
        <NoticeBar leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png">
          <a href="https://www.jd.com">京东商城</a>
        </NoticeBar>
      </>
    )
}
export default App
```
:::



### 多行展示

文字较长时，可以通过设置 wrapable 属性来开启多行展示。默认为不滚动，可以通过设置 scrollable 控制为滚动。

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
    
    return (
      <NoticeBar text={text} wrapable />
    )
}
export default App
```
:::

### 纵向滚动

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const horseLamp1 = [
        'NoticeBar 公告栏',
        'Cascader 级联选择',
        'DatePicker 日期选择器',
        'CheckBox 复选按钮',
      ]
    const go = (item: any) => {
        console.log(item)
    }
    return (
      <div className="interstroll-list">
          <NoticeBar
            direction="vertical"
            list={horseLamp1}
            speed={10}
            standTime={1000}
            onClick={(item: any) => {
              go(item)
            }}
            closeMode
          />
        </div>
    )
}
export default App
```
:::



### 复杂滚动动画

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
     const horseLamp2 = ref(['NoticeBar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);
    return (
      <>
        <NoticeBar
            direction="vertical"
            list={horseLamp2}
            speed={10}
            standTime={2000}
            complexAm
        />
      </>
    )
}
export default App
```
:::


### 自定义滚动内容

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const  horseLamp3 = ['NoticeBar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']

    return (
      <>
        <NoticeBar direction="vertical" height={50} speed={10} standTime={1000}>
        {horseLamp3.map((item, index) => {
            return (
            <div
                className="custom-item"
                style={{ height: '50px', lineHeight: '50px' }}
                key={index}
            >
                {item}
            </div>
            )
        })}
        </NoticeBar>
        </>
    )
};
export default App
```
:::



### 纵向自定义右侧图标

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar,Icon } from '@nutui/nutui-react';

const App = () => {
     const horseLamp1 = [
        'NoticeBar 公告栏',
        'Cascader 级联选择',
        'DatePicker 日期选择器',
        'CheckBox 复选按钮',
      ]
    return (
      <>
        <NoticeBar
            className="custom"
            direction="vertical"
            list={horseLamp1}
            speed={10}
            standTime={1000}
            rightIcon={<Icon name="fabulous" size="16" color="#f0250f" />}
        />
        </>
    )
};
export default App
```
:::


## API

### Prop

| 字段       | 说明                                                       | 类型          | 默认值 |
| ---------- | ---------------------------------------------------------- | ------------- | ------ |
| direction       | 滚动的方向，可选 across、vertical                         | String        | across     |
| text       | 提示的信息                                                 | String        | 空     |
| closeMode  | 是否启用关闭模式                                           | Boolean       | false  |
| leftIcon   | close为没有左边icon,其他为自定义的图片链接，没有为默认图片 | String        | 空     |
| rightIcon   | closeMode 模式下，默认为 ‘close’,其他模式下，没有为默认图片 | String        | 空     |
| color      | 导航栏的文字颜色                                           | String        | 空     |
| background | 导航栏的背景颜色                                           | String        | 空     |
| delay      | 延时多少秒                                                 | String/Number | 1      |
| scrollable | 是否可以滚动                                               | Boolean       | true   |
| speed      | 滚动速率 (px/s)                                            | Number        | 50     |
| wrapable `v1.3.0`  | 是否开启文本换行                                           | Boolean       | false    |

### Prop（direction=vertical）

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 纵向滚动数据列表               | Array | []               |
| speed        | 滚动的速度                         | Number | 50               |
| standTime         | 停留时间(毫秒) | Number | 1000                |
| complexAm | 稍复杂的动画，耗能会高     | Boolean | false |
| height          | 每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值                 | Number | 40              |
| closeMode  | 是否启用右侧关闭图标，可以通过slot[name=rightIcon]自定义图标                                   | Boolean       | false  |

### Slots

| 参数         | 说明                             | 
|--------------|----------------------------------|
| default         | 通知文本的内容               | 
| rightIcon        | 自定义右侧图标    | 
| leftIcon        | 自定义左侧图标    | 
### Event

| 字段  | 说明             | 回调参数     |
| ----- | ---------------- | ------------ |
| onClick `v1.3.8` | 外层点击事件回调 | event: Event |
| onClose `v1.3.8` | 关闭通知栏时触发 | event: Event |
