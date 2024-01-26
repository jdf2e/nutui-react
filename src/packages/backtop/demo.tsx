import React from 'react'
import { Top } from '@nutui/icons-react'
import { BackTop } from './backtop'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '../cell'

interface T {
  title: string
  clg: string
  backText: string
  content: string
}

const BackTopDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title: 'click事件',
      clg: '触发返回顶部',
      content: '我是测试数据',
      backText: '顶部',
    },
    'en-US': {
      title: 'Click event',
      clg: 'backtop',
      content: 'test data',
      backText: 'Top',
    },
    'zh-TW': {
      title: 'click事件',
      clg: '觸發返回頂部',
      content: '我是測試數據',
      backText: '頂部',
    },
  })

  const handleClick = () => {
    console.log(translated.clg)
  }

  return (
    <>
      <div
        className="demo"
        style={{ height: '100vh', overflowY: 'auto' }}
        id="target"
      >
        <h2>{translated.title}</h2>
        {new Array(24).fill(0).map((_, index) => {
          return <Cell key={index}>{translated.content + index}</Cell>
        })}
        <BackTop
          threshold={200}
          style={{
            bottom: '50px',
            right: '20px',
          }}
          onClick={handleClick}
          target="target"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Top width={12} height={12} />
            <div style={{ fontSize: '12px' }}>{translated.backText}</div>
          </div>
        </BackTop>
      </div>
    </>
  )
}

export default BackTopDemo
