import React, { CSSProperties, useState } from 'react'
import { Swiper, Pagination } from '@nutui/nutui-react'

const colors = ['#e8a87c', '#c38d9e', '#85cdca', '#41b3a3', '#8d8741']

const Demo9 = () => {
  const [current, setCurrent] = useState(1)
  const barStyle: CSSProperties = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: '20px 12px 12px',
    zIndex: 1,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0))',
  }
  return (
    <div className="demo-box" style={{ height: 180, position: 'relative' }}>
      <Swiper
        defaultValue={0}
        loop
        onChange={(index) => setCurrent(index + 1)}
        indicator={
          <div
            style={
              {
                ...barStyle,
                '--nutui-pagination-progress-inactive-color': '#FFFFFF66',
              } as CSSProperties
            }
          >
            <Pagination
              value={current}
              total={colors.length}
              pageSize={1}
              mode="lite"
              indicatorType="progress"
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
export default Demo9
