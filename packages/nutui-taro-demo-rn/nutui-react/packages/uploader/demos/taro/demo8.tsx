import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return <Uploader url={uploadUrl} multiple maxCount="5" />
}
export default Demo8
