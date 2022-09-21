# FixedNav hover navigation

### introduce

Hovering and collecting experience interaction for quick navigation

### Install
    
``` javascript
import { FixedNav } from '@nutui/nutui-react';
```


### Basic usage

:::demo
``` tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
    {
      id: 1,
      text: 'Home',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: 'Classification',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: 'Shopping Cart',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: 'my',
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
        activeText="basic usage"
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

### Left side effect

``` tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
    {
      id: 1,
      text: 'Home',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: 'Classification',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: 'Shopping Cart',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: 'my',
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
        activeText="Left collapsed"
        unActiveText="Expand left"
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
      text: '首页',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: '分类',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: '购物车',
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

### Custom use

```` tsx
import React, { useState } from "react";
import { Icon, FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
    {
      id: 1,
      text: 'Home',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: 'Classification',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: 'Shopping Cart',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: 'my',
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
            <span className="text">{ visible ? 'Custom On' : 'Custom Off' }</span>
          </>
        }
       />
    </>
  )
};
export default App;
````


### Support drag and drop

```` tsx
import React, { useState } from "react";
import { Drag, FixedNav } from '@nutui/nutui-react';

const App = () => {
  const navList = [
    {
      id: 1,
      text: 'Home',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
    },
    {
      id: 2,
      text: 'Classification',
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
    },
    {
      id: 3,
      text: 'Shopping Cart',
      num: 2,
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
    },
    {
      id: 4,
      text: 'my',
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
          unActiveText="support drag and drop"
          visible={visible}
          onChange={change}
          onSelected={selected} />
      </Drag>
    </>
  )
};
export default App;
````
### Prop
| Field | Description | Type | Default Value |
|:---------------|:----------------------------|:--------|:----------------------------|
| fixednavClass | custom class name | String | fixednav |
| visible | whether to open | Boolean | false |
| navList | Floating list content data | Array | [] |
| activeText | Collapse list button text | String | Collapse navigation |
| unActiveText | Expand List Button Text | String | Quick Navigation |
| type | navigation direction, optional left right | String | right |
| overlay | Whether to show the mask when expanding | Boolean | true |
| position | fixed vertical position | Object | {top: 'auto',bottom: 'auto'} |
| slotList | Customize expanded list content | HTMLElement | - |
| slotBtn | custom button | HTMLElement | - |


### Event

| Field | Description | Callback Parameters |
|----------|-------------|----------------|
| onChange | expand/collapse button callback | {value:boolean} |
| onSelected | Fired after selection | {item:item, event:MouseEvent} |


    