#  NoticeBar 公告欄

### 介紹

用於循環播放展示一組消息通知。

### 安裝

```javascript
// react
import { NoticeBar } from '@nutui/nutui-react';
```

## 代碼演示

### 基本用法

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。'
    return (
      <>
        <NoticeBar text={text} />
      </>
    )
}
export default App
```
:::

### 滾動播放
通知欄的內容長度溢出時會自動開啟滾動播放，可通過 scrollable 屬性可以控制該行為

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    return (
      <>
        <NoticeBar
            text="NutUI 是京東風格的移動端組件庫"
            scrollable
        />

        <NoticeBar 
            text="NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。" scrollable={false} 
        />
      </>
    )
}
export default App
```
:::


### 通告欄模式--關閉模式

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
       <NoticeBar closeMode onClick={hello}>
          NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。
        </NoticeBar>
        <br />
        <NoticeBar closeMode rightIcon={<CircleClose />} onClick={hello}>
          NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。
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

文字較長時，可以通過設置 wrapable 屬性來開啟多行展示。默認為不滾動，可以通過設置 scrollable 控制為滾動。

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。'
    
    return (
      <NoticeBar text={text} wrapable />
    )
}
export default App
```
:::

### 縱向滾動

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const horseLamp1 = [
        'NoticeBar 公告欄',
        'Cascader 級聯選擇',
        'DatePicker 日期選擇器',
        'CheckBox 複選按鈕',
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
            onClick={(e) => {
              go(e.target.innerHtml)
            }}
            closeMode
          />
        </div>
    )
}
export default App
```
:::



### 自定義左側圖標

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar, Image } from '@nutui/nutui-react';

const App = () => {
     const horseLamp2 = ['NoticeBar 公告欄', 'Cascader 級聯選擇', 'DatePicker 日期選擇器', 'CheckBox 複選按鈕'];
    return (
      <>
        <NoticeBar
            direction="vertical"
            list={horseLamp2}
            speed={10}
            standTime={2000}
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


### 自定義滾動內容

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const  horseLamp3 = ['NoticeBar 公告欄', 'Cascader 級聯選擇', 'DatePicker 日期選擇器', 'CheckBox 複選按鈕']

    return (
      <>
        <NoticeBar direction="vertical" height={50} speed={10} standTime={1000} 
        closeMode
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
        'NoticeBar 公告欄',
        'Cascader 級聯選擇',
        'DatePicker 日期選擇器',
        'CheckBox 複選按鈕',
      ]
    return (
      <>
        <NoticeBar
            className="custom"
            direction="vertical"
            list={horseLamp1}
            speed={10}
            standTime={1000}
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


## API

### Prop

| 字段       | 说明                                                       | 类型          | 默认值 |
| ---------- | ---------------------------------------------------------- | ------------- | ------ |
| direction       | 滚动的方向，可选 across、vertical                         | string        | `across`     |
| text       | 提示的信息                                                 | string        | -     |
| closeMode  | 是否启用关闭模式                                           | boolean       | `false`  |
| leftIcon   | 左边的 icon，closeMode 模式下默认为空 | ReactNode        | -     |
| rightIcon   | closeMode 模式下，默认为 ‘close’ | ReactNode        | -     |
| color      | 导航栏的文字颜色                                           | string        | -     |
| background | 导航栏的背景颜色                                           | string        | -     |
| delay      | 延时多少秒                                                 | string \| number | `1`      |
| scrollable | 是否可以滚动                                               | boolean       | `true`   |
| speed      | 滚动速率 (px/s)                                            | number        | `50`     |
| wrapable   | 是否开启文本换行                                           | boolean       | `false`    |

### Prop（direction=vertical）

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 纵向滚动数据列表               | Array | `[]`               |
| speed        | 滚动的速度                         | number | `50`               |
| standTime         | 停留时间(毫秒) | number | `1000`                |
| complexAm `即将废弃`| 稍复杂的动画，耗能会高     | boolean | `false` |
| height          | 每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值                 | number | `40`              |
| closeMode  | 是否启用右侧关闭图标，可以通过slot[name=rightIcon]自定义图标                                   | boolean       | `false`  |

### Event

| 字段  | 说明             | 回调参数     |
| ----- | ---------------- | ------------ |
| onClick  | 外层点击事件回调 | `event: Event` |
| onClose  | 关闭通知栏时触发 | `event: Event` |
| onClickItem  | 垂直滚动多条数据时，点击当前展示的信息时触发 | `event: Event, listItem` |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-noticebar-background | `rgba(251, 248, 220, 1)` |
| --nutui-noticebar-color | `#d9500b` |
| --nutui-noticebar-font-size | `14px` |
| --nutui-noticebar-height | `40px` |
| --nutui-noticebar-line-height | `24px` |
| --nutui-noticebar-left-icon-width | `16px` |
| --nutui-noticebar-right-icon-width | `16px` |
| --nutui-noticebar-box-padding | `0 16px` |
| --nutui-noticebar-wrapable-padding | `16px` |
| --nutui-noticebar-lefticon-margin | `0px 10px` |
| --nutui-noticebar-righticon-margin | `0px 10px` |
