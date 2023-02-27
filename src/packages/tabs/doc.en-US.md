# Tabs 选项卡切换

### Intro

It is often used for the storage and display of large blocks of content in the level area, and supports the form of embedded tags and rendering loop data.

### Install

```ts
// react
import { Tabs, TabPane } from '@nutui/nutui-react';

```

### Basic Usage

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }}>
        <TabPane title="Tab 1"> Tab 1 </TabPane>
        <TabPane title="Tab 2"> Tab 2 </TabPane>
        <TabPane title="Tab 3"> Tab 3 </TabPane>
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} type="smile">
        <TabPane title="Tab 1"> Tab 1 </TabPane>
        <TabPane title="Tab 2"> Tab 2 </TabPane>
        <TabPane title="Tab 3"> Tab 3 </TabPane>
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} leftAlign>
        <TabPane title="Tab 1"> Tab 1 </TabPane>
        <TabPane title="Tab 2"> Tab 2 </TabPane>
        <TabPane title="Tab 3"> Tab 3 </TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### Match by paneKey

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs value={tab2value} onChange={({ paneKey }) => {
        setTab2value(paneKey)
      }}>
        <TabPane title="Tab 1" paneKey="0"> Tab 1 </TabPane>
        <TabPane title="Tab 2" paneKey="1" disabled> Tab 2 </TabPane>
        <TabPane title="Tab 3" paneKey="2"> Tab 3 </TabPane>
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs value={tab2value} autoHeight onChange={({ paneKey }) => {
        setTab2value(paneKey)
      }}>
        <TabPane title="Tab 1" paneKey="0">
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
        </TabPane>
        <TabPane title="Tab 2" paneKey="1"> Tab 2 </TabPane>
        <TabPane title="Tab 3" paneKey="2"> Tab 3 </TabPane>
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab3value, setTab3value] = useState('0');
  const [list3, setList3] = useState(Array.from(new Array(2).keys()));
  useEffect(() => {
    setTimeout(() => {
      list3.push(999);
      setTab3value('2');
      setList3(list3)
    }, 3000)
  }, [])
  return (
    <>
      <Tabs value={tab3value} onChange={({ paneKey }) => {
        setTab3value(paneKey)
      }}>
        {list3.map(item => <TabPane key={item}
          title={`Tab ${item}`}> Tab {item} </TabPane>)}
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab4value, setTab4value] = useState('0');
  const list4 = Array.from(new Array(10).keys());
  return (
    <>
      <Tabs value={tab4value} onChange={({ paneKey }) => {
        setTab4value(paneKey)
      }} titleScroll titleGutter="10">
        {list4.map(item => <TabPane key={item}
          title={`Tab ${item}`}> Tab {item} </TabPane>)}
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab5value, setTab5value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs style={{ height: '300px' }} value={tab5value} onChange={({ paneKey }) => {
        setTab5value(paneKey)
      }} titleScroll direction="vertical">
        {list5.map(item => <TabPane key={item}
          title={`Tab ${  item}`}> Tab {item} </TabPane>)}
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab6value, setTab6value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs style={{ height: '300px' }} value={tab6value} onChange={({ paneKey }) => {
        setTab6value(paneKey)
      }} type="smile" titleScroll direction="vertical">
        {list5.map(item => <TabPane key={item}
          title={`Tab ${item}`}> Tab {item} </TabPane>)}
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} size="large">
        <TabPane title="Tab 1"> Tab 1 </TabPane>
        <TabPane title="Tab 2"> Tab 2 </TabPane>
        <TabPane title="Tab 3"> Tab 3 </TabPane>
      </Tabs>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} size="normal">
        <TabPane title="Tab 1"> Tab 1 </TabPane>
        <TabPane title="Tab 2"> Tab 2 </TabPane>
        <TabPane title="Tab 3"> Tab 3 </TabPane>
      </Tabs>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} size="small">
        <TabPane title="Tab 1"> Tab 1 </TabPane>
        <TabPane title="Tab 2"> Tab 2 </TabPane>
        <TabPane title="Tab 3"> Tab 3 </TabPane>
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
import { Tabs, TabPane, Icon } from '@nutui/nutui-react';

