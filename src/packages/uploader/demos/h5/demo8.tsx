import React from 'react'
import { Uploader, Cell } from '@nutui/nutui-react'

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
      url: URL.createObjectURL(file),
    }
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Uploader capture upload={(file: File) => upload(file)} />
    </Cell>
  )
}
export default Demo8
