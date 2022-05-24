import React, { useState } from 'react'
import { CircleProgress } from './circleprogress'
import Button from '@/packages/button'
import './demo.scss'

const CricleProgressDemo = () => {
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
    '0%': '#FF5E5E',
    '100%': '#FFA062',
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <div className="demo__piece">
          <CircleProgress progress={20} />
        </div>

        <h2>环形进度条自定义样式</h2>
        <div className="demo__piece">
          <CircleProgress progress={50} strokeWidth={10} />
        </div>

        <h2>环形进度条自定义颜色(支持渐变色)</h2>
        <div className="demo__piece">
          <CircleProgress progress={50} circleColor="red" />
          <CircleProgress progress={100} circleColor={gradientColor} />
        </div>

        <h2>环形进度条自定义大小</h2>
        <div className="demo__piece">
          <CircleProgress progress={50} radius={60} />
        </div>

        <h2>环形进度条自定义内容</h2>
        <div className="demo__piece">
          <CircleProgress progress={50} radius={60}>
            自定义
          </CircleProgress>
        </div>

        <h2>动态改变环形进度条的进度</h2>
        <div className="demo__piece">
          <CircleProgress progress={percent} />
        </div>
        <div className="demo__btn">
          <Button type="primary" onClick={setReduceVal}>
            减少
          </Button>
          <Button type="primary" onClick={setAddVal}>
            增加
          </Button>
        </div>
      </div>
    </>
  )
}

export default CricleProgressDemo
