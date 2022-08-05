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
    const text = '华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！'
    return (
      <>
        <NoticeBar text={text} background="rgba(251, 248, 220, 1)" color="#D9500B" />
      </>
    )
}
export default App
```
:::


### 禁用滚动
文字内容多于一行时，可通过scrollable参数控制是否开启滚动

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    return (
      <>
        <NoticeBar
            text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
            scrollable={false}
            background="rgba(251, 248, 220, 1)"
            color="#D9500B"
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
        <NoticeBar
            closeMode
            click={hello}
            background="rgba(251, 248, 220, 1)"
            color="#D9500B"
        >
            华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI
            WATCH等好礼，更多产品信息请持续关注！
        </NoticeBar>
      </>
    )
}
export default App
```
:::

### 通告栏模式--链接模式

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    return (
      <>
        <NoticeBar
            leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
            background="rgba(251, 248, 220, 1)"
            color="#D9500B"
        >
            <a href="https://www.jd.com">京东商城</a>
        </NoticeBar>
      </>
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
    const horseLamp1 = ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']

    const go = (item: any) => {
        console.log(item)
    }
    return (
      <>
        <NoticeBar
            direction="vertical"
            list={horseLamp1}
            speed={10}
            standTime={1000}
            click={(item) => {
                go(item)
            }}
            closeMode
            background="rgba(251, 248, 220, 1)"
            color="#D9500B"
        />
      </>
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
    const horseLamp2 = ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']
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
    const  horseLamp3 = ['惊喜红包免费领1', '爆款准点秒2', '买超值优惠3', '赢百万京豆4']

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
    const horseLamp4 = ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']
    
    return (
      <>
        <NoticeBar
            className="custom"
            direction="vertical"
            list={horseLamp4}
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
| color      | 导航栏的文字颜色                                           | String        | 空     |
| background | 导航栏的背景颜色                                           | String        | 空     |
| delay      | 延时多少秒                                                 | String/Number | 1      |
| scrollable | 是否可以滚动                                               | Boolean       | true   |
| speed      | 滚动速率 (px/s)                                            | Number        | 50     |

### Prop（direction=vertical）

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 纵向滚动数据列表               | Array | []               |
| speed        | 滚动的速度                         | Number | 50               |
| standTime         | 停留时间(毫秒) | Number | 1000                |
| complexAm | 稍复杂的动画，耗能会高     | Boolean | false |
| height          | 每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值                 | Number | 40              |
| closeMode  | 是否启用右侧关闭图标，可以通过slot[name=rightIcon]自定义图标                                   | Boolean       | false  |

### Event

| 字段  | 说明             | 回调参数     |
| ----- | ---------------- | ------------ |
| click | 外层点击事件回调 | event: Event |
| close | 关闭通知栏时触发 | event: Event |
