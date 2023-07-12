import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Button, CircleProgress, Cell } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import '@/packages/circleprogress/demo.scss'

interface T {
  '84aa6bce': string
  '67eacf7f': string
  '3fee7d50': string
  f4aa4b4c: string
  '9daa2dd9': string
  '4eafa9e9': string
  c3e31425: string
  '43c9f2ba': string
  bce53fe7: string
}
const CircleProgressDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      '67eacf7f': '环形进度条自定义样式',
      '3fee7d50': '环形进度条自定义颜色(支持渐变色)',
      f4aa4b4c: '环形进度条自定义大小',
      '9daa2dd9': '环形进度条自定义内容',
      '4eafa9e9': '自定义',
      c3e31425: '动态改变环形进度条的进度',
      '43c9f2ba': '减少',
      bce53fe7: '增加',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      '67eacf7f': '環形進度條自定義樣式',
      '3fee7d50': '環形進度條自定義顏色(支持漸變色)',
      f4aa4b4c: '環形進度條自定義大小',
      '9daa2dd9': '環形進度條自定義內容',
      '4eafa9e9': '自定義',
      c3e31425: '動態改變環形進度條的進度',
      '43c9f2ba': '減少',
      bce53fe7: '增加',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
      '67eacf7f': 'Ring progress bar custom style',
      '3fee7d50': 'Ring progress bar custom color (support gradient color)',
      f4aa4b4c: 'Ring progress bar custom size',
      '9daa2dd9': 'Ring progress bar custom content',
      '4eafa9e9': 'customize',
      c3e31425: 'Dynamically change the progress of the circular progress bar',
      '43c9f2ba': 'reduce',
      bce53fe7: 'Increase',
    },
  })

  const [percent, setPercent] = useState(30)

  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setPercent(0)
      return
    }
    setPercent(percent - 10)
  }
  const setAddVal = () => {
    if (percent >= 100) {
      return
    }
    setPercent(percent + 10)
  }

  const gradientColor = {
    '0%': 'var(--nutui-brand-color-start)',
    '100%': 'var(--nutui-brand-color-end)',
  }

  return (
    <>
      <Header />
      <div
        className={`demo ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        } demo-circleprogress`}
      >
        <h2>{translated['84aa6bce']}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <CircleProgress percent={20} />
          <CircleProgress percent={60}>60%</CircleProgress>
        </Cell>

        <h2>{translated['67eacf7f']}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <CircleProgress percent={50} strokeWidth={10} />
        </Cell>

        <h2>{translated['3fee7d50']}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <CircleProgress percent={50} color="#fa2c19">
            50%
          </CircleProgress>
          <CircleProgress percent={100} color={gradientColor}>
            100%
          </CircleProgress>
        </Cell>

        <h2>{translated.f4aa4b4c}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <CircleProgress percent={50} radius={60}>
            50%
          </CircleProgress>
        </Cell>

        <h2>{translated['9daa2dd9']}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <CircleProgress percent={50} radius={60}>
            <div>3000</div>
            <div style={{ fontSize: '12px', color: 'var(--nutui-gray-2)' }}>
              步
            </div>
          </CircleProgress>
        </Cell>

        <h2>{translated.c3e31425}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <CircleProgress percent={percent}>{percent}%</CircleProgress>
        </Cell>
        <Cell className="demo__btn" style={{ justifyContent: 'center' }}>
          <Button type="primary" onClick={setReduceVal}>
            {translated['43c9f2ba']}
          </Button>
          <Button type="primary" onClick={setAddVal}>
            {translated.bce53fe7}
          </Button>
        </Cell>
      </div>
    </>
  )
}

export default CircleProgressDemo
