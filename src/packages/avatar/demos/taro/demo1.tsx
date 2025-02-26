import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const styles = { marginRight: 30 }
  return (
    <Cell className="cell-avatar" align="flex-end">
      <Avatar
        size="60"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        style={styles}
      />
      <Avatar
        style={styles}
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <Avatar
        size="32"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
    </Cell>
  )
}
export default Demo1
