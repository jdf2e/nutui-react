import React, { useRef } from 'react'
import { Button, Cell, Sticky } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import { getEnv } from '@tarojs/taro'
interface T {
  basic: string
  title1: string
  title2: string
  title3: string
  button1: string
  button2: string
  button3: string
  button4: string
  changeTips: string
}
const StickyDemo = () => {
  const containerTopRef = useRef(null)
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title1: '吸顶距离',
      title2: '指定容器内吸顶',
      title3: '吸底距离',
      button1: '吸顶',
      button2: '距离顶部120px',
      button3: '指定容器内吸顶',
      button4: '距离底部0px',
      changeTips: '吸顶状态发生了改变,当前fixed为',
    },
    'zh-TW': {
      basic: '基本用法',
      title1: '吸頂距離',
      title2: '指定容器內吸頂',
      title3: '吸底距離',
      button1: '吸頂',
      button2: '距離頂部120px',
      button3: '指定容器內吸頂',
      button4: '距離底部0px',
      changeTips: '吸頂狀態發生了改變,當前fixed為',
    },
    'en-US': {
      basic: 'Basic usage ',
      title1: 'Distance suction a top ',
      title2: 'The specified container roof ',
      title3: 'Suction bottom distance ',
      button1: 'Suck the top ',
      button2: 'From the top 120 px ',
      button3: 'The specified container roof ',
      button4: 'At the bottom of the distance to 0 px ',
      changeTips: 'The ceiling status has changed, and the current fixed is',
    },
  })
  const {
    basic,
    title1,
    title2,
    title3,
    button1,
    button2,
    button3,
    button4,
    changeTips,
  } = translated
  const handleChange = (val: boolean) => {
    console.log(`${changeTips}:${val}`)
  }
  return (
    <>
      <Header />
      <div className={`demo ${getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{basic}</h2>
        <Cell>
          <Sticky
            top={getEnv() === 'WEB' ? 60 : 0}
            onChange={(val: boolean) => handleChange(val)}
          >
            <Button type="primary">{button1}</Button>
          </Sticky>
        </Cell>

        <h2>{title1}</h2>
        <Cell>
          <Sticky top={120}>
            <Button type="primary">{button2}</Button>
          </Sticky>
        </Cell>
        <h2>{title2}</h2>
        <Cell>
          <div
            className="sticky-container"
            ref={containerTopRef}
            style={{ height: '600px' }}
          >
            <Sticky
              container={containerTopRef}
              top={getEnv() === 'WEB' ? 60 : 0}
            >
              <Button style={{ marginLeft: '100px' }} type="info">
                {button3}
              </Button>
            </Sticky>
          </div>
        </Cell>
        <h2>{title3}</h2>
        <Cell style={{ height: '64px' }}>
          <Sticky top={0} position="bottom">
            <Button type="primary">{button4}</Button>
          </Sticky>
        </Cell>
      </div>
    </>
  )
}

export default StickyDemo
