import React, { useState } from 'react'
import { Loading, Star } from '@nutui/icons-react'
import { Uploader, Button, FileItem } from '@nutui/nutui-react'

const Demo10 = () => {
  const [list, setList] = useState<FileItem[]>([
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
      name: '文件3.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上传失败',
      failIcon: <Star style={{ color: 'white' }} />,
    },
    {
      name: '文件444.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中...',
      percentage: 30,
    },
    {
      name: '文件555.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中...',
      loadingIcon: <Loading className="nut-icon-Loading" color="#fff" />,
      percentage: 80,
    },
  ])
  function sleep(time: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
  async function upload(file: File) {
    await sleep(2000)
    if (Math.random() < 0.5) {
      return {
        url: URL.createObjectURL(file),
      }
    }
    throw new Error('Fail to upload')
  }
  return (
    <Uploader
      upload={(file: File) => upload(file)}
      value={list}
      onChange={setList}
      maxCount="10"
      multiple
      previewType="list"
      style={{ marginBottom: 20 }}
    >
      <Button type="success" size="small">
        上传文件
      </Button>
    </Uploader>
  )
}
export default Demo10
