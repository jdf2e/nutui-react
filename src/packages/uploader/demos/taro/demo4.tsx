import React from 'react'
import { Uploader, Button, Loading } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList = [
    {
      name: '文件文件文件文件1文件文件文件文件1文件文件文件文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
      type: 'image',
      uid: '122',
    },
    {
      name: '文件2.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
      type: 'image',
      uid: '123',
    },
    {
      name: '文件2.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上传失败',
      type: 'image',
      uid: '124',
      failIcon: <Star style={{ color: 'white' }} />,
    },
    {
      name: '文件3.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中...',
      type: 'image',
      uid: '125',
    },
    {
      name: '文件3.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中...',
      type: 'image',
      uid: '126',
      loadingIcon: <Loading className="nut-icon-Loading" color="#fff" />,
    },
    {
      name: '文件3.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中...',
      type: 'image',
      uid: '127',
      loadingIcon: null,
    },
  ]

  return (
    <Uploader
      url={uploadUrl}
      defaultValue={defaultFileList}
      maxCount="10"
      multiple
      previewType="list"
    >
      <Button type="success" size="small">
        上传文件
      </Button>
    </Uploader>
  )
}
export default Demo4
