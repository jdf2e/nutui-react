import React from 'react'
import { Uploader } from '@nutui/nutui-react'

const Demo6 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return <Uploader capture url={uploadUrl} />
}
export default Demo6
