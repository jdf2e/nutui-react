# Elevator

### Intro


It is used to quickly locate the list and display the index

### Install

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


### Custom Content

:::demo

```tsx
import React from 'react'
import { Elevator, Icon } from '@nutui/nutui-react'

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
      indexList={dataList}
      height="260"
      onClickItem={(key: string, item: any) => onClickItem(key, item)}
      onClickIndex={(key: string) => onClickIndex(key)}
    >
      <Elevator.Context.Consumer>
        {(value) => {
          return (
            <>
              <Icon name="JD" size="12" />
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

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| height                 | Height of elevator area                                                    | Number、String  | `200px`
| acceptKey             | Index key value                                                      | String  | `title` |
| indexList             | Index list                                                         | Array（`item` needs to contain `id` and `name` attributes, and `name` supports passing in `html` structure）  | `[{id: 0, name: ''}]` |
| isSticky`v1.2.1`            | Whether the index is ceiling                                                    | Boolean  | `false` |
| spaceHeight`v1.2.1`             | Up and down spacing of right anchor point              | Number  | `23` |
| titleHeight`v1.2.1`             | Height of left index                                                     | Number  | `35` |

### Event

| Event  | Description     | Arguments    |
|-------|----------|-------------|
| onClickItem`v1.3.2` | Click content | key: string, item: { id: 0, name: '' } |
| onClickIndex`v1.3.2` | Click index | key: string |
| clickItem`v1.3.2 废弃` | Click content | key: string, item: { id: 0, name: '' } |
| clickIndex`v1.3.2 废弃` | Click index | key: string |



## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-elevator-list-inner-bg-color | `  $gray6` |
| --nutui-elevator-list-item-highcolor | `  $primary-color` |
| --nutui-elevator-list-item-font-size | `  12px` |
| --nutui-elevator-list-item-font-color | `  $gray1` |
| --nutui-elevator-list-item-name-padding | `  0 20px` |
| --nutui-elevator-list-item-name-height | `  30px` |
| --nutui-elevator-list-item-name-line-height | `  30px` |
| --nutui-elevator-list-item-code-font-size | `  14px` |
| --nutui-elevator-list-item-code-font-color | `  $gray1` |
| --nutui-elevator-list-item-code-font-weight | `  500` |
| --nutui-elevator-list-item-code-padding | `  0 20px` |
| --nutui-elevator-list-item-code-height | `  35px` |
| --nutui-elevator-list-item-code-line-height | `  35px` |
| --nutui-elevator-list-item-code-after-height | `  1px` |
| --nutui-elevator-list-item-code-after-bg-color | `  #f5f5f5` |
| --nutui-elevator-list-item-code-current-bg-color | `  #fff` |
| --nutui-elevator-list-item-code-current-width | `  45px` |
| --nutui-elevator-list-item-code-current-height | `  45px` |
| --nutui-elevator-list-item-code-current-line-height | `  45px` |
| --nutui-elevator-list-item-code-current-position | `  absolute` |
| --nutui-elevator-list-item-code-current-right | `  60px` |
| --nutui-elevator-list-item-code-current-text-align | `  center` |
| --nutui-elevator-list-item-bars-position | `  absolute` |
| --nutui-elevator-list-item-bars-right | `  8px` |
| --nutui-elevator-list-item-bars-padding | `  15px 0` |
| --nutui-elevator-list-item-bars-background-color | `  #eeeff2` |
| --nutui-elevator-list-item-bars-border-radius | `  6px` |
| --nutui-elevator-list-item-bars-text-align | `  center` |
| --nutui-elevator-list-item-bars-z-index | `  1` |
| --nutui-elevator-list-item-bars-inner-item-padding | `  3px` |
| --nutui-elevator-list-item-bars-inner-item-font-size | `  10px` |
| --nutui-elevator-list-fixed-color | `  $primary-color` |
| --nutui-elevator-list-fixed-bg-color | `  $white` |
| --nutui-elevator-list-fixed-box-shadow | `  0 0 10px #eee` |
| --nutui-elevator-list-item-bars-inner-item-active-color | `  $primary-color` |
