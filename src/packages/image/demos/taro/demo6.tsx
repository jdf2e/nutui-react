import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo6 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const modes = [
    'scaleToFill',
    'aspectFit',
    'aspectFill',
    'widthFix',
    'heightFix',
  ]

  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        {modes.map((mode) => {
          return (
            <View
              style={{
                width: pxTransform(90),
                height: pxTransform(90),
              }}
              key={mode}
            >
              <Image
                src={src}
                mode={mode as any}
                width={pxTransform(80)}
                height={pxTransform(80)}
              />
            </View>
          )
        })}
      </View>
    </>
  )
}
export default Demo6
