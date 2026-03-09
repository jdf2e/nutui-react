import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'

const Demo15 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <Uploader
      previewType="list"
      url={uploadUrl}
      needChooseFile
      accept=".doc,.docx,.pdf,.jpg,.jpeg,.png,.bmp"
    />
  )
}

export default Demo15
