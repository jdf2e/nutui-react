import React, { useState } from 'react'
import { PullToRefresh } from './pulltorefresh'
import Toast from '@/packages/toast'
import { useTranslate } from '@/sites/assets/locale'

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
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <PullToRefresh
          style={{
            backgroundColor: `var(--nutui-gray-7)`,
            color: 'var(--nutui-gray-1)',
          }}
          onRefresh={() =>
            new Promise((resolve) => {
              Toast.show('😊')
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
      </div>
    </>
  )
}

export default PullToRefreshDemo
