import React, { useState, useEffect } from 'react'
import { Jd } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { InfiniteLoading } from './infiniteloading'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'
import './demo.scss'

interface T {
  '83913e71': string
  '84aa6bce': string
  eb4236fe: string
  '9ed40460': string
  '1254a90a': string
  '1254a90n': string
}
const InfiniteloadingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '83913e71': '刷新成功',
      '84aa6bce': '基础用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定义加载文案',
      '1254a90a': '没有啦~',
      '1254a90n': '基于window滚动',
    },
    'zh-TW': {
      '83913e71': '刷新成功',
      '84aa6bce': '基礎用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定義加載文案',
      '1254a90a': '沒有啦~',
      '1254a90n': '基於window滾動',
    },
    'en-US': {
      '83913e71': 'Refresh successfully',
      '84aa6bce': 'Basic usage',
      eb4236fe: 'Pull down to refresh',
      '9ed40460': 'custom loading text',
      '1254a90a': 'nope~',
      '1254a90n': 'window scroll',
    },
  })

  const [defaultList, setDefaultList] = useState<string[]>([])
  const [customList, setCustomList] = useState<string[]>([])
  const [refreshList, setRefreshList] = useState<string[]>([])
  const [windowList, setWindowList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [customHasMore, setCustomHasMore] = useState(true)
  const [refreshHasMore, setRefreshHasMore] = useState(true)
  const [windownHasMore, setWindowHasMore] = useState(true)

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

  const windowLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = windowList.length
      for (let i = curLen; i < curLen + 10; i++) {
        windowList.push(`${i}`)
      }
      if (windowList.length >= 300) {
        setWindowHasMore(false)
      } else {
        setWindowList([...windowList])
      }
      done()
    }, 500)
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      Toast.show(translated['83913e71'])
      done()
    }, 1000)
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defaultList.push(`${i}`)
      customList.push(`${i}`)
      refreshList.push(`${i}`)
      windowList.push(`${i}`)
    }
    setDefaultList([...defaultList])
    setCustomList([...customList])
    setRefreshList([...refreshList])
    setRefreshList([...windowList])
  }

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <ul className="infiniteUl" id="scroll">
            <InfiniteLoading
              target="scroll"
              hasMore={hasMore}
              onLoadMore={loadMore}
            >
              {defaultList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated.eb4236fe}</h2>
        <Cell>
          <ul className="infiniteUl" id="refreshScroll">
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
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated['9ed40460']}</h2>
        <Cell>
          <ul className="infiniteUl" id="customScroll">
            <InfiniteLoading
              target="customScroll"
              loadingText="loading"
              loadMoreText={translated['1254a90a']}
              hasMore={customHasMore}
              onLoadMore={customLoadMore}
            >
              {customList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated['1254a90n']}</h2>
        <Cell>
          <ul className="infiniteUl2">
            <InfiniteLoading
              loadingText="loading"
              loadMoreText={translated['1254a90a']}
              hasMore={windownHasMore}
              onLoadMore={windowLoadMore}
            >
              {windowList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>
      </div>
    </>
  )
}

export default InfiniteloadingDemo
