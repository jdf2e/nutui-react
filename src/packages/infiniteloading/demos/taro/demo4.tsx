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
  margin: '10px 10px 0',
  fontSize: '14px',
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center',
  backgroundColor: '#FFF',
}
const Demo4 = () => {
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

  const customLoadMore = async () => {
    await sleep(2000)
    const curLen = customList.length
    for (let i = curLen; i < curLen + 10; i++) {
      customList.push(`${i}`)
    }
    if (customList.length >= 30) {
      setCustomHasMore(false)
    } else {
      setCustomList([...customList])
    }
  }

  const renderJoyImg = (() => {
    return (
      <img
        alt=""
        style={{ height: '24px', width: '24px' }}
        src="https://img13.360buyimg.com/imagetools/jfs/t1/235005/5/15288/348/65fabd46F80f7367e/09fb5d99d07bee66.png"
        className="nut-infinite-bottom-tips-icons"
      />
    )
  })()

  return (
    <>
      <Cell>
        <ul id="primaryScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="primaryScroll"
            type="primary"
            loadingText={<>{renderJoyImg}加载中</>}
            loadMoreText={
              <>
                {renderJoyImg}
                没有更多了
              </>
            }
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
export default Demo4
