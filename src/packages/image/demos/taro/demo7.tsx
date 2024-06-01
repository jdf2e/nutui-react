import React from 'react'
import Taro, { pxTransform } from '@tarojs/taro'
import { Image } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo7 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const modes = [
    'top',
    'bottom',
    'center',
    'left',
    'right',
    'top left',
    'top right',
    'bottom left',
    'bottom right',
  ]
  const HARMONY =
    Taro.getEnv() === Taro.ENV_TYPE.HARMONYHYBRID ||
    Taro.getEnv() === Taro.ENV_TYPE.HARMONY

  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        {modes.map((mode) => {
          return (
            <View
              style={{
                width: HARMONY ? pxTransform(90) : 90,
                height: HARMONY ? pxTransform(90) : 90,
              }}
              key={mode}
            >
              <Image
                src={src}
                mode={mode as any}
                width={HARMONY ? pxTransform(80) : 80}
                height={HARMONY ? pxTransform(80) : 80}
              />
            </View>
          )
        })}
      </View>
    </>
  )
}
export default Demo7
