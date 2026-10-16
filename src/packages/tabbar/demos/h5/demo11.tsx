import React, { useState } from 'react'
import { Cart, Home, Message, Search, User } from '@nutui/icons-react'
import { Tabbar } from '@nutui/nutui-react'
import { addonBeforeDarkImage, addonBeforeImage } from '../addon-before-assets'
import '../addon-before-demo.scss'

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
        material="frosted"
        value={value}
        onSwitch={setValue}
        addonBefore={
          <button
            type="button"
            aria-label="打开前置入口"
            onClick={() => console.log('前置入口已点击')}
            style={{
              width: 52,
              height: 52,
              padding: 0,
              border: 0,
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <img
              className="tabbar-addon-image tabbar-addon-image-light"
              src={addonBeforeImage}
              alt=""
            />
            <img
              className="tabbar-addon-image tabbar-addon-image-dark"
              src={addonBeforeDarkImage}
              alt=""
            />
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
