import React, { CSSProperties, useState } from 'react'
import { View } from '@tarojs/components'
import { Swiper, Pagination, pxTransform } from '@nutui/nutui-react-taro'

const colors = ['#3a3f47', '#4a4f57', '#5a5f67', '#2f343c']

const Demo8 = () => {
  const [current, setCurrent] = useState(1)
  const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: pxTransform(88),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0))',
    '--nutui-pagination-text-color': '#E1E6EB',
  }
  return (
    <View
      className="demo-box"
      style={{ height: pxTransform(400), position: 'relative' }}
    >
      <Swiper
        defaultValue={0}
        loop
        onChange={(e) => setCurrent(e.detail.current + 1)}
        indicator={
          <View style={navStyle as CSSProperties}>
            <Pagination
              value={current}
              total={colors.length}
              pageSize={1}
              mode="lite"
              indicatorType="text"
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
export default Demo8
