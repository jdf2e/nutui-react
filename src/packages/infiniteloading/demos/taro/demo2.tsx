import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading, Toast } from '@nutui/nutui-react-taro'

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

  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }

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
    toastShow('刷新成功')
  }

  return (
    <>
      <Cell>
        <ul id="refreshScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            pullingText={
              <>
                <img
                  alt=""
                  style={{ height: '26px', width: '36px' }}
                  src="https://img13.360buyimg.com/imagetools/jfs/t1/219180/19/37902/438/65fa8cbbF5278d022/5eabe69b64bba791.png"
                  className="nut-infinite-top-tips-icons"
                />
                下拉刷新
              </>
            }
            loadingText={
              <>
                <img
                  alt=""
                  style={{ height: '24px', width: '24px' }}
                  src="https://img11.360buyimg.com/imagetools/jfs/t1/180248/35/42577/173/65fab7e9Fa868ae37/41e33477f960b5b2.png"
                  className="nut-infinite-bottom-tips-icons"
                />
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
        <Toast
          type="text"
          visible={show}
          content={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
      </Cell>
    </>
  )
}
export default Demo2
