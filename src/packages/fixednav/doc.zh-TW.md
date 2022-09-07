# FixedNav 懸浮導航

### 介紹

懸浮收齊體驗交互，用於快捷導航

### 安裝
    
``` javascript
import { FixedNav } from '@nutui/nutui-react';
```


### 基礎用法

:::demo
``` tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
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
        navList={navList}
        activeText="基礎用法"
        overlay
        position={{ top: '70px' }}
        onChange={change}
        visible={visible}
        onSelected={selected}
       />
    </>
  )
};
export default App;
```

### 左側效果

``` tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
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
        navList={navList}
        type="left"
        position={{ top: '140px' }}
        visible={visible}
        activeText="左側收起"
        unActiveText="左側展開"
        onChange={change}
        onSelected={selected}
       />
    </>
  )
};
export default App;
```



### 取消背景遮罩

``` tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
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
        navList={navList}
        position={{ top: '210px' }}
        overlay={false}
        visible={visible}
        onChange={change}
        onSelected={selected}
       />
    </>
  )
};
export default App;
```


### 自定義使用

``` tsx
import React, { useState } from "react";
import { Icon, FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
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
        onSelected={selected}
        slotList={
          <ul className="nut-fixednav__list" slot="list">
            <li className="nut-fixednav__list-item">1</li>
            <li className="nut-fixednav__list-item">2</li>
            <li className="nut-fixednav__list-item">3</li>
            <li className="nut-fixednav__list-item">4</li>
            <li className="nut-fixednav__list-item">5</li>
          </ul>
        }
        slotBtn={
          <>
            <Icon name="retweet" color="#fff"> </Icon>
            <span className="text">{ visible ? '自定義開' : '自定義關' }</span>
          </>
        }
       />
    </>
  )
};
export default App;
```


### 支持拖拽

``` tsx
import React, { useState } from "react";
import { Drag, FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
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
          navList={navList}
          unActiveText="支持拖拽"
          visible={visible} 
          onChange={change}
          onSelected={selected} />
      </Drag>
    </>
  )
};
export default App;
```




### Prop
| 字段           | 說明                       | 類型    | 默認值                       |
|:---------------|:---------------------------|:--------|:-----------------------------|
| fixednavClass        | 自定義類名                   | String | fixednav                        |
| visible        | 是否打開                   | Boolean | false                        |
| navList       | 懸浮列表內容數據           | Array   | []                           |
| activeText    | 收起列表按鈕文案           | String  | 收起導航                     |
| unActiveText | 展開列表按鈕文案           | String  | 快速導航                     |
| type           | 導航方向,可選值 left right | String  | right                        |
| overlay        | 展開時是否顯示遮罩         | Boolean | true                         |
| position       | fixed 垂直位置             | Object  | {top: 'auto',bottom: 'auto'} |
| slotList       | 自定義展開列表內容             | HTMLElement  | - |
| slotBtn       | 自定義按鈕            | HTMLElement  | - |


### Event

| 字段     | 說明         | 回調參數        |
|:----------|:--------------|:------------|
| onChange | 展開收起按鈕回調 | value:boolean |
| onSelected | 選擇之後觸發 | item,event:MouseEvent |