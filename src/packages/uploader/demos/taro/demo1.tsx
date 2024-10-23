import React, { useState } from 'react'
import { Uploader, Cell } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'
import { FileItem } from '../../file-item'

const Demo1 = () => {
  const [list, setList] = useState<FileItem[]>([
    {
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    },
  ])

  const uploaderStyle = {
    marginInlineEnd: '10px',
    marginBottom: '10px',
  }
  function sleep(time: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
  async function upload(file: File) {
    await sleep(2000)
    return {
      url: URL.createObjectURL(file),
    }
  }
  async function uploadFail(file: File): Promise<FileItem> {
    await sleep(2000)
    throw new Error('Fail to upload')
  }
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Uploader
          uploadLabel="商品主图"
          value={list}
          onChange={setList}
          upload={(file: File) => upload(file)}
          style={uploaderStyle}
        />
        <Uploader style={uploaderStyle} upload={(file: File) => upload(file)} />
        <Uploader
          uploadIcon={<Dongdong />}
          upload={(file: File) => uploadFail(file)}
          style={uploaderStyle}
        />
      </Cell>
    </>
  )
}
export default Demo1
