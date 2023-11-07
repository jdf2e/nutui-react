# InfiniteLoading 滾動加載

## 介紹

列錶滾動到底部自動加載更多數據。

## 安裝

```tsx
import { InfiniteLoading } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react'

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

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defaultList.push(`${i}`)
    }
    setDefaultList([...defaultList])
  }

  return (
    <>
      <h2>基礎用法</h2>
      <Cell>
        <ul id="scroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="scroll"
            hasMore={hasMore}
            onLoadMore={loadMore}
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
  const [refreshHasMore, setRefreshHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    for (let i = 0; i < 10; i++) {
      refreshList.push(`${i}`)
    }
    setRefreshList([...refreshList])
  }

  const refreshLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = refreshList.length
      for (let i = curLen; i < curLen + 10; i++) {
        refreshList.push(`${i}`)
      }
      if (refreshList.length >= 30) {
        setRefreshHasMore(false)
      } else {
        setRefreshList([...refreshList])
      }
      done()
    }, 500)
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      Toast.show('刷新成功')
      done()
    }, 1000)
  }

  return (
    <>
      <h2>下拉刷新</h2>
      <Cell>
        <ul id="refreshScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            pullingText={
              <>
                <Jd />
                <span style={{ fontSize: '10px' }}>鬆開刷新</span>
              </>
            }
            loadingText={<Jd />}
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
      </Cell>
    </>
  )
}
export default App
```

:::

### 自定義加載文案

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react'

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

  const customLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = customList.length
      for (let i = curLen; i < curLen + 10; i++) {
        customList.push(`${i}`)
      }
      if (customList.length >= 30) {
        setCustomHasMore(false)
      } else {
        setCustomList([...customList])
      }
      done()
    }, 500)
  }

  return (
    <>
      <h2>自定義加載文案</h2>
      <Cell>
        <ul id="customScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="customScroll"
            loadingText="loading"
            loadMoreText="沒有啦～"
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
export default App
```

:::


### 基於window滾動

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react'

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

  const customLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = customList.length
      for (let i = curLen; i < curLen + 10; i++) {
        customList.push(`${i}`)
      }
      if (customList.length >= 30) {
        setCustomHasMore(false)
      } else {
        setCustomList([...customList])
      }
      done()
    }, 500)
  }

  return (
    <>
      <h2>基於window滾動</h2>
      <Cell>
        <ul id="customScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            loadingText="loading"
            loadMoreText="沒有啦～"
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
export default App
```

:::

## InfiniteLoading

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| hasMore | 是否還有更多數據 | `boolean` | `true` |
| threshold | 距離底部多遠加載 | `number` | `200` |
| capture | 是否使用捕獲模式 true 捕獲 false 冒泡 | `boolean` | `false` |
| target | 獲取監聽的目標元素 | `string` | `-` |
| loadMoreText | “沒有更多數”據展示文案 | `string` | `哎呀，這裏是底部了啦` |
| pullRefresh | 是否開啟下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `鬆手刷新` |
| loadingText | 上拉加載提示文案 | `ReactNode` | `加載中...` |
| onRefresh | 下拉刷新事件回調 | `(param: () => void) => void` | `-` |
| onLoadMore | 繼續加載的回調函數 | `(param: () => void) => void` | `-` |
| onScroll | 實時監聽滾動高度 | `(param: number) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-infiniteloading-bottom-color | 滑動到底部的文字顏色 | `#c8c8c8` |