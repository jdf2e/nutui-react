#  NoticeBar 

## Intro

Used to display a group of message notifications in a continuons loop.

## Install

```javascript
// react
import { NoticeBar } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.'
    return (
      <>
        <NoticeBar content={content} />
      </>
    )
}
export default App
```
:::

### Scrollable
Scrolling is automatically enabled when the content length of the notification bar overflows, which can be controlled through the scrollable property.

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    return (
      <>
        <NoticeBar
            content="Nutui is a mobile terminal component library."
            scrollable
        />

        <NoticeBar 
            content="Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience." scrollable={false} 
        />
      </>
    )
}
export default App
```
:::


### Mode

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
       <NoticeBar closeable click={hello}>
          Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.
        </NoticeBar>
        <br />
        <NoticeBar closeable rightIcon={<CircleClose />} click={hello}>
          Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.
        </NoticeBar>
        <br />
        <NoticeBar leftIcon={<Image src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png" />}>
          <a href="https://www.jd.com">Jingdong</a>
        </NoticeBar>
      </>
    )
}
export default App
```
:::


### wrap

When text is long, you can enable multi-line display by setting the wrap property.

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.'
    
    return (
      <NoticeBar content={text} wrap />
    )
}
export default App
```
:::

### Vertical Scroll

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const horseLamp1 = ['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']
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



### Vertical Scroll Custom Left Icon

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar, Image } from '@nutui/nutui-react';

const App = () => {
     const horseLamp2 = ['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox'];
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


### Vertical Scroll Custom Style

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const  horseLamp3 = ['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']

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

### Vertical Scroll Custom Right Icon

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';
import { Fabulous } from '@nutui/icons-react';

const App = () => {
     const horseLamp1 = ['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']
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

| Property     | Description | Type          | Default |
| ---------- | --------------------------- | ------------- | ------ |
| direction  | Rolling direction | `string`        | `horizontal`  |
| content       | Notice text content | `string`        |  -      |
| closeable  | Whether to enable the off mode | `boolean`       | `false`   |
| leftIcon   | Left Icon | `ReactNode`        | -       |
| rightIcon  | Right Icon | `ReactNode`        | -       |
| delay      | Delay time | `string \| number` | `1`       |
| scrollable | Whether to scroll content | `boolean`       | `true`    |
| speed      | Scrolling speed (px/s) | `number`         | `50`      |
| wrap | Whether to enable text wrap | `boolean`       | `false`    |
| onClick      | Emitted when NoticeBar is clicked       | `(event: any) => void` |
| onClose      | Emitted when NoticeBar is closed        | `(event: any) => void` |
| onClickItem  | Emitted when the currently displayed information is clicked when scrolling multiple pieces of data vertically | `(event: any, value: any) => void` |

### Props（direction=vertical）

| Property    | Description | Type     | Default          |
|--------------|-----------------------|----------|------------------|
| list         | List | `Array`    | `[]`               |
| speed        | Scrolling speed | `number`   | `50`               |
| duration    | Show time(millisecond) | `number`   | `1000` |
| height       | height | `number`   | `40` |
| closeable    | Whether to enable the off mode | `boolean`  | `false`            |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| --nutui-noticebar-background |noticebar background | `rgba(251, 248, 220, 1)` |
| --nutui-noticebar-color | noticebar  color |`#d9500b` |
| --nutui-noticebar-font-size |noticebar font size | `14px` |
| --nutui-noticebar-height | noticebar height | `40px` |
| --nutui-noticebar-line-height | noticebar line height | `24px` |
| --nutui-noticebar-left-icon-width | noticebar left icon width | `16px` |
| --nutui-noticebar-right-icon-width | noticebar right icon width | `16px` |
| --nutui-noticebar-box-padding |noticebar box padding  | `0 16px` |
| --nutui-noticebar-wrap-padding | noticebar wrap padding | `16px` |
| --nutui-noticebar-lefticon-margin | noticebar lefticon margin | `0px 10px` |
| --nutui-noticebar-righticon-margin | noticebar righticon margin | `0px 10px` |
