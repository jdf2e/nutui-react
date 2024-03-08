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

### Basic Usage-Smile Curve

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

### Basic Usage-Simple Mode

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
      }} activeType="simple">
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

### Basic Usage-Card Mode

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
      }} activeType="card">
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

### Basic Usage-Button Mode

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
      }} activeType="button">
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

### Basic Usage-Divider Mode

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
      }} activeType="divider">
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

### Title Left Align

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs
          value={tab1value}
          align="left"
          onChange={(value) => {
            setTab1value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
    </>
  );
};
export default App;
```

:::

### Title Left Align-Card Mode

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs
        value={tab1value}
        activeType="card"
        align="left"
        onChange={(value) => {
          setTab1value(value)
        }}
      >
        <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Title Left Align-Button Mode

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs
          value={tab1value}
          activeType="button"
          align="left"
          onChange={(value) => {
            setTab1value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
    </>
  );
};
export default App;
```

:::

### Title Left Align-Divider Mode

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs
        value={tab1value}
        activeType="divider"
        align="left"
        onChange={(value) => {
          setTab1value(value)
        }}
      >
        <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Match By Value

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

### Slide To Switch

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, Swiper } from '@nutui/nutui-react';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  const swiperRef = useRef(null)
  const [tabIndex, setTabIndex] = useState(0)
  const style = { backgroundColor: '#fff', padding: '10px' }
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
          <div style={{style}}>Tab 1</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={{style}}>Tab 2</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={{style}}>Tab 3</div>
        </Swiper.Item>
      </Swiper>
    </>
  );
};
export default App;
```

:::

### CSS Sticky

By setting the style of the tab, for example: `tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}` , realize the sticky layout of CSS. Note: In the WeChat applet, the outer elements of the component cannot have overflow. Settings for hidden, auto, and scroll.

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs
        value={tab2value}
        style={{ position: 'relative', zIndex: 11 }}
        tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}
        onChange={(value) => {
          setTab2value(value)
        }}
      >
        <Tabs.TabPane title="Tab 1" value="0">
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
          <p>Tab 1</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2" value="1">
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3" value="2">
          Tab 3
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Tabpane Auto Height

When autoHeight is set to true, nut-tabs and nut-tabs__content will change with the current height of nut-tabpane.

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

### Data Is Rendered Asynchronously For 3s

:::demo

```tsx
import React, { useState, useEffect } from "react";
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

### A Large Number Of Scrolling Operations

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
        <Tabs.TabPane title="Low-end Sale">Low-end Sale</Tabs.TabPane>
        <Tabs.TabPane title="New Day">New Day</Tabs.TabPane>
        <Tabs.TabPane title="Ten Billion Subsidies">Ten Billion Subsidies</Tabs.TabPane>
        <Tabs.TabPane title="uper Value Today">uper Value Today</Tabs.TabPane>
        <Tabs.TabPane title="So Good And So Cheap">So Good And So Cheap</Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

### A Large Number Of Scrolling Operations 2

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab4value, setTab4value] = useState('0');
  return (
    <>
      <Tabs
          value={tab4value}
          style={{ height: '300px' }}
          onChange={(value) => {
            setTab4value(value)
          }}
          direction="vertical"
        >
          {list4.map((item) => (
            <Tabs.TabPane key={item} title={`Tab ${item}`}>
              Tab {item}
            </Tabs.TabPane>
          ))}
        </Tabs>
    </>
  );
};
export default App;
```

:::

### Left And Right Layout

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab5value, setTab5value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs 
      style={{ height: '300px' }} 
      value={tab5value}
      onChange={(value) => {
        setTab5value(value)
      }} 
      direction="vertical">
      {list5.map(item => 
        <Tabs.TabPane 
          key={item}
          title={`Tab ${item}`}
          > Tab {item} 
        </Tabs.TabPane>)}
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Left And Right Layout-Smile Curve

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
        {list5.map(item => 
          <Tabs.TabPane 
            key={item}
            title={`Tab ${item}`}> Tab {item} 
          </Tabs.TabPane>)}
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Tabs In Tabs

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
    </>
  );
};
export default App;
```

