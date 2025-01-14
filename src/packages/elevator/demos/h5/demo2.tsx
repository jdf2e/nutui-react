import React from 'react'
import { Elevator } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
  const dataList = [
    {
      num: '一',
      list: [
        {
          name: t.beijing,
          id: 1,
        },
        {
          name: t.shanghai,
          id: 2,
        },
        {
          name: t.shenzhen,
          id: 3,
        },
        {
          name: t.guangzhou,
          id: 4,
        },
        {
          name: t.hangzhou,
          id: 5,
        },
      ],
    },
    {
      num: '二',
      list: [
        {
          name: t.chengdu,
          id: 6,
        },
        {
          name: t.xian,
          id: 7,
        },
        {
          name: t.tianjin,
          id: 8,
        },
        {
          name: t.wuhan,
          id: 9,
        },
        {
          name: t.changsha,
          id: 10,
        },
        {
          name: t.chongqing,
          id: 11,
        },
        {
          name: t.suzhou,
          id: 12,
        },
        {
          name: t.nanjing,
          id: 13,
        },
      ],
    },
    {
      num: '三',
      list: [
        {
          name: t.xining,
          id: 14,
        },
        {
          name: t.lanzhou,
          id: 15,
        },
        {
          name: t.shijiazhuang,
          id: 16,
        },
        {
          name: t.qinhuangdao,
          id: 17,
        },
        {
          name: t.dalian,
          id: 18,
        },
        {
          name: t.haerbin,
          id: 19,
        },
        {
          name: t.changchun,
          id: 20,
        },
        {
          name: t.taiyuan,
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
      onItemClick={onItemClick}
      onIndexClick={onIndexClick}
    />
  )
}

export default withTranslation(Demo2)
