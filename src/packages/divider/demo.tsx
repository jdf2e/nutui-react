import React from 'react'
import { Divider } from './divider'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'

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
        <Cell>
          <Divider />
        </Cell>

        <h2>{translated.withText}</h2>
        <Cell>
          <Divider>{translated.text}</Divider>
        </Cell>

        <h2>{translated.contentPosition}</h2>
        <Cell>
          <Divider contentPosition="left">{translated.text}</Divider>
        </Cell>
        <Cell>
          <Divider contentPosition="right">{translated.text}</Divider>
        </Cell>
        <h2>{translated.dashed}</h2>
        <Cell>
          <Divider dashed>{translated.text}</Divider>
        </Cell>

        <h2>{translated.customStyle}</h2>
        <Cell>
          <Divider
            styles={{
              color: '#1989fa',
              borderColor: '#1989fa',
              padding: '0 16px',
            }}
          >
            {translated.text}
          </Divider>
        </Cell>
        <h2>{translated.verticalDivider}</h2>
        <Cell>
          <div style={{ fontSize: '14px', marginLeft: '27px', color: '' }}>
            {translated.text}

            <Divider direction="vertical" />
            <a href="#/Divider" style={{ color: '#4d88ff' }}>
              {translated.link}
            </a>
            <Divider direction="vertical" />
            <a href="#/Divider" style={{ color: '#4d88ff' }}>
              {translated.link}
            </a>
          </div>
        </Cell>
      </div>
    </>
  )
}

export default DividerDemo
