import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <Uploader
      url={uploadUrl}
      maxDuration={3}
      sourceType={['camera']}
      camera="front"
    />
  )
}
export default Demo7
