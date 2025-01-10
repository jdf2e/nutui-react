import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro'
import { Image, Text, View } from '@tarojs/components'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react-taro'
import pxTransform from '@/utils/px-transform'
import { harmony } from '@/utils/platform-taro'

function Demo5() {
  const swiperRef = React.useRef<any>(null)
  const [current2, setCurrent2] = useState(0)

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const btnsStyle = {
    position: 'absolute',
    top: pxTransform(60),
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: pxTransform(30),
    zIndex: 1,
  }
  const spanStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: pxTransform(20),
    height: pxTransform(30),
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
  return (
    <View
      className="demo-box"
      style={{ height: pxTransform(150), position: 'relative' }}
    >
      <Swiper
        ref={swiperRef}
        defaultValue={0}
        onChange={(e) => {
          setCurrent2(e.detail.current)
        }}
        indicator={
          <View className="page">
            <Text>
              {current2 + 1}/{list.length}
            </Text>
          </View>
        }
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <Image src={item} style={{ width: '100%', height: '100%' }} />
            </Swiper.Item>
          )
        })}
      </Swiper>
      <View style={btnsStyle as any}>
        <View style={spanStyle} onClick={(e) => swiperRef.current?.prev()}>
          {!harmony() ? <ArrowLeft /> : null}
        </View>
        <View style={spanStyle} onClick={(e) => swiperRef.current?.next()}>
          {!harmony() ? <ArrowRight /> : null}
        </View>
      </View>
    </View>
  )
}

export default Demo5
