import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Refresh, Retweet } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import {
  Cell,
  Button,
  Avatar,
  AvatarCropper,
} from '@/packages/nutui.react.taro'
import './demo.scss'

interface T {
  c0a1c0a1: string
  c0a1c0a2: string
  c0a1c0a3: string
}
const AvatarCropperDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      c0a1c0a1: '基础用法',
      c0a1c0a2: '自定义裁剪区域工具栏',
      c0a1c0a3: '圆形裁剪',
    },
    'zh-TW': {
      c0a1c0a1: '基礎用法',
      c0a1c0a2: '自定義裁剪區域工具欄',
      c0a1c0a3: '圓形裁剪',
    },
    'en-US': {
      c0a1c0a1: 'Basic usage',
      c0a1c0a2: 'Customize the cropping area toolbar',
      c0a1c0a3: 'Roll Finger Cutting',
    },
  })
  const [imageUrl, setImageUrl] = useState(
    'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
  )
  const cutImage = (data: any) => {
    setImageUrl(data)
  }
  return (
    <>
      <Header />
      <div
        className={`demo ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        } full avatar-demo`}
      >
        <h2>{translated.c0a1c0a1}</h2>
        <Cell>
          <AvatarCropper onConfirm={cutImage}>
            <Avatar size="large" src={imageUrl} />
          </AvatarCropper>
        </Cell>
        <h2>{translated.c0a1c0a2}</h2>
        <Cell>
          <AvatarCropper
            toolbarPosition="top"
            editText="修改"
            onConfirm={cutImage}
            toolbar={[
              <Button type="danger" key="cancel">
                取消
              </Button>,
              <Refresh key="reset" />,
              <Retweet key="rotate" />,
              <Button type="success" key="confirm">
                确认
              </Button>,
            ]}
          >
            <Avatar size="large" src={imageUrl} />
          </AvatarCropper>
        </Cell>
        <h2>{translated.c0a1c0a3}</h2>
        <Cell>
          <AvatarCropper shape="round" onConfirm={cutImage}>
            <Avatar size="large" shape="round" src={imageUrl} />
          </AvatarCropper>
        </Cell>
      </div>
    </>
  )
}

export default AvatarCropperDemo
