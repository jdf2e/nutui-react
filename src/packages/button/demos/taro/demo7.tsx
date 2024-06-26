import React, { useState } from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { rn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo7 = () => {
  const [loading, setLoading] = useState(false)
  const marginStyle = {
    width: pxTransform(rn() ? 90 : 120),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8),
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button loading type="warning" style={marginStyle}>
        Loading
      </Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setLoading(!loading)
        }}
        style={marginStyle}
      >
        Click me!
      </Button>
    </Cell>
  )
}
export default Demo7