:::

### Tabs In Tabs 2

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

### Title FontSize: 20px 12px

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs
        value={tab11value}
        onChange={(value) => {
          setTab11value(value)
        }}
        style={{ '--nutui-tabs-titles-font-size': '20px' }}
      >
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <Tabs
        value={tab12value}
        onChange={(value) => {
          setTab12value(value)
        }}
        style={{ '--nutui-tabs-titles-font-size': '12px' }}
      >
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

### Custom Tab Bar

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';
import { Star } from '@nutui/icons-react';

const App = () => {
  const [tab7value, setTab7value] = useState('c1');
  const list6 = [
    {
      title: 'Custom 1',
      paneKey: 'c1',
      icon: <Star />,
    },
    {
      title: 'Custom 2',
      paneKey: 'c2',
    },
    {
      title: 'Custom 3',
      paneKey: 'c3'
    }
  ]
  return (
    <>
      <Tabs value={tab7value} title={() => {
        return list6.map(item => (
          <div
            onClick={() => setTab7value(item.paneKey)}
            className={`nut-tabs-titles-item ${tab7value === item.paneKey ? 'nut-tabs-titles-item-active' : ''}`}
            key={item.paneKey}
          >
            {item.icon || null}
            <span className="nut-tabs-titles-item-text">{item.title}</span>
            <span className="nut-tabs-titles-item-line" />
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
| activeType | Select the bottom display style Optional values `line`、`smile`、`simple`、`card`、`button`、`divider` | `line` \| `smile` \| `simple`  \| `card` \| `button`\| `divider` | `line` |
| duration | Switch animation duration, unit ms 0 means no animation | `number` \| `string` | `300` |
| title | custom navigation area | `() => JSX.Element[]` | `-` |
| align | title alignment | `left` \| `right` | `-` |
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
| \--nutui-tabs-titles-height | height of titles in horizontal direction | `44px` |
| \--nutui-tabs-titles-background-color | Tab title background color | `$color-background` |
| \--nutui-tabs-titles-padding | Tab title padding | `0 16px` |
| \--nutui-tabs-title-gap | Tab title margin | `0px` |
| \--nutui-tabs-titles-font-size | Tab title font size | `$font-size-base` |
| \--nutui-tabs-titles-item-min-width | Minimum width of horizontal titles | `50px` |
| \--nutui-tabs-titles-item-color | Tab titles font color | `$color-title` |
| \--nutui-tabs-titles-item-active-color | Tab selected titles font color | `$color-primary` |
| \--nutui-tabs-titles-item-active-font-weight | Tab selected titles font weight | `$font-weight-bold` |
| \--nutui-tabs-titles-item-active-font-size | Tab selected titles font size | `$font-size-large` |
| \--nutui-tabs-titles-item-active-background-color | Background color of active tab titles in horizontal direction | `$color-background-overlay` |
| \--nutui-tabs-tab-line-width |  Horizontal active tab line width | `12px` |
| \--nutui-tabs-tab-line-height | Height of active tabs line in horizontal direction | `2px` |
| \--nutui-tabs-tab-line-color | Horizontal line color | `$color-primary` |
| \--nutui-tabs-line-bottom | Horizontal line distance | `15%` |
| \--nutui-tabs-line-border-radius | rounded corners for horizontal lines | `2px` |
| \--nutui-tabs-tab-line-opacity | Opacity of horizontal tabs | `1` |
| \--nutui-tabs-vertical-titles-width | Width of vertical titles | `100px` |
| \--nutui-tabs-vertical-titles-item-height |  height of vertical titles | `40px` |
| \--nutui-tabs-vertical-tab-line-color | vertical line color | `linear-gradient(180deg, $color-primary 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-vertical-tab-line-width | Vertical title line width | `3px` |
| \--nutui-tabs-vertical-tab-line-height | The height of the vertical title line | `12px` |
