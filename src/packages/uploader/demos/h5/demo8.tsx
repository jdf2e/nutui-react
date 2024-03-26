import React from 'react'
import { Uploader } from '@nutui/nutui-react'

const Demo8 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onOversize = (files: File[]) => {
    console.log('oversize 触发 文件大小不能超过 50kb', files)
  }
  return (
    <Uploader
      url={uploadUrl}
      multiple
      maxFileSize={1024 * 50}
      onOversize={onOversize}
    />
  )
}
export default Demo8
