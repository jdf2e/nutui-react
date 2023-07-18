# FixedNav hover navigation

## Intro

Hovering and collecting experience interaction for quick navigation

## Install

```tsx
import { FixedNav } from '@nutui/nutui-react';
```

## Code

### Basic Usage

:::demo

```tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
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
        list={list}
        activeText="basic usage"
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

### Left side effect

```tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
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
        list={list}
        type="left"
        position={{ top: '140px' }}
        visible={visible}
        activeText="Left collapsed"
        inactiveText="Expand left"
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

### Custom use

```tsx
import React, { useState } from "react";
import { Icon, FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
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
        onSelect={selected}
        content={
          <>
            <Icon name="retweet" color="#fff"> </Icon>
            <span className="text">{ visible ? 'Custom On' : 'Custom Off' }</span>
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

### Support drag and drop

```tsx
import React, { useState } from "react";
import { Drag, FixedNav } from '@nutui/nutui-react';

const App = () => {
  const list = [
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
          list={list}
          inactiveText="support drag and drop"
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

| Field | Description | Type | Default Value |
| --- | --- | --- | --- |
| visible | whether to open | `boolean` | `false` |
| list | Floating list content data | `Array` | `[]` |
| activeText | Collapse list button text | `string` | `Collapse navigation` |
| inactiveText | Expand List Button Text | `string` | `Quick Navigation` |
| type | navigation direction | `left` \| `right` | `right` |
| overlay | Whether to show the mask when expanding | `boolean` | `true` |
| position | fixed vertical position | `object` | `{top: 'auto', bottom: 'auto'}` |
| content | custom button | `ReactNode` | `-` |
| onChange | expand/collapse button callback | `value: boolean` | `-` |
| onSelect | Fired after selection | `item, event: MouseEvent}` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-fixednav-bg-color | background color | `$white` |
| \--nutui-fixednav-color | font color | `$color-title` |
| \--nutui-fixednav-index | zIndex | `201` |
| \--nutui-fixednav-item-active-color | active color | `$color-primary` |