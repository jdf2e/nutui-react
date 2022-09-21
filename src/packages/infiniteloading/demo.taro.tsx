import React, { useState, useEffect } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Infiniteloading, Cell } from '@/packages/nutui.react.taro'
import Taro from '@tarojs/taro'
import '@/packages/infiniteloading/demo.scss'

interface T {
  '83913e71': string
  '84aa6bce': string
  eb4236fe: string
  '1254a90a': string
}
const InfiniteloadingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '83913e71': '刷新成功',
      '84aa6bce': '基础演示',
      eb4236fe: '下拉刷新',
      '1254a90a': '没有啦~',
    },
    'zh-TW': {
      '83913e71': '刷新成功',
      '84aa6bce': '基礎演示',
      eb4236fe: '下拉刷新',
      '1254a90a': '沒有啦~',
    },
    'en-US': {
      '83913e71': 'Refresh successfully',
      '84aa6bce': 'Basic demo',
      eb4236fe: 'Pull down to refresh',
      '1254a90a': 'nope~',
    },
  })

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
        title: translated['83913e71'],
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
      <div className="demo demo-infinite">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <ul
            className="infiniteUl"
            id="scrollDemo"
            style={{ height: '500px' }}
          >
            <Infiniteloading
              pullIcon="JD"
              loadTxt="loading"
              loadMoreTxt="没有啦～"
              isOpenRefresh={true}
              containerId="scrollDemo"
              hasMore={hasMore}
              onLoadMore={loadMore}
              onRefresh={refresh}
            >
              {defaultList.map((item, index) => {
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
