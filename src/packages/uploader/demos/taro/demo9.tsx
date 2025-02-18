import React, { useRef } from 'react'
import { Uploader, Button, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

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
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
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
      <View style={{ display: 'flex' }}>
        <Button
          type="success"
          size="small"
          onClick={submitUpload}
          style={{ marginRight: '10px' }}
        >
          执行上传
        </Button>
        <Button type="primary" size="small" onClick={clearUpload}>
          手动清空上传
        </Button>
      </View>
    </Cell>
  )
}
export default Demo9
