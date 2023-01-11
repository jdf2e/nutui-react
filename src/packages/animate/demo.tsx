import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Animate } from './animate'
import Button from '@/packages/button'
import './demo.scss'

interface T {
  f7a61168: string
  '3fae6217': string
  '65fd1cc5': string
  '9a7eec9c': string
  f6ec5bd0: string
  de274af8: string
  '7c7af45b': string
  '07b960ca': string
  e472af8e: string
  b291ead9: string
  '1b54b6b9': string
  '92a089f6': string
  '4b869598': string
}
const AnimateDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      f7a61168: '点击触发',
      '3fae6217': '由右向左划入',
      '65fd1cc5': '由左向右划入',
      '9a7eec9c': '由上至下划入',
      f6ec5bd0: '由下至上划入',
      de274af8: '循环动画',
      '7c7af45b': 'shake-抖动',
      '07b960ca': 'ripple-心跳',
      e472af8e: 'breath-呼吸灯',
      b291ead9: 'twinkle-水波',
      '1b54b6b9': 'flicker-擦亮',
      '92a089f6': 'jump-跳跃',
      '4b869598': 'float-漂浮',
    },
    'zh-TW': {
      f7a61168: '點擊觸發',
      '3fae6217': '由右向左劃入',
      '65fd1cc5': '由左向右劃入',
      '9a7eec9c': '由上至下劃入',
      f6ec5bd0: '由下至上劃入',
      de274af8: '迴圈動畫',
      '7c7af45b': 'shake-抖動',
      '07b960ca': 'ripple-心跳',
      e472af8e: 'breath-呼吸燈',
      b291ead9: 'twinkle-水波',
      '1b54b6b9': 'flicker-擦亮',
      '92a089f6': 'jump-跳躍',
      '4b869598': 'float-漂浮',
    },
    'en-US': {
      f7a61168: 'Clicking to trigger',
      '3fae6217': 'From right to left',
      '65fd1cc5': 'From left to right',
      '9a7eec9c': 'From top to bottom',
      f6ec5bd0: 'From bottom to top',
      de274af8: 'Loop animation',
      '7c7af45b': 'shake',
      '07b960ca': 'ripple',
      e472af8e: 'breath',
      b291ead9: 'twinkle',
      '1b54b6b9': 'flicker',
      '92a089f6': 'jump',
      '4b869598': 'float',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.f7a61168}</h2>
        <div className="ani-demo-div">
          <Animate type="slide-right" action="click">
            <Button type="primary">{translated['3fae6217']}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-left" action="click">
            <Button type="primary">{translated['65fd1cc5']}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-top" action="click">
            <Button type="primary">{translated['9a7eec9c']}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-bottom" action="click">
            <Button type="primary">{translated.f6ec5bd0}</Button>
          </Animate>
        </div>

        <h2>{translated.de274af8}</h2>
        <div className="ani-demo-div">
          <Animate type="shake" loop>
            <Button type="primary">{translated['7c7af45b']}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="ripple" loop>
            <Button type="primary">{translated['07b960ca']}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="breath" loop>
            <Button type="primary">{translated.e472af8e}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="twinkle" loop>
            <Button type="primary">{translated.b291ead9}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="flicker" loop>
            <Button type="primary">{translated['1b54b6b9']}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="jump" loop>
            <Button type="primary">{translated['92a089f6']}</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="float" loop>
            <Button type="primary">{translated['4b869598']}</Button>
          </Animate>
        </div>
      </div>
    </>
  )
}

export default AnimateDemo
