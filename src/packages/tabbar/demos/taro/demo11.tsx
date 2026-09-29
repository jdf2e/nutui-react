import React from 'react'
import { Image, View } from '@tarojs/components'
import { Cart, Home, Message, User } from '@nutui/icons-react-taro'
import { Tabbar } from '@nutui/nutui-react-taro'

// Relay 1545:72 export: 132px canvas around the 52px Agent and its shadow.
const joyImage =
  'https://img11.360buyimg.com/img/jfs/t1/535270/25/4911/39037/6abb699eF4fefba06/02760f00f05076ee.png'

const Demo11 = () => (
  <Tabbar
    agent={
      <View
        role="button"
        aria-label="打开 Agent"
        onClick={() => console.log('Agent 已点击')}
        style={{
          width: '52px',
          height: '52px',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <Image
          src={joyImage}
          mode="scaleToFill"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </View>
    }
  >
    <Tabbar.Item title="首页" icon={<Home />} />
    <Tabbar.Item title="消息" icon={<Message />} />
    <Tabbar.Item title="购物车" icon={<Cart />} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo11
