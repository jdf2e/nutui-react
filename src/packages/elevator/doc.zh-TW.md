# Elevator 电梯楼层

## 介绍

用于列表快速定位以及索引的显示

## 安装

```tsx
import { Elevator } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from 'react'
import { Elevator } from '@nutui/nutui-react'

const App = () => {
  const dataList = [
    {
      title: 'A',
      list: [
        {
          name: '安徽',
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: '北京',
          id: 2,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: '广西',
          id: 3,
        },
        {
          name: '广东',
          id: 4,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: '湖南',
          id: 5,
        },
        {
          name: '湖北',
          id: 6,
        },
        {
          name: '河南',
          id: 7,
        },
      ],
    },
  ]
  const onItemClick = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      list={dataList}
      height="260"
      onItemClick={(key: string, item: any) => onItemClick(key, item)}
      onIndexClick={(key: string) => onIndexClick(key)}
    />
  )
}
export default App
```

:::

### 自定义索引

:::demo

```tsx
import React from 'react'
import { Elevator } from '@nutui/nutui-react'

const App = () => {
  const dataList = [
    {
      num: '一',
      list: [
        {
          name: '北京',
          id: 1,
        },
        {
          name: '上海',
          id: 2,
        },
        {
          name: '深圳',
          id: 3,
        },
        {
          name: '广州',
          id: 4,
        },
        {
          name: '杭州',
          id: 5,
        },
      ],
    },
    {
      num: '二',
      list: [
        {
          name: '成都',
          id: 6,
        },
        {
          name: '西安',
          id: 7,
        },
        {
          name: '天津',
          id: 8,
        },
        {
          name: '武汉',
          id: 9,
        },
        {
          name: '长沙',
          id: 10,
        },
        {
          name: '重庆',
          id: 11,
        },
        {
          name: '苏州',
          id: 12,
        },
        {
          name: '南京',
          id: 13,
        },
      ],
    },
    {
      num: '三',
      list: [
        {
          name: '西宁',
          id: 14,
        },
        {
          name: '兰州',
          id: 15,
        },
        {
          name: '石家庄',
          id: 16,
        },
        {
          name: '秦皇岛',
          id: 17,
        },
        {
          name: '大连',
          id: 18,
        },
        {
          name: '哈尔滨',
          id: 19,
        },
        {
          name: '长春',
          id: 20,
        },
        {
          name: '太原',
          id: 21,
        },
      ],
    },
  ]
  const onItemClick = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      list={dataList}
      height="220"
      floorKey="num"
      onItemClick={(key: string, item: any) => onItemClick(key, item)}
      onIndexClick={(key: string) => onIndexClick(key)}
    />
  )
}
export default App
```

:::

### 不展示右侧导航

:::demo

```tsx
import React from 'react'
import { Elevator } from '@nutui/nutui-react'

const App = () => {
  const dataList = [
    {
      title: 'A',
      list: [
        {
          name: '安徽',
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: '北京',
          id: 2,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: '广西',
          id: 3,
        },
        {
          name: '广东',
          id: 4,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: '湖南',
          id: 5,
        },
        {
          name: '湖北',
          id: 6,
        },
        {
          name: '河南',
          id: 7,
        },
      ],
    },
  ]
  const onItemClick = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      showKeys={false}
      list={dataList}
      height="260"
      onItemClick={(key: string, item: any) => onItemClick(key, item)}
      onIndexClick={(key: string) => onIndexClick(key)}
    />
  )
}
export default App
```

:::

### 吸顶索引

:::demo

```tsx
import React from 'react'
import { Elevator } from '@nutui/nutui-react'

const App = () => {
  const dataList = [
    {
      title: 'A',
      list: [
        {
          name: '安徽',
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: '北京',
          id: 2,
        },
      ],
    },
    {
      title: 'C',
      list: [
        {
          name: '重庆',
          id: 3,
        },
      ],
    },
    {
      title: 'F',
      list: [
        {
          name: '福建',
          id: 4,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: '广西',
          id: 5,
        },
        {
          name: '广东',
          id: 6,
        },
        {
          name: '甘肃',
          id: 7,
        },
        {
          name: '贵州',
          id: 8,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: '湖南',
          id: 9,
        },
        {
          name: '湖北',
          id: 10,
        },
        {
          name: '海南',
          id: 11,
        },
        {
          name: '河北',
          id: 12,
        },
        {
          name: '河南',
          id: 13,
        },
        {
          name: '黑龙江',
          id: 14,
        },
      ],
    },
    {
      title: 'J',
      list: [
        {
          name: '吉林',
          id: 15,
        },
        {
          name: '江苏',
          id: 16,
        },
        {
          name: '江西',
          id: 17,
        },
      ],
    },
    {
      title: 'L',
      list: [
        {
          name: '辽宁',
          id: 18,
        },
      ],
    },
  ]
  const onItemClick = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      list={dataList}
      height="220"
      sticky
      onItemClick={(key: string, item: any) => onItemClick(key, item)}
      onIndexClick={(key: string) => onIndexClick(key)}
    />
  )
}
export default App
```

:::

### 自定义内容

:::demo

