import React from 'react'
import { NoticeBar, Image, Button } from '@nutui/nutui-react'

// 保留商品图的透明边缘，让图片从公告栏顶部自然破出。
const productImage =
  'https://img10.360buyimg.com/img/jfs/t1/587782/22/3765/28600/6afa99baF14c5496c/02760c008465e2f0.png'

// 通过左侧图片与自定义行动区展示破出形态，文案保持单行静态展示。
const Demo16 = () => {
  return (
    <NoticeBar
      className="breakout-noticebar"
      content="最大支持文本十个汉字"
      leftIcon={
        <Image
          className="breakout-noticebar-product"
          width="64"
          height="44"
          src={productImage}
          alt="手机优惠商品"
        />
      }
      action={
        <Button className="breakout-noticebar-coupon" size="small">
          <span className="breakout-noticebar-coupon-content">
            <span className="breakout-noticebar-value">¥80</span>
            <span className="breakout-noticebar-label">立即领取</span>
          </span>
        </Button>
      }
      closeable
      scrollable={false}
    />
  )
}

export default Demo16
