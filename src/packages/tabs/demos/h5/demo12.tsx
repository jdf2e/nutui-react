import React, { useState, useRef } from 'react'
import { Tabs, Swiper } from '@nutui/nutui-react'

const Demo12 = () => {
  const swiperRef = useRef<React.ElementRef<typeof Swiper> | null>(null)
  const [tabIndex, setTabIndex] = useState<string | number>(0)
  const style = { backgroundColor: '#fff', padding: '10px' }
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
          <div style={style}>Tab 1</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={style}>Tab 2</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={style}>Tab 3</div>
        </Swiper.Item>
      </Swiper>
    </>
  )
}
export default Demo12
