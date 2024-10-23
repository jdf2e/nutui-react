import React, { useRef } from 'react'
import { Uploader, Button, Cell } from '@nutui/nutui-react-taro'

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
      <div>
        <Button
          type="success"
          size="small"
          onClick={submitUpload}
          style={{ marginInlineEnd: '10px' }}
        >
          执行上传
        </Button>
        <Button type="primary" size="small" onClick={clearUpload}>
          手动清空上传
        </Button>
      </div>
    </Cell>
  )
}
export default Demo9
