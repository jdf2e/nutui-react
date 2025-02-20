import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  const styles = { marginRight: '30px' }
  return (
    <Cell align="flex-end">
      <Avatar
        size="large"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        style={styles}
      />
      <Avatar
        size="normal"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        style={styles}
      />
      <Avatar
        size="small"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
    </Cell>
  )
}
export default Demo1
