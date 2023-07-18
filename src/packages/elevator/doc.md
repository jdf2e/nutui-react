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
      pagation={false}
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
| \--nutui-elevator-list-inner-bg-color | 楼层区域背景颜色 | `$white` |
| \--nutui-elevator-list-item-highcolor | 楼层区域列表项字体高亮颜色 | `$color-primary` |
| \--nutui-elevator-list-item-font-size | 楼层区域列表项字体大小 | `12px` |
| \--nutui-elevator-list-item-font-color | 楼层区域列表项字体颜色 | `$color-title` |
| \--nutui-elevator-list-item-name-padding | 楼层区域列表项内边距 | `0 20px` |
| \--nutui-elevator-list-item-name-height | 楼层区域列表项高度 | `30px` |
| \--nutui-elevator-list-item-name-line-height | 楼层区域列表项行高 | `30px` |
| \--nutui-elevator-list-item-code-font-size | 楼层区域列表项标题字体大小 | `14px` |
| \--nutui-elevator-list-item-code-font-color | 楼层区域列表项标题颜色 | `$color-title` |
| \--nutui-elevator-list-item-code-font-weight | 楼层区域列表项标题字体粗细 | `500` |
| \--nutui-elevator-list-item-code-padding | 楼层区域列表项标题内边距 | `0 20px` |
| \--nutui-elevator-list-item-code-height | 楼层区域列表项标题高度 | `35px` |
| \--nutui-elevator-list-item-code-line-height | 楼层区域列表项标题行高 | `35px` |
| \--nutui-elevator-list-item-code-border-bottom | 楼层区域列表项标题下边框宽度 | `1px` |
| \--nutui-elevator-list-item-code-border-bottom-color | 楼层区域列表项标题下边框颜色 | `#f5f5f5` |
| \--nutui-elevator-list-item-code-current-bg-color | 电梯提示背景颜色 | `#fff` |
| \--nutui-elevator-list-item-code-current-width | 电梯提示宽度 | `45px` |
| \--nutui-elevator-list-item-code-current-height | 电梯提示高度 | `45px` |
| \--nutui-elevator-list-item-code-current-line-height | 电梯提示行高 | `45px` |
| \--nutui-elevator-list-item-code-current-position | 电梯提示定位类型 | `absolute` |
| \--nutui-elevator-list-item-code-current-right | 电梯提示定位后右边缘位置 | `60px` |
| \--nutui-elevator-list-item-code-current-text-align | 电梯提示文字对齐方式 | `center` |
| \--nutui-elevator-list-item-bars-position | 电梯楼层定位类型 | `absolute` |
| \--nutui-elevator-list-item-bars-right | 电梯楼层定位后右边缘位置 | `8px` |
| \--nutui-elevator-list-item-bars-padding | 电梯楼层内边距 | `15px 0` |
| \--nutui-elevator-list-item-bars-background-color | 电梯楼层背景颜色 | `#eeeff2` |
| \--nutui-elevator-list-item-bars-border-radius | 电梯楼层圆角大小 | `6px` |
| \--nutui-elevator-list-item-bars-text-align | 电梯楼层文字对齐方式 | `center` |
| \--nutui-elevator-list-item-bars-inner-item-active-color | 电梯楼层高亮文字颜色 | `$color-primary` |
| \--nutui-elevator-list-item-bars-z-index | 电梯楼层层级 | `1` |
| \--nutui-elevator-list-item-bars-inner-item-padding | 电梯楼层标识项内边距 | `3px` |
| \--nutui-elevator-list-item-bars-inner-item-font-size | 电梯楼层标识项字体大小 | `10px` |
| \--nutui-elevator-list-fixed-color | 吸顶楼层文字颜色 | `$color-primary` |
| \--nutui-elevator-list-fixed-bg-color | 吸顶楼层背景颜色 | `$white` |
| \--nutui-elevator-list-fixed-box-shadow | 吸顶楼层阴影 | `0 0 10px #eee` |