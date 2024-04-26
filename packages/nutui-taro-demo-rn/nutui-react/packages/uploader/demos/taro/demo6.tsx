import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return <Uploader url={uploadUrl} sourceType={['camera']} />
}
export default Demo6
