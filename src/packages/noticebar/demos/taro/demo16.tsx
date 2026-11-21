import React from 'react'
import { Text, View } from '@tarojs/components'
import { NoticeBar, Image, Button } from '@nutui/nutui-react-taro'

// 保留商品图的透明边缘，让图片从公告栏顶部自然破出。
const productImage =
  'https://img10.360buyimg.com/img/jfs/t1/587782/22/3765/28600/6afa99baF14c5496c/02760c008465e2f0.png'

// 与 H5 复用相同的图片尺寸及券面排版，展示小程序中的破出形态。
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
        />
      }
      action={
        <Button className="breakout-noticebar-coupon" size="small">
          <View className="breakout-noticebar-coupon-content">
            <Text className="breakout-noticebar-value">¥80</Text>
            <Text className="breakout-noticebar-label">立即领取</Text>
          </View>
        </Button>
      }
      closeable
      scrollable={false}
    />
  )
}

export default Demo16
