import React from 'react'
import { Search } from '@nutui/icons-react-taro'
import { Divider, Input } from '@nutui/nutui-react-taro'

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
        defaultValue="京东多快好省多快好省"
        clearable
        rightIcon={<Search />}
        plain
      />
    </>
  )
}
export default Demo16
