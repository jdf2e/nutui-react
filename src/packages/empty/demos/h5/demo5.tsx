import React from 'react'
import { Cell, Empty } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <Cell>
      <Empty
        description="店铺为空"
        image={
          <img
            src="https://storage.360buyimg.com/imgtools/44f3cc10c4-0cf9a7e0-c0ac-11ee-8375-193101bb1a46.png"
            alt=""
          />
        }
      />
    </Cell>
  )
}
export default Demo5
