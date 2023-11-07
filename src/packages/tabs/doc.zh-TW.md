# Tabs 選項卡切換

## 介紹

常用於平級區域大塊內容的的收納和展現，支持內嵌標簽形式和渲染循環數據形式

## 安裝

```tsx
import { Tabs } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

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

### 基礎用法-微笑曲線

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
      }} type="smile">
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

### 基礎用法-Title 左對齊

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

### 通過 value 匹配

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

### 滑動切換

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

### CSS 黏性佈局

通過設置tab的style 例如：`tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}` ，來實現Css的黏性佈局，註意：在微信小程序裏組件外層元素不能存在 overflow 為 `hidden`、`auto`、`scroll`的設置。

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

### Tabpane 自動高度

自動高度。設置為 true 時，nut-tabs 和 nut-tabs\_\_content 會隨著當前 nut-tabpane 的高度而發生變化。

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

### 數據異步渲染 3s

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

### 數量多,滾動操作

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
        <Tabs.TabPane title="低階特賣會">低階特賣會</Tabs.TabPane>
        <Tabs.TabPane title="上新日">上新日</Tabs.TabPane>
        <Tabs.TabPane title="百億補貼">百億補貼</Tabs.TabPane>
        <Tabs.TabPane title="今日聚超值">今日聚超值</Tabs.TabPane>
        <Tabs.TabPane title="真好真便宜">真好真便宜</Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 左右佈局

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
                                         title={`Tab ${item}`}> Tab {item} </Tabs.TabPane>)}
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 左右佈局-微笑曲線

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
            }} type="smile" direction="vertical">
        {list5.map(item => <Tabs.TabPane key={item}
                                         title={`Tab ${item}`}> Tab {item} </Tabs.TabPane>)}
      </Tabs>
    </>
  );
};
export default App;
```

:::

### 嵌套佈局

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
        type="smile"
        direction="vertical"
      >
        <Tabs.TabPane title="Tab 1">
          <Tabs
            value={tab9value}
            onChange={(value) => {
              setTab9value(value)
            }}
            type="smile"
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
        type="smile"
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

### 標簽欄字體尺寸 large normal small

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

### 自定義標簽欄

:::demo

```tsx
import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react';
import { Dongdong, Jd } from '@nutui/icons-react';

const App = () => {
  const [tab7value, setTab7value] = useState('c1');
  const list6 = [
    {
      title: '自定義 1',
      paneKey: 'c1',
      icon: <Dongdong />,
    },
    {
      title: '自定義 2',
      paneKey: 'c2',
      icon: <Jd />,
    },
    {
      title: '自定義 3',
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前激活 tab 面闆的值 | `number` \| `string` | `0` |
| defaultValue | 初始化激活 tab 的值 | `number` \| `string` | `0` |
| activeColor | 標簽選中色 | `string` | `#1a1a1a` |
| direction | 使用橫縱方嚮 | `horizontal` \| `vertical`  | `horizontal` |
| activeType | 選中底部展示樣式 可選值 `line`、`smile` | `string` | `line` |
| duration | 切換動畫時長,單位 ms 0 代錶無動畫 | `number` \| `string` | `300` |
| title | 自定義導航區域 | `() => JSX.Element[]` | `-` |
| align | 標題左對齊 | `left` \| `right` | `-` |
| autoHeight | 自動高度。設置為 true 時，nut-tabs 和 nut-tabs\_\_content 會隨著當前 nut-tabpane 的高度而發生變化。 | `boolean` | `false` |
| tabStyle | 標簽欄樣式 | `CSSProperties` | `{}` |
| onClick | 點擊標簽時觸發 | `(index: string \| number) => void` | `-` |
| onChange | 當前激活的標簽改變時觸發 | `(index: string \| number) => void` | `-` |

## Tabs.Tabpane

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標題 | `string` | `-` |
| value | 標簽 Key , 匹配的標識符, 默認為索引值 | `string` \| `number` | `-` |
| disabled | 是否禁用標簽 | `boolean` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-tabs-tab-smile-color | 微笑曲線的顏色 | `$primary-color` |
| \--nutui-tabs-titles-background-color | Tab 標題的背景色 | `$background-color` |
| \--nutui-tabs-titles-border-radius | Tab 標題的邊框圓角 | `0` |
| \--nutui-tabs-titles-item-font-size | Tab 標題的字號 | `$font-size-2` |
| \--nutui-tabs-titles-item-color | Tab 標題的文本顏色 | `$title-color` |
| \--nutui-tabs-title-gap | Tab 標題的左右 margin | `0px` |
| \--nutui-tabs-titles-item-active-color | Tab 選中標題的文本顏色 | `$title-color` |
| \--nutui-tabs-titles-item-active-font-weight | Tab 選中標題的字重 | `600` |
| \--nutui-tabs-horizontal-tab-line-color | 水平方嚮線條顏色 | `linear-gradient(90deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-horizontal-line-bottom | 水平方嚮線條距離 | `15%` |
| \--nutui-tabs-horizontal-line-border-radius | 水平方嚮線的圓角 | `0px` |
| \--nutui-tabs-horizontal-tab-line-opacity | 水平方嚮線的透明度 | `1` |
| \--nutui-tabs-horizontal-titles-height | 水平方嚮標題的高度 | `46px` |
| \--nutui-tabs-horizontal-titles-item-min-width | 水平方嚮標題的最小寬度 | `50px` |
| \--nutui-tabs-horizontal-titles-item-active-background-color | 水平方嚮激活選項卡標題的背景色 | `$background-color3` |
| \--nutui-tabs-horizontal-titles-item-active-line-width | 水平方嚮激活選項卡線條的寬度 | `40px` |
| \--nutui-tabs-horizontal-titles-item-active-line-height | 水平方嚮激活選項卡線條的高度 | `3px` |
| \--nutui-tabs-vertical-tab-line-color | 垂直方嚮線條顏色 | `linear-gradient(180deg, $primary-color 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-vertical-titles-item-height | 垂直方嚮標題的高度 | `40px` |
| \--nutui-tabs-vertical-titles-item-active-line-width | 垂直方嚮標題線條的寬度 | `3px` |
| \--nutui-tabs-vertical-titles-item-active-line-height | 垂直方嚮標題線條的高度 | `14px` |
| \--nutui-tabs-vertical-titles-width | 垂直方嚮標題的寬度 | `100px` |