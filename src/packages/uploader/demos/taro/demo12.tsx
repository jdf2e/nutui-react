import React, { useRef } from 'react'
import { Uploader, Button } from '@nutui/nutui-react-taro'

interface uploadRefState {
  submit: () => void
  clear: () => void
}

const Demo12 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const uploadRef = useRef<uploadRefState>(null)

  const submitUpload = () => {
    ;(uploadRef.current as uploadRefState).submit()
  }
  const clearUpload = () => {
    ;(uploadRef.current as uploadRefState).clear()
  }
  return (
    <>
      <Uploader
        url={uploadUrl}
        maxCount="5"
        autoUpload={false}
        ref={uploadRef}
      />
      <div style={{ display: 'flex' }}>
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
    </>
  )
}
export default Demo12
