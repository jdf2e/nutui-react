import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  return (
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
            borderTopWidth: 1,
            borderTopColor: '#1a1a1a',
            borderTopStyle: 'solid',
            width: 20,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
        <View
          style={{
            fontSize: 10,
            fontFamily: 'JD',
          }}
        >
          238
        </View>
      </View>
    </HoverButton>
  )
}
export default Demo1
