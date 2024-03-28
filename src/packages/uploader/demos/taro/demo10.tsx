import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const formData = {
    custom: 'test',
  }
  return <Uploader url={uploadUrl} data={formData} headers={formData} />
}
export default Demo10
