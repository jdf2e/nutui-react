import React from 'react'
import { Space } from './space'
import Button from '@/packages/button'
import Cell from '@/packages/cell'
import ConfigProvider from '@/packages/configprovider'

const SpaceDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Space>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </Space>
        </Cell>

        <h2>换行</h2>
        <Cell>
          <Space wrap>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
            <Button>按钮4</Button>
            <Button>按钮5</Button>
            <Button>按钮6</Button>
          </Space>
        </Cell>

        <h2>垂直</h2>
        <Cell>
          <Space direction="vertical">
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </Space>
        </Cell>

        <h2>间距大小</h2>
        <Cell>
          <ConfigProvider
            theme={{
              nutuiSpaceGap: '20px',
            }}
          >
            <Space>
              <Button>按钮1</Button>
              <Button>按钮2</Button>
              <Button>按钮3</Button>
            </Space>
          </ConfigProvider>
        </Cell>
      </div>
    </>
  )
}

export default SpaceDemo
