import React from 'react'
import { Swiper } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo9 = () => {
  return (
    <Swiper
      height={pxTransform(120)}
      loop
      autoPlay
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <Swiper.Item>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            flexWrap: 'nowrap',
          }}
        >
          <View style={{ width: '25%' }}>Item1</View>
          <Text style={{ width: '25%' }}>Item2</Text>
          <Text style={{ width: '25%' }}>Item3</Text>
          <Text style={{ width: '25%' }}>Item4</Text>
        </View>
      </Swiper.Item>
      <Swiper.Item>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            flexWrap: 'nowrap',
          }}
        >
          <Text style={{ width: '25%' }}>Item1</Text>
          <Text style={{ width: '25%' }}>Item2</Text>
          <Text style={{ width: '25%' }}>Item3</Text>
          <Text style={{ width: '25%' }}>Item4</Text>
        </View>
      </Swiper.Item>
      <Swiper.Item>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            flexWrap: 'nowrap',
          }}
        >
          <Text style={{ width: '25%' }}>Item1</Text>
          <Text style={{ width: '25%' }}>Item2</Text>
          <Text style={{ width: '25%' }}>Item3</Text>
          <Text style={{ width: '25%' }}>Item4</Text>
        </View>
      </Swiper.Item>
    </Swiper>
  )
}
export default Demo9
