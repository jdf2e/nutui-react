import React from 'react'
import { Animate, Button, Space } from '@nutui/nutui-react'

const Demo = () => {
  return (
    <Space direction="vertical">
      <Animate type="shake" loop>
        <Button type="primary">shake-抖动</Button>
      </Animate>
      <Animate type="ripple" loop>
        <Button type="primary">ripple-心跳</Button>
      </Animate>
      <Animate type="breath" loop>
        <Button type="primary">breath-呼吸灯</Button>
      </Animate>
      <Animate type="twinkle" loop>
        <Button type="primary">twinkle-水波</Button>
      </Animate>
      <Animate type="flicker" loop>
        <Button type="primary">flicker-擦亮</Button>
      </Animate>
      <Animate type="jump" loop>
        <Button type="primary">jump-跳跃</Button>
      </Animate>
      <Animate type="float" loop>
        <Button type="primary">float-漂浮</Button>
      </Animate>
    </Space>
  )
}

export default Demo
