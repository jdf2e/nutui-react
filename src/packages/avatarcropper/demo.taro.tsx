import React, { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { AvatarCropper } from './avatarcropper.taro'
import type { AvatarCropperRef } from './avatarcropper.taro'
import Header from '@/sites/components/header'
import { Cell, Button, Avatar } from '@/packages/nutui.react.taro'
import './demo.scss'

interface T {
  c0a1c0a1: string
  c0a1c0a2: string
}
const AvatarCropperDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      c0a1c0a1: '基础用法',
      c0a1c0a2: '自定义裁剪区域工具栏',
    },
    'zh-TW': {
      c0a1c0a1: '基礎用法',
      c0a1c0a2: '自定義裁剪區域工具欄',
    },
    'en-US': {
      c0a1c0a1: 'Basic usage',
      c0a1c0a2: 'Customize the cropping area toolbar',
    },
  })
  const [imageUrl, setImageUrl] = useState(
    'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
  )
  const avatarCropperRef = useRef<AvatarCropperRef>(null)
  const cutImage = (data: any) => {
    setImageUrl(data)
  }
  const Toolbar = () => {
    return (
      <div className="toolbar">
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.cancel()}
        >
          取消
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.reset()}
        >
          重置
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.rotate()}
        >
          旋转
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.confirm()}
        >
          确认
        </Button>
      </div>
    )
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
            ref={avatarCropperRef}
            toolbarPosition="top"
            editText="修改"
            onConfirm={cutImage}
            toolbar={<Toolbar />}
          >
            <Avatar size="large" src={imageUrl} />
          </AvatarCropper>
        </Cell>
      </div>
    </>
  )
}

export default AvatarCropperDemo
