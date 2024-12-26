import React, { useState } from 'react'
import { Uploader, Cell, FileItem } from '@nutui/nutui-react'

const Demo4 = () => {
  const [list, setList] = useState<FileItem[]>([])
  const onOversize = (files: File[]) => {
    console.log('oversize 触发 文件大小不能超过 50kb', files)
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
        upload={(file: File) => upload(file)}
        multiple
        maxFileSize={1024 * 50}
        onOversize={onOversize}
      />
    </Cell>
  )
}
export default Demo4
