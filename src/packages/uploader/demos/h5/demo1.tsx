import React from 'react'
import { Uploader, Cell } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const Demo1 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start触发')
  }
  const beforeUpload = async (files: File[]) => {
    const allowedTypes = ['image/png']
    const filteredFiles = Array.from(files).filter((file) =>
      allowedTypes.includes(file.type)
    )
    return filteredFiles
  }
  return (
    <>
      <Cell style={{ flexWrap: 'wrap', paddingBottom: '0px' }}>
        <Uploader
          beforeUpload={beforeUpload}
          url={uploadUrl}
          onStart={onStart}
          style={{
            marginInlineEnd: '10px',
            marginBottom: '10px',
          }}
          onChange={(v) => {
            console.log('outer onChange', v)
          }}
        />
        <Uploader
          url={uploadUrl}
          uploadLabel="商品主图"
          onStart={onStart}
          style={{ marginInlineEnd: '2px', marginBottom: '10px' }}
        />
        <Uploader
          url={uploadUrl}
          uploadIcon={<Dongdong />}
          onStart={onStart}
          style={{ marginBottom: '10px' }}
        />
      </Cell>
    </>
  )
}
export default Demo1
