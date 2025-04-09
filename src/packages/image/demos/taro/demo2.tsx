import React from 'react'
import { Cell, Image, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <Cell>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="aspectFit"
            width={80}
            height={80}
            radius={40}
          />
        </View>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="scaleToFill"
            width={80}
            height={80}
            radius={40}
          />
        </View>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="scaleToFill"
            width={80}
            height={80}
            radius={10}
          />
        </View>
      </View>
    </Cell>
  )
}
export default Demo2
