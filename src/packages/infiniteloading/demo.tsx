import React, { useState, useEffect } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Infiniteloading } from './infiniteloading'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'
import './demo.scss'

interface T {
  '83913e71': string
  '84aa6bce': string
  eb4236fe: string
  '9ed40460': string
  '1254a90a': string
}
const InfiniteloadingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '83913e71': '刷新成功',
      '84aa6bce': '基础用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定义加载文案',
      '1254a90a': '没有啦~',
    },
    'zh-TW': {
      '83913e71': '刷新成功',
      '84aa6bce': '基礎用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定義加載文案',
      '1254a90a': '沒有啦~',
    },
    'en-US': {
      '83913e71': 'Refresh successfully',
      '84aa6bce': 'Basic usage',
      eb4236fe: 'Pull down to refresh',
      '9ed40460': 'custom loading text',
      '1254a90a': 'nope~',
    },
  })

  const [defultList, setDefultList] = useState<string[]>([])
  const [customList, setCustomList] = useState<string[]>([])
  const [refreshList, setRefreshList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [customHasMore, setCustomHasMore] = useState(true)
  const [refreshHasMore, setRefreshHasMore] = useState(true)

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

  const refresh = (done: () => void) => {
    setTimeout(() => {
      Toast.text(translated['83913e71'])
      done()
    }, 1000)
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defultList.push(`${i}`)
      customList.push(`${i}`)
      refreshList.push(`${i}`)
    }
    setDefultList([...defultList])
    setCustomList([...customList])
    setRefreshList([...refreshList])
  }

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <ul className="infiniteUl" id="scroll">
            <Infiniteloading
              containerId="scroll"
              useWindow={false}
              hasMore={hasMore}
              loadMore={loadMore}
            >
              {defultList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </Infiniteloading>
          </ul>
        </Cell>

        <h2>{translated.eb4236fe}</h2>
        <Cell>
          <ul className="infiniteUl" id="refreshScroll">
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
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </Infiniteloading>
          </ul>
        </Cell>

        <h2>{translated['9ed40460']}</h2>
        <Cell>
          <ul className="infiniteUl" id="customScroll">
            <Infiniteloading
              containerId="customScroll"
              useWindow={false}
              loadTxt="loading"
              loadMoreTxt={translated['1254a90a']}
              hasMore={customHasMore}
              loadMore={customLoadMore}
            >
              {customList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </Infiniteloading>
          </ul>
        </Cell>
      </div>
    </>
  )
}

export default InfiniteloadingDemo
