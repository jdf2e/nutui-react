import React, { useState, useRef } from 'react'
import { View } from '@tarojs/components'
import { Tabs, Swiper } from '@nutui/nutui-react-taro'

// TODO：鸿蒙支持的不好
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
          <View style={contentStyle}>Tab longitem</View>
        </Swiper.Item>
        <Swiper.Item>
          <View style={contentStyle}>Tab 2</View>
        </Swiper.Item>
        <Swiper.Item>
          <View style={contentStyle}>Tab 3</View>
        </Swiper.Item>
      </Swiper>
    </>
  )
}
export default Demo12
