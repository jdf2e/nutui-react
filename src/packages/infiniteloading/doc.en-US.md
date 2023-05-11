#  Infiniteloading

### Intro

Scrolling to the bottom of the list automatically loads more data.

### Install

```ts
// react
import { InfiniteLoading } from '@nutui/nutui-react';
```

### Basic Usage

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
      <h2>Basic Usage</h2>
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

### Pull to refresh

:::demo
```tsx
import React, { useState, useEffect } from "react";
import { Cell, Infiniteloading } from '@nutui/nutui-react';
import { Jd } from '@nutui/icons-react';

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
      Toast.show('Refresh success!')
      done()
    }, 1000)
  }

  return (
    <>
      <h2>Pull to refresh</h2>
      <Cell>
        <ul id="refreshScroll" style={InfiniteUlStyle}>
          <Infiniteloading
            pullIcon={<Jd />}
            loadIcon={<Jd />}
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
### Custom loading copywriting

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
      <h2>Custom loading copywriting</h2>
      <Cell>
        <ul id="customScroll" style={InfiniteUlStyle}>
          <Infiniteloading
            containerId="customScroll"
            useWindow={false}
            loadingText="loading"
            loadMoreText="none～"
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

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| hasMore         | Has more data               | boolean | `true`                |
| threshold         | The loadMore event will be Emitted when the distance between the scrollbar and the bottom is less than threshold | number| `200`               |
| useWindow | Add the scroll listener to the window or the parent of the listening component    | boolean | `true` |
| useCapture          | Whether to use capture mode                        | boolean | `false`            |
| containerId          | When useWindow is false, set the node ID by default                        | string | -            |
| loadMoreText `v2.0.0`         | “No more” text                        | string | `Oops, this is the bottom`            |
| isOpenRefresh        | Enable pull refresh                         | boolean | `false`                |
| pullIcon        | Pull refresh[icon name](#/icon)                        | ReactNode | -                |
| pullText        | Pull refresh text                        | string | `Loose to refresh`                |
| loadIcon        | Pull on loading[icon name](#/icon)                       | ReactNode | -            |
| loadingText`v2.0.0`        | Pull on loading text                         | string | `Loading...`                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| loadMore `v1.3.4 Abandon` | Emitted when continues to load | done() |
| onLoadMore `v1.3.4` | Emitted when continues to load | done() |
| scrollChange `v1.3.4 Abandon` | Real-time monitoring of roll height | height |
| onScrollChange `v1.3.4` | Real-time monitoring of roll height | height |
| refresh `v1.3.4 Abandon` | Emitted when pull refresh | done() |
| onRefresh `v1.3.4` | Emitted when pull refresh | done() |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-infiniteloading-bottom-color | `#c8c8c8` |