```tsx
import React from 'react'
import { Elevator } from '@nutui/nutui-react'
import { Jd } from '@nutui/icons-react'

const App = () => {
  const dataList = [
    {
      title: 'A',
      list: [
        {
          name: '安徽',
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: '北京',
          id: 2,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: '广西',
          id: 3,
        },
        {
          name: '广东',
          id: 4,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: '湖南',
          id: 5,
        },
        {
          name: '湖北',
          id: 6,
        },
        {
          name: '河南',
          id: 7,
        },
      ],
    },
  ]
  const onItemClick = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      list={dataList}
      height="260"
      onItemClick={(key: string, item: any) => onItemClick(key, item)}
      onIndexClick={(key: string) => onIndexClick(key)}
    >
      <Elevator.Context.Consumer>
        {(value) => {
          return (
            <>
              <Jd width={12} height={12} />
              <span style={{ marginLeft: '15px' }}>{value?.name}</span>
            </>
          )
        }}
      </Elevator.Context.Consumer>
    </Elevator>
  )
}
export default App
```

:::

## Elevator

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 电梯区域的高度 | `number` \| `string` | `200px` |
| floorKey | 索引 key 值 | `string` | `title` |
| list | 索引列表 | `Array（item 需包含 id、name 属性, name 支持传入 html 结构）` | `[{id: 0, name: ''}]` |
| sticky | 索引是否吸顶 | `boolean` | `false` |
| showKeys | 展示右侧导航 | `boolean` | `true` |
| spaceHeight | 右侧锚点的上下间距 | `number` | `23` |
| titleHeight | 左侧索引的高度 | `number` | `35` |
| onItemClick | 点击内容 | `onItemClick:(key: string, item: { id: number, name: string })=>void` | `false` |
| onIndexClick | 点击索引 | `onIndexClick:(key: string)=>void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-elevator-list-bg-color | 樓層區域背景顏色 | `$white` |
| \--nutui-elevator-list-font-size | 樓層區域列表項字體大小 | `$font-size-small` |
| \--nutui-elevator-list-color | 樓層區域列表項字體顏色 | `$color-title` |
| \--nutui-elevator-list-item-padding | 樓層區域列表項內邊距 | `0 20px` |
| \--nutui-elevator-list-item-name-height | 樓層區域列表項高度 | `30px` |
| \--nutui-elevator-list-item-name-line-height | 樓層區域列表項行高 | `30px` |
| \--nutui-elevator-list-item-code-font-size | 樓層區域列表項標題字體大小 | `$font-size-base` |
| \--nutui-elevator-list-item-code-color | 樓層區域列表項標題顏色 | `$color-title` |
| \--nutui-elevator-list-item-code-font-weight | 樓層區域列表項標題字體粗細 | `$font-weight-bold` |
| \--nutui-elevator-list-item-code-height | 樓層區域列表項標題高度 | `35px` |
| \--nutui-elevator-list-item-code-line-height | 樓層區域列表項標題行高 | `35px` |
| \--nutui-elevator-list-item-code-border-bottom | 樓層區域列表項標題下邊框寬度 | `1px solid $color-border` |
| \--nutui-elevator-list-item-code-background-color | 樓層區域列表項標題背景色 | `inherit` |
| \--nutui-elevator-list-item-code-current-bg-color | 電梯提示背景顏色 | `#fff` |
| \--nutui-elevator-list-item-code-current-border-radius | 電梯提示圓角 | `50%` |
| \--nutui-elevator-list-item-code-current-width | 電梯提示寬度 | `45px` |
| \--nutui-elevator-list-item-code-current-height | 電梯提示高度 | `45px` |
| \--nutui-elevator-list-item-code-current-line-height | 電梯提示行高 | `45px` |
| \--nutui-elevator-list-item-code-current-right | 電梯提示定位後右邊緣位置 | `60px` |
| \--nutui-elevator-list-item-code-current-top | 電梯提示定位後top邊緣位置 | `50%` |
| \--nutui-elevator-list-item-code-current-text-align | 電梯提示文字對齊方式 | `center` |
| \--nutui-elevator-bars-right | 電梯樓層定位後右邊緣位置 | `10px` |
| \--nutui-elevator-bars-top | 電梯樓層定位後頂部邊緣位置 | `50%` |
| \--nutui-elevator-bars-transform | 電梯樓層定位後滑動距離 | `translateY(-50%)` |
| \--nutui-elevator-bars-padding | 電梯樓層內邊距 | `15px 0` |
| \--nutui-elevator-bars-background-color | 電梯樓層背景顏色 | `#eeeff2` |
| \--nutui-elevator-bars-border-radius | 電梯樓層圓角大小 | `6px` |
| \--nutui-elevator-bars-active-color | 電梯樓層高亮文字顏色 | `$color-primary` |
| \--nutui-elevator-bars-z-index | 電梯樓層層級 | `1` |
| \--nutui-elevator-bars-inner-item-padding | 電梯樓層標識項內邊距 | `3px` |
| \--nutui-elevator-bars-font-size | 電梯樓層標識項字體大小 | `10px` |
| \--nutui-elevator-list-fixed-color | 吸頂樓層文字顏色 | `$color-primary` |
| \--nutui-elevator-list-fixed-bg-color | 吸頂樓層背景顏色 | `$white` |
| \--nutui-elevator-list-fixed-box-shadow | 吸頂樓層陰影 | `0 0 10px #eee` |
