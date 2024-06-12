import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo2 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="aspectFit"
            width={pxTransform(80)}
            height={pxTransform(80)}
            radius={pxTransform(40)}
          />
        </View>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="scaleToFill"
            width={pxTransform(80)}
            height={pxTransform(80)}
            radius={pxTransform(40)}
          />
        </View>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="scaleToFill"
            width={pxTransform(80)}
            height={pxTransform(80)}
            radius={pxTransform(10)}
          />
        </View>
      </View>
    </>
  )
}
export default Demo2
