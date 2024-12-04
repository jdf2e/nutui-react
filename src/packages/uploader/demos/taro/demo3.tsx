import React, { useState } from 'react'
import { Uploader, Cell, FileItem, Space } from '@nutui/nutui-react-taro'

const Demo3 = () => {
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
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Space wrap>
          <Uploader
            value={list}
            onChange={setList}
            upload={(file: File) => upload(file)}
            maxCount={5}
            multiple
          />
        </Space>
      </Cell>
    </>
  )
}
export default Demo3
