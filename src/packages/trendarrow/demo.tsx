import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import { TrendArrow } from './trendarrow'
import Cell from '../cell'
import './demo.scss'
import { Failure, Success } from '@nutui/icons-react'

interface T {
  basic: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title7: string
}
const TrendArrowDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      title1: '改变文字颜色',
      title2: '指定小数位',
      title3: '箭头在前面',
      title4: '显示正负号',
      title5: '是否展示0',
      title6: '自定义颜色',
      title7: '自定义图标',
    },
    'zh-TW': {
      basic: '基础用法',
      title1: '改变文字颜色',
      title2: '指定小数位',
      title3: '箭头在前面',
      title4: '显示正负号',
      title5: '是否展示0',
      title6: '自定义颜色',
      title7: '自定义图标',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Change text color',
      title2: 'Specify decimal places',
      title3: 'Arrow ahead',
      title4: 'Show sign',
      title5: 'Show zero or not',
      title6: 'Custom color',
      title7: 'Custom icon',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <TrendArrow syncColor={false} value={1} />
          <TrendArrow syncColor={false} value={-0.2535} />
        </Cell>
        <div className="title">{translated.title1}</div>
        <Cell>
          <TrendArrow value={10.2365} />
          <TrendArrow value={-0.2535} />
        </Cell>
        <div className="title">{translated.title2}</div>
        <Cell>
          <TrendArrow digits={1} value={10.2365} />
          <TrendArrow digits={3} value={-0.2535} />
        </Cell>
        <div className="title">{translated.title3}</div>
        <Cell>
          <TrendArrow arrowLeft value={0.2535} />
          <TrendArrow arrowLeft value={-0.2535} />
        </Cell>
        <div className="title">{translated.title4}</div>
        <Cell>
          <TrendArrow symbol value={1} />
          <TrendArrow symbol value={-0.2535} />
        </Cell>
        <div className="title">{translated.title5}</div>
        <Cell>
          <TrendArrow symbol value={0} />
          <TrendArrow symbol zero value={0} />
        </Cell>
        <div className="title">{translated.title6}</div>
        <Cell>
          <TrendArrow value={10.2365} riseColor="rgb(73,143,242)" />
          <TrendArrow value={-0.2535} symbol dropColor="rgb(255, 190, 13)" />
          <TrendArrow
            syncColor={false}
            value={-0.2535}
            symbol
            color="rgb(39,197,48)"
            dropColor="rgb(255, 190, 13)"
          />
        </Cell>
        <div className="title">{translated.title7}</div>
        <Cell>
          <TrendArrow value={10.2365} riseIcon={<Success color="blue" />} />
          <TrendArrow value={-10.2365} downIcon={<Failure color="red" />} />
        </Cell>
      </div>
    </>
  )
}

export default TrendArrowDemo
