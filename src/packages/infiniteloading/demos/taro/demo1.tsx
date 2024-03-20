import React, { useState, useEffect, CSSProperties } from 'react'
import Taro from '@tarojs/taro'
import { Cell, InfiniteLoading } from '@nutui/nutui-react-taro'
import { More } from '@nutui/icons-react-taro'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
const InfiniteUlStyle: CSSProperties = {
  height: '500px',
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
    for (let i = curLen; i < curLen + 20; i++) {
      defaultList.push(`${i}`)
    }
    if (defaultList.length >= 100) {
      setHasMore(false)
    } else {
      setDefaultList([...defaultList])
    }
  }

  const refresh = async () => {
    await sleep(1000)
    Taro.showToast({
      title: '刷新成功',
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

  return (
    <>
      <Cell>
        <ul id="scrollDemo" style={InfiniteUlStyle}>
          <InfiniteLoading
            pullRefresh
            target="scrollDemo"
            hasMore={hasMore}
            onLoadMore={loadMore}
            onRefresh={refresh}
            pullingText={
              <>
                <img
                  alt=""
                  style={{ height: '26px', width: '36px' }}
                  src="https://img13.360buyimg.com/imagetools/jfs/t1/219180/19/37902/438/65fa8cbbF5278d022/5eabe69b64bba791.png"
                  className="nut-infinite-top-tips-icons"
                />
                松开刷新
              </>
            }
            loadingText={
              <>
                <img
                  alt=""
                  style={{ height: '24px', width: '24px' }}
                  src="https://img10.360buyimg.com/imagetools/jfs/t1/157510/3/39873/353/65fa8bfeF2627cb86/bd9e734d9fda59f2.png"
                  className="nut-infinite-bottom-tips-icons"
                />
                加载中
              </>
            }
            loadMoreText={
              <>
                <More className="nut-infinite-bottom-tips-icons" />
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
