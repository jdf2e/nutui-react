import React, { useRef } from 'react'
import { Cell, Button, Barrage } from '@nutui/nutui-react'

const Demo1 = () => {
  const barrageList = [
    '画美不看画美不看画美不看画美不看',
    '不明觉厉',
    '喜大普奔',
    '男默女泪',
    '累觉不爱',
    '爷青结',
  ]
  const barrageRef = useRef<any>(null)
  const addBarrage = () => {
    const n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add(`随机——${String(n).substr(2, 10)}`)
    }
  }
  return (
    <>
      <Cell className="barrage-demo-wrap">
        <Barrage className="barrage-demo" ref={barrageRef} list={barrageList} />
      </Cell>
      <Button type="primary" onClick={addBarrage}>
        随机添加
      </Button>
    </>
  )
}
export default Demo1
