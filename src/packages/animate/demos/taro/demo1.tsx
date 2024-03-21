import React from 'react'
import { Animate, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const style = {
    marginBottom: '10px',
  }
  return (
    <>
      <div style={style}>
        <Animate type="slide-right" action="click">
          <Button type="primary">由右向左划入</Button>
        </Animate>
      </div>

      <div style={style}>
        <Animate type="slide-left" action="click">
          <Button type="primary">由左向右划入</Button>
        </Animate>
      </div>

      <div style={style}>
        <Animate type="slide-top" action="click">
          <Button type="primary">由上至下划入</Button>
        </Animate>
      </div>

      <div style={style}>
        <Animate type="slide-bottom" action="click">
          <Button type="primary">由下至上划入</Button>
        </Animate>
      </div>
    </>
  )
}

export default Demo1
