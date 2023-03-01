# Tabs 选项卡切换

### 介绍

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

### 安装

```ts
// react
import { Tabs } from '@nutui/nutui-react';
```

```ts
// 1.4.9 废弃
import { Tabs, TabPane } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
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

### 基础用法-微笑曲线

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} type="smile">
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

### 基础用法-Title 左对齐

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} leftAlign>
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

### 通过 paneKey 匹配

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs value={tab2value} onChange={({ paneKey }) => {
        setTab2value(paneKey)
      }}>
        <Tabs.TabPane  title="Tab 1" paneKey="0"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 2" paneKey="1" disabled> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 3" paneKey="2"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### CSS 粘性布局

通过设置tab的style 例如：`tabStyle={{ position: 'sticky', top: '0px', zIndex: 1 }}` ，来实现Css的粘性布局，注意：在微信小程序里组件外层元素不能存在 overflow为 hidden、auto、scroll的设置。

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs value={tab2value} tabStyle={{ position: 'sticky', top: '0px', zIndex: 1 }} onChange={({ paneKey }) => {
        setTab2value(paneKey)
      }}>
        <Tabs.TabPane  title="Tab 1" paneKey="0">
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
        </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 2" paneKey="1">
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
            <p>Tab 2</p>
        </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 3" paneKey="2"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::
### Tabpane 自动高度

自动高度。设置为 true 时，nut-tabs 和 nut-tabs__content 会随着当前 nut-tabpane 的高度而发生变化。

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab2value, setTab2value] = useState('0');
  return (
    <>
      <Tabs value={tab2value} autoHeight onChange={({ paneKey }) => {
        setTab2value(paneKey)
      }}>
        <Tabs.TabPane  title="Tab 1" paneKey="0">
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
        </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 2" paneKey="1"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 3" paneKey="2"> Tab 3 </Tabs.TabPane>
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
import { Tabs } from '@nutui/nutui-react';

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
        {list3.map(item => <Tabs.TabPane  key={item}
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
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab4value, setTab4value] = useState('0');
  const list4 = Array.from(new Array(10).keys());
  return (
    <>
      <Tabs value={tab4value} onChange={({ paneKey }) => {
        setTab4value(paneKey)
      }} titleScroll titleGutter="10">
        {list4.map(item => <Tabs.TabPane  key={item}
          title={`Tab ${item}`}> Tab {item} </Tabs.TabPane>)}
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
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab5value, setTab5value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs style={{ height: '300px' }} value={tab5value} onChange={({ paneKey }) => {
        setTab5value(paneKey)
      }} titleScroll direction="vertical">
        {list5.map(item => <Tabs.TabPane  key={item}
          title={`Tab ${  item}`}> Tab {item} </Tabs.TabPane>)}
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
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab6value, setTab6value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs style={{ height: '300px' }} value={tab6value} onChange={({ paneKey }) => {
        setTab6value(paneKey)
      }} type="smile" titleScroll direction="vertical">
        {list5.map(item => <Tabs.TabPane  key={item}
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
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab8value, setTab8value] = useState('0')
  const [tab9value, setTab9value] = useState('0')
  return (
    <>
      <Tabs
        value={tab8value}
        onChange={({ paneKey }) => {
          setTab8value(paneKey)
        }}
        type="smile"
        direction="vertical"
      >
        <TabPane title="Tab 1">
          <Tabs
            value={tab9value}
            onChange={({ paneKey }) => {
              setTab9value(paneKey)
            }}
            type="smile"
            direction="horizontal"
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
          </Tabs>
        </TabPane>
        <TabPane title="Tab 2"> Tab 2 </TabPane>
        <TabPane title="Tab 3"> Tab 3 </TabPane>
      </Tabs>

      <Tabs
        value={tab8value}
        onChange={({ paneKey }) => {
          setTab8value(paneKey)
        }}
        autoHeight
        type="smile"
      >
        <TabPane title="Tab 1">
          <Tabs
            value={tab9value}
            onChange={({ paneKey }) => {
              setTab9value(paneKey)
            }}
            direction="vertical"
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
          </Tabs>
        </TabPane>
        <TabPane title="Tab 2"> Tab 2 </TabPane>
        <TabPane title="Tab 3"> Tab 3 </TabPane>
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
import { Tabs } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('0');
  return (
    <>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} size="large">
        <Tabs.TabPane  title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} size="normal">
        <Tabs.TabPane  title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane  title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <Tabs value={tab1value} onChange={({ paneKey }) => {
        setTab1value(paneKey)
      }} size="small">
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

### 自定义标签栏

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, Icon } from '@nutui/nutui-react';

const App = () => {
  const [tab7value, setTab7value] = useState('c1');
  const list6 = [
    {
      title: '自定义 1',
      paneKey: 'c1',
      icon: 'dongdong'
    },
    {
      title: '自定义 2',
      paneKey: 'c2',
      icon: 'JD'
    },
    {
      title: '自定义 3',
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
          <Tabs.TabPane  key={item.paneKey} paneKey={item.paneKey}>
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

## API

### Tabs Props

| 参数             | 说明                                          | 类型                  | 默认值     |
|----------------|-----------------------------------------------|---------------------|------------|
| value          | 绑定当前选中标签的标识符                      | number \| string       | `0`          |
| color          | 标签选中色                                    | string              | `#1a1a1a`    |
| background     | 标签栏背景颜色                                | string              | `#f5f5f5`    |
| direction      | 使用横纵方向 可选值 `horizontal`、`vertical`      | string              | `horizontal` |
| type           | 选中底部展示样式 可选值 `line`、`smile`           | string              | `line`       |
| titleScroll    | 标签栏是否可以滚动                            | boolean             | `false`      |
| ellipsis       | 是否省略过长的标题文字                        | boolean             | `true`       |
| animatedTime   | 切换动画时长,单位 ms 0 代表无动画              | number \| string       | `300`        |
| titleGutter    | 标签间隙                                      | number \| string       | `0`          |
| titleNode      | 自定义导航区域                                 | ReactNode | -          |
| size           | 标签栏字体尺寸大小 可选值 `large`、`normal`、`small` | string              | `normal`     |
| leftAlign`v1.4.8` | 标题左对齐 | boolean | `false` |
| autoHeight`v1.2.1` | 自动高度。设置为 true 时，nut-tabs 和 nut-tabs__content 会随着当前 nut-tabpane 的高度而发生变化。 | boolean             | `false`     |
| tabStyle`v1.3.8` | 标签栏样式 | CSSProperties | `{}`     |

