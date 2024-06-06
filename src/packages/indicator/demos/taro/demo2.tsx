import React from 'react'
import Taro, { pxTransform } from '@tarojs/taro'
import { Indicator, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  const isHarmony = [
    Taro.ENV_TYPE.HARMONY,
    Taro.ENV_TYPE.HARMONYHYBRID,
  ].includes(Taro.getEnv())
  return (
    <Cell>
      <Indicator total={6} current={5}>
        <View
          style={
            Taro.getEnv() !== 'HARMONY' && Taro.getEnv() !== 'RN'
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
                  width: isHarmony ? pxTransform(14) : 14,
                  height: isHarmony ? pxTransform(14) : 14,
                  lineHeight: isHarmony ? pxTransform(14) : 14,
                  textAlign: 'center',
                  fontSize: isHarmony ? pxTransform(12) : 12,
                  color: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#FFFFFF',
                  borderRadius: isHarmony ? pxTransform(14) : 14,
                  margin: 4,
                  backgroundColor: '#ff0f23',
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
