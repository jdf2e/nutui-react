import React from 'react'
import { Cell, Indicator, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo4 = () => {
  return (
    <>
      <Cell>
        <Indicator total={6} current={5} direction="vertical">
          <View
            style={{
              display: 'flex',
              width: pxTransform(14),
              height: pxTransform(14),
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: pxTransform(11),
              color: '#FFFFFF',
              borderWidth: pxTransform(1),
              borderColor: '#FFFFFF',
              borderRadius: pxTransform(14),
              margin: pxTransform(4),
              backgroundColor: '#ff0f23',
            }}
          >
            5
          </View>
        </Indicator>
        <Indicator
          total={6}
          current={2}
          direction="vertical"
          style={{
            marginLeft: pxTransform(50),
          }}
        />

        <Indicator
          total={6}
          current={5}
          direction="vertical"
          type="slide"
          style={{
            marginLeft: pxTransform(50),
          }}
        />
      </Cell>
      <Cell style={{ background: '#C2C4CC' }}>
        <Indicator total={6} current={2} direction="vertical" color="default" />
      </Cell>
    </>
  )
}
export default Demo4
