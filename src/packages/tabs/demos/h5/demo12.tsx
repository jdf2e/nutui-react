import React, { useState } from 'react'
import { Tabs, Swiper } from '@nutui/nutui-react'

const Demo12 = () => {
  const [tab2value, setTab2value] = useState('0')
  const swiperRef = useRef(null)
  const [tabIndex, setTabIndex] = useState(0)
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
        initPage={0}
        loop={false}
        ref={swiperRef}
        onChange={(page) => {
          setTabIndex(page)
        }}
      >
        <Swiper.Item>
          <div style={{ style }}>Tab 1</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={{ style }}>Tab 2</div>
        </Swiper.Item>
        <Swiper.Item>
          <div style={{ style }}>Tab 3</div>
        </Swiper.Item>
      </Swiper>
    </>
  )
}
export default Demo12
