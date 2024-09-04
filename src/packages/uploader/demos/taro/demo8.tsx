import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <Uploader
      url={uploadUrl}
      multiple
      maxCount="3"
      onOverLimit={(files: File[]) => {
        console.log('onOverLimit', files)
      }}
    />
  )
}
export default Demo8
