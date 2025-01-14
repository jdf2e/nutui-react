import React from 'react'
import { Elevator } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo4 = ({ t }: propsType) => {
  const dataList = [
    {
      title: 'A',
      list: [
        {
          name: t.anhui,
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: t.beijing,
          id: 2,
        },
      ],
    },
    {
      title: 'C',
      list: [
        {
          name: t.chongqing,
          id: 3,
        },
      ],
    },
    {
      title: 'F',
      list: [
        {
          name: t.fujian,
          id: 4,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: t.guangxi,
          id: 5,
        },
        {
          name: t.guangdong,
          id: 6,
        },
        {
          name: t.gansu,
          id: 7,
        },
        {
          name: t.guizhou,
          id: 8,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: t.hunan,
          id: 9,
        },
        {
          name: t.hubei,
          id: 10,
        },
        {
          name: t.hainan,
          id: 11,
        },
        {
          name: t.hebei,
          id: 12,
        },
        {
          name: t.henan,
          id: 13,
        },
        {
          name: t.heilongjiang,
          id: 14,
        },
      ],
    },
    {
      title: 'J',
      list: [
        {
          name: t.jilin,
          id: 15,
        },
        {
          name: t.jiangsu,
          id: 16,
        },
        {
          name: t.jiangxi,
          id: 17,
        },
      ],
    },
    {
      title: 'L',
      list: [
        {
          name: t.liaoning,
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
      onItemClick={onItemClick}
      onIndexClick={onIndexClick}
    />
  )
}

export default withTranslation(Demo4)
