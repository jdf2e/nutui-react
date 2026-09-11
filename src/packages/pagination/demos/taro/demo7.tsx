import React, { CSSProperties, useState } from 'react'
import { View } from '@tarojs/components'
import { Swiper, Pagination, pxTransform } from '@nutui/nutui-react-taro'

const colors = ['#e8a87c', '#c38d9e', '#85cdca', '#41b3a3']

const Demo7 = () => {
  const [current, setCurrent] = useState(1)
  const indicatorStyle = {
    position: 'absolute',
    right: pxTransform(24),
    bottom: pxTransform(24),
    zIndex: 1,
  }
  return (
    <View
      className="demo-box"
      style={{ height: pxTransform(360), position: 'relative' }}
    >
      <Swiper
        defaultValue={0}
        loop
        onChange={(e) => setCurrent(e.detail.current + 1)}
        indicator={
          <View style={indicatorStyle as CSSProperties}>
            <Pagination
              value={current}
              total={colors.length}
              pageSize={1}
              mode="lite"
              indicatorType="capsule"
            />
          </View>
        }
      >
        {colors.map((color) => (
          <Swiper.Item key={color}>
            <View
              style={{ width: '100%', height: '100%', background: color }}
            />
          </Swiper.Item>
        ))}
      </Swiper>
    </View>
  )
}
export default Demo7
