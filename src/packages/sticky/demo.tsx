import React, { useRef } from 'react'
import { Sticky } from './sticky'
import Button from '@/packages/button'
import Cell from '@/packages/cell'
import { useTranslate } from '@/sites/assets/locale'

interface T {
  basic: string
  title1: string
  title2: string
  title3: string
  title4: string
  button1: string
  button2: string
  button3: string
  button4: string
  button5: string
  changeTips: string
}
const StickyDemo = () => {
  const containerTopRef = useRef(null)
  const containerRef = useRef(null)
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title1: '吸顶距离',
      title2: '指定容器内吸顶',
      title3: '指定容器吸底',
      title4: '吸底距离',
      button1: '吸顶',
      button2: '距离顶部120px',
      button3: '指定容器内吸顶',
      button4: '指定容器吸底',
      button5: '距离底部0px',
      changeTips: '吸顶状态发生了改变,当前fixed为',
    },
    'zh-TW': {
      basic: '基本用法',
      title1: '吸頂距離',
      title2: '指定容器內吸頂',
      title3: '指定容器吸底',
      title4: '吸底距離',
      button1: '吸頂',
      button2: '距離頂部120px',
      button3: '指定容器內吸頂',
      button4: '指定容器吸底',
      button5: '距離底部0px',
      changeTips: '吸頂狀態發生了改變,當前fixed為',
    },
    'en-US': {
      basic: 'Basic usage ',
      title1: 'Distance suction a top ',
      title2: 'The specified container roof ',
      title3: 'Specify the container bottom ',
      title4: 'Suction bottom distance ',
      button1: 'Suck the top ',
      button2: 'From the top 120 px ',
      button3: 'The specified container roof ',
      button4: 'Specify the container bottom ',
      button5: 'At the bottom of the distance to 0 px ',
      changeTips: 'The ceiling status has changed, and the current fixed is',
    },
  })
  const {
    basic,
    title1,
    title2,
    title3,
    title4,
    button1,
    button2,
    button3,
    button4,
    button5,
    changeTips,
  } = translated
  const handleChange = (val: boolean) => {
    console.log(`${changeTips}:${val}`)
  }
  return (
    <>
      <div className="demo">
        <h2>{basic}</h2>
        <Cell>
          <Sticky top={57} onChange={(val: boolean) => handleChange(val)}>
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
            <Sticky container={containerTopRef} top={57}>
              <Button style={{ marginLeft: '100px' }} type="info">
                {button3}
              </Button>
            </Sticky>
          </div>
        </Cell>
        <h2>{title4}</h2>
        <Cell style={{ height: '64px' }}>
          <Sticky top={0} position="bottom">
            <Button type="primary">{button5}</Button>
          </Sticky>
        </Cell>
      </div>
    </>
  )
}

export default StickyDemo
