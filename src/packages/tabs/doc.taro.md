# Tabs 选项卡切换

## 介绍

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

## 安装

```tsx
import { Tabs } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={(value) => {
        setTab1value(value)
      }}>
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 基础用法-微笑曲线

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={(value) => {
        setTab1value(value)
      }} activeType="smile">
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 基础用法-Title 左对齐

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value}
            onChange={(value) => {
              setTab1value(value)
            }}
            align="left">
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 通过 value 匹配

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs value={tab2value} onChange={(value) => {
        setTab2value(value)
      }}>
        <Tabs.TabPane title="Tab 1" value="0"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2" value="1" disabled> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3" value="2"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 滑动切换

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, Swiper } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  const swiperRef = useRef(null)
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={(page) => {
          swiperRef.current?.to(page)
          setTabIndex(page)
        }}
      >
        <Tabs.TabPane title="Tab 1" />
        <Tabs.TabPane title="Tab 2" />
        <Tabs.TabPane title="Tab 3" />
      </Tabs>
      <Swiper
        initPage={0}
        loop={false}
        ref={swiperRef}
        onChange={(page) => {
          setTabIndex(page)
        }}
      >
        <Swiper.Item>
          <div style={{ backgroundColor: '#fff', padding: '10px' }}>
            Tab 1
          </div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={{ backgroundColor: '#fff', padding: '10px' }}>
            Tab 2
          </div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={{ backgroundColor: '#fff', padding: '10px' }}>
            Tab 3
          </div>
        </Swiper.Item>
      </Swiper>
    </>
  );
};
export default App;
```

:::

### CSS 粘性布局

通过设置tab的style 例如：`tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}` ，来实现Css的粘性布局，注意：在微信小程序里组件外层元素不能存在 overflow 为 `hidden`、`auto`、`scroll`的设置。

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs value={tab2value}
            tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}
            onChange={(value) => {
              setTab2value(value)
            }}>
        <Tabs.TabPane title="Tab 1">
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2">
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Tabpane 自动高度

自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tabpane 的高度而发生变化。

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs value={tab2value} autoHeight onChange={(value) => {
        setTab2value(value)
      }}>
        <Tabs.TabPane title="Tab 1">
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 数据异步渲染 3s

:::demo

```tsx
import React, { useState, useEffect } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab3value, setTab3value] = useState(0);
  const [list3, setList3] = useState();
  useEffect(() => {
    setTimeout(() => {
      setTab3value(2);
      setList3(Array.from(new Array(3).keys()))
    }, 3000)
  }, [])
  return (
    <>
      <Tabs value={tab3value} onChange={(value) => {
        setTab3value(value)
      }}>
        {list3.map(item => <Tabs.TabPane key={item}
                                         title={`Tab ${item}`}> Tab {item} </Tabs.TabPane>)}
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 数量多,滚动操作

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab4value, setTab4value] = useState('0');
  return (
    <>
      <Tabs value={tab4value} onChange={(value) => {
        setTab4value(value)
      }}>
        <Tabs.TabPane title="低阶特卖">低阶特卖</Tabs.TabPane>
        <Tabs.TabPane title="上新日">上新日</Tabs.TabPane>
        <Tabs.TabPane title="百亿补贴">百亿补贴</Tabs.TabPane>
        <Tabs.TabPane title="今日聚超值">今日聚超值</Tabs.TabPane>
        <Tabs.TabPane title="真好真便宜">真好真便宜</Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 左右布局

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab5value, setTab5value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs style={{ height: '300px' }} value={tab5value}
            onChange={(value) => {
              setTab5value(value)
            }} direction="vertical">
        {list5.map(item => <Tabs.TabPane key={item}
                                         title={`Tab ${item}`}> Tab {item} </Tabs.TabPane>)}
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 左右布局-微笑曲线

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab6value, setTab6value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs style={{ height: '300px' }} value={tab6value}
            onChange={(value) => {
              setTab6value(value)
            }} activeType="smile" direction="vertical">
        {list5.map(item => <Tabs.TabPane key={item}
                                         title={`Tab ${item}`}> Tab {item} </Tabs.TabPane>)}
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 嵌套布局

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab8value, setTab8value] = useState('0')
  const [tab9value, setTab9value] = useState('0')
  return (
    <>
      <Tabs
        value={tab8value}
        onChange={(value) => {
          setTab8value(value)
        }}
        direction="vertical"
      >
        <Tabs.TabPane title="Tab 1">
          <Tabs
            value={tab9value}
            onChange={(value) => {
              setTab9value(value)
            }}
            direction="horizontal"
          >
            <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
            <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
            <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
          </Tabs>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>

      <Tabs
        value={tab8value}
        onChange={(value) => {
          setTab8value(paneKey)
        }}
        autoHeight
      >
        <Tabs.TabPane title="Tab 1">
          <Tabs
            value={tab9value}
            onChange={(value) => {
              setTab9value(paneKey)
            }}
            direction="vertical"
          >
            <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
            <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
            <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
          </Tabs>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 标签栏字体尺寸 large normal small

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={(value) => {
        setTab1value(paneKey)
      }} style={{ '--nutui-tabs-titles-item-font-size': '20px' }}>
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <Tabs value={tab1value} onChange={(value) => {
        setTab1value(paneKey)
      }} style={{ '--nutui-tabs-titles-item-font-size': '12px' }}>
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 自定义标签栏

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';
import { Dongdong, Jd } from '@nutui/icons-react';

const App = () => {
  const [tab7value, setTab7value] = useState('c1');
  const list6 = [
    {
      title: '自定义 1',
      paneKey: 'c1',
      icon: <Dongdong />,
    },
    {
      title: '自定义 2',
      paneKey: 'c2',
      icon: <Jd />,
    },
    {
      title: '自定义 3',
      paneKey: 'c3'
    }
  ]
  return (
    <>
      <Tabs value={tab7value} title={() => {
        return list6.map(item => (
          <div
            onClick={() => setTab7value(item.paneKey)}
            className={`nut-tabs__titles-item ${tab7value === item.paneKey ? 'nut-tabs__titles-item--active' : ''}`}
            key={item.paneKey}
          >
            {item.icon || null}
            <span className="nut-tabs__titles-item__text">{item.title}</span>
            <span className="nut-tabs__titles-item__line" />
          </div>
        ))
      }

      }>
        {list6.map(item => (
          <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
            {item.title}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
};
export default App;
```

