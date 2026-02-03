import React, { useState } from 'react'
import { Swiper, pxTransform } from '@nutui/nutui-react-taro'
import { Image, Text, View } from '@tarojs/components'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react-taro'

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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: '85%',
              top: pxTransform(120),
              width: pxTransform(46),
              height: pxTransform(22),
              backgroundColor: 'rgba(0, 0, 0, 0.33)',
              borderRadius: pxTransform(22),
              textAlign: 'center',
              fontSize: pxTransform(14),
              zIndex: 1,
            }}
          >
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
          <ArrowLeft />
        </View>
        <View style={spanStyle} onClick={(e) => swiperRef.current?.next()}>
          <ArrowRight />
        </View>
      </View>
    </View>
  )
}

export default Demo5
