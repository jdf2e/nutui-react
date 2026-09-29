import React from 'react'
import { Cart, Home, Message, User } from '@nutui/icons-react'
import { Tabbar } from '@nutui/nutui-react'

const joyImage =
  'https://img11.360buyimg.com/img/jfs/t1/535270/25/4911/39037/6abb699eF4fefba06/02760f00f05076ee.png'

const Demo10 = () => (
  <Tabbar
    agent={
      <button
        type="button"
        aria-label="打开 Agent"
        onClick={() => console.log('Agent 已点击')}
        style={{
          width: '52px',
          height: '52px',
          position: 'relative',
          overflow: 'visible',
          padding: 0,
          border: 0,
          background: 'transparent',
          cursor: 'pointer',
        }}
      >
        <img
          src={joyImage}
          alt="Joy Agent"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </button>
    }
  >
    <Tabbar.Item title="首页" icon={<Home />} />
    <Tabbar.Item title="消息" icon={<Message />} />
    <Tabbar.Item title="购物车" icon={<Cart />} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo10
