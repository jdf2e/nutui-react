import React, { useRef } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import { Barrage } from './barrage'
import Button from '@/packages/button'
import './demo.scss?module'

interface barrageRefState {
  add: (word: string) => void
}

interface T {
  ed8c172b: string
  ae9cd4a0: string
  ab05020c: string
  bc555a83: string
  '4d14b3e0': string
  '448f995e': string
  '75ca4f92': string
  '84aa6bce': string
  '3d9b2794': string
}
const BarrageDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ed8c172b: '画美不看',
      ae9cd4a0: '不明觉厉',
      ab05020c: '喜大普奔',
      bc555a83: '男默女泪',
      '4d14b3e0': '累觉不爱',
      '448f995e': '爷青结-',
      '75ca4f92': '随机——',
      '84aa6bce': '基础用法',
      '3d9b2794': '随机添加',
    },
    'zh-TW': {
      ed8c172b: '畫美不看',
      ae9cd4a0: '不明覺厲',
      ab05020c: '喜大普奔',
      bc555a83: '男默女淚',
      '4d14b3e0': '累覺不愛',
      '448f995e': '爺青結-',
      '75ca4f92': '隨機——',
      '84aa6bce': '基礎用法',
      '3d9b2794': '隨機添加',
    },
    'en-US': {
      ed8c172b: 'beautiful painting',
      ae9cd4a0: 'Unconsciously',
      ab05020c: 'Super Plus enjoy',
      bc555a83: 'male silent female tears',
      '4d14b3e0': 'Tired of not loving',
      '448f995e': 'Ye Qing knot-',
      '75ca4f92': 'random--',
      '84aa6bce': 'Basic usage',
      '3d9b2794': 'add randomly',
    },
  })

  const list = [
    translated.ed8c172b,
    translated.ae9cd4a0,
    translated.ab05020c,
    translated.bc555a83,
    translated['4d14b3e0'],
    translated['448f995e'],
  ]

  const barrageRef = useRef<barrageRefState>(null)
  const addBarrage = () => {
    const n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add(`${translated['75ca4f92']}${String(n).substr(2, 10)}`)
    }
  }

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell className="barrage-demo-wrap">
          <Barrage className="barrage-demo" ref={barrageRef} barrageList={list} />
        </Cell>
        <div className="test" style={{ textAlign: 'center' }}>
          <Button type="danger" onClick={addBarrage}>
            {translated['3d9b2794']}
          </Button>
        </div>
      </div>
    </>
  )
}

export default BarrageDemo