:::

## Tabs

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前激活 tab 面板的值 | `number` \| `string` | `0` |
| defaultValue | 初始化激活 tab 的值 | `number` \| `string` | `0` |
| activeColor | 标签选中色 | `string` | `#1a1a1a` |
| direction | 使用横纵方向 | `horizontal` \| `vertical` | `horizontal` |
| activeType | 选中底部展示样式 可选值 `line`、`smile` | `string` | `line` |
| duration | 切换动画时长,单位 ms 0 代表无动画 | `number` \| `string` | `300` |
| title | 自定义导航区域 | `() => JSX.Element[]` | `-` |
| align | 标题左对齐 | `left` \| `right` | `-` |
| autoHeight | 自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tabpane 的高度而发生变化。 | `boolean` | `false` |
| tabStyle | 标签栏样式 | `CSSProperties` | `{}` |
| onClick | 点击标签时触发 | `(index: string\| number) => void` | `-` |
| onChange | 当前激活的标签改变时触发 | `(index: string \| number) => void` | `-` |

## Tabs.Tabpane

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | `-` |
| value | 标签 Key , 匹配的标识符, 默认为索引值 | `string` \| `number` | `-` |
| disabled | 是否禁用标签 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tabs-tab-smile-color | 微笑曲线的颜色 | `$primary-color` |
| \--nutui-tabs-titles-background-color | Tab 标题的背景色 | `$background-color` |
| \--nutui-tabs-titles-border-radius | Tab 标题的边框圆角 | `0` |
| \--nutui-tabs-titles-item-font-size | Tab 标题的字号 | `$font-size-2` |
| \--nutui-tabs-titles-item-color | Tab 标题的文本颜色 | `$title-color` |
| \--nutui-tabs-title-gap | Tab 标题的左右 margin | `0px` |
| \--nutui-tabs-titles-item-active-color | Tab 选中标题的文本颜色 | `$title-color` |
| \--nutui-tabs-titles-item-active-font-weight | Tab 选中标题的字重 | `600` |
| \--nutui-tabs-horizontal-tab-line-color | 水平方向线条颜色 | `linear-gradient(90deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-horizontal-line-bottom | 水平方向线条距离 | `15%` |
| \--nutui-tabs-horizontal-line-border-radius | 水平方向线的圆角 | `0px` |
| \--nutui-tabs-horizontal-tab-line-opacity | 水平方向线的透明度 | `1` |
| \--nutui-tabs-horizontal-titles-height | 水平方向标题的高度 | `46px` |
| \--nutui-tabs-horizontal-titles-item-min-width | 水平方向标题的最小宽度 | `50px` |
| \--nutui-tabs-horizontal-titles-item-active-background-color | 水平方向激活选项卡标题的背景色 | `$background-color3` |
| \--nutui-tabs-horizontal-titles-item-active-line-width | 水平方向激活选项卡线条的宽度 | `40px` |
| \--nutui-tabs-horizontal-titles-item-active-line-height | 水平方向激活选项卡线条的高度 | `3px` |
| \--nutui-tabs-vertical-tab-line-color | 垂直方向线条颜色 | `linear-gradient(180deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-vertical-titles-item-height | 垂直方向标题的高度 | `40px` |
| \--nutui-tabs-vertical-titles-item-active-line-width | 垂直方向标题线条的宽度 | `3px` |
| \--nutui-tabs-vertical-titles-item-active-line-height | 垂直方向标题线条的高度 | `14px` |
| \--nutui-tabs-vertical-titles-width | 垂直方向标题的宽度 | `100px` |