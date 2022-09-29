# Elevator 電梯樓層

### 介紹

用于列表快速定位以及索引的顯示

### 安裝

```javascript
import { Elevator } from '@nutui/nutui-react'
```

## 代碼演示

### 基本用法

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
          name: '廣西',
          id: 3,
        },
        {
          name: '廣東',
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

### 自定義索引


:::demo

```tsx
import React from 'react'
import { Elevator } from '@nutui/nutui-react'

const App = () => {
  const dataList = [
    {
      num: '壹',
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
          name: '廣州',
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
          name: '武漢',
          id: 9,
        },
        {
          name: '長沙',
          id: 10,
        },
        {
          name: '重慶',
          id: 11,
        },
        {
          name: '蘇州',
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
          name: '西甯',
          id: 14,
        },
        {
          name: '蘭州',
          id: 15,
        },
        {
          name: '石家莊',
          id: 16,
        },
        {
          name: '秦皇島',
          id: 17,
        },
        {
          name: '大連',
          id: 18,
        },
        {
          name: '哈爾濱',
          id: 19,
        },
        {
          name: '長春',
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

### 吸頂索引

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
          name: '重慶',
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
          name: '廣西',
          id: 5,
        },
        {
          name: '廣東',
          id: 6,
        },
        {
          name: '甘肅',
          id: 7,
        },
        {
          name: '貴州',
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
          name: '黑龍江',
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
          name: '江蘇',
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
          name: '遼甯',
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


### 自定義內容

:::demo

```tsx
import React from 'react'
import { Elevator, elevatorContext, Icon } from '@nutui/nutui-react'

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
          name: '廣西',
          id: 3,
        },
        {
          name: '廣東',
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
      <elevatorContext.Consumer>
        {(value) => {
          return (
            <>
              <Icon name="JD" size="12" />
              <span style={{ marginLeft: '15px' }}>{value?.name}</span>
            </>
          )
        }}
      </elevatorContext.Consumer>
    </Elevator>
  )
}
export default App
```

:::

## API

### Props

| 字段      | 說明           | 類型                                                        | 默認值                |
| --------- | -------------- | ----------------------------------------------------------- | --------------------- |
| height    | 電梯區域的高度 | Number、String                                              | `200px`               |
| acceptKey | 索引 key 值    | String                                                      | `title`               |
| indexList | 索引列表       | Array（item 需包含 id、name 屬性, name 支持傳入 html 結構） | `[{id: 0, name: ''}]` |
| isSticky`v1.2.1`    | 索引是否吸頂                                                    | Boolean  | `false` |
| spaceHeight`v1.2.1` | 右側錨點的上下間距                                                   | Number  | `23` |
| titleHeight`v1.2.1`   | 左側索引的高度                                                     | Number  | `35` |

### Event

| 名稱       | 說明     | 回調參數                               |
| ---------- | -------- | -------------------------------------- |
| onClickItem`v1.3.2`  | 點擊內容 | key: string, item: { id: 0, name: '' } |
| onClickIndex`v1.3.2` | 點擊索引 | key: string                            |
| clickItem`v1.3.2(废弃)`  | 點擊內容 | key: string, item: { id: 0, name: '' } |
| clickIndex`v1.3.2(废弃)` | 點擊索引 | key: string                            |
