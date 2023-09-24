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
                <Jd />
                <span style={{ fontSize: '10px' }}>松开刷新</span>
              </>
            }
            loadingText="加载中···"
            loadMoreText="没有啦～"
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
| loadingText | 上拉加载提示文案 | `ReactNode` | `加载中...` |
| onRefresh | 下拉刷新事件回调 | `(param: () => void) => void` | `-` |
| onLoadMore | 继续加载的回调函数 | `(param: () => void) => void` | `-` |
| onScroll | 实时监听滚动高度 | `(param: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-infiniteloading-color | 滑动到底部的文字颜色 | `$color-text-help` |
| \--nutui-infiniteloading-bottom-icon-size | 滑动到底部的文字颜色 | `24px` |