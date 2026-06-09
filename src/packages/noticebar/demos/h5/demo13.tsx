import React, { useState } from 'react'
import { NoticeBar, Button } from '@nutui/nutui-react'

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
          content="提示文案描述文案描文案描"
          description="文案提示描述描述描述"
          action={
            <Button size="small" color="#d9500b">
              强行动点
            </Button>
          }
          autoClose={5000}
          onClose={() => console.log('auto closed')}
          wrap
        />
      )}
      <br />
      <Button size="small" onClick={reset}>
        重新展示
      </Button>
    </>
  )
}
export default Demo13
