import React from 'react'
import { Uploader } from '@nutui/nutui-react'
import { Dongdong, Star } from '@nutui/icons-react'

const Demo14 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList: any = [
    {
      name: '文件文件文件文件1文件文件文件文件1文件文件文件文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
      type: 'image',
      uid: '122',
    },
  ]
  const onDelete = (file: any, fileList: any) => {
    console.log('delete事件触发', file, fileList)
  }
  return (
    <Uploader
      url={uploadUrl}
      defaultValue={defaultFileList}
      onDelete={onDelete}
      uploadIcon={<Dongdong />}
      deleteIcon={<Star />}
    />
  )
}
export default Demo14
