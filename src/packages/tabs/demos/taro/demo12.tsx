import React, { useState, useRef } from 'react'
import { Tabs, Swiper } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  const swiperRef = useRef<React.ElementRef<typeof Swiper> | null>(null)
  const [tabIndex, setTabIndex] = useState<string | number>(0)
  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={(page) => {
          swiperRef.current?.to(page)
          setTabIndex(page)
        }}
      >
        <Tabs.TabPane title="Tab 1" />
        <Tabs.TabPane title="Tab 2" />
        <Tabs.TabPane title="Tab 3" />
      </Tabs>
      <Swiper
        defaultValue={0}
        loop={false}
        ref={swiperRef}
        height={41}
        onChange={(page) => {
          setTabIndex(page)
        }}
      >
        <Swiper.Item>
          <div style={{ backgroundColor: '#fff', padding: '10px' }}>Tab 1</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={{ backgroundColor: '#fff', padding: '10px' }}>Tab 2</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={{ backgroundColor: '#fff', padding: '10px' }}>Tab 3</div>
        </Swiper.Item>
      </Swiper>
    </>
  )
}
export default Demo12
