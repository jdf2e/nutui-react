import React from 'react'
import { Uploader, Cell } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start触发')
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Uploader
        url={uploadUrl}
        onStart={onStart}
        style={{
          marginRight: 5,
          marginBottom: 5,
        }}
      />
      <Uploader
        url={uploadUrl}
        uploadLabel="商品主图"
        onStart={onStart}
        style={{ marginRight: 5 }}
      />
      <Uploader url={uploadUrl} uploadIcon={<Dongdong />} onStart={onStart} />
    </Cell>
  )
}
export default Demo1
