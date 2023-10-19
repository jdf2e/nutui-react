# InfiniteLoading

## Intro

Scrolling to the bottom of the list automatically loads more data.

## Install

```tsx
import { InfiniteLoading } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

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
      <h2>Basic Usage</h2>
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

### Pull to refresh

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
      Toast.show('Refresh success!')
      done()
    }, 1000)
  }

  return (
    <>
      <h2>Pull to refresh</h2>
      <Cell>
        <ul id="refreshScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            pullingText={
              <>
                <Jd />
                <span style={{ fontSize: '10px' }}>松开刷新</span>
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

### Custom loading copywriting

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
      <h2>Custom loading copywriting</h2>
      <Cell>
        <ul id="customScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="customScroll"
            loadingText="loading"
            loadMoreText="none～"
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


### Window Scroll

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
      <h2>Custom loading copywriting</h2>
      <Cell>
        <ul id="customScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            loadingText="loading"
            loadMoreText="none～"
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| hasMore | Has more data | `boolean` | `true` |
| threshold | The loadMore event will be Emitted when the distance between the scrollbar and the bottom is less than threshold | `number` | `200` |
| capture | Whether to use capture mode | `boolean` | `false` |
| target | Get the target element to monitor | `string` | `-` |
| loadMoreText | “No more” text | `string` | `Oops, here's the bottom` |
| pullRefresh | Enable pull refresh | `boolean` | `false` |
| pullingText | Pull refresh text | `ReactNode` | `Let go and refresh` |
| loadingText | Pull on loading text | `ReactNode` | `loading...` |
| onRefresh | Pull down refresh event callback | `(param: () => void) => void` | `-` |
| onLoadMore | Callback function to continue loading | `(param: () => void) => void` | `-` |
| onScroll | Monitor scroll height in real time | `(param: number) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-infiniteloading-bottom-color | Swipe to bottom text color | `#c8c8c8` |