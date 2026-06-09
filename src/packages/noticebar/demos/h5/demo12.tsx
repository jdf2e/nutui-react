import React from 'react'
import { NoticeBar, Button } from '@nutui/nutui-react'
import { Notice } from '@nutui/icons-react'

const Demo12 = () => {
  return (
    <>
      <NoticeBar
        content="提示文案描述文案描文案描"
        tag={<Notice width={12} height={12} />}
        action={
          <Button size="small" color="#d9500b">
            强行动点
          </Button>
        }
        wrap
        closeable
      />
      <br />
      <NoticeBar
        content="提示文案描述文案描文案描"
        description="文案提示描述描述描述"
        tag={<Notice width={12} height={12} />}
        action={
          <Button size="small" color="#d9500b">
            强行动点
          </Button>
        }
        wrap
        closeable
      />
      <br />
      <NoticeBar
        wrap
        content="文案展示字"
        description="最大支持十五个汉字汉字汉字最大支持十五个汉字汉字汉字最大支持十五个汉字汉字汉字"
        tag={<Notice width={12} height={12} />}
        action={<span style={{ color: '#d9500b' }}>弱行动点 &gt;</span>}
      />
    </>
  )
}
export default Demo12
