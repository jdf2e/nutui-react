import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { harmony } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo2 = () => {
  const marginStyle = harmony()
    ? {
        width: pxTransform(90),
        marginRight: pxTransform(8),
        marginTop: pxTransform(8),
        marginLeft: pxTransform(8),
        marginBottom: pxTransform(8),
      }
    : {
        marginRight: 8,
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
      }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button type="primary" style={marginStyle}>
        Primary
      </Button>
      <Button type="info" style={marginStyle}>
        Info
      </Button>
      <Button type="default" style={marginStyle}>
        Default
      </Button>
      <Button type="danger" style={marginStyle}>
        Danger
      </Button>
      <Button type="warning" style={marginStyle}>
        Warning
      </Button>
      <Button type="success" style={marginStyle}>
        Success
      </Button>
    </Cell>
  )
}
export default Demo2
