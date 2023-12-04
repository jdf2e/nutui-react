# NoticeBar 公告欄

## 介紹

用於循環播放展示一組消息通知。

## 安裝

```tsx
import { NoticeBar } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。'
    return (
      <>
        <NoticeBar content={text} />
      </>
    )
}
export default App
```

:::

### 自定義主題

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。'
    return (
      <ConfigProvider
          theme={{
            nutuiNoticebarBackground: '#EDF4FF',
            nutuiNoticebarColor: '#3768FA',
          }}
        >
          <NoticeBar content={translated.text} />
        </ConfigProvider>
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
            content="NutUI 是京東風格的移動端組件庫"
            scrollable
        />

        <NoticeBar 
            content="NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。" scrollable={false} 
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
import { Failure } from '@nutui/icons-react';

const App = () => {
    const hello = () => {
        console.log('hello world')
    }
    return (
      <>
       <NoticeBar closeable onClick={hello}>
          NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。
        </NoticeBar>
        <br />
        <NoticeBar closeable rightIcon={<Failure />} onClick={hello}>
          NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。
        </NoticeBar>
        <br />
        <NoticeBar leftIcon={<Image src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png" />}>
          <a href="https://www.jd.com">京東商城</a>
        </NoticeBar>
      </>
    )
}
export default App
```

:::

### 多行展示

文字較長時，可以通過設置 wrap 屬性來開啟多行展示。默認為不滾動，可以通過設置 scrollable 控制為滾動。

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const text = 'NutUI-React 是京東風格的 React 移動端組件庫，開發和服務於移動 Web 界面的企業級產品。'
    
    return (
      <NoticeBar content={text} wrap />
    )
}
export default App
```

:::

### 縱嚮滾動

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar } from '@nutui/nutui-react';

const App = () => {
    const horseLamp1 = [
        'NoticeBar 公告欄',
        'Cascader 級聯選擇',
        'DatePicker 日期選擇器',
        'CheckBox 復選按鈕',
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

### 自定義左側圖標

:::demo

```tsx
import  React, {useState} from "react";
import { NoticeBar, Image } from '@nutui/nutui-react';

const App = () => {
     const horseLamp2 = ['NoticeBar 公告欄', 'Cascader 級聯選擇', 'DatePicker 日期選擇器', 'CheckBox 復選按鈕'];
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
            onItemClick={(e, val) => {
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
    const  horseLamp3 = ['NoticeBar 公告欄', 'Cascader 級聯選擇', 'DatePicker 日期選擇器', 'CheckBox 復選按鈕']

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

### 縱嚮自定義右側圖標

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
        'CheckBox 復選按鈕',
      ]
    return (
      <>
        <NoticeBar
            className="custom"
            direction="vertical"
            list={horseLamp1}
            speed={10}
            duration={1000}
            onItemClick={(e, v) => {
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| direction | 滾動的方嚮，可選 horizontal、vertical | `string` | `horizontal` |
| content | 提示的信息 | `string` | `-` |
| closeable | 是否啟用關閉模式 | `boolean` | `false` |
| leftIcon | 左邊的 icon，closeable 模式下默認為空 | `ReactNode` | `-` |
| rightIcon | 右邊的 icon，在 closeable 模式下默認為 `<Close />` | `ReactNode` | `-` |
| delay | 延時多少秒 | `string` \| `number` | `1` |
| scrollable | 是否可以滾動 | `boolean` | `true` |
| speed | 滾動速率 (px/s) | `number` | `50` |
| wrap | 是否開啟文本換行 | `boolean` | `false` |
| onClick | 外層點擊事件回調 | `(event: any) => void` | `-` |
| onClose | 關閉通知欄時觸發 | `(event: any) => void` | `-` |
| onItemClick | 垂直滾動多條數據時，點擊當前展示的信息時觸發 | `(event: any, value: any) => void` | `-` |

### Props（direction=vertical）

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| list | 縱嚮滾動數據列錶 | `Array` | `[]` |
| speed | 滾動的速度 | `number` | `50` |
| duration | 停留時間(毫秒) | `number` | `1000` |
| height | 每一個滾動列的高度(px) | `number` | `40` |
| closeable | 是否啟用右側關閉圖標，可以通過 rightIcon 自定義圖標 | `boolean` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-noticebar-height | 高度 | `36px` |
| \--nutui-noticebar-background | 背景色 | `rgba(251, 248, 220, 1)` |
| \--nutui-noticebar-color | 文字色 | `#d9500b` |
| \--nutui-noticebar-font-size | 字號 | `$font-size-small` |
| \--nutui-noticebar-line-height | 行高 | `24px` |
| \--nutui-noticebar-box-padding | padding值 | `0 16px` |
| \--nutui-noticebar-border-radius | 圆角 | `0` |
| \--nutui-noticebar-wrap-padding | 多行展示的padding值 | `8px 16px` |
| \--nutui-noticebar-icon-gap | icon、text間距 | `4px` |
| \--nutui-noticebar-left-icon-width | 左側icon的寬度和高度的設定 | `16px` |
| \--nutui-noticebar-right-icon-width | 右側icon的寬度和高度的設定 | `16px` |