## Tabs Children

| 名称    | 说明           |
|---------|----------------|
| default | 自定义内容     |

### Tabs.Tabpane Props

| 参数                | 说明              | 类型    | 默认值           |
|-------------------|-----------------|---------|------------------|
| title             | 标题              | string  |     -             |
| paneKey           | 标签 Key , 匹配的标识符 | string  | 默认索引0,1,2... |
| disabled          | 是否禁用标签          | boolean | `false`            |

### Tabs Events

| 事件名 | 说明                     | 回调参数                 |
|--------|--------------------------|--------------------------|
| onClick  | 点击标签时触发           | `{title, paneKey, disabled}` |
| onChange | 当前激活的标签改变时触发 | `{title, paneKey, disabled}` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-tabs-tab-smile-color | `$primary-color` |
| --nutui-tabs-titles-background-color | `$background-color` |
| --nutui-tabs-titles-border-radius | `0` |
| --nutui-tabs-titles-item-large-font-size | `$font-size-3` |
| --nutui-tabs-titles-item-font-size | `$font-size-2` |
| --nutui-tabs-titles-item-small-font-size | `$font-size-1` |
| --nutui-tabs-titles-item-color | `$title-color` |
| --nutui-tabs-titles-item-active-color | `$title-color` |
| --nutui-tabs-titles-item-active-font-weight`v1.4.9` | `600` |
| --nutui-tabs-horizontal-tab-line-color`v1.4.9` | `linear-gradient(90deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)`|
| --nutui-tabs-horizontal-line-bottom`v1.4.8` | `15%` |
| --nutui-tabs-horizontal-line-border-radius`v1.4.8` |` 0px`|
| --nutui-tabs-horizontal-tab-line-opacity`v1.4.9` | `1`|
| --nutui-tabs-horizontal-titles-height | `46px` |
| --nutui-tabs-horizontal-titles-item-min-width | `50px` |
| --nutui-tabs-horizontal-titles-item-active-background-color`v1.4.9` | `$background-color3` |
| --nutui-tabs-horizontal-titles-item-active-line-width | `40px` |
| --nutui-tabs-horizontal-titles-item-active-line-height`v1.4.9` | `3px` |
| --nutui-tabs-vertical-tab-line-color`v1.4.9` | `linear-gradient(180deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)`|
| --nutui-tabs-vertical-titles-item-height | `40px` |
| --nutui-tabs-vertical-titles-item-active-line-width`v1.4.9` | `3px` |
| --nutui-tabs-vertical-titles-item-active-line-height | `14px` |
| --nutui-tabs-vertical-titles-width | `100px` |
| --nutui-tabs-titles-item-line-border-radius`v1.4.9 废弃` | `0` |
| --nutui-tabs-titles-item-line-opacity`v1.4.9 废弃` | `1` |
