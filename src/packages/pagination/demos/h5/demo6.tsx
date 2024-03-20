import React from 'react'
import { Pagination } from '@nutui/nutui-react'

const Demo6 = () => {
  const pageChange5 = (v: number) => {
    console.log(v)
  }
  return (
    <Pagination
      defaultValue={15}
      total={500}
      pageSize={10}
      itemSize={3}
      onChange={pageChange5}
    />
  )
}
export default Demo6
