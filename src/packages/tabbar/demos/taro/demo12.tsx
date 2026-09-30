import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Image, View, ViewProps } from '@tarojs/components'
import { Cart, Home, Message, Search, User } from '@nutui/icons-react-taro'
import { Tabbar } from '@nutui/nutui-react-taro'

const joyImage =
  'https://img11.360buyimg.com/img/jfs/t1/535270/25/4911/39037/6abb699eF4fefba06/02760f00f05076ee.png'
const BlurSourceView = View as React.ComponentType<
  ViewProps & { blurId?: string }
>
const materialTargetId = 'tabbar-material-demo'
const backgroundImage =
  'https://img12.360buyimg.com/img/jfs/t1/527314/4/14719/1262/6abc7fc4F8586369f/02761771402b1daa.png'

function isNativeAndroid() {
  try {
    return (
      ['RN', 'JDHYBRID'].includes(String(Taro.getEnv()).toUpperCase()) &&
      String(Taro.getSystemInfoSync().platform).toLowerCase() === 'android'
    )
  } catch {
    return false
  }
}

const Demo12 = () => {
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
      <BlurSourceView
        blurId={isNativeAndroid() ? materialTargetId : undefined}
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
      </BlurSourceView>
      <Tabbar
        materialTargetId={materialTargetId}
        value={value}
        onSwitch={setValue}
        style={{ position: 'relative', zIndex: 1 }}
        agent={
          <View
            role="button"
            aria-label="打开 Agent"
            onClick={() => console.log('Agent 已点击')}
            style={{ width: '52px', height: '52px' }}
          >
            <Image
              src={joyImage}
              mode="scaleToFill"
              style={{ width: '52px', height: '52px' }}
            />
          </View>
        }
      >
        <Tabbar.Item title="首页" icon={<Home />} />
        <Tabbar.Item title="消息" icon={<Message />} />
        <Tabbar.Item title="发现" icon={<Search />} />
        <Tabbar.Item title="购物车" icon={<Cart />} />
        <Tabbar.Item title="我的" icon={<User />} />
      </Tabbar>
    </View>
  )
}

export default Demo12
