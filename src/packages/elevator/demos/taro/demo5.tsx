import React from 'react'
import { Elevator } from '@nutui/nutui-react-taro'
import { Fabulous } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Demo5 = () => {
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
          name: '甘肃',
          id: 31,
        },
        {
          name: '广东',
          id: 32,
        },
        {
          name: '广东',
          id: 33,
        },
        {
          name: '贵州',
          id: 34,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: '湖南',
          id: 41,
        },
        {
          name: '湖北',
          id: 42,
        },
        {
          name: '湖北',
          id: 43,
        },
        {
          name: '湖南',
          id: 44,
        },
        {
          name: '海南',
          id: 45,
        },
      ],
    },
    {
      title: 'S',
      list: [
        {
          name: '山东',
          id: 51,
        },
        {
          name: '山西',
          id: 52,
        },
        {
          name: '上海',
          id: 53,
        },
        {
          name: '陕西',
          id: 54,
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
      className="test-elevator5"
      list={dataList}
      height="260"
      onItemClick={(key: string, item: any) => onItemClick(key, item)}
      onIndexClick={(key: string) => onIndexClick(key)}
    >
      <Elevator.Context.Consumer>
        {(value) => {
          return (
            <>
              <Text>{value?.name}</Text>
              <Fabulous style={{ marginLeft: '4px' }} height={12} />
            </>
          )
        }}
      </Elevator.Context.Consumer>
    </Elevator>
  )
}
export default Demo5
