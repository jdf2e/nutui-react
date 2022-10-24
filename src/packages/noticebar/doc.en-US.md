#  NoticeBar 

### Intro

Used to display a group of message notifications in a continuons loop.

### Install

```javascript
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
        <NoticeBar text={text} />
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
            text="Nutui is a mobile terminal component library."
            scrollable
        />

        <NoticeBar 
            text="Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience." scrollable={false} 
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
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const hello = () => {
        console.log('hello world')
    }
    return (
      <>
       <NoticeBar closeMode click={hello}>
          Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.
        </NoticeBar>
        <br />
        <NoticeBar closeMode rightIcon="circle-close" click={hello}>
          Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.
        </NoticeBar>
        <br />
        <NoticeBar leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png">
          <a href="https://www.jd.com">Jingdong</a>
        </NoticeBar>
      </>
    )
}
export default App
```
:::


### Wrapable

When text is long, you can enable multi-line display by setting the wrapable property.

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.'
    
    return (
      <NoticeBar text={text} wrapable />
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



### Vertical Scroll Complex Animation

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
     const horseLamp2 = ref(['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']);
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


### Vertical Scroll Custom Style

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const  horseLamp3 = ['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']

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



### Vertical Scroll Custom Right Icon

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar,Icon } from '@nutui/nutui-react';

const App = () => {
     const horseLamp1 = ['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']
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

| Attribute     | Description                                               | Type          | Default |
| ---------- | ---------------------------------------------------------- | ------------- | ------ |
| direction  | Rolling direction                                  | String        | across  |
| text       | Notice text content                                | String        |  -      |
| closeMode  | Whether to enable the off mode                     | Boolean       | false   |
| leftIcon   | Left Icon                                          | String        | -       |
| rightIcon  | Right Icon                                         | String        | -       |
| color      | Text Color                                         | String        | -       |
| background | Background                                         | String        | -       |
| delay      | Delay time                                         | String/Number | 1       |
| scrollable | Whether to scroll content                          | Boolean       | true    |
| speed      | Scrolling speed (px/s)                             | Number         | 50      |
| wrapable`v1.3.0` | Whether to enable text wrap                        | Boolean       | false    |

### Prop（direction=vertical）

| Attribute    | Description                             | Type     | Default          |
|--------------|-----------------------------------------|----------|------------------|
| list         | List                                    | Array    | []               |
| speed        | Scrolling speed                         | Number   | 50               |
| standTime    | Show time(millisecond)                  | Number   | 1000             |
| complexAm    | Complex animation                       | Boolean  | false            |
| height       | height                                  | Number   | 40               |
| closeMode    | Whether to enable the off mode          | Boolean  | false            |

### Slots

| Attribute         | Description                      |
|-------------------|----------------------------------|
| default           | Notice text content              |
| rightIcon        | Custom right icon                |
| leftIcon         | Custom left icon                 |
### Event

| Attribute  | Description                             | Arguments     |
| ---------- | --------------------------------------- | ------------ |
| onClick `v1.3.8`     | Emitted when NoticeBar is clicked       | event: Event |
| onClose `v1.3.8`     | Emitted when NoticeBar is closed        | event: Event |

