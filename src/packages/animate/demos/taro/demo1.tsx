import React from 'react'
import { View } from '@tarojs/components'
import { Animate, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const style = {
    marginBottom: '10px',
  }
  return (
    <>
      <View style={style}>
        <Animate type="slide-right" action="click">
          <Button type="primary">由右向左划入</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="slide-left" action="click">
          <Button type="primary">由左向右划入</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="slide-top" action="click">
          <Button type="primary">由上至下划入</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="slide-bottom" action="click">
          <Button type="primary">由下至上划入</Button>
        </Animate>
      </View>
    </>
  )
}

export default Demo1
