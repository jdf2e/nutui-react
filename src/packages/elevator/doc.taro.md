# Elevator 电梯楼层

### 介绍

用于列表快速定位以及索引的显示

### 安装

```javascript
import { Elevator } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基本用法

:::demo

```tsx
import React from 'react'
import { Elevator } from '@nutui/nutui-react-taro'

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
  const onClickItem = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onClickIndex = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      indexList={dataList}
      height="260"
      onClickItem={(key: string, item: any) => onClickItem(key, item)}
      onClickIndex={(key: string) => onClickIndex(key)}
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
import { Elevator } from '@nutui/nutui-react-taro'

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
  const onClickItem = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onClickIndex = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      indexList={dataList}
      height="220"
      acceptKey="num"
      onClickItem={(key: string, item: any) => onClickItem(key, item)}
      onClickIndex={(key: string) => onClickIndex(key)}
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
import { Elevator } from '@nutui/nutui-react-taro'

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
  const onClickItem = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onClickIndex = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      indexList={dataList}
      height="220"
      isSticky
      onClickItem={(key: string, item: any) => onClickItem(key, item)}
      onClickIndex={(key: string) => onClickIndex(key)}
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
import { Elevator } from '@nutui/nutui-react-taro'
import { Jd } from '@nutui/icons-react-taro'

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
  const onClickItem = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onClickIndex = (key: string) => {
    console.log(key)
  }
  return (
    <Elevator
      indexList={dataList}
      height="260"
      onClickItem={(key: string, item: any) => onClickItem(key, item)}
      onClickIndex={(key: string) => onClickIndex(key)}
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

## API

### Props

| 字段                  | 说明           | 类型                                                        | 默认值                |
|---------------------| -------------- | ----------------------------------------------------------- | --------------------- |
| height              | 电梯区域的高度 | number \| string                                              | `200px`               |
| acceptKey           | 索引 key 值    | string                                                      | `title`               |
| indexList           | 索引列表       | Array（item 需包含 id、name 属性, name 支持传入 html 结构） | `[{id: 0, name: ''}]` |
| isSticky    | 索引是否吸顶                                                    | boolean  | `false` |
| spaceHeight | 右侧锚点的上下间距                                                   | number  | `23` |
| titleHeight   | 左侧索引的高度                                                     | number  | `35` |

### Event

| 名称       | 说明     | 回调参数                               |
| ---------- | -------- | -------------------------------------- |
| onClickItem  | 点击内容 | `key: string, item: { id: 0, name: '' }` |
| onClickIndex | 点击索引 | `key: string`                            |
| clickItem  | 点击内容 | `key: string, item: { id: 0, name: '' }` |
| clickIndex | 点击索引 | `key: string`                            |



## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-elevator-list-inner-bg-color | `$gray6` |
| --nutui-elevator-list-item-highcolor | `$primary-color` |
| --nutui-elevator-list-item-font-size | `12px` |
| --nutui-elevator-list-item-font-color | `$gray1` |
| --nutui-elevator-list-item-name-padding | `0 20px` |
| --nutui-elevator-list-item-name-height | `30px` |
| --nutui-elevator-list-item-name-line-height | `30px` |
| --nutui-elevator-list-item-code-font-size | `14px` |
| --nutui-elevator-list-item-code-font-color | `$gray1` |
| --nutui-elevator-list-item-code-font-weight | `500` |
| --nutui-elevator-list-item-code-padding | `0 20px` |
| --nutui-elevator-list-item-code-height | `35px` |
| --nutui-elevator-list-item-code-line-height | `35px` |
| --nutui-elevator-list-item-code-after-height | `1px` |
| --nutui-elevator-list-item-code-after-bg-color | `#f5f5f5` |
| --nutui-elevator-list-item-code-current-bg-color | `#fff` |
| --nutui-elevator-list-item-code-current-width | `45px` |
| --nutui-elevator-list-item-code-current-height | `45px` |
| --nutui-elevator-list-item-code-current-line-height | `45px` |
| --nutui-elevator-list-item-code-current-position | `absolute` |
| --nutui-elevator-list-item-code-current-right | `60px` |
| --nutui-elevator-list-item-code-current-text-align | `center` |
| --nutui-elevator-list-item-bars-position | `absolute` |
| --nutui-elevator-list-item-bars-right | `8px` |
| --nutui-elevator-list-item-bars-padding | `15px 0` |
| --nutui-elevator-list-item-bars-background-color | `#eeeff2` |
| --nutui-elevator-list-item-bars-border-radius | `6px` |
| --nutui-elevator-list-item-bars-text-align | `center` |
| --nutui-elevator-list-item-bars-z-index | `1` |
| --nutui-elevator-list-item-bars-inner-item-padding | `3px` |
| --nutui-elevator-list-item-bars-inner-item-font-size | `10px` |
| --nutui-elevator-list-fixed-color | `$primary-color` |
| --nutui-elevator-list-fixed-bg-color | `$white` |
| --nutui-elevator-list-fixed-box-shadow | `0 0 10px #eee` |
| --nutui-elevator-list-item-bars-inner-item-active-color | `$primary-color` |
