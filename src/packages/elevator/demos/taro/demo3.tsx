import React from 'react'
import { Elevator } from '@nutui/nutui-react-taro'

const Demo3 = () => {
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
      title: 'L',
      list: [
        {
          name: '辽宁',
          id: 51,
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
export default Demo3
