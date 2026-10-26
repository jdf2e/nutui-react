import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import {
  CartF,
  CartI,
  HiI,
  HomeF,
  HomeI,
  MessageF,
  MessageI,
  UserF,
  UserI,
} from '@nutui/icons-react-taro'

const Demo3 = () => (
  <Tabbar material="frosted">
    <Tabbar.Item icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)} />
    <Tabbar.Item icon={<HiI />} />
    <Tabbar.Item
      icon={(active: boolean) => (active ? <MessageF /> : <MessageI />)}
    />
    <Tabbar.Item icon={(active: boolean) => (active ? <CartF /> : <CartI />)} />
    <Tabbar.Item icon={(active: boolean) => (active ? <UserF /> : <UserI />)} />
  </Tabbar>
)
export default Demo3
