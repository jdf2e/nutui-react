import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'
import { PullToRefresh, Cell, Toast } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

const PullToRefreshDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      scrollView: 'ScrollView',
    },
    'zh-TW': {
      basic: '基礎用法',
      scrollView: 'ScrollView',
    },
    'en-US': {
      basic: 'Basic Usage',
      scrollView: 'ScrollView',
    },
  })
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  const [scrollTop, setScrollTop] = useState(0)
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <PullToRefresh
          style={{
            backgroundColor: `var(--nutui-gray-3)`,
            color: 'var(--nutui-gray-7)',
          }}
          pullTransitionTime={300}
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

        <h2>{translated.scrollView}</h2>
        <ScrollView
          style={{ height: '150px' }}
          scrollY
          onScrollEnd={(e) => {
            // scrollTop > 0, PullToRefresh 不触发 touchmove 事件。
            if (e.detail?.scrollTop) {
              setScrollTop(e.detail?.scrollTop)
            }
          }}
        >
          <PullToRefresh
            scrollTop={scrollTop}
            pullTransitionTime={300}
            onRefresh={() =>
              new Promise((resolve) => {
                toastShow('😊')
                resolve('done')
              })
            }
          >
            {list.map((item) => (
              <Cell key={item}>{item}</Cell>
            ))}
          </PullToRefresh>
        </ScrollView>
      </div>
    </>
  )
}

export default PullToRefreshDemo
