import React, { CSSProperties, useState } from 'react'
import { View } from '@tarojs/components'
import { Swiper, Pagination, pxTransform } from '@nutui/nutui-react-taro'

const colors = ['#e8a87c', '#c38d9e', '#85cdca', '#41b3a3']

const Demo10 = () => {
  const [current, setCurrent] = useState(1)
  const capsuleStyle = {
    position: 'absolute',
    right: pxTransform(24),
    top: pxTransform(24),
    zIndex: 1,
  }
  const barStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: `${pxTransform(40)} ${pxTransform(24)} ${pxTransform(24)}`,
    zIndex: 1,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0))',
    '--nutui-pagination-progress-inactive-color': '#FFFFFF66',
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
          <>
            <View style={capsuleStyle as CSSProperties}>
              <Pagination
                value={current}
                total={colors.length}
                pageSize={1}
                mode="lite"
                indicatorType="capsule"
              />
            </View>
            <View style={barStyle as CSSProperties}>
              <Pagination
                value={current}
                total={colors.length}
                pageSize={1}
                mode="lite"
                indicatorType="progress"
              />
            </View>
          </>
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
export default Demo10
