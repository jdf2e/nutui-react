import React from 'react'
import { Uploader, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start触发')
  }
  return (
    <Cell>
      <Uploader previewType="list" url={uploadUrl} onStart={onStart} />
    </Cell>
  )
}
export default Demo2
