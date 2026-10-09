import React from 'react'
import { Search } from '@nutui/icons-react'
import { Divider, Input } from '@nutui/nutui-react'

const Demo16 = () => {
  return (
    <>
      <Input
        defaultValue="京东多快好省京东多快好省京东多快好省"
        clearable
        rightIcon={<Search />}
      />
      <Divider />
      <Input
        defaultValue="京东多快好省京东多快好省京东多快好省"
        clearable
        rightIcon={<Search />}
        plain
      />
    </>
  )
}
export default Demo16
