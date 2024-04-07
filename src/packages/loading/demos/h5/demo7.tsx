import React from 'react'
import { Loading, Cell } from '@nutui/nutui-react'
import { Star } from '@nutui/icons-react'

const Demo7 = () => {
  return (
    <Cell>
      <Loading
        direction="vertical"
        icon={<Star width="24" height="24" color="red" />}
      />
    </Cell>
  )
}
export default Demo7
