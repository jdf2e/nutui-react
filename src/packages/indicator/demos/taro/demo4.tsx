import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

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
              fontSize: pxTransform(12),
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
            marginLeft: 50,
          }}
        />

        <Indicator
          total={6}
          current={5}
          direction="vertical"
          type="slide"
          style={{
            marginLeft: '50px',
          }}
        />
      </Cell>
      <Cell style={{ background: '#C2C4CC' }}>
        <Indicator
          total={6}
          current={2}
          direction="vertical"
          color="white"
          style={{
            marginLeft: '50px',
          }}
        />
      </Cell>
    </>
  )
}
export default Demo4
