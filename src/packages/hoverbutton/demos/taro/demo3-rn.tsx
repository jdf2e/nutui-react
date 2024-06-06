/**
 * 有底部导航栏的情况
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { View, Icon } from '@tarojs/components'
// import { Cart } from '@nutui/icons-react-taro'
import Demo9 from '../../../tabbar/demos/taro/demo9'

const Demo3 = () => {
  return (
    <View>
      <HoverButton icon={<Icon type="search" />} tabbarHeight={48} />
      {process.env.TARO_ENV !== 'rn' && process.env.TARO_ENV !== 'jdrn' && (
        <Demo9 />
      )}
    </View>
  )
}
export default Demo3
