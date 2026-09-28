import React, { CSSProperties, useState } from 'react'
import { Swiper, Pagination } from '@nutui/nutui-react'

const colors = ['#3a3f47', '#4a4f57', '#5a5f67', '#2f343c']

const Demo8 = () => {
  const [current, setCurrent] = useState(1)
  const navStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0))',
  }
  return (
    <div className="demo-box" style={{ height: 200, position: 'relative' }}>
      <Swiper
        defaultValue={0}
        loop
        onChange={(index) => setCurrent(index + 1)}
        indicator={
          <div
            style={
              {
                ...navStyle,
                '--nutui-pagination-text-color': '#E1E6EB',
              } as CSSProperties
            }
          >
            <Pagination
              value={current}
              total={colors.length}
              pageSize={1}
              mode="lite"
              indicatorType="text"
            />
          </div>
        }
      >
        {colors.map((color) => (
          <Swiper.Item key={color}>
            <div style={{ width: '100%', height: 200, background: color }} />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  )
}
export default Demo8
