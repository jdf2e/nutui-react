/**
 * 基础用法
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  return (
    <>
      <HoverButton>
        <View
          className="nut-hoverbutton-item nut-hoverbutton-item-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 8,
          }}
        >
          <View
            style={{
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1,
              marginTop: 5,
              fontFamily: 'JD',
            }}
          >
            3
          </View>
          <View
            style={{
              height: 1,
              width: 20,
              background: '#1A1A1A',
              marginTop: 3,
              marginBottom: 3,
            }}
          />
          <View
            style={{
              fontSize: 10,
              lineHeight: pxTransform(9),
              fontFamily: 'JD',
            }}
          >
            238
          </View>
        </View>
      </HoverButton>
    </>
  )
}
export default Demo1
