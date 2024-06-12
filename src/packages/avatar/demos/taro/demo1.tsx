import React from 'react'
import { Avatar } from '@nutui/nutui-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo1 = () => {
  return (
    <>
      {harmonyAndRn() ? (
        <>
          <Avatar size="large">N</Avatar>
          <Avatar>N</Avatar>
          <Avatar size="small">N</Avatar>
        </>
      ) : (
        <>
          <Avatar
            size="large"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
          <Avatar
            size="small"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
        </>
      )}
    </>
  )
}
export default Demo1
