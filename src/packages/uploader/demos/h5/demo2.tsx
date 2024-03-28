import React from 'react'
import { Uploader, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
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
export default Demo1
