import React from 'react'
import { Uploader } from '@nutui/nutui-react'

const Demo10 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const formData = {
    custom: 'test',
  }
  return (
    <Uploader
      url={uploadUrl}
      data={formData}
      headers={formData}
      withCredentials
    />
  )
}
export default Demo10
