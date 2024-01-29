import React, { useState, useEffect, useMemo } from 'react'
import Taro from '@tarojs/taro'
import { Loading, More } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { InfiniteLoading, Cell } from '@/packages/nutui.react.taro'
import '@/packages/infiniteloading/demo.scss'
import Header from '@/sites/components/header'
import { sleep } from '@/utils/sleep'
import { InfiniteLoadingStatusType } from './infiniteloading.taro'

interface T {
  '83913e71': string
  '84aa6bce': string
  eb4236fe: string
  '1254a90a': string
}

const InfiniteLoadingDemo = () => {
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
  const [status, setStatus] = useState<InfiniteLoadingStatusType>('load')
  const [reverse] = useState(false)

  useEffect(() => {
    init()
  }, [])

  const loadMore = async () => {
    await sleep(2000)
    const curLen = defaultList.length
    const defaultCacheList = [...defaultList]
    if (defaultCacheList.length >= 100) {
      setStatus('loadMore')
    } else {
      for (let i = curLen; i < curLen + 10; i++) {
        defaultCacheList.push(`${i}`)
      }
      setDefaultList(defaultCacheList)
    }
  }

  const refresh = async () => {
    await sleep(2000)
    Taro.showToast({
      title: translated['83913e71'],
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

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-infinite`}
      >
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <ul
            className="infiniteUl"
            id="scrollDemo"
            style={{ height: '500px' }}
          >
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
                  <Loading
                    className="nut-infiniteloading-bottom-tips-icons"
                    color={fillColor}
                  />
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

export default InfiniteLoadingDemo
