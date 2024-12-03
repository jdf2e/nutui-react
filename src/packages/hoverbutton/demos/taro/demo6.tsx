/**
 * 基础用法
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Cart } from '@nutui/icons-react-taro'

const Demo1 = () => {
  return (
    <>
      <HoverButton>
        <View
          className="nut-hoverbutton-item-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
              lineHeight: '9px',
              fontFamily: 'JD',
            }}
          >
            238
          </View>
        </View>

        <View
          className="nut-hoverbutton-item-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Cart style={{ width: 14, height: 14, marginTop: 5 }} />
          <View style={{ fontSize: 10, marginTop: 5, lineHeight: '9px' }}>
            购物
          </View>
        </View>
      </HoverButton>
    </>
  )
}
export default Demo1
