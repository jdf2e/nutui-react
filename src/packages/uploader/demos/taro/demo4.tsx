import React, { useState } from 'react'
import { Uploader, Cell, FileItem } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const demoUrl =
    'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif'

  const [list, setList] = useState<FileItem[]>([])

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
      url: demoUrl,
    }
  }
  const onOversize = (files: File[]) => {
    console.log('oversize触发文件大小不能超过50kb', files)
  }
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Uploader
          value={list}
          onChange={setList}
          upload={(file: File) => upload(file)}
          maxFileSize={1024 * 50}
          onOversize={onOversize}
        />
      </Cell>
    </>
  )
}
export default Demo4
