# FixedNav 懸浮導航

## 介紹

懸浮收齊體驗交互，用於快捷導航

## 安裝

```tsx
import { FixedNav } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
    {
      id: 1,
      text: '首頁',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: '分類',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: '購物車',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: '我的',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
    }
  ];
  const [visible, setVisible] = useState(false);
  const change = (value: boolean) => {
    setVisible(value);
  };
  const selected = (item: any, event: MouseEvent) => {
    console.log(item, event);
  };
  return (
    <>
      <FixedNav
        list={list}
        activeText="基礎用法"
        overlay
        position={{ top: '70px' }}
        onChange={change}
        visible={visible}
        onSelect={selected}
       />
    </>
  )
};
export default App;
```

### 左側效果

```tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
    {
      id: 1,
      text: '首頁',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: '分類',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: '購物車',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: '我的',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
    }
  ];
  const [visible, setVisible] = useState(false);
  const change = (value: boolean) => {
    setVisible(value);
  };
  const selected = (item: any, event: MouseEvent) => {
    console.log(item, event);
  };
  return (
    <>
      <FixedNav
        list={list}
        type="left"
        position={{ top: '140px' }}
        visible={visible}
        activeText="左側收起"
        inactiveText="左側展開"
        onChange={change}
        onSelect={selected}
       />
    </>
  )
};
export default App;
```

### 取消背景遮罩

```tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
    {
      id: 1,
      text: '首頁',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: '分類',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: '購物車',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: '我的',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
    }
  ];
  const [visible, setVisible] = useState(false);
  const change = (value: boolean) => {
    setVisible(value);
  };
  const selected = (item: any, event: MouseEvent) => {
    console.log(item, event);
  };
  return (
    <>
      <FixedNav
        list={list}
        position={{ top: '210px' }}
        overlay={false}
        visible={visible}
        onChange={change}
        onSelect={selected}
       />
    </>
  )
};
export default App;
```

### 自定義使用

```tsx
import React, { useState } from "react";
import { Icon, FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
    {
      id: 1,
      text: '首頁',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: '分類',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: '購物車',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: '我的',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
    }
  ];
  const [visible, setVisible] = useState(false);
  const change = (value: boolean) => {
    setVisible(value);
  };
  const selected = (item: any, event: MouseEvent) => {
    console.log(item, event);
  };
  return (
    <>
      <FixedNav
        position={{ top: '280px' }}
        type="left"
        visible={visible}
        onChange={change}
        onSelect={selected}
        content={
          <>
            <Icon name="retweet" color="#fff"> </Icon>
            <span className="text">{ visible ? '自定義開' : '自定義關' }</span>
          </>
        }
      >
        <ul className="nut-fixednav__list">
          <li className="nut-fixednav__list-item">1</li>
          <li className="nut-fixednav__list-item">2</li>
          <li className="nut-fixednav__list-item">3</li>
          <li className="nut-fixednav__list-item">4</li>
          <li className="nut-fixednav__list-item">5</li>
        </ul>
      </FixedNav>
    </>
  )
};
export default App;
```

### 支持拖拽

```tsx
import React, { useState } from "react";
import { Drag, FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
    {
      id: 1,
      text: '首頁',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: '分類',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: '購物車',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: '我的',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
    }
  ];
  const [visible, setVisible] = useState(false);
  const change = (value: boolean) => {
    setVisible(value);
  };
  const selected = (item: any, event: MouseEvent) => {
    console.log(item, event);
  };
  return (
    <>
      <Drag direction="y" style={{ right: '0px', bottom: '240px' }}>
        <FixedNav
          list={list}
          inactiveText="支持拖拽"
          visible={visible} 
          onChange={change}
          onSelect={selected} />
      </Drag>
    </>
  )
};
export default App;
```

## FixedNav

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否打開 | `boolean` | `false` |
| list | 懸浮列錶內容數據 | `Array` | `[]` |
| activeText | 收起列錶按鈕文案 | `string` | `收起導航` |
| inactiveText | 展開列錶按鈕文案 | `string` | `快速導航` |
| type | 導航方嚮 | `left` \| `right` | `right` |
| overlay | 展開時是否顯示遮罩 | `boolean` | `true` |
| position | fixed 垂直位置 | `object` | `{top: 'auto', bottom: 'auto'}` |
| content | 自定義按鈕 | `ReactNode` | `-` |
| onChange | 展開收起按鈕回調 | `value: boolean` | `-` |
| onSelect | 選擇之後觸發 | `item, event: MouseEvent` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-fixednav-bg-color | 背景顏色 | `$white` |
| \--nutui-fixednav-color | 字體顏色 | `$color-title` |
| \--nutui-fixednav-index | zIndex | `201` |
| \--nutui-fixednav-item-active-color | 激活顏色 | `$color-primary` |