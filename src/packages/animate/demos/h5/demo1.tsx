import React from 'react'
import { Animate, Button, Space } from '@nutui/nutui-react'

const Demo = () => {
  return (
    <Space direction="vertical">
      <Animate type="slide-right" action="click">
        <Button type="primary">由右向左划入</Button>
      </Animate>
      <Animate type="slide-left" action="click">
        <Button type="primary">由左向右划入</Button>
      </Animate>
      <Animate type="slide-top" action="click">
        <Button type="primary">由上至下划入</Button>
      </Animate>
      <Animate type="slide-bottom" action="click">
        <Button type="primary">由下至上划入</Button>
      </Animate>
    </Space>
  )
}

export default Demo
