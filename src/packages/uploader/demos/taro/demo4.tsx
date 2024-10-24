import React, { useState } from 'react'
import { Uploader, Cell } from '@nutui/nutui-react-taro'
import { FileItem } from '../../file-item'

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
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
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
