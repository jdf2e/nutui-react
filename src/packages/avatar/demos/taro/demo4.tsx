import React from 'react'
import { Avatar, Cell, harmony, td } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const styles = { marginRight: 30 }
  const variableDisabled = harmony() || td()
  return (
    <Cell className="cell-avatar">
      <Avatar
        color="#ffffff"
        background={`${variableDisabled ? '#ff0f23' : 'var(--nutui-color-primary)'}`}
        icon={<User />}
        style={styles}
      />
      <Avatar
        color={`${variableDisabled ? '#ff0f23' : 'var(--nutui-color-primary)'}`}
        background={`${variableDisabled ? '#ffebf1' : 'var(--nutui-color-primary-light-pressed)'}`}
      >
        U
      </Avatar>
    </Cell>
  )
}
export default Demo4
