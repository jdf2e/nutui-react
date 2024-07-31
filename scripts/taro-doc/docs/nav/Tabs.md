---
sidebar_class_name: hasIcon
---

# Tabs 选项卡切换

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

## 引入

```tsx
import { Tabs } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Tabs
      value={tab1value}
      onChange={(value) => {
        setTab1value(value)
      }}
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo1
```

### 基础用法-微笑曲线

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Tabs
      value={tab1value}
      onChange={(value) => {
        setTab1value(value)
      }}
      activeType="smile"
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo2
```

### 基础用法-简约模式

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Tabs
      value={tab1value}
      onChange={(value) => {
        setTab1value(value)
      }}
      activeType="simple"
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo3
```

### 基础用法-卡片模式

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Tabs
      value={tab1value}
      onChange={(value) => {
        setTab1value(value)
      }}
      activeType="card"
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo4
```

### 基础用法-按钮模式

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Tabs
      value={tab1value}
      onChange={(value) => {
        setTab1value(value)
      }}
      activeType="button"
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo5
```

### 基础用法-分割线模式

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Tabs
      value={tab1value}
      onChange={(value) => {
        setTab1value(value)
      }}
      activeType="divider"
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo6
```

### Title 左对齐

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Tabs
      value={tab1value}
      onChange={(value) => {
        setTab1value(value)
      }}
      align="left"
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo7
```

### 左对齐-卡片模式

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Tabs
      value={tab1value}
      activeType="card"
      onChange={(value) => {
        setTab1value(value)
      }}
      align="left"
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo8
```

### 左对齐-按钮模式

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab1value}
        activeType="button"
        onChange={(value) => {
          setTab1value(value)
        }}
        align="left"
      >
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo9
```

### 左对齐-分割线模式

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab1value}
        activeType="divider"
        onChange={(value) => {
          setTab1value(value)
        }}
        align="left"
      >
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo10
```

### 通过 value 匹配

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const [tab2value, setTab2value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab2value}
        onChange={(value) => {
          setTab2value(value)
        }}
      >
        <Tabs.TabPane title="Tab 1" value="0">
          Tab 1
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2" value="1" disabled>
          Tab 2
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3" value="2">
          Tab 3
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo11
```

### 滑动切换

```tsx
import React, { useState, useRef } from 'react'
import { View } from '@tarojs/components'
import { Tabs, Swiper } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  const swiperRef = useRef<React.ElementRef<typeof Swiper> | null>(null)
  const [tabIndex, setTabIndex] = useState<string | number>(0)
  const contentStyle = { backgroundColor: '#fff', padding: '24px 10px' }
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
        defaultValue={0}
        loop={false}
        ref={swiperRef}
        height={100}
        onChange={(e) => {
          setTabIndex(e.detail.current)
        }}
      >
        <Swiper.Item>
          <View style={contentStyle}>Tab 1</View>
        </Swiper.Item>
        <Swiper.Item>
          <View style={contentStyle}>Tab 2</View>
        </Swiper.Item>
        <Swiper.Item>
          <View style={contentStyle}>Tab 3</View>
        </Swiper.Item>
      </Swiper>
    </>
  )
}
export default Demo12
```

### CSS 粘性布局

通过设置tab的style 例如：`tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}` ，来实现Css的粘性布局，注意：在微信小程序里组件外层元素不能存在 overflow 为 `hidden`、`auto`、`scroll`的设置。

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo13 = () => {
  const [tab2value, setTab2value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab2value}
        tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}
        onChange={(value) => {
          setTab2value(value)
        }}
      >
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
  )
}
export default Demo13
```

### Tabpane 自动高度

自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tabpane 的高度而发生变化。

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo14 = () => {
  const [tab2value, setTab2value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab2value}
        autoHeight
        onChange={(value) => {
          setTab2value(value)
        }}
      >
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
  )
}
export default Demo14
```

### 数据异步渲染 3s

