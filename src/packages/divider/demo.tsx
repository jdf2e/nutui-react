import React from 'react'
import { Divider } from './divider'

const DividerDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Divider />
        <h2>展示文本</h2>
        <Divider>文本</Divider>
        <h2>内容位置</h2>
        <Divider contentPosition="left">文本</Divider>
        <Divider contentPosition="right">文本</Divider>
        <h2>虚线</h2>
        <Divider dashed>文本</Divider>
        <h2>自定义样式</h2>
        <Divider
          styles={{
            color: '#1989fa',
            borderColor: '#1989fa',
            padding: '0 16px',
          }}
        >
          文本
        </Divider>
        <h2>垂直分割线</h2>
        <div style={{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }}>
          文本
          <Divider direction="vertical" />
          <a href="#/Divider" style={{ color: '#1989fa' }}>
            链接
          </a>
          <Divider direction="vertical" />
          <a href="#/Divider" style={{ color: '#1989fa' }}>
            链接
          </a>
        </div>
      </div>
    </>
  )
}

export default DividerDemo
