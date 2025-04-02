import React from 'react'
import { Tabbar, Image } from '@nutui/nutui-react'
import { Cart, Hi, Home, User, Message } from '@nutui/icons-react'

const Demo = () => {
  return (
    <Tabbar>
      <Tabbar.Item
        title={(active: boolean) => (active ? '' : '首页')}
        icon={(active: boolean) =>
          active ? (
            <Image src="https://storage.360buyimg.com/imgtools/ba40719add-025fcd20-0618-11f0-8bdb-aba55e067ea2.png" />
          ) : (
            <Home />
          )
        }
      />

      <Tabbar.Item
        icon={(active: boolean) =>
          active ? (
            <Hi />
          ) : (
            <Image src="https://storage.360buyimg.com/imgtools/cadd649d79-8de544e0-0a11-11f0-9f55-9901c75f24a0.png" />
          )
        }
        title={(active: boolean) => (active ? '逛' : '')}
        value="AI"
      />
      <Tabbar.Item title="消息" icon={<Message />} value={100} />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )
}

export default Demo
