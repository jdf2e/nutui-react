import React, { useState } from 'react'
import { Uploader, Cell, FileItem, Space } from '@nutui/nutui-react'

const Demo3 = () => {
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
      url: URL.createObjectURL(file),
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
