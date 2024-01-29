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
import { Loading, More } from '@nutui/icons-react-taro'
import { Cell, InfiniteLoading, InfiniteLoadingStatusType } from '@nutui/nutui-react-taro'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {setTimeout(resolve, time)})
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
  const [status, setStatus] = useState<InfiniteLoadingStatusType>('load')
  const [reverse] = useState(false)

  const loadMore = async () => {
    await sleep(2000)
    const curLen = defaultList.length
    const defaultCacheList = [...defaultList]
    if (defaultCacheList.length >= 100) {
      setStatus('loadMore')
    } else {
      // setStatus('networkException')
      for (let i = curLen; i < curLen + 10; i++) {
        defaultCacheList.push(`${i}`)
      }
      setDefaultList(defaultCacheList)
    }
  }

  const refresh = async () => {
    await sleep(2000)
    Taro.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 2000,
    })
  }

  const init = () => {
    for (let i = 0; i < 20; i++) {
      defaultList.push(`${i}`)
    }
    setDefaultList([...defaultList])
  }

  const fillColor: string = useMemo(() => {
    return reverse ? '#FFFFFF' : '#8C8C8C'
  }, [reverse])

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <h2>基础用法</h2>
      <Cell>
        <ul 
          id="scrollDemo" 
          style={InfiniteUlStyle}>
          <InfiniteLoading
            pullRefresh
            target="scrollDemo"
            status={status}
            onLoadMore={loadMore}
            reverse={reverse}
            onRefresh={refresh}
            pullingText={
              <>
                <Loading
                    className="nut-infiniteloading-top-tips-icons"
                    color={fillColor}
                  />
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
                <More
                    className="nut-infiniteloading-bottom-tips-icons"
                    color={fillColor}
                  />
                没有更多了
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

## InfiniteLoading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| threshold | 距离底部多远加载 | `number` | `200` |
| target | 获取监听的目标元素 | `string` | `-` |
| status | 当前状态 | `load` \| `loadMore` \| `networkException` \|  `overtimeException` | `load` |
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