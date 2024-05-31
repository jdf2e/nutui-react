import React, { useRef } from 'react'
import { View } from '@tarojs/components'
import { Button, Sticky } from '@nutui/nutui-react-taro'
import { getEnv } from '@tarojs/taro'

const Demo3 = () => {
  const containerTopRef = useRef(null)
  return (
    <>
      <View ref={containerTopRef} style={{ height: '600px' }}>
        <Sticky
          container={containerTopRef}
          threshold={getEnv() === 'WEB' ? 60 : 0}
        >
          <Button type="info" style={{ marginLeft: '100px' }}>
            指定容器内吸顶
          </Button>
        </Sticky>
      </View>
    </>
  )
}
export default Demo3
