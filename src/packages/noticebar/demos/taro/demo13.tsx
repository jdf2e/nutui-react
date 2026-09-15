import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { NoticeBar, Button } from '@nutui/nutui-react-taro'

const Demo13 = () => {
  const [visible, setVisible] = useState(true)

  const reset = () => {
    setVisible(false)
    setTimeout(() => setVisible(true), 100)
  }

  return (
    <>
      {visible && (
        <NoticeBar
          content="提示文案描述文案描文案"
          description="文案提示描述描述描述"
          action={
            <Button size="small" type="primary">
              强行动点
            </Button>
          }
          autoClose={5000}
          onClose={() => {}}
          wrap
        />
      )}
      <View style={{ height: 12 }} />
      <Button size="small" onClick={reset}>
        重新展示
      </Button>
    </>
  )
}
export default Demo13
