import React from 'react'
import { View, Text } from '@tarojs/components'
import { MaterialView } from '../../materialview.taro'

const Demo3 = () => {
  return (
    <View style={{ position: 'relative', height: '200px' }}>
      <View
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          }}
        />
      </View>
      <MaterialView
        gradientBlur={{
          minBlur: 0,
          maxBlur: 0.8,
          overlayAlpha: 0.6,
          overlayColor: 'rgba(255,255,255,1)',
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
        }}
      >
        <Text style={{ padding: '16px', display: 'block' }}>渐变模糊效果</Text>
      </MaterialView>
    </View>
  )
}

export default Demo3
