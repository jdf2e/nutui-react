# Tabs 选项卡切换

### 介绍

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

### 安装

```ts
import { Tabs, TabPane } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

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

### 基础用法-微笑曲线

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

### 通过 pane-key 匹配

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
        <TabPane title="Tab 1" pane-key="0"> Tab 1 </TabPane>
        <TabPane title="Tab 2" pane-key="1" disabled> Tab 2 </TabPane>
        <TabPane title="Tab 3" pane-key="2"> Tab 3 </TabPane>
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
import React, { useState } from "react";
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

### 数量多,滚动操作

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

### 左右布局

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab5value, setTab5value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs value={tab5value} onChange={({ paneKey }) => {
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

### 左右布局-微笑曲线

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab6value, setTab6value] = useState('0');
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs value={tab6value} onChange={({ paneKey }) => {
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

### 标签栏字体尺寸 large normal small

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

### 自定义标签栏

:::demo

```tsx
import React, { useState } from "react";
import { Tabs, TabPane, Icon } from '@nutui/nutui-react';

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

| 参数          | 说明                                          | 类型          | 默认值     |
|---------------|-----------------------------------------------|---------------|------------|
| value         | 绑定当前选中标签的标识符                      | number,string | 0          |
| color         | 标签选中色                                    | string        | #1a1a1a    |
| background    | 标签栏背景颜色                                | string        | #f5f5f5    |
| direction     | 使用横纵方向 可选值 horizontal、vertical      | string        | horizontal |
| type          | 选中底部展示样式 可选值 line、smile           | string        | line       |
| titleScroll  | 标签栏是否可以滚动                            | boolean       | false      |
| ellipsis      | 是否省略过长的标题文字                        | boolean       | true       |
| animatedTime | 切换动画时长,单位 ms 0 代表无动画              | number,string | 300        |
| titleGutter  | 标签间隙                                      | number,string | 0          |
| titleNode    | 自定义导航区域                                 | () => JSX.Element[] | 0          |
| size         | 标签栏字体尺寸大小 可选值 large normal small | string        | normal     |

## Tabs Children

| 名称    | 说明           |
|---------|----------------|
| default | 自定义内容     |

### Tabpane Props

| 参数     | 说明                    | 类型    | 默认值           |
|----------|-------------------------|---------|------------------|
| title    | 标题                    | string  |                  |
| paneKey  | 标签 Key , 匹配的标识符 | string  | 默认索引0,1,2... |
| disabled | 是否禁用标签            | boolean | false            |

### Tabs Events

| 事件名 | 说明                     | 回调参数                 |
|--------|--------------------------|--------------------------|
| click  | 点击标签时触发           | {title,paneKey,disabled} |
| change | 当前激活的标签改变时触发 | {title,paneKey,disabled} |
