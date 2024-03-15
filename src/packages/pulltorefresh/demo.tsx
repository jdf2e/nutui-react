import React, { useState } from 'react'
import { PullToRefresh } from './pulltorefresh'
import Toast from '@/packages/toast'
import { useTranslate } from '@/sites/assets/locale'

const PullToRefreshDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      primary: '反白模式',
    },
    'zh-TW': {
      basic: '基礎用法',
      primary: '反白模式',
    },
    'en-US': {
      basic: 'Basic Usage',
      primary: 'reverse',
    },
  })
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <PullToRefresh
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

        <h2>{translated.primary}</h2>
        <div>
          <PullToRefresh
            type="primary"
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
      </div>
    </>
  )
}

export default PullToRefreshDemo
