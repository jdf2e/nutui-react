import React from 'react'
import { Space } from './space'
import Button from '@/packages/button'
import Cell from '@/packages/cell'
import ConfigProvider from '@/packages/configprovider'
import { useTranslate } from '@/sites/assets/locale'

interface Button {
  button1: string
  button2: string
  button3: string
  button4: string
  button5: string
  button6: string
}
interface T extends Button {
  basic: string
  wrap: string
  direction: string
  spaceGap: string
}
const SpaceDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      wrap: '换行',
      direction: '垂直',
      spaceGap: '间距大小',
      button1: '按钮1',
      button2: '按钮2',
      button3: '按钮3',
      button4: '按钮4',
      button5: '按钮5',
      button6: '按钮6',
    },
    'zh-TW': {
      basic: '基本用法',
      wrap: '換行',
      direction: '垂直',
      spaceGap: '間距大小',
      button1: '按钮1',
      button2: '按钮2',
      button3: '按钮3',
      button4: '按钮4',
      button5: '按钮5',
      button6: '按钮6',
    },
    'en-US': {
      basic: 'Basic Usage',
      wrap: 'wrap',
      direction: 'Direction',
      spaceGap: 'SpaceGap',
      button1: 'button1',
      button2: 'button2',
      button3: 'button3',
      button4: 'button4',
      button5: 'button5',
      button6: 'button6',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Space>
            <Button>{translated.button1}</Button>
            <Button>{translated.button2}</Button>
            <Button>{translated.button3}</Button>
          </Space>
        </Cell>

        <h2>{translated.wrap}</h2>
        <Cell>
          <Space wrap>
            <Button>{translated.button1}</Button>
            <Button>{translated.button2}</Button>
            <Button>{translated.button3}</Button>
            <Button>{translated.button4}</Button>
            <Button>{translated.button5}</Button>
            <Button>{translated.button6}</Button>
          </Space>
        </Cell>

        <h2>{translated.direction}</h2>
        <Cell>
          <Space direction="vertical">
            <Button>{translated.button1}</Button>
            <Button>{translated.button2}</Button>
            <Button>{translated.button3}</Button>
          </Space>
        </Cell>

        <h2>{translated.spaceGap}</h2>
        <Cell>
          <ConfigProvider
            theme={{
              nutuiSpaceGap: '20px',
            }}
          >
            <Space>
              <Button>{translated.button1}</Button>
              <Button>{translated.button2}</Button>
              <Button>{translated.button3}</Button>
            </Space>
          </ConfigProvider>
        </Cell>
      </div>
    </>
  )
}

export default SpaceDemo
