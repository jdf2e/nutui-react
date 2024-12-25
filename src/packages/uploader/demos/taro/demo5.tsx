import React, { useState } from 'react'
import { Uploader, Cell, FileItem } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [list, setList] = useState<FileItem[]>([])
  const beforeUpload = async (files: File[]) => {
    const allowedTypes = ['image/png']
    const filteredFiles = Array.from(files).filter((file) =>
      allowedTypes.includes(file.type)
    )
    return filteredFiles
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
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    }
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Uploader
        value={list}
        onChange={setList}
        beforeUpload={beforeUpload}
        upload={(file: File) => upload(file)}
      />
    </Cell>
  )
}
export default Demo5
