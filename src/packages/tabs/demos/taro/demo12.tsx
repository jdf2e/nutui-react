import React, { useState, useRef } from 'react'
import { Tabs, Swiper } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  const swiperRef = useRef<React.ElementRef<typeof Swiper> | null>(null)
  const [tabIndex, setTabIndex] = useState<string | number>(0)
  const contentStyle = { backgroundColor: '#fff', padding: '24px 10px' }
  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={(page) => {
          swiperRef.current?.to(page)
          setTabIndex(page)
        }}
      >
        <Tabs.TabPane title="Tab longitem" />
        <Tabs.TabPane title="Tab 2" />
        <Tabs.TabPane title="Tab 3" />
      </Tabs>
      <Swiper
        defaultValue={0}
        loop={false}
        ref={swiperRef}
        height={100}
        onChange={(e) => {
          setTabIndex(e.detail.current)
        }}
      >
        <Swiper.Item>
          <div style={contentStyle}>Tab longitem</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={contentStyle}>Tab 2</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={contentStyle}>Tab 3</div>
        </Swiper.Item>
      </Swiper>
    </>
  )
}
export default Demo12
