import React from 'react'
import { BackTop } from './backtop'
import { useTranslate } from '../../sites/assets/locale'
import Icon from '@/packages/icon'

interface T {
  title: string
  clg: string
  backText: string
  content: string
}

const BackTopDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title: '基本用法',
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

  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }

  const handleClick = () => {
    console.log(translated.clg)
  }

  return (
    <>
      <div
        className="demo"
        style={{ height: '1300px', overflowY: 'auto' }}
        id="elId"
      >
        <h2>{translated.title}</h2>
        <div className="text-data" style={cellStyle}>
          {translated.content}1
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}2
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}3
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}4
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}5
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}6
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}7
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}8
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}9
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}10
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}11
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}12
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}13
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}14
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}15
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}16
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}17
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}18
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}19
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}20
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}21
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}22
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}23
        </div>
        <div className="text-data" style={cellStyle}>
          {translated.content}24
        </div>
        <BackTop
          className="custom-class"
          distance={100}
          bottom={110}
          onClick={handleClick}
        >
          <div
            className="backtop-demo"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Icon size="12px" className="nut-backtop-main" name="top" />
            <div style={{ fontSize: '12px' }}>{translated.backText}</div>
          </div>
        </BackTop>
        <BackTop elId="elId" distance={200} bottom={50} onClick={handleClick} />
      </div>
    </>
  )
}

export default BackTopDemo
