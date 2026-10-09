import React from 'react'
import { View, Text } from '@tarojs/components'
import { MaterialView } from '../../materialview.taro'

const Demo1 = () => {
  return (
    <View style={{ position: 'relative', height: '200px' }}>
      <View
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        />
      </View>
      <MaterialView
        frostedGlass={{ style: 'regular-light' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>毛玻璃效果</Text>
      </MaterialView>
    </View>
  )
}

export default Demo1
