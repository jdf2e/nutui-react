import React, { useRef } from 'react'
import { Uploader, Button, Cell, Space } from '@nutui/nutui-react'

interface uploadRefState {
  submit: () => void
  clear: () => void
}

const Demo9 = () => {
  const uploadRef = useRef<uploadRefState>(null)
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
  const submitUpload = () => {
    ;(uploadRef.current as uploadRefState).submit()
  }
  const clearUpload = () => {
    ;(uploadRef.current as uploadRefState).clear()
  }
  return (
    <Cell style={{ display: 'flex', flexDirection: 'column' }}>
      <Uploader
        maxCount="5"
        multiple
        autoUpload={false}
        ref={uploadRef}
        upload={(file: File) => upload(file)}
        style={{ marginBottom: 10 }}
      />
      <Space wrap>
        <Button type="success" size="small" onClick={submitUpload}>
          执行上传
        </Button>
        <Button type="primary" size="small" onClick={clearUpload}>
          手动清空上传
        </Button>
      </Space>
    </Cell>
  )
}
export default Demo9
