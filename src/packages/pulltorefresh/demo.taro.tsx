import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { PullToRefresh, Toast } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

const PullToRefreshDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
    },
    'zh-TW': {
      basic: '基礎用法',
    },
    'en-US': {
      basic: 'Basic Usage',
    },
  })
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <PullToRefresh
          style={{
            backgroundColor: `var(--nutui-gray-2)`,
            color: 'var(--nutui-gray-6)',
          }}
          onRefresh={() =>
            new Promise((resolve) => {
              toastShow('😊')
              resolve('done')
            })
          }
        >
          {list.map((item) => (
            <div
              style={{
                textAlign: 'center',
                height: '50px',
                lineHeight: '50px',
              }}
              key={item}
            >
              {item}
            </div>
          ))}
        </PullToRefresh>
        <Toast
          type="text"
          visible={show}
          msg={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
      </div>
    </>
  )
}

export default PullToRefreshDemo
