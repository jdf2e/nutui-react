import React, { useRef } from 'react'
import { Cell, Button, Barrage } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

interface barrageRefState {
  add: (word: string) => void
}

const Demo1 = () => {
  const barrageList = [
    '画美不看画美不看画美不看画美不看',
    '不明觉厉',
    '喜大普奔',
    '男默女泪',
    '累觉不爱',
    '爷青结',
  ]
  const barrageRef = useRef<barrageRefState>(null)
  const addBarrage = () => {
    const n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add(`随机——${String(n).substr(2, 10)}`)
    }
  }
  return (
    <div
      className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-barrage`}
    >
      <h2>基础用法</h2>
      <Cell className="barrage-demo-wrap">
        <Barrage className="barrage-demo" ref={barrageRef} list={barrageList} />
      </Cell>
      <div className="test" style={{ textAlign: 'center' }}>
        <Button type="danger" onClick={addBarrage}>
          随机添加
        </Button>
      </div>
    </div>
  )
}
export default Demo1
