#  Infiniteloading 滾動加載

### 介紹

列表滾動到底部自動加載更多數據。

### 安裝

```ts
import { InfiniteLoading } from '@nutui/nutui-react';
```

### 基礎用法

:::demo
```tsx
import React, { useState, useEffect } from "react";
import { Cell, Infiniteloading } from '@nutui/nutui-react';

const InfiniteUlStyle = {
  height: '300px',
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden'
}

const InfiniteLiStyle = {
  marginTop: '10px',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center'
}
const App = () => {
  const [defultList, setDefultList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const loadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = defultList.length
      for (let i = curLen; i < curLen + 10; i++) {
        defultList.push(`${i}`)
      }
      if (defultList.length >= 30) {
        setHasMore(false)
      } else {
        setDefultList([...defultList])
      }
      done()
    }, 500)
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defultList.push(`${i}`)
    }
    setDefultList([...defultList])
  }

  return (
    <>
      <h2>基礎用法</h2>
      <Cell>
        <ul id="scroll" style={InfiniteUlStyle}>
          <Infiniteloading
            containerId="scroll"
            useWindow={false}
            hasMore={hasMore}
            loadMore={loadMore}
          >
            {defultList.map((item, index) => {
              return (
                <li key={index} style={InfiniteLiStyle}>
                  {item}
                </li>
              )
            })}
          </Infiniteloading>
        </ul>
      </Cell>
    </>
  )
}
export default App;
```
:::

### 下拉刷新

:::demo
```tsx
import React, { useState, useEffect } from "react";
import { Cell, Infiniteloading } from '@nutui/nutui-react';

const InfiniteUlStyle = {
  height: '300px',
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden'
}

const InfiniteLiStyle = {
  marginTop: '10px',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center'
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
      Toast.text('刷新成功')
      done()
    }, 1000)
  }

  return (
    <>
      <h2>下拉刷新</h2>
      <Cell>
        <ul id="refreshScroll" style={InfiniteUlStyle}>
          <Infiniteloading
            pullIcon="JD"
            containerId="refreshScroll"
            useWindow={false}
            isOpenRefresh
            hasMore={refreshHasMore}
            loadMore={refreshLoadMore}
            refresh={refresh}
          >
            {refreshList.map((item, index) => {
              return (
                <li key={index} style={InfiniteLiStyle}>
                  {item}
                </li>
              )
            })}
          </Infiniteloading>
        </ul>
      </Cell>
    </>
  )
}
export default App;
```
:::
### 自定義加載文案

:::demo
```tsx
import React, { useState, useEffect } from "react";
import { Cell, Infiniteloading } from '@nutui/nutui-react';

const InfiniteUlStyle = {
  height: '300px',
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden'
}

const InfiniteLiStyle = {
  marginTop: '10px',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center'
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
          <Infiniteloading
            containerId="customScroll"
            useWindow={false}
            loadTxt="loading"
            loadMoreTxt="沒有啦～"
            hasMore={customHasMore}
            loadMore={customLoadMore}
          >
            {customList.map((item, index) => {
              return (
                <li key={index} style={InfiniteLiStyle}>
                  {item}
                </li>
              )
            })}
          </Infiniteloading>
        </ul>
      </Cell>
    </>
  )
}
export default App;
```
:::

## API

### Props

| 參數         | 說明                             | 類型   | 默認值           |
|--------------|----------------------------------|--------|------------------|
| hasMore         | 是否還有更多數據               | Boolean | `true`                |
| threshold         | 距離底部多遠加載 | Number | `200`               |
| useWindow | 將滾動偵聽器添加到 window 否則偵聽組件的父節點     | Boolean | `true` |
| useCapture          | 是否使用捕獲模式 true 捕獲 false 冒泡                        | Boolean | `false`            |
| containerId          | 在 useWindow 屬性為 false 的時候，自定義設置節點ID                       | String | `''`            |
| loadMoreTxt          | “沒有更多數”據展示文案                        | String | `'哎呀，這裡是底部了啦'`            |
| isOpenRefresh        | 是否開啟下拉刷新                         | Boolean | `false`                |
| pullIcon        | 下拉刷新[圖標名稱](#/icon)                        | String | ''                |
| pullTxt        | 下拉刷新提示文案                         | String | `鬆手刷新`                |
| loadIcon        | 上拉加載[圖標名稱](#/icon)                       | String | ''            |
| loadTxt        | 上拉加載提示文案                         | String | `加載中...`                |

### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| loadMore `v1.3.4廢棄` | 繼續加載的回調函數 | done() |
| onLoadMore `v1.3.4` | 繼續加載的回調函數 | done() |
| scrollChange `v1.3.4廢棄` | 實時監聽滾動高度 | 滾動高度 |
| onScrollChange `v1.3.4` | 實時監聽滾動高度 | 滾動高度 |
| refresh `v1.3.4廢棄` | 下拉刷新事件回調 | done() |
| onRefresh `v1.3.4` | 下拉刷新事件回調 | done() |