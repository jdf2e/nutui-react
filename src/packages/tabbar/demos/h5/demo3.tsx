import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import {
  CartF,
  CartI,
  StoreF,
  StoreI,
  HomeF,
  HomeI,
  MessageF,
  MessageI,
  UserF,
  UserI,
} from '@nutui/icons-react'

const Demo = () => (
  <Tabbar material="frosted">
    <Tabbar.Item
      icon={(active: boolean) =>
        active ? (
          <HomeF width={24} height={24} />
        ) : (
          <HomeI width={24} height={24} />
        )
      }
    />
    <Tabbar.Item
      icon={(active: boolean) =>
        active ? (
          <StoreF width={24} height={24} />
        ) : (
          <StoreI width={24} height={24} />
        )
      }
    />
    <Tabbar.Item
      icon={(active: boolean) =>
        active ? (
          <MessageF width={24} height={24} />
        ) : (
          <MessageI width={24} height={24} />
        )
      }
    />
    <Tabbar.Item
      icon={(active: boolean) =>
        active ? (
          <CartF width={24} height={24} />
        ) : (
          <CartI width={24} height={24} />
        )
      }
    />
    <Tabbar.Item
      icon={(active: boolean) =>
        active ? (
          <UserF width={24} height={24} />
        ) : (
          <UserI width={24} height={24} />
        )
      }
    />
  </Tabbar>
)
export default Demo
