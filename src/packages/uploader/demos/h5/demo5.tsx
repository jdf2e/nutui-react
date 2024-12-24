import React, { useState } from 'react'
import { Uploader, Cell, FileItem } from '@nutui/nutui-react'

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
      url: URL.createObjectURL(file),
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
