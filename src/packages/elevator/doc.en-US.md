# Elevator

## Intro


It is used to quickly locate the list and display the index

## Install

```javascript
// react
import { Elevator } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

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
          name: 'AnHui',
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: 'BeiJing',
          id: 2,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: 'GuangXi',
          id: 3,
        },
        {
          name: 'GuangDong',
          id: 4,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: 'HuNan',
          id: 5,
        },
        {
          name: 'HuBei',
          id: 6,
        },
        {
          name: 'Henan',
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
      list={dataList}
      height="260"
      onClickItem={(key: string, item: any) => onClickItem(key, item)}
      onClickIndex={(key: string) => onClickIndex(key)}
    />
  )
}
export default App
```

:::

### Custom index

:::demo

```tsx
import React from 'react'
import { Elevator } from '@nutui/nutui-react'

const App = () => {
  const dataList = [
    {
      num: 'One',
      list: [
        {
          name: 'BeiJing',
          id: 1,
        },
        {
          name: 'ShangHai',
          id: 2,
        },
        {
          name: 'ShenZhen',
          id: 3,
        },
        {
          name: 'GuangZhou',
          id: 4,
        },
        {
          name: 'HangZhou',
          id: 5,
        },
      ],
    },
    {
      num: 'Two',
      list: [
        {
          name: 'ChengDu',
          id: 6,
        },
        {
          name: 'XiAn',
          id: 7,
        },
        {
          name: 'TianJin',
          id: 8,
        },
        {
          name: 'WuHan',
          id: 9,
        },
        {
          name: 'ChangSha',
          id: 10,
        },
        {
          name: 'ChongQin',
          id: 11,
        },
        {
          name: 'SuZhou',
          id: 12,
        },
        {
          name: 'NanJing',
          id: 13,
        },
      ],
    },
    {
      num: 'Three',
      list: [
        {
          name: 'XiNing',
          id: 14,
        },
        {
          name: 'LanZhou',
          id: 15,
        },
        {
          name: 'ShiJiaZhuang',
          id: 16,
        },
        {
          name: 'QinHuangDao',
          id: 17,
        },
        {
          name: 'DaLian',
          id: 18,
        },
        {
          name: 'HaErBin',
          id: 19,
        },
        {
          name: 'ChangChun',
          id: 20,
        },
        {
          name: 'TaiYuan',
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
      list={dataList}
      height="220"
      floorKey="num"
      onClickItem={(key: string, item: any) => onClickItem(key, item)}
      onClickIndex={(key: string) => onClickIndex(key)}
    />
  )
}
export default App
```

:::

### Index ceiling

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
          name: 'AnHui',
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: 'BeiJing',
          id: 2,
        },
      ],
    },
    {
      title: 'C',
      list: [
        {
          name: 'ChongQin',
          id: 3,
        },
      ],
    },
    {
      title: 'F',
      list: [
        {
          name: 'FuJian',
          id: 4,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: 'GuangXi',
          id: 5,
        },
        {
          name: 'GuangDong',
          id: 6,
        },
        {
          name: 'GanSu',
          id: 7,
        },
        {
          name: 'GuiZhou',
          id: 8,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: 'HuNan',
          id: 9,
        },
        {
          name: 'HuBei',
          id: 10,
        },
        {
          name: 'HaiNan',
          id: 11,
        },
        {
          name: 'HeBei',
          id: 12,
        },
        {
          name: 'HeNan',
          id: 13,
        },
        {
          name: 'HeiLongJiang',
          id: 14,
        },
      ],
    },
    {
      title: 'J',
      list: [
        {
          name: 'JiLin',
          id: 15,
        },
        {
          name: 'JiangSu',
          id: 16,
        },
        {
          name: 'JiangXi',
          id: 17,
        },
      ],
    },
    {
      title: 'L',
      list: [
        {
          name: 'LiaoNing',
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
      list={dataList}
      height="220"
      sticky
      onClickItem={(key: string, item: any) => onClickItem(key, item)}
      onClickIndex={(key: string) => onClickIndex(key)}
    />
  )
}
export default App
```

:::


### Custom Content

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
          name: 'AnHui',
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: 'BeiJing',
          id: 2,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: 'GuangXi',
          id: 3,
        },
        {
          name: 'GuangDong',
          id: 4,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: 'HuNan',
          id: 5,
        },
        {
          name: 'HuBei',
          id: 6,
        },
        {
          name: 'Henan',
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
      list={dataList}
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

## Elevator

### Props

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| height                 | Height of elevator area                                                    | number \| string  | `200px`
| floorKey             | Index key value                                                      | string  | `title` |
| list             | Index list                                                         | Array（`item` needs to contain `id` and `name` attributes, and `name` supports passing in `html` structure）  | `[{id: 0, name: ''}]` |
| sticky            | Whether the index is ceiling                                                    | boolean  | `false` |
| spaceHeight             | Up and down spacing of right anchor point              | number  | `23` |
| titleHeight             | Height of left index                                                     | number  | `35` |
| onClickItem  | Click content | `onClickItem:(key: string, item: { id: number, name: string })=>void` |`false`|
| onClickIndex | Click index | `onClickIndex:(key: string)=>void`                            |`false`|

