import React, { useState } from 'react'
import { Uploader, Cell, FileItem, Space } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const demoUrl =
    'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif'

  const [list, setList] = useState<FileItem[]>([
    {
      url: demoUrl,
      uid: 133,
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
    return { url: demoUrl }
  }
  async function uploadFail(file: File): Promise<FileItem> {
    await sleep(2000)
    throw new Error('Fail to upload')
  }
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Space wrap>
          <Uploader
            uploadLabel="商品主图"
            value={list}
            onChange={setList}
            upload={(file: File) => upload(file)}
          />
          <Uploader upload={(file: File) => upload(file)} />
          <Uploader
            uploadIcon={<Dongdong />}
            upload={(file: File) => uploadFail(file)}
          />
        </Space>
      </Cell>
    </>
  )
}
export default Demo1
