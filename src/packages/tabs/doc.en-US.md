# Tabs

## Intro

It is often used for the storage and display of large blocks of content in the level area, and supports the form of embedded tags and rendering loop data.

## Install

```tsx
import { Tabs } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={(value) => {
        setTab1value(value)
      }}>
        <Tabs.TabPane  title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Basic Usage - Smile Curve

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={(value) => {
        setTab1value(value)
      }} activeType="smile">
        <Tabs.TabPane  title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Basic Usage - Title Left Align

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value}
            onChange={(value) => {
              setTab1value(value)
            }}
            align="left">
        <Tabs.TabPane  title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Matched via value

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

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

### With Swiper

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, Swiper } from '@nutui/nutui-react';

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

### CSS Sticky

通过设置tab的style 例如：`tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}` ，来实现Css的粘性布局，注意：在微信小程序里组件外层元素不能存在 overflow 为 `hidden`、`auto`、`scroll`的设置。

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

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

### Tabpane height auto

Automatic height. When set to `true`, `nut-tabs` and `nut-tabs__content` will change with the height of the current `nut-tabpane`.

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

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

### Data is rendered asynchronously for 3s

:::demo

```tsx
import React, { useState,useEffect } from "react";
import { Tabs } from '@nutui/nutui-react';

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

### A large number of scrolling operations

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab4value, setTab4value] = useState('0');
  return (
    <>
      <Tabs value={tab4value} onChange={(value) => {
        setTab4value(value)
      }}>
        <Tabs.TabPane title="Low-level sale">Low-level sale</Tabs.TabPane>
        <Tabs.TabPane title="Shangxinri">Shangxinri</Tabs.TabPane>
        <Tabs.TabPane title="Ten billion subsidies">Ten billion subsidies</Tabs.TabPane>
        <Tabs.TabPane title="Today's great value">Today&lsquo;s great value</Tabs.TabPane>
        <Tabs.TabPane title="So good and so cheap">So good and so cheap</Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Left and right layout

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

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
          title={`Tab ${  item}`}> Tab {item} </Tabs.TabPane>)}
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Left and Right Layout - Smile Curve

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

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

### Tabs in Tabs

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

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

### tab bar font size large normal small

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

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

### custom tab bar

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';  
import { Dongdong, Jd } from '@nutui/icons-react';

const App = () => {
  const [tab7value, setTab7value] = useState('c1');
  const list6 = [
    {
      title: 'custom 1',
      paneKey: 'c1',
      icon: <Dongdong />,
    },
    {
      title: 'custom 2',
      paneKey: 'c2',
      icon: <Jd />,
    },
    {
      title: 'custom 3',
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The value of the currently active tab panel | `number` \| `string` | `0` |
| defaultValue | Initialize the value of the active tab | `number` \| `string` | `0` |
| activeColor | Label selected color | `string` | `#1a1a1a` |
| direction | Use horizontal and vertical directions | `horizontal` \| `vertical` | `horizontal` |
| activeType | Select the bottom display style Optional values `line`, `smile` | `string` | `line` |
| duration | Switch animation duration, unit ms 0 means no animation | `number` \| `string` | `300` |
| title | custom navigation area | `() => JSX.Element[]` | `-` |
| align | title left alignment | `left` \| `right` | `-` |
| autoHeight | Auto height. When set to true, nut-tabs and nut-tabs\_\_content will change with the height of the current nut-tabpane. | `boolean` | `false` |
| tabStyle | tab bar style | `CSSProperties` | `{}` |
| onClick | Triggered when the label is clicked | `(index: string \| number) => void` | `-` |
| onChange | Triggered when the currently active tab changes | `(index: string \| number) => void` | `-` |

## Tabs.Tabpane

### Props

| Property | Description | type | Default |
| --- | --- | --- | --- |
| title | title | `string` | `-` |
| value | tag Key , matching identifier, default is index value | `string` \| `number` | `-` |
| disabled | Whether to disable the label | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tabs-tab-smile-color | The color of the smile curve | `$primary-color` |
| \--nutui-tabs-titles-background-color | Tab title background color | `$background-color` |
| \--nutui-tabs-titles-border-radius | Tab title border rounded | `0` |
| \--nutui-tabs-titles-item-font-size | Tab title font size | `$font-size-2` |
| \--nutui-tabs-titles-item-color | Tab title text color | `$title-color` |
| \--nutui-tabs-title-gap | Tab title margin | `0px` |
| \--nutui-tabs-titles-item-active-color | Tab selected titles text color | `$title-color` |
| \--nutui-tabs-titles-item-active-font-weight | Tab selected titles font weight | `600` |
| \--nutui-tabs-horizontal-tab-line-color | Horizontal line color | `linear-gradient(90deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-horizontal-line-bottom | Horizontal line distance | `15%` |
| \--nutui-tabs-horizontal-line-border-radius | rounded corners for horizontal lines | `0px` |
| \--nutui-tabs-horizontal-tab-line-opacity | Opacity of horizontal tabs | `1` |
| \--nutui-tabs-horizontal-titles-height | height of titles in horizontal direction | `46px` |
| \--nutui-tabs-horizontal-titles-item-min-width | Minimum width of horizontal titles | `50px` |
| \--nutui-tabs-horizontal-titles-item-active-background-color | Background color of active tab titles in horizontal direction | `$background-color3` |
| \--nutui-tabs-horizontal-titles-item-active-line-width | Horizontal active tab line width | `40px` |
| \--nutui-tabs-horizontal-titles-item-active-line-height | Height of active tabs line in horizontal direction | `3px` |
| \--nutui-tabs-vertical-tab-line-color | vertical line color | `linear-gradient(180deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-vertical-titles-item-height | height of vertical titles | `40px` |
| \--nutui-tabs-vertical-titles-item-active-line-width | Vertical title line width | `3px` |
| \--nutui-tabs-vertical-titles-item-active-line-height | The height of the vertical title line | `14px` |
| \--nutui-tabs-vertical-titles-width | Width of vertical titles | `100px` |