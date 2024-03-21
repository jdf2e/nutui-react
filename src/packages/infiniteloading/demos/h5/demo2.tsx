import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading, Toast } from '@nutui/nutui-react'

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
const Demo2 = () => {
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

  const refreshLoadMore = async () => {
    await sleep(2000)
    const curLen = refreshList.length
    for (let i = curLen; i < curLen + 10; i++) {
      refreshList.push(`${i}`)
    }
    if (refreshList.length >= 30) {
      setRefreshHasMore(false)
    } else {
      setRefreshList([...refreshList])
    }
  }

  const refresh = async () => {
    await sleep(1000)
    Toast.show('刷新成功')
  }

  return (
    <>
      <Cell>
        <ul id="refreshScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            pullingText={
              <>
                <svg
                  width="36"
                  height="26"
                  viewBox="0 0 36 26"
                  fill="none"
                  className="nut-infinite-top-tips-icons"
                >
                  <path
                    d="M34.7243 10.965C32.842 8.94809 32.4297 5.92727 31.2018 4.90525C29.9738 3.88324 28.1722 5.51123 27.5089 6.46993C23.8429 3.88324 17.9809 4.00082 17.9809 4.00082C17.9809 4.00082 12.1458 3.88324 8.47083 6.46993C7.80754 5.51123 6.01488 3.88324 4.78691 4.90525C3.55894 5.92727 3.15559 8.94809 1.2733 10.965C-0.133943 12.4844 -0.250465 12.9276 0.323186 14.1305C0.887874 15.3334 4.40149 16.3283 6.88432 13.9496C7.21596 15.1887 10.0125 21.9991 17.9899 21.9991C25.9672 21.9991 28.7817 15.1887 29.1043 13.9496C31.5872 16.3283 35.1098 15.3334 35.6834 14.1305C36.2481 12.9276 36.1316 12.4844 34.7243 10.965Z"
                    fill="#818181"
                  />
                </svg>
                下拉刷新
              </>
            }
            loadingText={
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nut-infinite-bottom-tips-icons"
                >
                  <circle cx="2" cy="12" r="2" fill="#818181" />
                  <circle cx="12" cy="12" r="2" fill="#818181" />
                  <circle cx="22" cy="12" r="2" fill="#818181" />
                </svg>
                加载中
              </>
            }
            target="refreshScroll"
            pullRefresh
            hasMore={refreshHasMore}
            onLoadMore={refreshLoadMore}
            onRefresh={refresh}
          >
            {refreshList.map((item, index) => {
              return (
                <li className="infiniteLi" key={index} style={InfiniteLiStyle}>
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
export default Demo2
