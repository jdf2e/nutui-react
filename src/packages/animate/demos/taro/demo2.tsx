import React from 'react'
import { View } from '@tarojs/components'
import { Animate, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const style = {
    marginBottom: '10px',
  }
  return (
    <>
      <View style={style}>
        <Animate type="shake" loop>
          <Button type="primary">shake-抖动</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="ripple" loop>
          <Button type="primary">ripple-心跳</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="breath" loop>
          <Button type="primary">breath-呼吸灯</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="twinkle" loop>
          <Button type="primary">twinkle-水波</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="flicker" loop>
          <Button type="primary">flicker-擦亮</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="jump" loop>
          <Button type="primary">jump-跳跃</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="float" loop>
          <Button type="primary">float-漂浮</Button>
        </Animate>
      </View>
    </>
  )
}

export default Demo2
