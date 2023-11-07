import React from 'react'
import Taro from '@tarojs/taro'
import { Top } from '@nutui/icons-react-taro'
import { BackTop, Cell } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

interface T {
  title: string
  clg: string
  backText: string
  content: string
}

const BackTopDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title: '基础用法',
      clg: '触发返回顶部',
      content: '我是测试数据',
      backText: '顶部',
    },
    'en-US': {
      title: 'Basic Usage',
      clg: 'backtop',
      content: 'test data',
      backText: 'Top',
    },
  })
  const demoStyle = {
    height: 'auto',
    minHeight: 'auto',
  }

  const handleClick = () => {
    console.log(translated.clg)
  }

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={demoStyle}
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
