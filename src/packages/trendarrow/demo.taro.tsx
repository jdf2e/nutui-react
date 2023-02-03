import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { TrendArrow, Cell, Icon } from '@/packages/nutui.react.taro'
import '@/packages/trendarrow/demo.scss'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

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
      basic: '基本用法',
      title1: '改变文字颜色',
      title2: '指定小数位',
      title3: '箭头在前面',
      title4: '显示正负号',
      title5: '是否展示0',
      title6: '自定义颜色',
      title7: '自定义图标',
    },
    'zh-TW': {
      basic: '基本用法',
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
      title5: 'Whether to show 0',
      title6: 'Custom color',
      title7: 'Custom icon',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell>
          <TrendArrow syncTextColor={false} rate={1} />
          <TrendArrow syncTextColor={false} rate={-0.2535} />
        </Cell>
        <div className="title">{translated.title1}</div>
        <Cell>
          <TrendArrow rate={10.2365} />
          <TrendArrow rate={-0.2535} />
        </Cell>
        <div className="title">{translated.title2}</div>
        <Cell>
          <TrendArrow digits={1} rate={10.2365} />
          <TrendArrow digits={3} rate={-0.2535} />
        </Cell>
        <div className="title">{translated.title3}</div>
        <Cell>
          <TrendArrow arrowLeft rate={0.2535} />
          <TrendArrow arrowLeft rate={-0.2535} />
        </Cell>
        <div className="title">{translated.title4}</div>
        <Cell>
          <TrendArrow showSign rate={1} />
          <TrendArrow showSign rate={-0.2535} />
        </Cell>
        <div className="title">{translated.title5}</div>
        <Cell>
          <TrendArrow showSign rate={0} />
          <TrendArrow showSign showZero rate={0} />
        </Cell>
        <div className="title">{translated.title6}</div>
        <Cell>
          <TrendArrow rate={10.2365} riseColor="rgb(73,143,242)" />
          <TrendArrow rate={-0.2535} showSign dropColor="rgb(255, 190, 13)" />
          <TrendArrow
            syncTextColor={false}
            rate={-0.2535}
            showSign
            textColor="rgb(39,197,48)"
            dropColor="rgb(39,197,48)"
          />
        </Cell>
        <div className="title">{translated.title7}</div>
        <Cell>
          <TrendArrow rate={10.2365} upIconName="success" />
          <TrendArrow rate={-10.2365} downIconName="failure" />
          <TrendArrow rate={10.2365}>
            <Icon name="heart-fill" color="#fa2c19" size="12px" />
          </TrendArrow>
        </Cell>
      </div>
    </>
  )
}

export default TrendArrowDemo
