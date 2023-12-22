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
  const svgPulling = () => {
    return (
      <i className="nut-pulltorefresh-head-content-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
        >
          <path
            d="M34.7243 10.965C32.842 8.94809 32.4297 5.92727 31.2018 4.90525C29.9738 3.88324 28.1722 5.51123 27.5089 6.46993C23.8429 3.88324 17.9809 4.00082 17.9809 4.00082C17.9809 4.00082 12.1458 3.88324 8.47083 6.46993C7.80754 5.51123 6.01488 3.88324 4.78691 4.90525C3.55894 5.92727 3.15559 8.94809 1.2733 10.965C-0.133943 12.4844 -0.250465 12.9276 0.323186 14.1305C0.887874 15.3334 4.40149 16.3283 6.88432 13.9496C7.21596 15.1887 10.0125 21.9991 17.9899 21.9991C25.9672 21.9991 28.7817 15.1887 29.1043 13.9496C31.5872 16.3283 35.1098 15.3334 35.6834 14.1305C36.2481 12.9276 36.1316 12.4844 34.7243 10.965Z"
            fill="#8C8C8C"
          />
        </svg>
      </i>
    )
  }

  const svgRelease = () => {
    return (
      <i className="nut-pulltorefresh-head-content-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
        >
          <circle cx="33" cy="13" r="3" fill="#8C8C8C" />
          <circle cx="18" cy="13" r="3" fill="#8C8C8C" />
          <circle cx="3" cy="13" r="3" fill="#8C8C8C" />
        </svg>
      </i>
    )
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <PullToRefresh
          style={{
            backgroundColor: `var(--nutui-gray-3)`,
            color: 'var(--nutui-gray-7)',
          }}
          pullingText={
            <>
              {svgPulling()}
              <div>下拉刷新</div>
            </>
          }
          canReleaseText={
            <>
              {svgRelease()}
              <div>松手刷新</div>
            </>
          }
          refreshingText={
            <>
              {svgRelease()}
              <div>刷新中</div>
            </>
          }
          completeText={
            <>
              {svgPulling()}
              <div>刷新成功</div>
            </>
          }
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
