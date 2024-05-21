import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'
import { Image } from '@tarojs/components'

const Demo5 = () => {
  return (
    <Empty
      description="店铺为空"
      image={
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          src="https://storage.360buyimg.com/imgtools/44f3cc10c4-0cf9a7e0-c0ac-11ee-8375-193101bb1a46.png"
        />
      }
    />
  )
}
export default Demo5
