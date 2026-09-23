import React, { useState } from 'react'
import { Image, Text, View } from '@tarojs/components'
import { Button, PullToRefresh, pxTransform } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

// 设计提供的图标中，「常规通用」与「常规白色」已内置进组件；
// 其余主题通过 renderIcon(status) 传入自定义图片即可替换。
const ICON_CONTENTS = [
  { label: '通用', icon: '' },
  {
    label: 'agent',
    icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/520813/35/11816/49808/0050ef01F54d0d76a/03e60c80c808e944.gif',
  },
  {
    label: '大促',
    icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/525828/38/10214/71261/0050ef01F8f854fbc/03e60c80c88b0c38.gif',
  },
]

const Demo1 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  const [isPrimary, setIsPrimary] = useState(false)
  const [contentIndex, setContentIndex] = useState(0)
  const content = ICON_CONTENTS[contentIndex]

  return (
    <>
      <View>
        <Button
          block
          type="primary"
          style={{ marginBottom: pxTransform(8) }}
          onClick={() => setIsPrimary((value) => !value)}
        >
          {isPrimary ? '切换为普通模式' : '切换为反白模式'}
        </Button>
        <Button
          block
          fill="outline"
          type="primary"
          disabled={isPrimary}
          onClick={() =>
            setContentIndex((index) => (index + 1) % ICON_CONTENTS.length)
          }
        >
          {isPrimary
            ? '反白模式：图标固定为常规白色'
            : `切换图标内容：${content.label}`}
        </Button>
      </View>
      <PullToRefresh
        type={isPrimary ? 'primary' : 'default'}
        onRefresh={() =>
          new Promise((resolve) => {
            // 模拟请求耗时，便于观察「下拉刷新 -> 松手刷新 -> 刷新中」的状态切换
            setTimeout(() => {
              Taro.showToast({
                title: '😊',
                icon: 'none',
              })
              resolve('done')
            }, 1500)
          })
        }
        // 反白模式固定使用内置的常规白色图标；普通模式在「通用」时也用内置图标
        renderIcon={
          !isPrimary && content.icon
            ? () => <Image src={content.icon} />
            : undefined
        }
      >
        {list.map((item) => (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: pxTransform(50),
            }}
            key={item}
          >
            {isPrimary ? (
              <Text style={{ color: '#ffffff' }}>{item}</Text>
            ) : (
              item
            )}
          </View>
        ))}
      </PullToRefresh>
    </>
  )
}

export default Demo1
