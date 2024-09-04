import React from 'react'
import { Uploader } from '@nutui/nutui-react'

const Demo7 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <Uploader
      url={uploadUrl}
      multiple
      maxCount="5"
      onOverLimit={(files: File[]) => {
        console.log('onOverLimit', files)
      }}
    />
  )
}
export default Demo7
