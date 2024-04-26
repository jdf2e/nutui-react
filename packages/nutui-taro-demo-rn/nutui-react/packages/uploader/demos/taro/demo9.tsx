import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo9 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onOversize = (files: Taro.chooseImage.ImageFile[]) => {
    console.log('oversize触发文件大小不能超过50kb', files)
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
export default Demo9