const App = () => {
  const [tab7value, setTab7value] = useState('c1');
  const list6 = [
    {
      title: 'custom 1',
      paneKey: 'c1',
      icon: 'dongdong'
    },
    {
      title: 'custom 2',
      paneKey: 'c2',
      icon: 'JD'
    },
    {
      title: 'custom 3',
      paneKey: 'c3'
    }
  ]
  return (
    <>
      <Tabs value={tab7value} titleNode={() => {
        return list6.map(item => (
          <div
            onClick={() => setTab7value(item.paneKey)}
            className={`nut-tabs__titles-item ${tab7value == item.paneKey ? 'active' : ''}`}
            key={item.paneKey}
          >
            {item.icon && <Icon name={item.icon} />}
            <span className="nut-tabs__titles-item__text">{item.title}</span>
            <span className="nut-tabs__titles-item__line" />
          </div>
        ))
      }

      }>
        {list6.map(item => (
          <TabPane key={item.paneKey} paneKey={item.paneKey}>
            {item.title}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};
export default App;
```

:::

## API

### Tabs Props

| Attribute          | Description                                          | Type          | Default     |
|---------------|-----------------------------------------------|---------------|------------|
| value         | Index of active tab                      | number,string | 0          |
| color         | Label selection color                                    | string        | #1a1a1a    |
| background    | Tab bar background color                                | string        | #f5f5f5    |
| direction     | Use landscape orientation optional value `horizontal`、`vertical`     | string        | horizontal |
| type          | Check the bottom display style optional value `line`、`smile`           | string        | line       |
| titleScroll  | Is the tab bar scrollable                            | boolean       | false      |
| ellipsis      | Whether to omit too long title text                        | boolean       | true       |
| animatedTime | Switch animation duration, unit ms 0 means no animation              | number,string | 300        |
| titleGutter  | Label gap                                      | number,string | 0          |
| titleNode    | Custom Titles Area                     | `() => JSX.Element[]` | 0          |
| size         | Tab bar font size optional value `large` `normal` `small` | string        | normal     |
| leftAlign`v1.4.8` | Title Left Align | boolean | false |
| autoHeight`v1.2.1` | Automatic height. When set to `true`, `nut-tabs` and `nut-tabs__content` will change with the height of the current `nut-tabpane`. | boolean        | false     |

## Tabs Children

| Name    | Description           |
|---------|----------------|
| default | Custom Default Content     |

### Tabpane Props

| Attribute     | Description                    | Type    | Default           |
|----------|-------------------------|---------|------------------|
| title    | title                    | string  |                  |
| paneKey  | Tag Key , the matching identifier | string  | Default index 0,1,2... |
| disabled | whether to disable tabs            | boolean | false            |

### Tabs Events

| Event | Description                     | Arguments                 |
|--------|--------------------------|--------------------------|
| onClick  | Triggered when the label is clicked           | {title,paneKey,disabled} |
| onChange | Fired when the currently active tab changes | {title,paneKey,disabled} |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-tabs-tab-smile-color | `  $primary-color` |
| --nutui-tabs-titles-background-color | `  $background-color` |
| --nutui-tabs-titles-border-radius | ` 0` |
| --nutui-tabs-titles-item-large-font-size | `  $font-size-3` |
| --nutui-tabs-titles-item-font-size | `  $font-size-2` |
| --nutui-tabs-titles-item-small-font-size | `  $font-size-1` |
| --nutui-tabs-titles-item-color | `  $title-color` |
| --nutui-tabs-titles-item-active-color | `  $title-color` |
| --nutui-tabs-titles-item-active-font-weight`v1.4.9` | ` 600` |
| --nutui-tabs-horizontal-tab-line-color`v1.4.9` | `linear-gradient(90deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)`|
| --nutui-tabs-horizontal-line-bottom`v1.4.8` | ` 15%` |
| --nutui-tabs-horizontal-line-border-radius`v1.4.8` |` 0px`|
| --nutui-tabs-horizontal-tab-line-opacity`v1.4.9` | ` 1`|
| --nutui-tabs-horizontal-titles-height | `  46px` |
| --nutui-tabs-horizontal-titles-item-min-width | `  50px` |
| --nutui-tabs-horizontal-titles-item-active-background-color`v1.4.9` | ` $background-color3` |
| --nutui-tabs-horizontal-titles-item-active-line-width | `  40px` |
| --nutui-tabs-horizontal-titles-item-active-line-height`v1.4.9` | `  3px` |
| --nutui-tabs-vertical-tab-line-color`v1.4.9` | `linear-gradient(180deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)`|
| --nutui-tabs-vertical-titles-item-height | `  40px` |
| --nutui-tabs-vertical-titles-item-active-line-width`v1.4.9` | `  3px` |
| --nutui-tabs-vertical-titles-item-active-line-height | `  14px` |
| --nutui-tabs-vertical-titles-width | `  100px` |
| --nutui-tabs-titles-item-line-border-radius`v1.4.9 废弃` | `  0` |
| --nutui-tabs-titles-item-line-opacity`v1.4.9 废弃` | `  1` |
