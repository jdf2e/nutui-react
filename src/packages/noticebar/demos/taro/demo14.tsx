import React from 'react'
import { View } from '@tarojs/components'
import { NoticeBar, Image, Button } from '@nutui/nutui-react-taro'
import { Notice } from '@nutui/icons-react-taro'

const Demo14 = () => {
  return (
    <>
      <NoticeBar
        content="提示文案描述文案描文案"
        leftIcon={
          <Image
            width="24"
            height="24"
            radius="4"
            src="https://img13.360buyimg.com/img/jfs/t1/457615/24/6414/4236/6a311c29Fbc91f957/027604004006d0ec.png"
          />
        }
        tag={<Notice width={12} height={12} />}
        action={
          <Button size="small" type="primary">
            强行动点
          </Button>
        }
        closeable
      />
      <View style={{ height: 12 }} />
      <NoticeBar
        content="提示文案描述文案描文案"
        description="文案提示描述描述描述"
        leftIcon={
          <Image
            width="32"
            height="32"
            radius="4"
            src="https://img13.360buyimg.com/img/jfs/t1/457615/24/6414/4236/6a311c29Fbc91f957/027604004006d0ec.png"
          />
        }
        tag={<Notice width={12} height={12} />}
        action={<span>弱行动点 &gt;</span>}
        wrap
        closeable
      />
    </>
  )
}
export default Demo14
