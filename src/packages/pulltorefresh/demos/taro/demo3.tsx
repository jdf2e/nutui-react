import React, { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Lottie, PullToRefresh } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import pxTransform from '@/utils/px-transform'
import lightPull from '@/packages/lottie/animation/light/pulltorefresh.json'

const Demo1 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <>
      <PullToRefresh
        type="primary"
        onRefresh={() =>
          new Promise((resolve) => {
            Taro.showToast({
              title: '😊',
              icon: 'none',
            })
            resolve('done')
          })
        }
        renderIcon={(status) => {
          return (
            <>
              <Lottie source={lightPull} style={{ width: 132, height: 26 }} />
            </>
          )
        }}
      >
        {list.map((item) => (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: pxTransform(50),
            }}
            key={item}
          >
            <Text style={{ color: '#ffffff' }}>{item}</Text>
          </View>
        ))}
      </PullToRefresh>
    </>
  )
}

export default Demo1
