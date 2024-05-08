import React from 'react'
import { Indicator, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo4 = () => {
  return (
    <Cell>
      <Indicator total={6} current={5} direction="vertical">
        <View
          style={{
            display: 'inline-block',
            width: 14,
            height: 14,
            lineHeight: 14,
            textAlign: 'center',
            fontSize: 12,
            color: '#FFFFFF',
            // border: '1px solid #FFFFFF',
            borderWidth: 1,
            borderColor: '#FFFFFF',
            borderRadius: 14,
            margin: 4,
            backgroundColor: '#ff0f23',
            // boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
            shadowColor: '#ff0f23',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 1,
          }}
        >
          {5}
        </View>
      </Indicator>
      <Indicator
        total={6}
        current={2}
        direction="vertical"
        style={{
          marginLeft: 50,
        }}
      />
    </Cell>
  )
}
export default Demo4
