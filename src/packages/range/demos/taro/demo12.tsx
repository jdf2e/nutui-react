import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo12 = () => {
  const verticalStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          height: pxTransform(180),
          paddingTop: pxTransform(10),
          paddingBottom: pxTransform(10),
          paddingLeft: pxTransform(10),
          paddingRight: pxTransform(10),
        }
      : {
          height: '180px',
          padding: '10px',
        }
  }, [])
  const viewStyle = useMemo(
    () => ({ width: pxTransform(150), height: '100%' }),
    []
  )
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={verticalStyle}>
        <View style={viewStyle}>
          <Range
            defaultValue={20}
            vertical
            onEnd={(val) => showToast(`${val}`)}
          />
        </View>
        <View style={viewStyle}>
          <Range
            defaultValue={[20, 80]}
            vertical
            range
            onEnd={(val) => showToast(`${val}`)}
          />
        </View>
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo12
