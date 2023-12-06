# InfiniteLoading 滚动加载

## 介绍

列表滚动到底部自动加载更多数据。

## 安装

```tsx
import { InfiniteLoading } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { Jd } from '@nutui/icons-react-taro'
import { Cell, InfiniteLoading } from '@nutui/nutui-react-taro'

const InfiniteUlStyle = {
  height: '500px',
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const InfiniteLiStyle = {
  marginTop: '10px',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center',
}
const App = () => {
  const [defaultList, setDefaultList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const loadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = defaultList.length
      for (let i = curLen; i < curLen + 10; i++) {
        defaultList.push(`${i}`)
      }
      if (defaultList.length >= 30) {
        setHasMore(false)
      } else {
        setDefaultList([...defaultList])
      }
      done()
    }, 500)
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      Taro.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000,
      })
      done()
    }, 1000)
  }

  const init = () => {
    for (let i = 0; i < 20; i++) {
      defaultList.push(`${i}`)
    }
    setDefaultList([...defaultList])
  }

  return (
    <>
      <h2>基础用法</h2>
      <Cell>
        <ul id="scrollDemo" style={InfiniteUlStyle}>
          <InfiniteLoading
            pullingText={
              <>
                <i className="top-box-icons">
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
                松开刷新
              </>
            }
            loadingText={
              <>
                <i className="bottom-box-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="2" cy="12" r="2" fill="#8C8C8C" />
                    <circle cx="12" cy="12" r="2" fill="#8C8C8C" />
                    <circle cx="22" cy="12" r="2" fill="#8C8C8C" />
                  </svg>
                </i>
                加载中
              </>
            }
            loadMoreText={
              <>
                <i className="bottom-box-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_202_858)">
                      <path
                        d="M23.1507 10.6435C21.8958 9.29889 21.6209 7.28491 20.8022 6.60353C19.9835 5.92216 18.7824 7.00753 18.3402 7.6467C15.896 5.92216 11.9879 6.00054 11.9879 6.00054C11.9879 6.00054 8.09759 5.92216 5.6475 7.6467C5.20528 7.00753 4.01012 5.92216 3.19143 6.60353C2.37274 7.28491 2.10383 9.29889 0.848906 10.6435C-0.0892994 11.6566 -0.166985 11.952 0.215468 12.754C0.591945 13.556 2.93447 14.2193 4.58977 12.6334C4.81088 13.4595 6.67534 18 11.9938 18C17.3123 18 19.1887 13.4595 19.4039 12.6334C21.0592 14.2193 23.4077 13.556 23.7901 12.754C24.1666 11.952 24.0889 11.6566 23.1507 10.6435Z"
                        fill="#8C8C8C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_202_858">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                没有更多了
              </>
            }
            pullRefresh
            target="scrollDemo"
            hasMore={hasMore}
            onLoadMore={loadMore}
            onRefresh={refresh}
          >
            {defaultList.map((item, index) => {
              return (
                <li key={index} style={InfiniteLiStyle}>
                  {item}
                </li>
              )
            })}
          </InfiniteLoading>
        </ul>
      </Cell>
    </>
  )
}
export default App
```

:::

## InfiniteLoading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hasMore | 是否还有更多数据 | `boolean` | `true` |
| threshold | 距离底部多远加载 | `number` | `200` |
| target | 获取监听的目标元素 | `string` | `-` |
| loadMoreText | “没有更多数”据展示文案 | `string` | `哎呀，这里是底部了啦` |
| pullRefresh | 是否开启下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `松手刷新` |
| loadingText | 上拉加载提示文案 | `ReactNode` | `刷新中` |
| onRefresh | 下拉刷新事件回调 | `(param: () => void) => void` | `-` |
| onLoadMore | 继续加载的回调函数 | `(param: () => void) => void` | `-` |
| onScroll | 实时监听滚动高度 | `(param: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-infiniteloading-color | 滑动到底部的文字颜色 | `$color-text-help` |
| \--nutui-infiniteloading-icon-size | 滑动到底部的文字颜色 | `24px` |
