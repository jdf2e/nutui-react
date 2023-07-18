# FixedNav 悬浮导航

## 介绍

悬浮收齐体验交互，用于快捷导航

## 安装

```tsx
import { FixedNav } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react-taro';

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
        activeText="基础用法"
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

### 左侧效果

```tsx
import React, { useState } from "react";
import { FixedNav } from '@nutui/nutui-react-taro';

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
        type="left"
        position={{ top: '140px' }}
        visible={visible}
        activeText="左侧收起"
        inactiveText="左侧展开"
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
import { FixedNav } from '@nutui/nutui-react-taro';

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

### 自定义使用

```tsx
import React, { useState } from "react";
import { Icon, FixedNav } from '@nutui/nutui-react-taro';

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
        position={{ top: '280px' }}
        type="left"
        visible={visible}
        onChange={change}
        onSelect={selected}
        content={
          <>
            <Icon name="retweet" color="#fff"> </Icon>
            <span className="text">{ visible ? '自定义开' : '自定义关' }</span>
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
import { Drag, FixedNav } from '@nutui/nutui-react-taro';

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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否打开 | `boolean` | `false` |
| list | 悬浮列表内容数据 | `Array` | `[]` |
| activeText | 收起列表按钮文案 | `string` | `收起导航` |
| inactiveText | 展开列表按钮文案 | `string` | `快速导航` |
| type | 导航方向 | `left` \| `right` | `right` |
| overlay | 展开时是否显示遮罩 | `boolean` | `true` |
| position | fixed 垂直位置 | `object` | `{top: 'auto', bottom: 'auto'}` |
| content | 自定义按钮 | `ReactNode` | `-` |
| onChange | 展开收起按钮回调 | `value: boolean` | `-` |
| onSelect | 选择之后触发 | `item, event: MouseEvent` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-fixednav-bg-color | 背景颜色 | `$white` |
| \--nutui-fixednav-color | 字体颜色 | `$color-title` |
| \--nutui-fixednav-index | zIndex | `201` |
| \--nutui-fixednav-item-active-color | 激活颜色 | `$color-primary` |