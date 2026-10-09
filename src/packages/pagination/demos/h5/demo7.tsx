import React, { CSSProperties, useState } from 'react'
import { Swiper, Pagination } from '@nutui/nutui-react'

const colors = ['#e8a87c', '#c38d9e', '#85cdca', '#41b3a3']

const Demo7 = () => {
  const [current, setCurrent] = useState(1)
  const indicatorStyle: CSSProperties = {
    position: 'absolute',
    right: 12,
    bottom: 12,
    zIndex: 1,
  }
  return (
    <div className="demo-box" style={{ height: 180, position: 'relative' }}>
      <Swiper
        defaultValue={0}
        loop
        onChange={(index) => setCurrent(index + 1)}
        indicator={
          <div style={indicatorStyle}>
            <Pagination
              value={current}
              total={colors.length}
              pageSize={1}
              mode="lite"
              indicatorType="capsule"
            />
          </div>
        }
      >
        {colors.map((color) => (
          <Swiper.Item key={color}>
            <div style={{ width: '100%', height: 180, background: color }} />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  )
}
export default Demo7
