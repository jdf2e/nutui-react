import React from 'react'
import { Text } from '@tarojs/components'
import { NoticeBar, Image, Button } from '@nutui/nutui-react-taro'
import { Tips } from '@nutui/icons-react-taro'

// 营销配图在单行和双行示例中分别以 24px、32px 展示。
const marketingIcon =
  'https://img12.360buyimg.com/img/jfs/t1/583418/7/5732/1622/6afa7bbcFcc8e9921/02760480485f2fbf.png'

// 展示营销通知的单行和带副文案双行形态，保持 H5 与小程序示例一致。
const Demo15 = () => {
  // 两种布局复用相同的行动按钮，保持主色与尺寸一致。
  const action = (
    <Button size="small" type="primary">
      强行动点
    </Button>
  )

  return (
    <>
      <NoticeBar
        className="marketing-noticebar"
        leftIcon={<Image width="24" height="24" src={marketingIcon} />}
        tag={<Tips width={12} height={12} />}
        action={action}
        closeable
        scrollable={false}
      >
        提示文案描述文案
        <Text className="marketing-noticebar-benefit">利益点</Text>
      </NoticeBar>
      <NoticeBar
        className="marketing-noticebar"
        description="文案提示描述描述描述"
        leftIcon={<Image width="32" height="32" src={marketingIcon} />}
        tag={<Tips width={12} height={12} />}
        action={action}
        closeable
        scrollable={false}
        wrap
      >
        提示文案描述文案
        <Text className="marketing-noticebar-benefit">利益点</Text>
      </NoticeBar>
    </>
  )
}

export default Demo15
