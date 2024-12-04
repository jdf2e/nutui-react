import React from 'react'
import { Cell, Uploader } from '@nutui/nutui-react-taro'

const Demo8 = () => {
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
    <Cell>
      <Uploader upload={(file: File) => upload(file)} sourceType={['camera']} />
    </Cell>
  )
}
export default Demo8
