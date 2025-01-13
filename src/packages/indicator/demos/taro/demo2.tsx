import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { harmony } from '@/utils/platform-taro'

const Demo2 = () => {
  return (
    <Cell>
      <Indicator total={6} current={5}>
        <View
          style={
            !harmony()
              ? {
                  display: 'inline-block',
                  width: '14px',
                  height: '14px',
                  lineHeight: '14px',
                  textAlign: 'center',
                  fontSize: '12px',
                  color: '#FFFFFF',
                  border: '1px solid #FFFFFF',
                  borderRadius: '50%',
                  margin: '4px',
                  backgroundColor: 'var(--nutui-color-primary)',
                  boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
                }
              : {
                  display: 'inline-block',
                  width: pxTransform(14),
                  height: pxTransform(14),
                  lineHeight: pxTransform(14),
                  textAlign: 'center',
                  fontSize: pxTransform(12),
                  color: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#FFFFFF',
                  borderRadius: pxTransform(14),
                  margin: 4,
                  backgroundColor: '#ff0f23',
                  // @ts-ignore
                  shadowColor: '#ff0f23',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 1,
                }
          }
        >
          {5}
        </View>
      </Indicator>
    </Cell>
  )
}
export default Demo2
