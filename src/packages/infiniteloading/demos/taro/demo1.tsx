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
