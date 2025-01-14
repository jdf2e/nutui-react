import React from 'react'
import { Elevator } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo3 = ({ t }: propsType) => {
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
      title: 'G',
      list: [
        {
          name: t.guangxi,
          id: 3,
        },
        {
          name: t.guangdong,
          id: 4,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: t.hunan,
          id: 5,
        },
        {
          name: t.hubei,
          id: 6,
        },
        {
          name: t.henan,
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
      onItemClick={onItemClick}
      onIndexClick={onIndexClick}
    />
  )
}

export default withTranslation(Demo3)
