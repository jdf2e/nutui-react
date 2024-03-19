import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react'

const Demo3 = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item icon={<Home width={24} height={24} />} />
    <Tabbar.Item icon={<Category width={24} height={24} />} />
    <Tabbar.Item icon={<Find width={24} height={24} />} />
    <Tabbar.Item icon={<Cart width={24} height={24} />} />
    <Tabbar.Item icon={<User width={24} height={24} />} />
  </Tabbar>
)
export default Demo3
