import React from 'react'
import Taro from '@tarojs/taro'
import { Divider } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'

interface T {
  basic: string
  withText: string
  contentPosition: string
  dashed: string
  customStyle: string
  verticalDivider: string
  text: string
  link: string
}
const DividerDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      withText: '展示文本',
      contentPosition: '内容位置',
      dashed: '虚线',
      customStyle: '自定义样式',
      verticalDivider: '垂直分割线',
      text: '文本',
      link: '链接',
    },
    'en-US': {
      basic: 'Basic Usage',
      withText: 'With Text',
      contentPosition: 'Content Position',
      dashed: 'Dashed',
      customStyle: 'Custom Style',
      verticalDivider: 'Vertical Divider',
      text: 'Text',
      link: 'Link',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Divider />
        <h2>{translated.withText}</h2>
        <Divider>{translated.text}</Divider>
        <h2>{translated.withText}</h2>
        <Divider contentPosition="left">{translated.text}</Divider>
        <Divider contentPosition="right">{translated.text}</Divider>
        <h2>{translated.dashed}</h2>
        <Divider dashed>{translated.text}</Divider>
        <h2>{translated.customStyle}</h2>
        <Divider
          styles={{
            color: '#1989fa',
            borderColor: '#1989fa',
            padding: '0 16px',
          }}
        >
          {translated.text}
        </Divider>
        <h2>{translated.verticalDivider}</h2>
        <div style={{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }}>
          {translated.text}
          <Divider direction="vertical" />
          <span
            onClick={() => {
              Taro.navigateTo({ url: '/pages/index/index' })
            }}
            style={{ color: '#1989fa', display: 'inline-block' }}
          >
            {translated.link}
          </span>
          <Divider direction="vertical" />
          <span
            onClick={() => {
              Taro.navigateTo({ url: '/pages/index/index' })
            }}
            style={{ color: '#1989fa', display: 'inline-block' }}
          >
            {translated.link}
          </span>
        </div>
      </div>
    </>
  )
}

export default DividerDemo
