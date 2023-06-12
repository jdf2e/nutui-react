#  NoticeBar 公告栏

## 介绍

用于循环播放展示一组消息通知。

## 安装

```javascript
// react
import { NoticeBar } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
    return (
      <>
        <NoticeBar content={text} />
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
            content="NutUI 是京东风格的移动端组件库"
            scrollable
        />

        <NoticeBar 
            content="NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。" scrollable={false} 
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
import { NoticeBar, Image } from '@nutui/nutui-react';
import { CircleClose } from '@nutui/icons-react';

const App = () => {
    const hello = () => {
        console.log('hello world')
    }
    return (
      <>
       <NoticeBar closeable onClick={hello}>
          NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。
        </NoticeBar>
        <br />
        <NoticeBar closeable rightIcon={<CircleClose />} onClick={hello}>
          NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。
        </NoticeBar>
        <br />
        <NoticeBar leftIcon={<Image src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png" />}>
          <a href="https://www.jd.com">京东商城</a>
        </NoticeBar>
      </>
    )
}
export default App
```
:::

### 多行展示

文字较长时，可以通过设置 wrap 属性来开启多行展示。默认为不滚动，可以通过设置 scrollable 控制为滚动。

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
    
    return (
      <NoticeBar content={text} wrap />
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
            duration={1000}
            onClick={(e) => {
              go(e.target.innerHtml)
            }}
            closeable
          />
        </div>
    )
}
export default App
```
:::

### 自定义左侧图标

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar, Image } from '@nutui/nutui-react';

const App = () => {
     const horseLamp2 = ['NoticeBar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮'];
    return (
      <>
        <NoticeBar
            direction="vertical"
            list={horseLamp2}
            speed={10}
            duration={2000}
            leftIcon={<Image src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png" />}
            onClick={(e) => {
              console.log('listClick', e.target)
            }}
            onClickItem={(e, val) => {
              console.log('dom', e.target)
              console.log('value', val)
            }}
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
        <NoticeBar direction="vertical" height={50} speed={10} duration={1000} 
        closeable
        onClose={() => {console.log('close')}}>
        {horseLamp3.map((item, index) => {
            return (
            <div
                className="custom-item"
                style={{ height: '50px', lineHeight: '50px' }}
                key={index}
                onClick={() => {
                    console.log('custom-inner', item)
                }}
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
import { NoticeBar } from '@nutui/nutui-react';
import { Fabulous } from '@nutui/icons-react';

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
            duration={1000}
            onClickItem={(e, v) => {
              console.log('onclick-custom', v)
            }}
            rightIcon={<Fabulous width={16} height={16} color="#f0250f" />}
        />
        </>
    )
};
export default App
```
:::


## NoticeBar

### Props

| 属性       | 说明 | 类型          | 默认值 |
| ---------- | --------------------------- | ------------- | ------ |
| direction| 滚动的方向，可选 horizontal、vertical| `string` | `horizontal`|
| content | 提示的信息| `string`        | `-`     |
| closeable | 是否启用关闭模式| `boolean`       | `false`  |
| leftIcon | 左边的 icon，closeable 模式下默认为空 | `ReactNode` | `-`     |
| rightIcon | 右边的 icon，在 closeable 模式下默认为 `<Close />` | `ReactNode` | `-` |
| delay      | 延时多少秒| `string \| number` | `1`      |
| scrollable | 是否可以滚动| `boolean`       | `true`   |
| speed      | 滚动速率 (px/s)| `number`        | `50`     |
| wrap   | 是否开启文本换行 | `boolean`       | `false`    |
| onClick  | 外层点击事件回调 | `(event: any) => void` |
| onClose  | 关闭通知栏时触发 | `(event: any) => void` |
| onClickItem  | 垂直滚动多条数据时，点击当前展示的信息时触发 | `(event: any, value: any) => void` |

### Props（direction=vertical）

| 属性         | 说明 | 类型   | 默认值           |
|--------------|------------|--------|------------------|
| list         | 纵向滚动数据列表 | `Array` | `[]` |
| speed        | 滚动的速度 | `number` | `50` |
| duration | 停留时间(毫秒) | `number` | `1000` |
| height | 每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值 | `number` | `40` |
| closeable  | 是否启用右侧关闭图标，可以通过slot[name=rightIcon]自定义图标 | `boolean`       | `false`  |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| --nutui-noticebar-background | 背景色 | `rgba(251, 248, 220, 1)` |
| --nutui-noticebar-color | 文字色 | `#d9500b` |
| --nutui-noticebar-font-size | 字号 |`14px` |
| --nutui-noticebar-height | 高度 | `40px` |
| --nutui-noticebar-line-height | 行高 | `24px` |
| --nutui-noticebar-left-icon-width | 左侧icon的宽度和高度的设定 | `16px` |
| --nutui-noticebar-right-icon-width | 右侧icon的宽度和高度的设定 | `16px` |
| --nutui-noticebar-box-padding | padding值 | `0 16px` |
| --nutui-noticebar-wrap-padding | 多行展示的padding值  | `16px` |
| --nutui-noticebar-lefticon-margin | 左侧icon的margin值 | `0px 10px` |
| --nutui-noticebar-righticon-margin | 右侧icon的margin值 | `0px 10px` |

