import React from 'react'
import { Rate } from '@nutui/nutui-react'

const Demo10 = () => {
  const onChange = (val: any) => {
    console.log(val)
  }
  return (
    <>
      <Rate defaultValue={3} onChange={onChange} />
    </>
  )
}
export default Demo10