```tsx
import React, { useState, useEffect } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo15 = () => {
  const [tab3value, setTab3value] = useState<string | number>(0)
  const [list3, setList3] = useState<number[]>([])
  useEffect(() => {
    setTimeout(() => {
      setTab3value(2)
      setList3([...new Array(3).keys()])
    }, 3000)
  }, [])
  return (
    <>
      <Tabs
        value={tab3value}
        onChange={(value) => {
          setTab3value(value)
        }}
      >
        {list3.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo15
```

### 数量多,滚动操作

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo16 = () => {
  const [tab4value, setTab4value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab4value}
        onChange={(value) => {
          setTab4value(value)
        }}
      >
        <Tabs.TabPane title="低阶特卖">低阶特卖</Tabs.TabPane>
        <Tabs.TabPane title="上新日">上新日</Tabs.TabPane>
        <Tabs.TabPane title="百亿补贴">百亿补贴</Tabs.TabPane>
        <Tabs.TabPane title="今日聚超值">今日聚超值</Tabs.TabPane>
        <Tabs.TabPane title="真好真便宜">真好真便宜</Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo16
```

### 数量多,滚动操作 2

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo17 = () => {
  const [tab4value, setTab4value] = useState<string | number>('0')
  const list4 = Array.from(new Array(10).keys())
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
  )
}
export default Demo17
```

### 左右布局

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo18 = () => {
  const [tab5value, setTab5value] = useState<string | number>('0')
  const list5 = Array.from(new Array(2).keys())
  return (
    <>
      <Tabs
        style={{ height: '300px' }}
        value={tab5value}
        onChange={(value) => {
          setTab5value(value)
        }}
        direction="vertical"
      >
        {list5.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo18
```

### 左右布局-微笑曲线

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo19 = () => {
  const [tab6value, setTab6value] = useState<string | number>('0')
  const list5 = Array.from(new Array(2).keys())
  return (
    <>
      <Tabs
        style={{ height: '300px' }}
        value={tab6value}
        onChange={(value) => {
          setTab6value(value)
        }}
        activeType="smile"
        direction="vertical"
      >
        {list5.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo19
```

### 嵌套布局

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo20 = () => {
  const [tab8value, setTab8value] = useState<string | number>('0')
  const [tab9value, setTab9value] = useState<string | number>('0')
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
  )
}
export default Demo20
```

### 嵌套布局 2

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo21 = () => {
  const [tab8value, setTab8value] = useState<string | number>('0')
  const [tab9value, setTab9value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab8value}
        onChange={(value) => {
          setTab8value(value)
        }}
        autoHeight
      >
        <Tabs.TabPane title="Tab 1">
          <Tabs
            value={tab9value}
            onChange={(value) => {
              setTab9value(value)
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
  )
}
export default Demo21
```

### Title 字体尺寸: 20px 12px

```tsx
import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo22 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab1value}
        onChange={(value) => {
          setTab1value(value)
        }}
        style={{ '--nutui-tabs-titles-font-size': '20px' }}
      >
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <Tabs
        value={tab1value}
        onChange={(value) => {
          setTab1value(value)
        }}
        style={{ '--nutui-tabs-titles-font-size': '12px' }}
      >
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo22
```

### 自定义标签栏

```tsx
import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Tabs } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'

const Demo23 = () => {
  const [tab7value, setTab7value] = useState('c1')
  const list6 = [
    {
      title: '自定义 1',
      paneKey: 'c1',
      icon: <Star />,
    },
    {
      title: '自定义 2',
      paneKey: 'c2',
    },
    {
      title: '自定义 3',
      paneKey: 'c3',
    },
  ]
  return (
    <>
      <Tabs
        value={tab7value}
        title={() => {
          return list6.map((item) => (
            <View
              onClick={() => setTab7value(item.paneKey)}
              className={`nut-tabs-titles-item ${tab7value === item.paneKey ? 'nut-tabs-titles-item-active' : ''}`}
              key={item.paneKey}
            >
              {item.icon || null}
              <Text className="nut-tabs-titles-item-text">{item.title}</Text>
              <Text className="nut-tabs-titles-item-line" />
            </View>
          ))
        }}
      >
        {list6.map((item) => (
          <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
            {item.title}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo23
```

## Tabs

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 当前激活 tab 面板的值 | `number` \| `string` | `0` |
| defaultValue | 初始化激活 tab 的值 | `number` \| `string` | `0` |
| activeColor | 标签选中色 | `string` | `#1A1A1A` |
| direction | 使用横纵方向 | `horizontal` \| `vertical` | `horizontal` |
| activeType | 选中底部展示样式 可选值 `line`、`smile`、`simple`、`card`、`button`、`divider` | `line` \| `smile` \| `simple` \| `card` \| `button`\| `divider` | `line` |
| duration | 切换动画时长,单位 ms 0 代表无动画 | `number` \| `string` | `300` |
| title | 自定义导航区域 | `() => JSX.Element[]` | `-` |
| align | 标题对齐方式 | `left` \| `right` | `-` |
| autoHeight | 自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tabpane 的高度而发生变化。 | `boolean` | `false` |
| tabStyle | 标签栏样式 | `CSSProperties` | `{}` |
| onClick | 点击标签时触发 | `(index: string\| number) => void` | `-` |
| onChange | 当前激活的标签改变时触发 | `(index: string \| number) => void` | `-` |

## Tabs.Tabpane

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标题 | `string` | `-` |
| value | 标签 Key , 匹配的标识符, 默认为索引值 | `string` \| `number` | `-` |
| disabled | 是否禁用标签 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-tabs-titles-height | 水平方向标题的高度 | `44px` |
| \--nutui-tabs-titles-background-color | Tab 标题的背景色 | `$color-background` |
| \--nutui-tabs-title-gap | Tab 标题的左右 margin | `0px` |
| \--nutui-tabs-titles-font-size | Tab 标题的字号 | `$font-size-base` |
| \--nutui-tabs-titles-item-min-width | 水平方向标题的最小宽度 | `50px` |
| \--nutui-tabs-titles-item-color | Tab 标题的字色 | `$color-title` |
| \--nutui-tabs-titles-item-active-color | Tab 选中标题的字色 | `$color-primary` |
| \--nutui-tabs-titles-item-active-font-weight | Tab 选中标题的字重 | `$font-weight-bold` |
| \--nutui-tabs-titles-item-active-font-size | Tab 选中标题的字号 | `$font-size-large` |
| \--nutui-tabs-titles-item-active-background-color | 水平方向激活选项卡标题的背景色 | `$color-background-overlay` |
| \--nutui-tabs-tab-line-width | 水平方向激活选项卡线条的宽度 | `12px` |
| \--nutui-tabs-tab-line-height | 水平方向激活选项卡线条的高度 | `2px` |
| \--nutui-tabs-tab-line-color | 水平方向线条颜色 | `$color-primary` |
| \--nutui-tabs-line-bottom | 水平方向线条距离 | `15%` |
| \--nutui-tabs-line-border-radius | 水平方向线的圆角 | `2px` |
| \--nutui-tabs-tab-line-opacity | 水平方向线的透明度 | `1` |
| \--nutui-tabs-vertical-titles-width | 垂直方向标题的宽度 | `100px` |
| \--nutui-tabs-vertical-titles-item-height | 垂直方向标题的高度 | `40px` |
| \--nutui-tabs-vertical-tab-line-color | 垂直方向线条颜色 | `linear-gradient(180deg, $color-primary 0%, rgba(#FF0F23, 0.15) 100%)` |
| \--nutui-tabs-vertical-tab-line-width | 垂直方向标题线条的宽度 | `3px` |
| \--nutui-tabs-vertical-tab-line-height | 垂直方向标题线条的高度 | `12px` |
| \--nutui-tabs-tabpane-padding | Tabpane 的内边距 | `24px 20px` |
| \--nutui-tabs-tabpane-backgroundColor | Tabpane 的背景色 | `#fff` |
