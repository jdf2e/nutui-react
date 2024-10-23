import React from 'react'
import { Uploader } from '@nutui/nutui-react'
import { Dongdong, Loading, Star } from '@nutui/icons-react'
import { FileItem } from '../../file-item'

const Demo2 = () => {
  const defaultList: FileItem[] = [
    {
      name: '文件文件文件文件1文件文件文件文件1文件文件文件文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
    },
    {
      name: '文件2.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
    },
    {
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
    },
    {
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上传失败',
      failIcon: <Star style={{ color: 'white' }} />,
    },
    {
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上传失败',
    },
    {
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中...',
      loadingIcon: <Loading className="nut-icon-Loading" color="#fff" />,
    },
  ]
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log('delete事件触发', file, fileList)
  }
  return (
    <Uploader
      defaultValue={defaultList}
      onDelete={onDelete}
      uploadIcon={<Dongdong />}
      maxCount={6}
    />
  )
}
export default Demo2
