# Elevator 電梯樓層

## 介紹

用於列錶快速定位以及索引的顯示

## 安裝

```tsx
import { Elevator } from '@nutui/nutui-react-taro'
```

## 代碼演示

### 基礎用法

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

### 自定義索引

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
          name: '西寧',
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

### 不展示右側導航

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

### 吸頂索引

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
          name: '遼寧',
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

### 自定義內容

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
              <Jd size={12} />
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| height | 電梯區域的高度 | `number` \| `string` | `200px` |
| floorKey | 索引 key 值 | `string` | `title` |
| list | 索引列錶 | `Array（item 需包含 id、name 屬性, name 支持傳入 html 結構）` | `[{id: 0, name: ''}]` |
| sticky | 索引是否吸頂 | `boolean` | `false` |
| showKeys | 展示右側導航 | `boolean` | `true` |
| spaceHeight | 右側錨點的上下間距 | `number` | `23` |
| titleHeight | 左側索引的高度 | `number` | `35` |
| onItemClick | 點擊內容 | `onItemClick:(key: string, item: { id: number, name: string })=>void` | `false` |
| onIndexClick | 點擊索引 | `onIndexClick:(key: string)=>void` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-elevator-list-bg-color | 樓層區域背景顏色 | `$white` |
| \--nutui-elevator-list-font-size | 樓層區域列錶項字體大小 | `$font-size-small` |
| \--nutui-elevator-list-color | 樓層區域列錶項字體顏色 | `$color-title` |
| \--nutui-elevator-list-item-padding | 樓層區域列錶項內邊距 | `0 20px` |
| \--nutui-elevator-list-item-name-height | 樓層區域列錶項高度 | `30px` |
| \--nutui-elevator-list-item-name-line-height | 樓層區域列錶項行高 | `30px` |
| \--nutui-elevator-list-item-code-font-size | 樓層區域列錶項標題字體大小 | `$font-size` |
| \--nutui-elevator-list-item-code-color | 樓層區域列錶項標題顏色 | `$color-title` |
| \--nutui-elevator-list-item-code-font-weight | 樓層區域列錶項標題字體粗細 | `$font-weight-bold` |
| \--nutui-elevator-list-item-code-height | 樓層區域列錶項標題高度 | `35px` |
| \--nutui-elevator-list-item-code-line-height | 樓層區域列錶項標題行高 | `35px` |
| \--nutui-elevator-list-item-code-border-bottom | 樓層區域列錶項標題下邊框寬度 | `1px solid $color-border` |
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
| \--nutui-elevator-bars-inner-item-font-size | 電梯樓層標識項字體大小 | `10px` |
| \--nutui-elevator-list-fixed-color | 吸頂樓層文字顏色 | `$color-primary` |
| \--nutui-elevator-list-fixed-bg-color | 吸頂樓層背景顏色 | `$white` |
| \--nutui-elevator-list-fixed-box-shadow | 吸頂樓層陰影 | `0 0 10px #eee` |