import React from 'react'
import { Cart, Home, Message, User } from '@nutui/icons-react'
import { Tabbar } from '@nutui/nutui-react'
import { addonBeforeDarkImage, addonBeforeImage } from '../addon-before-assets'
import '../addon-before-demo.scss'

const Demo10 = () => (
  <Tabbar
    material="frosted"
    addonBefore={
      <button
        type="button"
        aria-label="打开前置入口"
        onClick={() => console.log('前置入口已点击')}
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
    <Tabbar.Item title="购物车" icon={<Cart />} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo10
