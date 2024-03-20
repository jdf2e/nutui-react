import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react'

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

  const renderJoySvg = (() => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="nut-infinite-bottom-tips-icons"
      >
        <g clipPath="url(#clip0_878_2529)">
          <path
            d="M23.1507 10.6435C21.8958 9.29889 21.6209 7.28491 20.8022 6.60353C19.9835 5.92216 18.7824 7.00753 18.3402 7.6467C15.896 5.92216 11.9879 6.00054 11.9879 6.00054C11.9879 6.00054 8.09759 5.92216 5.6475 7.6467C5.20528 7.00753 4.01012 5.92216 3.19143 6.60353C2.37274 7.28491 2.10383 9.29889 0.848906 10.6435C-0.0892994 11.6566 -0.166985 11.952 0.215468 12.754C0.591945 13.556 2.93447 14.2193 4.58977 12.6334C4.81088 13.4595 6.67534 18 11.9938 18C17.3123 18 19.1887 13.4595 19.4039 12.6334C21.0592 14.2193 23.4077 13.556 23.7901 12.754C24.1666 11.952 24.0889 11.6566 23.1507 10.6435Z"
            fill="#818181"
          />
        </g>
      </svg>
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
            loadingText={
              <>
                {renderJoySvg}
                加载中
              </>
            }
            loadMoreText={
              <>
                {renderJoySvg}
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
