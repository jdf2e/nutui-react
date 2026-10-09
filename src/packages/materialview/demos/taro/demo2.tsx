import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import { MaterialView } from '../../materialview.taro'

const Demo2 = () => {
  return (
    <View style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
      <View
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Image
          src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </View>
      <MaterialView
        scene="immersive"
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
        <Text style={{ color: '#fff' }}>scene 预设：immersive</Text>
      </MaterialView>
    </View>
  )
}

export default Demo2
