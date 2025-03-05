import React from 'react'
import { HoverButton } from '@nutui/nutui-react'
import { Cart } from '@nutui/icons-react'
import Demo9 from '../../../tabbar/demos/h5/demo9'

const Demo3 = () => {
  return (
    <>
      <HoverButton icon={<Cart />} tabbarHeight={48} />
      <Demo9 />
    </>
  )
}
export default Demo3
