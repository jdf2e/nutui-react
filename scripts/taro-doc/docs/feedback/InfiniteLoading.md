---
sidebar_class_name: hasIcon
---

# InfiniteLoading 滚动加载

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

列表滚动到底部自动加载更多数据。

## 引入

```tsx
import { InfiniteLoading } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react-taro'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
const InfiniteUlStyle: CSSProperties = {
  height: '300px',
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const InfiniteLiStyle: CSSProperties = {
  marginTop: '10px',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center',
}
const Demo1 = () => {
  const [defaultList, setDefaultList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

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

  const renderJoyImg = (() => {
    return (
      <img
        alt=""
        style={{ height: '24px', width: '24px' }}
        src="https://img10.360buyimg.com/imagetools/jfs/t1/157510/3/39873/353/65fa8bfeF2627cb86/bd9e734d9fda59f2.png"
        className="nut-infinite-bottom-tips-icons"
      />
    )
  })()

  return (
    <>
      <Cell>
        <ul style={InfiniteUlStyle} id="scroll">
          <InfiniteLoading
            target="scroll"
            hasMore={hasMore}
            onLoadMore={loadMore}
            onScroll={() => {
              console.log('onScroll')
            }}
            onScrollToUpper={() => {
              console.log('onScrollToUpper')
            }}
            loadingText={
              <>
                {renderJoyImg}
                加载中
              </>
            }
            loadMoreText={
              <>
                {renderJoyImg}
                没有更多了
              </>
            }
          >
            {defaultList.map((item, index) => {
              return (
                <li style={InfiniteLiStyle} key={index}>
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
export default Demo1
```

### 下拉刷新

```tsx
import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading, Toast } from '@nutui/nutui-react-taro'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
const InfiniteUlStyle: CSSProperties = {
  height: '300px',
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const InfiniteLiStyle: CSSProperties = {
  marginTop: '10px',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center',
}
const Demo2 = () => {
  const [refreshList, setRefreshList] = useState<string[]>([])
  const [refreshHasMore, setRefreshHasMore] = useState(true)

  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }

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
      setRefreshHasMore(false)
    } else {
      setRefreshList([...refreshList])
    }
  }

  const refresh = async () => {
    await sleep(1000)
    toastShow('刷新成功')
  }

  return (
    <>
      <Cell>
        <ul id="refreshScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            pullingText={
              <>
                <img
                  alt=""
                  style={{ height: '26px', width: '36px' }}
                  src="https://img13.360buyimg.com/imagetools/jfs/t1/219180/19/37902/438/65fa8cbbF5278d022/5eabe69b64bba791.png"
                  className="nut-infinite-top-tips-icons"
                />
                下拉刷新
              </>
            }
            loadingText={
              <>
                <img
                  alt=""
                  style={{ height: '24px', width: '24px' }}
                  src="https://img11.360buyimg.com/imagetools/jfs/t1/180248/35/42577/173/65fab7e9Fa868ae37/41e33477f960b5b2.png"
                  className="nut-infinite-bottom-tips-icons"
                />
                加载中
              </>
            }
            target="refreshScroll"
            pullRefresh
            hasMore={refreshHasMore}
            onLoadMore={refreshLoadMore}
            onRefresh={refresh}
          >
            {refreshList.map((item, index) => {
              return (
                <li className="infiniteLi" key={index} style={InfiniteLiStyle}>
                  {item}
                </li>
              )
            })}
          </InfiniteLoading>
        </ul>
        <Toast
          type="text"
          visible={show}
          content={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
      </Cell>
    </>
  )
}
export default Demo2
```

### 自定义加载文案

```tsx
import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react-taro'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
const InfiniteUlStyle: CSSProperties = {
  height: '300px',
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const InfiniteLiStyle: CSSProperties = {
  marginTop: '10px',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center',
}
const Demo3 = () => {
  const [customList, setCustomList] = useState<string[]>([])
  const [customHasMore, setCustomHasMore] = useState(true)

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
      setCustomHasMore(false)
    } else {
      setCustomList([...customList])
    }
  }

  return (
    <>
      <Cell>
        <ul id="customScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="customScroll"
            loadingText="loading"
            loadMoreText="没有啦～"
            hasMore={customHasMore}
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
export default Demo3
```

### primary主题

```tsx
import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react-taro'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
const InfiniteUlStyle: CSSProperties = {
  height: '300px',
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const InfiniteLiStyle: CSSProperties = {
  margin: '10px 10px 0',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center',
  backgroundColor: '#FFF',
}
const Demo4 = () => {
  const [customList, setCustomList] = useState<string[]>([])
  const [customHasMore, setCustomHasMore] = useState(true)

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
      setCustomHasMore(false)
    } else {
      setCustomList([...customList])
    }
  }

  const renderJoyImg = (() => {
    return (
      <img
        alt=""
        style={{ height: '24px', width: '24px' }}
        src="https://img13.360buyimg.com/imagetools/jfs/t1/235005/5/15288/348/65fabd46F80f7367e/09fb5d99d07bee66.png"
        className="nut-infinite-bottom-tips-icons"
      />
    )
  })()

  return (
    <>
      <Cell>
        <ul id="primaryScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="primaryScroll"
            type="primary"
            loadingText={<>{renderJoyImg}加载中</>}
            loadMoreText={
              <>
                {renderJoyImg}
                没有更多了
              </>
            }
            hasMore={customHasMore}
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
export default Demo4
```

## InfiniteLoading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 主题类型 | `default`\| `primary` | `default` |
| hasMore | 是否还有更多数据 | `boolean` | `true` |
| threshold | 距离底部多远加载 | `number` | `200` |
| target | 获取监听的目标元素 | `string` | `-` |
| loadMoreText | “没有更多数据”展示文案 | `string` | `哎呀，这里是底部了啦` |
| pullRefresh | 是否开启下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `松手刷新` |
| loadingText | 上拉加载提示文案 | `ReactNode` | `刷新中` |
| onRefresh | 下拉刷新事件回调 | `() => Promise<void>` | `-` |
| onLoadMore | 继续加载的回调函数 | `() => Promise<void>` | `-` |
| onScroll | 实时监听滚动高度 | `(param: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-infiniteloading-color | 滑动到底部的文字颜色 | `$color-text-help` |
| \--nutui-infiniteloading-icon-size | 滑动到底部的文字颜色 | `24px` |
