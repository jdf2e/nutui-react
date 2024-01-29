# InfiniteLoading 滚动加载

## 介绍

列表滚动到底部自动加载更多数据。

## 安装

```tsx
import { InfiniteLoading } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Cell, InfiniteLoading, InfiniteLoadingStatusType } from '@nutui/nutui-react'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {setTimeout(resolve, time)})
const InfiniteUlStyle = {
  height: '300px',
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
  const [status, setStatus] = useState<InfiniteLoadingStatusType>('load')
  const [reverse] = useState(false)
  const fillColor: string = useMemo(() => {
    return reverse ? '#FFFFFF' : '#8C8C8C'
  }, [reverse])

  const joySvg = useMemo(() => {
    return (
      <i className="nut-infiniteloading-bottom-tips-icons">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_252_47)">
            <path
              d="M23.1507 10.6435C21.8958 9.29889 21.6209 7.28491 20.8022 6.60353C19.9835 5.92216 18.7824 7.00753 18.3402 7.6467C15.896 5.92216 11.9879 6.00054 11.9879 6.00054C11.9879 6.00054 8.09759 5.92216 5.6475 7.6467C5.20528 7.00753 4.01012 5.92216 3.19143 6.60353C2.37274 7.28491 2.10383 9.29889 0.848906 10.6435C-0.0892994 11.6566 -0.166985 11.952 0.215468 12.754C0.591945 13.556 2.93447 14.2193 4.58977 12.6334C4.81088 13.4595 6.67534 18 11.9938 18C17.3123 18 19.1887 13.4595 19.4039 12.6334C21.0592 14.2193 23.4077 13.556 23.7901 12.754C24.1666 11.952 24.0889 11.6566 23.1507 10.6435Z"
              fill={fillColor}
            />
          </g>
        </svg>
      </i>
    )
  }, [fillColor])

  const networkExceptionSvg = useMemo(() => {
    return (
      <i className="nut-infiniteloading-bottom-tips-icons">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <g clipPath="url(#clip0_252_861)">
            <path
              d="M0.148233 2.88529C-0.049411 3.07978 -0.049411 3.39511 0.148233 3.5896C0.345877 3.78409 0.666322 3.78409 0.863966 3.5896C3.70061 0.798205 8.29971 0.798205 11.1364 3.5896C11.334 3.78409 11.6544 3.78409 11.8521 3.5896C12.0497 3.39511 12.0497 3.07978 11.8521 2.88529C8.62016 -0.295095 3.38016 -0.295095 0.148233 2.88529Z"
              fill={fillColor}
            />
            <path
              d="M1.98956 5.68688C1.79273 5.4932 1.79273 5.17917 1.98956 4.98548C4.20459 2.80578 7.79587 2.80578 10.0109 4.98548C10.2077 5.17917 10.2077 5.4932 10.0109 5.68688C9.81408 5.88057 9.49496 5.88057 9.29813 5.68688C7.47675 3.89455 4.52371 3.89455 2.70233 5.68688C2.5055 5.88057 2.18638 5.88057 1.98956 5.68688Z"
              fill={fillColor}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00025 11.5003C7.39532 11.5003 8.52625 10.3874 8.52625 9.01454C8.52625 7.64172 7.39532 6.52882 6.00025 6.52882C4.60517 6.52882 3.47424 7.64172 3.47424 9.01454C3.47424 10.3874 4.60517 11.5003 6.00025 11.5003ZM7.36134 9.65244L6.71311 9.01455L7.36137 8.37663L6.65997 7.66386L6.00025 8.31306L5.34054 7.66386L4.63914 8.37663L5.28739 9.01455L4.63917 9.65244L5.34056 10.3652L6.00025 9.71604L6.65994 10.3652L7.36134 9.65244Z"
              fill={fillColor}
            />
          </g>
        </svg>
      </i>
    )
  }, [fillColor])

  const loadMore = async () => {
    await sleep(2000)
    const curLen = defaultList.length
    for (let i = curLen; i < curLen + 10; i++) {
      defaultList.push(`${i}`)
    }
    if (defaultList.length >= 30) {
      setHasMore(false)
    } else {
      setDefaultList([...defaultList])
    }
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defaultList.push(`${i}`)
    }
    setDefaultList([...defaultList])
  }

  useEffect(() => {
    init()
     
  }, [])

  return (
    <>
      <h2>基础用法</h2>
      <Cell>
        <ul id="scroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="scroll"
            status={status}
            onLoadMore={loadMore}
            reverse={reverse}
            loadingText={
              <>
                {joySvg}
                加载中
              </>
            }
            loadMoreText={
              <>
                {joySvg}
                没有更多了
              </>
            }
            networkExceptionText={
                <>
                  {networkExceptionSvg}
                  网络不太顺畅，点我再试试
                </>
              }
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

### 下拉刷新

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react'
import { Jd } from '@nutui/icons-react'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {setTimeout(resolve, time)})
const InfiniteUlStyle = {
  height: '300px',
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
  const [refreshList, setRefreshList] = useState<string[]>([])
  const [refreshStatus, setRefreshStatus] =
    useState<InfiniteLoadingStatusType>('load')

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    for (let i = 0; i < 10; i++) {
      refreshList.push(`${i}`)
    }
    setRefreshList([...refreshList])
  }

  const refreshLoadMore = async () => {
    await sleep(2000)
    const curLen = refreshList.length
    for (let i = curLen; i < curLen + 10; i++) {
      refreshList.push(`${i}`)
    }
    if (refreshList.length >= 30) {
      setRefreshStatus('loadMore')
    } else {
      setRefreshList([...refreshList])
    }
  }

  const refresh = async () => {
    await sleep(1000)
    Toast.show('刷新成功')
  }

  return (
    <>
      <h2>下拉刷新</h2>
      <Cell>
        <ul id="refreshScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            pullingText={
              <>
                 <i className="nut-infiniteloading-top-tips-icons">
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
            loadingText={<Jd />}
            target="refreshScroll"
            pullRefresh
            status={refreshStatus}
            onLoadMore={refreshLoadMore}
            onRefresh={refresh}
          >
            {refreshList.map((item, index) => {
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

### 自定义加载文案

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {setTimeout(resolve, time)})
const InfiniteUlStyle = {
  height: '300px',
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
  const [customList, setCustomList] = useState<string[]>([])
  const [customStatus, setCustomStatus] =
    useState<InfiniteLoadingStatusType>('load')

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    for (let i = 0; i < 10; i++) {
      customList.push(`${i}`)
    }
    setCustomList([...customList])
  }

  const customLoadMore = async () => {
    await sleep(2000)
    const curLen = customList.length
    for (let i = curLen; i < curLen + 10; i++) {
      customList.push(`${i}`)
    }
    if (customList.length >= 30) {
      setCustomStatus('loadMore')
    } else {
      setCustomList([...customList])
    }
  }

  return (
    <>
      <h2>自定义加载文案</h2>
      <Cell>
        <ul id="customScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="customScroll"
            loadingText="loading"
            loadMoreText="没有啦～"
            status={customStatus}
            onLoadMore={customLoadMore}
          >
            {customList.map((item, index) => {
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


### 基于window滚动

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {setTimeout(resolve, time)})
const InfiniteUlStyle = {
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
  const [customList, setCustomList] = useState<string[]>([])
  const [customStatus, setCustomStatus] =
    useState<InfiniteLoadingStatusType>('load')

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    for (let i = 0; i < 10; i++) {
      customList.push(`${i}`)
    }
    setCustomList([...customList])
  }

  const customLoadMore = async () => {
    await sleep(2000)
    const curLen = customList.length
    for (let i = curLen; i < curLen + 10; i++) {
      customList.push(`${i}`)
    }
    if (customList.length >= 30) {
      setCustomStatus('loadMore')
    } else {
      setCustomList([...customList])
    }
  }

  return (
    <>
      <h2>基于window滚动</h2>
      <Cell>
        <ul id="customScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            loadingText="loading"
            loadMoreText="没有啦～"
            status={customStatus}
            onLoadMore={customLoadMore}
          >
            {customList.map((item, index) => {
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
| threshold | 距离底部多远加载 | `number` | `200` |
| capture | 是否使用捕获模式 true 捕获 false 冒泡 | `boolean` | `false` |
| target | 获取监听的目标元素 | `string` | `-` |
| status | 当前状态 | `load` \| `loadMore` \| `networkException` \|  `overtimeException` | `load` |
| reverse | 反白 | `boolean` | `false` |
| loadMoreText | “没有更多数据”展示文案 | `string` | `哎呀，这里是底部了啦` |
| pullRefresh | 是否开启下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `松手刷新` |
| loadingText | 上拉加载提示文案 | `ReactNode` | `加载中` |
| networkExceptionText | 网络异常提示文案 | `ReactNode` | `网络不太顺畅，点我再试试` |
| overtimeExceptionText | 网络拥挤提示文案 | `ReactNode` | `当前访问人数过多，请刷新试试` |
| onRefresh | 下拉刷新事件回调 | `() => Promise<void>` | `-` |
| onLoadMore | 继续加载的回调函数 | `() => Promise<void>` | `-` |
| onScroll | 实时监听滚动高度 | `(param: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-infiniteloading-color | 滑动到底部的文字颜色 | `$color-text-help` |
| \--nutui-infiniteloading-icon-size | 滑动到底部的文字颜色 | `24px` |