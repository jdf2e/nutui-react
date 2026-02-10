import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'

const Demo15 = () => {
  return (
    <>
      <Uploader
        url="https://my-json-server.typicode.com/linrufeng/demo/posts"
        enablePasteUpload
        uploadLabel="点击上传或粘贴图片"
      />
    </>
  )
}
export default Demo15
