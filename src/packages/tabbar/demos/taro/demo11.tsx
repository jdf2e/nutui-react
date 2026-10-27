import React, { useState } from 'react'
import { Image, View } from '@tarojs/components'
import {
  CartF,
  CartI,
  HomeF,
  HomeI,
  MessageF,
  MessageI,
  SearchF,
  SearchI,
  UserF,
  UserI,
} from '@nutui/icons-react-taro'
import { Tabbar } from '@nutui/nutui-react-taro'
import { addonBeforeDarkImage, addonBeforeImage } from '../addon-before-assets'
import '../addon-before-demo.scss'

const backgroundImage =
  'https://img12.360buyimg.com/img/jfs/t1/527314/4/14719/1262/6abc7fc4F8586369f/02761771402b1daa.png'

const Demo11 = () => {
  const [value, setValue] = useState(1)

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '104px',
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Image
          src={backgroundImage}
          mode="scaleToFill"
          style={{ display: 'block', width: '100%', height: '320px' }}
        />
      </View>
      <Tabbar
        material="frosted"
        value={value}
        onSwitch={setValue}
        style={{ position: 'relative', zIndex: 1 }}
        addonBefore={
          <View
            role="button"
            aria-label="打开前置入口"
            onClick={() => console.log('前置入口已点击')}
            style={{ width: '52px', height: '52px' }}
          >
            <Image
              className="tabbar-addon-image tabbar-addon-image-light"
              src={addonBeforeImage}
              mode="scaleToFill"
            />
            <Image
              className="tabbar-addon-image tabbar-addon-image-dark"
              src={addonBeforeDarkImage}
              mode="scaleToFill"
            />
          </View>
        }
      >
        <Tabbar.Item
          title="首页"
          icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)}
        />
        <Tabbar.Item
          title="消息"
          icon={(active: boolean) => (active ? <MessageF /> : <MessageI />)}
        />
        <Tabbar.Item
          title="发现"
          icon={(active: boolean) => (active ? <SearchF /> : <SearchI />)}
        />
        <Tabbar.Item
          title="购物车"
          icon={(active: boolean) => (active ? <CartF /> : <CartI />)}
        />
        <Tabbar.Item
          title="我的"
          icon={(active: boolean) => (active ? <UserF /> : <UserI />)}
        />
      </Tabbar>
    </View>
  )
}

export default Demo11
