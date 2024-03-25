import React from 'react'
import { Swiper } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  return (
    <Swiper loop autoPlay>
      <Swiper.Item>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', border: '1 red' }}>Item1</div>
          <div style={{ flex: '1', border: '1 red' }}>Item2</div>
          <div style={{ flex: '1', border: '1 red' }}>Item3</div>
          <div style={{ flex: '1', border: '1 red' }}>Item4</div>
        </div>
      </Swiper.Item>
      <Swiper.Item>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', border: '1 red' }}>Item5</div>
          <div style={{ flex: '1', border: '1 red' }}>Item6</div>
          <div style={{ flex: '1', border: '1 red' }}>Item7</div>
          <div style={{ flex: '1', border: '1 red' }}>Item8</div>
        </div>
      </Swiper.Item>
      <Swiper.Item>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', border: '1 red' }}>Item9</div>
          <div style={{ flex: '1', border: '1 red' }}>Item10</div>
          <div style={{ flex: '1', border: '1 red' }}>Item11</div>
          <div style={{ flex: '1', border: '1 red' }}>Item12</div>
        </div>
      </Swiper.Item>
    </Swiper>
  )
}
export default Demo9
