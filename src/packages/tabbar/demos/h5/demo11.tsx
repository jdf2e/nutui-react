import React, { useState } from 'react'
import { Cart, Home, Message, Search, User } from '@nutui/icons-react'
import { Tabbar } from '@nutui/nutui-react'

const joyImage =
  'https://img11.360buyimg.com/img/jfs/t1/535270/25/4911/39037/6abb699eF4fefba06/02760f00f05076ee.png'
const backgroundImage =
  'https://img12.360buyimg.com/img/jfs/t1/527314/4/14719/1262/6abc7fc4F8586369f/02761771402b1daa.png'

const Demo11 = () => {
  const [value, setValue] = useState(1)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 104,
        overflow: 'hidden',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center top',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Tabbar
        value={value}
        onSwitch={setValue}
        agent={
          <button
            type="button"
            aria-label="打开 Agent"
            onClick={() => console.log('Agent 已点击')}
            style={{
              width: 52,
              height: 52,
              padding: 0,
              border: 0,
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <img src={joyImage} alt="" style={{ width: 52, height: 52 }} />
          </button>
        }
      >
        <Tabbar.Item title="首页" icon={<Home />} />
        <Tabbar.Item title="消息" icon={<Message />} />
        <Tabbar.Item title="发现" icon={<Search />} />
        <Tabbar.Item title="购物车" icon={<Cart />} />
        <Tabbar.Item title="我的" icon={<User />} />
      </Tabbar>
    </div>
  )
}

export default Demo11
